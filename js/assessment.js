// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-17: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-17',
  issuedAt: '2026-10-17T05:10:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Top of amber. 16 Oct: Bulgaria formally asked NATO for fighter jets and anti-drone systems; Romania and Bulgaria decided "for the time being" not to invoke Article 4. Romania\'s president and foreign minister now blame Russia outright; Bulgaria\'s PM still cites no solid evidence. ~8 merchant ships hit since 5 Oct (2 dead, 25+ missing); no new strike found on 16 Oct. NATO has increased eastern-flank counter-drone capability; ambassadors discuss the Black Sea next week. No new airspace incidents since 14 Oct.',
      sources: [
        'https://knews.media/2026/10/16/bulgaria-requests-nato-fighter-jets-and-anti-drone-systems-amid-black-sea-attacks/',
        'https://www.rri.ro/en/news-and-current-affairs/today-in-the-news/nato-adapts-to-the-security-situation-in-the-black-sea-id1071881.html',
        'https://euromaidanpress.com/2026/10/16/romania-finally-holds-russia-responsible-for-the-drone-attacks-on-ships-off-its-coast-and-wants-a-joint-nato-command-for-the-black-sea/',
        'https://www.insurancejournal.com/news/international/2026/10/16/889159.htm',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. No Grom announcement, NOTAMs, or SSBN/bomber/warhead moves; NATO sees no alarming change in Russian posture. Steadfast Noon runs to 23 Oct; watch 18–22 Oct.',
      sources: [
        'https://www.news4jax.com/news/world/2026/10/08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning/',
        'https://russianforces.org/blog/2026/05/exercise_of_strategic_forces_h.shtml',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland.',
      sources: [
        'https://en.ara.cat/international/evacuation-plans-sirens-and-new-shelters-eastern-europe-prepares-for-the-russian-threat_1_5868887.html',
        'https://www.euronews.com/2026/03/12/europes-civil-shelters-are-crumbling-brussels-cant-do-much-about-it',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. EU summit conclusions (16 Oct) blame Russia for attacks on civilian ships in the Black Sea and call them unacceptable. No Russian reply yet; no expulsions, drawdowns, talks broken off or new "leave" advisories.',
      sources: [
        'https://sofiaglobe.com/2026/10/17/eu-leaders-blame-russia-for-attacks-on-civilian-shipping-in-the-black-sea/',
        'https://data.consilium.europa.eu/doc/document/ST-14-2026-INIT/en/pdf',
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, no change. Latvia has not answered Estonia on closing the Kaliningrad backup gas pipeline (decision waits for Latvia\'s new government); Grushko\'s ~15 Oct warning is still the latest Russian line. No new nuclear statements, ultimatums or readiness announcements; the 30 Sep Kaliningrad note stands.',
      sources: [
        'https://news.err.ee/1610165935/estonia-maintaining-a-gas-pipeline-used-by-russia',
        'https://tass.com/politics/2202471',
        'https://www.aljazeera.com/news/2026/9/30/russia-warns-nato-of-possible-nuclear-response-if-kaliningrad-is-cut-off',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, no change. French supermarket refrigeration attack still unattributed; ANSSI reports a second wave (12–13 Oct) on Copeland/Dixell controllers and considers the campaign likely ongoing. SentinelOne says it "looks like" deniable state sabotage (vendor view, not attribution). No grid, bank or telecom outages, cable cuts or GPS jamming.',
      sources: [
        'https://retailtimes.co.uk/french-supermarket-cyberattack-looks-like-nation-state-says-sentinelone/',
        'https://tech-insider.org/fr/frigos-deuxieme-vague-anssi-copeland-dixell-2026/',
        'https://www.cnn.com/2026/10/14/europe/france-cyberattack-supermarket-fridges-intl',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber, worsening. 16 Oct: Brent hit $110 (first time since May), settling ~$109.9 (+3.7%); VIX touched 22.3 (highest since June), ~20 at close; Nasdaq worst week since June; franc firmer (EUR/CHF ~0.927); gold flat ~$4,180. Driver: 9+ ships attacked near Hormuz since 11 Oct and US weighing MOAB strikes on Iran (Trump rules out nuclear use and strikes before 3 Nov). Not yet crisis-level across several markets.',
      sources: [
        'https://www.cnbc.com/2026/10/16/oil-price-today-iran-strait-hormuz-ukraine-russia.html',
        'https://www.cnn.com/2026/10/15/politics/us-considering-mother-of-all-bombs-iran',
        'https://www.foxnews.com/live-news/iran-war-trump-strait-hormuz-oil-prices-midterms-october-16',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, minor change. Trump told Newsmax (15 Oct) the US is in "denuclearization" talks with Russia and China; neither has confirmed, and arms-control analysts report no high-level talks. Putin–Trump–Xi APEC meeting (18–19 Nov) still unconfirmed. No testing news.',
      sources: [
        'https://www.usnews.com/news/world/articles/2026-10-15/trump-says-he-is-talking-to-russia-and-china-about-denuclearization',
        'https://www.aljazeera.com/news/2026/10/16/us-in-denuclearisation-talks-with-russia-and-china-trump',
        'https://www.armscontrol.org/act/2026-10/focus/trump-xi-putin-failing-tackle-nuclear-threat',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber, no change. French airline crew strike not re-filed; no disruption on 17 Oct. French fuel: 3% of stations fully dry and SP98 short at ~11% (15 Oct); Grand Est was worst at 19% short on 15 Oct, so fill up in Switzerland. TotalEnergies strike status unresolved. Brittany Ferries says Rosslare–Cherbourg continues with other ships after October; Irish Ferries and Swiss–Irish flights normal.',
    sources: [
      'https://www.essencepascher.fr/carte-penurie-carburant',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://www.deplacementspros.com/transport/l-intersyndicale-des-pnc-suspendent-leur-preavis-de-greve-nationale',
      'https://www.aferry.com/ferry-deals/no8287/brittany-ferries-route-changes/',
    ],
  },
};
