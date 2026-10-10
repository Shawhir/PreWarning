const test = require('node:test');
const assert = require('node:assert/strict');
const S = require('../js/scoring.js');
const { CATEGORIES, BASELINE } = require('../js/config.js');

function states(overrides) {
  const out = {};
  for (const c of CATEGORIES) out[c.id] = 'green';
  return { ...out, ...overrides };
}

const overall = (o) => S.overallStatus(CATEGORIES, states(o)).status;

test('all green is green', () => {
  assert.equal(overall({}), 'green');
});

test('mid-2026 baseline is amber', () => {
  const base = {};
  for (const [id, v] of Object.entries(BASELINE.categories)) base[id] = v.status;
  assert.equal(overall(base), 'amber');
});

test('any high-weight category amber gives amber', () => {
  for (const id of ['posture', 'continuity', 'conventional']) {
    assert.equal(overall({ [id]: 'amber' }), 'amber', id);
  }
});

test('one medium amber stays green, two medium amber gives amber', () => {
  assert.equal(overall({ diplomacy: 'amber' }), 'green');
  assert.equal(overall({ diplomacy: 'amber', rhetoric: 'amber' }), 'amber');
  assert.equal(overall({ diplomacy: 'red', infrastructure: 'amber' }), 'amber');
});

test('low-weight categories alone never raise the status', () => {
  assert.equal(overall({ markets: 'red', strategic: 'amber' }), 'green');
});

test('two high-weight reds give red', () => {
  assert.equal(overall({ posture: 'red', conventional: 'red' }), 'red');
});

test('one high red alone is amber, not red', () => {
  assert.equal(overall({ conventional: 'red' }), 'amber');
  assert.equal(overall({ conventional: 'red', rhetoric: 'amber' }), 'amber');
});

test('one high red plus two others amber or worse gives red', () => {
  assert.equal(overall({ conventional: 'red', rhetoric: 'amber', diplomacy: 'amber' }), 'red');
  assert.equal(overall({ conventional: 'red', posture: 'amber', markets: 'red' }), 'red');
});

test('background strategic context does not count towards red', () => {
  assert.equal(overall({ conventional: 'red', strategic: 'amber', rhetoric: 'amber' }), 'amber');
});

test('two-source rule', () => {
  assert.equal(S.canSetRed(''), false);
  assert.equal(S.canSetRed('https://a.example'), false);
  assert.equal(S.canSetRed('https://a.example\n\n  \n'), false);
  assert.equal(S.canSetRed('https://a.example\nISW daily update'), true);
});

test('elevated streak carries readings across gaps', () => {
  const history = [
    { date: '2026-09-20', overall: 'green' },
    { date: '2026-09-25', overall: 'amber' },
    { date: '2026-09-30', overall: 'red' },
    { date: '2026-10-05', overall: 'amber' },
  ];
  assert.equal(S.elevatedStreakDays(history, '2026-10-05'), 10);
  assert.equal(S.elevatedStreakDays(history, '2026-10-10'), 15);
  assert.equal(S.elevatedStreakDays([...history, { date: '2026-10-10', overall: 'green' }], '2026-10-10'), 0);
  assert.equal(S.elevatedStreakDays([], '2026-10-10'), 0);
});

test('trend carries forward and leaves days before history empty', () => {
  const history = [
    { date: '2026-10-07', c: 'green' },
    { date: '2026-10-09', c: 'amber' },
  ];
  const t = S.trend(history, (h) => h.c, '2026-10-10', 5);
  assert.deepEqual(t.map((p) => p.status), [null, 'green', 'green', 'amber', 'amber']);
  assert.equal(t[4].date, '2026-10-10');
  assert.equal(S.direction(t), 'rising');
});

test('check cadence', () => {
  const now = new Date('2026-10-10T12:00:00');
  assert.equal(S.isDue(null, 'daily', now), true);
  assert.equal(S.isDue(new Date('2026-10-10T08:00:00').toISOString(), 'daily', now), false);
  assert.equal(S.isDue(new Date('2026-10-09T08:00:00').toISOString(), 'daily', now), true);
  assert.equal(S.isDue(new Date('2026-09-20T08:00:00').toISOString(), 'monthly', now), false);
  assert.equal(S.isDue(new Date('2026-09-01T08:00:00').toISOString(), 'monthly', now), true);
});
