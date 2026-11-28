// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-28: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-28',
  issuedAt: '2026-11-28T05:59:18Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band; not red. An unidentified drone briefly entered Latvian airspace near Ludza on 27 Nov; NATO Baltic Air Policing jets were scrambled (Euronews, Militarnyi; origin not stated). Romania scrambled F-18s over possible drones near Tulcea on 26 Nov (single source). No new Polish incursion; NATO has made no decision on Poland's request to down Russian missiles over Ukraine (Romania reluctant); Poland plans an eastern-border restriction zone by late December or early January. Russia struck Ukraine again overnight 26–27 Nov (155 drones; 6 killed over the day; outages in 6 oblasts); Zelensky warns a new mass strike is being prepared. Kyiv proposed a Black Sea ceasefire on 27 Nov. Peskov says Russia is not interested in widening the war. No Oreshnik use; no new ship strikes in Romanian or Bulgarian waters. IISS: Russia-linked sabotage in Europe up 16% in the year to Sept 2026.",
      sources: [
        'https://www.euronews.com/2026/11/27/nato-jets-scrambled-after-drone-briefly-enters-latvian-airspace',
        'https://militarnyi.com/en/news/poland-calls-on-nato-to-shoot-down-russian-missiles-over-ukraine-alliance-seeks-to-avoid-crossing-this-line/',
        'https://kyivindependent.com/russian-attacks-kill-6-injure-25-across-ukraine-over-past-day-power-outages-across-6-oblasts/',
        'https://aljazeera.com/news/2026/11/27/kyiv-offers-black-sea-ceasefire-as-putin-expands-russias-navy',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. No US statement, launch preparations or NOTAMs for the reported nuclear-armed satellite. Putin commissioned the Yasen-M submarine Perm on 27 Nov, said to carry Zircon missiles as standard (single source). No Grom exercise, ICBM or SLBM launch, or deployment change. North Korea: Kim's call for wider tactical-nuclear deployment is a policy direction; no new deployment or test reported.",
      sources: [
        'https://militarnyi.com/en/news/russia-has-nuclear-satellite-ready-for-launch-by-end-of-2026-german-space-command-warns/',
        'https://thebostonreport.com/2026/11/27/putin-perm-yasen-m-submarine-zircon',
        'https://www.koreatimes.co.kr/foreignaffairs/northkorea/20261126/north-koreas-kim-urges-wider-tactical-nuclear-weapons-deployment-on-facility-tour-kcna-says',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or NATO states; only local alerts in Latvia (Ludza, Balvi) and Tulcea, Romania.",
      sources: [
        'https://www.babs.admin.ch/en',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, borderline. Russia has still not counter-expelled after Denmark's attaché deadline (~27 Nov). Correction: the Cyprus expulsion of two Russian diplomats rests on anonymous Cypriot officials and Moscow denies it. Trump's 'pull back' message referred to his in-person talk with Putin in Shenzhen, not a new call; Putin is 'welcome' at the 14–15 Dec G20 but may not attend. Kushner says Russia accepted a watered-down US security-guarantee proposal in return for freezing the front (single source). Prisoner swap still not carried out. No closures, ordered departures or 'leave now' advice.",
      sources: [
        'https://tass.com/politics/2223819',
        'https://time.com/article/2026/11/26/trump-warns-putin-russia-to-pull-back-military-aggression-europe-ukraine-war/',
        'https://wisevoter.com/world/us/2026/11/27/trump-putin-welcome-g20-summit-florida',
        'https://kyivindependent.com/large-scale-prisoner-exchange-agreed-as-2nd-day-of-abu-dhabi-talks-concludes-umerov-says/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. Medvedev's 'preventive nuclear attack' article remains the week's strongest nuclear statement (he adds there is no 'immediate necessity'). The Kremlin deflected Trump and Rutte's warning, blaming Kyiv for widening the war to the Mediterranean and Baltic. Putin calls retaliation for refinery strikes 'inevitable' (conventional). Kim's 26 Nov nuclear-expansion statement; South Korea says it takes it seriously; China says its position is unchanged. Nothing new from Lavrov or Ryabkov.",
      sources: [
        'https://www.foxnews.com/world/russia-warns-preventive-nuclear-attack-medvedev-claims-ukraine-nato-crossed-line',
        'https://kyivindependent.com/trump-tells-putin-to-pull-back-all-military-aggression-across-europe/',
        'https://tass.com/politics/2224231',
        'https://www.cnbc.com/2026/11/26/north-korea-kim-nuclear-weapons-expansion.html',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, steady. New: a drone sighting stopped all flights at Cologne/Bonn airport for about 2.5 hours on the night of 27–28 Nov (no attribution). Spain's 29 Nov election faces Russian 'Matryoshka' impersonation of news outlets; Spain has activated its coordination network; no cyberattack on election systems so far. Ransomware at French hospitals (Guadeloupe, Bordeaux). No new hoax wave, GPS jamming, cable or grid incident on 26–28 Nov.",
      sources: [
        'https://www.derbund.ch/drohne-legt-flughafen-koeln-bonn-2-5-stunden-lahm-567234057494',
        'https://www.nau.ch/news/ausland/flugbetrieb-in-kolnbonn-nach-drohnensichtung-gestoppt-67208211',
        'https://www.euronews.com/2026/11/23/spains-29-november-election-shielding-the-vote-from-hybrid-threats-and-disinformation',
      ],
    },
    markets: {
      status: 'green',
      note: "Back to green (feed: VIX 23.8, gold, Brent and franc all green). Risk-on rebound in Friday's half-day session: S&P 500 +1.6%, Nasdaq +2.3%, best week since April 2025, though the S&P and Nasdaq are heading for their worst November since 2008; Europe +1.1%. Gold bounced to ~$3,670 on a weaker dollar and short covering, not a flight to safety; EUR/CHF ~0.916. The geopolitical component is in oil: Brent ~$91–96 with its first weekly gain of November on Hormuz tanker attacks and Houthi strikes on Saudi Arabia; OPEC+ meets Sunday. Bitcoin ~$59–61k.",
      sources: [
        'https://www.cnbc.com/2026/11/26/stock-market-today-live-updates.html',
        'https://irishtimes.com/business/2026/11/27/european-shares-log-strong-weekly-gains-as-markets-await-spanish-election',
        'https://kitco.com/news/article/2026-11-27/gold-climbs-above-3650-silver-surges-wall-street-rebounds-sharply-kitco-pm',
        'https://political.org/2026/11/27/oil-posts-first-weekly-gain-of-november-as-attacks-on-tankers-and-saudi-facilities-revive-supply-fears',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), leaning toward escalation. CENTCOM disabled the Palau-flagged bulk carrier Pacific Archer as it tried to run the blockade (26 Nov; 6 vessels disabled and 158 redirected so far); Iran vows to break the blockade and keep Hormuz shut while it lasts. Kuwait, 26 Nov: two Italian Rheinmetall technicians killed by debris from intercepted drones that Italy and Kuwait say were Iranian; Iran denies; no US military response. Trump: the war ends 'whenever I want'; Pickaxe Mountain would be hit if strikes resume. JMIC: 17 tankers hit since 1 Nov. Qatari and Pakistani mediation continues. Houthi attacks on Jeddah and Jazan ports after coalition strikes on Hodeidah.",
      sources: [
        'https://www.centcom.mil/MEDIA/PUBLIC-RELEASES/Article/4644273/us-forces-disable-cargo-vessel-attempting-to-violate-naval-blockade/',
        'https://www.cnn.com/2026/11/26/middleeast/italians-killed-iranian-attack-kuwait-intl',
        'https://www.business-standard.com/world-news/us-could-hit-iran-s-pickaxe-mountain-nuclear-site-if-strikes-resume-trump-126112700363_1.html',
        'https://www.aljazeera.com/news/2026/11/25/houthis-target-saudi-arabias-red-sea-ports-as-strikes-escalate',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Fuel (official, 27 Nov 09:00): 3% of stations nationally, Grand East 6% (up from 5%); private trackers still rank Territoire de Belfort worst in France (28–39%, different method), so fill up in Switzerland and again west of Besançon. Rhine at Kaub ~2.0–2.4 m. Weather: yellow severe-cold warning today for Doubs, Haut-Rhin, Territoire de Belfort; black-ice risk on the A36 early morning. No motorway blockades; farmer actions target supermarkets. Ferries: Irish Ferries cancelled the 29 Nov 16:30 Dublin–Cherbourg sailing (rebooking offered on 28 Nov or via UK landbridge), so the next Cherbourg–Dublin sailing (~30 Nov) is likely affected (unconfirmed); Hibernia Line's Cork–Boulogne ferry ceased operations on 27 Nov, removing a fallback. Brittany Ferries Cherbourg–Rosslare normal (~5 sailings a week). Donegal: cold, dry weekend, black-ice warnings, no Met Éireann warning.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://www.lejma.fr/2026/11/27/grand-froid-19-departements-en-vigilance-jaune-lalerte-setendra-a-lest-samedi/',
      'https://www.irishferries.com/ie-en/sailing-updates/ireland-france',
      'https://afloat.ie/port-news/ferry-news/item/73934-jobs-at-risk-as-hibernia-line-ferry-service-to-france-ceases-operations',
    ],
  },
};
