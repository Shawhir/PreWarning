// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-10: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-10',
  issuedAt: '2026-11-10T05:57:02Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. Taiwan: Taiwan's defence minister said on 10 Nov that China is running \"area denial\" drills in the Western Pacific with the Liaoning carrier group (Japan Times, China-Global South); Beijing calls it routine; Taiwan's daily count to 9 Nov was low (1 aircraft, 7 ships); no blockade. Zaporizhzhia: a drone killed a worker at the nuclear plant on 9 Nov (IAEA), which remains on diesel generators. No new Kaliningrad/Baltic incident, NATO-airspace incursion or confirmed Black Sea hit; no Article 4.",
      sources: [
        'https://www.japantimes.co.jp/news/2026/11/10/asia-pacific/taiwan-china-area-denial-pacific/',
        'https://chinaglobalsouth.com/2026/11/10/china-taiwan-aircraft-carrier-area-denial-military-drills',
        'https://www.themoscowtimes.com/2026/11/09/zaporizhzhia-nuclear-plant-worker-killed-in-drone-attack-iaea-says-a94213',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise or ICBM/SLBM launch since 28 Oct. Watch item: Ukrainian outlets report nearly all Russian Tu-160 and Tu-95MS bombers (~47) concentrated in the open at Ukrainka in the Far East — apparently a relocation away from Ukrainian drones (concentration, not dispersal), undated and unconfirmed by Russia.",
      sources: [
        'https://united24media.com/war-in-ukraine/russia-masses-47-nuclear-capable-bombers-at-far-eastern-airbase-in-rare-fleet-concentration-24179',
        'https://en.defence-ua.com/analysis/moving_all_10_tu_160s_37_tu_95ms_bombers_to_russias_ukrainka_air_base_proved_easier_than_building_shelters_at_engels_that_says_lot-20362.html',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers in NATO states, Switzerland or Ireland.",
      sources: [
        'https://www.cnn.com/2026/11/09/middleeast/iran-us-talks-explainer-intl',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, improving. US-mediated Ukraine–Russia talks open in Abu Dhabi today (first three-way round since February); agenda: energy and Black Sea ceasefire, prisoner swaps, security guarantees — no general ceasefire or territory; Kyiv expects no breakthrough. EU sending its own team; Kremlin rejects a European seat. Trump cites \"positive momentum\" after meeting Qatar's PM; Iran still demands US \"surrender\" and compensation. No new expulsions or advisories.",
      sources: [
        'https://www.france24.com/en/live-news/20261110-us-mediated-talks-with-russia-and-ukraine-to-start-in-abu-dhabi',
        'https://www.euronews.com/2026/11/09/eu-to-send-joint-team-to-ukraine-russia-peace-talks-in-abu-dhabi',
        'https://www.themoscowtimes.com/2026/11/09/kremlin-rejects-european-role-in-upcoming-abu-dhabi-talks-a94207',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements from Russian, Chinese or North Korean leaders for 9–10 Nov. Trump (9 Nov): Iran war at \"status quo\" but US forces \"locked and loaded\"; Iran threatens to \"rain down hell\" if strikes resume.",
      sources: [
        'https://www.cbsnews.com/live-updates/iran-war-us-trump-deal-negotiations/',
        'https://www.foxnews.com/live-news/trump-says-he-s-unlikely-to-escalate-iran-conflict-amid-talks-responds-to-vance-assessment',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax threats since 6 Nov; European intelligence examining a Russian link, unproven. No new cable damage, GPS surge or infrastructure cyberattack.",
      sources: [
        'https://english.nv.ua/nation/european-intelligence-probes-possible-russian-links-to-flight-bomb-threats-ft-50657174.html',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, easing toward green. Monday 9 Nov relief rally: all three US indexes +2%+, semiconductors +6.9% (Nvidia −4.2% on its internal probe); VIX −22% to 19.92; Brent settled $92.57 (−5.9%). Tuesday: Nikkei back above 60,000, Kospi +5%; gold ~$4,115–4,125; EUR/CHF ~0.916. Signals feed back to green on all four. Held at amber one more day after last week's crash and with Hormuz still closed; US CPI due today.",
      sources: [
        'https://www.thestar.com.my/business/business-news/2026/11/10/stocks-jump-as-oil-tumbles-nvidia-falls-amid-internal-probe',
        'https://journalarta.com/en/2026/11/10/oil-price-today-brent-slides-6-73-to-91-70-as-trump-eases-iran-rhetoric/',
        'https://mlq.ai/news/nikkei-reclaims-60000-and-softbank-jumps-11-as-asian-chip-stocks-track-wall-streets-rebound/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Paused. No new US strikes on 9–10 Nov; US and Iran negotiating quietly (CNN); blockade and Hormuz closure continue. Israel: Knesset sworn in 10 Nov; Eisenkot's mandate to ~6 Dec; Speaker vote by 17 Nov. APEC Shenzhen 18–19 Nov: Trump–Xi expected, three-way with Putin floated. US–China trade truce reportedly extended to 10 Jan (single source). North Korea quiet since 4 Nov.",
      sources: [
        'https://www.cnn.com/2026/11/09/middleeast/iran-us-talks-explainer-intl',
        'https://www.haaretz.com/israel-news/elections/2026-11-09/ty-article/.premium/haredi-party-declines-to-back-anti-netanyahu-blocs-bid-to-oust-knesset-speaker/000001a1-c088-d3c0-a1af-e1aca9cf0000',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, French fuel worsening. Official data: ~15% of French stations short of at least one fuel on 9 Nov (11% on 7 Nov, 14% on 8 Nov); Grand Est 24% (A36 corridor) — fill up in Switzerland. Gilets jaunes Acte V 14 Nov, Acte VI 20–22 Nov (no blockade plans found). Ferries: no new disruption (Irish Ferries' 7 Nov technical cancellation not followed up); flights normal; no Donegal warning.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://prix-du-carburant.com/actualites/ruptures-carburant-15-pourcent-stations-9-novembre/',
    ],
  },
};
