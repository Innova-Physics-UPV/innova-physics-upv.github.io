# Innova Physics UPV website

<img width="896" height="221" alt="innova_web_banner-fs8" src="https://github.com/user-attachments/assets/d4382211-5259-4b3e-8f1e-c25557fa01c8" />

Website for [Innova Physics UPV](https://innova-physics-upv.github.io/), built
with [Astro](https://astro.build/) and deployed to GitHub Pages.

**Live:** https://innova-physics-upv.github.io/

## Status

Only the **home page** is published right now. The other pages have been
started but are not finished, so they live in `src/pages/_wip/`: Astro does not
create routes for folders starting with `_`, which keeps the work around
without making the pages reachable.

To publish one, move it out of `_wip/`:

```sh
git mv src/pages/_wip/Partners.astro src/pages/Partners.astro
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
│   ├── index.astro     The home page (only published route)
│   └── _wip/           Unfinished pages, not routed
├── Layout/layout.astro Page shell: head, background, header and footer
├── Components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── Home/           Home page sections
├── styles/globals.css  Design tokens and shared classes
└── consts.ts           Shared URLs (form, dossier)
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
- The dossier still needs uploading to `public/dossier.pdf` (it is already
  linked from the Partners page, which is not published yet).
- The "Partner with Us" and "Apply to ELIAC" buttons do not lead anywhere yet;
  they are marked with a `TODO` in the code.
- `@astrojs/svelte` is installed but no Svelte component is used. If it is not
  going to be needed, it can be removed.
