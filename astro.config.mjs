// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import svelte from '@astrojs/svelte';

// Every font is a local file: TeX Gyre Heros converted from the design
// system's OTFs (see design-system/README.md), EB Garamond and Fragment Mono
// from their @fontsource packages. Nothing is fetched from a font CDN.
const local = fontProviders.local();

// https://astro.build/config
export default defineConfig({
  site: 'https://innova-physics-upv.github.io',
  integrations: [svelte()],
  // English at the root; Spanish and Valencian only for the pages students
  // and the UPV read (Join, Team, Events). `codes` gives <html lang>.
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
