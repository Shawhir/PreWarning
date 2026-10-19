// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-19: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-19',
  issuedAt: '2026-10-19T05:15:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Top of amber. Confirmed: Romanian F-16s shot down two jet-powered Geran drones over Romanian territorial waters off Sulina on 17 Oct. 18 Oct: a suspected drone exploded over Lithuania (debris hit a car; NATO jets scrambled, Kaunas airport briefly closed); origin unclear, possibly a Ukrainian drone diverted by Russian jamming. North Atlantic Council special session on the Black Sea Tue 20 Oct (Romania-requested, not Article 4). No new ship strikes after 15 Oct.',
      sources: [
        'https://maritime-executive.com/article/romania-shoots-down-two-suspected-russian-drones-over-its-territorial-seas',
        'https://euromaidanpress.com/2026/10/18/romania-downs-two-russian-jet-drones-near-sulina-days-before-nato-allies-meet-on-black-sea-security/',
        'https://www.usnews.com/news/world/articles/2026-10-18/lithuania-told-residents-to-go-to-shelters-after-detecting-a-flying-object',
        'https://www.scmp.com/news/world/europe/article/3371323/lithuanians-take-shelter-nato-jets-scramble-suspected-drone-explodes',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Grom announcement or confirmed 2026 Barents/Kapustin Yar NOTAMs; NATO sees no worrying change in Russian posture. An unconfirmed PeaceLink item says TASS announced Russian nuclear exercises in response to Steadfast Noon; watch through 22 Oct. Record 42-hour Tu-95MSM flight ~12 Oct.',
      sources: [
        'https://exchangemonitor.com/nato-has-proceeded-with-annual-nuclear-exercise-amid-russian-nuclear-warning',
        'https://www.peacelink.it/en/a/51684.html',
        'https://www1.ru/en/news/2026/10/12/raketonosec-tu-95msm-preodolel-rekordnye-42-casa-bez-posadki.html',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. Lithuania\'s 18 Oct shelter order was a brief local drone alert in northern/central regions (Latvia issued a yellow air warning on the border), not a national activation. No leader relocation or emergency powers in major NATO states or Switzerland.',
      sources: [
        'https://cyprus-mail.com/2026/10/18/lithuania-tells-residents-to-go-to-shelters-after-detecting-a-flying-object',
        'https://www.kiprinform.com/en/news/lithuania-issues-shelter-warning-after-suspected-drone-enters-airspace/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Lowered back to green, close to amber: correction. Yesterday\'s reported Romanian expulsion of a Russian staffer was a misdated July 2026 event (expelled 27 Jul); no new expulsion after the 17 Oct shootdowns. The EU\'s confirmed statement calling the ship attacks unacceptable is from 7 Oct; the 16 Oct summit conclusions are unconfirmed. No drawdowns, talks broken off or new "leave" advisories.',
      sources: [
        'https://english.nv.ua/nation/romania-expels-russian-diplomat-after-repeated-drone-incursions-50627660.html',
        'https://www.pravda.com.ua/eng/news/2026/10/07/8056886/',
        'https://travel.state.gov/en/international-travel/travel-advisories/moldova.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, no change. No new nuclear statements, ultimatums or readiness announcements since Putin\'s 1 Oct Kaliningrad warning. NATO\'s commander told Der Spiegel (16 Oct) there is no plan to isolate Kaliningrad. No Russian reaction found to the Romanian shootdowns.',
      sources: [
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
        'https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, no change. French supermarket refrigeration attack still unclaimed; ANSSI says likely ongoing and found a Danfoss software flaw; the PM\'s office says other EU countries may be affected (unconfirmed list). Ahold Delhaize\'s Dutch chains still recovering from a suspected cyberattack since 11 Oct. No cable cuts, GPS jamming, or grid/bank/telecom outages.',
      sources: [
        'https://en.wikipedia.org/wiki/2026_French_supermarket_refrigerator_hack',
        'https://shattered.io/france-fridge-hack-unclaimed-6-days-2026/',
        'https://www.dutchnews.nl/2026/10/albert-heijn-and-sister-chains-abroad-hit-by-likely-cyberattack/',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber. IRGC says two supertankers hit mines in Hormuz on 18 Oct (IRGC claim only); Iran says Hormuz could reopen within days if the US accepts September ceasefire terms. No US strikes. Monday Asia: Brent down 1.7% to ~$108, gold ~$4,200. Friday close: VIX ~20, EUR/CHF ~0.927.',
      sources: [
        'https://news.cgtn.com/news/2026-10-18/Tanker-explodes-in-Strait-of-Hormuz-as-Saudi-Houthi-clashes-continue-1RkUDGsMh9e/share_amp.html',
        'https://www.cnbc.com/2026/10/18/oil-price-today-ukraine-russia-iran-strait-hormuz.html',
        'https://brecorder.com/news/40444886/asian-stocks-slip-wall-st-and-bonds-benefit-from-oil-skid',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, no change. Trump says the US is in "denuclearisation" talks with Russia and China; Putin envoy Dmitriev says joint US–Russia initiatives are coming soon. Earlier reports of China rejecting talks may be a resurfaced Aug 2025 story (unconfirmed). No arms-control framework; no testing news.',
      sources: [
        'https://www.aljazeera.com/news/2026/10/16/us-in-denuclearisation-talks-with-russia-and-china-trump',
        'https://english.alarabiya.net/News/world/2026/10/16/russia-us-to-announce-new-joint-initiatives-soon-putin-envoy-says',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber. French fuel: unconfirmed reports (18 Oct) of ~600 stations short, Grand Est (Moselle) worst with record diesel/E10 prices; official 17 Oct figure was 16% of Grand Est stations with problems. Fill up in Switzerland. Ferries (Brittany Rosslare–Cherbourg on Barfleur, Irish Ferries Dublin–Cherbourg) and Swiss–Irish flights normal; no airspace restrictions affecting the route.',
    sources: [
      'https://renseignementeconomique.fr/penuries-et-prix-record-le-grand-est-en-tete-des-tensions-sur-le-carburant',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://cyprusshippingnews.com/2026/10/09/brittany-ferries-move-barfleur-to-rosslare-cherbourg-route/',
    ],
  },
};
