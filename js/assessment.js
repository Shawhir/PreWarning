// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-19: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-19',
  issuedAt: '2026-11-19T05:58:52Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, not red (no direct combat between nuclear powers, no Article 5). The Kerch (Crimean) Bridge was struck again late on 18 / early 19 Nov and traffic suspended (Moscow Times, CNN); the Kremlin calls it terrorism and promises a rebuild, but no new massive Russian retaliation or Oreshnik use yet, possibly held back until after the Shenzhen summit. A Russian drone fell ~300 m from Mukachevo station near the Hungarian border on 17–18 Nov. Black Sea: GAS HUSKY sank off Bulgaria on 17 Nov (drone cause per Romania only), after BETUL 8 on 16 Nov and the Sulina strikes of 13–15 Nov; at least 17 vessels attacked off Romania and Bulgaria since July; no new attacks 18–19 Nov. No Article 4 request; Romania and Bulgaria have asked NATO for support. Estonia detained 8 over a GRU-ordered arson plot and will close all crossings with Russia from 1 Dec.",
      sources: [
        'https://www.themoscowtimes.com/2026/11/19/traffic-suspended-over-crimean-bridge-after-attack-moscow-installed-official-says-a94306',
        'https://www.cnn.com/2026/11/18/europe/crimea-russia-bridge-ukraine-kerch-latam-intl',
        'https://safety4sea.com/two-ships-sink-off-bulgaria-amid-reports-of-black-sea-drone-attacks/',
        'https://www.usnews.com/news/world/articles/2026-11-15/three-ships-struck-by-drones-in-black-sea-near-romanian-shipping-canal-pm-says',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. Two Tu-95MS bombers and two Il-76s remained at Da Nang, Vietnam, on 18 Nov; Japan confirmed a Russian airspace violation near Fukuoka on 17 Nov (first since Sept 2024). The US Minuteman III test GT-257 launched as scheduled on 17 Nov (routine). No Grom exercise, Russian strategic launch or deployment change.",
      sources: [
        'https://www.twz.com/air/russian-bombers-arrive-in-vietnam-after-flurry-of-northeast-asia-air-alerts',
        'https://www.japantimes.co.jp/news/2026/11/17/japan/russia-japan-airspace-violation-defense/',
        'https://www.afgsc.af.mil/News/Article-Display/Article/4650912/gt-257-icbm-test-launch-verifies-system-reliability/',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or NATO states. Estonia's border closure from 1 Dec is a security measure, not a continuity move.",
      sources: [
        'https://www.swissinfo.ch/eng/various/from-2026-all-conscripts-up-to-the-age-of-40-will-have-to-join-civil-defence/90321752',
        'https://www.irishtimes.com/ireland/2026/11/05/states-ability-to-defend-itself-compromised-by-lack-of-security-strategy-says-defence-forces/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. Xi and Putin met in Shenzhen on 18 Nov (trade, energy, 'multipolar world'). On 19 Nov Trump met Putin for under an hour (no deal announced), then Xi; the Xi–Trump–Putin trilateral was starting at the time of writing, outcome and any joint communiqué not yet known. Prisoner swap (more than 1,000 per side, agreed in principle 11 Nov) not yet carried out. No new expulsions or 'leave now' advisories.",
      sources: [
        'https://www.euronews.com/2026/11/18/chinas-xi-jinping-and-putin-hold-talks-in-shenzhen-on-eve-of-three-way-summit-with-trump',
        'https://asia.nikkei.com/politics/international-relations/apec/apec-live-trump-tells-putin-we-ve-had-a-great-relationship-for-many-years',
        'https://www.aljazeera.com/news/liveblog/2026/11/19/apec-live-trump-xi-and-putin-to-meet-in-historic-three-way-china-summit',
        'https://www.npr.org/2026/11/11/g-s1-152954/russia-ukraine-war-talks',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. No official Russian nuclear threat over the Kerch Bridge strikes; Peskov promises a rebuild, and calls for a nuclear reply appear only in Russian opinion pieces. Trump said Iran would 'pay a price the likes of which no country has ever paid' and is 'looking at gases… bio', while US officials call the reported dirty-bomb plot aspirational. No new statements from Kim or Chinese officials.",
      sources: [
        'https://www.nbcnews.com/world/russia/kerch-bridge-strikes-putin-crimea-ukraine-russia-war-kyiv-rcna609756',
        'https://www.aljazeera.com/news/2026/11/17/is-iran-plotting-a-dirty-bomb-attack-in-the-us-what-we-know',
        'https://www.bloomberg.com/news/articles/2026-11-19/trump-says-iran-looking-at-gas-bioweapons-but-downplays-threat',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, no change. Equinor confirmed an ongoing cyberattack on its internal IT on 17 Nov (production unaffected, no attribution). Moldova closed its airspace for ~35 minutes on 17 Nov after a Russian Geran-2 drone headed toward Chișinău. Hoax bomb-threat wave (8,000+ since 19 Oct, Reuters) with no new wave on 18–19 Nov. No new GPS-jamming, cable or grid incident.",
      sources: [
        'https://securityaffairs.com/203394/hacking/norwegian-gas-giant-equinor-says-its-under-cyberattack-production-keeps-running.html',
        'https://www.marketscreener.com/news/equinor-detects-ongoing-cyberattack-output-unaffected-ce785edcdd8ff520',
        'https://www.euronews.com/2026/11/17/moldova-closes-airspace-after-shahed-type-drone-detected-heading-towards-chisinau',
        'https://airlive.net/news/2026/11/17/moldova-closed-its-national-airspace-after-russian-geran-2-drone-was-spotted-over-chisinau/',
      ],
    },
    markets: {
      status: 'green',
      note: "Back to green. VIX eased to 24.6 on 18 Nov (feed green). Stress is not geopolitical: S&P 500 down a fifth day on chips, UnitedHealth and hawkish Fed minutes; gold at a 14-month low (~$3,720–3,750) and EUR/CHF ~0.924, so no safe-haven flows. Brent ~$89–92 on a US crude build. No summit reaction yet.",
      sources: [
        'https://www.stocktitan.net/articles/stock-market-today-live-november-18-2026',
        'https://www.mitrade.com/insights/commodity-analysis/gold/gold-breaks-14-low-hawkish-fed-minutes',
        'https://invezz.com/sg/news/2026/11/18/oil-price-today-brent-slips-as-api-shows-528-million-barrel-us-crude-build/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), Gulf still worsening. After the 17 Nov Bahrain radar attack and US strike on Qeshm, Iran on 18 Nov launched drones at Kuwait's Ali Al Salem air base and at Bahrain (intercepted; Bahrain issued shelter alerts), and an ADNOC ship was struck in Hormuz with one crew member missing. Qatar, Oman and Pakistan mediate a strait-for-blockade deal; no agreement. Iran NPT exit under review, no vote. No nuclear tests; North Korea quiet since 4 Nov.",
      sources: [
        'https://nbcnews.com/world/iran/iran-widens-gulf-attacks-targeting-us-air-base-kuwait-sites-bahrain-rcna610128',
        'https://www.cnn.com/2026/11/17/politics/us-iran-self-defense-strikes',
        'https://www.tradewindsnews.com/casualties/tanker-hit-in-hormuz-attack-and-iran-launches-strikes-on-gulf-states/2-1-2076320',
        'https://www.thenationalnews.com/news/mena/2026/11/18/war-or-peace-fate-of-iran-conflict-travels-with-trump-to-shenzhen/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, fuel improving. Grand Est stations short of fuel fell from 21% (16 Nov) to 14% (18 Nov 09:00, official site); the latest departmental figures (14 Nov) were 44% in Territoire de Belfort and Haut-Rhin, so still fill up before the A36. The Rhine at Kaub is recovering (~0.9 m and rising on 18 Nov). No road or depot blockades. Irish Ferries Cherbourg–Dublin was weather-hit: 17–18 Nov cancelled, 19 Nov Dublin–Cherbourg delayed ~7 h. Correction: Cherbourg–Rosslare is run by Brittany Ferries, not Stena. No Donegal warning in force.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://lesvoitures.fr/penurie-carburant/',
      'https://pegelonline.wsv.de/gast/stammdaten?pegelnr=25700100',
      'https://www.irishferries.com/ie-en/sailing-updates/ireland-france/',
    ],
  },
};
