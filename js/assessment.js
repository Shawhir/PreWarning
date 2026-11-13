// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-13: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-13',
  issuedAt: '2026-11-13T05:57:17Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. Russia struck Kyiv overnight into 12 Nov (Iskander-M, KN-23, S-400, Zircon, 123 drones; 1 killed; power cuts in nine regions) hours before the Putin meeting. The 10–11 Nov Baltic drone reportedly entered from Belarus near Druskininkai; still unattributed, Lithuania examining possible electronic-warfare diversion; no new incursions, no Article 4. Nothing new on Kaliningrad or confirmed Black Sea hits. Taiwan: 29 PLA aircraft on 12 Nov (22 across the median line), routine patrol; no blockade.",
      sources: [
        'https://kyivindependent.com/russia-attacks-kyiv-with-ballistic-missiles-hours-after-peace-talks-end/',
        'https://cyprus-mail.com/2026/11/12/russian-strikes-kill-woman-in-kyiv-cause-power-outages-across-ukraine',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic launch or exercise since the 28 Oct Bulava; no unusual SSBN or bomber activity. No Chinese strategic-forces news.",
      sources: [
        'https://russianforces.org/blog/2026/10/bulava_slbm_launched_westward_.shtml',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers in Switzerland, Ireland or elsewhere in Europe; only routine preparedness guidance (EU 72-hour kits).",
      sources: [
        'https://brusselssignal.eu/2026/11/brussels-takes-crisis-preparedness-into-primary-schools-and-revives-72-hour-kits/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, slightly better. Witkoff and Kushner met Putin for ~2 hours on 12 Nov: agreement to continue direct talks; Putin accepts Europeans in the next round in principle (after US–ally coordination) but rejects foreign peacekeepers; a new meeting is set (no date). In Dublin, Zelensky announced preparations for possibly the largest prisoner exchange of the war. Ryabkov: Russia's security demands \"cannot be dropped\". No new expulsions or \"leave\" advisories.",
      sources: [
        'https://time.com/article/2026/11/12/ukraine-russia-peace-deal-talks-putin-zelensky-witkoff-kushner/',
        'https://www.aljazeera.com/news/2026/11/12/us-envoys-arrive-in-moscow-for-russia-ukraine-talks-with-putin',
        'https://tass.com/politics/2216931',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements or ultimatums from Russian, US, Chinese or North Korean leaders for 12–13 Nov; no Russian statement on the Baltic drones.",
      sources: [
        'https://tass.com/politics/2216931',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax threats, cyberattacks, cable damage or GPS surge confirmed for 12–13 Nov (latest: a Ryanair bomb threat from Dublin on 10 Nov). Dublin EU summits under a \"substantial\" threat rating; no incidents reported. Zelensky says US Starshield military satellite communications were disrupted again.",
      sources: [
        'https://www.irishtimes.com/ireland/2026/11/10/gardai-say-significant-risk-to-security-this-week-as-ryanair-flight-from-dublin-faces-bomb-threat/',
        'https://time.com/article/2026/11/12/ukraine-russia-peace-deal-talks-putin-zelensky-witkoff-kushner/',
      ],
    },
    markets: {
      status: 'green',
      note: "Green, watch oil. Thu 12 Nov: US indexes slightly lower (Dow −0.4%) as Nvidia's CEO Jensen Huang stepped down (stock −4%); STOXX 600 at a record. Brent +3.3% to $95.82 after the Houthis claimed attacks on Saudi Arabia's East-West pipeline and a Yanbu facility. VIX 18.7; gold down ~2.8% to ~$3,880–3,915; EUR/CHF 0.923. Signals feed green on all four.",
      sources: [
        'https://thehill.com/policy/energy-environment/6088763-oil-prices-jump-houthi-attacks/',
        'https://www.cnbc.com/2026/11/12/nvidia-jensen-huang-ceo-live-updates.html',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Mixed. New watch item: on 12 Nov Iran's Assembly of Experts called for a review of leaving the NPT (nine withdrawal bills on parliament's agenda; no formal notice). Houthis attacked Saudi oil infrastructure (12 Nov). Iran denies talks; Qatar reports \"positive responses\"; Hormuz shut. APEC: Rubio and Wang Yi reportedly discussed a denuclearization track for a possible Trump–Xi–Putin meeting (not in China's readout; three-way unconfirmed). Israel Speaker vote 17 Nov; North Korea quiet since 4 Nov.",
      sources: [
        'https://kashmirobserver.net/2026/11/12/iran-mulls-npt-exit-nuclear-doctrine-overhaul/',
        'https://tribune.net.ph/2026/11/12/china-us-discuss-raising-denuclearization-at-potential-russia-trilateral',
        'https://aljazeera.com/news/2026/11/11/iran-denies-talks-with-us-says-hormuz-will-stay-shut-until-demands-are-met',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, no longer easing. Official: ~12% of French stations in difficulty on 12 Nov (10% on 11 Nov); Bas-Rhin ~39% (independent tracker); no new stocks for Grand Est while the Rhine is low; summer-diesel waiver ends 15 Nov. No current Doubs/Belfort data. 17 Nov: public-sector strike (six unions) plus CGT-Transports action week 16–20 Nov (buses, logistics, airports); air traffic controllers could join; plans due 16 Nov. Ferries, Donegal weather and Swiss–Irish flights normal.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://lenergeek.com/2026/11/12/carburants-stocks-grand-est-rhin-stations-ruptures-novembre-2026/',
      'https://mistertravel.news/2026/11/12/greve-du-17-novembre-ce-que-lon-sait-pour-les-trains-les-avions-et-les-transports/',
    ],
  },
};
