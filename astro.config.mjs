// @ts-check
import { existsSync, readdirSync } from 'node:fs';
import { defineConfig, fontProviders } from 'astro/config';

import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { katexMath, captionedFigures, scrollingTables } from './src/lib/markdown-plugins.mjs';

// Every font is a local file: TeX Gyre Heros converted from the design
// system's OTFs (see design-system/README.md), EB Garamond and Fragment Mono
// from their @fontsource packages. Nothing is fetched from a font CDN.
const local = fontProviders.local();

// Research launched with no items (Marc, 16 October 2026): while it has none,
// /research/ shows only COMING SOON, carries noindex and stays out of the
// sitemap in every language. An item is a folder in src/content/research/
// with an index.md or index.mdx (the collection's glob in
// src/content.config.ts), so with the first one the page is listed again on
// its own, at the next build.
const researchDir = new URL('./src/content/research/', import.meta.url);
const hasResearch =
  existsSync(researchDir) &&
  readdirSync(researchDir, { withFileTypes: true }).some(
    (entry) =>
      entry.isDirectory() && ['index.md', 'index.mdx'].some((file) => existsSync(new URL(`${entry.name}/${file}`, researchDir))),
  );
const researchIndex = /^\/(?:(?:es|va)\/)?research\/$/;

// https://astro.build/config
export default defineConfig({
  site: 'https://innova-physics-upv.github.io',
  // A Content Security Policy in every page's <head>: the browser runs only
  // the site's own scripts (its files, and each inline script by the hash
  // Astro computes at build) and loads nothing from another server. Inline
  // style="" attributes stay allowed, since the layout sets custom properties
  // through them (--longest, --col, the motion's measurements); they cannot
  // run code. KaTeX embeds one font as a data: URL, for research items' math.
  // GitHub Pages sends no headers of ours, so frame-ancestors (which only
  // works as a header) cannot be set here.
  security: {
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' data:",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: { resources: ["'self'"] },
      styleDirective: { resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' }] },
    },
  },
  // The sitemap lists every page with its language versions (hreflang), for
  // search engines; robots.txt points to it.
  integrations: [
    svelte(),
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es', va: 'ca-ES-valencia' } },
      filter: (page) => hasResearch || !researchIndex.test(new URL(page).pathname),
    }),
  ],
  // Research items are Markdown (MDX when they use a component): math is
  // rendered at build time with KaTeX, and a picture with a title becomes a
  // figure with a Courier caption. Sätteri is Astro 7's native pipeline.
  markdown: {
    processor: satteri({
      features: { math: true },
      mdastPlugins: [katexMath],
      hastPlugins: [captionedFigures, scrollingTables],
    }),
  },
  // English at the root, Spanish under /es/ and Valencian under /va/: every
  // page in all three (Marc, 9 October 2026), research items in the language
  // they were written in. Pages live in src/pages/[...lang]/ (see
  // src/i18n/index.ts). `codes` gives <html lang>.
  i18n: {
    locales: ['en', 'es', { path: 'va', codes: ['ca-ES-valencia'] }],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  fonts: [
    {
      provider: local,
      name: 'TeX Gyre Heros',
      cssVariable: '--font-grotesk',
      fallbacks: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/heros/texgyreheros-regular.woff2'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/heros/texgyreheros-bold.woff2'], weight: 700, style: 'normal' },
        ],
      },
    },
    {
      provider: local,
      name: 'TeX Gyre Heros Cn',
      cssVariable: '--font-condensed',
      fallbacks: ['Helvetica Neue', 'Arial Narrow', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/heros/texgyreheroscn-bold.woff2'], weight: 700, style: 'normal' },
        ],
      },
    },
    {
      provider: local,
      name: 'EB Garamond',
      cssVariable: '--font-art',
      fallbacks: ['Garamond', 'Times New Roman', 'serif'],
      options: {
        variants: [
          { src: ['@fontsource/eb-garamond/files/eb-garamond-latin-400-normal.woff2'], weight: 400, style: 'normal' },
          { src: ['@fontsource/eb-garamond/files/eb-garamond-latin-400-italic.woff2'], weight: 400, style: 'italic' },
        ],
      },
    },
    {
      provider: local,
      name: 'Fragment Mono',
      cssVariable: '--font-mono',
      // Fragment Mono has no Greek: α, β, γ must fall back to Heros, the same
      // skeleton. The API hashes family names, so the stack is composed in
      // tokens.css (--mono) from --font-mono and --font-grotesk; no fallbacks
      // here, or a local Courier New would catch the Greek first.
      fallbacks: [],
      optimizedFallbacks: false,
      options: {
        variants: [
          { src: ['@fontsource/fragment-mono/files/fragment-mono-latin-400-normal.woff2'], weight: 400, style: 'normal' },
        ],
      },
    },
  ],
});
