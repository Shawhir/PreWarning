// Framework content (FRAMEWORK.md). Edit here to change indicators,
// triggers, or the baseline.
(function (root) {
  'use strict';

  const LADDER = [
    { level: 0, situation: 'Normal rivalry, no major war', lead: 'Years', action: 'Nothing to do beyond basic preparedness.' },
    { level: 1, situation: 'Major war involving one nuclear power, routine nuclear rhetoric', lead: 'Years, possibly never', action: 'Keep plans current and passports valid.' },
    { level: 2, situation: 'Serious crisis between nuclear powers: incidents, ultimatums, talks broken off', lead: 'Months to weeks', action: 'Review the plan, check logistics, set money aside.' },
    { level: 3, situation: 'Direct conventional fighting between nuclear powers', lead: 'Weeks to days', action: 'Primary trigger zone. Leave while transport works normally.' },
    { level: 4, situation: 'Nuclear signalling: forces on alert, warheads moved, explicit threats tied to specific events', lead: 'Days to hours', action: 'Last realistic window to travel.' },
    { level: 5, situation: 'Any nuclear use', lead: 'Hours or none', action: 'Shelter in place. Do not travel.' },
  ];

  const CATEGORIES = [
    {
      id: 'posture',
      name: 'Nuclear force posture',
      weight: 'high',
      cadence: 'daily',
      watch: [
        'Ballistic missile submarines leaving port en masse (Northern Fleet, Faslane)',
        'Strategic bombers dispersing from main bases',
        'Tactical warheads moving from central storage to delivery units',
        'Announced or credibly leaked changes in alert level',
        'Large nuclear exercises off schedule or during a live crisis',
        'Unusual numbers of airborne command posts (E-4B, E-6B, Russian equivalents)',
      ],
      reading: {
        green: 'Routine exercises only, no abnormal posture changes.',
        amber: 'Any single unusual posture change.',
        red: 'Several changes at once, or any credible report of warheads moved to delivery units.',
      },
    },
    {
      id: 'continuity',
      name: 'Government continuity and civil defence',
      weight: 'high',
      cadence: 'daily',
      watch: [
        'Leaders relocating to protected sites or unexplained absences',
        'Swiss shelter readiness checks, civil protection mobilisation, Alertswiss warnings',
        'Iodine tablet distribution beyond normal schedules',
        'Emergency powers or martial law in NATO states',
        'Stockpile releases, fuel rationing, private flying restrictions',
      ],
      reading: {
        green: 'Nothing unusual.',
        amber: 'Ambiguous signs, e.g. an unexplained leader absence or unscheduled drills.',
        red: 'Any of these in a major NATO country or in Switzerland.',
      },
    },
    {
      id: 'conventional',
      name: 'Conventional conflict',
      weight: 'high',
      cadence: 'daily',
      watch: [
        'Direct NATO–Russia combat: strikes on NATO territory, shoot-downs, troops in contact',
        'NATO Article 4 consultations (amber), Article 5 invocation (red)',
        'Europe: Baltic states, Suwałki gap, Black Sea, Kaliningrad, Arctic',
        'Asia: Taiwan blockade or invasion, US–China clashes in the South China Sea',
        'South Asia: India–Pakistan strikes deep into either country',
      ],
      reading: {
        green: 'No war involving a nuclear power beyond routine tensions.',
        amber: 'Serious incidents or Article 4.',
        red: 'Sustained direct combat between nuclear powers, or Article 5.',
      },
    },
    {
      id: 'diplomacy',
      name: 'Diplomacy',
      weight: 'medium',
      cadence: 'daily',
      watch: [
        'Western embassy drawdowns or evacuation advice in Moscow, Beijing, front-line capitals',
        'FDFA and Ireland DFA advisories: "leave" is stronger than "avoid travel"',
        'Hotline use reported (crisis, but managed); talks broken off entirely (worse)',
        'Mass diplomatic expulsions, consulate closures',
      ],
      reading: {
        green: 'Normal diplomatic activity.',
        amber: 'Expulsions, talks suspended, "avoid travel" advisories.',
        red: 'Embassies advising citizens to leave, or communication broken off.',
      },
    },
    {
      id: 'rhetoric',
      name: 'Political rhetoric',
      weight: 'medium',
      cadence: 'daily',
      watch: [
        'Changes in kind, not volume',
        'Heads of state linking nuclear use to a specific event',
        'Ultimatums with deadlines, formal readiness announcements',
        'Sudden silence after a period of threats',
      ],
      reading: {
        green: 'Routine reminders, state TV threats, secondary officials.',
        amber: 'Heads of state linking nuclear use to a specific event.',
        red: 'Ultimatums with deadlines, formal readiness announcements, or sudden silence after threats.',
      },
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure and information warfare',
      weight: 'medium',
      cadence: 'daily',
      watch: [
        'Undersea cable cuts, particularly in the Baltic and North Sea',
        'Large-scale cyberattacks on grids, banks, communications in NATO states',
        'GPS jamming beyond the usual Baltic interference',
        'Satellite interference or anti-satellite weapon use',
      ],
      reading: {
        green: 'Background level of incidents.',
        amber: 'A sudden cluster of incidents.',
        red: 'Attacks causing national outages.',
      },
    },
    {
      id: 'markets',
      name: 'Markets and economic stress',
      weight: 'low',
      cadence: 'daily',
      watch: [
        'Gold, oil, Swiss franc spikes beyond normal volatility',
        'VIX at crisis levels',
        'War-risk insurance cancelled for shipping or aviation',
        'Airlines suspending routes or rerouting around wide areas',
      ],
      reading: {
        green: 'Normal volatility.',
        amber: 'Stress spikes. Confirmation only, never a trigger.',
        red: 'Crisis-level moves across several markets at once.',
      },
    },
    {
      id: 'strategic',
      name: 'Strategic context',
      weight: 'low',
      background: true,
      cadence: 'monthly',
      maxStatus: 'amber',
      watch: [
        'Arms control: New START expired Feb 2026; new talks (positive), CTBT withdrawal (negative)',
        'Resumed explosive nuclear testing by any major power',
        'Doctrine changes lowering thresholds for use',
        "Arsenal growth and forward deployments (China's build-up, Belarus)",
      ],
      reading: {
        green: 'Stable or improving.',
        amber: 'Deteriorating. This category never goes red on its own.',
        red: 'Not used.',
      },
    },
  ];

  const LOGISTICS = {
    id: 'logistics',
    name: 'Departure window',
    cadence: 'daily',
    watch: [
      'Seats and prices: Zurich, Basel, Geneva to Dublin and Belfast',
      'Ferries: Cherbourg–Rosslare, Cherbourg–Dublin, Roscoff routes',
      'Fuel availability and prices in Switzerland and France',
      'Swiss–French border status, Irish arrival rules',
      'Airspace closures and NOTAMs (private flying)',
    ],
    reading: {
      green: 'Transport normal.',
      amber: 'Prices spiking or seats selling out.',
      red: 'Routes suspended. If this goes red before the risk categories, the window is closing faster than the threat is rising.',
    },
  };

  // action: 'review' | 'leave' | 'leave-or-shelter' | 'shelter'
  const TRIGGERS = [
    { id: 'amber-week', text: 'Overall status amber for more than a week', action: 'review', detail: 'Review plan, confirm documents, check flights, move savings to accessible accounts.', auto: true },
    { id: 'direct-combat', text: 'Direct sustained combat between NATO and Russia, or US and China', action: 'leave', detail: 'Leave.' },
    { id: 'warheads', text: 'Credible reports of Russian tactical warheads moved to delivery units', action: 'leave', detail: 'Leave.' },
    { id: 'swiss-cd', text: 'Swiss civil defence mobilised or shelter checks ordered', action: 'leave-or-shelter', detail: 'Leave if transport is still normal, otherwise prepare to shelter.' },
    { id: 'embassies', text: 'Western embassies advising citizens to leave Moscow or Beijing, alongside amber military indicators', action: 'leave', detail: 'Leave.' },
    { id: 'detonation', text: 'Any nuclear detonation anywhere', action: 'shelter', detail: 'Shelter in place. Do not travel.' },
    { id: 'shelter-order', text: 'Shelter order from authorities', action: 'shelter', detail: 'Shelter in place. Do not travel.' },
  ];

  const SOURCES = [
    { name: 'Metaculus, Good Judgment Open', covers: 'Forecasts for nuclear use and great-power war', notes: 'Watch for sudden jumps, not absolute values', url: 'https://www.metaculus.com/' },
    { name: 'Institute for the Study of War', covers: 'Daily Russia–Ukraine and escalation assessments', notes: 'Good for conventional conflict', url: 'https://www.understandingwar.org/' },
    { name: 'FAS Nuclear Notebook', covers: 'Arsenals, deployments, posture', notes: 'Slow-moving but authoritative', url: 'https://fas.org/initiative/status-world-nuclear-forces/' },
    { name: 'Bulletin of the Atomic Scientists', covers: 'Strategic context, expert commentary', notes: 'Doomsday Clock is background only', url: 'https://thebulletin.org/' },
    { name: 'IISS, SIPRI', covers: 'Strategic context, military balance', notes: 'Reference rather than live', url: 'https://www.sipri.org/' },
    { name: 'ACLED, GDELT', covers: 'Conflict and event data', notes: 'ACLED needs registration; GDELT is free and noisy', url: 'https://acleddata.com/' },
    { name: 'FDFA travel advice', covers: 'Swiss travel advisories', notes: 'Strong signal when they change', url: 'https://www.eda.admin.ch/' },
    { name: 'Ireland DFA travel advice', covers: 'Irish travel advisories', notes: 'Strong signal when they change', url: 'https://www.ireland.ie/' },
    { name: 'Alertswiss', covers: 'Swiss civil defence alerts', notes: 'Install the app: the authoritative local channel', url: 'https://www.alert.swiss/' },
    { name: 'ADS-B Exchange, Flightradar24', covers: 'Airspace closures, unusual military flights', notes: 'Military aircraft often hidden on commercial trackers', url: 'https://globe.adsbexchange.com/' },
    { name: 'EUROCONTROL, NOTAM services', covers: 'Airspace restrictions', notes: 'For private flying', url: 'https://www.eurocontrol.int/' },
    { name: 'Irish Ferries, Stena Line, Brittany Ferries', covers: 'Route status and capacity', notes: 'Cherbourg and Roscoff routes', url: 'https://www.irishferries.com/' },
    { name: 'Market data (gold, oil, CHF, VIX)', covers: 'Supporting stress signals', notes: 'Confirmation only', url: null },
    { name: 'Open-source analysts', covers: 'Submarines, bombers, satellite imagery', notes: 'Fast but variable. Require two independent sources', url: null },
  ];

  // §8 baseline as of mid-2026.
  const BASELINE = {
    asOf: '2026-07-01',
    ladder: 1,
    categories: {
      strategic: { status: 'amber', note: "New START has expired, China's arsenal is growing, and Russia has lowered its stated threshold for use." },
      conventional: { status: 'amber', note: 'Russia–Ukraine war continues, with periodic incidents involving NATO airspace and infrastructure, but no sustained direct NATO–Russia combat.' },
      posture: { status: 'green', note: 'Green to amber: routine exercises and rhetoric, no confirmed abnormal posture changes.' },
      continuity: { status: 'green', note: '' },
      diplomacy: { status: 'green', note: '' },
      rhetoric: { status: 'green', note: 'Russian nuclear rhetoric is near-constant since 2022 and largely routine.' },
      infrastructure: { status: 'green', note: '' },
      markets: { status: 'green', note: '' },
    },
    logistics: { status: 'green', note: '' },
  };

  const api = { LADDER, CATEGORIES, LOGISTICS, TRIGGERS, SOURCES, BASELINE };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.Config = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);
