// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-27: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-27',
  issuedAt: '2026-10-27T05:58:13Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, at the top of the band (raised within amber). Correction: earlier readings missed that on 23 Oct a drone sank the cargo ship Khoryv about 13 nm off Constanța, just outside Romanian waters (1 killed, 3 missing); President Dan blamed Russia (AP, Reuters, Meduza). At least seven cargo ships have been hit off Romania and Bulgaria this month, with about 30 sailors dead or missing; NATO, France and the US are adding patrol aircraft. Serious, but not direct NATO–Russia combat and no Article 4. Nothing new confirmed for 26–27 Oct.",
      sources: [
        'https://www.news4jax.com/news/2026/10/23/a-drone-hit-and-sank-a-cargo-vessel-in-new-black-sea-attack-near-romania-killing-1/',
        'https://www.timeslive.co.za/news/world/2026-10-23-romania-blames-russia-for-drone-that-sunk-cargo-ship-1-killed-3-missing/',
        'https://meduza.io/en/news/2026/10/23/romania-blames-russia-for-drone-strike-that-sinks-cargo-ship-in-black-sea-killing-one-sailor-and-leaving-three-missing',
        'https://united24media.com/world/france-and-us-deploy-maritime-patrol-aircraft-to-black-sea-amid-russian-drone-attacks-23793',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, reaction to US Global Thunder 27 (runs to ~1–2 Nov), nuclear-capable deployments, NOTAMs or bomber/SSBN activity found. Last Russian strategic drill 19–21 May 2026; an autumn drill remains possible.",
      sources: [
        'https://russianforces.org/blog/2026/05/exercise_of_strategic_forces_h.shtml',
        'https://www.afgsc.af.mil/News/Article-Display/Article/4631480/us-strategic-command-begins-exercise-global-thunder-27/',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 26–27 Oct.",
      sources: [
        'https://www.krisinformation.se/en/hazards-and-risks/hojd-beredskap-och-krig/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, stalled. Abu Dhabi talks still undated (\"first half of November\", possibly ~10 Nov). No expulsions, drawdowns or new \"leave\" advisories for 26–27 Oct. The signals feed flagged a change to both Swiss FDFA pages (Russia, Belarus) at 20:30 UTC on 26 Oct; no news of new advice was found and the simultaneous change suggests a site-wide edit — check the pages by hand.",
      sources: [
        'https://ukranews.com/en/news/1183033-talks-between-ukraine-the-u-s-and-russia-are-planned-for-the-first-half-of-november-in-abu-dhabi',
        'https://www.eda.admin.ch/countries/russia/en/home/travel-advice/current-situation.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No new nuclear statements or ultimatums found for 26–27 Oct; the single-source Zakharova remark from 26 Oct could not be found again and is dropped. No Russian reaction to Global Thunder.",
      sources: [
        'https://rt-english.com/russia/647458-kremlin-dangerous-nuclear-arms-control/',
        'https://tass.com/politics/2206043',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new infrastructure cyberattack, cable damage or GPS jamming surge found for 26–27 Oct; only minor single-source data-leak claims in France. Earlier French, Dutch and German (TAKKT) attacks remain unclaimed.",
      sources: [
        'https://research.checkpoint.com/2026/26th-october-threat-intelligence-report/',
        'https://safeguard.sh/resources/blog/takkt-cyberattack-october-2026-orders-deliveries-restricted',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, easing slightly. Brent settled $115.81 on Monday (−0.8%) after Trump ruled out a strike before the midterms and Qatari, Saudi, Turkish and Pakistani officials held talks with Iran; Houthi attacks on Saudi Arabia limited the fall. VIX ~18.4, gold ~$4,000 flat, EUR/CHF ~0.925 (franc firm vs mid-October). Fed decision 28 Oct. The signals feed's Brent (~$110) is on a later futures contract and understates the price.",
      sources: [
        'https://www.agbi.com/oil-and-gas/2026/10/oil-declines-after-trump-rules-out-imminent-attack-on-iran/',
        'https://www.investing.com/news/commodities-news/oil-prices-down-almost-1-in-early-trading-4971306',
        'https://www.bloomberg.com/news/articles/2026-10-26/gold-steadies-above-4-000-with-fed-rate-decision-in-focus',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating; US–Iran decision deferred to after the 3 Nov midterms (risk window ~4–10 Nov), with regional mediation under way. Israel votes today (27 Oct); Pezeshkian is in Moscow today for the gas exporters' summit and is expected to meet Putin. US ordered non-essential staff out of Saudi Arabia (21 Oct). APEC three-way still unconfirmed; no North Korean launch since 12 Oct.",
      sources: [
        'https://www.agbi.com/oil-and-gas/2026/10/oil-declines-after-trump-rules-out-imminent-attack-on-iran/',
        'https://www.tasnimnews.ir/en/news/2026/10/24/3730538/pezeshkian-to-visit-russia-for-gas-exporters-summit',
        'https://www.cnn.com/2026/10/21/politics/us-orders-departure-embassy-staff-saudi-arabia',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. French fuel worsening on the route: in the Doubs, 23 of 102 stations (22.5%) are out of diesel (27 Oct) and all four Besançon TotalEnergies stations were dry on 25 Oct — the A36 is the weak point; nationally ~9–11% of stations lack diesel (up from ~5% mid-October). 5 Nov national strike confirmed with SNCF unions. Donegal: ~1,100 customers still without power Monday morning after Storm Boelo. Irish Ferries Dublin–Cherbourg 26 Oct and Cherbourg–Dublin 27 Oct listed cancelled for weather (operator page only). Flights normal.",
    sources: [
      'https://www.lappelfrance.fr/2026/10/25/carburants-a-besancon-le-prix-plafonne-saffiche-les-pompes-restent-vides/',
      'https://www.sortiraparis.com/en/news/in-paris/articles/354559-general-strike-on-november-5-2026-transport-and-schools-brace-for-a-major-mobilization',
      'https://highlandradio.com/2026/10/26/over-1100-donegal-customers-without-power-as-further-strong-winds-forecast/',
      'https://www.irishferries.com/uk-en/sailing-updates/ireland-france/',
    ],
  },
};
