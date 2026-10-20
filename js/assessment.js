// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-20: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-20',
  issuedAt: '2026-10-20T05:10:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Amber, slightly below top of band. The 18 Oct drone that exploded over Lithuania was Ukrainian, likely diverted by Russian jamming; Ukraine apologised (19 Oct). Lithuania says it entered from Poland, which is reviewing radar data. The 17 Oct Romanian shootdown of two Geran drones is confirmed by several dated sources. No new shootdowns or ship strikes since; North Atlantic Council meets on Black Sea defence today (20 Oct), outcome pending, no Article 4. Bulgaria says allied aircraft will "soon" be based there (single source).',
      sources: [
        'https://notesfrompoland.com/2026/10/19/lithuania-says-ukrainian-drone-that-struck-car-entered-its-airspace-from-poland/',
        'https://easternherald.com/2026/10/19/lithuania-drone-crash-kyiv-apology-car/',
        'https://www.stripes.com/theaters/europe/2026-10-19/romania-drones-nato-meeting-23196504.html',
        'https://www.usnews.com/news/world/articles/2026-10-18/romanian-f-16-fighter-jets-shoot-down-two-drones-over-romanian-territorial-waters',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Grom announcement, confirmed NOTAMs, or unusual bomber/SSBN activity. The claim that TASS announced exercises in response to Steadfast Noon remains single-sourced. Watch through 23 Oct (Steadfast Noon ends; Grom ran 22 Oct last year).',
      sources: [
        'https://www.peacelink.it/en/a/51684.html',
        'https://www.usnews.com/news/world/articles/2026-10-08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. Lithuania\'s 18 Oct shelter alerts (Šiauliai, Panevėžys) lasted about an hour and were not repeated. No activation, leader relocation or emergency powers in major NATO states or Switzerland.',
      sources: [
        'https://www.usnews.com/news/world/articles/2026-10-18/lithuania-told-residents-to-go-to-shelters-after-detecting-a-flying-object',
        'https://kyivindependent.com/nato-jets-scramble-as-drone-explodes-in-lithuanian-airspace/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. No new expulsions, drawdowns, talks broken off or "leave" advisories. Zakharova reportedly blamed Kyiv for the Bulgarian ship strikes (single source). No Russian reaction to the Romanian shootdowns.',
      sources: [
        'https://www.usnews.com/news/world/articles/2026-10-18/romanian-f-16-fighter-jets-shoot-down-two-drones-over-romanian-territorial-waters',
        'https://balgarianovinite.com/en/defence-minister-nato-aircraft-are-expected-ar/',
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, no change. No new nuclear statements, ultimatums or readiness announcements since the 30 Sep–1 Oct Kaliningrad warnings; no Russian comment on Steadfast Noon. Zakharova\'s midweek briefing is the next likely venue.',
      sources: [
        'https://www.themoscowtimes.com/2026/09/30/moscow-sends-nuclear-warning-to-nato-as-tensions-rise-in-the-baltic-a93828',
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, no change. Retail refrigeration attack still unclaimed; a Sekoia analyst says Spain, Portugal, Poland, Germany and Belgium were also hit (analyst view, not official). No cable cuts, GPS jamming, or grid/bank/telecom outages.',
      sources: [
        'https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident',
        'https://www.darkreading.com/ics-ot-security/eu-grocers-unpatched-fridge-firmware',
        'https://en.wikipedia.org/wiki/2026_French_supermarket_refrigerator_hack',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber, easing slightly. Monday 19 Oct: Brent ~$108–109 (down ~1.5% on a US Russia-sanctions waiver), VIX 18.4 (−7.8%), gold ~$4,160, EUR/CHF ~0.926. Iran says its 7-day Hormuz reopening plan is "still on the table"; no deal or new escalation since the 17–18 Oct mine strikes.',
      sources: [
        'https://vantagemarkets.com/market-analysis/crude-oil-prices-slip-russia-sanctions-waiver-brent-wti-october-19-2026',
        'https://www.turkiyetoday.com/region/hormuz-can-reopen-in-6-days-if-us-meets-irans-terms-araghchi-3230616',
        'https://cappnotes.substack.com/p/closing-look-monday-october-19-2026',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, no change. Trump\'s 15 Oct denuclearisation-talks claim still unconfirmed by Russia or China; no scheduled round. No testing news.',
      sources: [
        'https://www.internazionale.it/ultime-notizie-reuters/2026/10/16/trump-says-he-is-talking-to-russia-and-china-about-denuclearization',
        'https://www.businesstoday.in/world/story/whole-thing-is-a-shame-trump-says-he-is-talking-to-china-russia-about-denuclearisation-561950-2026-10-16',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber. French fuel confirmed by several dated sources: on 18 Oct 595 stations completely dry and 16.3% short of at least one fuel, worst in Grand Est and Île-de-France, ~87% of dry stations TotalEnergies; diesel ~€2.36/L. Stable since early October. A further social mobilisation is called for 5 Nov. Fill up in Switzerland. Ferries and Swiss–Irish flights normal.',
    sources: [
      'https://www.journaldeleconomie.fr/carburant-pourquoi-595-stations-vides/',
      'https://lenergeek.com/2026/10/19/carburant-energie-france-crise-2026/',
      'https://lautomobiliste.fr/19/10/2026/guide-automobiliste-carburant-penurie/',
      'https://cyprusshippingnews.com/2026/10/09/brittany-ferries-move-barfleur-to-rosslare-cherbourg-route/',
    ],
  },
};
