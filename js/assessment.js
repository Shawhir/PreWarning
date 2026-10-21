// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-21: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-21',
  issuedAt: '2026-10-21T05:15:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Amber, slightly below top of band. 20 Oct: the North Atlantic Council agreed to send maritime patrol aircraft, radars, drones, EOD teams and intelligence staff to the Black Sea, focused on surveillance; no country blamed, no Article 4. Russia reportedly rejected a Black Sea escort proposal (single source). No new drone incursions or ship strikes since 17 Oct and 15 Oct respectively. Romania\'s Supreme Defence Council meets 22 Oct.',
      sources: [
        'https://www.aljazeera.com/news/2026/10/20/nato-to-send-additional-patrol-planes-to-black-sea-after-drone-attacks',
        'https://kyivindependent.com/nato-to-bolster-black-sea-presence-with-patrol-aircraft-drones-after-attacks-on-commercial-ships/',
        'https://www.trtworld.com/article/6056ebaead35',
        'https://www.romaniajournal.ro/politics/romanias-president-calls-security-council-over-black-sea/',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Grom announcement, Kremlin readout, new NOTAMs (latest Kapustin Yar closure 28 Sep–3 Oct) or unusual bomber/SSBN activity. Claims of Russian exercises or Oreshnik launches "from 22 Oct" remain single-source and possibly from 2025. Watch 22–23 Oct (Steadfast Noon ends 23 Oct; Grom was 22 Oct last year).',
      sources: [
        'https://militarnyi.com/en/news/russia-closes-airspace-over-kapustin-yar-launch-site-for-oreshnik-missiles/',
        'https://www.peacelink.it/en/a/51684.html',
        'https://tass.com/politics/2202573',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland; Romania\'s 22 Oct security council meeting is routine.',
      sources: [
        'https://www.romaniajournal.ro/politics/romanias-president-calls-security-council-over-black-sea/',
        'https://kyivindependent.com/european-countries-bolster-defenses-as-officials-warn-of-growing-russian-hybrid-threat/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. No new expulsions, drawdowns, talks broken off or "leave" advisories (UK advice for Romania unchanged since 18 Sep). Older items (US "leave Russia" 6 Oct, Russian expulsion of Hungarian diplomats 1 Oct) are baseline.',
      sources: [
        'https://www.gov.uk/foreign-travel-advice/romania',
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
        'https://kyivindependent.com/ukraine-to-compensate-damaged-cargo-ships-as-russia-rejects-black-sea-proposal/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, no change. No Russian reaction yet to NATO\'s 20 Oct Black Sea decision, Steadfast Noon or the Romanian shootdowns; Moscow still denies the ship attacks. No new nuclear statements, deadlines or readiness announcements since 30 Sep–1 Oct. Three weeks of official quiet after the Kaliningrad threats is worth watching but is not the "sudden silence" red signal.',
      sources: [
        'https://www.aljazeera.com/news/2026/10/20/nato-to-send-additional-patrol-planes-to-black-sea-after-drone-attacks',
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, no change. Retail refrigeration attack still unclaimed; spread beyond France not officially confirmed. No new cyber incidents, cable cuts, GPS jamming or national outages 20–21 Oct.',
      sources: [
        'https://www.cnn.com/2026/10/14/europe/france-cyberattack-supermarket-fridges-intl',
        'https://en.wikipedia.org/wiki/2026_French_supermarket_refrigerator_hack',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber. Tue 20 Oct: Brent spiked to $111–112 intraday (five-month high) on Houthi strikes on Saudi energy sites, settling ~$108.8 as Pakistan began mediating with Iran; ~$109.6 early Wed. VIX ~17.3, gold ~$4,135, EUR/CHF ~0.924 (franc creeping firmer). IRGC mine claims unsupported per JMIC; Hormuz transits down ~70%.',
      sources: [
        'https://energynow.com/2026/10/oil-prices-surge-as-middle-east-attacks-push-brent-above-111-and-wti-back-above-100/',
        'https://www.asiaone.com/money/brent-falls-irans-president-discusses-mediation-pakistani-army-chief',
        'https://gcaptain.com/iran-claims-more-tankers-hit-mines-in-hormuz-but-evidence-remains-elusive/',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, small change. Trump says he is open to a Putin–Xi summit focused on denuclearisation (19–20 Oct), possibly at APEC in Shenzhen (18–19 Nov); Peskov says discussed, nothing agreed. China has called three-way disarmament talks unfair and unrealistic. No new tests.',
      sources: [
        'https://www.bloomberg.com/news/articles/2026-10-19/trump-open-to-putin-xi-summit-but-would-focus-on-nuclear-arms',
        'https://time.com/article/2026/10/20/trump-summit-putin-xi-russia-china-ukraine-nuclear-weapons/',
        'https://www.aa.com.tr/en/world/china-says-asking-it-to-join-disarmament-talks-neither-fair-nor-reasonable-after-trump-s-denuclearization-remarks/4091154',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber, French fuel worsening. Selectra: 28.7% of stations missing at least one fuel (Sun 18 Oct evening), up from ~16%; Grand Est worst at 23.6%; a jerrycan-filling ban there is reported by one source. Five unions call a general strike for 5 Nov, which could hit depots. Fill up in Switzerland and avoid relying on French fuel. Barfleur covers Rosslare–Cherbourg in October only (November unknown); Irish Ferries and Swiss–Irish flights normal.',
    sources: [
      'https://selectra.info/energie/actualites/marche/carburant-rupture-dimanche-soir-carte-toussaint',
      'https://www.planet.fr/penurie-de-carburant-faut-il-faire-le-plein-pres-de-600-stations-sont-deja-a-sec.2999923.817032.html',
      'https://www.journaldeleconomie.fr/carburant-pourquoi-595-stations-vides/',
      'https://afloat.ie/port-news/ferry-news/brittany-ferries/item/73373-former-english-channel-ferry-barfleur-debuts-on-france-ireland-route-albeit-temporarily',
    ],
  },
};
