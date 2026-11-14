// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-14: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-14',
  issuedAt: '2026-11-14T05:56:55Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. New: overnight 12–13 Nov Ukraine launched nearly 1,200 drones at Russia (Russia says 1,198 downed), one of the largest attacks of the war; 4 killed at Volgograd's refinery district — watch for a large Russian retaliatory strike in the next days. No new NATO-airspace incursions since 10–11 Nov, no Kaliningrad incident, no Black Sea attack, no Article 4.",
      sources: [
        'https://www.cp24.com/news/world/2026/11/13/ukraine-launches-nearly-1200-drones-at-russia-us-led-talks-consider-wider-european-security/',
        'https://themoscowtimes.com/2026/11/13/ukrainian-drone-attack-kills-4-workers-sparks-fire-at-volgograd-oil-refinery-a94250',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, launch or unusual SSBN/bomber activity found; latest strategic events were May (exercise) and August (mobile ICBM test) plus the 28 Oct Bulava. Watch: a Grom-type autumn exercise, or nuclear-capable systems used in a large retaliation, would make this amber.",
      sources: [
        'https://www.themoscowtimes.com/2026/08/28/russian-military-conducts-mobile-icbm-test-a93601/pdf',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers in NATO states, Switzerland or Ireland.",
      sources: [
        'https://www.euronews.com/2026/11/11/a-restless-and-difficult-night-in-the-baltics-as-nato-fighter-jets-fail-to-shoot-down-dron',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. No new events since the 12 Nov Putin meeting. The large prisoner exchange agreed in Abu Dhabi has not happened yet (numbers unsettled; possibly within two to three weeks). No date for the next round. No expulsions, drawdowns or \"leave\" advisories.",
      sources: [
        'https://www.wusf.org/2026-11-11/russia-and-ukraine-agree-to-a-large-exchange-of-prisoners-of-war-officials-say',
        'https://en.interfax.com.ua/news/general/1234775.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements or ultimatums found for 13–14 Nov; latest US–Iran rhetoric is Hegseth (10 Nov) ready to strike again.",
      sources: [
        'https://www.iranintl.com/en/202611102727',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax threats, cyberattacks, cable damage or GPS surge found for 13–14 Nov.",
      sources: [
        'https://militarnyi.com/en/news/from-the-baltic-to-the-black-sea-large-scale-gps-jamming-detected-along-nato-borders/',
      ],
    },
    markets: {
      status: 'green',
      note: "Green. Friday 13 Nov: S&P −0.4% but +2.5% on the week (first winning week since early October); Nasdaq −0.9% (chips, Nvidia CEO exit). Brent ~$96, second weekly loss (~−2.4%) as Trump signals keeping the blockade without a deal and the IEA sees a larger surplus. VIX 19.3; gold ~$3,890; EUR/CHF 0.927 (franc weaker). US wholesale inflation 6.5% y/y (single source).",
      sources: [
        'https://www.cnbc.com/2026/11/13/oil-prices-set-for-second-weekly-decline-as-trump-to-stay-with-iran-blockade.html',
        'https://www.thenationalnews.com/business/energy/2026/11/13/oil-on-track-to-post-second-weekly-decline-as-trump-eases-fears-of-renewed-war-with-iran/',
        'https://www.bostonglobe.com/2026/11/13/business/stocks-fall-wall-street-notches-winning-week-after-several-turbulent-days/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "No change. Nothing new on Iran's NPT review since 12 Nov; Qatar-mediated contacts continue without breakthrough; Iran claims four tankers hit in Hormuz on 12 Nov (Iranian report). APEC (18–19 Nov): Trump–Xi expected, three-way with Putin unconfirmed; Putin plans to attend. Israel Speaker vote 17 Nov. North Korea quiet since 4 Nov.",
      sources: [
        'https://www.newstribune.com/news/2026/nov/09/trump-thinks-he-will-meet-xi-and-putin-at-china-apec-summit/',
        'https://www.jns.org/news/israel-news/knesset-speaker-vote-scheduled-for-nov-17',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, easing slightly. Official: ~10% of French stations in difficulty on 13 Nov (12% on 12 Nov); Grand Est 18–19%; north-east depots still short with the Rhine low; summer-diesel waiver ends 15 Nov. 17 Nov strike (six public-sector unions) plus CGT-Transports week 16–20 Nov; no aviation-wide notice; controllers must declare by noon 15 Nov, any DGAC flight cuts ~15–16 Nov. Possible yellow wind warning for Donegal Sat 14 Nov 16:00–21:00 (single source — check met.ie). Ferries and flights normal.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://mistertravel.news/2026/11/12/greve-du-17-novembre-ce-que-lon-sait-pour-les-trains-les-avions-et-les-transports/',
      'https://www.offalyexpress.ie/news/national-news/1950091/live-seven-counties-hit-with-status-yellow-weather-warnings-as-heavy-rain-and-wind-expected.html',
    ],
  },
};
