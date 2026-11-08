// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-08: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-08',
  issuedAt: '2026-11-08T05:57:31Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. No new Kaliningrad, Baltic or NATO-airspace incident for 7–8 Nov (Tusk's warning window runs to mid-November); no Article 4. Large Russian strike on Kyiv overnight 6–7 Nov (Iskander-M, Zircon and KN-23 missiles plus 172 drones; only 4 missiles intercepted; Pivnichnyi Bridge hit). Correction: Russia claimed hits on cargo ships near Odesa on 2, 4 and 5–6 Nov (unverified). Taiwan: AEI suggests China may be running a large unannounced encirclement exercise (6 Nov, single source).",
      sources: [
        'https://www.pravda.com.ua/eng/news/2026/11/07/8061685/',
        'https://gvwire.com/2026/11/07/russia-pounds-power-facilities-around-kyiv-damages-major-bridge/',
        'https://www.aljazeera.com/news/2026/11/5/russia-says-it-hit-ukrainian-postal-hub-and-ship-as-ukraine-strikes-ryazan',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, ICBM/SLBM launch or unusual bomber/SSBN activity found for 7–8 Nov; last strategic launch the 28 Oct Bulava. (Iran's missile-range announcement is conventional; see strategic context.)",
      sources: [
        'https://russianforces.org/blog/2026/',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found in Europe for 7–8 Nov.",
      sources: [
        'https://thedefensepost.com/2026/09/04/finland-wartime-civil-defense-drill/',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green. Abu Dhabi Ukraine–Russia talks still set for 10–11 Nov (Kremlin and Zelensky confirm; Medinsky leads). US–Iran talks via Qatar continue alongside limited US strikes (counted under strategic context); Araghchi spoke to 12 foreign ministers in 48 hours. No new expulsions, drawdowns or \"leave\" advisories.",
      sources: [
        'https://www.devdiscourse.com/article/international/4001144-kremlin-confirms-trilateral-ukraine-peace-talks-in-abu-dhabi-next-week',
        'https://unn.ua/en/amp/ukraine-and-russia-will-hold-talks-in-abu-dhabi-on-november-10-11-witkoff',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums found for 7–8 Nov; nothing new from Moscow on Kaliningrad or Poland. Trump says \"we've made a lot of progress with Iran\" while confirming strikes.",
      sources: [
        'https://www.euronews.com/2026/11/07/us-launches-new-targeted-strikes-on-iran-as-trump-claims-progress-in-talks-with-tehran',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber, holding. No new hoax wave on 7–8 Nov. Investigations continue: security services reportedly suspect Russia for at least 35 flight threats on 3–6 Nov; the Irish threat email was signed \"Mikhail Andropov\" (Gardaí investigating); French prosecutors probing foreign involvement; no arrests, no formal attribution. No new cable damage, GPS surge or infrastructure cyberattack.",
      sources: [
        'https://www.washingtontimes.com/news/2026/nov/7/know-hoax-bomb-threats-targeted-european-flights/',
        'https://www.thenationalnews.com/news/europe/2026/11/07/race-to-find-hoaxers-behind-europes-flight-disruption/',
        'https://time.com/article/2026/11/07/europe-bomb-threats-raise-fear-new-warfare/',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, no change. Markets closed for the weekend; Friday levels stand (S&P week ~−2.7%, VIX ~24–25.6, Brent ~$98, gold ~$4,050–4,080, EUR/CHF ~0.914). Watch Monday's open after the weekend's US strikes on Iran and the new US blockade task force.",
      sources: [
        'https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-nov-06-2026',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Escalating. Trump confirmed new \"minor strikes\" on an air-defence site on Qeshm (6–7 Nov) and claims progress in talks; IRNA reported explosions on Qeshm and at Jask, Sirik and Bandar Abbas on 8 Nov (cause unconfirmed). CENTCOM launched \"Task Force Iron Gate\" to block Iran's land and Caspian supply routes. The IRGC says it has lifted its self-imposed 2,000 km missile-range limit after the Supreme Leader's \"no geographic limits\" order — beyond 2,000 km would reach much of Europe, though Iran is not known to have such missiles yet. Hormuz closed; UAE rescued 22 crew from a burning ship.",
      sources: [
        'https://www.cnbc.com/2026/11/07/trump-us-minor-strikes-iran-qeshm-island.html',
        'https://www.aljazeera.com/news/2026/11/8/us-launches-task-force-to-disrupt-irans-land-based-supply-routes',
        'https://www.timesofisrael.com/irgc-says-its-self-imposed-limit-on-ballistic-missile-range-has-been-lifted/',
        'https://www.arabnews.pk/middle-east/iran-says-it-has-lifted-its-self-imposed-limit-on-missile-ranges-3006424',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. Gilets jaunes Acte IV (7 Nov): ~146,000 marchers nationally (Interior Ministry), 360 arrests, clashes at the end; Besançon ~4,000, 17 arrests; no A36, Belfort or Mulhouse blockade reported; no refinery or depot blockade. Fuel: one tracker shows 18.3% of stations short of at least one fuel on 7 Nov (up from ~13%; unconfirmed) — fill up in Switzerland. Ferries running; Met Éireann fog warning 7–8 Nov excludes Donegal; flights normal.",
    sources: [
      'https://www.franceinfo.fr/economie/greve/direct-mobilisation-du-7-novembre-suivez-avec-nous-cette-nouvelle-journee-de-manifestations_8272010.html',
      'https://actu.orange.fr/france/mobilisation-du-7-novembre-146-000-personnes-mobilisees-en-france-des-heurts-eclatent-a-la-fin-des-corteges-l-express-via-6medias-CNT000002tBu0Y.html',
      'https://gasbu.app/fr/direct/six-seven-6-7-novembre-2026',
    ],
  },
};
