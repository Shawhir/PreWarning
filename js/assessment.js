// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-23: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-23',
  issuedAt: '2026-11-23T05:58:14Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band; not red (no sustained NATO–Russia combat, no Article 4 or 5). Correction: Polish investigators now say three Kh-101 cruise missiles fell in Poland on 20 Nov (earlier: two plus a drone); Swedish Gripens on Eastern Sentry could not engage. The North Atlantic Council meets today (23 Nov); Poland's deputy defence minister says it will NOT invoke Article 4 and will seek stronger air defence. No Kremlin statement on the missiles. New: drones hit the sanctioned, Russian MoD-linked cargo ship Sparta II in the Gulf of Finland on 21 Nov (Finland suspects Ukraine); Finland suspects a Russian helicopter briefly entered its airspace near Loviisa during the response. Explosions at Baltiysk (Kaliningrad) unconfirmed; Lithuania denies Russian claims of a threat from its territory. Russia hit Ukraine with 186 drones overnight into 22 Nov. No Oreshnik use; no new Black Sea ship strikes since 17 Nov.",
      sources: [
        'https://militarnyi.com/en/news/three-kh-101-missiles-enter-poland-on-november-20-country-calls-for-stronger-nato-air-defenses/',
        'https://english.aawsat.com/world/5344085-nato-chief-pledges-defend-poland-after-russian-missile-incursion',
        'https://www.themoscowtimes.com/2026/11/22/russian-cargo-ship-still-on-fire-off-finland-after-attack-a94343',
        'https://www.ukrinform.net/rubric-emergencies/4187228-finland-suspects-russian-helicopter-of-violating-its-airspace.html',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. No Grom exercise, strategic launch, Oreshnik use or deployment change. IISS imagery analysis suggests Sarmat may be entering service at Uzhur (long-term trend, not a posture change). Russian warnings about Poland or Lithuania hosting nuclear weapons: nothing new since 18–20 Nov; Lithuania's constitutional vote is in January.",
      sources: [
        'https://www.iiss.org/online-analysis/missile-dialogue-initiative/2026/11/sarmat-better-late-than-never-for-moscow/',
        'https://www.oreanda-news.com/en/gosudarstvo/russia-has-threatened-to-retaliate-against-the-deployment-of-nuclear-weapons-in-/article1605473/',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or NATO states. Finland's traffic limits in the eastern Gulf of Finland are local and operational; Lugano airspace restrictions 30 Nov–4 Dec are for the OSCE ministerial.",
      sources: [
        'https://www.admin.ch/en/newnsb/p7SxhCl0b0qn',
        'https://www.babs.admin.ch/en',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, borderline. Russia has not yet answered Denmark's expulsion of its defence attaché (deadline ~27 Nov); Denmark is pushing an EU suspension of tourist visas for Russians but says it will not cut relations. No expulsions over the Poland missiles. Ryabkov (20 Nov) rejected NATO-style guarantees for Ukraine but says a UK/German/French visit to Moscow is being worked on. Prisoner swap still pending. No new ordered departures or 'leave now' advice; Swiss FDFA advice for Poland unchanged.",
      sources: [
        'https://www.euronews.com/2026/11/20/two-danes-suspected-of-russian-backed-plot-to-kill-ukrainian-rapper',
        'https://www.themoscowtimes.com/2026/11/20/russia-pushes-back-against-us-idea-of-nato-style-security-guarantees-for-ukraine-a94326',
        'https://www.vaticannews.va/en/world/news/2026-11/nato-rutte-pledges-solidarity-with-poland-after-missile-incursio.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. Two single-source items, possibly recycled: Forbes (22 Nov) quotes Putin that 'the point of no return can come very quickly' (echoing his 1 Oct Valdai speech), and Yeni Şafak reports Medvedev restating Russia's right to use nuclear weapons (date unclear). No Kremlin statement on Poland; no ultimatums. Trump on the Kharg tanker convoy: blockade runners 'will all be at the bottom of the sea'; further Iran strikes likely only after the new year.",
      sources: [
        'https://www.forbes.com/sites/kevinholdenplatt/2026/11/22/putin-conjures-nuclear-strikes-on-eu-drones-against-its-diplomats/',
        'https://en.yenisafak.com/world/medvedev-russia-has-right-to-use-nuclear-weapons-3723027',
        'https://www.foxnews.com/world/trump-dares-iran-breach-us-port-blockade-tehran-reportedly-readies-14-oil-tankers',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, easing slightly. No new large cyberattack, cable or pipeline damage, or grid failure 21–23 Nov. Drone alerts: Sigonella (20 Nov, unconfirmed), Kaliningrad Khrabrovo airport (21 Nov, single source); Genoa's 19 Nov closure may have been a light aircraft. 'Global blackout' rumours debunked again on 22 Nov. The European Commission confirmed on 19 Nov an AI-assisted cyberattack first detected in October.",
      sources: [
        'https://www.itamilradar.com/2026/11/21/drone-alert-at-sigonella-a-security-scare-unfolds-amid-renewed-military-activity-in-the-central-mediterranean/',
        'https://www.dronewatch.eu/genoa-airport-drone-disruption-may-have-been-caused-by-light-aircraft-osint-researcher-suggests/',
        'https://www.theportugalnews.com/news/2026-11-22/rumours-of-worldwide-blackout-spread-online/1117561',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX red at Friday's 35.9, gold amber), not geopolitical. US futures rebounded strongly on Sunday night (S&P +2%, Nasdaq +2.7%); Asia still weak on Monday (KOSPI −2.8% at the open, Hang Seng −1.5%; Japan closed). Gold bounced to ~$3,606 and Bitcoin to ~$61k; Brent ~$89.6–92.6; EUR/CHF 0.923 (SNB). European gas ~€89.5/MWh with storage at 70% versus 82% a year ago. Drivers remain AI/Nvidia (CEO resigned 12 Nov; reported SEC probe) and Fed expectations; no market reaction to Poland.",
      sources: [
        'https://www.cnbc.com/2026/11/22/stock-market-today-live-updates.html',
        'https://fortune.com/2026/11/22/stock-market-today-dow-futures-sp500-nasdaq-correction-ai-bust/',
        'https://www.snb.ch/en/the-snb/mandates-goals/statistics/statistics-pub/current_interest_exchange_rates',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), leaning toward escalation. 21 Nov: IRGC missiles and drones at US bases in Bahrain (intercepted; shrapnel fire at an industrial site in Sitra) after a US strike on Hengam Island. 14–20 loaded tankers staged at Kharg to run the US blockade; no confirmed blockade-run yet; UKMTO reported an incident 'with military forces' near Chabahar on 22 Nov. Iran calls the blockade 'an act of war'. Reports say US strikes are on hold for at least a week; Qatar circulating a framework text. NPT: a new bill for automatic exit if nuclear sites are attacked; no vote. No nuclear tests.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/21/bahrain-says-iranian-attack-causes-fire-at-industrial-facility',
        'https://www.euronews.com/2026/11/22/tanker-incident-involving-military-forces-reported-in-strait-of-hormuz',
        'https://www.iranintl.com/en/202611231814',
        'https://wanaen.com/iranian-parliament-registers-automatic-npt-exit-bill/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Fuel improving but still tight on the route: on 21 Nov Haut-Rhin 25% and Territoire de Belfort 22% of stations short (correction: Belfort is about as tight as Haut-Rhin); no verified Doubs figure. Rhine at Kaub ~1.47 m on 20 Nov (single source). Weather: FOEN flood outlook for the western Jura from 22 Nov, level-3 rain warning to 23 Nov 18:00 and level-2 flood warning for the Doubs river to 24 Nov; no flooding or road closures reported yet in the Bernese Jura. Irish Ferries Cherbourg–Dublin delayed 7–8 h on 21–22 Nov, with a 'no sailing' entry around 23–25 Nov (check). No Brittany Ferries disruption found. No Donegal warning.",
    sources: [
      'https://leprixducarburant.com/penurie-carburant/',
      'https://www.hydrodaten.admin.ch/de/aktuelle-lage',
      'https://www.irishferries.com/ie-en/sailing-updates/ireland-france/',
      'https://www.irishtimes.com/ireland/2026/11/21/flooding-possible-as-rain-warning-issued-for-southern-counties/',
    ],
  },
};
