// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-10-15: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-10-15',
  issuedAt: '2026-10-15T05:10:00Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: 'Top of amber. 14 Oct: tanker Yara J caught fire at anchor in Romanian territorial waters near Sulina (crew safe); Romania is investigating whether a drone hit it, which would be the first strike inside a NATO member\'s own waters. Bulgaria\'s PM says Russia was "likely" behind drone strikes on four ships in a week (two sunk, 11 missing); Bulgaria, Romania and Türkiye are sharing more intelligence and Bulgaria expects to join NATO\'s anti-drone initiative by 30 Oct. No Article 4 request. China\'s live-fire drills (12–17 Oct) are along its own coast, not around Taiwan.',
      sources: [
        'https://wtxnews.com/ship-catches-fire-in-romanias-waters-amid-increased-black-sea-tensions/',
        'https://www.usnews.com/news/world/articles/2026-10-14/bulgaria-expects-to-join-nato-anti-drone-initiative-this-month-says-minister',
        'https://www.washingtonpost.com/business/2026/10/14/bulgaria-russia-ukraine-drone-attacks-radev-yotova/ff75351c-c7c4-11f1-aefb-abe4112d087e_story.html',
        'https://focustaiwan.tw/politics/202610120006',
      ],
    },
    posture: {
      status: 'green',
      note: 'Close to amber, no change. Steadfast Noon under way (13–23 Oct). No Kremlin statement on it (only a 9 Oct embassy line that Russia "will closely monitor"), no Grom announcement, Barents NOTAMs, or SSBN/bomber/warhead moves. Watch 18–22 Oct.',
      sources: [
        'https://www.stripes.com/theaters/europe/2026-10-13/steadfast-noon-nato-exercise-23139099.html',
        'https://tass.com/politics/2201479',
        'https://www.nato.int/en/news-and-events/articles/news/2026/10/08/nato-holds-annual-nuclear-exercise-steadfast-noon',
      ],
    },
    continuity: {
      status: 'green',
      note: 'No change. No civil defence activation, leader relocation or emergency powers in NATO states or Switzerland; only long-term planning (e.g. Germany\'s civil defence overhaul).',
      sources: [
        'https://san.com/cc/germany-rushes-civil-defense-overhaul-as-russian-threat-grows/',
        'https://en.ara.cat/international/evacuation-plans-sirens-and-new-shelters-eastern-europe-prepares-for-the-russian-threat_1_5868887.html',
      ],
    },
    diplomacy: {
      status: 'green',
      note: 'Close to amber, no change. No expulsions, closures, suspended talks or new "leave" advisories. Bulgaria, Romania and Türkiye are taking a Black Sea shipping-security plan to the EU Council (15–16 Oct). Russia–Montenegro visa tit-for-tat (14 Oct) is minor.',
      sources: [
        'https://ria.ru/20261014/bolgarija-2124552178.html',
        'https://eadaily.com/ru/news/2026/10/14/zaharova-ozvuchila-otvet-moskvy-na-vvedenie-chernogoriey-vizovogo-rezhima-dlya-rossiyan',
        'https://www.ireland.ie/en/dfa/overseas-travel/advice/russian-federation/',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: 'Amber, easing slightly. Zakharova\'s 14 Oct briefing did not mention Steadfast Noon, Kaliningrad or the Bulgarian sinkings; Peskov said nuclear arsenals are "not an appropriate topic" for a possible Putin–Trump–Xi meeting. Calming items: 9 Oct Putin–Trump call (Kremlin says US de-escalation proposals received "with understanding"); NATO says no Kaliningrad blockade planned. The 30 Sep nuclear note still stands; no deadlines or readiness announcements.',
      sources: [
        'https://ria.ru/20261014/zakharova--2124382694.html',
        'https://www.tasnimnews.ir/en/news/2026/10/14/3723004/nuclear-arsenals-unlikely-to-be-discussed-by-putin-trump-xi-jinping-kremlin',
        'https://tass.com/world/2200231',
        'https://www.aljazeera.com/news/2026/9/30/russia-warns-nato-of-possible-nuclear-response-if-kaliningrad-is-cut-off',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: 'Amber, ongoing. France\'s cyber agency ANSSI says the supermarket refrigeration attack (~700 stores) is "likely still underway" and also hit Copeland/Dixell controllers; no claim of responsibility. Ahold Delhaize\'s Dutch chains still restoring systems on 13 Oct, with fresh-produce shortages in major cities. No grid, bank or telecom outages, cable cuts or new GPS jamming.',
      sources: [
        'https://www.cnn.com/2026/10/14/europe/france-cyberattack-supermarket-fridges-intl',
        'https://www.technology.org/2026/10/14/french-supermarket-fridge-hack-copeland-dixell-anssi/',
        'https://retaildetail.eu/news/food/cyber-attack-also-affects-dutch-employees-of-ahold-delhaize',
      ],
    },
    markets: {
      status: 'amber',
      note: 'Amber. Houthi missiles hit Aramco HQ in Dhahran overnight 13–14 Oct; Trump "evaluating" joining Saudi strikes, none yet. Brent ~$105–106 (intraday $108.70). VIX up to ~16.9 and S&P −1.2% on hot US inflation data, gold down ~1.9% to ~$4,100: rate-driven, not war panic. EUR/CHF ~0.933.',
      sources: [
        'https://www.bloomberg.com/news/articles/2026-10-14/aramco-headquarters-hit-as-houthis-widen-attacks-on-saudi-arabia',
        'https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-14-2026',
        'https://tradingeconomics.com/commodity/brent-crude-oil',
      ],
    },
    strategic: {
      status: 'amber',
      note: 'Deteriorating, minor change. North Korea tested two types of submarine-launched cruise missiles (15 Oct), framed as checking its nuclear deterrent, after a hypersonic launch (3 Oct) and a tactical ballistic missile (12 Oct). No new US–Russia–China testing or treaty news.',
      sources: [
        'https://www.aljazeera.com/news/2026/10/15/north-korea-tests-two-submarine-launched-missiles-state-media-reports',
        'https://www.bloomberg.com/news/articles/2026-10-03/north-korea-s-kim-oversaw-hypersonic-missile-drill-kcna-says',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: 'Amber. Correction: the French TotalEnergies refinery strike continues (CGT 12 Oct: "the strike continues"); over 1,300 French stations short of at least one fuel, mostly in Grand Est, on the driving route to Cherbourg. Carry fuel or fill up in Switzerland. Barfleur made her first Rosslare–Cherbourg crossing but is confirmed only for October. French airline crew strike still suspended (decree not yet published). Irish Ferries Dublin–Cherbourg and Swiss–Irish flights normal.',
    sources: [
      'https://prix-carburant.eu/article/greve-raffinerie-totalenergies-normandie',
      'https://media.roole.fr/quotidien/au-volant/greve-chez-totalenergies-raffineries-bloquees-stations-touchees-faut-il-craindre-une-penurie-de-carburant',
      'https://afloat.ie/port-news/ferry-news/brittany-ferries/item/73373-former-english-channel-ferry-barfleur-debuts-on-france-ireland-route-albeit-temporarily',
      'https://www.deplacementspros.com/transport/l-intersyndicale-des-pnc-suspendent-leur-preavis-de-greve-nationale',
    ],
  },
};
