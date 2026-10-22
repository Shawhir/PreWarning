// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-22: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-22',
  issuedAt: '2026-10-22T05:15:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Amber, slightly below top of band. No new drone incursions since 17 Oct or ship strikes since 15 Oct. First NATO-linked arrival: a US Navy P-8A at Varna, Bulgaria (20 Oct). Romania\'s Supreme Defence Council meets 22 Oct 18:00 on Black Sea security. Pakistan\'s nuclear adviser warned India may be moving toward a first-strike posture (20–21 Oct, rhetoric only, no military moves).',
      sources: [
        'https://www.stripes.com/theaters/europe/2026-10-20/nato-reinforcements-black-sea-shipping-23210458.html',
        'https://nineoclock.ro/romanias-supreme-defence-council-to-discuss-black-sea-security-on-22-october/',
        'https://arabnews.pk/pakistan/pakistan-nuclear-adviser-warns-india-may-be-moving-toward-first-strike-posture-3004674',
        'https://dawn.com/news/2038662',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Kremlin readout or strategic launches dated 21–22 Oct 2026 (Grom-with-Putin results are all from 22 Oct 2025); no NOTAMs or bomber/SSBN activity. The single-source claim of a Russian exercise in response to Steadfast Noon remains unconfirmed. Steadfast Noon ends 23 Oct; a Grom-type drill framed as a response to NATO would make this amber.',
      sources: [
        'https://www.cnn.com/2025/10/22/europe/russia-nuclear-drills-putin-intl',
        'https://www.peacelink.it/en/a/51684.html',
        'https://militarnyi.com/en/news/russian-tu-95ms-bombers-carrying-kh-101-missiles-flew-over-barents-and-norwegian-seas/',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland.',
      sources: [
        'https://www.romaniajournal.ro/politics/romanias-president-calls-security-council-over-black-sea/',
        'https://kyivindependent.com/nato-to-bolster-black-sea-presence-with-patrol-aircraft-drones-after-attacks-on-commercial-ships/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Green, easing. 21 Oct: US envoy Witkoff met Putin for ~3 hours in St Petersburg; Russia released detained American Stephen Hubbard; Putin agreed in principle to resume Russia–Ukraine–US talks after 10 Nov, possibly in Abu Dhabi. No expulsions, drawdowns or new "leave" advisories for Russia or Europe.',
      sources: [
        'https://www.pbs.org/newshour/world/putin-agrees-to-resume-trilateral-russia-ukraine-u-s-talks-next-month',
        'https://www.kwqc.com/2026/10/21/trump-envoy-witkoff-meets-putin-st-petersburg-ukraine-war-talks/',
        'https://www.jpost.com/international/internationalrussia-ukraine-war/article-912448',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, no change. No official Russian reaction to NATO\'s Black Sea decision, Steadfast Noon or the Romanian shootdowns; no new nuclear statements, deadlines or readiness announcements. Zakharova reportedly said Russia will use "all available forces and means" against threats to the Russia–Belarus Union State (single source, no nuclear mention).',
      sources: [
        'https://news.ru/vlast/zaharova-raskryla-kak-rossiya-namerena-otvechat-na-ugrozy-u-granic',
        'https://vz.ru/news/2026/10/21/1465854.html',
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, no change. No new incidents, cable cuts or GPS jamming since 21 Oct. Germany\'s BSI warns of follow-on attacks after the French refrigeration attack; Ahold Delhaize reported its cyber incident to Dutch police (19 Oct), deliveries due to resume 23 Oct.',
      sources: [
        'https://nltimes.nl/2026/10/19/albert-heijn-files-police-report-confirms-suspicious-activity-cyberattack-attempt',
        'https://www.pbs.org/newshour/world/cyberattacks-disrupt-refrigeration-systems-at-european-supermarkets',
        'https://www.bleepingcomputer.com/news/security/retail-giant-ahold-delhaize-takes-systems-offline-after-cyberattack/',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber. US ordered non-emergency staff and families out of Saudi Arabia (21 Oct) over Houthi strikes; Brent settled $108.82 on 21 Oct, ~$110 in Asia on 22 Oct. Iran refuses to move enriched uranium abroad and repeats its Hormuz conditions; Pakistan mediating. VIX ~16.7, gold ~$4,110–4,150, EUR/CHF ~0.926.',
      sources: [
        'https://www.cbsnews.com/news/us-saudi-arabia-ordered-departure-houthis/',
        'https://globalnews.ca/news/12112168/saudi-arabia-us-diplomat-evacuations-houthi-attacks/',
        'https://www.aljazeera.com/news/2026/10/21/irans-enriched-uranium-re-emerges-as-point-of-contention-in-us-talks',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, slightly firmer. Ushakov (21 Oct) says China is arranging a possible Putin–Trump–Xi meeting at APEC Shenzhen (18–19 Nov); Peskov says nothing agreed and China\'s foreign ministry has "no information". No arms-control or testing news.',
      sources: [
        'https://en.cibercuba.com/noticias/2026-10-21-u1-e199894-s27061-nid343471-china-prepara-reunion-trilateral-putin-trump-xi',
        'https://tass.com/politics/2205699',
        'https://www.euronews.com/2026/10/20/trump-says-hes-ready-to-meet-putin-and-xi-in-china',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber. French fuel: Selectra 27.5% of stations missing a fuel (19 Oct), slightly better than 28.7%; Grand Est still worst; the reported jerrycan ban is unconfirmed. 5 Nov general strike stands. Storm Austen: Met Éireann yellow rain warning 22 Oct 19:00–23 Oct 08:00 and orange marine warning; Irish Ferries Dublin–Cherbourg reportedly cancelled 22 Oct (single source). Barfleur on Rosslare–Cherbourg for October; November unknown. Swiss–Irish flights normal.',
    sources: [
      'https://selectra.info/energie/actualites/marche/carburant-rupture-dimanche-soir-carte-toussaint',
      'https://www.rustourismnews.com/2026/10/21/storm-austen-sparks-amber-weather-warning-as-uk-and-ireland-brace-for-travel-disruption/',
      'https://www.irishferries.com/uk-en/sailing-updates/ireland-france/',
      'https://www.24matins.fr/greve-du-5-novembre-ce-que-prepare-deja-lintersyndicale-1421874',
    ],
  },
};
