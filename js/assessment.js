// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-01: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-01',
  issuedAt: '2026-11-01T05:56:40Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. No new Black Sea ship attack found for 30 Oct–1 Nov (latest: Contship Jet, sunk 28–29 Oct; 7–9 ships hit this month by most counts). NATO's Rutte called the attacks \"unacceptable\"; no Article 4. No NATO-airspace incursion, sabotage or Kaliningrad/Baltic incident found. No US or Israeli strike on Iran so far; US cargo aircraft arrived in Israel 29–31 Oct; Israeli official: \"no decision has yet been made\".",
      sources: [
        'https://www.pbs.org/newshour/world/drone-strikes-in-the-black-sea-raise-fears-of-russian-escalation-to-test-natos-response',
        'https://www.i24news.tv/en/news/international/europe/artc-naval-drones-sink-israeli-operated-cargo-ship-off-bulgaria-s-black-sea-coast',
        'https://www.nation.com.pk/30-Oct-2026/us-deploys-10-military-cargo-planes-israel-amid-preparations-possible-strike-iran-report',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise or ICBM/SLBM launch after the 28 Oct Bulava training launch. US Global Thunder ends ~1–2 Nov; Russia has often flown long-range bomber missions right after it, so watch 1–5 Nov. Routine bomber flights alone would not change the status.",
      sources: [
        'https://russianforces.org/blog/2026/',
        'https://nipp.org/?p=4997',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 31 Oct–1 Nov.",
      sources: [
        'https://www.pbs.org/newshour/world/drone-strikes-in-the-black-sea-raise-fears-of-russian-escalation-to-test-natos-response',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. Rubio confirmed he and Lavrov \"spoke\" in Atlanta (no formal meeting), including about a possible Trump–Putin meeting at APEC this month; Kallas accused Lavrov of \"lies\". Abu Dhabi talks still \"first half of November\", undated. No new expulsions or \"leave\" advisories; a reported plan for US ordered departures from Gulf embassies has not been confirmed as issued. Swiss FDFA page change of 26 Oct still unexplained.",
      sources: [
        'https://kuwaittimes.com/article/52702/world/russia-unyielding-on-ukraine-as-rubio-hosts-g20-talks/',
        'https://en.cibercuba.com/noticias/2026-10-31-u1-e208574-s27061-nid344440-marco-rubio-serguei-lavrov-conversan-durante',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums found for 31 Oct–1 Nov. (Iran's Supreme Leader's warning of a \"geographically unrestricted response\" is counted under strategic context.)",
      sources: [
        'https://rt-english.com/russia/647458-kremlin-dangerous-nuclear-arms-control/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new infrastructure cyberattack, cable damage or GPS jamming surge found for 31 Oct–1 Nov.",
      sources: [
        'https://subtelforum.com/baltic-states-on-alert-after-undersea-cable-damage/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, top of band. Markets closed for the weekend; Friday: Brent December contract expired at $117.64 (6-month high), January contract $113.43, VIX ~19.4, gold ~$3,900, EUR/CHF ~0.919. Monday drivers: the first successful limpet-mine attack on a tanker (Louise 1, Hormuz, 29 Oct), Iran–Qatar talks without a deal, and the 3 Nov US midterms. Brent quotes will show the January contract (~$4 lower) — a contract change, not a fall.",
      sources: [
        'https://www.twz.com/news-features/iran-used-limpet-mine-placed-on-ships-hull-in-latest-strait-of-hormuz-attack-report',
        'https://www.iranintl.com/en/202610317760',
        'https://brecorder.com/news/40446766/oil-jumps-2pc',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating, no change. Rubio (31 Oct): Trump has not decided whether to resume strikes on Iran; diplomacy preferred but the US \"would have the ability\". Iran's Supreme Leader (31 Oct, single dated source) warned of an \"immediate… geographically unrestricted response\" and ordered target lists updated. Doha talks continue without a deal. Strike risk window opens after the 3 Nov midterms. Israel still deadlocked; North Korea quiet since 29 Oct.",
      sources: [
        'https://www.foxnews.com/live-news/us-iran-war-trump-israel-strait-hormuz-10-31-26',
        'https://qncnews.com/2026/11/01/rubio-says-trump-has-not-decided-on-new-iran-strikes/',
        'https://france24.com/en/middle-east/20261031-iran-s-khamenei-warns-us-and-israel-against-new-attacks',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Diesel price cut (12–18 c/l) legally applies from today until 31 Jan, but retailers may phase it in; not yet confirmed at the pump. No national shortage figure newer than 29 Oct; Grand Est (A36) was worst hit in October. 5 Nov strike on (four SNCF unions plus cross-sector); correction: the 3 Nov event is a union rally, not a negotiation; SNCF service plan out 4 Nov 17:00; expect heavy roads on 5 Nov. Ferries: no cancellations on Rosslare–Cherbourg or Dublin–Cherbourg. No Met Éireann warning for Donegal; flights normal.",
    sources: [
      'https://www.letribunaldunet.fr/argent/gazole-baisse-18-centimes-1er-novembre-decret-stocks.html',
      'https://www.sortiraparis.com/en/news/in-paris/articles/355255-sncf-strike-on-november-5-2026-the-latest-updates',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
    ],
  },
};
