// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-16: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-16',
  issuedAt: '2026-10-16T05:10:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Top of amber, rising pressure. Overnight 14–15 Oct a second tanker (Wine Trader) was hit ~1 nm outside Romanian waters near Sulina, 7 crew missing; ~7 ships hit and 23+ sailors missing or dead in ~10 days. A drone briefly entered Romanian airspace on 14 Oct (F-16s scrambled). A NATO military source says the drones came from Russia; Bulgaria\'s PM says there is no solid evidence. NATO\'s North Atlantic Council will hold a dedicated Black Sea session next week; Bulgaria is reportedly considering Article 4 (still amber if invoked; red needs sustained direct combat or Article 5).',
      sources: [
        'https://www.france24.com/en/europe/20261015-seven-missing-off-romania-after-latest-black-sea-drone-attacks',
        'https://www.detroitnews.com/story/news/world/2026/10/15/two-ships-ablaze-off-romanian-black-sea-coast-7-sailors-missing/92261248007/',
        'https://www.turkiyetoday.com/region/romania-says-nato-council-will-address-black-sea-drone-attacks-3230402',
        'https://informat.ro/en/international/bulgaria-considers-activating-nato-article-4-after-attacks-143465',
        'https://www.ladbible.com/news/world-news/nato-scrambles-f-16-jets-against-aerial-target-928141-20261014',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Grom announcement (Russia held its big strategic drill early, 19–21 May, so an October Grom may not happen), no NOTAMs, SSBN, bomber or warhead moves. NATO sees no alarming change in Russian posture. Steadfast Noon runs to 23 Oct; watch 18–22 Oct.',
      sources: [
        'https://russianforces.org/blog/2026/05/exercise_of_strategic_forces_h.shtml',
        'https://www.news4jax.com/news/world/2026/10/08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning/',
        'https://www.stripes.com/theaters/europe/2026-10-13/steadfast-noon-nato-exercise-23139099.html',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland. (Catalonia\'s 19 Oct siren test is a routine chemical-risk drill, unrelated.)',
      sources: [
        'https://en.ara.cat/society/civil-protection-will-send-new-alert-to-the-country-due-to-chemical-risk_25_5874178.html',
        'https://www.euronews.com/2026/10/13/could-the-european-security-council-be-the-eus-answer-to-hybrid-attacks',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. Rutte met Romania\'s and Bulgaria\'s leaders at the EU summit (15 Oct); EU Council conclusions on the Black Sea plan not yet published. No expulsions, embassy drawdowns, talks broken off or new "leave" advisories.',
      sources: [
        'https://www.democrata.es/en/international/expansion-rutte-meets-with-the-leaders-of-bulgaria-and-romania-after-the-latest-wave-of-drone-attacks-in-the-black-sea/',
        'https://theprint.in/world/seven-sailors-missing-after-drones-hit-two-tankers-off-romanias-black-sea-coast/3073153/',
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, no longer easing. Estonia\'s PM wants to shut a backup gas pipeline to Kaliningrad (reported 14 Oct); Deputy FM Grushko said ~15 Oct that "corresponding signals" were sent to NATO and the EU about the consequences of isolating Kaliningrad. Russia\'s OSCE envoy said NATO\'s nuclear drills force an "adequate military response". Neither is a head-of-state ultimatum; the 30 Sep nuclear note still stands.',
      sources: [
        'https://tass.com/politics/2202471',
        'https://tass.com/politics/2202573',
        'https://english.nv.ua/nation/estonia-seeks-to-block-russian-gas-route-to-kaliningrad-50650158.html',
        'https://www.aljazeera.com/news/2026/9/30/russia-warns-nato-of-possible-nuclear-response-if-kaliningrad-is-cut-off',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, no change. No attribution yet for the French supermarket refrigeration attack (ANSSI: "likely still underway"); Albert Heijn restocking after a hack traced to foreign servers. No new grid, bank or telecom outages, cable cuts or GPS jamming.',
      sources: [
        'https://www.cnn.com/2026/10/14/europe/france-cyberattack-supermarket-fridges-intl',
        'https://thehackernews.com/2026/10/attackers-heat-french-supermarket.html',
        'https://www.dutchnews.nl/2026/10/albert-heijn-begins-restocking-as-hack-traced-to-foreign-servers/',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber. Hormuz escalated: two cargo ships sunk (14 Oct) and a tanker on fire (15 Oct); ~11 transits a day versus ~85 before the war. Pentagon drafting conventional strike options on Iranian energy and nuclear sites; Trump ruled out nuclear use. Prices calm on 15 Oct: Brent ~$104, VIX ~16.5, gold ~$4,170–4,200, EUR/CHF 0.931.',
      sources: [
        'https://www.euronews.com/2026/10/15/another-tanker-catches-fire-near-hormuz-after-two-cargo-ships-sunk-in-attacks',
        'https://www.israelnationalnews.com/news/434698',
        'https://fortune.com/article/price-of-oil-10-15-2026/',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, no change. North Korea\'s 15 Oct submarine-launched cruise missile test was called a routine readiness inspection. No new US–Russia–China testing or treaty news; a Putin–Trump–Xi meeting at APEC (18–19 Nov) floated but unconfirmed.',
      sources: [
        'https://www.japantimes.co.jp/news/2026/10/15/asia-pacific/north-korea-submarine-cruise-missiles/',
        'https://www.usnews.com/news/world/articles/2026-09-01/kremlin-says-putin-xi-and-trump-may-hold-a-trilateral-meeting',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber. French fuel: ~8% of stations short of at least one fuel on 15 Oct, stable, but 19% in Grand Est (on the Cherbourg route); fill up in Switzerland. Reports conflict on whether the TotalEnergies strike continues beyond Normandy. French airline crew strike still suspended. Barfleur on Rosslare–Cherbourg for October; November plans unknown. Irish Ferries Dublin–Cherbourg and Swiss–Irish flights normal.',
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://www.le-bouillon-larochelle.fr/12-188658-greve-chez-totalenergies-le-8-octobre/',
      'https://www.deplacementspros.com/transport/l-intersyndicale-des-pnc-suspendent-leur-preavis-de-greve-nationale',
      'https://cyprusshippingnews.com/2026/10/09/brittany-ferries-move-barfleur-to-rosslare-cherbourg-route/',
    ],
  },
};
