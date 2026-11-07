// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-07: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-07',
  issuedAt: '2026-11-07T05:57:08Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. Nothing new confirmed for 6–7 Nov (thin search coverage): no follow-up to the 3 Nov Kaliningrad border incident (Tusk warned of possible armed incursions in the first half of November; Polish police operation to 8 Nov), no Baltic drone incursions, no confirmed Black Sea ship hit since the unconfirmed Russian claim of 2 Nov, no Article 4.",
      sources: [
        'https://www.theweek.in/wire-updates/international/2026/11/03/tusk-says-poland-thwarted-possible-provocation-on-kaliningrad-border-overnight.html',
        'https://www.anews.com.tr/world/2026/11/02/russia-hits-military-facility-in-ukraines-odesa-region-cargo-vessel-at-sea',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, ICBM/SLBM launch or unusual bomber/SSBN activity found since 28 Oct. Russia's usual autumn drill has not been reported; a short-notice one would make this amber.",
      sources: [
        'https://russianforces.org/blog/2026/',
        'https://www.themoscowtimes.com/2026/08/28/russian-military-conducts-mobile-icbm-test-a93601/pdf',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers in Switzerland, Ireland or NATO states.",
      sources: [
        'https://san.com/cc/germany-rushes-civil-defense-overhaul-as-russian-threat-grows/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, borderline amber on Iran. Trump spoke with Qatar's Emir on 6 Nov (Emir urged no escalation and an open Hormuz); Trump says the US is \"talking to Tehran's representatives\". Bloomberg (single source) says the sides \"edge closer to deal\". Abu Dhabi Ukraine–Russia talks still set for 10–11 Nov (Medinsky, Umerov). No new expulsions, drawdowns or \"leave\" advisories.",
      sources: [
        'https://www.bloomberg.com/news/articles/2026-11-06/trump-holds-call-with-mediator-qatar-about-iran-de-escalation',
        'https://timesofisrael.com/liveblog_entry/trump-qatars-emir-discuss-efforts-to-reach-deal-ending-regional-crisis',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums. Trump (5 Nov, reported 6 Nov): the world will soon learn whether he chooses a deal or strikes to \"destroy what is left\" of Iran; NBC reports Hegseth pushing for renewed strikes.",
      sources: [
        'https://www.cbsnews.com/live-updates/iran-war-trump-us-strait-hormuz-persian-gulf/',
        'https://www.yahoo.com/news/politics/articles/trump-touts-imminent-decision-potential-123052899.html',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, slightly worse. A second wave of hoax bomb threats on 6 Nov: 11 more flights (Hungary scrambled jets to escort three), plus broadcasters — RTÉ's Dublin headquarters was evacuated and Bulgaria's NOVA TV threatened. Nothing found; no state attribution (one claim by a fringe group for Rome flights); EU security experts meet next week. Earlier: freezer cyberattacks at 13 SuperValu stores in Ireland (2–3 Nov). No cable cuts or GPS surge.",
      sources: [
        'https://www.npr.org/2026/11/06/nx-s1-6032612/europe-flights-hoaxes',
        'https://www.aljazeera.com/news/2026/11/6/new-bomb-threats-target-european-broadcasters-air-traffic',
        'https://www.washingtontimes.com/news/2026/nov/6/european-flights-broadcasters-targeted-another-round-bomb-threats/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, easing slightly. Friday 6 Nov: S&P +0.3% (week ~−2.7%, worst in months), Nasdaq +1.1%; VIX ~24–25.6 (amber on the feed, down from ~28). Brent ~$98 (week −12%, on Iran-deal hopes); gold ~$4,050–4,080 (week +4%); EUR/CHF ~0.914 (franc firmer). Credit stress in AI names (CoreWeave CDS above 1,000bp, high-yield spreads wider) but no bank failures or contagion: a sharp tech correction, not a wider crisis yet.",
      sources: [
        'https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-nov-06-2026',
        'https://yournews.com/2026/11/06/7255916/ai-selloff-triggers-market-warning-signals-as-investors-watch-for/',
        'https://energynow.com/2026/11/oil-prices-plunge-13-in-one-week-as-u-s-election-results-raise-hopes-of-iran-peace-deal-wti-closes-below-91-brent-below-99/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating, no change. The IRGC claims it shot down a US MQ-1 drone over Qeshm on 6 Nov (second in two days) and that two more tankers hit mines near Hormuz (Iranian claims; no US confirmation). Hormuz stays closed; Trump says a deal-or-strike decision is coming. No new US or Israeli strikes since 3 Nov. Israel: Knesset sworn in 10 Nov, no majority. North Korea quiet since 4 Nov.",
      sources: [
        'https://www.aljazeera.com/amp/news/liveblog/2026/11/6/iran-war-live-trump-warns-us-may-have-to-destroy-rest-of-iran',
        'https://sundayguardianlive.com/world/us-israel-iran-war-latest-live-news-iran-claims-irgc-shot-down-us-mq-1-drone-over-qeshm-island-as-strait-of-hormuz-tensions-escalate-amid-rising-gulf-tensions-318423/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, holding. Gilets jaunes: no confirmed road blockades in France on 6 Nov (single tracker); today's \"Acte IV\" has ~90–120 events in ~60 cities with 70,000 police deployed — nothing reported for the A36, Belfort, Besançon or Mulhouse. Fuel: ~13% of stations short of at least one fuel (6 Nov), Paris ~25%. Ferries Rosslare/Dublin–Cherbourg running; no Donegal warning; Swiss–Irish flights normal, but hoax bomb threats are a general air-travel risk.",
    sources: [
      'https://www.sudradio.fr/sud-radio/acte-4-des-gilets-jaunes-90-mobilisations-sous-haute-surveillance-ce-samedi-7-novembre',
      'https://prix-du-carburant.com/actualites/prix-carburants-6-novembre-2026-releve-6h01/',
      'https://gasbu.app/en/live/six-seven-6-7-novembre-2026',
    ],
  },
};
