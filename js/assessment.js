// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-24: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-24',
  issuedAt: '2026-11-24T05:59:42Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band but stable; not red. The North Atlantic Council met in extraordinary session on 23 Nov over the three Kh-101s that fell in Poland on 20 Nov: Article 4 was not invoked (Poland said NATO is already acting); NATO is stepping up eastern-flank air surveillance with AWACS over Poland, called it 'a dangerous incident' with Russia bearing full responsibility; Rutte says intent is still unclear. Poland will summon Russia's ambassador; no Kremlin statement on the missiles. Ukraine sank or badly damaged the Russian corvette Merkury at Benghazi, Libya, on 22 Nov; Peskov called the Libya and Sparta II attacks a 'very dangerous trend' and said daily large-scale strikes will continue. Russia hit Ukraine with 153 drones overnight into 23 Nov (Dymer apartment toll rose to 11). Finnish helicopter violation and Baltiysk explosions remain unconfirmed. No Oreshnik use; no new Black Sea ship strikes since 17 Nov.",
      sources: [
        'https://www.spokesman.com/stories/2026/nov/23/nato-to-send-early-warning-system-aircraft-to-pola/',
        'https://www.npr.org/2026/11/23/nx-s1-6050245/nato-to-meet-after-russia-ukraine-war-once-again-inches-onto-european-territory',
        'https://www.aljazeera.com/news/2026/11/23/russia-warns-ukraine-of-dangerous-trend-after-libya-and-baltic-attacks',
        'https://www.nbcnews.com/world/ukraine/ukraine-sinks-russian-warship-merkury-libya-naval-drones-war-rcna610822',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. No Grom exercise, strategic launch, Oreshnik use or deployment change. New: German media (NDR, WDR, SZ) report that NATO and German intelligence believe Russia plans to launch a nuclear-armed satellite ('Sputnik-S'), possibly in December; based on anonymous sources; the Kremlin calls it not worth taking seriously; Rutte says NATO will defend against threats in space. A launch would be a major escalation; watch for indicators. IISS imagery suggests Sarmat may be entering service at Uzhur (slow-moving).",
      sources: [
        'https://www.themoscowtimes.com/2026/11/23/kremlin-dismisses-reports-about-alleged-nuclear-armed-satellite-launch-a94349',
        'https://english.alarabiya.net/News/world/2026/11/23/nato-warns-of-russian-nucleararmed-satellite-kremlin-dismisses-reports',
        'https://www.iiss.org/online-analysis/missile-dialogue-initiative/2026/11/sarmat-better-late-than-never-for-moscow/',
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
      note: "Green, borderline. No Russian counter-expulsion yet over Denmark's expulsion of its defence attaché (deadline ~27 Nov); a tit-for-tat alone would not change the status, an embassy closure or downgrade would. Denmark presented its proposal to suspend EU tourist visas for Russians on 23 Nov (not adopted). No expulsions over Poland; the ambassador is to be summoned. Putin says Europeans were invited to Moscow for talks, but no visit is confirmed. Prisoner swap still pending (expected late Nov or early Dec). No new 'leave now' advice; Irish DFA still advises against all travel to Russia.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/21/denmark-expels-russian-diplomat-over-alleged-plot-to-kill-ukrainian-rapper',
        'https://kyivindependent.com/denmark-calls-for-eu-wide-travel-restrictions-on-russians-following-foiled-assassination-plot/',
        'https://www.eurointegration.com.ua/eng/news/2026/11/23/7250597/',
        'https://www.irishtimes.com/world/europe/2026/11/20/putin-invites-european-leaders-to-moscow-for-peace-talks-as-russia-pounds-kyiv/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, hotter. Medvedev (reported 23 Nov, TASS and others) argues in a law-journal article that Russia has the right, and sometimes the duty, to use nuclear weapons, including a 'preventive' strike if the West gives Ukraine nuclear weapons or after massive conventional attacks causing catastrophes; he concedes current doctrine does not provide for this and that the decision is Putin's. Words, not an ultimatum. Correction: the Putin 'point of no return' quote reported yesterday is from his 1 Oct Valdai speech, not new. Trump: tankers breaching the blockade will 'all be at the bottom of the sea'.",
      sources: [
        'https://tass.com/politics/2223257',
        'https://tass.com/politics/2223331',
        'https://en.ara.cat/international/putin-escalates-the-nuclear-threat-the-point-of-no-return-can-arrive-unexpectedly_1_5866687.html',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, steady. No new major cyberattack, cable or pipeline break, grid incident or airport closure in Western Europe on 22–24 Nov. The November hoax bomb-threat wave has not recurred. Baltic GPS jamming continues at background levels.",
      sources: [
        'https://www.itamilradar.com/2026/11/21/drone-alert-at-sigonella-a-security-scare-unfolds-amid-renewed-military-activity-in-the-central-mediterranean/',
        'https://kyivindependent.com/explosions-reported-near-russian-baltic-fleet-base-in-kaliningrad-oblast-amid-drone-alerts/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX 26.6, still amber; gold, Brent and franc green), easing toward green. Mon 23 Nov: S&P 500 +4.7% (best day since April 2025, ending a seven-day slide) after Nvidia reinstated Jensen Huang as CEO; Nasdaq about +6.5%; Europe +2%. Brent fell to $86–89, its lowest since August, so oil is not pricing Gulf escalation; gold rebounded to ~$3,645; EUR/CHF 0.919 (franc slightly firmer). Fed hike odds for December eased to ~93–96%.",
      sources: [
        'https://www.washingtonpost.com/business/2026/11/23/wall-street-stocks-dow-nasdaq/5a7bcea0-e785-11f1-8db0-6f1e3c389e7c_story.html',
        'https://247wallst.com/investing/2026/11/23/stock-market-today-dow-sp-500-and-nasdaq-surge-as-nvidia-leads-a-major-ai-rebound/',
        'https://financefeeds.com/gold-price-today-3618-monday-rebound-hike-odds-ease-pce-wednesday-bull-3700-bear-3500/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), leaning toward escalation. IRGC missile and drone waves at US sites in Bahrain and Kuwait on 21–22 Nov (intercepted; CENTCOM denies an F-16 was hit). The Kharg tanker convoy has not sailed; Iran says it will use 'every means' against the blockade; a 'line-breaker' tanker signal was spoofed. Reports say major US strikes are delayed at least a week, likely until after New Year; Qatar's PM met Rubio and Vance on 23 Nov. NPT: a bill for automatic withdrawal if nuclear sites are attacked was registered on 22 Nov, no vote. North Korea expanding Yongbyon enrichment (IAEA, 19 Nov).",
      sources: [
        'https://www.aljazeera.com/news/2026/11/22/whats-behind-irans-escalation-of-attacks-in-the-gulf',
        'https://www.euronews.com/2026/11/23/iran-vows-every-means-to-counter-us-blockade-of-hormuz-after-trump-threat',
        'https://www.bloomberg.com/news/articles/2026-11-23/fake-iran-tanker-highlights-uncertainty-around-hormuz-traffic',
        'https://wanaen.com/iranian-parliament-registers-automatic-npt-exit-bill/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, steady. Rain: yellow rain-flood alerts for Doubs and Jura on 22–23 Nov; for 24 Nov yellow river-flood alerts in 9 French departments including Doubs, Jura and Manche (Cherbourg). Rivers were coming out of drought, so major flooding is less likely. No road closures on the A16 (Tavannes, Moutier, Saint-Ursanne) or rail disruption reported, but check the Bern police and SBB before travel. Fuel (21 Nov): Haut-Rhin 25%, Territoire de Belfort 22%, Doubs 11% of stations short; fill up before the A36. No strikes or blockades. Ferries: no confirmed Cherbourg cancellations found for 23–25 Nov; check live. No Donegal warning.",
    sources: [
      'https://www.cnews.fr/france/2026-11-24/crues-voici-les-9-departements-places-en-vigilance-jaune-ce-mardi-1959770',
      'https://www.doubs.gouv.fr/Actualites/Alertes/Vigilance-meteo/PLUIE-INONDATION-ET-VENT-Alerte-JAUNE',
      'https://leprixducarburant.com/penurie-carburant/',
      'https://www.irishferries.com/ie-en/sailing-updates/ireland-france/',
    ],
  },
};
