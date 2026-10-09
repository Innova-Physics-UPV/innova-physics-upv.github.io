# CLAUDE.md

The new Innova Physics UPV website, built from scratch in Astro 7 on the
`new-web` branch. The old site stays live on `main` until this one replaces
it. Marc owns the repo and decides anything this file leaves open.

## Sources of truth

- `docs/website-spec.md`: the design handoff ("Fingerprint & Pentimento",
  round 3). What to build, in what order, and the rules. Read it first.
- The design canvas, https://claude.ai/artifact/MGyLTEg4oSEKtzBYSMvn9L: every
  artboard is HTML with inline styles; copy geometry, copy and colours from it.
  Its images live in the canvas's asset store.
- `design-system/tokens.json` (copied from
  https://claude.ai/artifact/1rD2qo4GC8qVYyVJsisWnJ): colours, type, spacing,
  spectrum energies. `src/styles/tokens.css` ports it.
- `CONTEXT.md`: team facts and decisions. Git-excluded; never commit it.
- `docs/content-todo.md`: every placeholder on the site and the file that
  holds it. Pages are built with placeholder content first; the team's
  content document fills them in. Keep copy in content and data files, not
  in components.

Research replaces the spec's Logbook (Marc, 7 October 2026): `/research/`
lists papers, posters and write-ups as blocks, each opening the item as
styled Markdown (`src/content/research/<folder>/index.md`, math with KaTeX
at build time).

## Where things live

| Path | Branch | What |
| :--- | :--- | :--- |
| `~/innova/innova-physics-upv.github.io` | `main` | The live old site. A push to `main` deploys to GitHub Pages. |
| `~/innova/innova-physics-upv.github.io-new-web` | `new-web` | This site. Experimental until Marc approves the switch. |

Start Claude Code from the `-new-web` folder for work on this site.

## Stack

- Astro 7, static output, GitHub Pages; Node 22.12 or later (CI pins Node 22).
  Astro 7 was released after Claude's training data: check its docs before
  relying on a remembered API (content collections live in
  `src/content.config.ts`, `z` comes from `astro/zod`).
- Content in collections with schemas: adding a season, post or person means
  adding a file, not code.
- Client JavaScript only in the motion module (`src/scripts/motion.ts`) and
  the Two readings Svelte island. Every page must read fully without it: the
  HTML is the finished state.
- Fonts self-hosted (TeX Gyre Heros from the design system, EB Garamond and
  Fragment Mono from `@fontsource`); no request to any third-party host.
- No new dependency without a reason in the commit message.

## URLs that must survive

`/email/marc-sanchis.jpg`, `/email/strip.png` and `/email/mark-tile.png`
(email signatures), `/dossier.pdf`, `/partners/` and `/`. GitHub Pages has no
server redirects, so a moved URL needs a forwarding page.

## Content rules

- English by default; every page also in Spanish (`/es/`) and Valencian
  (`/va/`, `lang="ca-ES-valencia"`, AVL norms), from one page in
  `src/pages/[...lang]/`. Every text is written `{ en, es, va }` side by side
  (`src/i18n/index.ts`); a research item stays in the language it was written
  in. A change to a text changes all three.
- One shout per page (the cover title in Heros Cn Bold capitals), one art line
  per section, one vermilion element per composition. No em dashes in copy.
- Aims, not promises. Every number has a unit and a status (SIMULATED ·
  COMSOL, DESIGN, DESIGN TARGET, BUILT, MEASURED with date and instrument).
  What has no design yet takes PLANNED (decided, not designed), PROPOSED (an
  idea under study) or AIM (a long-term goal) (Direction, 10 October 2026).
  Nothing on ALOHA-0 is measured yet. Copy says "electron source", never
  "gun".
- The CERN knowledge-transfer agreement is never called a partnership. CERN
  imagery only to explain, credited, never as a cover, never on Join or
  Partners (see the spec).
- People appear only with their consent (`consent: true` in the team
  collection). Partners appear only with their agreement; check `CONTEXT.md`
  before adding one, and never add one that has not agreed, not even hidden.
- Sponsorship 2026-27, all perks agreed. The euro minimums stay in the dossier,
  not on the page: Neutrino 100 €, Quark 500 €, Photon 3,000 €, Higgs
  10,000 € or by invitation, per season. Perks are cumulative:

| Perk | Neutrino | Quark | Photon | Higgs |
| :--- | :---: | :---: | :---: | :---: |
| Name on our website and public docs | ● | ● | ● | ● |
| Credit in the post about your support | ● | ● | ● | ● |
| Impact letter at the end of the season | ● | ● | ● | ● |
| Name or logo on the team shirt | ● | ● | ● | ● |
| Logo on the website, posts and roll-up | | ● | ● | ● |
| Closing slide of our talks | | ● | ● | ● |
| Logo on posters and the main roll-up | | | ● | ● |
| Formal polo and a plate on the machine | | | ● | ● |
| A named subsystem of the machine | | | | ● |
| A talk at our design challenge | | | | ● |
| Recruiting talk at ETSIT and our CV book | | | | ● |

## How to work

1. Follow the spec's build order; agree a plan with Marc before structural
   changes. Checkpoint 1 is the home (steps 1–5) plus the `/seasons` museum.
2. Small commits, one concern each, imperative messages. Commits are
   SSH-signed through 1Password, so Marc approves each one; if signing fails,
   stop and tell him.
3. `npm run build` and `npm run check` pass at every commit. Check pages at
   1440 px and 390 px, by day and by night, with and without reduced motion.
4. Ask before pushing `new-web` to GitHub (the repo is public and consent for
   the photos is pending), and never merge it into `main` without Marc's OK.

## Ask Marc, do not decide

- Anything visual the canvas and the spec do not cover.
- The event name: ELIAC or UPV Accelerator Design Challenge.
- New pages, partners or people, and anything this file does not cover.
