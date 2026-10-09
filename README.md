# Innova Physics UPV website

The website of [Innova Physics UPV](https://innova-physics-upv.github.io/), the
student team at the Universitat Politècnica de València that designs and builds
ALOHA, an open-hardware tabletop electron accelerator. Built with
[Astro](https://astro.build/) 7, static, deployed to GitHub Pages.

**Status:** this is the new site, on the `new-web` branch. Its content is still
placeholder (see [Before it goes live](#before-it-goes-live)); `main` keeps the
current site live until the new one is merged.

## Getting started

Requires Node 22.12 or later (CI uses Node 22).

```sh
npm install
npm run dev        # http://localhost:4321
```

| Command           | What it does                                              |
| :---------------- | :-------------------------------------------------------- |
| `npm run dev`     | Local dev server                                          |
| `npm run check`   | Type-check the pages and validate every content file     |
| `npm run build`   | Build the site to `./dist/`                               |
| `npm run preview` | Serve the build, to see it exactly as it will be deployed |

**The dev server keeps stale settings.** After changing `astro.config.mjs`,
`src/lib/markdown-plugins.mjs` or `src/content.config.ts`, stop it, delete
`.astro/data-store.json` and start it again; otherwise it can keep serving an
old version of the content.

## Structure

```text
src/
├── pages/                 One file per page; the file name is the URL
│   ├── index.astro        /          the home: cover, team, story, readings, join, partners
│   ├── machine.astro      /machine/  ALOHA stage by stage
│   ├── research/          /research/ and one page per item
│   ├── join.astro         /join/     (and es/join.astro, va/join.astro)
│   ├── partners.astro     /partners/
│   ├── seasons.astro      /seasons/  the museum of past seasons
│   └── 404.astro
├── content/               The content, one file per thing (see below)
│   ├── seasons/           The home's story, one station per file
│   ├── past-seasons/      The museum, IP-0 to IP-2
│   ├── research/          One folder per paper, poster or write-up
│   └── team/              One file per team member (only with consent)
├── data/                  Page copy and lists kept in TypeScript
├── i18n/join.ts           The Join page in English, Spanish and Valencian
├── components/            The building blocks (Cover, Section, Sheet, …)
├── layouts/Base.astro     Every page's head, masthead and footer
├── scripts/motion.ts      Every scroll-linked movement, in one module
├── styles/                tokens.css (design tokens), base.css, motion.css, prose.css
└── assets/                Photos, figures, logos and fonts (optimised at build time)
public/                    Served as-is: dossier.pdf, email/, partners/, licences, icons
design-system/             The design system's tokens, licences and tools
docs/                      The website spec, the content to fill in, the launch steps
```

The design and its rules are in `docs/website-spec.md` and `CLAUDE.md`. Colours,
type and spacing come from `src/styles/tokens.css`; never write a colour by
hand in a component.

## Editing the content

Content is data, not code: almost every change is one file. `npm run check`
tells you if a file is missing a field.

| To…                                 | Do this                                                                                                                                                                                                          |
| :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add a paper, poster or write-up     | Add a folder to `src/content/research/` with an `index.md` (or `index.mdx` to use `<Datum>` or `<Term>`) and its pictures. Copy an existing item for the front matter. Math is LaTeX between `$…$` or `$$…$$`. |
| Add a team member                   | Add `src/content/team/<name>.yaml` with `consent: true` (nobody is published without it), their photo in `src/assets/team/` (3:4, colour) and, if they want, `linkedin:` with the part after `linkedin.com/in/`. |
| Add a partner                       | Only once they have agreed. Add a line to `src/data/partners.ts` with its tier, and its logo in one ink (see `src/components/PartnerMark.astro`).                                                                 |
| Move the story on a season          | Move `now: true` to the new station in `src/content/seasons/`.                                                                                                                                                 |
| Open or close the recruitment round | Change the dates in `src/data/recruitment.ts`. The site rebuilds every night, so "Apply now" turns into "Tell me when it opens" on its own the morning after the closing date.                                 |
| Change the machine's numbers        | `src/data/machine.ts`. Every number carries a unit and a status (SIMULATED · COMSOL, DESIGN, BUILT, MEASURED with date and instrument).                                                                          |
| Change the dossier                  | Replace `public/dossier.pdf`; the download button only appears while the file exists.                                                                                                                           |

Photos go in `src/assets/` (not `public/`): Astro makes AVIF and WebP copies at
the sizes each screen needs. Give every photo alt text that says who and what.
New logos go through SVGO first (`design-system/README.md`).

## Deployment

Every push to `main` runs `.github/workflows/astro.yml`: `npm ci`,
`npm run check`, `npm run build`, then publishes `./dist/` to GitHub Pages
(Settings › Pages › Source: GitHub Actions). Nothing is uploaded by hand and the
build is never committed.

The same workflow also runs every night at 03:30 UTC, so whatever depends on
the date (the recruitment round) is never more than a day out of date. GitHub
pauses scheduled runs after 60 days without a commit; the Actions tab shows it,
and "Enable workflow" there turns them back on. To rebuild at once, run the
workflow by hand (Actions › "Deploy Astro site to GitHub Pages" › Run workflow).

These addresses are used outside the site and must keep working:
`/email/marc-sanchis.jpg`, `/email/strip.png`, `/email/mark-tile.png` (email
signatures), `/dossier.pdf` and `/partners/`. GitHub Pages has no server
redirects, so a page that moves needs a forwarding page at its old address.

## Before it goes live

- `docs/content-todo.md`: every placeholder on the site and the file that holds it.
- `docs/go-live.md`: the steps to launch, and what to check afterwards.

## Branches

| Branch    | What it is                                     |
| :-------- | :--------------------------------------------- |
| `main`    | What is live; a push deploys it                |
| `new-web` | This site, until it is merged into `main`      |
| `ip3-web` | The interim version of the old site            |
| `ip2-web` | The previous website (Next.js), kept as it was |

## Licences

Fonts: TeX Gyre Heros (GUST Font License), EB Garamond and Fragment Mono (SIL
Open Font License); their licences are served from `/licenses/`.
