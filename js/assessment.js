// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-28: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-28',
  issuedAt: '2026-10-28T05:58:49Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. No new ship hit in the Black Sea since the Khoryv sinking off Constanța on 23 Oct (searched specifically); no Article 4 request; no drone incursions into NATO states or Moldova for 27–28 Oct. Large Russian strike on Kyiv overnight 26–27 Oct (~280 drones plus ballistic missiles; at least 1 killed, ~15 injured; Southern Bridge and a university campus hit) — heavy, but within the Russia–Ukraine war. NATO is adding patrol aircraft, radars and drones in the Black Sea.",
      sources: [
        'https://www.pravda.com.ua/eng/news/2026/10/27/8059874/',
        'https://euromaidanpress.com/2026/10/27/russian-ballistic-missiles-hit-a-kyiv-university-campus-then-return-before-dawn-for-the-southern-bridge-again/',
        'https://kyivindependent.com/nato-to-bolster-black-sea-presence-with-patrol-aircraft-drones-after-attacks-on-commercial-ships/',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, reaction to US Global Thunder 27 (to ~1–2 Nov), missile launches, NOTAMs or bomber/SSBN reports found. Russia held its main drill in May this year; a short-notice autumn drill cannot be ruled out.",
      sources: [
        'https://russianforces.org/blog/2026/05/exercise_of_strategic_forces_h.shtml',
        'https://www.afgsc.af.mil/News/Article-Display/Article/4631480/us-strategic-command-begins-exercise-global-thunder-27/',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 27–28 Oct; only routine siren tests and preparedness speeches.",
      sources: [
        'https://greydynamics.com/russian-aggression-spawns-civil-preparedness-efforts-across-europe/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, stalled. Abu Dhabi talks still only \"first half of November\" (Moscow proposes ~10 Nov). No NATO-state expulsions, drawdowns or new \"leave\" advisories. The 26 Oct change to the Swiss FDFA Russia and Belarus pages is still unexplained — check by hand.",
      sources: [
        'https://aa.com.tr/en/eurasia/kremlin-says-trilateral-ukraine-peace-talks-scheduled-for-1st-half-of-november-in-abu-dhabi/4098424',
        'https://www.eda.admin.ch/countries/russia/en/home/travel-advice/current-situation.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements or ultimatums found for 27–28 Oct; no Russian statement on the Black Sea ship attacks or Romania.",
      sources: [
        'https://rt-english.com/russia/647458-kremlin-dangerous-nuclear-arms-control/',
        'https://tass.com/politics/2206043',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new infrastructure cyberattack, cable damage or GPS jamming surge found for 27–28 Oct. Recent background: Sopra Steria intrusion (20 Oct), Qilin ransomware wave exploiting a Palo Alto flaw; earlier French, Dutch and German retail/logistics attacks remain unclaimed.",
      sources: [
        'https://www.solutions-numeriques.com/securite/sopra-steria-a-confirme-une-cyberattaque-decouverte-le-20-octobre-au-soir',
        'https://safeguard.sh/resources/blog/takkt-cyberattack-october-2026-orders-deliveries-restricted',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, oil easing. Brent settled ~$113.88 on 27 Oct (−1.7%) on Iran–Saudi–Turkey–Pakistan diplomacy, then rose ~1.4% early Wednesday on Israel's deadlocked election and a claimed Houthi attack near Yanbu (single source). Goldman puts ~$27/bbl of Brent down to war risk. VIX ~17.5, gold ~$4,050, EUR/CHF ~0.924. Fed decision today (hold expected). The signals feed's Brent (~$111) is on a later futures contract.",
      sources: [
        'https://finance.yahoo.com/news/oil-eases-middle-east-diplomacy-003711784.html',
        'https://www.nationthailand.com/news/world/40072812',
        'https://www.fxstreet.com/news/wti-rises-above-10000-amid-israeli-election-deadlock-saudi-infrastructure-attack-202610280136',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating, no change. Israel's 27 Oct election is deadlocked (exit polls: neither bloc near 61 seats; official results 4 Nov), so Netanyahu likely stays caretaker through the 4–10 Nov Iran risk window. Putin met Pezeshkian in Moscow on 27 Oct (energy, trade, Middle East; no military or nuclear announcement). Trump: no Iran strike before the 3 Nov midterms; talks via Qatar and Pakistan continue. APEC three-way still unconfirmed; no new North Korean launch.",
      sources: [
        'https://tass.com/politics/2208997',
        'https://www.axios.com/2026/10/27/netanyahu-eisenkot-israel-election-exit-polls',
        'https://www.cnn.com/2026/10/27/world/live-news/israel-elections-live-results-latest-votes-intl',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. French fuel: nationally 11% of stations short of at least one fuel (27 Oct, official data), down from 15% on 25 Oct; the government released strategic diesel stocks (decree of 24 Oct) with prices expected to fall from 1 Nov. Single source: Haut-Rhin, Bas-Rhin and Territoire de Belfort (on the A36) at 25%+ short; Doubs was 22.5% short of diesel on 27 Oct. Toussaint return traffic (31 Oct–1 Nov) risks weekend shortages. 5 Nov national strike with SNCF unions confirmed; no road, depot or port blockades announced. No new Donegal power or ferry problems found; flights normal.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://www.connexionfrance.com/driving/fuel-shortages-worsen-across-france-hundreds-of-stations-entirely-out-of-supply/824153',
      'https://ulysse.com/news/tgv-ter-intercites-greve-nationale-sncf',
      'https://www.lappelfrance.fr/2026/10/25/carburants-a-besancon-le-prix-plafonne-saffiche-les-pompes-restent-vides/',
    ],
  },
};
