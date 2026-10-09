# Content to fill in

Every page of the new site is built with placeholder content: copy from the
design canvas where it exists, plausible temporary text where it does not.
Marc's content document replaces it. Each entry says what is a placeholder
and the one file that holds it, so nothing has to be changed inside a
component.

Every page exists in English, Spanish and Valencian (decided 9 October
2026). Each text is written with its three languages side by side, as
`{ en: '…', es: '…', va: '…' }` in the data files and as `en:`, `es:`, `va:`
in the YAML files, so a change in one language sits next to the two that must
follow it. Research items are the exception: they stay in the language they
were written in. The words the masthead, the footer and the small labels share
are in `src/i18n/ui.ts`.

## The home (`/`)

| What | Where |
| --- | --- |
| Cover, team, story, target and Join call; the cover figure's labels | `src/data/home.ts` |
| The story's six stations | `src/content/seasons/*.yaml` |
| The two readings: layers, X-ray lines and their words | `src/data/readings.ts` |
| The team photo's season (`[SEASON]`) and Model-0's season | `src/data/home.ts`, `src/content/seasons/02-model-0.yaml` |

## Past seasons (`/seasons/`, hidden)

The museum of IP-0 to IP-2 is built but not published (Direction, 9 October
2026). Each season is one file in `src/content/past-seasons/`: its years,
title, two or three lines and, if there is one, a photo, in the three
languages. Once they are filled in, `PAST_SEASONS_LIVE = true` in
`src/consts.ts` publishes the page and its links.

## The machine (`/machine/`)

| What | Where |
| --- | --- |
| Cover, legend, the page's own words | `src/data/machine.ts` → `machinePage` |
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

Page copy (cover, list title, closing sheet, the labels of the blocks):
`src/data/research.ts`. On the Spanish and Valencian index each block says
it is in English.

## Join (`/join/`) and the team

| What | Where |
| --- | --- |
| Every word on the page (cover, departments, ladder, team, closing sheet) | `src/i18n/join.ts` → `en`, `es`, `va` (one object per language) |
| Departments' tools and fingerprint lines | `src/i18n/join.ts` → `departmentFacts` |
| The round: season, closing date | `src/data/recruitment.ts`; the form in `src/consts.ts` (`FORM_URL`, `WAITLIST_URL`) |
| Cover photo, the team at CERN (consent of the seven people pending) | `src/assets/photos/team-at-cern-2026.webp` |
| Department logos (from the canvas) | `src/assets/logos/departments/` |
| Team members: one file each, `consent: true` required, `linkedin:` the handle after linkedin.com/in/ (the photo and name link there) | `src/content/team/*.yaml` (only Marc for now) |

## Partners (`/partners/`)

| What | Where |
| --- | --- |
| Cover, benefits notes, dossier sheet | `src/data/partners-page.ts` |
| Is there a Spanish dossier? The ES and VA pages say the PDF is in English | `src/data/partners-page.ts` → `dossier.kicker` |
| Partners (only those who have agreed) | `src/data/partners.ts` |
| Tiers and benefits (no amounts on the page) | `src/data/sponsorship.ts` |
| The dossier PDF (the download hides itself if the file is missing) | `public/dossier.pdf` |
| One-ink vector logos for iTEAM and Edwards (masks of the white rasters until then) | `src/components/PartnerMark.astro` |

## Spanish and Valencian (every page, under `/es/` and `/va/`)

The team reviewed the Join page on 9 October 2026. Everything else is a
draft written from the English, for the team to review: the home, the
machine, research, partners, past seasons, the legal pages, the masthead and
the footer. The Valencian follows the AVL norms (unix-te, construïx, este,
s’òbriga, xarrada). Choices to confirm:

- "Partners" is COLABORADORES / COL·LABORADORS (it covers institutions and
  sponsors); the motto "Build the beam" is translated (CONSTRUYE EL HAZ,
  CONSTRUÏX EL FEIX). Both could stay in English as brand lines.
- Write-up is "informe"; "aim" is "aspiración" / "aspiració", to keep it
  apart from "objetivo de diseño" (design target).
- Numbers keep the decimal point in every language (2.998 GHz), as the
  design system's fingerprint lines do; Spanish and Valencian usage would
  write 2,998.
- Between about 1030 and 1100 px wide the Spanish and Valencian masthead
  takes two rows (English fits in one).

## Legal notice and privacy (`/legal/`, `/privacy/` and their `/es/` and `/va/` versions)

Drafts with the UPV as owner (decided 9 October 2026), for the UPV's data
protection officer and Generación Espontánea to review. The UPV's NIF,
address, phone and DPO address come from its own legal notice and privacy
policy. Still in [brackets] on the pages:

- the unit the team belongs to: Generación Espontánea or ETSIT;
- whether the team's form and inbox fall under the UPV as data controller;
- how long applications and emails are kept;
- where Formbricks stores the applications, and its data processing agreement.

Decided on 10 October 2026: texts, write-ups, drawings and documents are
CC BY 4.0, the hardware CERN-OHL-S v2; photos of people and others' marks are
not covered.

The pages are Markdown, one file per language: `src/pages/legal.md`,
`src/pages/es/legal.md`, `src/pages/va/legal.md` and the same for `privacy.md`
(layout `src/layouts/LegalLayout.astro`). A change goes into all three.
Remove the "Draft for review" note once they are approved.
