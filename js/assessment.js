// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-04: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-04',
  issuedAt: '2026-11-04T05:57:15Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band. Pressure on NATO's eastern edge is building: on the night of 2–3 Nov Poland says it foiled a possible \"provocation\" at the Kaliningrad border near Sępopol (people with flashlights withdrew when forces arrived; Tusk expects more incidents; police on full readiness 2–8 Nov), and an unidentified drone crashed in Balvi, Latvia, near the Russian border, with NATO Baltic Air Policing jets scrambled. Russia hit Ukraine's grid overnight 2–3 Nov (289 drones, 76 missiles). No new Black Sea attack confirmed; no Article 4; no direct NATO–Russia combat.",
      sources: [
        'https://www.france24.com/en/europe/20261103-poland-prevented-attempted-provocation-russian-border-pm-tusk-says',
        'https://meduza.io/en/news/2026/11/03/prime-minister-donald-tusk-says-poland-prevented-a-possible-provocation-on-the-border-with-russia-s-kaliningrad-exclave-after-spotting-people-with-flashlights',
        'https://www.eurointegration.com.ua/eng/news/2026/11/3/7249148/',
        'https://defencematters.eu/nato-fighters-latvia-drone-alert-balvi-baltic-air-defence-november-2026/',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise or ICBM/SLBM launch since the 28 Oct Bulava. 11–13 Tu-95MS/Tu-160 bombers flew overnight 2–3 Nov carrying cruise missiles for the strike on Ukraine — conventional use, not a nuclear posture change. No unusual SSBN activity found.",
      sources: [
        'https://unn.ua/en/news/russia-has-deployed-11-strategic-bombers-when-a-strike-on-ukraine-is-possible',
        'https://russianforces.org/blog/2026/',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 3–4 Nov; Poland's police readiness order is a sabotage measure, not civil defence. Reminder: confirm any phone alert via Alertswiss or sirens (alert apps were hacked in Ukraine and Russia on 1–2 Nov).",
      sources: [
        'https://notesfrompoland.com/2026/11/02/poland-launches-operation-along-russian-border-in-response-to-reports-of-planned-sabotage/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, improving. The US will mediate trilateral Ukraine–Russia talks in Abu Dhabi on 10–11 Nov (Witkoff, Kushner; Russian delegation led by Medinsky, confirmed by the Kremlin). APEC three-way meeting still only \"possible\". No new expulsions, drawdowns or \"leave\" advisories.",
      sources: [
        'https://www.axios.com/2026/11/03/us-russia-ukraine-peace-talks-uae-trump-witkoff-kushner',
        'https://www.rte.ie/news/2026/1103/1597730-ukraine/',
        'https://www.usnews.com/news/world/articles/2026-11-02/us-to-hold-trilateral-talks-with-ukraine-russia-in-abu-dhabi-next-week-us-official',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements, ultimatums or reaction to Poland's border operation found for 3–4 Nov. Iran repeats warnings of wide retaliation (Ghalibaf: \"ready for battle\"); single-source Iranian report that its target list includes US bases in Europe.",
      sources: [
        'https://arynews.tv/iran-warns-of-retaliation-after-trump-confirms-us-strikes-on-qeshm-island',
        'https://notesfrompoland.com/2026/11/02/poland-launches-operation-along-russian-border-in-response-to-reports-of-planned-sabotage/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new infrastructure cyberattack, cable damage or GPS jamming incident found for 3–4 Nov; Baltic/Polish GNSS interference continues at its known level.",
      sources: [
        'https://www.grosswald.org/baltic-sea-security-tracker/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, mixed. Brent settled $103.60 on 3 Nov (lowest close since 7 Oct) after a $6+ intraday swing on the Qeshm strike and US–Iran talk hopes; ~$103–104 Wednesday. Overnight risk-off on the midterms: dollar fell sharply, Treasuries rallied, S&P futures −0.5%, Nasdaq −0.9%, Nikkei 3-month low. VIX ~20.8; gold ~$3,920–3,940; EUR/CHF ~0.917.",
      sources: [
        'https://www.rigzone.com/news/wire/oil_prices_swing_on_conflicting_iran_signals-03-nov-2026-185001-article/',
        'https://www.euronews.com/2026/11/04/asian-stocks-and-dollar-fall-as-democrats-gain-ground-in-us-midterms',
        'https://www.fxstreet.com/news/gold-edges-higher-as-us-midterm-election-results-trigger-sudden-usd-fall-202611040458',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating. Hormuz attacks continue: two projectiles hit the VLCC Grit off Oman on 3 Nov, the fifth confirmed attack in the strait since 1 Nov. Iran called the US reply to its Hormuz plan \"unconvincing\" (4 Nov). Signals on US strikes conflict: Trump said \"no\" when asked about striking after the midterms, other reports say he is considering a new wave; Netanyahu pressing for an extensive campaign. No Iranian retaliation for Qeshm yet. US midterms: Democrats projected to win the House and possibly the Senate. Israel says it was not involved in Qeshm.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/4/iran-says-us-reply-to-hormuz-plan-unconvincing-trump-confirms-strikes',
        'https://www.seatrade-maritime.com/security/vlcc-engine-room-struck-in-latest-hormuz-attack',
        'https://www.cnbc.com/2026/11/03/midterm-elections-2026-live-updates.html',
        'https://www.jpost.com/middle-east/iran-news/article-913632',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. 5 Nov (tomorrow): rail strike (four SNCF unions) and cross-sector strike; French air traffic controllers (FO DGAC, USAC-CGT) have filed notices and the DGAC will tell airlines how many flights to cut — Zurich/Basel/Geneva–Dublin flights cross French airspace, so expect possible cancellations. No refinery, depot or motorway blockades announced (Gilets jaunes groups name refineries; no union call). Fuel: ~13% of French stations affected on 3 Nov (single source), down from 16%; Grand Est ~24%. Ferries running; Donegal fog warning expired.",
    sources: [
      'https://mistertravel.news/2026/11/03/greve-du-5-novembre-le-ciel-francais-suspendu-aux-declarations-des-aiguilleurs/',
      'https://www.tourmag.com/Greve-5-novembre-SNCF-aerien-RATP-quelles-perturbations-dans-les-transports_a133883.html',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
    ],
  },
};
