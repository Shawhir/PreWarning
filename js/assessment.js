// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-14: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-14',
  issuedAt: '2026-10-14T05:10:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Top of amber. Overnight into 13 Oct drones hit two more merchant ships off Bulgaria (one sank, up to 10 missing), the second sinking in a week; Bulgaria\'s PM says the outcome benefits Russia and summoned the Russian ambassador, but ruled out Articles 4/5 and asked the EU and NATO for help identifying the drones. Rutte says NATO will adjust its Black Sea posture. An Article 4 request would be the next step up. Energy ceasefire still not in force (Peskov 13 Oct: "no new developments").',
      sources: [
        'https://www.aljazeera.com/news/2026/10/13/drone-attack-sinks-ship-off-bulgarias-black-sea-coast-pm-says',
        'https://brusselssignal.eu/2026/10/bulgaria-asks-eu-and-nato-to-help-identify-drones-that-sank-ship-in-black-sea/',
        'https://united24media.com/world/rutte-says-nato-will-adjust-black-sea-defense-posture-after-russian-drone-attacks-on-commercial-ships-23391',
        'https://tass.com/politics/2201369',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. NATO Steadfast Noon runs 13–23 Oct (17 allies, routine scale). No Russian reaction, Grom announcement, counter-drill, Barents NOTAM or SSBN/bomber/warhead moves found. Russia held its big nuclear exercise in May, so an October Grom is not certain; watch 18–22 Oct.',
      sources: [
        'https://www.stripes.com/theaters/europe/2026-10-13/steadfast-noon-nato-exercise-23139099.html',
        'https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning',
        'https://www.nato.int/en/news-and-events/articles/news/2026/10/08/nato-holds-annual-nuclear-exercise-steadfast-noon',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland; Bulgaria\'s response to the Black Sea sinkings is diplomatic.',
      sources: [
        'https://www.aljazeera.com/news/2026/10/13/drone-attack-sinks-ship-off-bulgarias-black-sea-coast-pm-says',
        'https://thedefensepost.com/2026/09/04/finland-wartime-civil-defense-drill/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. Bulgaria summoned the Russian ambassador over the Black Sea sinkings (counted under conventional conflict). No expulsions, closures, suspended talks or new "leave" advisories; Irish DFA pages unchanged per the signals feed.',
      sources: [
        'https://brusselssignal.eu/2026/10/bulgaria-asks-eu-and-nato-to-help-identify-drones-that-sank-ship-in-black-sea/',
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
        'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/lithuania-travel-advisory.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Top of amber, no change. The 30 Sep Kaliningrad nuclear note and Putin\'s 1 Oct Valdai remarks stand; no Russian reaction yet to Steadfast Noon, no deadlines or readiness announcements. Zakharova\'s weekly briefing (Wed/Thu) is the next likely venue.',
      sources: [
        'https://www.aljazeera.com/news/2026/9/30/russia-warns-nato-of-possible-nuclear-response-if-kaliningrad-is-cut-off',
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
        'https://www.stripes.com/theaters/europe/2026-10-13/steadfast-noon-nato-exercise-23139099.html',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Raised from green: sudden cluster. 13 Oct: cyberattacks on refrigeration controllers made systems overheat in ~700 of France\'s 10,000 supermarkets (Paris cybercrime unit investigating; government says food supply not at risk). Ahold Delhaize took Albert Heijn, Etos and Gall & Gall systems offline from 11 Oct, likely a cyberattack. Attribution unknown; no grid, bank or telecom outages, cable cuts or new GPS jamming.',
      sources: [
        'https://abcnews.com/Business/wireStory/cyberattack-targeting-refrigeration-systems-hits-700-supermarkets-french-137230099',
        'https://www.news4jax.com/business/2026/10/13/cyberattack-targeting-refrigeration-systems-hits-700-supermarkets-french-government-says/',
        'https://nltimes.nl/2026/10/13/albert-heijn-outage-likely-cyber-attack-experts-say',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Energy stress persists. Brent settled $105.69 on 13 Oct; Hormuz attacks escalated (UKMTO: tanker and container ship hit; IRGC claims more strikes), the worst run since the war began. No US strikes on the Houthis yet. Elsewhere calm: VIX ~15.2, gold ~$4,170, EUR/CHF ~0.93.',
      sources: [
        'https://investinglive.com/commodities/catch-up-time-oil-settles-mixed-brent-near-106-booms-reported-near-aramco-hq-in-dhahran',
        'https://www.democracynow.org/2026/10/13/headlines/irans_irgc_says_it_struck_another_tanker_in_strait_of_hormuz',
        'https://www.cbsnews.com/live-updates/iran-war-us-trump-saudi-arabia-houthi/',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, no change. No new testing or arms-control news after 13 Oct; no high-level talks among nuclear powers. North Korea\'s last confirmed launch was 3 Oct (IRBM drill); a reported 12 Oct launch is unconfirmed.',
      sources: [
        'https://www.armscontrol.org/act/2026-10/focus/trump-xi-putin-failing-tackle-nuclear-threat',
        'https://ground.news/daily-briefing/88bb3588-181b-4620-bcfe-161bdb8a7702',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'No change. French airline crew strike still suspended (pension decree not yet published; could be re-filed). Barfleur running Rosslare–Cherbourg since 12 Oct with no spare ship; Irish Ferries Dublin–Cherbourg normal. No disruption to Zurich/Basel/Geneva–Dublin/Belfast flights or new French fuel strikes found. Watch French supermarket cyber incident for any knock-on to fuel or retail.',
    sources: [
      'https://www.deplacementspros.com/transport/l-intersyndicale-des-pnc-suspendent-leur-preavis-de-greve-nationale',
      'https://brittanyferriesnewsroom.com/brittany-ferries-move-barfleur-to-rosslare-cherbourg-route/',
      'https://www.irishferries.com/ie-en/sailing-updates/ireland-france/',
    ],
  },
};
