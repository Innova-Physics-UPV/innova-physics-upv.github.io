# Innova Physics UPV website

<img width="896" height="221" alt="innova_web_banner-fs8" src="https://github.com/user-attachments/assets/d4382211-5259-4b3e-8f1e-c25557fa01c8" />

Website for [Innova Physics UPV](https://innova-physics-upv.github.io/), built
with [Astro](https://astro.build/) and deployed to GitHub Pages.

**Live:** https://innova-physics-upv.github.io/

## Status

The **home page** and **`/partners`** are published. The other pages have been
started but are not finished, so they live in `src/pages/_wip/`: Astro does not
create routes for folders starting with `_`, which keeps the work around
without making the pages reachable.

To publish one, move it out of `_wip/`. The file name becomes the URL, so use
lowercase:

```sh
git mv src/pages/_wip/GetInvolved.astro src/pages/get-involved.astro
```

…then add its link back to `src/Components/Header.astro` and
`src/Components/Footer.astro`.

## Getting started

Requires Node 18.20.8+, 20.3+ or 22+ (CI uses 22).

```sh
npm install
npm run dev        # http://localhost:4321
```

| Command           | What it does                          |
| :---------------- | :------------------------------------ |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Local dev server at `localhost:4321`  |
| `npm run build`   | Build the site to `./dist/`           |
| `npm run preview` | Preview the build before shipping it  |

## Structure

```text
public/                 Assets served as-is from the site root
├── partners/           Partner logos (.svg)
├── curves*.webp        The background curves
└── Alfabet/            Brand typeface

src/
├── pages/
│   ├── index.astro     The home page
│   ├── partners.astro  /partners: partner logos, sponsorship levels beside them
│   └── _wip/           Unfinished pages, not routed
├── Layout/layout.astro Page shell: head, background, header and footer
├── Components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Home/           Home page sections
│   └── Partners/       /partners sections
├── data/
│   ├── partners.ts     Partner list (home and /partners)
│   └── sponsorship.ts  Sponsorship tiers and benefits
├── styles/globals.css  Design tokens and shared classes
└── consts.ts           Shared URLs (form, dossier, contact email)
```

Anything in `public/` is served from the root: `public/partners/teleco.svg`
ends up at `/partners/teleco.svg`.

### About `globals.css`

It holds the design tokens (typefaces, scale, colours, spacing) and the
utilities shared between components: `.contenedor`, `.btn`, the grids, the
background curves system (`.bg-wrapper` / `.bg-image-percent`) and the headings
with arrows. If something is used in more than one place it goes here; if it
belongs to a single component, it goes in that component's `<style>`.

## Deployment

Every push to `main` triggers `.github/workflows/astro.yml`, which runs
`npm ci`, `npm run build` and publishes `./dist/` to GitHub Pages. Nothing has
to be uploaded by hand, and the build output is never committed.

## Branches

| Branch     | What it is                                           |
| :--------- | :--------------------------------------------------- |
| `main`     | What is live                                          |
| `ip3-web`  | Working branch for this version                       |
| `ip2-web`  | The previous website (Next.js), kept as-is just in case |

`Home`, `Partners`, `Get-Involved` and `web-v3` are already folded into
`ip3-web`; `testing` and `prueba` belong to the old version.

## To do

- Finish the pages in `src/pages/_wip/`.
- The tiers and benefits in `src/data/sponsorship.ts` come from the Partnership
  Dossier 2026-27, which is `public/dossier.pdf`. The "Download the dossier"
  button on `/partners` only appears while that file exists (checked at build
  time), so there is never a link to a missing file. Update both together for
  a new season.
- To add a partner, drop its logo in `public/partners/` and add a line to
  `src/data/partners.ts` with its tier; it shows up on both the home page and
  `/partners` (grouped by tier there, Higgs first with the big cards).
- The "Partner with Us" and "Apply to ELIAC" buttons do not lead anywhere yet;
  they are marked with a `TODO` in the code.
- `@astrojs/svelte` is installed but no Svelte component is used. If it is not
  going to be needed, it can be removed.
