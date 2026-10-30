// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-30: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-30',
  issuedAt: '2026-10-30T05:56:58Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band. The Contship Jet (hit by three sea drones off Bulgaria on 28 Oct) sank on 29 Oct with all 421 containers; crew rescued. Bulgaria said the drones could not be stopped despite a warning from a French patrol aircraft. Bulgaria, Romania and Türkiye agreed a joint Black Sea intelligence and early-warning mechanism (28 Oct); Russia denies involvement. Roughly 9–11 ships hit in the western Black Sea since 1 Oct. No new attack, Article 4 request or NATO-airspace incursion found for 29–30 Oct.",
      sources: [
        'https://www.cp24.com/news/world/2026/10/29/ship-sinks-off-bulgarias-black-sea-coast-after-being-hit-by-drones/',
        'https://maritime-executive.com/article/containership-struck-off-bulgaria-as-ministers-meet-to-increase-security',
        'https://www.israelhayom.com/2026/10/29/zim-operated-cargo-ship-sinks-in-black-sea-after-attack-by-drones/',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No further strategic launch, announced Russian exercise or bomber/SSBN activity found after the 28 Oct Bulava training launch; no Russian reaction to Global Thunder. Launch NOTAMs run to 31 Oct, so another launch this weekend is possible — that would make this amber.",
      sources: [
        'https://militarnyi.com/en/news/russian-submarine-generalissimus-suvorov-launches-bulava-intercontinental-ballistic-missile/',
        'https://english.news.cn/20261028/9000a1715416467b952d0547330e78c5/c.html',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 29–30 Oct; only ongoing preparedness stories.",
      sources: [
        'https://www.thestar.com.my/news/world/2026/10/02/polish-city-reopens-cold-war-shelter-as-russian-attacks-in-ukraine-intensify',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, slightly improving. Lavrov arrived in Atlanta on 30 Oct for the G20 foreign ministers' meeting (30–31 Oct) hosted by Rubio; no bilateral announced yet. Abu Dhabi talks: Kremlin says first half of November (possibly ~10 Nov), no fixed date. No new expulsions, drawdowns or \"leave\" advisories. Swiss FDFA page change of 26 Oct still unexplained.",
      sources: [
        'https://www.aninews.in/news/world/us/russian-fm-sergey-lavrov-arrives-in-atlanta-for-g20-foreign-ministers-meeting20261030103148/',
        'https://sputnikglobe.com/20261030/lavrov-arrives-in-atlanta-to-attend-meeting-of-g20-foreign-ministers-1124977256.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums found for 29–30 Oct; no comment on the Bulava launch or Black Sea attacks. Kim (29 Oct): \"peace is guaranteed only by strength\", no nuclear threat.",
      sources: [
        'https://www.france24.com/en/asia-pacific/20261030-north-korea-tests-attack-drones-as-kim-calls-for-absolute-superiority',
        'https://rt-english.com/russia/647458-kremlin-dangerous-nuclear-arms-control/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new infrastructure cyberattack, cable damage or GPS jamming surge found for 29–30 Oct.",
      sources: [
        'https://www.malaymail.com/news/world/2026/01/06/baltic-sea-cable-sabotage-timeline-from-nord-stream-to-2026-whos-behind-the-attacks/204485',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, volatile. Brent eased to ~$114.9 on 29 Oct after reports of US outreach to Iran (Vance), then firmed Friday after a tanker was hit ~25 nm north-east of Khasab in the Strait of Hormuz on 29 Oct (UKMTO; cause unclear) and reports of US strike options being readied. Saudi Arabia still reports no damage at Ras Tanura. Gold ~$4,000–4,025 (down), VIX ~17, EUR/CHF ~0.922. Signals feed's Brent (~$111) is on a later contract.",
      sources: [
        'https://www.cnbc.com/2026/10/29/oil-price-today-wti-brent.html',
        'https://thenationalnews.com/business/energy/2026/10/29/oil-prices-decline-after-diplomatic-push-in-iran-war',
        'https://gulfnews.com/world/mena/tankers-hit-by-unknown-projectiles-in-strait-of-hormuz-as-ship-attacks-escalate-1.500729052',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating. North Korea fired ~10 short-range ballistic missiles from near Wonsan on 29 Oct (first since 12 Oct; outside Japan's EEZ). Trump received an in-person briefing on Iran military options on 29 Oct; no order given; Gulf states reportedly told strikes would resume after the 3 Nov midterms (single source). Iran calls the Qatari draft \"unacceptable ideas\" but contacts continue; tanker hit near Hormuz 29 Oct. Israel count complete: 53–48, no majority. APEC trilateral unconfirmed.",
      sources: [
        'https://www.aljazeera.com/news/2026/10/29/north-korea-fires-missiles-as-row-over-landmine-blast-intensifies',
        'https://www.zona-militar.com/en/2026/10/29/north-korea-launches-at-least-ten-ballistic-missiles-toward-the-sea-of-japan',
        'https://www.jfeed.com/news/trump-briefed-iran-military-options-hegseth-caine',
        'https://www.aljazeera.com/news/2026/10/29/israel-election-result-shows-no-overall-majority-as-vote-count-complete',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. French fuel easing: 7.4% of diesel stations dry nationally on 29 Oct (single source), down from ~9%; Bas-Rhin among the worst; Belfort ~19% and Doubs a handful of stations out (undated trackers). Toussaint return weekend 31 Oct–1 Nov — fill up before Saturday evening. 5 Nov: all four SNCF unions plus a cross-sector strike; 3 Nov pay meeting could settle it; roads expected congested. France–Ireland ferries are Brittany Ferries (Rosslare–Cherbourg) and Irish Ferries (Dublin–Cherbourg); no cancellations found. Flights normal; no Donegal warning confirmed.",
    sources: [
      'https://selectra.info/energie/actualites/marche/carburant-rupture-dimanche-soir-carte-toussaint',
      'https://www.sortiraparis.com/en/news/in-paris/articles/355255-sncf-strike-on-november-5-2026-the-latest-updates',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
    ],
  },
};
