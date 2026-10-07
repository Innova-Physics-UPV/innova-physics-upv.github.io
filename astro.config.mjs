// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

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
});
