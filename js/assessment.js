// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-13: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-13',
  issuedAt: '2026-10-13T05:05:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'No change. Trump announced a Russia–Ukraine "energy ceasefire" on 11 Oct, but Kyiv learned of it from his post, the Kremlin would neither confirm nor deny it, and Russian strikes on Ukrainian energy sites continued, so none is in force. No new Kaliningrad, NATO airspace or Black Sea incidents found for 12–13 Oct; nothing new in Asia or India–Pakistan.',
      sources: [
        'https://www.cnbc.com/2026/10/12/russia-ukraine-energy-ceasefire-trump.html',
        'https://kyivindependent.com/kremlin-has-nothing-to-say-on-trumps-energy-ceasefire-rejects-zelenskys-truce-proposal-2/',
        'https://www.aljazeera.com/news/2026/10/12/ukraines-zelenskyy-accuses-russia-of-violating-trumps-energy-ceasefire',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. NATO Steadfast Noon runs from 13 Oct for ~10 days (Italy, up to 17 nations); NATO reports no alarming changes in Russian posture. No Grom announcement, Russian counter-drill, Barents NOTAM or SSBN/bomber/warhead moves found. Earlier Oreshnik launch-notice reports turned out to be from 2025. Watch 18–22 Oct, when Grom fell last year.',
      sources: [
        'https://www.washingtonpost.com/world/2026/10/08/nato-nuclear-exercise-steadfast-russia-kaliningrad/995a9676-c32f-11f1-8170-681419af1cc9_story.html',
        'https://www.news4jax.com/news/world/2026/10/08/nato-presses-ahead-with-steadfast-noon-nuclear-drill-after-russias-nuclear-warning/',
        'https://militarnyi.com/en/news/russia-closes-airspace-over-kapustin-yar-launch-site-for-oreshnik-missiles/',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland. Eastern European shelter and evacuation drills reported in late September are preparedness, not activation.',
      sources: [
        'https://en.ara.cat/international/evacuation-plans-sirens-and-new-shelters-eastern-europe-prepares-for-the-russian-threat_1_5868887.html',
        'https://thedefensepost.com/2026/09/04/finland-wartime-civil-defense-drill/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. No new expulsions, closures, suspended talks or "leave" advisories; Irish DFA pages unchanged per the signals feed. An undated report says Russia confirmed its hotlines with the US and NATO remain open.',
      sources: [
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
        'https://stratnewsglobal.com/russia/russia-confirms-hotlines-with-us-nato-remain-open-as-nuclear-risks-grow/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Top of amber, no change. The 30 Sep Kaliningrad nuclear note and Putin\'s 1 Oct Valdai remarks stand; no new deadlines or readiness announcements, and no Russian reaction to Steadfast Noon yet. Watch 13–14 Oct for one.',
      sources: [
        'https://www.aljazeera.com/news/2026/9/30/russia-warns-nato-of-possible-nuclear-response-if-kaliningrad-is-cut-off',
        'https://www.cnn.com/2026/10/01/europe/putin-kaliningrad-warning-ukraine-latam-intl',
        'https://www.washingtonpost.com/world/2026/10/08/nato-nuclear-exercise-steadfast-russia-kaliningrad/995a9676-c32f-11f1-8170-681419af1cc9_story.html',
      ],
    },
    infrastructure: {
      status: 'green',
      note: 'No change. No cable cuts, national cyber outages or new GPS/satellite interference in Europe reported for 11–13 Oct.',
      sources: [
        'https://windward.ai/knowledge-base/q2-2026-undersea-cables-risk-report/',
        'https://konbriefing.com/en-topics/cyber-attacks.html',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Energy stress slightly worse. Brent settled $106.65 on 12 Oct (+1.8%, highest since 15 Sep) after Houthi attacks on Saudi Arabia and three tanker incidents near Oman and in Hormuz; Trump says the US may join strikes on the Houthis. Elsewhere calm: VIX ~15, gold ~$4,191, S&P flat, EUR/CHF 0.931.',
      sources: [
        'https://www.nationthailand.com/news/world/40072180',
        'https://investinglive.com/news/investinglive-americas-fx-news-wrap-12-oct-usd-climbs-eurusd-hits-a-2026-low-as-oil-rises-and-stocks-finish-mixed/',
        'https://time.com/article/2026/10/10/trump-says-u-s-may-join-saudi-strikes-on-houthis-after-riyadh-airport-attacks/',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, no change. No new testing or arms-control news since the 6–8 Oct US accusations of Chinese testing. North Korea marked its 10 Oct party anniversary with a concert, no parade and no Kim speech.',
      sources: [
        'https://www.ajupress.com/view/20261011121105499',
        'https://news.sbs.co.kr/english/article.do?news_id=N1008791621',
        'https://www.armscontrol.org/act/2026-10/focus/trump-xi-putin-failing-tackle-nuclear-threat',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'No change in status, one risk eased. French cabin crew and pilot unions suspended the 17–21 Oct strike notice after a government pension-decree pledge (could be re-filed if the decree slips). Rosslare–Cherbourg now on Barfleur from 12 Oct with no spare ship; Irish Ferries Dublin–Cherbourg normal. Zurich/Geneva–Dublin flights normal (Aer Lingus ~CHF 55). No new French fuel disruption since 8 Oct.',
    sources: [
      'https://www.deplacementspros.com/transport/l-intersyndicale-des-pnc-suspendent-leur-preavis-de-greve-nationale',
      'https://www.lechotouristique.com/transport/mobilisation-du-17-octobre-les-transports-seront-ils-perturbes-pour-les-vacances-de-la-toussaint',
      'https://www.shippax.com/en/news/brittany-ferries-move-barfleur-to-rosslare-cherbourg.aspx',
      'https://www.irishferries.com/uk-en/sailing-updates/ireland-france/',
    ],
  },
};
