// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-29: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-29',
  issuedAt: '2026-10-29T05:57:40Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band. New: on 28 Oct three sea drones hit the Liberian-flagged container ship Contship Jet ~21 nm south-east of Shabla, Bulgaria (all 18 crew rescued; ship listing). Bulgaria's PM said \"the logic points\" to Russia but it cannot be proven; Moscow denies; Bulgaria says Article 4 would be \"unproductive\" for now. Attacks off NATO coasts continue (~7–8 ships this month). Romania tied a Russian-run sabotage network to the 14 Sep fire beside the Carfil arms plant in Brașov (finding announced 26 Oct). Lighter Russian strike on Ukraine 27–28 Oct. No drone incursions into NATO airspace found.",
      sources: [
        'https://www.washingtonpost.com/business/2026/10/28/bulgaria-drone-attack-container-ship-black-sea/7d0a5260-d2cd-11f1-9931-2a41b76fc976_story.html',
        'https://www.bta.bg/en/news/world/1234706-all-18-crew-members-of-drone-hit-container-ship-near-kaliakra-have-been-rescued',
        'https://sofiaglobe.com/2026/10/28/drone-attack-on-container-ship-off-bulgarias-cape-kaliakra/',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber; watch. On 28 Oct the Borei-A submarine Generalissimus Suvorov fired a Bulava SLBM from the Sea of Okhotsk to the Chizha range — described as scheduled combat training, with NOTAMs posted 25 Oct and US RC-135S observing. A single pre-notified training launch is not a posture change, but it falls during US Global Thunder (to ~1–2 Nov). Amber if a Russian strategic exercise is announced, another strategic launch follows, or SSBN/bomber activity rises.",
      sources: [
        'https://english.news.cn/20261028/9000a1715416467b952d0547330e78c5/c.html',
        'https://www.zona-militar.com/en/2026/10/28/russia-launches-bulava-intercontinental-ballistic-missile-from-borei-a-nuclear-submarine/',
        'https://russianforces.substack.com/p/bulava-slbm-launched-westward-from',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 28–29 Oct.",
      sources: [
        'https://www.bluewin.ch/en/news/sirens-wail-on-disaster-preparedness-day-alarm-sound-even-halts-parliamentary-sessions-li.3595169',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, slightly improving. Finland's and Norway's leaders held a 90-minute call with Putin on 27 Oct about the planned talks (official readouts) and agreed to keep contact. Lavrov to attend the G20 foreign ministers' meeting in Atlanta 30–31 Oct (Russian announcement; US not confirmed). Abu Dhabi talks still undated (Ryabkov: \"premature\"). No new NATO-state expulsions or \"leave\" advisories. Swiss FDFA page change of 26 Oct still unexplained.",
      sources: [
        'https://www.presidentti.fi/en/president-stubb-and-prime-minister-store-held-a-phone-call-with-president-putin/',
        'https://www.bloomberg.com/news/articles/2026-10-28/russia-s-lavrov-to-go-to-us-for-g20-foreign-ministers-meeting',
        'https://www.turkiyetoday.com/world/russia-says-ukraine-talks-still-in-preparatory-phase-abu-dhabi-meeting-premature-3231212',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements or ultimatums found for 28–29 Oct; Zakharova (28 Oct) said Europe is \"not ready for honest discussion\". No Russian statement on the Black Sea ship attacks.",
      sources: [
        'https://anews.com.tr/world/2026/10/29/russia-says-europe-still-not-ready-to-engage-in-honest-discussion-regarding-its-interests',
        'https://rt-english.com/russia/647458-kremlin-dangerous-nuclear-arms-control/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new infrastructure cyberattack, cable damage or GPS jamming surge found for 28–29 Oct; only single-source hacker claims in France. Earlier retail/logistics attacks remain unclaimed.",
      sources: [
        'https://www.lemagit.fr/actualites/366652455/Cyberhebdo-du-16-octobre-2026-une-semaine-violente-en-France-et-au-dela',
        'https://gcaptain.com/timeline-of-suspected-underwater-sabotage-in-baltic-sea/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, oil firming again. Brent settled $115.32 on 28 Oct (+1.3%) on a claimed Houthi strike on Saudi Arabia's Ras Tanura refinery (unconfirmed by Riyadh) and talk of renewed US strikes on Iran; ~$114.5 Thursday morning. Fed held (10–2, two votes for a hike) and flagged energy as an inflation risk; 10-year Treasury ~5%. VIX ~16.9, gold ~$4,040–4,050, EUR/CHF ~0.925. Signals feed's Brent (~$111) is on a later contract.",
      sources: [
        'https://www.cnbc.com/2026/10/28/oil-price-today-wti-brent-hormuz.html',
        'https://www.thenationalnews.com/business/energy/2026/10/28/oil-prices-up-due-to-houthi-strikes-and-us-threat-to-renew-iran-war/',
        'https://qz.com/oil-prices-houthis-ras-tanura-refinery-strike-102826',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating, with a diplomatic counter-signal. Qatar gave Iran a draft deal on 25 Oct (7 days of confidence-building steps, outside guarantors); Iran is expected to reply by the end of this week, with mixed signals (\"welcomes\" talks; ideas \"unacceptable\"). US strike option still open after the 3 Nov midterms. Israel deadlocked (partial results 53–48; new election likely). Lavrov says Putin will attend APEC in Shenzhen; trilateral with Trump and Xi unconfirmed. No North Korean launch since 12 Oct.",
      sources: [
        'https://www.thenationalnews.com/news/mena/2026/10/28/iran-welcomes-negotiations-after-reported-qatari-mediated-draft-deal/',
        'https://geo.tv/latest/688776-qatar-presents-iran-with-new-draft-deal-to-end-war-tehran-calls-ideas-unacceptable',
        'https://www.jta.org/2026/10/28/israel/israels-election-deadlock-3-scenarios-for-what-comes-next',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. French fuel: ~9% of stations out of diesel nationally (official feed); fuel tracker shows Territoire de Belfort ~33% and Doubs ~22.5% short on the A36 route; low Rhine levels blocking barge deliveries to Strasbourg. Diesel prices cut from 1 Nov. Bison Futé: Fri 30 Oct orange nationally; Toussaint weekend mostly green outside Paris. 5 Nov: SNCF unions plus CGT national strike (a 3 Nov pay meeting could change it); no depot or port blockades announced. Brittany Ferries Rosslare–Cherbourg daily. Donegal and flights: nothing new.",
    sources: [
      'https://lautomobiliste.fr/28/10/2026/automobilistes-reduction-carburant',
      'https://www.sortiraparis.com/en/news/in-paris/articles/355255-sncf-strike-on-november-5-2026-the-latest-updates',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
    ],
  },
};
