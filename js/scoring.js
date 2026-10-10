// Pure scoring logic for the early-warning dashboard (FRAMEWORK.md §4, §9).
// Loaded as a classic script in the browser (window.Scoring) and as a
// CommonJS module by the tests.
(function (root) {
  'use strict';

  const STATUSES = ['green', 'amber', 'red'];
  const DAY_MS = 24 * 60 * 60 * 1000;

  function rank(status) {
    const i = STATUSES.indexOf(status);
    return i < 0 ? 0 : i;
  }

  function worst(statuses) {
    return statuses.reduce((a, b) => (rank(b) > rank(a) ? b : a), 'green');
  }

  // Overall status per §4. `categories` is the config list (id, name, weight,
  // background); `states` maps category id -> 'green' | 'amber' | 'red'.
  // Background-only categories (strategic context) never count towards the
  // overall status: "this category alone should never go red" and it is
  // "background only".
  function overallStatus(categories, states) {
    const scored = categories.filter((c) => !c.background);
    const status = (c) => states[c.id] || 'green';
    const high = scored.filter((c) => c.weight === 'high');
    const medium = scored.filter((c) => c.weight === 'medium');

    const highRed = high.filter((c) => status(c) === 'red');
    const highAmberPlus = high.filter((c) => rank(status(c)) >= 1);
    const mediumAmberPlus = medium.filter((c) => rank(status(c)) >= 1);

    if (highRed.length >= 2) {
      return {
        status: 'red',
        reasons: [`Two or more high-weight categories red: ${names(highRed)}`],
      };
    }
    if (highRed.length === 1) {
      const others = scored.filter(
        (c) => c !== highRed[0] && rank(status(c)) >= 1
      );
      if (others.length >= 2) {
        return {
          status: 'red',
          reasons: [
            `${highRed[0].name} red, plus ${others.length} other categories amber or worse: ${names(others)}`,
          ],
        };
      }
    }

    const reasons = [];
    if (highAmberPlus.length > 0) {
      reasons.push(`High-weight category above green: ${names(highAmberPlus)}`);
    }
    if (mediumAmberPlus.length >= 2) {
      reasons.push(`Two or more medium-weight categories amber: ${names(mediumAmberPlus)}`);
    }
    if (reasons.length > 0) return { status: 'amber', reasons };

    return { status: 'green', reasons: ['No high-weight category above green'] };
  }

  function names(cats) {
    return cats.map((c) => c.name).join(', ');
  }

  // Two-source rule (§9): no indicator moves to red on a single report.
  // Sources are entered one per line.
  function countSources(text) {
    return String(text || '')
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean).length;
  }

  function canSetRed(sourcesText) {
    return countSources(sourcesText) >= 2;
  }

  // Local calendar date as YYYY-MM-DD.
  function dayKey(date) {
    const d = new Date(date);
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function daysBetween(fromKey, toKey) {
    const a = new Date(fromKey + 'T00:00:00');
    const b = new Date(toKey + 'T00:00:00');
    return Math.round((b - a) / DAY_MS);
  }

  // History holds one snapshot per day: { date: 'YYYY-MM-DD', overall, ... }.
  // A state persists until the next snapshot, so gaps carry the last reading.
  // Returns how many days overall has been amber or worse without a break,
  // or 0 if it is currently green.
  function elevatedStreakDays(history, todayKey) {
    const sorted = [...history].sort((a, b) => (a.date < b.date ? 1 : -1));
    let start = null;
    for (const snap of sorted) {
      if (snap.date > todayKey) continue;
      if (rank(snap.overall) < 1) break;
      start = snap.date;
    }
    return start === null ? 0 : daysBetween(start, todayKey);
  }

  // Status on each of the last `days` days for one key, carrying forward the
  // most recent snapshot. Returns null for days before the first snapshot.
  function trend(history, pick, todayKey, days) {
    const sorted = [...history].sort((a, b) => (a.date < b.date ? -1 : 1));
    const out = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(todayKey + 'T00:00:00');
      d.setDate(d.getDate() - i);
      const key = dayKey(d);
      let value = null;
      for (const snap of sorted) {
        if (snap.date > key) break;
        const v = pick(snap);
        if (v) value = v;
      }
      out.push({ date: key, status: value });
    }
    return out;
  }

  // Direction of travel over the trend window: compares the latest reading
  // with the earliest known one.
  function direction(trendPoints) {
    const known = trendPoints.filter((p) => p.status);
    if (known.length < 2) return 'steady';
    const diff = rank(known[known.length - 1].status) - rank(known[0].status);
    return diff > 0 ? 'rising' : diff < 0 ? 'easing' : 'steady';
  }

  // Whether a category is overdue for a check given its cadence.
  function isDue(checkedAt, cadence, now) {
    if (!checkedAt) return true;
    const limit = cadence === 'monthly' ? 30 : 1;
    return daysBetween(dayKey(checkedAt), dayKey(now)) >= limit;
  }

  const api = {
    STATUSES,
    rank,
    worst,
    overallStatus,
    countSources,
    canSetRed,
    dayKey,
    daysBetween,
    elevatedStreakDays,
    trend,
    direction,
    isDue,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.Scoring = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);
