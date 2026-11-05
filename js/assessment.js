// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-05: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-05',
  issuedAt: '2026-11-05T05:57:20Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no escalation since 3 Nov. No new Kaliningrad border incident or NATO-airspace incursion found for 4–5 Nov (Poland's police operation runs to 8 Nov; Tusk expects more incidents). Russia hit Ukraine's grid again overnight 3–4 Nov (310 drones; Kyiv power and water outages). Black Sea: only an unconfirmed Russian claim of a strike on a cargo vessel off Odesa. No Article 4.",
      sources: [
        'https://thedefensepost.com/2026/11/04/russia-310-drones-ukraine/',
        'https://www.kyivpost.com/post/89068',
        'https://www.france24.com/en/europe/20261103-poland-prevented-attempted-provocation-russian-border-pm-tusk-says',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, ICBM/SLBM launch or unusual bomber/SSBN activity found for 4–5 Nov; recent bomber flights were for conventional strikes on Ukraine. Putin (Unity Day, 4 Nov): \"Russia has never threatened and does not threaten anyone.\"",
      sources: [
        'https://russianforces.org/blog/',
        'https://ua.news/en/war-vs-rf/rosiia-pidniala-strategichni-bombarduvalniki-tu-160-mozhlivi-puski-krilatikh-raket',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 4–5 Nov.",
      sources: [
        'https://www.cbsnews.com/live-updates/iran-war-us-trump-midterms-strait-of-hormuz/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. Abu Dhabi Ukraine–Russia talks still on for 10–11 Nov. China says it is \"maintaining communication\" on a Xi–Trump–Putin APEC meeting (unconfirmed). US–Iran mediation via Qatar and Pakistan is \"very intensive\" (Iran) but the sides are \"still far apart\"; Reuters reports negotiators aiming for a deal within 36 hours. No new expulsions; US ordered departure from Saudi Arabia (since 23 Oct) unchanged.",
      sources: [
        'https://www.pravda.com.ua/eng/news/2026/11/04/8061220/',
        'https://aa.com.tr/en/world/china-discussing-possible-meeting-between-xi-putin-trump-says-beijing/4111190',
        'https://www.aljazeera.com/news/liveblog/2026/11/5/iran-war-live-trump-admits-war-caused-election-loss-but-had-to-do-it',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums found; no Russian response to Poland's border operation. Trump (4 Nov) said the US may need a \"heavy hit\" on Iran but has \"no immediate plan\" to strike; Iran says the midterms show \"Americans rejected war\".",
      sources: [
        'https://gulfnews.com/world/mena/middle-east-conflict-trump-warns-of-heavy-hit-as-iran-says-americans-voted-no-to-war-1.500735100',
        'https://www.axios.com/2026/11/05/trump-iran-war-midterm-defeat-bad-options',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new state-linked attack on European infrastructure, cable damage or GPS jamming surge. Crédit Mutuel Arkéa (France) hit by a cyberattack on 4 Nov (app down, ~€100M diverted to crypto) — criminal fraud, no state attribution. GNSS interference from the Baltic to the Black Sea at known levels.",
      sources: [
        'https://www.boursorama.com/actualite-economique/actualites/credit-mutuel-arkea-victime-d-une-cyberattaque-ayant-permis-des-operations-frauduleuses-7a25b65f08450c07e9ea616dca1bfc71',
        'https://militarnyi.com/en/news/from-the-baltic-to-the-black-sea-large-scale-gps-jamming-detected-along-nato-borders/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, but the move is de-escalation, not stress. Brent settled $94.62 on 4 Nov (−8.7%; ~−20% over five days) and ~$93.9 Thursday, as Democrats' wins in both houses were read as making an Iran deal more likely. Dow +3%, S&P +1.6%, VIX ~16.5–17 (down ~20%). Gold rose ~3% to ~$4,050 on a weaker dollar; franc slightly firmer (EUR/CHF ~0.917). The signals feed flags amber on the size of the oil move.",
      sources: [
        'https://www.cnbc.com/2026/11/04/oil-price-iran-war-us-election-strait-hormuz.html',
        'https://www.thenationalnews.com/business/energy/2026/11/04/brent-oil-slides-to-94-on-iran-uncertainty-after-us-midterms/',
        'https://www.cnn.com/2026/11/04/investing/us-markets-midterm-elections',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Mixed: political pressure to end the Iran war has risen, but incidents continue. Democrats won the House and the Senate; Vance said \"the reason we lost is the war\"; Schumer says the war \"must end\". Talks are intensive (a deal reportedly sought within 36 hours). The IRGC claims tankers and a tug caught fire on \"unauthorised\" Hormuz routes and ships were seized (4–5 Nov, Iranian claims carried by Reuters and others). North Korea fired missiles from Sondok on 4 Nov (fourth launch in a month). Israel: Knesset sworn in 10 Nov; no majority.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/4/democrats-win-the-us-senate-what-does-this-mean',
        'https://www.timesofisrael.com/liveblog_entry/irgc-2-tankers-tugboat-attempting-to-use-unauthorized-hormuz-routes-catch-fire/',
        'https://usnews.com/news/world/articles/2026-11-04/north-korea-test-fires-new-air-defence-missile-system-kcna-reports',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Strike day: the DGAC reportedly asked airlines for no flight cuts (single source; the main controllers' union is not striking); no Swiss–Irish cancellations found. SNCF: TGV slightly disturbed, regional trains much worse. Rallies in Belfort, Besançon and Mulhouse today; a planned A35 blockade at Strasbourg (single source, off route); nothing on the A36; no refinery or depot blockades. Fuel: ~12% of French stations affected (4 Nov, official), easing. Ferries running; no Donegal warning.",
    sources: [
      'https://www.tourmag.com/Greve-5-novembre-SNCF-aerien-RATP-quelles-perturbations-dans-les-transports_a133883.html',
      'https://www.franceinfo.fr/economie/greve/greve-du-5-novembre-la-sncf-prevoit-quelques-perturbations-jeudi-la-ratp-table-sur-un-trafic-normal-en-ile-de-france_8266229.html',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
    ],
  },
};
