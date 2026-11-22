// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-22: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-22',
  issuedAt: '2026-11-22T05:58:28Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band; not red (no sustained NATO–Russia combat, no Article 5, Article 4 not formally invoked). Follow-up to the 20 Nov Polish incident: one Kh-101 confirmed at Nowy Lipowiec, the Rudnik nad Sanem object still unidentified, a jet drone at Mołodycz; shelter alerts went out in Lubelskie and Podkarpackie. Rutte in Warsaw on 21 Nov: 'NATO will defend every inch of Polish territory'; Poland asked for more Eastern Sentry assets; the North Atlantic Council meets on Mon 23 Nov (watch whether it becomes Article 4). Peskov called the claims groundless (single source). Moldova reported drone incursions on 20 and 21 Nov; a Finnish violation and explosions at Russia's Baltiysk base in Kaliningrad on 21 Nov are unconfirmed. Russia struck Ukraine again on 20–21 Nov (3 ballistic missiles, 148 drones; 2 killed in Kryvyi Rih). No Oreshnik use; no new Black Sea ship strikes since 17 Nov.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/21/russian-missiles-hit-poland-what-happened-and-could-nato-respond',
        'https://www.usnews.com/news/world/articles/2026-11-21/nato-will-defend-every-inch-of-polish-territory-rutte-says',
        'https://www.ukrinform.net/rubric-ato/4187255-jetpowered-drone-violates-moldovan-airspace-twice.html',
        'https://english.nv.ua/nation/russia-attacks-ukraine-with-three-ballistic-missiles-148-drones-on-nov-21-50661287.html',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. No Grom exercise, strategic launch, Oreshnik use or deployment change. On 18–20 Nov Russian envoys (Zhdanova, Polyansky at the OSCE) warned that if Poland or Lithuania lift bans on hosting nuclear weapons, or NATO extends nuclear missions near Russia, 'strategic deterrence forces' would respond: words only, and no such restriction has been lifted.",
      sources: [
        'https://sputnikglobe.com/20261120/russia-warns-of-response-if-nuclear-deployment-limits-near-its-borders-are-lifted-1125122443.html',
        'https://tass.com/politics/2220541',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. Poland's 20 Nov shelter alerts were local and short-lived during the strike. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or other NATO states.",
      sources: [
        'https://www.pravda.com.ua/eng/news/2026/11/20/8063786/',
        'https://www.babs.admin.ch/en',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, borderline. Denmark ordered Russia's defence attaché out within 7 days (20 Nov) over a foiled plot to kill a Ukrainian rapper; Zakharova promises an 'appropriate' response, so expect a tit-for-tat expulsion. This is a single expulsion, not the mass expulsions or embassy drawdowns the framework treats as amber. Ryabkov (20 Nov): Shenzhen could start nuclear-risk talks but there is 'no basis' for arms control. Prisoner swap (1,000+ per side) still pending; Peskov says final stages. Correction: the 'on hold' quote was from August; the Kremlin's latest wording is a 'deep pause' (13 Nov), and the swap size is '1,000 or more', not 1,200–1,300.",
      sources: [
        'https://meduza.io/en/news/2026/11/20/denmark-to-expel-russia-s-military-attache-after-arrests-in-alleged-plot-to-kill-ukrainian-rapper',
        'https://tass.com/politics/2222681',
        'https://anews.com.tr/world/2026/11/20/russia-says-putin-trump-xi-talks-could-form-the-basis-for-dialogue-on-nuclear-risks',
        'https://www.kyivpost.com/post/90616',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. Zakharova (20 Nov): NATO is 'openly preparing for military conflict' and should remember both sides have nuclear weapons (TASS plus one other outlet). Tusk: 'no one will pretend anymore that this was an innocent accident'; ISW assesses the missiles into Poland were deliberate. No new nuclear statements from Putin, Medvedev, Lavrov, Kim or Chinese officials; no ultimatums. Trump is deferring Iran decisions to the new year.",
      sources: [
        'https://tass.com/politics/2222319',
        'https://www.kyivpost.com/post/90744',
        'https://www.axios.com/2026/11/19/trump-iran-attacks-israel-new-year',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, easing slightly. Equinor's cyberattack was stopped on 20 Nov; no attribution for it or Skagerak. The 19 Nov Genoa airport 'drone' closure may have been a light aircraft (OSINT). No new hoax-threat wave, GPS jamming, cable, grid or Polish infrastructure incident found for 20–22 Nov.",
      sources: [
        'https://www.equinor.com/news/20261711-equinor-detected-cyber-attack',
        'https://www.dronewatch.eu/genoa-airport-drone-disruption-may-have-been-caused-by-light-aircraft-osint-researcher-suggests/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX red at 35.9, its highest close of 2026; gold amber), close to red on financial stress, but not geopolitical. Week to 20 Nov: S&P 500 −8.6% (correction, seven straight losses), Nasdaq erased its 2026 gain, Bitcoin fell to ~$55k on Saturday before rebounding to ~$60k. Drivers: AI/chip rout, reported SEC probe into Nvidia, Fed hike expectations. Gold −8.9% on the week, Brent $92.57 (up Friday on Houthi threats, down for a third week), EUR/CHF 0.922: no safe-haven flows, and no recap cites the Polish incident.",
      sources: [
        'https://www.yakimaherald.com/news/nation_and_world/business/how-major-us-stock-indexes-fared-friday-11-20-2026/article_963ce6d2-85a3-5fd6-981d-e60b72a58fbb.html',
        'https://www.investing.com/indices/volatility-s-p-500-historical-data',
        'https://energynow.com/2026/11/oil-prices-rebound-friday-on-middle-east-tensions-but-fall-for-third-straight-week-wti-closes-at-83-98-brent-at-92-57/',
        'https://thecryptobasic.com/2026/11/21/tcb-daily-edition-what-happened-in-crypto-on-november-21-2026/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background). Hormuz: UKMTO reported two tankers struck on 21 Nov; Iran calls its overnight operations the most intense yet against US escorts; CENTCOM denies an IRGC claim of hitting an F-16. Iran has massed 14+ tankers at Kharg Island as a convoy that could test the US blockade, threatening UAE oil if the US intervenes. Qatari mediators held talks in Tehran on 20 Nov. Houthi missiles at Riyadh 21–22 Nov (intercepted). Iran NPT exit: bills pending, no vote. No nuclear tests.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/21/tankers-hit-in-strait-of-hormuz-as-iran-tightens-grip-on-shipping',
        'https://www.euronews.com/2026/11/20/iran-readies-tanker-convoy-at-kharg-island-to-test-us-oil-blockade',
        'https://arynews.tv/qatari-delegation-visited-tehran-for-talks-iran-deputy-fm',
        'https://www.manilatimes.net/2026/11/22/world/americas-emea/houthis-launch-revenge-strikes-on-saudi-capital/2475518',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, improving. Fuel: Haut-Rhin 25% of stations short and Doubs 11% on 20–21 Nov (aggregator, single source), down from 44% and 18% on 14 Nov; no fresh Territoire de Belfort figure; still fill up before the A36. Rhine at Kaub ~1.4 m on 20 Nov (correction from 1.5 m). No strikes or blockades on the route. No confirmed ferry cancellations this weekend. Weather: MeteoSwiss level-3 heavy-rain warning for the western Jura Sun–Mon (Vaud and Neuchâtel; Bernese Jura not named), snow only in the Alps; a national yellow rain warning in Ireland ran overnight 21–22 Nov.",
    sources: [
      'https://leprixducarburant.com/penurie-carburant/',
      'https://pegelonline.wsv.de/gast/stammdaten?pegelnr=25700100',
      'https://www.irishferries.com/ie-en/sailing-updates/ireland-france',
      'https://www.rte.ie/weather/',
    ],
  },
};
