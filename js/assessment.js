// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-02: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-02',
  issuedAt: '2026-11-02T05:57:27Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. No new Black Sea attack, NATO-airspace incursion, Kaliningrad/Baltic incident or major Russian strike found for 1–2 Nov (search coverage of the weekend is thin). Latest: Khoryv (23 Oct) and Contship Jet (28 Oct) sunk off Romania and Bulgaria; no Article 4 filed. No US or Israeli strike on Iran yet.",
      sources: [
        'https://abcnews.com/Business/wireStory/drones-strike-container-ship-off-bulgarias-black-sea-137637109',
        'https://www.timeslive.co.za/news/world/2026-10-29-german-police-detain-two-suspects-in-russia-linked-sabotage-probe/',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, ICBM/SLBM launch or unusual bomber/SSBN activity found for 1–2 Nov. Russia's 2026 strategic drill was held in May; a second this autumn cannot be ruled out. Watch for Russian long-range bomber flights as US Global Thunder ends.",
      sources: [
        'https://russianforces.org/blog/2026/',
        'https://www.ibtimes.co.uk/global-thunder-27-fortress-america-base-resilience-1828631',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 1–2 Nov.",
      sources: [
        'https://www.iiss.org/globalassets/media-library---content--migration/files/research-papers/2026/civil-defence-in-europe-an-initial-assessment/iiss_civil-defence-in-europe_an-initial-assessment_-21042026.pdf',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. Abu Dhabi talks still \"first half of November\", undated; Kremlin says preparations for a Trump–Putin–Xi meeting at APEC have started (Beijing: \"no information\"). Peskov (1 Nov, single source): talks with Europe \"impossible\". Correction: US ordered departures applied to Saudi Arabia only (21 Oct); no Gulf-wide evacuation. No new \"leave\" advisories. The Irish DFA page changes flagged 1–2 Nov were the pages' daily \"still current\" date line rolling into November (levels unchanged); the monitor now ignores month names.",
      sources: [
        'https://www.kyivpost.com/post/88117',
        'https://en.iz.ru/en/2194454/2026-11-01/peskov-called-negotiations-europe-impossible-because-its-approach-russian-federation',
        'https://www.cnn.com/2026/10/21/politics/us-orders-departure-embassy-staff-saudi-arabia',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums found for 1–2 Nov. North Korea (2 Nov) called the US–South Korean Iron Mace drill a \"nuclear war rehearsal\" and vowed to speed up its nuclear deterrent. Trump (1 Nov) said remaining Iranian sites could be hit \"in 10 minutes\" (not nuclear).",
      sources: [
        'https://www.koreajoongangdaily.com/korea/north-korea-vows-faster-nuclear-buildup/12949364',
        'https://www.spokesman.com/stories/2026/nov/01/north-korea-says-us-south-korea-nuclear-drill-show/',
        'https://www.rte.ie/news/2026/1101/1597505-middle-east-iran/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new infrastructure cyberattack, cable damage or GPS jamming surge found for 1–2 Nov. Background: the UK and EU attribute the May 2026 Polish grid attack to Russia's GRU.",
      sources: [
        'https://www.webpronews.com/uk-and-eu-attribute-2026-polish-power-grid-cyberattack-to-russian-gru/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, easing within the band. Brent (now the January contract) fell ~1.5–2.6% to ~$110.4–111.6 at Monday's Asian open after Iran's foreign minister described a Qatar-brokered \"two-day plan\" (US measures on day 1, Hormuz reopens on day 2) — a proposal, not a deal. Gold ~$3,890 (one-year low ~$3,870 Friday) on rate-hike expectations; Asian stocks mixed, US/European futures slightly up. VIX ~19.4, EUR/CHF ~0.919 (Friday).",
      sources: [
        'https://gulfnews.com/world/mena/iran-proposes-2-day-plan-to-reopen-strait-of-hormuz-amid-us-talks-1.500732117',
        'https://investinglive.com/commodities/oil-slips-as-iran-says-qatar-brokered-plan-could-reopen-hormuz-in-two-days/',
        'https://hdfcsky.com/news/global-markets-today-november-2-2026-us-european-futures-rise-asia-mixed-oil-prices-ease-ahead-of-indian-market-opening',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating, with a diplomatic track. Iran proposes a Qatar-brokered two-day plan to reopen Hormuz and awaits a US reply; indirect talks continue. Iran's army (1 Nov): a renewed war could outlast the last and spread beyond West Asia. Trump and Rubio signal strikes unlikely before the 3 Nov midterms but possible after; Axios (single source) says Netanyahu is pressing for strikes right after the vote. Israel deadlocked; nomination due ~11 Nov. North Korea tested a new cluster-munition warhead (1 Nov).",
      sources: [
        'https://www.france24.com/en/middle-east/20261102-iran-warns-renewed-war-with-us-could-outlast-previous-conflict',
        'https://www.presstv.co.uk/Detail/2026/11/01/779702/araghchi-says-iran-holding-indirect-talks-through-qatar-rules-out-direct-meeting-with-us',
        'https://www.axios.com/2026/11/01/trump-netanyahu-iran-negotiations-war',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Diesel price cut only partly at the pump: national average ~€2.337/l (from €2.373); Leclerc down ~21 c, Carrefour almost unchanged, rural/independent stations ~€2.40. No new shortage count (last ~7.4% of diesel stations dry; Doubs 22.5% on 29 Oct). 5 Nov strike: four SNCF unions plus cross-sector; no refinery, depot, road or port blockades announced; SNCF plan out 4 Nov 17:00. Ferries Rosslare/Dublin–Cherbourg running; no Donegal warning; flights normal.",
    sources: [
      'https://prix-carburant.eu/article/gazole-baisse-1er-novembre-2026-prix-par-marque',
      'https://carburants.chiffrex.fr/actualite/gazole-quelles-stations-ont-baisse-leurs-prix-1er-novembre-2026',
      'https://lautomobiliste.fr/02/11/2026/prix-gazole-stations-service-baisse-reelle-2026/',
    ],
  },
};
