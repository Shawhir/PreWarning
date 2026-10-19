// Pure helpers for scripts/fetch-signals.js. Kept separate so they can be
// unit tested without network access.
'use strict';

const DAY_MS = 24 * 60 * 60 * 1000;

// ---------- Markets ----------

// Thresholds for "beyond normal volatility" (FRAMEWORK.md §3.7).
// level: absolute value; move: % change over the lookback window.
const MARKETS = [
  { id: 'vix', name: 'VIX', yahoo: '%5EVIX', unit: '', level: { amber: 25, red: 35 } },
  { id: 'gold', name: 'Gold', yahoo: 'GC%3DF', unit: '$/oz', move: { amber: 5, red: 10 } },
  { id: 'brent', name: 'Brent oil', yahoo: 'BZ%3DF', unit: '$/bbl', move: { amber: 10, red: 20 } },
  // EUR/CHF falling means the franc is strengthening (safe-haven demand).
  { id: 'eurchf', name: 'EUR/CHF', ecb: 'CHF', unit: '', move: { amber: -2, red: -4 } },
];

const LOOKBACK_DAYS = 5;

// series: [{ t: ms, v: number }] sorted ascending.
function changeOver(series, days, now) {
  if (!series.length) return null;
  const last = series[series.length - 1];
  const cutoff = (now || last.t) - days * DAY_MS;
  let base = null;
  for (const p of series) {
    if (p.t <= cutoff) base = p;
    else break;
  }
  if (!base) base = series[0];
  if (!base.v) return null;
  return ((last.v - base.v) / base.v) * 100;
}

function marketStatus(def, value, changePct) {
  if (def.level && value !== null && value !== undefined) {
    if (value >= def.level.red) return 'red';
    if (value >= def.level.amber) return 'amber';
    return 'green';
  }
  if (def.move && changePct !== null && changePct !== undefined) {
    const { amber, red } = def.move;
    // Negative thresholds watch for falls, positive ones for rises.
    const x = amber < 0 ? -changePct : Math.abs(changePct);
    if (x >= Math.abs(red)) return 'red';
    if (x >= Math.abs(amber)) return 'amber';
    return 'green';
  }
  return null;
}

// "Crisis-level moves across several markets at once" → red needs two reds.
function marketsOverall(items) {
  const statuses = items.map((i) => i.status).filter(Boolean);
  if (!statuses.length) return null;
  const reds = statuses.filter((s) => s === 'red').length;
  if (reds >= 2) return 'red';
  if (statuses.some((s) => s === 'red' || s === 'amber')) return 'amber';
  return 'green';
}

function parseYahooChart(json) {
  const r = json && json.chart && json.chart.result && json.chart.result[0];
  if (!r || !r.timestamp) return [];
  const closes = (r.indicators && r.indicators.quote && r.indicators.quote[0] && r.indicators.quote[0].close) || [];
  return r.timestamp
    .map((ts, i) => ({ t: ts * 1000, v: closes[i] }))
    .filter((p) => typeof p.v === 'number' && Number.isFinite(p.v));
}

// ECB SDMX csvdata: header row includes TIME_PERIOD and OBS_VALUE.
function parseEcbCsv(text) {
  const lines = String(text).trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const head = splitCsv(lines[0]);
  const ti = head.indexOf('TIME_PERIOD');
  const vi = head.indexOf('OBS_VALUE');
  if (ti < 0 || vi < 0) return [];
  return lines
    .slice(1)
    .map((l) => splitCsv(l))
    .map((c) => ({ t: Date.parse(c[ti] + 'T00:00:00Z'), v: parseFloat(c[vi]) }))
    .filter((p) => Number.isFinite(p.t) && Number.isFinite(p.v))
    .sort((a, b) => a.t - b.t);
}

