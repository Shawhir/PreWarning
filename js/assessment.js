// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-23: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-23',
  issuedAt: '2026-10-23T05:15:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Amber, slightly below top of band. Romania\'s Supreme Defence Council (22 Oct) called the drone incursions and ship strikes consequences of Russia\'s aggression and set priorities (maritime surveillance, mine countermeasures, counter-drone, EU Black Sea hub), no concrete deployments. Russia hit Kyiv with ballistic missiles overnight 21–22 Oct, hours after the Witkoff–Putin meeting. No new drone incursions or ship strikes; India–Pakistan rhetoric only.',
      sources: [
        'https://ziare.com/csat/sedinta-cotroceni-incheiat-decizii-luate-2043167',
        'https://observatornews.ro/politic/csat-a-analizat-escaladarea-incidentelor-maritime-din-apele-teritoriale-ale-romaniei-670032.html',
        'https://meduza.io/en/news/2026/10/22/russia-strikes-kyiv-hours-after-putin-meets-with-trump-envoy-witkoff-killing-one-and-injuring-more-than-20',
        'https://kyivindependent.com/russian-ballistic-missiles-rock-kyiv-in-late-night-attack-injuring-6/',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Russian strategic exercise, Kremlin readout, NOTAMs, or bomber/SSBN activity found for 22–23 Oct 2026 (all Grom results were the 2025 drill). Steadfast Noon ends today (23 Oct) without a confirmed Russian counter-exercise.',
      sources: [
        'https://www.usnews.com/news/world/articles/2026-10-08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning',
        'https://www.pravda.com.ua/eng/news/2025/10/22/8003937',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland; Romania\'s council ordered no civil-protection measures.',
      sources: [
        'https://tvrinfo.ro/s-a-incheiat-prima-sedinta-csat-cu-participarea-premierului-luca-niculescu-incidentele-de-la-marea-neagra-pe-agenda/',
        'https://ziare.com/csat/sedinta-cotroceni-incheiat-decizii-luate-2043167',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Green, stalled. No date or venue set for the talks Putin agreed to "in principle" after 10 Nov; Ushakov said Witkoff\'s proposals had "little of real value", and Russia struck Kyiv hours after the meeting. No expulsions, drawdowns or new "leave" advisories.',
      sources: [
        'https://www.cnn.com/2026/10/21/europe/us-envoy-witkoff-putin-talks-russia-ukraine-intl',
        'https://www.manilatimes.net/2026/10/23/world/americas-emea/russian-attacks-show-no-change-in-kremlin-position/2451873',
        'https://www.usnews.com/news/world/articles/2026-10-21/putin-hosts-trump-envoy-for-new-ukraine-peace-talks-frees-us-citizen-held-in-russia',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, no change. Zakharova (22 Oct) said NATO is massing forces near Russia and Belarus and Russia is "ready to use the full spectrum of available forces and means" (no explicit nuclear mention). Ryabkov (20 Oct): "no grounds" to resume strategic stability talks. No new head-of-state nuclear statements, deadlines or readiness announcements.',
      sources: [
        'https://www.ritmeurasia.ru/news--2026-10-22--zaharova-nato-namerenno-sozdaet-ugrozy-bezopasnosti-rossii-i-belarusi-91140',
        'https://news.rambler.ru/politics/57276381-zaharova-zayavila-o-gotovnosti-rf-ispolzovat-vse-sredstva-dlya-ustraneniya-ugroz/',
        'https://tass.com/politics/2204727',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, no change. Both retail cyberattacks still unclaimed; the Dutch NCSC and Ahold say the French and Dutch incidents are unrelated; Ahold deliveries resuming from 23 Oct. Background: reports of 17 Russian trawlers mapping transatlantic cables (single source). No cable cuts or GPS jamming.',
      sources: [
        'https://therecord.media/ahold-delhaize-cyberattack-grocery',
        'https://www.ibtimes.co.uk/albert-heijn-deliveries-resume-after-cyber-incident-1826826',
        'https://mezha.net/eng/news/mezha-924d0d5145b5b6dedbbfcce5_17_russian_trawlers',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber, worsening. Brent settled $113.17 on 22 Oct (+4%, highest since May) after deadly Houthi strikes on Saudi oil sites (Shaybah, Yanbu) and Aramco\'s Dhahran HQ evacuation; NYT reports US–Israeli plans for renewed Iran strikes after 3 Nov (White House denies). Not crisis-level elsewhere: stocks up, VIX ~17–19, gold down to ~$4,020–4,090, EUR/CHF ~0.921 (franc firmer).',
      sources: [
        'https://www.rigzone.com/news/wire/oil_surges_4_after_deadly_saudi_attacks-22-oct-2026-184912-article/',
        'https://www.timeslive.co.za/news/world/2026-10-22-saudi-aramco-evacuates-dhahran-hq-after-houthi-attack-sources-say/',
        'https://www.timesofisrael.com/us-israel-said-to-draft-plans-for-resumed-strikes-on-iran-after-midterm-elections/',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, no change. Ryabkov says no grounds to resume US–Russia strategic stability talks (20 Oct); Putin–Trump–Xi APEC meeting (18–19 Nov) still unconfirmed. No testing news.',
      sources: [
        'https://tass.com/politics/2204727',
        'https://www.euronews.com/2026/10/19/putin-seeks-ukraine-summit-with-trump-and-xi-but-refuses-talks-with-zelenskyy',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber. Storm Austen: Met Éireann orange rain warnings incl. Dublin; Irish Sea ferries cancelled 23 Oct (Pembroke–Rosslare, Fishguard–Rosslare); Irish Ferries Cherbourg–Dublin 23 Oct and Dublin–Cherbourg 24 Oct listed cancelled (single source). Weather cancellations, not suspensions; a second storm may follow 24–25 Oct. French fuel: no data newer than 19 Oct (27.5% of stations short); 5 Nov strike. Swiss–Irish flights normal.',
    sources: [
      'https://www.thejournal.ie/storm-austen-rain-wind-direction-warnings-7200377-Oct2026/',
      'https://uk.news.yahoo.com/ferry-services-cancelled-ahead-storm-122817025.html',
      'https://www.irishferries.com/uk-en/sailing-updates/ireland-france/',
      'https://selectra.info/energie/actualites/marche/carburant-rupture-dimanche-soir-carte-toussaint',
    ],
  },
};
