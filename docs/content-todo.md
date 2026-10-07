# Content to fill in

Every page of the new site is built with placeholder content: copy from the
design canvas where it exists, plausible temporary text where it does not.
Marc's content document replaces it. Each entry says what is a placeholder
and the one file that holds it, so nothing has to be changed inside a
component.

## The machine (`/machine/`)

| What | Where |
| --- | --- |
| Cover kicker, lead | `src/pages/machine.astro` (Cover props) |
| Stages: kicker, title, status, body, numbers, picture, caption | `src/data/machine.ts` → `stages` |
| Labels on the hero figure | `src/data/machine.ts` → `heroLabels` |
| This year: lead and the five milestones | `src/data/machine.ts` → `year` |
| Open: CERN-OHL-S, GitHub, Handbook | `src/data/machine.ts` → `open`; URLs in `src/consts.ts` |
| Model-0 photo (a photo of Model-0 glowing, in colour, is wanted) | `src/assets/photos/model-0-bench.webp` |

Open questions, decided by the content document:

- Model-0's "Pressure ~1 Torr" is marked BUILT, as drawn. A pressure is a
  measurement: MEASURED needs a date and an instrument.
- The roadmap draws this season's committed items as solid markers; elsewhere
  solid means built.
- The docs repository and the handbook have no URL yet, so no link is shown.