function splitCsv(line) {
  const out = [];
  let cur = '';
  let q = false;
  for (const ch of line) {
    if (ch === '"') q = !q;
    else if (ch === ',' && !q) {
      out.push(cur);
      cur = '';
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

// ---------- Travel advice ----------

// Irish DFA security levels, most to least severe.
const ADVICE_LEVELS = [
  'Do not travel',
  'Avoid non-essential travel',
  'High degree of caution',
  'Normal precautions',
];

function htmlToText(html) {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

// Main content only, so header/footer/cookie churn does not count as change.
function mainText(html) {
  const m = String(html).match(/<main[\s\S]*?<\/main>/i);
  return htmlToText(m ? m[0] : html);
}

// The level stated nearest after "Security status", else the first one found.
function adviceLevel(text) {
  const lower = text.toLowerCase();
  const anchor = lower.indexOf('security status');
  const from = anchor >= 0 ? anchor : 0;
  let best = null;
  for (const level of ADVICE_LEVELS) {
    const i = lower.indexOf(level.toLowerCase(), from);
    if (i >= 0 && (best === null || i < best.i)) best = { i, level };
  }
  return best ? best.level : null;
}

function hashText(text) {
  // FNV-1a, enough to notice a change.
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

// Text used for change detection: digits and long tokens (dates, times,
// counters, session ids) are dropped so routine page churn does not count.
function stableText(text) {
  return String(text)
    .replace(/\b[\w-]{24,}\b/g, ' ')
    .replace(/\d+/g, '#')
    .replace(/\s+/g, ' ')
    .trim();
}

// Carry change history across runs. prev is last run's entry (or undefined).
// A new page hash only counts as a change once two consecutive runs agree,
// so content that varies on every load is never flagged. A change in the
// stated security level counts at once.
function mergeAdvice(prev, current, nowIso) {
  if (!current.ok) {
    return prev ? { ...prev, ok: false, error: current.error, checkedAt: nowIso } : current;
  }
  if (!prev || !prev.hash) {
    return { ...current, checkedAt: nowIso, firstSeenAt: nowIso, changedAt: null, previousLevel: null, pendingHash: null };
  }
  const out = {
    ...current,
    hash: prev.hash,
    checkedAt: nowIso,
    firstSeenAt: prev.firstSeenAt || null,
    changedAt: prev.changedAt || null,
    previousLevel: prev.previousLevel || null,
    pendingHash: null,
  };
  const levelChanged = !!(prev.level && current.level && prev.level !== current.level);
  if (current.hash === prev.hash) return out;
  if (current.hash === prev.pendingHash || levelChanged) {
    out.hash = current.hash;
    out.changedAt = nowIso;
    if (levelChanged) out.previousLevel = prev.level;
    return out;
  }
  out.pendingHash = current.hash;
  return out;
}

// ---------- Forecasts (Metaculus) ----------

// Probability of a binary question from the Metaculus posts API, tolerant of
// the aggregation shape. Returns { now, weekAgo } in 0..1, or null.
function metaculusProbability(post, nowMs) {
  const q = post && (post.question || post);
  const agg = q && q.aggregations;
  const rw = agg && (agg.recency_weighted || agg.unweighted);
  if (!rw) return null;
  const centre = (e) => (e && Array.isArray(e.centers) ? e.centers[0] : e && typeof e.center === 'number' ? e.center : null);
  const latest = centre(rw.latest);
  if (latest === null || latest === undefined) return null;
  let weekAgo = null;
  if (Array.isArray(rw.history)) {
    const cutoff = (nowMs - 7 * DAY_MS) / 1000;
    for (const e of rw.history) {
      if (e.start_time <= cutoff) weekAgo = centre(e);
    }
  }
  return { now: latest, weekAgo };
}

// Keep a small daily series per forecast so jumps can be computed even
// when the API returns no history.
function mergeSeries(prevSeries, value, todayKey, maxDays) {
  const series = (prevSeries || []).filter((p) => p.d !== todayKey);
  series.push({ d: todayKey, v: value });
  series.sort((a, b) => (a.d < b.d ? -1 : 1));
  return series.slice(-(maxDays || 30));
}

function valueDaysAgo(series, todayKey, days) {
  const cutoff = new Date(Date.parse(todayKey + 'T00:00:00Z') - days * DAY_MS).toISOString().slice(0, 10);
  let v = null;
  for (const p of series) if (p.d <= cutoff) v = p.v;
  return v;
}

// A jump is a move of at least 5 percentage points, or a doubling from a
// low base, within a week.
function isJump(now, before) {
  if (now === null || before === null || before === undefined) return false;
  const diff = now - before;
  return Math.abs(diff) >= 0.05 || (before > 0 && before < 0.1 && now >= before * 2 && diff >= 0.01);
}

// ---------- RSS ----------

function parseRss(xml, limit) {
  const items = [];
  const re = /<item[\s>][\s\S]*?<\/item>|<entry[\s>][\s\S]*?<\/entry>/gi;
  let m;
  while ((m = re.exec(xml)) && items.length < (limit || 5)) {
    const block = m[0];
    const tag = (name) => {
      const t = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
      return t ? htmlToText(t[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')) : null;
    };
    let link = tag('link');
    if (!link) {
      const l = block.match(/<link[^>]*href="([^"]+)"/i);
      link = l ? l[1] : null;
    }
    const date = tag('pubDate') || tag('published') || tag('updated');
    const parsed = date ? Date.parse(date) : NaN;
    items.push({
      title: tag('title'),
      link,
      date: Number.isFinite(parsed) ? new Date(parsed).toISOString() : null,
    });
  }
  return items.filter((i) => i.title);
}

// Newest-first items whose title or link matches, with a news aggregator's
// " - Publisher" title suffix removed.
function latestItems(items, match, limit, titleMatch) {
  return items
    .filter((i) => !match || match.test(i.title || '') || match.test(i.link || ''))
    .filter((i) => !titleMatch || titleMatch.test(i.title || ''))
    .map((i) => ({ ...i, title: i.title.replace(/\s+-\s+Institute for the Study of War$/i, '') }))
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, limit || 5);
}

module.exports = {
  latestItems,
  DAY_MS,
  MARKETS,
  LOOKBACK_DAYS,
  changeOver,
  marketStatus,
  marketsOverall,
  parseYahooChart,
  parseEcbCsv,
  ADVICE_LEVELS,
  htmlToText,
  mainText,
  adviceLevel,
  hashText,
  stableText,
  mergeAdvice,
  metaculusProbability,
  mergeSeries,
  valueDaysAgo,
  isJump,
  parseRss,
};
