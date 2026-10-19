const test = require('node:test');
const assert = require('node:assert/strict');
const L = require('../scripts/signals-lib.js');

const DAY = L.DAY_MS;
const def = (id) => L.MARKETS.find((m) => m.id === id);

test('market thresholds', () => {
  assert.equal(L.marketStatus(def('vix'), 15, 0), 'green');
  assert.equal(L.marketStatus(def('vix'), 27, 0), 'amber');
  assert.equal(L.marketStatus(def('vix'), 40, 0), 'red');
  assert.equal(L.marketStatus(def('brent'), 104, 3), 'green');
  assert.equal(L.marketStatus(def('brent'), 104, -12), 'amber');
  assert.equal(L.marketStatus(def('gold'), 4000, 11), 'red');
  // EUR/CHF only flags franc strength (a fall).
  assert.equal(L.marketStatus(def('eurchf'), 0.92, -2.5), 'amber');
  assert.equal(L.marketStatus(def('eurchf'), 0.96, 3), 'green');
  assert.equal(L.marketStatus(def('gold'), 4000, null), null);
});

test('markets overall needs two reds for red', () => {
  assert.equal(L.marketsOverall([{ status: 'green' }, { status: 'green' }]), 'green');
  assert.equal(L.marketsOverall([{ status: 'red' }, { status: 'green' }]), 'amber');
  assert.equal(L.marketsOverall([{ status: 'red' }, { status: 'red' }]), 'red');
  assert.equal(L.marketsOverall([]), null);
});

test('change over lookback', () => {
  const t0 = Date.UTC(2026, 9, 1);
  const series = [0, 1, 2, 3, 4, 5, 6].map((d) => ({ t: t0 + d * DAY, v: 100 + d * 2 }));
  // last = 112 at day 6; 5 days earlier = day 1 = 102
  assert.equal(L.changeOver(series, 5, t0 + 6 * DAY).toFixed(3), ((10 / 102) * 100).toFixed(3));
});

test('parse Yahoo chart and ECB csv', () => {
  const y = L.parseYahooChart({ chart: { result: [{ timestamp: [1, 2, 3], indicators: { quote: [{ close: [10, null, 12] }] } }] } });
  assert.deepEqual(y, [{ t: 1000, v: 10 }, { t: 3000, v: 12 }]);
  const csv = 'KEY,FREQ,TIME_PERIOD,OBS_VALUE\nEXR.D,D,2026-10-08,0.9312\nEXR.D,D,2026-10-09,"0.9301"\n';
  const e = L.parseEcbCsv(csv);
  assert.equal(e.length, 2);
  assert.equal(e[1].v, 0.9301);
});

test('advice level prefers the stated security status', () => {
  const text = L.mainText('<header>Do not travel menu</header><main><h2>Security status</h2><p>Avoid non-essential travel</p><p>Do not travel to the border region</p></main>');
  assert.equal(L.adviceLevel(text), 'Avoid non-essential travel');
  assert.equal(L.adviceLevel('nothing here'), null);
});

test('advice change needs two agreeing runs, level change counts at once', () => {
  const day = (d) => `2026-10-${d}T00:00:00Z`;
  const run = (prev, hash, level, d) => L.mergeAdvice(prev, { id: 'a', ok: true, hash, level }, day(d));
  let a = run(undefined, 'h1', 'Do not travel', 10);
  assert.equal(a.changedAt, null);
  // Content that differs on every load is never flagged.
  a = run(a, 'x1', 'Do not travel', 11);
  a = run(a, 'x2', 'Do not travel', 12);
  a = run(a, 'h1', 'Do not travel', 13);
  assert.equal(a.changedAt, null);
  assert.equal(a.hash, 'h1');
  // A real change is confirmed on the second run that sees it.
  a = run(a, 'h2', 'Do not travel', 14);
  assert.equal(a.changedAt, null);
  a = run(a, 'h2', 'Do not travel', 15);
  assert.equal(a.changedAt, day(15));
  assert.equal(a.hash, 'h2');
  // A level change counts immediately.
  a = run(a, 'h3', 'Avoid non-essential travel', 16);
  assert.equal(a.changedAt, day(16));
  assert.equal(a.previousLevel, 'Do not travel');
  // Failures keep the last good state.
  const failed = L.mergeAdvice(a, { id: 'a', ok: false, error: 'HTTP 500' }, day(17));
  assert.equal(failed.ok, false);
  assert.equal(failed.hash, 'h3');
  assert.equal(failed.changedAt, day(16));
});

