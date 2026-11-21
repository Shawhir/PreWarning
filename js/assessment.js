// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-21: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-21',
  issuedAt: '2026-11-21T05:58:09Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band; not red (no sustained NATO–Russia combat, no Article 4 or 5). New: during Russia's mass strike overnight 19–20 Nov (84 cruise missiles, 404 drones plus ballistic missiles per Ukraine's Air Force), two Kh-101 cruise missiles and a jet drone came down in south-eastern Poland (Nowy Lipowiec, Rudnik nad Sanem, Mołodycz); no injuries. Tusk called it an 'intentional provocation' timed to allied drills; Rutte called it clearly dangerous; Poland asked NATO for more air defence but did not invoke Article 4; Trump called them 'little missiles, by mistake'. In Ukraine three Kyiv Dnipro bridges were damaged and at least 8 people killed; nuclear plants cut output. This was Russia's stated retaliation for the Kerch Bridge strikes. No Oreshnik use; no new Black Sea ship strikes since 17 Nov. Denmark expelled Russia's defence attaché on 20 Nov over an alleged assassination plot.",
      sources: [
        'https://kyivindependent.com/poland-reports-airspace-violation-during-russian-attack-on-ukraine-investigates-debris-crash/',
        'https://notesfrompoland.com/2026/11/20/unidentified-object-hits-poland-amid-russian-attacks-on-western-ukraine/',
        'https://meduza.io/en/news/2026/11/20/poland-issues-air-raid-alerts-as-russia-attacks-ukraine-poland-s-defense-minister-says-two-russian-missiles-and-a-drone-fell-on-polish-soil',
        'https://www.aljazeera.com/news/2026/11/20/russia-unleashes-retaliatory-barrage-on-kyiv-bridges',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. No Grom exercise, strategic launch, Oreshnik use or deployment change. Russian state TV showed Putin's 'Cheget' nuclear briefcase in Shenzhen (signalling only). The two Tu-95MS bombers flew back from Vietnam on 19 Nov (single report; not re-confirmed today).",
      sources: [
        'https://newsweek.com/putins-nuclear-briefcase-shown-off-by-russian-state-media-on-china-trip-12734494',
        'https://theaviationist.com/2026/11/19/taiwan-japan-intercept-russian-tu-95/',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or NATO states. Polish air-raid alerts and stay-at-home advice in the south-east on 20 Nov were local and tied to the strike.",
      sources: [
        'https://www.washingtontimes.com/news/2026/nov/20/tusk-says-russian-missile-landing-poland-appears-intentional/',
        'https://www.babs.admin.ch/en/sirens',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, borderline. The Shenzhen declaration (19 Nov) has no follow-up date or working group; reactions call it vague. Putin ruled out energy and Black Sea truces and Peskov says the Ukraine peace process is 'on hold' (TASS). Denmark expelled Russia's defence attaché (20 Nov). Prisoner swap (1,200–1,300 per side) still pending. No closures, ordered departures or 'leave now' advisories. Would turn amber on a wider expulsion spiral, collapse of the swap or ordered departures.",
      sources: [
        'https://www.al-monitor.com/originals/2026/11/china-and-russia-release-peace-declaration-after-trump-xi-putin-meeting',
        'https://www.scmp.com/news/china/military/article/3375268/concrete-aims-or-just-symbolism-trump-xi-and-putin-talk-nuclear-risk-controls-stall',
        'https://arabnews.com/world/denmark-expels-russian-diplomat-over-attempt-to-kill-ukrainian-rapper-3013218',
        'https://tass.com/politics/2222385',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. Putin's 'far more painful' threat (19 Nov) was carried out conventionally. Zakharova said on 20 Nov that NATO is 'openly preparing' for war and should account for both sides' nuclear arsenals, while saying Russia has no plans to attack NATO (TASS only). No explicit nuclear threat or ultimatum. Trump deferred any decision on new Iran strikes to after the new year.",
      sources: [
        'https://tass.com/politics/2222319',
        'https://www.foxnews.com/world/russia-putin-vows-response-far-more-painful-ukraine-attacks-prized-bridge-crimea',
        'https://theprint.in/world/trump-says-no-rush-on-iran-decision-looks-to-next-year/3103750/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, easing slightly. Equinor said on 20 Nov its cyberattack was stopped (production never affected); Norway's NSM says the Equinor and Skagerak incidents do not appear to target the energy sector specifically; no attribution. Genoa airport closed ~2 hours on 19 Nov over drones; CDG briefly held arrivals. No new hoax-threat wave, GPS jamming, cable or grid incident 19–21 Nov.",
      sources: [
        'https://www.rigzone.com/news/equinor_says_cyberattack_stopped-20-nov-2026-185131-article/',
        'https://industrialcyber.co/utilities-energy-power-water-waste/equinor-thwarts-cyberattack-as-separate-intrusion-at-skagerak-energi-raises-concerns-across-norways-energy-sector/',
        'https://uk.lapresse.it/news-en/2026/11/20/genoa-drone-alert-colombo-airport-closed-and-then-reopened/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX red at 35.9, gold amber; Brent and franc green), but the stress is not geopolitical. Fri 20 Nov: S&P 500 −3.7%, Nasdaq −5.3%; S&P and Dow in correction, Dow's worst week since March 2020, on an AI unwind (reported SEC probe into Nvidia, Nvidia −23% on the week) and ~97% odds of a Fed hike in December. Gold −8.7% on the week to ~$3,540 (margin selling, strong dollar), Brent $92.57, EUR/CHF ~0.922: no safe-haven flows. Markets did not react to the Polish missile incident.",
      sources: [
        'https://www.hngn.com/articles/273903/20261120/wall-street-plunges-correction-ai-selloff-erases-nasdaqs-2026-gains.htm',
        'https://www.home.saxo/en-mena/content/articles/options/stocks-fall-together-as-near-term-volatility-jumps---options-brief---20-november-2026-20112026',
        'https://www.indexbox.io/blog/gold-extends-steep-weekly-loss-as-hawkish-fed-bets-and-equity-rout-weigh/',
        'https://energynow.com/2026/11/oil-prices-rebound-friday-on-middle-east-tensions-but-fall-for-third-straight-week-wti-closes-at-83-98-brent-at-92-57/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background). Gulf: another tanker set on fire near Khasab on 20 Nov (UKMTO: seven attacks in a week); the US tightened its blockade, threatening action against ship-to-ship transfers of Iranian cargo; a 20 Nov Qeshm explosion is disputed (Tasnim later said munitions disposal). Trump told Reuters he will decide on new strikes after the new year; CBS reports US–Israel planning for near-term action (single source). Iran calls the dirty-bomb report a pretext. No NPT vote, no nuclear tests; North Korea quiet since 4 Nov.",
      sources: [
        'https://www.bairdmaritime.com/security/incidents/projectile-strikes-outbound-tanker-in-strait-of-hormuz-sparks-fire',
        'https://aljazeera.com/news/2026/11/20/us-targets-irans-ship-to-ship-transfers-can-tehran-break-the-blockade',
        'https://www.rte.ie/news/middle-east/2026/1119/1599925-us-iran/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, improving. Rhine at Kaub recovering strongly (~1.0 m on 18 Nov, ~1.5 m on 20 Nov, single-source readings), which should ease depot resupply. Latest fuel figures: Grand Est ~14–20% of stations short (17–18 Nov); Territoire de Belfort 44% and Doubs 18% (14 Nov); no newer departmental data, so still fill up before the A36. Strikes fading, no blockades. Irish Ferries Cherbourg–Dublin back to delays rather than cancellations (21 Nov Dublin departure delayed); no Brittany Ferries disruption found. No Donegal warning in force.",
    sources: [
      'https://media.roole.fr/quotidien/au-volant/carburants-pourquoi-1-station-service-sur-5-est-en-rupture-dans-le-grand-est',
      'https://lesvoitures.fr/penurie-carburant/',
      'https://pegelonline.wsv.de/gast/stammdaten?pegelnr=25700100',
      'https://www.irishferries.com/ie-en/sailing-updates/ireland-france/',
    ],
  },
};
