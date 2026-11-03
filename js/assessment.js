// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-03: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-03',
  issuedAt: '2026-11-03T05:57:20Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band. New on 2 Nov: Poland sent counter-terrorism police to the Kaliningrad border after intelligence warned of sabotage and possible armed crossings, and is forming a border-defence brigade there. Russia–Ukraine: the limited ceasefire ended with a large Russian missile and drone attack overnight 1–2 Nov (26 killed in Zaporizhzhia region). Black Sea: only a single-source Russian claim of hitting a cargo ship south of Odesa (2 Nov); CNN counts at least a dozen merchant ships hit in recent weeks. No Article 4, no NATO-airspace incursions. (US strikes on Iran are counted under strategic context.)",
      sources: [
        'https://kyivindependent.com/poland-deploys-counterterrorism-police-near-russian-border-amid-sabotage-warnings/',
        'https://www.pravda.com.ua/eng/news/2026/11/02/8060934/',
        'https://france24.com/en/europe/20261102-live-russia-and-ukraine-trade-blame-cyber-attacks-fragile-ceasefire-ends',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic launch, exercise, bomber flight or SSBN report for 2–3 Nov; the last launch is still the 28 Oct Bulava. Stories of Putin threatening the \"entire arsenal\" over Kaliningrad date from late September (old). Watch Kaliningrad tension and any US–Iran escalation after today's midterms.",
      sources: [
        'https://russianforces.org/blog/2026/',
        'https://www.kyivpost.com/post/85688',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers in NATO states, Switzerland or Ireland. Note: overnight 1–2 Nov hackers took over Ukraine's Air Alert app and Russia's EMERCOM app and sent FAKE nuclear-attack warnings (sirens unaffected). Confirm any alert through official channels (Alertswiss, sirens) before acting.",
      sources: [
        'https://www.washingtonpost.com/world/2026/11/02/ukrainian-russian-emergency-alert-apps-send-false-warnings-after-hacks/',
        'https://www.cbsnews.com/news/ukraine-russia-war-app-hack-cyberattack-fake-nuclear-chemical-alerts/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. Abu Dhabi talks still \"first half of November\", undated (Moscow prefers mid-November). APEC Trump–Putin–Xi meeting unconfirmed; Putin's attendance most firmly backed. No new departures, expulsions or \"leave\" advisories, including for Israel, the Gulf or Iran.",
      sources: [
        'https://unn.ua/en/news/trilateral-talks-between-russia-the-us-and-ukraine-are-planned-in-abu-dhabi-in-the-first-half-of-november-kremlin',
        'https://kyivindependent.com/kremlin-signals-possible-three-way-meeting-at-apec-summit-between-putin-trump-xi/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums found for 2–3 Nov. North Korea's 2 Nov \"nuclear war rehearsal\" statement stands. Iran warns of a \"powerful response\" to any renewed attack (non-nuclear).",
      sources: [
        'https://www.koreajoongangdaily.com/korea/north-korea-vows-faster-nuclear-buildup/12949364',
        'https://abcnews.com/International/live-updates/iran-live-updates-trump-good-call-netanyahu/?id=137762456',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber. No new attack on European infrastructure, cable damage or GPS jamming surge found for 2–3 Nov. In the Russia–Ukraine war, hackers on both sides hijacked national emergency-alert apps on 1–2 Nov to send fake nuclear and chemical alerts — a reminder that alert channels themselves are targets.",
      sources: [
        'https://therecord.media/ukraine-hackers-russia-alert-system',
        'https://www.pbs.org/newshour/world/ukraine-and-russia-both-report-fake-emergency-alerts-after-cyberattacks-target-apps-as-limited-ceasefire-ends',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, mixed. Brent fell ~8% on 2 Nov to ~$104 (WTI $96.26) on Iran's two-day Hormuz plan and Trump saying a deal \"could happen\", then rose ~0.5% to ~$105 on Tuesday after the Qeshm strike. VIX closed 21.15 (back above 20); S&P −0.5% to its lowest since 31 Jul on a continuing tech sell-off. Gold ~$3,940–3,965; EUR/CHF ~0.919. US midterms today.",
      sources: [
        'https://www.investing.com/news/commodities-news/oil-rises-after-reported-us-strike-on-irans-qeshm-island-4993349',
        'https://www.24newshd.tv/03-Nov-2026/oil-prices-rise-plunging-7-percent',
        'https://yournews.com/2026/11/02/7249699/s/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating. On 2 Nov US forces made limited strikes on launchers on Iran's Qeshm Island after the IRGC fired at a US aircraft over Hormuz; US officials call it \"defensive\", not a return to major combat, and the WSJ says quiet limited strikes have been happening for weeks. Iran warns of a \"powerful response\"; IRGC claims two US drones downed (single source). Trump and Vance still point to progress in talks; Netanyahu reportedly pressing for strikes after today's midterms. Israel: no nomination yet (~11 Nov). North Korea quiet since 31 Oct.",
      sources: [
        'https://www.cnn.com/2026/11/02/politics/us-strikes-iran-qeshm-island',
        'https://www.nbcnews.com/world/iran/us-conducted-defensive-strikes-iranian-targets-strait-hormuz-us-offici-rcna607161',
        'https://www.france24.com/en/middle-east/20261103-us-strikes-iran-qeshm-island-as-trump-signals-progress-in-talks',
        'https://www.thenationalnews.com/news/us/2026/11/03/us-strike-qeshm-iran-hormuz/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, worsening on the French leg. Official data: 16% of French stations had supply difficulties on 2 Nov (12% on 31 Oct); Grand Est (Alsace, near the A36) worst at 25%; diesel ~11% dry (unofficial). No route suspensions (red needs those). 5 Nov strike: SNCF–union talks today; no refinery, depot or road blockades announced (Gilets jaunes blockades rumoured, unconfirmed). Ferries Rosslare/Dublin–Cherbourg running; Aer Lingus Zurich/Geneva–Dublin normal; no Donegal warning. If leaving, fill up in Switzerland.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://www.penurie-carburant.fr/',
      'https://www.sortiraparis.com/en/news/in-paris/articles/355255-sncf-strike-on-november-5-2026-the-latest-updates',
    ],
  },
};
