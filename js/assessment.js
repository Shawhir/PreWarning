// Researched assessment applied to the dashboard on load (see app.js
// applyAssessment). Applied once per issuedAt, and only to readings not
// checked by hand since. Set to null when there is nothing to publish.
//
// 2026-11-06: daily check, compiled from dated news search results. Source
// pages could not be opened directly, so key facts should be confirmed by hand.
window.Assessment = {
  date: '2026-11-06',
  issuedAt: '2026-11-06T05:56:51Z',
  ladder: 2,
  categories: {
    conventional: {
      status: 'amber',
      note: "Amber, top of band, no change. No new Kaliningrad border incident, Baltic drone incursion or Black Sea ship attack confirmed for 5–6 Nov (Latvia says one of the 1–2 Nov drones was a Russian Geran). Poland's border operation runs to 8 Nov. Moderate Russian strike on Ukraine overnight 4–5 Nov (128 drones, 2 missiles). No Article 4. Background: Russia's 1 Oct note threatening nuclear use if Kaliningrad were cut off.",
      sources: [
        'https://www.cnn.com/2026/11/03/europe/ukraine-black-sea-drone-attacks-intl',
        'https://www.themoscowtimes.com/2026/10/01/putin-says-world-is-living-through-a-dangerous-moment-warns-west-not-to-escalate-a93846',
      ],
    },
    posture: {
      status: 'green',
      note: "Close to amber, no change. No Russian strategic exercise, ICBM/SLBM launch or unusual bomber/SSBN activity found for 5–6 Nov; last strategic launch remains the 28 Oct Bulava.",
      sources: [
        'https://russianforces.org/blog/',
      ],
    },
    continuity: {
      status: 'green',
      note: "No change. No civil defence activation, leader relocation or emergency powers found for 5–6 Nov.",
      sources: [
        'https://euronews.com/my-europe/2026/09/03/with-an-eye-on-russia-finland-runs-europes-largest-civil-defence-exercise-since-wwii',
      ],
    },
    diplomacy: {
      status: 'green',
      note: "Green, borderline amber on Iran. No US–Iran deal: Iran sent a new nuclear proposal via Qatar on 5 Nov but says it will only discuss it after seven US preconditions (sanctions, frozen assets, reparations); Rezaei says Hormuz stays closed until then. Abu Dhabi Ukraine–Russia talks still on for 10–11 Nov. Trump reported attending APEC (18–19 Nov); three-way meeting unconfirmed. No new expulsions or \"leave\" advisories.",
      sources: [
        'https://www.haaretz.com/middle-east-news/iran/2026-11-06/ty-article/iran-sent-nuclear-proposal-to-u-s-via-qatar-senior-iranian-official-says/000001a1-ae09-dd7a-a3ed-ef4969d10000',
        'https://www.arabnews.com/middle-east/iran-sent-nuclear-proposal-to-the-us-via-qatar-senior-iranian-official-says-3010067',
      ],
    },
    rhetoric: {
      status: 'amber',
      note: "Amber, holding. No Russian nuclear statements or ultimatums found for 5–6 Nov. Trump's latest (2–3 Nov): could strike Pickaxe Mountain \"relatively soon\" but prefers a deal. A claim of a planned US nuclear strike on Iran (Tucker Carlson) was found baseless by Snopes on 5 Nov.",
      sources: [
        'https://www.snopes.com/news/2026/11/05/trump-iran-nuclear-strike/',
        'https://www.iranintl.com/en/202611031851',
      ],
    },
    infrastructure: {
      status: 'amber',
      note: "Amber. New on 5 Nov: bomb threats against 27 passenger flights across Europe; flights to Poland disrupted, a Milan–Warsaw flight diverted to Vienna, Bulgarian MiG-29s escorted three Ryanair flights. Not yet attributed; fits the hybrid-pressure pattern. A Finnish court jailed the captain of the Fitburg over the Dec 2025 Gulf of Finland cable damage (verdict on an old event). No new cable cuts or GPS surge.",
      sources: [
        'https://www.geo.tv/latest/689943-fighter-jets-scrambled-as-bomb-threats-target-27-passenger-flights-across-europe',
        'https://www.aerotime.aero/articles/bomb-threats-europe-flights-fighter-escorts-diversions',
        'https://euronews.com/2026/11/05/finnish-court-jails-russian-captain-over-baltic-sea-cable-sabotage',
      ],
    },
    markets: {
      status: 'amber',
      note: "Amber, top of band; stress back up. Thu 5 Nov: S&P 500 −4.4%, Nasdaq −5.5% (correction), Dow −3.4% on an AI/chip selloff after the midterms (not the war); VIX ~28 (signals feed amber). Brent rebounded +3.9% to $98.29 on renewed Hormuz tanker strikes, ~$99 Friday. Nikkei −5.9% Friday (bear market). Gold ~$4,050–4,100; EUR/CHF ~0.918 (franc steady). Not crisis-level across markets yet (VIX red is 35).",
      sources: [
        'https://www.cnbc.com/2026/11/05/stock-market-selloff-ai-fears.html',
        'https://www.nationthailand.com/news/world/40073162',
        'https://abc.net.au/news/2026-11-06/asx-markets-business-live-news/107353758',
      ],
    },
    strategic: {
      status: 'amber',
      note: "Deteriorating again. Hormuz attacks continued on 5 Nov: UKMTO confirmed a tanker hit by two projectiles off Qatar; the IRGC says two tankers and a tug caught fire (blames mines; US rejects). The \"deal within 36 hours\" did not happen; Iran's proposal is conditional and Hormuz stays closed. No new US or Israeli strikes since Qeshm (2–3 Nov). North Korea's 4 Nov launches were its fourth show of force in a week.",
      sources: [
        'https://www.aljazeera.com/news/2026/11/5/iran-says-tankers-struck-in-hormuz-amid-fears-of-new-us-attack',
        'https://english.alarabiya.net/amp/News/middle-east/2026/11/05/iran-says-two-tankers-and-tugboat-caught-fire-in-strait-of-hormuz',
        'https://www.iranintl.com/en/202611053453',
      ],
    },
  },
  logistics: {
    status: 'amber',
    note: "Amber. The 5 Nov strike passed with flights running (no DGAC cuts) and trains disrupted; 448 arrests in clashes in Paris, Lyon, Rennes and Toulouse. Now: Gilets jaunes \"six-seven\" actions — strikes and blockades Fri 6 Nov, protests Sat 7 Nov (51 actions listed, locations unknown) — watch roundabouts and the A36 corridor this weekend. Fuel: 13.7% of French stations short of at least one fuel on 6 Nov (single tracker), up slightly. Bomb threats on European flights 5 Nov (see infrastructure). Ferries running; no Donegal warning; Swiss–Irish flights normal.",
    sources: [
      'https://mistertravel.news/2026/11/05/greve-du-5-novembre-trains-perturbes-vols-maintenus/',
      'https://www.cnews.fr/france/2026-11-04/six-seven-des-gilets-jaunes-en-quoi-consiste-ce-mouvement-prevu-en-fin-de-semaine',
      'https://gasbu.app/fr/direct/six-seven-6-7-novembre-2026',
    ],
  },
};
