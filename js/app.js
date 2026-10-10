(function () {
  'use strict';

  const { LADDER, CATEGORIES, LOGISTICS, TRIGGERS, SOURCES, BASELINE } = window.Config;
  const ASSESSMENT = window.Assessment || null;
  const S = window.Scoring;

  const STORAGE_KEY = 'prewarning.v1';
  const TREND_DAYS = 14;
  const AMBER_WEEK_DAYS = 7;
  const SCHEMA_VERSION = 1;

  const DEFAULT_PLAN = {
    routes: [
      'Primary: fly Zurich / Basel / Geneva → Dublin or Belfast, then drive to Crolly.',
      'Fallback: drive Valbirse → Cherbourg, ferry to Rosslare or Dublin, drive to Crolly.',
      'Private flying: check NOTAMs and EUROCONTROL first; Carrickfinn (Donegal Airport).',
    ].join('\n'),
    contacts: '',
    checklist: [
      'Passports valid for 6+ months',
      'Cash in EUR and CHF',
      'Savings in accessible accounts',
      'Car fuelled, documents for France and Ireland',
      'Medications for 4 weeks',
      'Printed copy of this page',
    ].join('\n'),
  };

  // ---------- State ----------

  function baselineState(now) {
    const today = S.dayKey(now);
    const categories = {};
    for (const c of CATEGORIES) {
      const b = BASELINE.categories[c.id] || { status: 'green', note: '' };
      categories[c.id] = { status: b.status, note: b.note, sources: '', checkedAt: null };
    }
    const state = {
      version: SCHEMA_VERSION,
      categories,
      logistics: { status: BASELINE.logistics.status, note: BASELINE.logistics.note, sources: '', checkedAt: null },
      ladder: BASELINE.ladder,
      triggers: {},
      plan: { ...DEFAULT_PLAN },
      history: [],
      log: [],
    };
    state.log.push({ at: new Date(now).toISOString(), text: `Started from the ${BASELINE.asOf} baseline.` });
    recordSnapshot(state, today);
    state.log.push({ at: new Date(now).toISOString(), text: describeSnapshot(state.history[0]) });
    return state;
  }

  let storageOk = true;

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return normalise(JSON.parse(raw));
    } catch (e) {
      storageOk = false;
    }
    return baselineState(Date.now());
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      storageOk = true;
    } catch (e) {
      storageOk = false;
    }
    document.getElementById('storage-warning').hidden = storageOk;
  }

  // Fill gaps so imported or older data does not break rendering.
  function normalise(data) {
    const fresh = baselineState(Date.now());
    if (!data || typeof data !== 'object' || !data.categories) return fresh;
    const out = { ...fresh, ...data };
    out.categories = { ...fresh.categories };
    for (const c of CATEGORIES) {
      out.categories[c.id] = { ...fresh.categories[c.id], ...(data.categories[c.id] || {}) };
    }
    out.logistics = { ...fresh.logistics, ...(data.logistics || {}) };
    out.plan = { ...fresh.plan, ...(data.plan || {}) };
    out.triggers = data.triggers || {};
    out.history = Array.isArray(data.history) ? data.history : fresh.history;
    out.log = Array.isArray(data.log) ? data.log : fresh.log;
    if (!Number.isInteger(out.ladder) || out.ladder < 0 || out.ladder > 5) out.ladder = BASELINE.ladder;
    return out;
  }

  function categoryStates(st) {
    const out = {};
    for (const c of CATEGORIES) out[c.id] = st.categories[c.id].status;
    return out;
  }

  function computeOverall(st) {
    return S.overallStatus(CATEGORIES, categoryStates(st));
  }

  // One snapshot per calendar day; later changes the same day overwrite it.
  function recordSnapshot(st, today) {
    const snap = {
      date: today,
      overall: computeOverall(st).status,
      logistics: st.logistics.status,
      ladder: st.ladder,
      categories: categoryStates(st),
    };
    const i = st.history.findIndex((h) => h.date === today);
    if (i >= 0) st.history[i] = snap;
    else st.history.push(snap);
    return snap;
  }

  function describeSnapshot(snap) {
    return `Threat ${snap.overall}, departure window ${snap.logistics}, ladder level ${snap.ladder}.`;
  }

  // Record today's snapshot and log changes to the headline values.
  function commit(change) {
    const now = new Date();
    const before = latestHeadline();
    const snap = recordSnapshot(state, S.dayKey(now));
    const changes = [];
    if (before.overall !== snap.overall) changes.push(`Threat ${before.overall} → ${snap.overall}`);
    if (before.logistics !== snap.logistics) changes.push(`Departure window ${before.logistics} → ${snap.logistics}`);
    if (before.ladder !== snap.ladder) changes.push(`Ladder ${before.ladder} → ${snap.ladder}`);
    if (change) changes.unshift(change);
    if (changes.length) state.log.push({ at: now.toISOString(), text: changes.join('. ') + '.' });
    headline = { overall: snap.overall, logistics: snap.logistics, ladder: snap.ladder };
    save();
    render();
  }

  let headline = null;
  function latestHeadline() {
    if (!headline) {
      headline = { overall: computeOverall(state).status, logistics: state.logistics.status, ladder: state.ladder };
    }
    return headline;
  }

  // ---------- Rendering helpers ----------

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === null || v === undefined || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else if (v === true) node.setAttribute(k, '');
      else node.setAttribute(k, v);
    }
    for (const child of children.flat()) {
      if (child === null || child === undefined || child === false) continue;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return node;
  }

  function pill(status) {
    return el('span', { class: `pill ${status}`, text: status });
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function formatDateTime(iso) {
    const d = new Date(iso);
    return d.toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  // ---------- Triggers ----------

  function activeTriggers(today) {
    const streak = S.elevatedStreakDays(state.history, today);
    return TRIGGERS.filter((t) => (t.auto ? streak > AMBER_WEEK_DAYS : !!state.triggers[t.id]));
  }

  // ---------- Render ----------

  let openCategory = null;

  function render() {
    const now = new Date();
    const today = S.dayKey(now);
    const overall = computeOverall(state);
    const streak = S.elevatedStreakDays(state.history, today);

    // Tiles
    setTile('tile-overall', overall.status);
    document.getElementById('overall-value').textContent = overall.status;
    document.getElementById('overall-note').textContent =
      overall.status === 'green' ? 'No high-weight category above green.' :
      streak > 0 ? `${overall.status === 'red' ? 'Amber or worse' : 'Elevated'} for ${streak} day${streak === 1 ? '' : 's'}. ${overall.reasons[0]}.` :
      overall.reasons[0] + '.';

    setTile('tile-logistics', state.logistics.status);
    document.getElementById('logistics-value').textContent = state.logistics.status;
    document.getElementById('logistics-note').textContent = LOGISTICS.reading[state.logistics.status];

    const rung = LADDER[state.ladder];
    const ladderTile = document.getElementById('tile-ladder');
    ladderTile.classList.remove('is-green', 'is-amber', 'is-red');
    ladderTile.classList.add(state.ladder >= 3 ? 'is-red' : state.ladder === 2 ? 'is-amber' : 'is-green');
    document.getElementById('ladder-value').textContent = `${rung.level} of 5`;
    document.getElementById('ladder-note').textContent = rung.situation + '.';

    // Guidance line
    let guidance = rung.action;
    if (state.logistics.status === 'red' && overall.status !== 'red') {
      guidance += ' The departure window is closing faster than the threat is rising.';
    }
    document.getElementById('guidance').textContent = guidance;

    // Last review
    const checks = [state.logistics.checkedAt, ...CATEGORIES.map((c) => state.categories[c.id].checkedAt)].filter(Boolean).sort();
    document.getElementById('last-review').textContent = checks.length
      ? `Last check ${formatDateTime(checks[checks.length - 1])}`
      : 'Not yet checked against live sources';

    renderAlert(today);
    renderCategories(today, now);
    renderLadder();
    renderTriggers(today, streak);
    renderPlan();
    renderLog();
  }

  function setTile(id, status) {
    const t = document.getElementById(id);
    t.classList.remove('is-green', 'is-amber', 'is-red');
    t.classList.add(`is-${status}`);
  }

  function renderAlert(today) {
    const box = document.getElementById('alert');
    const active = activeTriggers(today);
    box.replaceChildren();
    if (!active.length) {
      box.hidden = true;
      return;
    }
    const shelter = active.some((t) => t.action === 'shelter');
    const leave = active.some((t) => t.action === 'leave');
    const leaveOrShelter = active.some((t) => t.action === 'leave-or-shelter');
    let head;
    if (shelter) head = 'Shelter in place. Do not travel.';
    else if (leave) head = 'Trigger met: leave.';
    else if (leaveOrShelter) head = 'Trigger met: leave if transport is normal, otherwise prepare to shelter.';
    else head = 'Review the plan.';
    box.className = 'alert' + (!shelter && !leave && !leaveOrShelter ? ' review' : '');
    box.append(
      el('strong', { text: head }),
      el('span', { text: 'You decided this in advance. Act on it rather than re-debating it.' }),
      el('ul', null, active.map((t) => el('li', null, `${t.text}: ${t.detail}`)))
    );
    box.hidden = false;
  }

  function renderCategories(today, now) {
    const wrap = document.getElementById('categories');
    // Keep whichever card is open across re-renders.
    if (wrap.children.length) {
      const openNow = wrap.querySelector('details[open]');
      openCategory = openNow ? openNow.dataset.id : null;
    }
    wrap.replaceChildren();
    for (const c of CATEGORIES) {
      wrap.append(categoryCard(c, state.categories[c.id], (h) => h.categories && h.categories[c.id], today, now));
    }
    wrap.append(categoryCard(LOGISTICS, state.logistics, (h) => h.logistics, today, now));
  }

  function categoryCard(cat, entry, pick, today, now) {
    const isLogistics = cat.id === LOGISTICS.id;
    const points = S.trend(state.history, pick, today, TREND_DAYS);
    const dir = S.direction(points);
    const due = S.isDue(entry.checkedAt, cat.cadence, now);

    const weightLabel = isLogistics ? 'shown separately' : cat.background ? 'background only' : `${cat.weight} weight`;
    const meta = el('span', { class: 'cat-meta' },
      `${weightLabel} · checked ${cat.cadence}`,
      dir !== 'steady' ? ` · ${dir} over ${TREND_DAYS} days` : '',
      ' · ',
      due ? el('span', { class: 'due', text: entry.checkedAt ? 'check due' : 'not checked yet' }) : `checked ${formatDate(entry.checkedAt)}`
    );

    const trend = el('span', { class: 'trend', title: `Last ${TREND_DAYS} days`, 'aria-hidden': 'true' },
      points.map((p) => el('i', { class: p.status || '', title: `${p.date}: ${p.status || 'no data'}` }))
    );

    const summary = el('summary', null,
      el('span', { class: 'cat-name', text: cat.name }),
      el('span', { class: 'cat-pill' }, pill(entry.status)),
      meta,
      trend
    );

    // Body
    const error = el('p', { class: 'field-error', hidden: true });
    const sourcesInput = el('textarea', { rows: 3, placeholder: 'One source per line (URL or name)' });
    sourcesInput.value = entry.sources || '';
    const noteInput = el('textarea', { rows: 3, placeholder: 'What you saw, and why this reading' });
    noteInput.value = entry.note || '';

    const name = `status-${cat.id}`;
    const choices = el('div', { class: 'status-choice', role: 'radiogroup', 'aria-label': `${cat.name} status` },
      S.STATUSES.map((s) => {
        const disabled = cat.maxStatus && S.rank(s) > S.rank(cat.maxStatus);
        const input = el('input', { type: 'radio', name, value: s, checked: entry.status === s, disabled });
        input.addEventListener('change', () => {
          if (s === 'red' && !S.canSetRed(sourcesInput.value)) {
            input.checked = false;
            const cur = choices.querySelector(`input[value="${entry.status}"]`);
            if (cur) cur.checked = true;
            error.textContent = 'Two-source rule: add at least two independent sources (one per line) before setting red.';
            error.hidden = false;
            sourcesInput.focus();
            return;
          }
          error.hidden = true;
          const prev = entry.status;
          entry.status = s;
          entry.note = noteInput.value;
          entry.sources = sourcesInput.value;
          entry.checkedAt = new Date().toISOString();
          commit(`${cat.name} ${prev} → ${s}`);
        });
        return el('label', null, input, el('span', { text: s }));
      })
    );

    const persistText = () => {
      entry.note = noteInput.value;
      entry.sources = sourcesInput.value;
      // A red reading cannot survive its sources being removed.
      if (entry.status === 'red' && !S.canSetRed(entry.sources)) {
        error.textContent = 'This reading is red with fewer than two sources. Add another source or lower the status.';
        error.hidden = false;
      } else {
        error.hidden = true;
      }
      save();
    };
    noteInput.addEventListener('change', persistText);
    sourcesInput.addEventListener('change', persistText);

    const checkedBtn = el('button', { type: 'button', text: 'Checked, no change' });
    checkedBtn.addEventListener('click', () => {
      entry.note = noteInput.value;
      entry.sources = sourcesInput.value;
      entry.checkedAt = new Date().toISOString();
      commit(null);
    });

    const body = el('div', { class: 'cat-body' },
      el('h3', { text: 'Watch for' }),
      el('ul', null, cat.watch.map((w) => el('li', { text: w }))),
      el('h3', { text: 'How to read it' }),
      el('div', { class: 'reading' },
        S.STATUSES.filter((s) => !(cat.maxStatus && S.rank(s) > S.rank(cat.maxStatus)))
          .flatMap((s) => [pill(s), el('span', { text: cat.reading[s] })])
      ),
      el('h3', { text: 'Current reading' }),
      choices,
      error,
      el('div', { class: 'two-col' },
        el('label', null, 'Notes', noteInput),
        el('label', null, 'Sources', sourcesInput)
      ),
      el('div', { class: 'cat-actions' },
        checkedBtn,
        entry.checkedAt ? `Last checked ${formatDateTime(entry.checkedAt)}` : 'Not yet checked against live sources'
      )
    );

    return el('details', { class: 'cat', 'data-id': cat.id, open: openCategory === cat.id }, summary, body);
  }

  function renderLadder() {
    const list = document.getElementById('ladder');
    list.replaceChildren(
      ...LADDER.map((r) => {
        const input = el('input', { type: 'radio', name: 'ladder', value: r.level, checked: state.ladder === r.level });
        input.addEventListener('change', () => {
          state.ladder = r.level;
          state.ladderSetAt = new Date().toISOString();
          commit(null);
        });
        return el('li', null,
          el('label', null,
            input,
            el('span', { class: 'lvl', text: r.level }),
            el('span', null,
              el('span', { text: r.situation }),
              el('br'),
              el('span', { class: 'lead', text: `Lead time to general war: ${r.lead}. ` }),
              el('span', { class: 'act', text: r.action })
            )
          )
        );
      })
    );
  }

  function renderTriggers(today, streak) {
    const list = document.getElementById('triggers');
    const conventional = state.categories.conventional.status;
    const posture = state.categories.posture.status;
    list.replaceChildren(
      ...TRIGGERS.map((t) => {
        const met = t.auto ? streak > AMBER_WEEK_DAYS : !!state.triggers[t.id];
        const input = el('input', { type: 'checkbox', checked: met, disabled: !!t.auto });
        if (!t.auto) {
          input.addEventListener('change', () => {
            state.triggers[t.id] = input.checked;
            commit(`Trigger ${input.checked ? 'met' : 'cleared'}: ${t.text}`);
          });
        }
        let extra = '';
        if (t.auto) extra = ` Set automatically: currently ${streak} day${streak === 1 ? '' : 's'} at amber or worse.`;
        if (t.id === 'embassies' && S.rank(conventional) < 1 && S.rank(posture) < 1) {
          extra = ' Military indicators are currently green, so on its own this is a review, not a departure.';
        }
        const actionLabel = { review: 'Review', leave: 'Leave', 'leave-or-shelter': 'Leave or shelter', shelter: 'Shelter' }[t.action];
        return el('li', { class: [met ? 'met' : '', t.action === 'review' ? 'review' : ''].join(' ').trim() },
          el('label', null,
            input,
            el('span', { text: t.text }),
            el('span', { class: 't-action' }, el('b', { text: actionLabel + '.' }), t.detail === actionLabel + '.' ? '' : ' ' + t.detail, extra)
          )
        );
      })
    );
  }

  function renderPlan() {
    const fields = { routes: 'plan-routes', contacts: 'plan-contacts', checklist: 'plan-checklist' };
    const print = document.getElementById('print-plan');
    print.replaceChildren();
    for (const [key, id] of Object.entries(fields)) {
      const ta = document.getElementById(id);
      if (document.activeElement !== ta) ta.value = state.plan[key] || '';
      const label = ta.parentElement.firstChild.textContent.trim();
      print.append(el('h3', { text: label }), el('div', { text: state.plan[key] || '(none)' }));
    }
  }

  function renderLog() {
    const list = document.getElementById('log');
    const entries = [...state.log].reverse();
    list.replaceChildren(
      ...entries.map((e) => el('li', null, el('time', { datetime: e.at, text: formatDateTime(e.at) }), el('span', { text: e.text })))
    );
  }

  function renderSources() {
    const body = document.getElementById('sources');
    body.replaceChildren(
      ...SOURCES.map((s) =>
        el('tr', null,
          el('td', null, s.url ? el('a', { href: s.url, target: '_blank', rel: 'noopener noreferrer', text: s.name }) : s.name),
          el('td', { text: s.covers }),
          el('td', { text: s.notes })
        )
      )
    );
  }

  // ---------- Wiring ----------

  function wire() {
    for (const [key, id] of Object.entries({ routes: 'plan-routes', contacts: 'plan-contacts', checklist: 'plan-checklist' })) {
      document.getElementById(id).addEventListener('change', (e) => {
        state.plan[key] = e.target.value;
        save();
        renderPlan();
      });
    }

    document.getElementById('btn-export').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const a = el('a', { href: URL.createObjectURL(blob), download: `prewarning-${S.dayKey(new Date())}.json` });
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });

    document.getElementById('btn-import').addEventListener('change', async (e) => {
      const file = e.target.files[0];
      e.target.value = '';
      if (!file) return;
      try {
        const data = JSON.parse(await file.text());
        if (!data || !data.categories) throw new Error('missing categories');
        state = normalise(data);
        headline = null;
        commit('Imported data from file');
      } catch (err) {
        alert(`Could not import that file: ${err.message}`);
      }
    });

    document.getElementById('btn-print').addEventListener('click', () => window.print());

    document.getElementById('btn-reset').addEventListener('click', () => {
      if (!confirm('Reset everything to the baseline? History, notes and plan will be lost. Export first if you want to keep them.')) return;
      state = baselineState(Date.now());
      headline = null;
      save();
      render();
    });
  }

  // A researched assessment published in js/assessment.js. Applied once per
  // assessment date, and only to readings the user has not updated since.
  function applyAssessment(st) {
    if (!ASSESSMENT) return false;
    const at = ASSESSMENT.issuedAt
      ? new Date(ASSESSMENT.issuedAt).toISOString()
      : new Date(ASSESSMENT.date + 'T12:00:00').toISOString();
    if (st.appliedAssessment && st.appliedAssessment >= at) return false;
    const newer = (entry) => !entry.checkedAt || entry.checkedAt < at;
    const apply = (entry, a) => {
      if (!a || !newer(entry)) return;
      entry.status = a.status;
      entry.note = a.note;
      entry.sources = (a.sources || []).join('\n');
      entry.checkedAt = at;
    };
    for (const c of CATEGORIES) apply(st.categories[c.id], ASSESSMENT.categories[c.id]);
    apply(st.logistics, ASSESSMENT.logistics);
    if (Number.isInteger(ASSESSMENT.ladder) && (!st.ladderSetAt || st.ladderSetAt < at)) {
      st.ladder = ASSESSMENT.ladder;
      st.ladderSetAt = at;
    }
    st.appliedAssessment = at;
    return true;
  }

  let state = load();
  latestHeadline();
  if (applyAssessment(state)) {
    commit(`Applied researched assessment of ${ASSESSMENT.date}`);
  }
  // Carry the last reading forward to today so trends and streaks stay current.
  recordSnapshot(state, S.dayKey(new Date()));
  save();
  wire();
  renderSources();
  render();
})();
