// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-15: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-15',
  issuedAt: '2026-11-15T05:57:44Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. The expected large Russian retaliation for Ukraine's ~1,200-drone attack has not been seen yet (latest Ukrainian report, night of 13–14 Nov: 96 drones, no missiles). Caution: reports of a big \"14 November\" strike on Kyiv are from 2025. No new NATO-airspace, Kaliningrad, Black Sea or sabotage events; no Article 4.",
      sources: [
        'https://en.interfax.com.ua/news/general/1236499.html',
        'https://www.kyivpost.com/post/89990',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, launch or unusual SSBN/bomber activity in November. Oreshnik last used 8 Jan 2026; watch whether the coming retaliation uses it or other nuclear-capable systems.",
      sources: [
        'https://wtop.com/news/2026/01/russias-defense-ministry-says-it-has-used-the-new-oreshnik-ballistic-missile-in-the-latest-strike-on-ukraine',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers; only routine preparedness (EU 72-hour guidance, Ireland's \"Be Emergency Ready\" booklet).",
      sources: [
        'https://brusselssignal.eu/2026/11/brussels-takes-crisis-preparedness-into-primary-schools-and-revives-72-hour-kits/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, improving. New (14 Nov): the White House and the Kremlin confirmed the first Trump–Xi–Putin meeting, 19 Nov in Shenzhen at APEC (agenda: the Iran war and nuclear arms; no agreement expected; China has not confirmed). The agreed prisoner swap has not yet happened; no date for the next Ukraine round. No expulsions, drawdowns or \"leave\" advisories.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/14/trump-xi-and-putin-to-hold-first-three-way-summit-in-china',
        'https://tass.com/politics/2218203',
        'https://kyivindependent.com/large-scale-prisoner-exchange-agreed-as-2nd-day-of-abu-dhabi-talks-concludes-umerov-says/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements or ultimatums found for 14–15 Nov. Watch item (single dated source, unconfirmed): pro-Kremlin outlets claim Russia's Security Council may lift an unofficial ban on targeting Zelensky and Ukraine's top generals after drone strikes on Ust-Luga.",
      sources: [
        'https://eadaily.com/en/news/2026/11/14/insider-moscow-could-lift-the-unspoken-ban-on-the-liquidation-of-zelensky-and-his-entourage',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax threats, cyberattacks, cable damage or GPS surge found for 14–15 Nov.",
      sources: [
        'https://www.chathamhouse.org/2026/11/europe-faces-faster-cyberattacks-ever-many-solutions-are-long-known',
      ],
    },
    markets: {
      status: 'green',
      note: "Green; watch Monday's open. Friday close: Brent $95.84 (second weekly loss), VIX 19.3, gold ~$3,890, EUR/CHF 0.927. Weekend: Iran's navy and IRGC say 2–3 tankers hit mines in the eastern Strait of Hormuz on 14 Nov (not independently confirmed) — could lift oil.",
      sources: [
        'https://www.investing.com/news/commodities-news/irans-navy-says-three-tankers-on-fire-after-hitting-mines-in-hormuz-5027556',
        'https://www.middleeastmonitor.com/20261114-2-tankers-caught-fire-after-hitting-naval-mine-in-hormuz-iranian-navy-says/',
      ],
    },
    strategic: {
      status: 'amber',
      note: "No change. Hormuz still shut; Iran claims more tankers mined (14 Nov). Nothing new on Iran's NPT review or US–Iran talks. The confirmed Trump–Xi–Putin meeting (19 Nov) will cover the Iran war and nuclear arms; China calls three-way arms talks \"unreasonable\". Israel Speaker vote 17 Nov; North Korea quiet since early November.",
      sources: [
        'https://www.spokesman.com/stories/2026/nov/14/historic-meeting-trump-xi-and-putin-set-to-meet-on/',
        'https://www.jns.org/news/israel-news/knesset-speaker-vote-scheduled-for-nov-17',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber, easing slowly. French fuel: Grand Est 16% of stations in difficulty on 14 Nov (19% on 12 Nov); no further stock release planned — call ahead and plan alternates on the A36. 17 Nov strike: controllers' declaration deadline was noon today; no DGAC flight cuts reported yet; SNCF/RATP forecasts Mon 16 Nov. Ferries normal; Aer Lingus Zurich–Dublin listed for 17 Nov. Donegal: small-craft warnings, wintry showers and possible snow on high ground Sunday night.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://mobilitycenter.fr/greve-17-novembre-2026-transports-sncf-ratp-rer-previsions/',
      'https://www.met.ie/warnings/today',
    ],
  },
};
