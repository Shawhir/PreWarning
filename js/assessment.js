// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-24: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-24',
  issuedAt: '2026-10-24T04:58:20Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, no change. No new drone incursions into NATO states, Black Sea ship strikes, NATO deployments or Baltic incidents found for 23–24 Oct; latest Romanian incident is still the 17 Oct F-16 shootdown of two Geran drones. Single-source reports (Militarnyi) of Moscow airport closures and a strike on a Russian data centre on 23 Oct are unconfirmed and would not change the status.",
      sources: [
        'https://www.romania-insider.com/romanian-f-16s-shoot-down-two-geran-drones-black',
        'https://www.capital.ro/mapn-face-bilantul-incidentelor-de-la-granita-18-drone-au-intrat-in-spatiul-aerian-al-romaniei-in-2026-trei-au-fost-doborate-de-avioane-f-16.html',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. Steadfast Noon ended 23 Oct with no Russian counter-exercise found; the only 2026 Russian strategic forces drill found was 19–21 May. No NOTAMs or dated bomber/SSBN activity for 23–24 Oct; a NATO official said there was no alarming change in Russian nuclear posture.",
      sources: [
        'https://russianforces.org/blog/2026/05/exercise_of_strategic_forces_h.shtml',
        'https://political.org/2026/10/08/nato-launches-annual-steadfast-noon-nuclear-exercise-in-italy-despite-fresh-russian-nuclear-threats/',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland found for 23–24 Oct; only general preparedness coverage.",
      sources: [
        'https://en.ara.cat/international/evacuation-plans-sirens-and-new-shelters-eastern-europe-prepares-for-the-russian-threat_1_5868887.amp.html',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, stalled. Talks Putin agreed \"in principle\" for after 10 Nov (Abu Dhabi or Geneva mentioned) still have no date. No expulsions, embassy drawdowns or new \"leave\" advisories found.",
      sources: [
        'https://www.usnews.com/news/world/articles/2026-10-21/putin-hosts-trump-envoy-for-new-ukraine-peace-talks-frees-us-citizen-held-in-russia',
        'https://www.kktv.com/2026/10/21/trump-envoy-witkoff-meets-putin-st-petersburg-ukraine-war-talks/?outputType=amp',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. No new nuclear statements found for 23–24 Oct and no Russian reaction found to the end of Steadfast Noon. Latest: Zakharova (22 Oct) \"full spectrum of available forces and means\"; Ryabkov (22 Oct) settlement \"not easy\"; Peskov (20–21 Oct) on the \"extremely dangerous\" post-New START gap. No ultimatum or readiness announcement.",
      sources: [
        'https://tass.com/politics/2206043',
        'https://www.ritmeurasia.ru/news--2026-10-22--zaharova-nato-namerenno-sozdaet-ugrozy-bezopasnosti-rossii-i-belarusi-91140',
        'https://www.yahoo.com/news/politics/articles/kremlin-backs-possible-putin-trump-114852753.html',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, no change. New: German distributor TAKKT reported a cyberattack (21 Oct) significantly restricting orders and deliveries, unclaimed; it joins the unclaimed French and Dutch retail incidents (Ahold deliveries resumed 23 Oct). No cable cuts or GPS jamming surge found.",
      sources: [
        'https://www.boerse-online.de/dpa-afx/eqs-adhoc-takkt-ag-cyberangriff-bei-takkt-ag-deutsch-559914.html',
        'https://safeguard.sh/resources/blog/takkt-cyberattack-october-2026-orders-deliveries-restricted',
        'https://therecord.media/ahold-delhaize-cyberattack-grocery',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, worsening. Brent settled $116.72 on 23 Oct (+3.1% on the day, ~+6.5% over 5 days, highest since April) after more Houthi strikes on Saudi targets and an unexplained oil spill off the UAE; the feed's 10% amber line has not been crossed. Dow fell 600+ points; VIX ~19.5–20.2 (highest since June). Gold ~$4,010 (down), EUR/CHF ~0.923 — no safe-haven rush. Israeli vote 27 Oct and reported post-3 Nov Iran strike plans are the near-term risks.",
      sources: [
        'https://asia.nikkei.com/business/markets/commodities/brent-crude-jumps-to-highest-since-april-on-houthi-attacks-uae-oil-spill',
        'https://www.thenationalnews.com/business/energy/2026/10/23/oil-prices-rise-as-houthis-launch-another-wave-of-attacks-on-saudi-arabia/',
        'https://foreignpolicy.com/2026/10/22/netanyahu-israel-election-overthrow-iran-regime-us-strikes-war/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating, no change. Putin–Trump–Xi meeting at APEC Shenzhen (18–19 Nov) still unconfirmed; Moscow wants arms control as the main topic. North Korea's latest launches 3 and 12 Oct; no testing news.",
      sources: [
        'https://www.bloomberg.com/news/articles/2026-10-21/kremlin-says-china-preparing-for-possible-putin-trump-xi-meeting',
        'https://www.koreatimes.co.kr/world/20261021/will-xi-trump-putin-meet-at-apec-first-they-must-agree-on-agenda',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Storm Boelo: Met Éireann orange wind warning for Donegal (and Sligo, Leitrim, Mayo) from 14:00 Sat 24 Oct to 09:00 Sun 25 Oct — expect local disruption at the fallback. Irish Ferries Dublin–Cherbourg 24 Oct listed cancelled (single source); Brittany Ferries Rosslare–Cherbourg still running. French fuel: no data newer than 18–19 Oct (16% of stations short); general strike 5 Nov with SNCF unions. Weather cancellations, not suspensions.",
    sources: [
      'https://highlandradio.com/2026/10/23/donegal-hit-with-several-weather-warnings-ahead-of-storm-boelo/',
      'https://www.rte.ie/news/ireland/2026/1023/1596525-orange-rain-warning/',
      'https://cyprusshippingnews.com/2026/10/09/brittany-ferries-move-barfleur-to-rosslare-cherbourg-route/',
      'https://www.cestlagreve.fr/greve/greve-generale-5-novembre-2026/',
    ],
  },
};
