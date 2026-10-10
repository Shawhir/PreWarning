// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per date, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-10: compiled from dated news search results. Source pages could
// not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-10',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Russia–Ukraine war intense (major Russian strike 7 Oct; ~290 Ukrainian drones at Moscow region 6 Oct). 6 Oct: drones hit two commercial ships in Bulgaria\'s Black Sea EEZ, attribution unclear; Article 4 floated by a Bulgarian opposition party but not requested. No Article 4/5 invocation found. Asia: China Coast Guard rammed a Philippine vessel 18 Sep; no US–China clashes. India–Pakistan ceasefire holding despite 2 Oct border killings.',
      sources: [
        'https://www.washingtonpost.com/world/2026/10/06/bulgaria-prime-minister-ships-drones-economic-zone/41e5ef02-c164-11f1-8170-681419af1cc9_story.html',
        'https://www.aljazeera.com/news/2026/10/7/at-least-two-killed-in-kyiv-as-russia-launches-massive-attack-on-ukraine',
        'https://news.usni.org/2026/09/18/video-china-coast-guard-rams-philippine-fisheries-vessel-in-south-china-sea',
        'https://www.aljazeera.com/news/2026/10/3/pakistan-summons-indian-diplomat-over-border-killing-of-two-pakistanis',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber. No reports of SSBN surges, bomber dispersal, warhead movement or alert changes. NATO Steadfast Noon starts 13 Oct (routine scale, not postponed). Russia\'s autumn Grom exercise not yet announced; if it runs alongside the Kaliningrad dispute, check daily for Barents Sea NOTAMs and launch announcements.',
      sources: [
        'https://www.nato.int/en/news-and-events/articles/news/2026/10/08/nato-holds-annual-nuclear-exercise-steadfast-noon',
        'https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning',
        'https://tass.com/defense/2196875',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No leader relocations, civil defence activation, iodine distribution or martial law found. Switzerland: no Alertswiss alerts; only a civil-protection earthquake exercise. European emergency diesel talks (1 Oct) are economic strain, not war preparation.',
      sources: [
        'https://www.babs.admin.ch/en',
        'https://www.bloomberg.com/news/articles/2026-10-01/europe-holds-emergency-diesel-talks-as-us-pressure-mounts',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber. Russia delivered its Kaliningrad nuclear warning as a formal diplomatic note (30 Sep), counted under rhetoric. No new embassy drawdowns, expulsions or hotline reports found. US "leave Russia" advice (re-issued 6 Oct with a plague health alert) and Irish/Swiss advice against travel to Russia and Belarus are the long-standing baseline.',
      sources: [
        'https://ru.usembassy.gov/health-alert-u-s-embassy-moscow-russia-october-6-2026/',
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
        'https://www.eda.admin.ch/countries/russia/it/home/consigli-di-viaggio/consigli-di-viaggio.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Top of amber. 30 Sep: Russian note to NATO threatening the "entire arsenal… including nuclear weapons" if Kaliningrad is blockaded, citing alleged NATO blockade plans. 1 Oct (Valdai): Putin said "all weapons" are on the agenda if Kaliningrad is attacked. Tied to a specific event, but no deadline and no readiness announcement. A blockade, deadline or alert change would make this red.',
      sources: [
        'https://www.aljazeera.com/news/2026/9/30/russia-warns-nato-of-possible-nuclear-response-if-kaliningrad-is-cut-off',
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
        'https://www.euronews.com/2026/10/02/putin-says-all-weapons-on-agenda-if-russias-kaliningrad-attacked',
      ],
    },
    infrastructure: {
      status: 'green',
      note: 'Background level. No Baltic/North Sea cable cuts since Jan 2026. NATO allies said on 10 Sep they had foiled a Russian cable-sabotage rehearsal near Svalbard. Baltic GPS jamming at usual levels. No grid or bank outages from cyberattacks found.',
      sources: [
        'https://www.defensenews.com/global/europe/2026/09/10/nato-allies-foil-russian-subsea-cable-sabotage-plot/',
        'https://www.irishtimes.com/world/europe/2026/09/11/nato-allies-say-they-foiled-russian-subsea-cable-sabotage-plot/',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Energy stress from the Iran war: Brent ~$104 (9 Oct), European diesel at record ~€2.24/L, France proposing an EU/IEA stock release (2 Oct). Gulf airline suspensions extended. Not war-panic elsewhere: VIX 14.8, gold ~$4,190 and down on the month, EUR/CHF ~0.93 after a brief 2 Oct drop.',
      sources: [
        'https://www.bloomberg.com/news/articles/2026-10-02/france-proposes-fresh-release-of-diesel-and-crude-by-eu-iea',
        'https://tradingeconomics.com/commodity/brent-crude-oil',
        'https://fortune.com/article/current-price-of-gold-10-09-2026/',
        'https://finance.yahoo.com/quote/%5EVIX/',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating. New START expired 5–6 Feb 2026 with no formal follow-on talks found. No confirmed explosive tests; early US–China talks on reciprocal facility visits (8 Oct) amid US accusations of secret Chinese testing. China ~620 warheads and growing (SIPRI 2026). Oreshnik unit on duty in Belarus.',
      sources: [
        'https://www.washingtontimes.com/news/2026/oct/8/show-tell-us-china-discuss-visiting-others-nuclear-facilities/',
        'https://www.sipri.org/media/press-release/2026/increasing-focus-nuclear-weapons-amid-heightened-escalation-risks-new-sipri-yearbook-out-now',
        'https://meta-defense.fr/en/2026/06/01/oreshnik-belarus-krichev-6/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Fuel is the weak point: TotalEnergies refinery strikes reported ~8 Oct blocking shipments in France (single source; check before driving), Swiss diesel CHF 2.31–2.50/L after a Sep stock release (supply now normal). Ferries: Irish Ferries Dublin–Cherbourg on time; Rosslare–Cherbourg is Brittany Ferries only, 3–4 sailings/week, ship swapped to Barfleur from 12 Oct with no backup. No disruption found on Zurich/Basel/Geneva–Dublin/Belfast flights. French border checks continue to Apr 2027 (spot checks).',
    sources: [
      'https://www.thelocal.ch/20261008/could-switzerland-experience-fuel-shortages-this-autumn',
      'https://www.swissinfo.ch/eng/war-peace/swiss-oil-supplies-once-again-secured-through-regular-channels/92092781',
      'https://www.irishferries.com/uk-en/sailing-updates/ireland-france/',
      'https://cyprusshippingnews.com/2026/10/09/brittany-ferries-move-barfleur-to-rosslare-cherbourg-route/',
    ],
  },
};
