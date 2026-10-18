// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-18: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-18',
  issuedAt: '2026-10-18T05:10:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Top of amber, closest yet to direct contact. 17 Oct: Romanian F-16s shot down two jet-powered Geran (Russian-type) drones over Romania\'s territorial waters ~20–25 km off Sulina. North Atlantic Council meets on Black Sea defence on Tue 20 Oct (not described as Article 4). NATO yet to answer Bulgaria\'s request for jets and anti-drone systems. Shooting down attacking drones is not sustained direct combat; red needs that or Article 5. Watch 20 Oct for Article 4.',
      sources: [
        'https://ianslive.in/romanian-f-16s-shoot-down-two-drones-over-black-sea-bucharest-calls-nato-meeting-on-black-sea-defence--20261017225953',
        'https://www.arabnews.com/world/romania-shoots-down-two-drones-over-the-black-sea-3006873',
        'https://defconlevel.com/alert/2026-10-17-romanian-air-force-f-16s-shoot-down-two-geran-drones-over-territorial-waters-near-sulina',
        'https://www.defensenews.com/global/europe/2026/10/16/bulgaria-seeks-nato-anti-drone-systems-defense-minister-says/',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Grom announcement, Barents or Kapustin Yar NOTAMs for 18–22 Oct, or SSBN/bomber/warhead moves. Russia\'s OSCE envoy called for a "military response" to Steadfast Noon (rhetoric, no forces named); Pacific Fleet submarine Novosibirsk fired conventional cruise missiles 15 Oct. Watch 18–22 Oct (Grom was 22 Oct last year).',
      sources: [
        'https://www.peacelink.it/en/a/51684.html',
        'https://www.armyrecognition.com/news/navy-news/2026/russia-highlights-dual-sea-and-land-strike-capability-of-novosibirsk-nuclear-powered-submarine',
        'https://militarnyi.com/en/news/russia-closes-airspace-over-kapustin-yar-launch-site-for-oreshnik-missiles/',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland; Romania\'s and Bulgaria\'s responses are diplomatic and military only.',
      sources: [
        'https://ianslive.in/romanian-f-16s-shoot-down-two-drones-over-black-sea-bucharest-calls-nato-meeting-on-black-sea-defence--20261017225953',
        'https://easternherald.com/2026/10/17/bulgaria-nato-jets-black-sea-ship-attacks/',
      ],
    },
    diplomacy: {
      status: 'amber',
      note: 'Raised from green. 17 Oct: Romania summoned Russia\'s ambassador and expelled a Russian embassy staffer after the drone shootdowns, following EU summit conclusions (16 Oct) blaming Russia for Black Sea ship attacks. Single expulsion, not mass; no embassy drawdowns, talks broken off or new "leave" advisories (US "depart Russia" is the standing baseline).',
      sources: [
        'https://ianslive.in/romanian-f-16s-shoot-down-two-drones-over-black-sea-bucharest-calls-nato-meeting-on-black-sea-defence--20261017225953',
        'https://www.arabnews.com/world/romania-shoots-down-two-drones-over-the-black-sea-3006873',
        'https://sofiaglobe.com/2026/10/17/eu-leaders-blame-russia-for-attacks-on-civilian-shipping-in-the-black-sea/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, no change. No new nuclear statements, ultimatums or readiness announcements since Putin\'s 1 Oct Valdai "all weapons" warning over Kaliningrad and Grushko\'s ~15 Oct pipeline warning. No Latvian answer on the Kaliningrad gas pipeline.',
      sources: [
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
        'https://www.themoscowtimes.com/2026/10/01/putin-says-world-is-living-through-a-dangerous-moment-warns-west-not-to-escalate-a93846',
        'https://english.nv.ua/nation/estonia-seeks-to-block-russian-gas-route-to-kaliningrad-50650158.html',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, no change. French supermarket refrigeration attack still unattributed; Paris prosecutor and OFAC investigating (Danfoss and Copeland controllers; 200–300 Intermarché stores among those hit). No grid, bank or telecom outages, cable cuts or GPS jamming 17–18 Oct.',
      sources: [
        'https://www.franceinfo.fr/internet/securite-sur-internet/cyberattaques/des-magasins-systeme-u-et-intermarche-touches-par-une-cyberattaque-contre-leurs-installations-frigorifiques_8233720.html',
        'https://www.ici.fr/infos/faits-divers-justice/une-cyberattaque-d-une-extreme-gravite-cible-les-frigos-d-intermarche-de-leclerc-et-du-groupe-u-8217697',
        'https://retailtimes.co.uk/french-supermarket-cyberattack-looks-like-nation-state-says-sentinelone/',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber, worsening. Friday 16 Oct: Brent $109.86 (+3.7%), VIX ~20 (+21%), gold ~$4,185, EUR/CHF ~0.927. UKMTO counts a record 23 attacks on ships near Hormuz since 1 Oct (10+ in a week); IRGC says a tanker hit a mine on 17 Oct (unverified). No US strikes. Weekend reaction unknown until Monday.',
      sources: [
        'https://tradingeconomics.com/commodity/brent-crude-oil',
        'https://www.investing.com/commodities/brent-oil-historical-data',
        'https://www.cbsnews.com/live-updates/iran-war-us-trump-strait-of-hormuz-yemen-houthis-saudi-arabia/',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, slight shift. China\'s foreign ministry called the US demand to join nuclear disarmament talks "unfair, unfounded and unrealistic" (~16 Oct); Russia\'s arms-control chief called shortcuts to "nuclear zero" counterproductive (17 Oct). Trump\'s "denuclearization talks" claim unconfirmed. No testing news.',
      sources: [
        'https://tass.com/world/2202901',
        'https://tass.com/politics/2203555',
        'https://www.aljazeera.com/news/2026/10/16/us-in-denuclearisation-talks-with-russia-and-china-trump',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber, slight easing. French fuel: 91% of stations without problems on 17 Oct; Grand Est down to 16% with problems (from 19%); 3.8% fully dry. Still fill up in Switzerland. One Brittany Ferries Rosslare–Cherbourg sailing cancelled and moved to 16 Oct; Barfleur covers the route this month. No airline strike, Irish Ferries and Swiss–Irish flights normal.',
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://www.essencepascher.fr/carte-penurie-carburant',
      'https://afloat.ie/port-news/ferry-news/brittany-ferries/item/73373-former-english-channel-ferry-barfleur-debuts-on-france-ireland-route-albeit-temporarily',
    ],
  },
};
