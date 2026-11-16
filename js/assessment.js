// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-16: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-16',
  issuedAt: '2026-11-16T05:58:08Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. Still no large Russian retaliation for Ukraine's ~1,200-drone attack; a single-source report of a Russian attack on Odesa Oblast (132 drones) on 15 Nov would be a normal night. Latest NATO-airspace event remains the 10–11 Nov Baltic drone. Nothing new on Kaliningrad, the Black Sea or sabotage; no Article 4. (Several \"15–16 November\" strike reports are from 2025.)",
      sources: [
        'https://kyivindependent.com/ukraine-war-latest-russia-launches-mass-attack-on-odesa-oblast-as-ukraine-strikes-airfield-drone-launch-site-in-russia/',
        'https://www.euronews.com/2026/11/11/a-restless-and-difficult-night-in-the-baltics-as-nato-fighter-jets-fail-to-shoot-down-dron',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, launch, Oreshnik use or unusual SSBN/bomber activity in November. Analysts expect the autumn Grom drill around now — its announcement would make this amber.",
      sources: [
        'https://russianforces.org/blog/2026/05/exercise_of_strategic_forces_h.shtml',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers; only routine preparedness guidance.",
      sources: [
        'https://www.lovguiden.dk/en/det-offentlige/den-europaeiske-union/2026-11-03-eu-guidelines-households-should-be-self-sufficient-for-at-least-72-hours',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, improving. China confirmed on 16 Nov the first Xi–Trump–Putin meeting, Thursday 19 Nov in Shenzhen — now confirmed by all three. Agendas differ: the US says nuclear arms reduction and Iran, not Ukraine; a Kremlin aide says Ukraine work continues; Peskov says its agreements \"cannot be imposed\" on others. The prisoner swap is still agreed only in principle. No expulsions or \"leave\" advisories.",
      sources: [
        'https://hongkongfp.com/2026/11/16/china-confirms-first-xi-trump-putin-summit-in-shenzhen-on-thursday/',
        'https://www.cnbc.com/2026/11/16/trump-xi-putin-ukraine-nuclear-tariffs-russia-iran-.html',
        'https://www.koreatimes.co.kr/world/20261116/china-confirms-first-xi-trump-putin-summit-on-thursday',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements or ultimatums found for 15–16 Nov. The single-source claim that Russia may lift a ban on targeting Zelensky found no second source and is dropped.",
      sources: [
        'https://aljazeera.com/news/2026/10/1/russias-putin-rules-out-ceasefire-with-ukraine-during-speech-in-moscow',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax threats, cyberattacks or cable damage for 15–16 Nov. Reports published 15 Nov of GPS jamming affecting at least 7–28 Schiphol-bound flights refer to 9 Nov (possibly from a ship off Texel; unattributed) — a reminder that jamming reaches the North Sea, not only the Baltic. EU grant for Baltic cable repairs signed 13 Nov.",
      sources: [
        'https://nltimes.nl/2026/11/15/video-least-seven-schiphol-bound-flights-disrupted-gps-interference',
        'https://www.vrt.be/vrtnws/nl/2026/11/15/gps-signaal-van-tientallen-vliegtuigen-bij-schiphol-verstoord/',
      ],
    },
    markets: {
      status: 'green',
      note: "Green. Monday Asia fell on AI/Nvidia worries (Kospi −2.8%, Nikkei −1.7%, Japan Q3 GDP shrank) ahead of Nvidia's results Tuesday — not Hormuz. Brent ~$95 (flat; traders expect a surplus), gold ~$3,880, franc steady (~0.925); no safe-haven rush.",
      sources: [
        'https://www.clickorlando.com/business/2026/11/16/stocks-decline-in-asia-as-investor-concerns-over-nvidia-fallout-extend-into-another-week/',
        'https://investing.com/news/stock-market-news/asian-chip-stocks-slide-ahead-of-nvidia-earnings-5028327',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Worsening in the Gulf. The IRGC claims six tankers hit mines on 15–16 Nov, one supertanker sank and the southern Hormuz channel is mined (Iranian claims, unverified; disputed by the US). Bahrain says it intercepted an IRGC strike on radar at a US base on 15 Nov (two live blogs). Iran rejected Germany's demand to stop enrichment (single source). Nothing new on the NPT review. Israel Speaker vote 17 Nov; North Korea quiet since 4 Nov.",
      sources: [
        'https://www.anews.com.tr/middle-east/2026/11/15/iran-says-2-oil-tankers-hit-mines-near-strait-of-hormuz-1-sinks',
        'https://www.trend.az/iran/4246772.html',
        'https://foxnews.com/live-news/iran-war-strikes-donald-trump-strait-hormuz-irgc-november-15',
        'https://www.cbsnews.com/live-updates/us-iran-war-trump-nuclear-material-no-deal/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. French fuel: Grand Est 16% (14 Nov), Bourgogne-Franche-Comté (Doubs, Belfort) 6%; no further stock release. 17 Nov strike: no aviation-wide notice or DGAC flight-cut request found (a late one is possible — check airline notices); SNCF forecasts at 17:00 today (regional trains hit hardest); no road blockades announced; recovery from 18 Nov. Ferries and Swiss–Irish flights normal. Weather: UK Met Office yellow snow warning Tue 00:00–12:00 nearby — check met.ie for Donegal.",
    sources: [
      'https://mobilitycenter.fr/greve-17-novembre-2026-transports-sncf-ratp-rer-previsions/',
      'https://www.cestlagreve.fr/greve/sncf-france-novembre-2026/',
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
    ],
  },
};
