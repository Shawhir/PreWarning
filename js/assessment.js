// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-11: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-11',
  issuedAt: '2026-11-11T05:57:45Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band. New, night of 10–11 Nov: drones probably from Russia or Belarus triggered air alerts across eastern and central Latvia; Lithuania issued a shelter alert for Vilnius and Utena counties (~45 min), restricted Vilnius and Kaunas airports, and NATO jets were activated; one object briefly crossed into Poland. No shoot-downs, no Article 4. Russian strikes on Ukraine continued during the Abu Dhabi talks (162 drones, Iskander-M; power cut in Dnipro and Kamianske). Taiwan: China's Liaoning \"area denial\" drills continue; G7 opposes forced change; no blockade.",
      sources: [
        'https://eng.lsm.lv/article/society/defence/10.11.2026-air-alerts-across-large-parts-of-latvia-overnight.a671412/',
        'https://www.lrt.lt/en/news-in-english/19/3110468/lithuania-calls-off-air-alert-warning-in-vilnius-and-utena-regions',
        'https://unn.ua/en/news/russia-attacked-ukraine-with-ballistic-missiles-135-of-162-drones-were-neutralized',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise or launch since the 28 Oct Bulava; no unusual SSBN activity. The reported concentration of ~47 bombers at Ukrainka (single OSINT group, early November) is linked to conventional strikes on Ukraine, not nuclear signalling.",
      sources: [
        'https://united24media.com/war-in-ukraine/russia-masses-47-nuclear-capable-bombers-at-far-eastern-airbase-in-rare-fleet-concentration-24179',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. Lithuania's 10 Nov shelter alert for Vilnius and Utena was a short (~45 min) local drone alert, not a national civil defence activation. No leader relocations or emergency powers in Switzerland, Ireland or major NATO states.",
      sources: [
        'https://www.lrt.lt/en/news-in-english/19/3110468/lithuania-calls-off-air-alert-warning-in-vilnius-and-utena-regions',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, improving. Abu Dhabi day 1 (10 Nov) ran nearly 4 hours: no ceasefire, but Zelensky called it \"constructive and quite substantive\", Rubio \"very productive\", and the sides reportedly agreed a large prisoner swap. Day 2 outcome not yet reported. Russia expelled a Moldovan diplomat (single source). No \"leave now\" advisories.",
      sources: [
        'https://www.pravda.com.ua/eng/news/2026/11/10/8062157/',
        'https://united24media.com/world/ukraine-and-russia-reportedly-agree-to-large-scale-prisoner-exchange-in-abu-dhabi-24249',
        'https://www.npr.org/2026/11/10/g-s1-152773/russia-ukraine-war-talks',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No nuclear statements from Russian, Chinese, North Korean or US leaders found for 10–11 Nov (year-old Nov 2025 nuclear-testing stories keep resurfacing).",
      sources: [
        'https://www.aljazeera.com/news/2026/11/7/qeshm-island-and-hormuz-hit-as-mediators-try-to-prevent-us-iran-escalation',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax threats since 6 Nov (a group calling itself \"Mikhail Andropov\" claimed them; Moscow denies; no state blamed). No new cable damage, cyberattack or GPS surge.",
      sources: [
        'https://www.insurancejournal.com/news/international/2026/11/09/892102.htm',
        'https://time.com/article/2026/11/07/europe-bomb-threats-raise-fear-new-warfare/',
      ],
    },
    markets: {
      status: 'green',
      note: "Green (down from amber): a second calm day. Tue 10 Nov: S&P −0.4%, Nasdaq −0.7% on a hot October CPI (December Fed hike now ~84–97% priced); VIX 19.5; Brent ~$90–92; gold ~$4,030 (−2.5%); EUR/CHF ~0.920 (franc slightly weaker); STOXX 600 near a record. Signals feed green on all four. Hormuz is still closed, so watch oil.",
      sources: [
        'https://www.washingtonpost.com/business/2026/11/10/wall-street-stocks-dow-nasdaq/a8f8d958-dd4c-11f1-912c-4fbb80d73f7f_story.html',
        'https://gvwire.com/2026/11/10/wall-st-ends-lower-as-hot-inflation-data-fed-comments-heighten-rate-worries/',
        'https://finance.yahoo.com/markets/world-indices/articles/european-shares-near-record-high-101156381.html',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Paused. No new US–Iran event confirmed for 10–11 Nov; blockade stays, Iran holds to its seven demands. Taiwan: China's unannounced Liaoning drills ahead of APEC (18–19 Nov) and Taiwan's local elections. Israel: Knesset Speaker vote 17 Nov; Eisenkot holds the mandate. North Korea quiet since 4 Nov.",
      sources: [
        'https://www.taipeitimes.com/News/front/archives/2026/11/10/2003867493',
        'https://www.haaretz.com/israel-news/israel-politics/2026-11-10/ty-article/.premium/eisenkots-bloc-requests-vote-to-replace-netanyahu-ally-as-knesset-speaker/000001a1-c5bc-dba2-a9f9-d5fc26880000',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. French fuel: official figure ~12% of stations in difficulty on 10 Nov (15% on 9 Nov; single relaying source; other trackers higher), Grand Est 23%, Bas-Rhin ~50% by one count — fill up in Switzerland. New national union strike announced for 17 Nov; Gilets jaunes Acte V 14 Nov (no blockades announced), Acte VI ~20–22 Nov. Ferries running. Dublin: US Embassy security alert 10–13 Nov for EU summits (road closures; airport normal). Donegal: marine small-craft warning only.",
    sources: [
      'https://prix-du-carburant.com/actualites/ruptures-carburant-baisse-12-pourcent-10-novembre/',
      'https://fr.news.yahoo.com/manifestations-contre-vie-ch%C3%A8re-gilets-104506032.html',
      'https://www.irishtimes.com/ireland/dublin/2026/11/05/dublin-road-closures-what-to-expect-during-states-biggest-policing-operation/',
    ],
  },
};
