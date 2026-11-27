// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-27: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-27',
  issuedAt: '2026-11-27T05:59:48Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band; not red. No new incursions into Poland, Romania, Moldova, the Baltics or Finland on 25–27 Nov. NATO's forward AWACS for Poland is approved and described as deployed. Poland asked NATO on 25–26 Nov to shoot down Russian missiles over Ukraine heading for NATO territory; allies lack consensus; Poland plans a no-fly zone along its eastern border around the new year. Overnight 25–26 Nov Russia launched ballistic missiles (Iskander, Zircon) and 113 drones, its first large strike since Putin vowed 'inevitable' retaliation (at least 3 killed); two foreign grain ships were attacked near Odesa (not in NATO waters). No Russian response yet to the Merkury sinking or the Savasleyka strike. Russia restricted flights around Kaliningrad's Khrabrovo airport to 28 Nov, citing NATO drills in Lithuania. Trump, after meeting Rutte, told Putin to 'pull back all military aggression' across Europe. IISS: Russian-linked sabotage in Europe roughly doubled in the year to Sept 2026. No Oreshnik use.",
      sources: [
        'https://www.euronews.com/2026/11/26/russia-launches-ballistic-missile-and-drone-barrage-on-ukraine-killing-at-least-three',
        'https://www.usnews.com/news/world/articles/2026-11-26/ukraine-says-russia-hits-two-grain-ships-near-odesa-ports',
        'https://www.bloomberg.com/news/articles/2026-11-25/poland-asks-nato-to-shoot-down-russian-missiles-over-ukraine',
        'https://kyivindependent.com/trump-tells-putin-to-pull-back-all-military-aggression-across-europe/',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. Nuclear-armed satellite: German Space Command assesses it ready for launch as early as December; no US statement, launch preparations or NOTAMs found; the Kremlin says space 'must be free of any weapon'. A routine 10-hour Tu-160 patrol over the Sea of Japan (24 Nov). Last strategic launch: Bulava, 28 Oct. No Grom exercise or deployment change.",
      sources: [
        'https://militarnyi.com/en/news/russia-has-nuclear-satellite-ready-for-launch-by-end-of-2026-german-space-command-warns/',
        'https://www.themoscowtimes.com/2026/11/23/kremlin-dismisses-reports-about-alleged-nuclear-armed-satellite-launch-a94349',
        'https://rferl.org/a/russia-sputnik-s-space-nuclear-weapons-reports-starfish-prime-emp/33905092.html',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or NATO states.",
      sources: [
        'https://www.babs.admin.ch/en/shelters-for-the-population',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, borderline. The Danish attaché's deadline passes today; Russia has not yet counter-expelled (in 2022 it took about four weeks). Cyprus expelled two Russian diplomats for suspected spying (reported 22–23 Nov). Trump and Rutte jointly warned Russia not to expand the war; Trump says Putin wants a deal. No invitees or dates for Moscow talks. Prisoner swap: first stage expected late November or early December; Russia has agreed part of Ukraine's list. No closures, ordered departures or 'leave now' advice.",
      sources: [
        'https://cphpost.dk/2026-11-21/news/round-up/denmark-expels-russian-diplomat-over-alleged-assassination-plot-targeting-ukrainian-rapper/',
        'https://www.themoscowtimes.com/2026/11/23/cyprus-expels-russian-diplomats-suspected-of-espionage-reports-say-a94348',
        'https://time.com/article/2026/11/26/trump-warns-putin-russia-to-pull-back-military-aggression-europe-ukraine-war/',
        'https://nikvesti.com/en/news/politics/326995-russia-has-already-agreed-to-portion-of-the-ukrainian-prisoners-of-war',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. Russia's OSCE envoy Polyansky (26 Nov) said NATO involvement in attacks on Russian vessels and drills he called preparation to seize Kaliningrad are 'inching closer' to nuclear war (TASS, Newsweek). Kim Jong Un (KCNA, 26 Nov) ordered fissile-material output 'systematically expanded' and wider tactical-nuclear deployment, and said denying North Korea's nuclear status is 'a declaration of war'. No Kremlin comment on Medvedev's article (a circulating Peskov quote is from August 2025). Nothing new from Putin, Lavrov or Chinese officials.",
      sources: [
        'https://tass.com/politics/2225491',
        'https://www.newsweek.com/putin-russia-nuclear-war-inching-closer-nato-12772118',
        'https://www.aljazeera.com/news/2026/11/26/kim-jong-un-says-north-korea-should-widen-deployment-of-tactical-nukes',
        'https://www.france24.com/en/live-news/20261126-north-korea-s-kim-calls-for-more-ways-to-fire-nuclear-weapons',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, steady. Zelensky confirmed Ukraine struck the Sparta II in the Gulf of Finland (21 Nov). 'Exceptional' GPS jamming over Stockholm, Helsinki and Tallinn around 21–23 Nov (Swedish Transport Agency; same data via Ukrainian outlets). The 23 Nov hoax bomb-threat wave hit 880+ German schools and every Danish police district. Spain's 29 Nov election targeted by Russian 'Matryoshka' disinformation. No new cable, grid or airport drone closures 25–27 Nov.",
      sources: [
        'https://euromaidanpress.com/2026/11/24/the-burning-sparta-ii-drifted-into-finnish-waters-off-loviisa-before-russia-towed-it-away-and-kyiv-now-says-it-struck-it/',
        'https://www.eurointegration.com.ua/eng/news/2026/11/26/7250879/',
        'https://www.jpost.com/international/article-915832',
        'https://maldita.es/investigaciones/20261113/russian-operation-matryoshka-campaign-interfere-elections-spain/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX 26.8 amber; gold, Brent and franc green), possibly easing. Correction to yesterday: gold is not firming; it is near 14-month lows on Fed-hike bets (~$3,600 after a Thanksgiving bounce from ~$3,480). The franc's strength (EUR/CHF briefly below 0.91, back to 0.915) reflects equity risk-off and French fiscal worries, not geopolitics. Europe rebounded 1.8% on 26 Nov on reports US tariffs on the EU will be capped. Brent ~$92 on Houthi attacks on Saudi Arabia ahead of Sunday's OPEC+ meeting. TTF ~€87/MWh.",
      sources: [
        'https://investinglive.com/technical-analysis/chart-of-the-day-swiss-franc-emerges-as-a-quiet-winner-in-the-market-turmoil/',
        'https://www.riotimesonline.com/gold-silver-precious-metals-thursday-november-26-2026/',
        'https://ca.investing.com/news/economy-news/european-stocks-rally-as-tech-bank-stocks-rebound-tariff-fears-ease-4982398',
        'https://tradingeconomics.com/commodity/eu-natural-gas',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), leaning toward escalation. Two Italian technicians were killed in Kuwait on 26 Nov by shrapnel from intercepted, reportedly Iranian-made drones; Iran denies involvement; von der Leyen calls for more pressure on Iran. UKMTO: tanker hit by a projectile east of Khasab on 25 Nov (one crew member reportedly badly hurt). No direct US–Iran exchange of fire since 17 Nov; Arab officials fear a return to full-scale war; Qatari and Pakistani mediation continues. Houthi missiles and drones at Riyadh, Jeddah and Jazan intercepted, minor damage at Jazan port; coalition strikes on Hodeidah (Houthis say 10 killed). Kharg convoy not sailed. NPT exit bill: no vote.",
      sources: [
        'https://www.arabnews.com/middle-east/two-italian-workers-killed-in-iranian-drone-attack-on-kuwait-3014135',
        'https://boereport.com/2026/11/26/tanker-struck-by-projectile-while-transiting-strait-of-hormuz-ukmto-says/',
        'https://thenationalnews.com/news/mena/2026/11/26/arab-nations-fear-renewed-iran-war-as-officials-warn-of-far-reaching-impact',
        'https://www.thenationalnews.com/news/gulf/2026/11/26/saudi-arabia-intercepts-wave-of-retaliatory-houthi-attacks/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, improving. Correction: French fuel shortages have eased substantially; official figures for 26 Nov 09:00 show 4% of stations in difficulty in Bourgogne-Franche-Comté (Territoire de Belfort, Doubs) and 5% in Grand Est (Haut-Rhin); yesterday's '33–39% in Belfort' figure was out of date or belonged to Bas-Rhin. Rhine at Kaub ~2.4 m, easing toward ~2.0 m. Weather: yellow snow/ice warnings this morning (27 Nov, 03:00–10:00) for Doubs, Territoire de Belfort and Haut-Rhin; first lowland snow in Switzerland; no A16 or A36 closures reported. Irish Ferries: Dublin–Cherbourg on 27 and 28 Nov listed on time, but the 29 Nov 16:30 Dublin departure is cancelled for operational reasons (the return leg may be affected). Brittany Ferries normal. No Donegal warning.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://www.cnews.fr/france/2026-11-26/neige-verglas-voici-les-8-departements-places-en-vigilance-jaune-ce-vendredi',
      'https://www.hochwasser.rlp.de/flussgebiet/mittelrhein/kaub',
      'https://www.irishferries.com/uk-en/sailing-updates/ireland-france/',
    ],
  },
};
