// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-17: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-17',
  issuedAt: '2026-11-17T05:57:37Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, rising. Ukraine launched its largest drone attack of the war on 15–16 Nov: Russia says it downed 1,336 drones, about 600 aimed at Moscow; a hit on the Crimean Bridge is single-source. Coming after the 12–13 Nov attack, pressure on Russia to retaliate is high, but no large Russian strike seen yet (16 Nov: 158 drones, routine). Nothing new on NATO airspace (latest 10–11 Nov Baltics), Kaliningrad, Black Sea or sabotage; no Article 4. (\"17 Nov, 120 missiles\" reports are from 2024.)",
      sources: [
        'https://www.washingtontimes.com/news/2026/nov/16/ukraine-launches-largest-drone-assault-war-russia/',
        'https://abcnews.com/International/ukraine-fires-1336-drones-russia-wars-largest-attacks/story?id=138171397',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. No Grom exercise, strategic launch, unusual submarine/bomber activity or Oreshnik use reported for 16–17 Nov. Watch Russia's response to the record drone attack: an Oreshnik strike or snap nuclear drill would make this amber. Autumn Grom still expected.",
      sources: [
        'https://www.defensenews.com/global/europe/2026/05/20/russia-launches-unannounced-nuclear-exercise-including-belarusian-launch-sites/',
        'https://www.themoscowtimes.com/2026/07/31/russia-simulates-massive-nuclear-response-to-enemy-attack',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, leadership relocations or emergency powers in Switzerland, Ireland or NATO states; only routine Finnish/Baltic overnight drone warnings.",
      sources: [
        'https://www.al-monitor.com/originals/2026/11/baltic-nations-finland-issue-overnight-drone-warnings-russia-ukraine-exchange',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. China confirmed (16 Nov) the Xi–Trump–Putin meeting for Thu 19 Nov in Shenzhen; White House says nuclear arms reduction is on the agenda, but US officials play down a deal. Ushakov says Russia and China sent a draft joint statement (single source). Prisoner swap still agreed in principle only. No expulsions or new 'leave now' advisories.",
      sources: [
        'https://www.france24.com/en/asia-pacific/20261116-xi-trump-putin-discuss-world-peace-shenzhen-summit-china-says',
        'https://www.cnbc.com/2026/11/16/trump-xi-putin-ukraine-nuclear-tariffs-russia-iran-.html',
        'https://www.hngn.com/articles/273717/20261116/china-confirms-talks-first-xi-putin-trump-summit-apec.htm',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. No new nuclear statements from Putin, Medvedev, Peskov, Lavrov, Ryabkov, Zakharova, Kim or Chinese officials dated 16–17 Nov, and no ultimatums. Trump's remarks concern putting denuclearisation on the summit agenda.",
      sources: [
        'https://www.cnbc.com/2026/11/16/trump-xi-putin-ukraine-nuclear-tariffs-russia-iran-.html',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, no change. Nothing new for 16–17 Nov. The 9 Nov GPS jamming (~80 aircraft over NL/BE/UK/DE, suspected North Sea ship) is still under Dutch investigation; last hoax bomb-threat wave 5–6 Nov.",
      sources: [
        'https://www.vrt.be/vrtnws/en/2026/11/16/gps-signals-from-dozens-of-aircraft-over-belgium-and-the-netherl/',
        'https://www.aerotime.aero/articles/schiphol-gps-jamming-80-aircraft-north-sea',
      ],
    },
    markets: {
      status: 'green',
      note: "Green, watch. US stocks fell on 16 Nov (S&P −1.9%, Nasdaq −2.5%) on an AI/chip sell-off before Nvidia results (Tue after close); VIX 22.9, up ~31% over five days. Not geopolitical: Brent fell to ~$91.7 on IEA surplus outlook, gold down 3% over five days, EUR/CHF 0.924 with no flight to the franc.",
      sources: [
        'https://www.cnn.com/2026/11/16/business/stocks-nvidia-ai-anthropic',
        'https://finance.yahoo.com/markets/stocks/articles/stock-market-news-nov-16-132700717.html',
        'https://journalarta.com/en/2026/11/17/brent-oil-falls-as-supply-outlook-puts-crude-under-pressure/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), worsening in the Gulf. US strikes hit Iranian missile launchers at Bandar Lengeh and Sirik on the night of 15 Nov after Iranian attacks on a US base in Bahrain and on tankers; a third US carrier (Theodore Roosevelt) has arrived. IRGC Hormuz mine claims unverified; UKMTO reported two tanker attacks on 16 Nov. Israeli Speaker vote today, 17 Nov. No new NPT, testing or North Korea developments.",
      sources: [
        'https://www.euronews.com/2026/11/16/us-and-iran-slide-closer-to-fresh-all-out-war-as-new-exchange-of-fire-increases',
        'https://www.cnbc.com/2026/11/17/iran-war-trump-hormuz-oil-.html',
        'https://www.aljazeera.com/news/2026/11/17/tankers-hit-in-strait-of-hormuz-as-drone-raises-alarm-at-iraq-gas-field',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, fuel worse. Grand Est 22% of stations short of at least one fuel on 16 Nov (Bas-Rhin 50%); along the A36 Haut-Rhin and Territoire de Belfort ~44%, Doubs ~18% (low Rhine water). Leave with a full tank. 17 Nov strike: TGVs normal, ~10% TER cancelled, no A36 blockades, no flight cuts found. Irish Ferries cancelled Cherbourg–Dublin 17 Nov and Dublin–Cherbourg 18 Nov (weather; operator only). No Donegal snow warning confirmed; check met.ie.",
    sources: [
      'https://trans.info/fr/diesel-france-baisse-prix-penuries-grand-est-novembre-2026-514667',
      'https://lesvoitures.fr/penurie-carburant/',
      'https://mistertravel.news/2026/11/16/greve-du-17-novembre-ce-quil-faut-savoir-a-la-veille-du-mouvement/',
      'https://www.irishferries.com/uk-en/sailing-updates/ireland-france/',
    ],
  },
};
