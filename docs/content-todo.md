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

## Research (`/research/`)

Each item is one folder in `src/content/research/` with an `index.md` (or
`index.mdx` when it uses `Datum` or `Term`) and its pictures. The front
matter is described in `src/content.config.ts`.

| Item | Status | What is a placeholder |
| --- | --- | --- |
| `aloha-0-electron-source` | write-up, published | Authors; the copy is the canvas's Logbook 01 plus a "Space charge" section added to show the math |
| `democratising-particle-accelerators` | poster, presented | Everything but the title and the venue: authors, text, the venue's link (Indico), the PDF |
| `aloha-0-telefocus-source` | poster, presented | Title, authors, text, venue link, PDF (the second CERN poster) |
| `vacuum-system` | write-up, coming | Title and expected month |

Page copy (cover, list title, closing sheet): `src/data/research.ts`.

## Join (`/join/`) and the team

| What | Where |
| --- | --- |
| Every word on the page (cover, departments, ladder, team, closing sheet) | `src/i18n/join.ts` → `en` (and `es`, `ca-ES-valencia`) |
| Departments' tools and fingerprint lines | `src/i18n/join.ts` → `departmentFacts` |
| The round: season, closing date | `src/data/recruitment.ts`; the form in `src/consts.ts` (`FORM_URL`, `WAITLIST_URL`) |
| Cover photo, the team at CERN (consent of the seven people pending) | `src/assets/photos/team-at-cern-2026.webp` |
| Department logos (from the canvas) | `src/assets/logos/departments/` |
| Team members: one file each, `consent: true` required | `src/content/team/*.yaml` (only Marc for now) |

## Partners (`/partners/`)

| What | Where |
| --- | --- |
| Cover, benefits notes, dossier sheet | `src/data/partners-page.ts` |
| Partners (only those who have agreed) | `src/data/partners.ts` |
| Tiers and benefits (no amounts on the page) | `src/data/sponsorship.ts` |
| The dossier PDF (the download hides itself if the file is missing) | `public/dossier.pdf` |
| One-ink vector logos for iTEAM and Edwards (masks of the white rasters until then) | `src/components/PartnerMark.astro` |

## Spanish and Valencian (`/es/join/`, `/va/join/`)

Drafts written from the English page, for the team to review: `es` and
`ca-ES-valencia` in `src/i18n/join.ts`. The Valencian follows the AVL norms
(unix-te, construïxen, este, s’òbriga). The masthead and the footer stay in
English on these pages, as the spec leaves them.
