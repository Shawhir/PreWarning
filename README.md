# PreWarning

A personal early-warning dashboard that answers one question: is a large-scale nuclear war becoming likely enough to act on the departure plan (Valbirse → Crolly / Carrickfinn)?

The indicator framework behind it is in [FRAMEWORK.md](FRAMEWORK.md).

## Using it

Open `index.html` in a browser. There is no build step and no server, and it works offline.

- **Top of the page:** threat status, departure window and escalation ladder level. Detail sits below, collapsed by default.
- **Indicators:** open a category to read what to watch for and how to grade it, then set green, amber or red with notes and sources. "Checked, no change" records a check without changing the reading. Each card shows a 14-day trend strip and flags when a check is due (daily, or monthly for strategic context).
- **Two-source rule:** a category can only be set to red with at least two sources listed, one per line.
- **Personal triggers:** tick one when it is met and a banner shows the pre-agreed action. The "amber for more than a week" trigger is computed from history.
- **History:** every change to the headline values is logged, so you can see later how many alerts were crises that passed.
- **Data:** everything is stored in this browser's `localStorage`. Use Export / Import JSON to back it up or move between devices. Print gives an offline copy of status, triggers and the plan.

The dashboard does not fetch news. Readings are entered by hand from the sources listed in the page, on purpose: no ticker, no feed, a once-a-day check.

## Hosting on GitHub Pages

`.github/workflows/pages.yml` runs the tests and publishes the dashboard to GitHub Pages on every push to `main` (or this branch), or manually from the Actions tab.

One-time setup: in the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**. The page is then at `https://shawhir.github.io/PreWarning/`.

Readings, notes and plan stay in each browser's `localStorage`. Nothing you enter is published, but the page itself (including the default routes) is public if Pages is public.

## Scoring

Implemented in `js/scoring.js` and following FRAMEWORK.md §4:

- **Red:** two high-weight categories red, or one high-weight red plus two other categories amber or worse.
- **Amber:** any high-weight category above green, or two or more medium-weight categories amber or worse.
- **Green:** otherwise.

Strategic context is background only. It is capped at amber and never counts towards the overall status. Markets (low weight) can count as one of the "two others" for red, but never raise the status on their own.

## Researched assessments

`js/assessment.js` holds a dated assessment (status, note and sources per category, plus ladder level). When the page loads a newer assessment, it updates every reading you have not checked by hand since that date, once, and logs it in History. Your own later readings always win.

## Editing the framework

Indicators, reading guides, triggers, sources and the baseline are in `js/config.js`.

## Tests

```sh
npm test
```
