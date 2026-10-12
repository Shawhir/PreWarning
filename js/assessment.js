// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-12: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-12',
  issuedAt: '2026-10-12T05:00:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'No change. No new Kaliningrad, airspace or Black Sea incidents found for 11–12 Oct; NATO denies blockade plans. Lithuania\'s ~100 troops stay on the Kaliningrad border until 16 Oct. A Reuters note (12 Oct) mentions a Trump-announced Russia–Ukraine energy "ceasefire" (unconfirmed). Nothing new in Asia. Reports of Vilnius shelter alerts refer to May 2026, not now.',
      sources: [
        'https://www.washingtonpost.com/world/2026/10/08/nato-nuclear-exercise-steadfast-russia-kaliningrad/995a9676-c32f-11f1-8170-681419af1cc9_story.html',
        'https://www.bloomberg.com/news/articles/2026-10-08/lithuania-sends-troops-to-border-over-putin-mobilization-concern',
        'https://za.investing.com/news/economy-news/morning-bid-it-takes-two-to-make-a-ceasefire-4498897',
        'https://english.ahram.org.eg/News/569374.aspx',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Grom announcement or Barents Sea NOTAMs yet (22 Oct last year); no reported SSBN, bomber or warhead moves. NATO Steadfast Noon starts 13 Oct for ~10 days; no Russian reaction yet. From 13 Oct both sides may be exercising at once: check daily.',
      sources: [
        'https://www.washingtonpost.com/world/2026/10/08/nato-nuclear-exercise-steadfast-russia-kaliningrad/995a9676-c32f-11f1-8170-681419af1cc9_story.html',
        'https://www.newsweek.com/nato-launching-nuclear-drills-after-putins-baltic-sea-nuke-warning-12545699',
        'https://www.thebarentsobserver.com/security/russia-readies-barents-sea-for-annual-thunder-nuke-exercise/438972',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland. Only planned programmes (Finland\'s Sep shelter drill, Vilnius evacuation planning).',
      sources: [
        'https://thedefensepost.com/2026/09/04/finland-wartime-civil-defense-drill/',
        'https://www.themoscowtimes.com/2026/08/05/lithuanias-capital-city-unveils-war-evacuation-plan-amid-fears-of-russian-aggression',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. No new expulsions, closures, suspended talks or "leave" advisories; Irish DFA pages unchanged per the signals feed. Kremlin called Lithuania\'s move to lift its ban on hosting nuclear weapons a "dangerous escalation" (final vote ~Jan 2027).',
      sources: [
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
        'https://www.denvergazette.com/2026/10/06/lithuania-moves-to-allow-nuclear-weapons-on-its-territory/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Top of amber, no change. The 30 Sep Kaliningrad nuclear note and Putin\'s 1 Oct Valdai remarks stand; no new deadlines or readiness announcements. 8 Oct: Trump accused Medvedev of nuclear sabre-rattling over Iran. Watch for Russian comment on Steadfast Noon from 13 Oct.',
      sources: [
        'https://www.aljazeera.com/news/2026/9/30/russia-warns-nato-of-possible-nuclear-response-if-kaliningrad-is-cut-off',
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
        'https://www.themoscowtimes.com/2026/10/08/trump-blasts-medvedev-over-iran-nuclear-comments',
      ],
    },
    infrastructure: {
      status: 'green',
      note: 'No change. No cable cuts, national cyber outages or unusual GPS/satellite interference affecting Europe reported for 11–12 Oct.',
      sources: [
        'https://konbriefing.com/en-topics/cyber-attacks.html',
        'https://capacityglobal.com/news/latvia-investigation-finds-no-link-between-liepaja-vessel-and-damaged-baltic-sea-telecom-cable',
      ],
    },
    markets: {
      status: 'amber',
      note: 'No material change. Iran called the US reply on reopening Hormuz "insufficient" (11 Oct), so the strait stays closed; Brent ~$103 in early 12 Oct trading. Signals feed (5-day moves) green: VIX 14.8, gold ~$4,235, EUR/CHF 0.931.',
      sources: [
        'https://www.usnews.com/news/world/articles/2026-10-11/iran-says-us-response-to-its-proposal-to-reopen-hormuz-was-insufficient',
        'https://www.thenationalnews.com/news/mena/2026/10/11/iran-says-us-response-to-proposal-to-reopen-strait-of-hormuz-is-insufficient/',
        'https://tradingeconomics.com/commodity/brent-crude-oil',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, no change. No new testing or arms-control news since the 6–8 Oct US accusations of Chinese explosive testing; no New START follow-on. North Korea\'s 10 Oct party anniversary: no nuclear statement found yet.',
      sources: [
        'https://www.twz.com/nuclear/china-secretly-testing-nuclear-weapons-and-covering-its-tracks-u-s-alleges',
        'https://www.koreatimes.co.kr/foreignaffairs/northkorea/20261009/n-korea-revs-up-festive-mood-ahead-of-party-founding-anniversary',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'No change in status. Brittany Ferries: Barfleur takes over Rosslare–Cherbourg from 12 Oct with no spare ship in the fleet, so one breakdown could stop the route; Irish Ferries Dublin–Cherbourg is the backup. French airline crew strike notice for 17–21 Oct still stands. No new French fuel disruption found since 8 Oct.',
    sources: [
        'https://cyprusshippingnews.com/2026/10/09/brittany-ferries-move-barfleur-to-rosslare-cherbourg-route/',
        'https://afloat.ie/port-news/ferry-news/brittany-ferries/item/73279-cotentin-s-final-french-connection',
        'https://www.airhelp.fr/actualites-vols/air-france-transavia-france-corsair-greve-france-17102026/',
        'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
    ],
  },
};
