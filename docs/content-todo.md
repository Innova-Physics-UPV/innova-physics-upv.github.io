# Content still to come

The launch copy (approved 16 October 2026) is in. What is left is a handful of
facts only the team has, a few pictures and some decisions. Each entry names
the one file that holds it, so nothing has to be changed inside a component.
Every one of them can stay empty at launch: the page reads cleanly without it.

Every page exists in English, Spanish and Valencian. Each text is written with
its three languages side by side, as `{ en: '…', es: '…', va: '…' }` in the
data files and as `en:`, `es:`, `va:` in the YAML files. Spanish and Valencian
write decimals with a comma (2,998 GHz), English with a point. Research items
stay in the language they were written in. The words the masthead, the footer
and the small labels share are in `src/i18n/ui.ts`.

## Facts to set

| What | Where | While it is empty |
| --- | --- | --- |
| The vacuum-bench photo's month and place | `src/content/seasons/05-now.yaml` → `caption.text` | The caption reads "2026." |
| The page each partner wants linked | `src/data/partners.ts` → `url` | The current links stay |

Set on 17 October 2026: 50 students in 2026-27 and the next round in
February 2027 (`src/data/recruitment.ts`, change them each round); the team
photo's caption, "25/26 team photo."; Model-0's operating pressure, 1.7 Torr,
measured with a Pirani gauge on 7 July 2026; ETSIT's OK for the recruiting
talk, open to the whole school; the dossier, final.

## Pictures

| What | Where |
| --- | --- |
| A photo of Model-0 glowing, in colour, 3:2, at least 2000 px wide | `src/assets/photos/model-0-bench.webp` (the bench photo until then) |
| The accelECR poster session and the vacuum bench, larger, at least 2000 px wide | `src/content/seasons/04-cern.yaml`, `05-now.yaml` |
| One-ink vector logos for iTEAM and Edwards (masks of the white rasters until then) | `src/components/PartnerMark.astro` |
| Portraits for the members' cards still without one (Daniel Isliker, Jordi Samper, Javier García), square bust shots in colour, cropped like the others | `src/content/team/` and `src/assets/team/` |

## Decisions for Applied Physics

- Whether the einzel lens stays in ALOHA-1. It is gone from ALOHA-0; the
  hero and ALOHA-1 drawings still show it outlined (`src/data/figures.ts`).
- Whether the gesso layer of the two readings gets S Kα 2.308 keV (gypsum is
  calcium sulfate), or the ground is called chalk (`src/data/readings.ts`).

## Research (`/research/`)

At launch the page is only its cover, RESEARCH / COMING SOON, with `noindex`
and out of the sitemap. With the first item (one folder in
`src/content/research/`, see the README there) both switch back on their own.
The list page, its copy (copy tab 5.1, translated first) and Research's own
description go in with the posters.

## The team (`/join/#team`)

Direction's three cards show, with consent: Lluís Miquel García-Raffi
(tutor), then the two team leads, Marc Sanchis and Arlen Boesch. The members'
cards follow, name only: Daniel Isliker, Jordi Samper, Javier García and
Yuxiao Lin. A card without a photo shows a placeholder tile until it comes.
Any member who asks for a card gets one, with `consent: true` in its file
(`src/content/team/`).

## Past seasons (`/seasons/`, hidden)

The museum of IP0 (2023-24), IP1 (2024-25) and IP2 (2025-26) is built but not
published. IP0 holds the founding text that left the home, as a draft for its
coordinators. Each season is one file in `src/content/past-seasons/`: its title,
two or three lines and, if there is one, a photo, in the three languages. Once
they are filled in, `PAST_SEASONS_LIVE = true` in `src/consts.ts` publishes
the page and its links.

## Spanish and Valencian

The Spanish and Valencian of the launch copy were drafted with it (copy tab 8);
a native read of every page comes before launch.

## Legal notice and privacy

The UPV owns the site and is the data controller (decided 9 October 2026). The
copy of 16 October filled the last brackets: the team is within Generación
Espontánea; applications are deleted six months after the round is decided,
emails twelve months after the last message (those part of a sponsor or partner
agreement are kept while it lasts); Formbricks GmbH stores the applications on
servers in Germany under its data processing agreement. The UPV's data
protection officer gets the pages as a notice; anything the office asks for
goes in afterwards. Texts, write-ups, drawings and documents are CC BY 4.0, the
hardware CERN-OHL-S v2.

The pages are Markdown, one file per language: `src/pages/legal.md`,
`src/pages/es/legal.md`, `src/pages/va/legal.md` and the same for `privacy.md`
(layout `src/layouts/LegalLayout.astro`). A change goes into all three.
