#!/usr/bin/env node
// Fetches automated signals into data/signals.json for the dashboard's
// Signals panel. Run by the Pages workflow. Every source is independent:
// a failure is recorded in the output and never fails the build.
//
// Env:
//   PREV_SIGNALS_URL  previously published signals.json (for change detection)
//   METACULUS_TOKEN   optional Metaculus API token
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./signals-lib.js');

const OUT = path.join(__dirname, '..', 'data', 'signals.json');
const UA = 'Mozilla/5.0 (compatible; PreWarning dashboard; +https://github.com/Shawhir/PreWarning)';
const TIMEOUT_MS = 20000;

const ADVICE = [
  { id: 'ie-russia', source: 'Ireland DFA', country: 'Russia', url: 'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/' },
  { id: 'ie-belarus', source: 'Ireland DFA', country: 'Belarus', url: 'https://www.ireland.ie/en/dfa/overseas-travel/advice/belarus/' },
  { id: 'ie-ukraine', source: 'Ireland DFA', country: 'Ukraine', url: 'https://www.ireland.ie/en/dfa/overseas-travel/advice/ukraine/' },
  { id: 'ie-lithuania', source: 'Ireland DFA', country: 'Lithuania', url: 'https://www.ireland.ie/en/dfa/overseas-travel/advice/lithuania/' },
  { id: 'ie-china', source: 'Ireland DFA', country: 'China', url: 'https://www.ireland.ie/en/dfa/overseas-travel/advice/china/' },
  { id: 'ch-russia', source: 'Swiss FDFA', country: 'Russia', url: 'https://www.eda.admin.ch/countries/russia/it/home/consigli-di-viaggio/consigli-di-viaggio.html' },
  { id: 'ch-belarus', source: 'Swiss FDFA', country: 'Belarus', url: 'https://www.eda.admin.ch/countries/belarus/it/home/consigli-di-viaggio/consigli-di-viaggio.html' },
];

const METACULUS_SEARCHES = ['nuclear detonation', 'nuclear weapon', 'NATO Russia war'];
const METACULUS_PATTERN = /nuclear|nato/i;
const METACULUS_MAX = 5;

const RSS_FEEDS = [
  { id: 'isw', name: 'Institute for the Study of War', urls: ['https://understandingwar.org/feed/', 'https://www.understandingwar.org/rss.xml'] },
];

async function get(url, opts) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      ...opts,
      headers: { 'User-Agent': UA, Accept: '*/*', ...((opts && opts.headers) || {}) },
      signal: ctrl.signal,
      redirect: 'follow',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  } finally {
    clearTimeout(timer);
  }
}

function errMsg(e) {
  return e && e.name === 'AbortError' ? 'timeout' : String((e && e.message) || e);
}

async function loadPrevious() {
  const url = process.env.PREV_SIGNALS_URL;
  if (!url) return {};
  try {
    return await (await get(url)).json();
  } catch (e) {
    console.log(`previous signals: unavailable (${errMsg(e)})`);
    return {};
  }
}

async function fetchMarkets(now) {
  const items = [];
  for (const def of L.MARKETS) {
    const item = { id: def.id, name: def.name, unit: def.unit };
    try {
      let series;
      if (def.yahoo) {
        const res = await get(`https://query1.finance.yahoo.com/v8/finance/chart/${def.yahoo}?range=1mo&interval=1d`);
        series = L.parseYahooChart(await res.json());
        item.source = 'Yahoo Finance';
      } else if (def.ecb) {
        const res = await get(`https://data-api.ecb.europa.eu/service/data/EXR/D.${def.ecb}.EUR.SP00.A?lastNObservations=30&format=csvdata`);
        series = L.parseEcbCsv(await res.text());
        item.source = 'ECB';
      }
      if (!series || !series.length) throw new Error('no data');
      const last = series[series.length - 1];
      item.value = last.v;
      item.asOf = new Date(last.t).toISOString();
      item.change = L.changeOver(series, L.LOOKBACK_DAYS, now);
      item.status = L.marketStatus(def, item.value, item.change);
      item.spark = series.slice(-22).map((p) => +p.v.toFixed(4));
      item.ok = true;
    } catch (e) {
      item.ok = false;
      item.error = errMsg(e);
    }
    items.push(item);
  }
  return { status: L.marketsOverall(items.filter((i) => i.ok)), lookbackDays: L.LOOKBACK_DAYS, items };
}

async function fetchAdvice(prev, nowIso) {
  const prevById = {};
  for (const p of (prev && prev.advice) || []) prevById[p.id] = p;
  const out = [];
  for (const a of ADVICE) {
    let current;
    try {
      const html = await (await get(a.url)).text();
      const text = L.mainText(html);
      if (text.length < 200) throw new Error('page content too short');
      current = { ...a, ok: true, hash: L.hashText(text), level: a.source === 'Ireland DFA' ? L.adviceLevel(text) : null };
    } catch (e) {
      current = { ...a, ok: false, error: errMsg(e) };
    }
    out.push(L.mergeAdvice(prevById[a.id], current, nowIso));
  }
  return out;
}

