// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-12: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-12',
  issuedAt: '2026-11-12T05:57:15Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. More detail on the 10–11 Nov Baltic drone: officials held fire over Kaunas (built-up area); NATO jets then made two failed intercepts near Biržai — one missile missed and self-destructed, debris fell in Biržai district; the drone flew on into Latvia. Lithuania investigating with Poland, Latvia and Estonia; no origin stated, no Article 4. Nothing new confirmed for 11–12 Nov on Kaliningrad, the Black Sea or major Russian strikes (last: 10–11 Nov). Taiwan: Chinese \"silent\" exercise continues, no blockade.",
      sources: [
        'https://www.lrt.lt/en/news-in-english/19/3111025/drone-incursions-trigger-air-alerts-across-lithuania-nato-jets-scrambled',
        'https://militarnyi.com/en/news/nato-fighter-jets-twice-fail-to-shoot-down-unknown-drone-over-lithuania/',
        'https://www.taipeitimes.com/News/front/archives/2026/11/11/2003867520',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, launch or unusual bomber/SSBN activity found for November; last major strategic exercise 19–21 May. No Chinese strategic-forces news.",
      sources: [
        'https://russianforces.org/blog/2026/05/exercise_of_strategic_forces_h.shtml',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers in Switzerland, Ireland or major NATO states.",
      sources: [
        'https://www.lrt.lt/en/news-in-english/19/3110468/lithuania-calls-off-air-alert-warning-in-vilnius-and-utena-regions',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. Abu Dhabi ended 11 Nov without a breakthrough: prisoner swap agreed \"in principle\" (size and timing open), no energy or Black Sea ceasefire, territory the main obstacle; Ryabkov sees \"a foundation for further work\"; no date for the next round. Witkoff and Kushner meet Putin in Moscow today, then Zelensky in Dublin. No new expulsions or \"leave\" advisories (a single-source report of a US \"leave Iraq\" alert on 8 Nov is unconfirmed).",
      sources: [
        'https://www.nbcnews.com/world/middle-east/us-russia-ukraine-start-second-day-abu-dhabi-peace-talks-rcna608714',
        'https://www.spokesman.com/stories/2026/nov/11/us-envoys-to-meet-putin-and-zelenskyy-after-abu-dh/',
        'https://tass.com/politics/2216315',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements or ultimatums from Russian, US, Chinese or North Korean leaders found for 11–12 Nov; no Russian statement on the Baltic drones.",
      sources: [
        'https://tass.com/politics/2216315',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax threats, cyberattacks, cable damage or GPS surge for 11–12 Nov. France attributed the early-November supermarket refrigeration hacks to Iran's Revolutionary Guard (9 Nov).",
      sources: [
        'https://www.euronews.com/2026/11/07/hackers-probed-europes-fridge-systems-weeks-before-cyberattacks-who-did-it-and-what-could-',
        'https://www.aljazeera.com/news/2026/11/4/eu-urges-action-as-germany-romania-and-uk-report-supermarket-cyberattacks',
      ],
    },
    markets: {
      status: 'green',
      note: "Green. Wed 11 Nov: S&P +1.3%, Nasdaq +1.6% on strong CoreWeave earnings; VIX 17.5; Brent ~$92; gold slipped below $4,000 (~$3,990); franc weaker (EUR/CHF 0.923); STOXX 600 near a record. Nvidia fell ~8% after hours on a WSJ report its board may remove the CEO — company-specific, not geopolitical.",
      sources: [
        'https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-nov-11-2026',
        'https://www.washingtonpost.com/business/2026/11/11/wall-street-stocks-dow-nasdaq/86c5e492-de15-11f1-912c-4fbb80d73f7f_story.html',
        'https://finance.yahoo.com/markets/stocks/articles/wall-st-futures-fall-nvidia-011540333.html',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Hardened but not escalating. Trump says the Iran war is \"effectively over\"; Iran denies planned talks and says Hormuz stays shut until its seven demands are met; Rubio calls them \"totally unrealistic\" and backs the blockade. APEC (18–19 Nov): Trump–Xi bilateral confirmed by both sides; three-way with Putin still \"under discussion\". Israel: Eisenkot holds the mandate (67 MKs); Speaker vote 17 Nov. No new Taiwan statements; North Korea quiet since 4 Nov.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/11/iran-denies-talks-with-us-says-hormuz-will-stay-shut-until-demands-are-met',
        'https://euronews.com/2026/11/10/trump-says-iran-war-effectively-over-as-tehran-denies-planned-talks',
        'https://www.koreatimes.co.kr/world/20261107/china-confirms-discussions-underway-on-historic-xi-trump-putin-meeting',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, French fuel easing. Official: ~10% of stations in difficulty on 11 Nov (two sources); Grand Est 19%; Bas-Rhin worst at 35% — low Rhine levels are blocking depot resupply; the ministry says no further strategic-stock release. 17 Nov: mainly a public-sector pay strike (six unions); no joint SNCF/RATP call; transport plans due 16 Nov; nothing on depots or motorways. No confirmed Gilets jaunes Acte V on 14 Nov. Dublin: EPC summit today, EU leaders 13 Nov, transport disruption expected, no incidents. Ferries and flights normal.",
    sources: [
      'https://www.connaissancedesenergies.org/afp/carburant-approvisionnement-en-tension-dans-le-nord-est-de-la-france-261111',
      'https://www.europe1.fr/societe/carburants-des-tensions-dapprovisionnement-dans-le-quart-nord-est-de-la-france-1225715',
      'https://www.cestlagreve.fr/greve/fonction-publique-novembre-2026/',
      'https://www.transportforireland.ie/news/significant-disruption-to-public-transport-anticipated-in-central-dublin-on-10th-to-13th-november-around-eu-presidency-meetings/',
    ],
  },
};
