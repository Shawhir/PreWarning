// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-26: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-26',
  issuedAt: '2026-10-26T05:58:39Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, slightly below top of band, no change. No drone incursions into NATO states found for 25–26 Oct (latest: Geran crash in Moldova 23 Oct). Routine cross-border strikes 25 Oct (Ukrainian drones on a Belgorod shopping centre and Perm; Russian drone deaths in Dnipropetrovsk). No US or Israeli strike on Iran happened over the weekend; NYT-reported joint plans point to after 3 Nov. NATO is adding maritime patrol aircraft, radars and drones in the Black Sea (reported 21–22 Oct).",
      sources: [
        'https://kyivindependent.com/massive-ukrainian-drone-attack-hits-shopping-center-in-russias-belgorod-oblast-locals-say/',
        'https://www.aljazeera.com/news/2026/10/25/centcom-reportedly-has-plans-for-iran-strikes-will-trump-approve-them',
        'https://euromaidanpress.com/2026/10/23/moldova-expels-russian-diplomat-after-geran-drone-crashes/',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. US Global Thunder 27 runs to about 1–2 Nov; no Russian counter-exercise, Kremlin reaction, deployments, NOTAMs or bomber/SSBN activity found. Correction to yesterday: Russia already held a large strategic-forces drill on 19–21 May 2026, so an autumn drill is less certain; a short-notice one is still possible. Background: Lithuania's first vote (6 Oct) to lift its ban on hosting nuclear weapons (final vote Jan 2027).",
      sources: [
        'https://www.afgsc.af.mil/News/Article-Display/Article/4631480/us-strategic-command-begins-exercise-global-thunder-27/',
        'https://russianforces.org/blog/2026/05/exercise_of_strategic_forces_h.shtml',
        'https://www.themoscowtimes.com/2026/10/06/kremlin-warns-lithuania-lifting-nuclear-arms-ban-risks-escalation-a93891',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found in Switzerland, Ireland, the rest of Europe, the US or Russia for 25–26 Oct.",
      sources: [
        'https://www.kyivpost.com/amp/post/77236',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, stalled. Abu Dhabi trilateral talks still undated (\"first half of November\", possibly ~10 Nov). No NATO-state expulsions, drawdowns or \"leave\" advisories for Russia, Belarus, Ukraine, the Baltics, Poland or Moldova. (The US Gulf drawdown is counted under strategic context.)",
      sources: [
        'https://www.aljazeera.com/news/2026/10/23/russia-ukraine-talks-planned-for-november-in-uae-kremlin',
        'https://www.aa.com.tr/en/eurasia/kremlin-says-trilateral-ukraine-peace-talks-scheduled-for-1st-half-of-november-in-abu-dhabi/4098424',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No new nuclear statement or ultimatum from Russian leaders confirmed for 25–26 Oct; a single-source Zakharova remark (26 Oct) on NATO's buildup near Belarus does not count yet. No Russian reaction to Global Thunder found.",
      sources: [
        'https://kathleenmccroskey.substack.com/p/statement-by-russian-foreign-ministry',
        'https://rt-english.com/russia/647458-kremlin-dangerous-nuclear-arms-control/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, no change. No new infrastructure cyberattack, cable damage or GPS jamming surge found for 25–26 Oct. Recent items are political-party data leaks (French Communist Party 23 Oct, AfD 20 Oct) and reports of Russian trawlers tracing UK cable routes (no damage). The French, Dutch and German retail/logistics attacks remain unclaimed.",
      sources: [
        'https://franceinfo.fr/internet/securite-sur-internet/cyberattaques/le-parti-communiste-francais-victime-d-une-cyberattaque_8251381.html',
        'https://safeguard.sh/resources/blog/takkt-cyberattack-october-2026-orders-deliveries-restricted',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, worsening trend paused. Brent eased ~1.6% to ~$114.9 in Asia on Monday after Trump ruled out a Sunday strike on Iran (Friday $116.72); Houthi attacks on Saudi Arabia keep supply risk high. Gold ~$4,000 (near 3-month low), Asian stocks weaker, franc safe-haven demand eased. The signals feed's Brent ($109.6) is on a later futures contract and understates the price. Fed decision 27–28 Oct.",
      sources: [
        'https://in.investing.com/news/commodities-news/oil-falls-from-6mth-highs-saudi-attacks-keep-supply-risks-in-focus-5653030',
        'https://www.benzinga.com/news/politics/26/10/62581355/trump-iran-strike-oil-prices',
        'https://www.fxstreet.com/news/swiss-franc-advances-as-us-dollar-weakens-on-fed-rate-pause-expectations-202610260345',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating; US–Iran decision deferred, not defused. Trump (24 Oct): \"make a deal or finish them off\"; (25 Oct): \"no strike today\". Qatari mediators in Tehran; Iran says it is open to talks. US–Israeli strike plans reportedly for after the 3 Nov midterms — the risk window is ~4–10 Nov. Missing from earlier readings: the US ordered non-essential embassy staff out of Saudi Arabia on 21 Oct (CNN, CBS), with reports of wider regional cuts. Israel votes 27 Oct; Pezeshkian meets Putin 27 Oct. APEC three-way still unconfirmed; no North Korean launch since 12 Oct.",
      sources: [
        'https://www.aa.com.tr/en/americas/-trump-rules-out-sunday-military-strikes-on-iran/4100333',
        'https://english.alarabiya.net/News/middle-east/2026/10/25/qatari-mediators-reportedly-in-tehran-in-uscoordinated-effort-to-ease-tensions',
        'https://www.cnn.com/2026/10/21/politics/us-orders-departure-embassy-staff-saudi-arabia',
        'https://www.theweek.in/news/middle-east/2026/10/25/american-diplomats-now-legitimate-targets-us-draws-down-embassy-personnel-following-iranian-threat.html',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Storm Boelo was worse than first reported: ~25,800 Donegal customers lost power at the peak (Highland Radio); ~5,000 still off nationally on Sunday evening, mostly in the northwest — check ESB PowerCheck for Crolly. New yellow wind warning for Donegal today 17:00–midnight. Irish Ferries Cherbourg–Dublin cancelled 25 Oct and delayed 26 Oct (single source). French fuel: Besançon/Doubs TotalEnergies stations dry on 25 Oct (single source, on the A36 route from Switzerland); no national update since 18–19 Oct; general strike 5 Nov, overlapping the post-3 Nov Iran risk window.",
    sources: [
      'https://highlandradio.com/2026/10/25/more-than-6400-customers-without-power-across-parts-of-donegal/',
      'https://www.rte.ie/news/ireland/2026/1025/1596760-storm-boelo-power-ireland/',
      'https://www.thejournal.ie/in-republic-7204735-Oct2026/',
      'https://www.lappelfrance.fr/2026/10/25/carburants-a-besancon-le-prix-plafonne-saffiche-les-pompes-restent-vides/',
    ],
  },
};
