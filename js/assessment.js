// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-18: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-18',
  issuedAt: '2026-11-18T06:01:24Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, not red (no direct combat between nuclear powers, no Article 5). Russia retaliated on the night of 16–17 Nov: 306 drones plus ballistic and cruise missiles, ballistic missiles hit Kyiv's North and South bridges (2 killed). Ukraine brought down a road span of the Kerch (Crimean) Bridge around midnight 16–17 Nov (CNN, NBC, Kyiv Independent); Russia claims 1,441 drones downed that night. Black Sea shipping in NATO waters is being hit: correction to the 16–17 Nov readings, which missed that drones struck three merchant ships near Sulina on 14 Nov, two inside Romanian territorial waters; BETUL 8 capsized in Bulgaria's EEZ on 16 Nov after naval-drone hits. Bulgarian opposition calls for Article 4; President Radev says no grounds. No new Baltic/Polish incursion since 10–11 Nov.",
      sources: [
        'https://kyivindependent.com/key-bridges-in-kyiv-struck-in-massive-russian-ballistic-missile-attack-across-ukraine/',
        'https://www.cnn.com/2026/11/17/europe/ukraine-russia-kerch-bridge-intl-hnk',
        'https://www.euronews.com/2026/11/15/three-commercial-vessels-struck-by-drones-near-romanias-black-sea-pm-says',
        'https://kyivindependent.com/cargo-ship-sinks-in-bulgarias-black-sea-after-reported-drone-attack-all-12-crew-rescued',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. No Grom exercise, strategic missile launch or Oreshnik use. On 17 Nov two Tu-95MS bombers with tankers flew across East Asia and landed in Vietnam on the eve of APEC (Taiwan ADIZ entry; Japan airspace violation single-source): a signalling flight, not a posture change. US unarmed Minuteman III test GT-257 scheduled 17–18 Nov from Vandenberg (routine, long planned). Watch Russia's response to the Kerch Bridge strike.",
      sources: [
        'https://news.usni.org/2026/11/17/suspected-russian-aircraft-violated-japans-airspace-says-defense-minister',
        'https://clashreport.com/world/articles/russian-nuclear-capable-bombers-make-rare-landing-in-vietnam-fio8ocd27q',
        'https://www.vandenberg.spaceforce.mil/News/Article-Display/Article/4648574/unarmed-minuteman-iii-icbm-test-launch-scheduled-at-vandenberg-space-force-base/',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or NATO states. EU 'Integrated Resolve 2026' hybrid-crisis exercise runs to 20 Nov (planned).",
      sources: [
        'https://www.babs.admin.ch/de',
        'https://www.thejournal.ie/why-irish-government-advice-prepare-for-emergency-crisis-7227595-Nov2026/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, steady. Putin arrived in Shenzhen on 18 Nov with Lavrov and Belousov and meets Xi today; the Xi–Trump–Putin trilateral is set for Thu 19 Nov, with Iran and arms control on the agenda. A US official expects no agreement; Ushakov says a joint communiqué is still under negotiation. Prisoner swap (~1,200 each side) still not carried out. Only routine tit-for-tat Russian expulsions (Estonia 15 Nov); no closures or 'leave now' advisories.",
      sources: [
        'https://www.cnbc.com/2026/11/18/apec-trump-xi-putin-shenzhen.html',
        'https://tass.com/politics/2219671',
        'https://pravda.com.ua/eng/news/2026/11/13/8062620',
        'https://www.themoscowtimes.com/2026/11/15/russia-expels-estonian-diplomat-in-tit-for-tat-move',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. No new nuclear threats from Russian, North Korean or Chinese officials on 16–18 Nov; Kremlin tone before the summit is conciliatory, and no explicit threat over the Kerch Bridge. CNN reported US intelligence of Iranian plans for a radiological or chemical attack in Washington; Rubio and Sen. Warner see no imminent threat, Trump threatened an unprecedented price.",
      sources: [
        'https://theprint.in/world/rubio-says-no-imminent-threat-to-washington-after-report-of-possible-iranian-dirty-bomb-plot/3101643/',
        'https://www.iranintl.com/en/202611183106',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, no change. Reuters (17 Nov) counted 8,000+ hoax bomb threats in a month against European schools, airports and airlines, signed 'Male State'; no attribution. 9 Nov North Sea GPS jamming still under Dutch investigation. Moldova briefly closed its airspace on 17 Nov over a Shahed-type drone. Viral 'worldwide blackout' posts debunked; no real grid or cable incident.",
      sources: [
        'https://www.usnews.com/news/world/articles/2026-11-17/exclusive-death-is-near-inside-the-hoax-bomb-threats-that-rattled-europes-schools-and-airports',
        'https://meduza.io/en/news/2026/11/17/european-schools-and-airports-receive-more-than-8-000-hoax-bomb-threats-in-a-month-reuters-finds',
        'https://www.euronews.com/2026/11/17/moldova-closes-airspace-after-shahed-type-drone-detected-heading-towards-chisinau',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX 25.5, up 36% in five days), but not geopolitical. S&P 500 fell for a fourth day on 17 Nov to its lowest close since July on Nvidia's CEO/spy scandal and US AI-chip curbs; Nvidia's results beat after the close and futures rose. Gold is falling (~$3,820), Brent ~$93, EUR/CHF 0.923 with no flight to the franc. Expect a return to green if the VIX eases.",
      sources: [
        'https://www.home.saxo/content/articles/options/volatility-jumps-at-the-front-before-nvidia---options-brief---17-november-2026-17112026',
        'https://www.cbsnews.com/news/nvidia-earnings-jensen-huang-colette-kress/',
        'https://www.france24.com/en/live-news/20261118-stocks-drop-as-booming-nvidia-results-drowned-by-spy-scandal',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background), worsening in the Gulf. 17 Nov: Iranian drones targeted the US radar at Sheikh Isa Air Base, Bahrain (third attack since 13 Nov; intercepted), and US jets struck an IRGC missile site on Qeshm Island. Correction: the 15 Nov Bandar Lengeh/Sirik strikes reported yesterday could not be confirmed with November-dated sources. Third US carrier confirmed by CENTCOM on 16 Nov. UKMTO: 7 tanker attacks near Hormuz since 10 Nov. Mediators working on a strait-for-blockade deal; no US–Iran talks round. Matan Kahana elected Knesset Speaker 66–52 (domestic).",
      sources: [
        'https://www.aljazeera.com/news/2026/11/17/kuwait-reports-drone-attacks-as-iran-us-trade-attacks-on-qeshm-and-bahrain',
        'https://npr.org/2026/11/17/nx-s1-6044255/us-iran-war-latest-bahrain',
        'https://www.itv.com/news/2026-11-16/third-us-aircraft-carrier-arrives-in-the-middle-east',
        'https://gcaptain.com/ukmto-reports-two-tanker-attacks-in-strait-of-hormuz/',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Grand Est fuel: 22% of stations short on 16 Nov (no newer figure); Haut-Rhin's ~44% is from 14 Nov and counts vary by site, so treat the A36 corridor as severe and leave with a full tank. Rhine at Kaub ~0.68 m (single source). 17 Nov strike turnout fell sharply; no depot or A36 blockades. Correction: Brittany Ferries' Cork–Roscoff route has ended for the winter, so use Cherbourg (Rosslare or Dublin) or go via the UK; Irish Ferries Cherbourg sailings 17–18 Nov listed as cancelled for weather (unconfirmed live). Donegal warning expired; milder weekend forecast.",
    sources: [
      'https://trans.info/fr/diesel-france-baisse-prix-penuries-grand-est-novembre-2026-514667',
      'https://fuel-compare.com/penuries/departement/haut-rhin',
      'https://afloat.ie/port-news/ferry-news/item/73753-brittany-ferries-end-cork-seasonal-service-as-hibernia-line-continue',
      'https://www.rte.ie/news/regional/2026/1116/1599326-weather-ireland/',
    ],
  },
};
