// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-26: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-26',
  issuedAt: '2026-11-26T06:00:15Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band; not red. Poland's defence ministry believes the jet drone that entered its airspace on 23–24 Nov (about 20 km, 9 minutes) was sent deliberately; NATO is sending an AWACS; no Article 4. No new incursions into Romania, Moldova, the Baltics or Finland on 24–26 Nov. No Russian retaliation yet for the Merkury sinking (Russia's ambassador to Libya: 'weighing responses'). Ukraine struck Savasleyka air base on 24–25 Nov, damaging MiG-31 Kinzhal carriers and Su-34s (Kyiv's claim); Putin calls retaliation for refinery strikes 'inevitable'. Russian strikes killed 7 in Ukraine on 25 Nov and hit a Naftogaz gas site; Russia claims it hit an unidentified vessel in the Black Sea overnight into 26 Nov (single source). No Oreshnik use.",
      sources: [
        'https://www.bloomberg.com/news/articles/2026-11-24/poland-says-russian-drone-briefly-entered-its-airspace',
        'https://notesfrompoland.com/2026/11/24/nato-to-send-surveillance-aircraft-to-poland-after-russian-missile-strikes/',
        'https://www.rte.ie/news/ukraine/2026/1125/1600650-ukraine-russia/',
        'https://www.euronews.com/2026/11/25/russian-strikes-kill-seven-in-ukraine-as-kyiv-hits-three-refineries',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. Nuclear-armed satellite: Bloomberg (23 Nov) reports allies warning Russia may launch as soon as next month; no US statement beyond the DIA's October assessment that Russia is developing one; no launch preparations or NOTAMs found. Last strategic launch: Bulava, 28 Oct. No Grom exercise, deployment change or unusual bomber or submarine movements.",
      sources: [
        'https://www.bloomberg.com/news/articles/2026-11-23/allies-warn-russia-may-launch-nuclear-space-weapon-next-month',
        'https://www.themoscowtimes.com/2026/11/23/kremlin-dismisses-reports-about-alleged-nuclear-armed-satellite-launch-a94349',
        'https://russianforces.org/blog/2026/10/bulava_slbm_launched_westward_.shtml',
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
      note: "Green, borderline. Russia has still not answered Denmark's attaché expulsion (deadline ~27–28 Nov); Denmark keeps its embassy open. The EU Commission adopted stricter visa guidelines for Russians (recommendations, not a ban). No date or invitees for Putin's proposed Moscow talks; Ryabkov warns Europeans against preconditions. Prisoner swap: Budanov expects first returns in late November or early December. No new expulsions, closures or ordered departures; Germany updated its Russia travel warning on 25 Nov (drone-debris risk); Swiss FDFA and Irish DFA unchanged.",
      sources: [
        'https://www.washingtontimes.com/news/2026/nov/22/denmark-removes-russian-official-limits-russia-visas/',
        'https://europeansting.com/2026/11/24/commission-adopts-guidelines-implementing-the-visa-ban-on-combatants-in-russias-war-of-aggression-against-ukraine/',
        'https://en.h.ua/index.php/2026/11/25/ukraine-russia-prisoner-exchange-late-november',
        'https://www.auswaertiges-amt.de/de/reiseundsicherheit/russischefoederationsicherheit-201536',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Kremlin comment on Medvedev's 'preventive nuclear strike' article. Kushner says Putin assured US envoys he will not use nuclear weapons in Ukraine (Kushner's account only). Putin's latest threats (retaliation for refinery strikes 'inevitable') are conventional. Trump says the Iran war is funded 'up until really the end of January' and he will reassess after New Year. Nothing new from Lavrov, Kim or Chinese officials.",
      sources: [
        'https://tass.com/politics/2223221',
        'https://unn.ua/en/news/putin-assured-the-united-states-that-he-would-not-use-nuclear-weapons-kushner-says',
        'https://www.cnbc.com/2026/11/25/ukraine-putin-russia-oil-refinery-attacks.html',
        'https://www.timesofisrael.com/trump-says-iran-war-funded-through-january-suggesting-limited-window-for-new-op/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, steady. Hoax bomb-threat emails hit 450–900 German schools and some Danish schools on 23 Nov (no danger found). A pro-Russian disinformation campaign targets Spain's 29 Nov election. Flightradar24 reported a spike in Baltic GPS jamming around 21–22 Nov (single source). No new drone closures, cable or pipeline damage or grid incidents.",
      sources: [
        'https://meduza.io/en/news/2026/11/24/hundreds-of-schools-in-germany-and-denmark-receive-bomb-threats',
        'https://www.euronews.com/2026/11/23/spains-29-november-election-shielding-the-vote-from-hybrid-threats-and-disinformation',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX 28.3 amber; gold, Brent and franc green). Wed 25 Nov: US stocks fell up to 3% intraday on new US tariff proposals for 14 partners and the AI reversal, then recovered (S&P −0.25%); VIX briefly above 30. Asia rebounded on 26 Nov. Watch: gold (~$3,600, +2.5% over five days per feed) and the franc (EUR/CHF 0.9085, −1.5%) both firmed, a first hint of safe-haven buying, though still within green thresholds. Correction: Nvidia's reinstatement of Jensen Huang on 23 Nov is confirmed (company release, SEC filing). TTF gas ~€87/MWh ahead of a cold snap.",
      sources: [
        'https://wtop.com/national/2026/11/how-major-us-stock-indexes-fared-wednesday-11-25-2026',
        'https://www.euronews.com/2026/11/25/us-proposes-new-tariffs-on-14-major-trading-partners-the-eu-included',
        'https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Board-Reinstates-Jensen-Huang-as-President-CEO-and-Board-Director/default.aspx',
        'https://tradingeconomics.com/commodity/eu-natural-gas',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), leaning toward escalation. Iran now requires ships to coordinate Hormuz passage with its forces; the IRGC says two tankers hit mines on an 'unauthorised route' (25 Nov, unconfirmed); UKMTO: three vessels hit by projectiles on 23 Nov; weekly transits down from 226 to 125 over November. Kharg convoy still not sailed. Israel says plans are ready and the decision is Trump's; Trump signals a window after New Year. Houthi drone wounded 11 in Riyadh's financial district on 24 Nov; the Saudi-led coalition struck Hodeidah and the Houthis threaten Jeddah. NPT exit bill: no vote.",
      sources: [
        'https://english.aawsat.com/world/5345484-iran-says-ships-hit-mines-hormuz-warns-vessels-coordinate-passage',
        'https://www.thenationalnews.com/news/gulf/2026/11/24/is-iran-weighing-tanker-convoy-to-break-us-blockade/',
        'https://www.aljazeera.com/news/2026/11/24/saudi-led-coalition-condemns-terrorist-attack-on-tower-in-riyadh',
        'https://www.aninews.in/news/world/middle-east/saudi-led-coalition-strikes-yemens-hodeidah-port-after-houthis-threaten-red-sea-ports20261125050245/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Winter roads: first lowland snow in Switzerland early 26 Nov with icy-road warnings in the Jura; yellow snow/ice warnings in Doubs (to 26 Nov 10:00), Territoire de Belfort and Haut-Rhin, with freezing rain possible around the Belfort Gap. No A16 or A36 closures reported. Fuel: Territoire de Belfort may be worse at ~33–39% of stations short (aggregators, date unclear); Doubs ~11%; fill up in Switzerland. Rhine at Kaub ~2.4 m on 25 Nov but forecast to fall back to ~1.5 m by 30 Nov (single source). Strasbourg tram and bus strike from 27 Nov (local). Irish Ferries shows 'No Sailing' for 26/27 Nov Dublin–Cherbourg (unverified); Brittany Ferries normal. No Donegal warning.",
    sources: [
      'https://www.20min.ch/story/erster-schnee-wintereinbruch-im-flachland-hier-schneit-es-jetzt-103673999',
      'https://www.doubs.gouv.fr/Actualites/Alertes/Vigilance-meteo/NEIGE-VERGLAS-Alerte-JAUNE',
      'https://fuel-compare.com/penuries/departement/territoire-de-belfort',
      'https://www.wetteronline.de/pegelstand/rhein',
    ],
  },
};
