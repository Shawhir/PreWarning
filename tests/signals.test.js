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

test('advice change detection carries history', () => {
  const first = L.mergeAdvice(undefined, { id: 'a', ok: true, hash: 'h1', level: 'Do not travel' }, '2026-10-10T00:00:00Z');
  assert.equal(first.changedAt, null);
  const same = L.mergeAdvice(first, { id: 'a', ok: true, hash: 'h1', level: 'Do not travel' }, '2026-10-11T00:00:00Z');
  assert.equal(same.changedAt, null);
  const changed = L.mergeAdvice(same, { id: 'a', ok: true, hash: 'h2', level: 'Avoid non-essential travel' }, '2026-10-12T00:00:00Z');
  assert.equal(changed.changedAt, '2026-10-12T00:00:00Z');
  assert.equal(changed.previousLevel, 'Do not travel');
  const failed = L.mergeAdvice(changed, { id: 'a', ok: false, error: 'HTTP 500' }, '2026-10-13T00:00:00Z');
  assert.equal(failed.ok, false);
  assert.equal(failed.hash, 'h2');
  assert.equal(failed.changedAt, '2026-10-12T00:00:00Z');
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