async function fetchForecasts(prev, nowMs, todayKey) {
  const headers = process.env.METACULUS_TOKEN ? { Authorization: `Token ${process.env.METACULUS_TOKEN}` } : {};
  const prevById = {};
  for (const f of (prev && prev.forecasts && prev.forecasts.items) || []) prevById[f.id] = f;
  const seen = new Map();
  const errors = [];
  for (const q of METACULUS_SEARCHES) {
    const url = `https://www.metaculus.com/api/posts/?search=${encodeURIComponent(q)}&statuses=open&forecast_type=binary&order_by=-forecasts_count&limit=10&with_cp=true`;
    try {
      const json = await (await get(url, { headers: { Accept: 'application/json', ...headers } })).json();
      for (const post of json.results || []) {
        if (seen.has(post.id) || !METACULUS_PATTERN.test(post.title || '')) continue;
        const p = L.metaculusProbability(post, nowMs);
        if (!p) continue;
        seen.set(post.id, { post, p });
      }
    } catch (e) {
      errors.push(`${q}: ${errMsg(e)}`);
    }
  }
  const items = [...seen.values()]
    .sort((a, b) => (b.post.forecasts_count || b.post.nr_forecasters || 0) - (a.post.forecasts_count || a.post.nr_forecasters || 0))
    .slice(0, METACULUS_MAX)
    .map(({ post, p }) => {
      const series = L.mergeSeries(prevById[post.id] && prevById[post.id].series, p.now, todayKey, 30);
      const weekAgo = p.weekAgo !== null ? p.weekAgo : L.valueDaysAgo(series, todayKey, 7);
      return {
        id: post.id,
        title: post.title,
        url: `https://www.metaculus.com/questions/${post.id}/`,
        probability: p.now,
        weekAgo,
        jump: L.isJump(p.now, weekAgo),
        series,
      };
    });
  return {
    ok: items.length > 0,
    error: items.length ? null : errors.join('; ') || 'no matching questions',
    authenticated: !!process.env.METACULUS_TOKEN,
    items,
  };
}

async function fetchFeeds() {
  const out = [];
  for (const f of RSS_FEEDS) {
    const entry = { id: f.id, name: f.name, ok: false, items: [] };
    for (const url of f.urls) {
      try {
        const items = L.parseRss(await (await get(url)).text(), 5);
        if (!items.length) throw new Error('no items');
        Object.assign(entry, { ok: true, url, items, error: null });
        break;
      } catch (e) {
        entry.error = `${url}: ${errMsg(e)}`;
      }
    }
    out.push(entry);
  }
  return out;
}

async function main() {
  const now = Date.now();
  const nowIso = new Date(now).toISOString();
  const todayKey = nowIso.slice(0, 10);
  const prev = await loadPrevious();

  const [markets, advice, forecasts, feeds] = await Promise.all([
    fetchMarkets(now).catch((e) => ({ status: null, items: [], error: errMsg(e) })),
    fetchAdvice(prev, nowIso).catch((e) => prev.advice || []),
    fetchForecasts(prev, now, todayKey).catch((e) => ({ ok: false, error: errMsg(e), items: [] })),
    fetchFeeds().catch(() => []),
  ]);

  const signals = { generatedAt: nowIso, markets, forecasts, advice, feeds };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(signals, null, 2));

  // Summary for the Actions log.
  console.log(`signals written ${nowIso}`);
  console.log(`markets: ${markets.status}`);
  for (const m of markets.items) console.log(`  ${m.id}: ${m.ok ? `${m.value} (${m.change !== null && m.change !== undefined ? m.change.toFixed(2) : '?'}%) ${m.status}` : `FAILED ${m.error}`}`);
  console.log(`forecasts: ${forecasts.ok ? forecasts.items.length + ' questions' : 'FAILED ' + forecasts.error}`);
  for (const f of forecasts.items) console.log(`  ${(f.probability * 100).toFixed(1)}% ${f.title}`);
  for (const a of advice) console.log(`advice ${a.id}: ${a.ok ? `${a.level || '-'} ${a.hash}${a.changedAt ? ' changed ' + a.changedAt : ''}` : `FAILED ${a.error}`}`);
  for (const f of feeds) console.log(`feed ${f.id}: ${f.ok ? f.items.length + ' items, latest: ' + f.items[0].title : 'FAILED ' + f.error}`);
}

main().catch((e) => {
  // Never fail the deploy over signals.
  console.log(`signals fetch crashed: ${errMsg(e)}`);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), error: errMsg(e) }, null, 2));
});
