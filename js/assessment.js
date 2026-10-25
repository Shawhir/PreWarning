// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-25: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-25',
  issuedAt: '2026-10-25T05:57:24Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, slightly below top of band, no change. A Russian Geran drone crashed in Moldova (Telenesti, ~100 m from homes, near an energy site) on 23 Oct; Moldova expelled a Russian embassy employee. Moscow's four airports were shut on 23 Oct by Ukrainian drones (now confirmed; fifth closure this month). No new incursions into NATO states, Black Sea ship strikes, NATO deployments or Kaliningrad incidents found for 24–25 Oct.",
      sources: [
        'https://euromaidanpress.com/2026/10/23/moldova-expels-russian-diplomat-after-geran-drone-crashes/',
        'https://www.aerotime.aero/articles/moscow-airports-shut-down-drone-attacks-october-23',
        'https://www.aljazeera.com/news/2026/10/24/ukraine-says-starlink-restored-as-attacks-continue-in-russia-and-ukraine',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. New watch item: US STRATCOM's annual Global Thunder 27 nuclear command-and-control exercise began 22–23 Oct (~10 days, more bomber flights expected; STRATCOM says not a response to events). Russia has held its strategic drill in October most years since 2022 and none is reported for 2026, so a short-notice Russian drill in the coming days is plausible — read it as a response to these exercises unless paired with other signs. No Russian counter-exercise, deployments or unusual bomber/SSBN activity found.",
      sources: [
        'https://www.afgsc.af.mil/News/Article-Display/Article/4631480/us-strategic-command-begins-exercise-global-thunder-27/',
        'https://defence-industry.eu/u-s-launches-global-thunder-27-nuclear-readiness-exercise-with-more-bomber-flights-possible/',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers in NATO states, Switzerland or Ireland found for 24–25 Oct.",
      sources: [
        'https://www.helsinkitimes.fi/finland/finland-news/domestic/29232-finland-holds-europe-s-largest-civil-defence-drill-since-wwii.html',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, stalled. Ukraine–Russia–US technical talks reportedly planned for Abu Dhabi in the first half of November, no date. Moldova's expulsion of one Russian embassy employee (23 Oct) is a reaction to the drone crash (counted under conventional). No NATO-state expulsions, embassy drawdowns or new \"leave\" advisories.",
      sources: [
        'https://www.cbsnews.com/news/russia-ukraine-war-witkoff-putin-trump-zelenskyy/',
        'https://euromaidanpress.com/2026/10/23/moldova-expels-russian-diplomat-after-geran-drone-crashes/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. No new nuclear statements from Russian leaders found for 24–25 Oct; latest are Zakharova's \"full spectrum\" (22 Oct) and Peskov on the \"extremely dangerous\" post-New START gap (~22 Oct). No ultimatum or readiness announcement.",
      sources: [
        'https://rt-english.com/russia/647458-kremlin-dangerous-nuclear-arms-control/',
        'https://www.ritmeurasia.ru/news--2026-10-22--zaharova-nato-namerenno-sozdaet-ugrozy-bezopasnosti-rossii-i-belarusi-91140',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, no change. No new cyberattacks on European infrastructure, cable damage or GPS jamming surge found for 24–25 Oct; the French, Dutch and German (TAKKT) retail/logistics attacks remain unclaimed.",
      sources: [
        'https://konbriefing.com/en-topics/cyber-attacks.html',
        'https://safeguard.sh/resources/blog/takkt-cyberattack-october-2026-orders-deliveries-restricted',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, worsening; risk of a higher Brent at Monday's open. Markets closed for the weekend. Friday: Brent $116.72 (highest since April), VIX ~19.5–20, gold ~$4,010, EUR/CHF ~0.923. Saturday 24 Oct: new Houthi wave against Saudi airports, oil infrastructure and an airbase, plus missiles on Aden airport (Al Jazeera, NBC); damage unconfirmed. The signals feed now shows Brent at $111.70, probably a switch to the next futures contract rather than a fall.",
      sources: [
        'https://www.aljazeera.com/news/2026/10/24/houthis-launch-attacks-on-saudi-arabia-and-yemens-aden',
        'https://www.nbcnews.com/world/middle-east/iran-backed-houthis-claim-new-attacks-saudi-arabia-yemens-aden-airport-rcna602020',
        'https://asia.nikkei.com/business/markets/commodities/brent-crude-jumps-to-highest-since-april-on-houthi-attacks-uae-oil-spill',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating; US–Iran risk rising. US ambassador to Turkey Barrack said a US strike on Iran \"absolutely\" could come \"this weekend\" (23 Oct; Trump said he knew nothing of it and earlier ruled out strikes before 3 Nov). Iran says US warships will not be allowed into the Gulf; reports of a bunker-buster-loaded carrier and Iranian plans against Gulf undersea cables. Israel votes 27 Oct; Pezeshkian meets Putin in Moscow 27 Oct. APEC three-way meeting still unconfirmed; no North Korean launches since 12 Oct.",
      sources: [
        'https://www.koreatimes.co.kr/world/20261024/us-could-strike-iran-this-weekend-envoy-says',
        'https://www.timesofisrael.com/liveblog_entry/us-envoy-there-absolutely-could-be-a-us-strike-on-iran-this-weekend',
        'https://www.aljazeera.com/news/2026/10/24/iran-says-wont-allow-us-warships-to-get-close-as-trump-ponders-new-attacks',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Storm Boelo hit Donegal 24–25 Oct: about 4,500 Donegal customers lost power on Saturday evening, including around Dungloe near Crolly (13,000 nationally per RTÉ); ESB expected most supply back by ~14:00 Sun. Some Dublin–Donegal flights reportedly cancelled 24 Oct (secondary sources); Stena Dublin–Holyhead and an Irish Ferries Pembroke–Rosslare sailing cancelled. Brittany Ferries Rosslare–Cherbourg running. French fuel: no data newer than 18–19 Oct (Grand Est worst, 24–31% short); general strike 5 Nov. Weather disruption, temporary.",
    sources: [
      'https://www.rte.ie/news/ireland/2026/1025/1596760-storm-boelo-ireland/',
      'https://www.donegallive.ie/news/update-storm-boelo-donegal-public-urged-to-avoid-non-essential-travel-9307814',
      'https://www.travelerstoday.com/articles/61174/20261024/nine-dublin-airport-flights-cut-holyhead-ferries-halted-storm-boelo-hits-ireland.htm',
      'https://www.cestlagreve.fr/greve/greve-generale-5-novembre-2026/',
    ],
  },
};
