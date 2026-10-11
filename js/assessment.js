// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-11: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-11',
  issuedAt: '2026-10-11T05:05:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'No change. Kaliningrad: no blockade or clash; NATO Military Committee chair Dragone said 10 Oct NATO has no plan to blockade it ("serious but under control"). Lithuania sent ~100 troops to the Kaliningrad border until 16 Oct as a precaution. Bulgaria\'s PM ruled out Articles 4/5 over the 6 Oct Black Sea drone strikes. Poland and Romania scrambled jets 9–10 Oct during Russian strikes on Ukraine. Nothing new in Asia.',
      sources: [
        'https://1news.az/en/news/20261010122508915-NATO-does-not-plan-to-blockade-Kaliningrad',
        'https://www.bloomberg.com/news/articles/2026-10-08/lithuania-sends-troops-to-border-over-putin-mobilization-concern',
        'https://newsukraine.rbc.ua/news/bulgaria-rules-out-nato-articles-4-and-5-1791307321.html',
        'https://abcnews.com/International/russian-strikes-kill-2-kyiv-prompt-nato-scramble/story?id=136881319',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. NATO nuclear policy head said 8 Oct no big changes in Russian posture observed. Steadfast Noon runs from 13 Oct for ~10 days (Italy, 17 nations). Russia\'s Grom exercise not yet announced (held every October since 2022; 22 Oct last year); watch Barents Sea NOTAMs and an unconfirmed report of Oreshnik launch notices at Kapustin Yar from 22 Oct.',
      sources: [
        'https://www.wsls.com/news/world/2026/10/08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning/',
        'https://www.thebarentsobserver.com/security/russia-readies-barents-sea-for-annual-thunder-nuke-exercise/438972',
        'https://www.nato.int/en/news-and-events/articles/news/2026/10/08/nato-holds-annual-nuclear-exercise-steadfast-noon',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation, martial law or emergency powers in NATO states or Switzerland. Austria\'s 3 Oct siren test was a scheduled drill. Russia has announced no mobilisation.',
      sources: [
        'https://www.tirol.gv.at/presse/meldungen/meldung/zivilschutzprobealarm-am-samstag-den-03102026/',
        'https://www.themoscowtimes.com/2026/09/02/complete-nonsense-putin-dismisses-mobilization-rumors-a93621',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. No new expulsions, closures, suspended talks or new "leave" advisories. Irish DFA pages unchanged per the signals feed (Russia, Belarus, Ukraine: Do not travel). Lavrov said ~7 Oct that Rutte and the US NATO envoy assured Moscow NATO has no plans to attack Russia (Russian claim only).',
      sources: [
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
        'https://govukdiff.njk.onl/update/2026-09-10T14:40:00+01:00/www.gov.uk/foreign-travel-advice/belarus',
        'https://www.dailysabah.com/world/europe/russia-closely-watching-nato-over-attack-warnings-lavrov/amp',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Top of amber, no change. The 30 Sep Kaliningrad nuclear note and Putin\'s 1 Oct Valdai remarks stand; no new nuclear statements, deadlines or readiness announcements found since. Slight easing: NATO says no blockade is planned. A blockade, deadline or alert change would make this red.',
      sources: [
        'https://www.aljazeera.com/news/2026/9/30/russia-warns-nato-of-possible-nuclear-response-if-kaliningrad-is-cut-off',
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
        'https://news.am/en/news/1066113',
      ],
    },
    infrastructure: {
      status: 'green',
      note: 'No change. No new cable cuts, cyber-caused outages or unusual GPS/satellite interference reported in October; latest Baltic cable incident Jan 2026.',
      sources: [
        'https://capacityglobal.com/news/latvia-investigation-finds-no-link-between-liepaja-vessel-and-damaged-baltic-sea-telecom-cable',
        'https://www.defensenews.com/global/europe/2026/09/10/nato-allies-foil-russian-subsea-cable-sabotage-plot/',
      ],
    },
    markets: {
      status: 'amber',
      note: 'No material change. Energy stress persists: Brent ~$104 on 9 Oct after a 4% jump; France releasing 10M barrels of diesel from strategic stocks; Iran reviewing a US reply on reopening Hormuz. Signals feed (5-day moves) green: VIX 14.8, gold ~$4,216, EUR/CHF 0.931.',
      sources: [
        'https://tradingeconomics.com/commodity/brent-crude-oil',
        'https://www.fxstreet.com/news/oil-prices-supported-by-supply-risks-and-iran-tensions-danske-bank-202610080914',
        'https://gulfnews.com/world/mena/us-iran-standoff-what-uae-residents-need-to-know-this-evening-october-9-2026-1.500704947',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, no change. US told the Conference on Disarmament (6–8 Oct) that China has conducted nuclear explosive tests; NNSA ran a 16-ton non-nuclear underground blast in Nevada, seen by Beijing and Moscow as a step toward resumed testing. US–China facility-visit talks remain informal; no New START follow-on.',
      sources: [
        'https://cnn.com/2026/10/06/politics/us-and-china-discussing-nuclear-inspections',
        'https://www.twz.com/nuclear/china-secretly-testing-nuclear-weapons-and-covering-its-tracks-u-s-alleges',
        'https://www.armscontrol.org/act/2026-10/focus/trump-xi-putin-failing-tackle-nuclear-threat',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'No change in status. French refinery strike (8 Oct, Donges, Normandy, La Mède) now confirmed by two sources, not renewed so far; 92% of French stations without difficulty on 10 Oct. French pilots/cabin crew strike notice for 17–21 Oct (Air France, Transavia, Volotea, Corsair), not direct Swiss–Irish flights. Check Brittany Ferries Rosslare–Cherbourg directly: reports conflict on which ship serves it from 12 Oct.',
    sources: [
      'https://www.boursedirect.fr/fr/actualites/categorie/economie/greve-totalenergies-les-expeditions-de-carburants-bloquees-dans-plusieurs-raffineries-selon-la-cgt-afp-6e75ad838c2fde425f414d0db743749c9badf7f6',
      'https://infos-media-nantes.fr/donges-raffinerie-totalenergies-greve-8-octobre-2026-cgt-45-postes/',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://www.travelextra.ie/france-pilots-and-cabin-crew-serve-strike-notice-for-october-17-21/',
      'https://www.aferry.com/ferry-deals/no8287/brittany-ferries-route-changes/',
    ],
  },
};
