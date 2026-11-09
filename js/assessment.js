// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-09: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-09',
  issuedAt: '2026-11-09T05:57:35Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. Taiwan: AEI/ISW, the Taipei Times (8 Nov) and the SCMP report a possible large unannounced Chinese exercise rehearsing the isolation of Taiwan (100+ navy and coast guard vessels); Beijing has not confirmed it — an exercise, not a blockade. Russia hit Ukraine's grid again overnight 7–8 Nov (164 drones, 3 missiles; 600k+ without power in Dnipropetrovsk); Zaporizhzhia nuclear plant lost outside power on 8 Nov (16th time this year). Russian claims of ship hits off Odesa (unverified). No new Kaliningrad/Baltic incidents; no Article 4.",
      sources: [
        'https://www.taipeitimes.com/News/front/archives/2026/11/08/2003867351',
        'https://euromaidanpress.com/2026/11/08/russia-cuts-power-to-more-than-600000-in-dnipropetrovsk-oblast-as-zelenskyy-says-the-strikes-aim-to-squeeze-ukraine-before-talks/',
        'https://news.liga.net/en/war/news/zaporizhzhia-npp-left-without-external-power-16th-blackout-of-the-year',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, ICBM/SLBM launch or unusual bomber/SSBN activity found for 8–9 Nov; last strategic launch the 28 Oct Bulava. Zaporizhzhia is a reactor-safety issue, not a weapons signal.",
      sources: [
        'https://russianforces.org/blog/2026/',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 8–9 Nov.",
      sources: [
        'https://san.com/cc/germany-rushes-civil-defense-overhaul-as-russian-threat-grows/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, improving. Abu Dhabi Ukraine–Russia talks on for 10–11 Nov with larger delegations (Russia: Medinsky, Ryabkov, Galuzin, GRU chief Kostyukov; Ukraine: Umerov, Budanov). Trump meets Qatar's Prime Minister on 9 Nov on Iran mediation; Rubio says the sides are not close. No new expulsions or \"leave\" advisories.",
      sources: [
        'https://www.axios.com/2026/11/09/trump-qatar-prime-minister-iran-war-mediation',
        'https://www.kyivpost.com/post/89466',
        'https://www.etvbharat.com/en/international/trump-to-meet-qatar-pm-on-monday-as-key-mediator-pushes-new-proposals-in-talks-with-iran-enn26110900754',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements or ultimatums from Russian leaders, Trump or Kim for 8–9 Nov. Trump (8 Nov): renewed war with Iran \"highly unlikely\" if talks progress — calming.",
      sources: [
        'https://www.foxnews.com/live-news/iran-war-news-trump-saudi-houthi-november-8',
        'https://abc7news.com/post/us-iran-war-news-donald-trump-says-renewed-attacks-nuclear-program-strait-hormuz-talks-show-progress/20024909/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax threats since 6 Nov; European intelligence reportedly examining a Russian link (FT, via aggregator), no attribution. No new cable damage, GPS surge or infrastructure cyberattack.",
      sources: [
        'https://www.cnbc.com/2026/11/09/europe-fridge-hacks-bomb-threats-cyberattack.html',
        'https://www.npr.org/2026/11/06/nx-s1-6032612/europe-flights-hoaxes',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, easing. Monday Asia rebounded after Trump said new Iran strikes are \"highly unlikely\": Nikkei +3.4%, Taiwan +6%, US futures +0.6–0.7%. Brent ~$97.4–98, gold ~$4,125 (+1.3%). Friday VIX 25.6 (amber on the feed). Watch: Nvidia board inquiry into reported foreign-intelligence targeting of its CEO; ~80% odds of a December Fed hike. EUR/CHF ~0.914.",
      sources: [
        'https://hdfcsky.com/news/global-markets-today-november-9-2026-asia-rises-us-futures-higher-oil-slips-to-98-as-easing-iran-tensions-lift-sentiment',
        'https://www.investing.com/news/stock-market-news/asia-stocks-roar-back-as-taiwan-jumps-6-nvidia-probe-rattles-ai-trade-5010437',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Escalation pausing, not reversing. No US strikes on 8–9 Nov; the 8 Nov explosions at Bandar Abbas, Qeshm, Jask and Sirik are unexplained (Fars suggests warning shots at ships). IRGC says three tankers burned in Hormuz and calls Task Force Iron Gate \"wordplay\"; no Russian reaction to the Caspian blockade. Israel: Herzog asked Eisenkot (not Netanyahu) to form a government (7 Nov, 28 days); Knesset sworn in 10 Nov. North Korea quiet since 4 Nov.",
      sources: [
        'https://www.iranintl.com/en/202611088071',
        'https://www.middleeasteye.net/news/iron-gate-plan-merely-wordplay-iran-mocks-us-plan-disrupt-supply-routes',
        'https://www.aljazeera.com/news/2026/11/7/israels-president-picks-eisenkot-over-netanyahu-to-form-next-government',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Correction: the 18% fuel figure came from crowd-sourced trackers; the official site shows ~12% of French stations short of at least one fuel on 8 Nov (10% on 6 Nov) — a slow rise; Grand Est highest at ~20–23% (undated table). Gilets jaunes \"Acte V\" called for Sat 14 Nov, Europe-wide \"Acte VI\" 20–22 Nov; no motorway blockades listed. Irish Ferries cancelled Cherbourg–Dublin on 7 Nov for technical reasons (operator page). Donegal fog warning overnight 8–9 Nov (minor). Flights normal.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://lesvoitures.fr/carte-des-manifestations/',
      'https://www.irishferries.com/uk-en/sailing-updates/ireland-france/',
      'https://donegalnews.com/yellow-weather-warning-for-fog-in-donegal/',
    ],
  },
};
