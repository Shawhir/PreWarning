// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-31: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-31',
  issuedAt: '2026-10-31T05:58:06Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. No new Black Sea ship attack found for 30–31 Oct (searched specifically). Bulgaria's PM says there are no grounds for Article 4; Bulgaria has asked NATO and the EU for help identifying the drones and for fighters and counter-drone systems. No NATO-airspace incursions or Kaliningrad/Baltic incidents found. (Hormuz incidents are counted under strategic context.)",
      sources: [
        'https://newsukraine.rbc.ua/news/bulgaria-rules-out-nato-articles-4-and-5-1791307321.html',
        'https://www.cp24.com/news/world/2026/10/29/ship-sinks-off-bulgarias-black-sea-coast-after-being-hit-by-drones/',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No further strategic launch, announced Russian exercise or rise in SSBN/bomber activity found after the 28 Oct Bulava training launch; a routine Tu-95MS Arctic patrol on 26 Oct. Russia's usual October strategic drill has not been held this year (it held one in May). US Global Thunder ends ~1–2 Nov.",
      sources: [
        'https://news.usni.org/2026/10/30/russia-north-korea-test-missiles-in-the-western-pacific',
        'https://www.zona-militar.com/en/2026/10/30/russian-tu-95-bombers-complete-13-hour-patrol-over-the-arctic',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 30–31 Oct; a viral claim of a Europe-wide \"war alert\" was fact-checked as false.",
      sources: [
        'https://sundayguardianlive.com/world/russia-europe-tensions-latest-news-did-almost-every-european-nation-declare-war-alert-against-moscow-what-we-know-about-viral-claim-288347/',
        'https://www.upi.com/Top_News/World-News/2026/10/26/United-Kingdom-Russia-European-security-defense-readiness/5391793063650/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. Lavrov and Rubio had a brief informal talk at the G20 in Atlanta on 30 Oct (\"decent… though brief\"); the family photo was cancelled after European objections, but there was no walkout. Abu Dhabi talks: Ushakov says \"after November 4\", no date. No new expulsions or \"leave\" advisories. Swiss FDFA page change of 26 Oct still unexplained.",
      sources: [
        'https://aa.com.tr/en/asia-pacific/russian-foreign-minister-says-he-had-not-bad-though-brief-talks-with-rubio-on-g20-sidelines/4107014',
        'https://www.cnn.com/2026/10/30/politics/g20-tensions-photo-canceled-lavrov-rubio',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums found for 30–31 Oct; Lavrov's Atlanta remarks (European \"arrogant boycott\", criticism of US help to Ukraine) were not nuclear. North Korea restated its nuclear-state status (routine).",
      sources: [
        'https://sputnikglobe.com/20261031/us-pragmatism-could-help-discussions-within-g20---lavrov-1124981761.html',
        'https://www.manilatimes.net/2026/10/31/world/asia-oceania/north-koreas-kim-urges-ai-weapons-push/2458331',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new infrastructure cyberattack, cable damage or GPS jamming surge found for 30–31 Oct.",
      sources: [
        'https://securityaffairs.com/190869/intelligence/sweden-reports-cyberattack-at-heating-plant-amid-rising-energy-threats.html',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, top of band. Brent's expiring December contract settled $117.64 on 30 Oct (+2.4%, 6-month high; +13.6% in October); the January contract, now the benchmark, closed $113.43. Drivers: tanker attacks near Hormuz, Houthi claims against Saudi oil sites, reports of US strikes after 3 Nov. VIX ~19.4 (up ~13%); S&P −1.8%, Nasdaq −2.9% (mostly on tech earnings); gold fell to ~$3,900; franc firmer (EUR/CHF ~0.919). Not yet crisis-level across markets. Note: the signals feed will roll to the January contract and may show a false fall.",
      sources: [
        'https://www.cnbc.com/2026/10/30/oil-rises-on-supply-concerns-as-houthis-attack-saudi-arabia.html',
        'https://brecorder.com/news/40446766/oil-jumps-2pc',
        'https://www.nationthailand.com/news/world/40072956',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating. Hormuz: UKMTO reported a tanker hit by explosives from a small boat (Oman rescued 25 crew); Iran's IRGC claims 3–4 tankers hit mines, which US CENTCOM calls false. At least 10 US military cargo aircraft landed at Israeli bases on 31 Oct, with more to Jordan, Saudi Arabia and Qatar; reports of a short, intense US strike round after the 3 Nov midterms. Counter-signals: Qatari mediators back in Tehran after a Vance letter; Iranian negotiators reportedly heading to Doha; Trump says the war will \"end soon\". Israel still deadlocked. Lavrov says a Putin–Trump–Xi APEC meeting is \"viewed positively\"; unconfirmed.",
      sources: [
        'https://www.cnbc.com/2026/10/30/iran-trump-hormuz-oil-middle-east-.html',
        'https://www.aljazeera.com/news/liveblog/2026/10/31/iran-war-live-oil-tankers-hit-in-hormuz-trump-says-conflict-will-end-soon',
        'https://www.eurasiareview.com/31102026-speculation-grows-over-renewed-strikes-on-iran-as-us-aircraft-arrive-in-israel/',
        'https://washingtontimes.com/news/2026/oct/30/qatari-mediators-return-tehran-talks',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Toussaint weekend: Bison Futé green nationally on 31 Oct–1 Nov (orange only into Île-de-France), so the A36 should be clear. Diesel price cut of 12–18 c/l from 1 Nov to 31 Jan (may start slightly late). No new fuel-shortage counts; last national figure ~7.4% of diesel stations dry (29 Oct, single source). 5 Nov: SNCF unions plus cross-sector strike; 3 Nov meeting could settle it. Brittany Ferries Rosslare–Cherbourg running; Poole–Cherbourg closing. Flights normal; no confirmed Donegal warning.",
    sources: [
      'https://www.macommune.info/bison-fute-du-vert-et-du-rouge-dans-le-sens-des-departs-et-des-retours-ce-week-end-de-la-toussaint',
      'https://prix-carburant.eu/article/gazole-affichage-remises-stations-baisse-1er-novembre',
      'https://www.sortiraparis.com/en/news/in-paris/articles/355255-sncf-strike-on-november-5-2026-the-latest-updates',
    ],
  },
};
