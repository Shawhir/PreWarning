// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-25: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-25',
  issuedAt: '2026-11-25T05:59:44Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band; not red. New: a Russian drone briefly entered Polish airspace near Dorohusk at ~22:56 on 23 Nov during strikes on western Ukraine; a shootdown was authorised but not carried out as it turned back; sirens in Lublin districts (ABC, Ukrinform). NATO's SACEUR authorised forward deployment of one AWACS to Poland; Poland's request for extra fighters not granted; Article 4 not invoked. Poland handed Russia's ambassador a protest note on 24 Nov; he denied the missiles were Russian. Kremlin warned of 'painful consequences' over the Merkury corvette sunk at Benghazi (Zelensky confirmed 7 naval drones); no retaliation yet. Russian strikes on Ukraine at routine levels (96 drones overnight into 24 Nov); Ukraine hit 15 Russian refineries in November. No Oreshnik use; no new Black Sea ship strikes since 17–19 Nov.",
      sources: [
        'https://abcnews.com/International/russian-drone-flies-poland-overnight-strikes-ukraine-warsaw/story?id=138403724',
        'https://www.stripes.com/theaters/europe/2026-11-24/nato-authorizes-awacs-deployment-poland-23564156.html',
        'https://www.anews.com.tr/world/2026/11/24/poland-hands-diplomatic-note-to-russian-ambassador-over-airspace-violation',
        'https://www.cnbc.com/2026/11/23/ukraine-russia-warship-libya.html',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. Sputnik-S: per the WDR/NDR/SZ report, Western intelligence believes a nuclear-armed satellite has been built and could launch in December; Bundeswehr Space Command thinks a launch before year-end possible; Rutte (24 Nov, with Merz) says NATO has response options and its commitment covers space; Merz neither confirmed nor denied; the Kremlin and Russia's Berlin embassy call it groundless. No US statement; no observed launch preparations at Plesetsk, Baikonur or Vostochny. OSINT counts 47 strategic bombers at Ukrainka in the Far East (dispersal from drone range, not an alert). No Grom exercise, strategic launch or deployment change.",
      sources: [
        'https://www.themoscowtimes.com/2026/11/23/kremlin-dismisses-reports-about-alleged-nuclear-armed-satellite-launch-a94349',
        'https://meduza.io/en/feature/2026/11/23/western-intelligence-services-say-russia-could-put-satellite-with-nuclear-warhead-into-orbit-in-coming-months',
        'https://eualive.net/natos-rutte-vows-space-defence-as-german-media-report-imminent-russian-nuclear-satellite-launch/',
        'https://united24media.com/war-in-ukraine/russia-masses-47-nuclear-capable-bombers-at-far-eastern-airbase-in-rare-fleet-concentration-24179',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or NATO states; only local Polish air-raid alerts (23 Nov) and Finland's eastern Gulf of Finland restrictions.",
      sources: [
        'https://www.babs.admin.ch/en/shelters-for-the-population',
        'https://www.irishtimes.com/ireland/2026/11/11/legal-block-preventing-use-of-military-force-removed/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, borderline. Poland handed Russia's ambassador a protest note (24 Nov, ~9-minute meeting). Russia's response to Denmark's attaché expulsion still pending (deadline ~27 Nov); a tit-for-tat would be routine. Denmark's EU tourist-visa proposal needs unanimity; no decision. No date or invitees for Putin's proposed European talks in Moscow. Prisoner swap still pending. No ordered departures or 'leave now' advice involving Russia, NATO or China; US Gulf embassies issued security alerts on 24 Nov over Houthi attacks.",
      sources: [
        'https://www.anews.com.tr/world/2026/11/24/poland-hands-diplomatic-note-to-russian-ambassador-over-airspace-violation',
        'https://united24media.com/world/denmark-expels-russian-defense-attache-over-alleged-plot-to-kill-ukrainian-rapper-kyivstoner-24583',
        'https://www.usnews.com/news/world/articles/2026-11-19/putin-says-russia-invited-europeans-to-moscow-to-clarify-position-on-ukraine-talks',
        'https://ae.usembassy.gov/security-alert-u-s-mission-united-arab-emirates-november-24-2026/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Kremlin, NATO or US reaction yet to Medvedev's 'preventive nuclear attack' article; ISW reads it as the Kremlin using Medvedev as nuclear messenger, not a policy change. Merz said the satellite reports show 'the level of escalation Russia is evidently prepared to pursue'. Peskov warned of 'painful consequences' over Merkury (non-nuclear). Nothing new from Putin, Lavrov or Kim. Trump: 'not one Iranian ship has gotten through'; new strikes after the new year if no deal.",
      sources: [
        'https://tass.com/politics/2223199',
        'https://mezha.net/eng/news/mezha-6f536efd2c85ab20da612ec0_isw-_the_kremlin/',
        'https://www.scmp.com/news/world/russia-central-asia/article/3375522/nato-vows-space-defence-after-russia-nuclear-satellite-report',
        'https://www.foxnews.com/politics/trump-warns-new-strikes-against-iran-after-new-year-calls-negotiators-professional-tap-dancers',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, steady. No new cyberattack, cable or pipeline break, grid incident or hostile airport closure in Europe on 23–25 Nov. The US Navy reported three drones near NAS Sigonella on 20 Nov. A Belgian national strike shut Brussels Airport on 23 Nov (labour, not hostile). No new hoax bomb-threat wave.",
      sources: [
        'https://dronexl.co/2026/11/23/navy-three-drones-nas-sigonella-italian-sources-one-quadcopter/',
        'https://www.flight-delayed.com/en/news/2026/11/21/brussels-airport-strike-23-november-2026',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX 26.4 amber; gold, Brent and franc green). Monday's rally faded: on 24 Nov the S&P 500 fell 0.5% and the Nasdaq 1.5% as chip stocks slumped (SOX −7.9%); on 25 Nov Asia sold off sharply (Kospi −5.7% with a trading curb, Taiwan −4.8%) on the AI reversal and US tariff threats. Brent ~$88–89, lowest since August; gold ~$3,550–3,620, still not a safe haven; franc slightly firmer (EUR/CHF 0.918). Stress is tech- and tariff-driven, not geopolitical. Note: the report that Nvidia reinstated Jensen Huang rests on a single source. US markets closed Thursday for Thanksgiving.",
      sources: [
        'https://www.nbcnews.com/business/markets/stocks-lower-after-nvidia-fueled-gains-rcna611211',
        'https://www.business-standard.com/amp/markets/news/asian-stocks-tumble-as-ai-rebound-stumbles-us-tariff-threats-loom-126112500066_1.html',
        'https://www.tradingpedia.com/2026/11/23/swiss-franc-gains-as-caution-returns-to-global-markets/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), leaning toward escalation. Iran's army commander ordered Hormuz closed 'further day by day' until the US blockade is lifted (24 Nov); the IRGC claims three tankers hit mines on 23 Nov (unconfirmed); CNN counts at least 22 attacks on shipping in November. The Kharg tanker convoy has not sailed: Iran's Supreme National Security Council reportedly halted it and state TV denies it. Houthi drone hit Riyadh's PIF tower again on 24 Nov (11 injured). Qatar still mediating; no deal. NPT automatic-exit bill: no vote, limited support. North Korea's Yongbyon enrichment annex externally complete (IAEA, WSJ).",
      sources: [
        'https://www.euronews.com/2026/11/24/iran-orders-hormuz-closed-further-day-by-day-as-qatar-seeks-to-revive-peace-talks',
        'https://www.thenationalnews.com/news/gulf/2026/11/24/is-iran-weighing-tanker-convoy-to-break-us-blockade/',
        'https://www.bloomberg.com/news/articles/2026-11-24/riyadh-s-finance-hub-attacked-saudi-anti-houthi-coalition-says',
        'https://en.sedaily.com/world/2026/11/23/north-korea-expands-yongbyon-enrichment-site-wsj-reports',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, leaning easier. Rhine at Kaub 2.23 m on 23 Nov (PEGELONLINE), up from 1.4 m on 20 Nov, so barge fuel supply to Alsace should recover. Fuel (latest, 21 Nov): Haut-Rhin 25%, Territoire de Belfort 22%, Doubs 11% of stations short; fill up in Switzerland. Flooding: no actual flooding or A16 / Jura road closures found; correction, an 'orange flood alert for Doubs and Jura on 24 November' circulating online is from 2025; orange alerts in 2026 are in Var, Alpes-Maritimes and Pas-de-Calais (Calais route). Upcoming French public-sector strikes 25–28 Nov and 1 Dec; no blockades announced. No ferry disruption found this week. No Donegal warning found.",
    sources: [
      'https://pegelonline.wsv.de/gast/stammdaten?pegelnr=25700100',
      'https://www.agrarzeitung.de/nachrichten/wirtschaft/gute-news-fuer-die-binnenschiffer-pegelstaende-am-rhein-steigen-160352',
      'https://leprixducarburant.com/penurie-carburant/',
      'https://www.ici.fr/hauts-de-france/pas-de-calais-62/le-pas-de-calais-est-maintenu-en-vigilance-orange-crues-ce-mardi-24-novembre-8553026',
    ],
  },
};
