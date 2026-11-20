// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-20: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-20',
  issuedAt: '2026-11-20T05:58:16Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, not red (no direct combat between nuclear powers, no Article 5). After Ukraine's third strike on the Kerch Bridge in four days (Neptune missiles on the railway section, 18–19 Nov), Putin promised on 19 Nov a response 'far more painful' and ruled out energy and Black Sea ceasefires. Overnight 19–20 Nov Russia launched a mass ballistic, cruise-missile and drone attack: about seven waves on Kyiv, power outages, 3 killed per the city administration; Kharkiv, Lviv and Vinnytsia regions also targeted (missile count and bridge damage not yet confirmed). No Oreshnik use. No new Black Sea ship strikes since GAS HUSKY on 17 Nov; no Article 4 request; no NATO airspace incursion 18–20 Nov.",
      sources: [
        'https://www.pravda.com.ua/eng/news/2026/11/19/8063622/',
        'https://unn.ua/en/news/kyiv-endured-seven-waves-of-ballistic-strikes-russia-launched-about-30-missiles-and-power-outages-began-in-the-capital',
        'https://ua.news/en/capital/rosiiska-balistichna-ataka-na-kiyiv-zabrala-zhittia-trokh-liudei-ie-poraneni',
        'https://www.themoscowtimes.com/2026/11/19/putin-vows-painful-retaliation-to-crimean-bridge-attacks-a94315',
      ],
    },
    posture: {
      status: 'green',
      note: "Green, close to amber. The two Tu-95MS bombers left Da Nang before sunrise on 19 Nov and were intercepted by Taiwan and Japan heading back toward Ukrainka, not onward. No Grom exercise, strategic launch, Oreshnik use or deployment change. The Shenzhen declaration commits to nuclear-risk reduction (mildly positive).",
      sources: [
        'https://theaviationist.com/2026/11/19/taiwan-japan-intercept-russian-tu-95/',
        'https://united24media.com/world/two-russian-tu-95ms-bombers-two-days-in-vietnam-what-was-moscow-trying-to-prove-24532',
      ],
    },
    continuity: {
      status: 'green',
      note: "Green, no change. No civil-defence alerts, shelter orders, leadership relocations or emergency powers in Switzerland, Ireland or NATO states. Estonia's border closure from 1 Dec is a security measure.",
      sources: [
        'https://www.babs.admin.ch/en/sirens',
        'https://euromaidanpress.com/2026/11/15/estonia-to-close-all-border-crossings-with-russia/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green. The first Xi–Trump–Putin trilateral met for about 90 minutes in Shenzhen on 19 Nov and issued a joint declaration: 'a nuclear war cannot be won and must never be fought', a nuclear-risk-reduction dialogue with no timetable, UN reform, oil supply and ICC immunity. No arms-reduction commitment; Ukraine and Iran not mentioned; Putin said it binds no one. Trump and Putin spoke ~40 minutes on Ukraine with no result, and Putin then ruled out ceasefire talks after the Kerch strikes. Prisoner swap still pending. No new expulsions or 'leave now' advisories. Next chance: G20 on 14–15 Dec.",
      sources: [
        'https://english.news.cn/20261119/f54674416ffb46a68734353f2b1bc0ea/c.html',
        'https://www.france24.com/en/asia-pacific/20261119-xi-trump-putin-talks-live-china-us-russia-leaders-hold-landmark-three-way-meeting',
        'https://www.koreatimes.co.kr/world/20261120/trump-xi-and-putin-release-peace-declaration-from-unprecedented-summit',
        'https://www.rferl.org/a/trump-and-putin-hold-brief-apec-meeting/33901539.html',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, no change. Putin's 19 Nov threat of a 'far more painful' response to the Kerch strikes was conventional, with no nuclear reference, and was followed by the 19–20 Nov missile strike. No new nuclear statements from Medvedev, Peskov, Lavrov, Ryabkov, Zakharova, Kim or Chinese officials. Trump repeated threats against Iran ('consequences unlike any previously imposed').",
      sources: [
        'https://www.themoscowtimes.com/2026/11/19/putin-vows-painful-retaliation-to-crimean-bridge-attacks-a94315',
        'https://www.cbsnews.com/live-updates/iran-war-us-gulf-retaliation-strikes-strait-of-hormuz/',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, no change. The Equinor cyberattack was still ongoing on 19 Nov, and a second Norwegian energy firm, Skagerak Energi, reported an attempted attack on 18 Nov (operations unaffected, no attribution). Genoa airport closed for several hours on 19 Nov after drone sightings; Paris CDG briefly held arrivals. Hoax bomb threats continue (Galicia school evacuations 18 Nov). No new GPS-jamming, cable or grid incident.",
      sources: [
        'https://www.aftenposten.no/okonomi/i/QroqVW/cyberangrep-mot-equinor-og-skagerak-energi-paagaar-fremdeles',
        'https://www.darkreading.com/cyberattacks-data-breaches/second-norwegian-energy-company-breached',
        'https://www.theflightclub.it/en/2026/11/allarme-droni-aeroporto-genova-droni-itaairways/',
        'https://www.usnews.com/news/world/articles/2026-11-18/hoax-bomb-threats-force-evacuation-of-several-schools-in-spain',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber (feed: VIX 28.4, gold −8.9% over five days), but not geopolitical. US stocks fell ~2% on 19 Nov (S&P 500 sixth straight loss) on an AI-valuation unwind and Fed-hike expectations; Asia heading for its worst week since 2020 (Nikkei −4%, KOSPI −5% on 20 Nov). Gold is falling, not rising (~$3,540–3,600), Brent ~$90–93, EUR/CHF ~0.926 with no flight to the franc. No market reaction to the Shenzhen summit.",
      sources: [
        'https://www.washingtonpost.com/business/2026/11/19/wall-street-stocks-dow-nasdaq/6aaf39d0-e463-11f1-a99e-b3e3805c6b8b_story.html',
        'https://www.investing.com/news/economy-news/asian-shares-head-for-worst-week-since-2020-as-ai-trade-gloom-fails-to-abate-5040496',
        'https://kitco.com/news/article/2026-11-19/gold-falls-below-3650-silver-tumbles-fed-rate-concerns-pressure-metals',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Amber (background). Gulf fighting continues without a clear new step up: Iranian drones at Kuwait and Bahrain on 18 Nov (intercepted) after the 17 Nov US strike on Qeshm; correction, the ADNOC ship was hit on 17 Nov (one missing). A Houthi strike damaged a Riyadh tower on 19 Nov. Iran claims more tankers mined (unverified); Hormuz restricted. US Senate war-powers resolution failed 48–51; reports say Trump weighs further strikes. Iran not in the Shenzhen declaration. No NPT vote, no nuclear tests.",
      sources: [
        'https://gulfnews.com/world/mena/middle-east-war-iran-attacks-bahrain-kuwait-drone-threats-keep-gulf-on-high-alert-as-us-hits-irans-qeshm-1.500751444',
        'https://www.cnn.com/2026/11/17/politics/us-iran-self-defense-strikes',
        'https://france24.com/en/middle-east/20261119-skyscraper-in-riyadh-damaged-as-saudi-arabia-reports-surge-in-new-houthi-attacks',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Fuel: no new official figures found after 18 Nov (Grand Est 14% then); the latest departmental readings (14 Nov) were 44% in Territoire de Belfort and 18% in Doubs (both Bourgogne-Franche-Comté, not Grand Est), so still fill up before the A36. Rhine at Kaub rising (~1.2 m on 19 Nov, weak sources). No strikes or blockades. Irish Ferries Cherbourg–Dublin still weather-hit but easing: 20 Nov Dublin–Cherbourg delayed up to 6 h. No Brittany Ferries disruption found. No Donegal warning in force.",
    sources: [
      'https://www.prix-carburants.gouv.fr/disponibilites-carburants',
      'https://lesvoitures.fr/penurie-carburant/',
      'https://www.irishferries.com/ie-en/sailing-updates/ireland-france/',
      'https://www.hgvireland.com/irish-ferries-cancels-all-rosslare-pembroke-sailings-as-bad-weather-also-hits-cherbourg-route/',
    ],
  },
};