test('stable text ignores dates and tokens', () => {
  const a = L.stableText('Last updated 9 October 2026 10:42 session a1b2c3d4e5f6a7b8c9d0e1f2a3b4 Do not travel');
  const b = L.stableText('Last updated 10 October 2026 08:01 session ffffffffffffffffffffffffffffff Do not travel');
  assert.equal(a, b);
});

test('metaculus probability and jumps', () => {
  const now = Date.UTC(2026, 9, 10);
  const post = {
    question: {
      aggregations: {
        recency_weighted: {
          latest: { centers: [0.08] },
          history: [
            { start_time: (now - 10 * DAY) / 1000, centers: [0.03] },
            { start_time: (now - 2 * DAY) / 1000, centers: [0.06] },
          ],
        },
      },
    },
  };
  assert.deepEqual(L.metaculusProbability(post, now), { now: 0.08, weekAgo: 0.03 });
  assert.equal(L.metaculusProbability({}, now), null);
  assert.equal(L.isJump(0.08, 0.03), true);
  assert.equal(L.isJump(0.31, 0.3), false);
  assert.equal(L.isJump(0.4, 0.3), true);
  assert.equal(L.isJump(0.05, null), false);
});

test('forecast series keeps one value per day', () => {
  let s = L.mergeSeries([], 0.1, '2026-10-01');
  s = L.mergeSeries(s, 0.2, '2026-10-01');
  s = L.mergeSeries(s, 0.3, '2026-10-09');
  assert.deepEqual(s, [{ d: '2026-10-01', v: 0.2 }, { d: '2026-10-09', v: 0.3 }]);
  assert.equal(L.valueDaysAgo(s, '2026-10-09', 7), 0.2);
});

test('rss parsing', () => {
  const xml = '<rss><channel><item><title><![CDATA[Russian Offensive Campaign Assessment, October 9, 2026]]></title><link>https://example.org/a</link><pubDate>Thu, 09 Oct 2026 22:00:00 GMT</pubDate></item><item><title>Second</title><link>https://example.org/b</link></item></channel></rss>';
  const items = L.parseRss(xml, 5);
  assert.equal(items.length, 2);
  assert.equal(items[0].title, 'Russian Offensive Campaign Assessment, October 9, 2026');
  assert.equal(items[0].date, '2026-10-09T22:00:00.000Z');
  assert.equal(items[1].date, null);
});

test('latest items filters by publisher and sorts newest first', () => {
  const items = [
    { title: 'War in Ukraine | Global Conflict Tracker - Council on Foreign Relations', link: 'https://news.google.com/a', date: '2026-10-13T00:00:00.000Z' },
    { title: 'Russian Offensive Campaign Assessment, October 7, 2026 - Institute for the Study of War', link: 'https://news.google.com/b', date: '2026-10-08T00:00:00.000Z' },
    { title: 'Russian Offensive Campaign Assessment, October 12, 2026 - Institute for the Study of War', link: 'https://news.google.com/c', date: '2026-10-13T02:00:00.000Z' },
  ];
  const out = L.latestItems(items, /institute for the study of war|understandingwar/i, 5);
  assert.deepEqual(out.map((i) => i.title), [
    'Russian Offensive Campaign Assessment, October 12, 2026',
    'Russian Offensive Campaign Assessment, October 7, 2026',
  ]);
});

test('latest items can require report-style titles', () => {
  const items = [
    { title: 'John Gillespie', link: 'https://understandingwar.org/people/john', date: '2026-10-18T00:00:00.000Z' },
    { title: 'Russian Offensive Campaign Assessment, October 15, 2026', link: 'https://understandingwar.org/a', date: '2026-10-16T00:00:00.000Z' },
  ];
  const out = L.latestItems(items, /understandingwar/i, 5, /assessment|update/i);
  assert.deepEqual(out.map((i) => i.title), ['Russian Offensive Campaign Assessment, October 15, 2026']);
});
