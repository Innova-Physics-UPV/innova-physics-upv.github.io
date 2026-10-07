# Design system reference

A copy of what the website is built from. The artifacts below stay the
source of truth; when they change, copy again and note the date here.

- Design system: "Innova Physics Fingerprint & Pentimento", version 3,
  https://claude.ai/artifact/1rD2qo4GC8qVYyVJsisWnJ (copied 7 October 2026).
- Website design: the canvas "Innova Physics website",
  https://claude.ai/artifact/MGyLTEg4oSEKtzBYSMvn9L, and its handoff spec,
  `docs/website-spec.md`.

## Files

- `tokens.json`: colours, themes, type, spacing, strokes and the spectrum line
  energies. `src/styles/tokens.css` ports it by hand; the night tokens
  (`night`, `lapis-dim`, `line-night`) come from the spec, not from this file.
- `licenses/`: the GUST Font License, README and MANIFEST of TeX Gyre Heros.
  The same licence is served at `/licenses/GUST-FONT-LICENSE.txt`.

## Fonts

TeX Gyre Heros is not on Fontsource. The site self-hosts WOFF2 files converted
from the design system's OTFs, glyphs and names untouched:

```sh
uv run --with fonttools --with brotli fonttools ttLib.woff2 compress -o texgyreheros-regular.woff2 texgyreheros-regular.otf
```

The GUST Font License asks, but does not require, that derived works rename
the fonts. A format conversion changes no glyph, so the files keep their
names, as other web copies of TeX Gyre do. EB Garamond and Fragment Mono come
from the `@fontsource` packages (SIL Open Font License).

## Logos

The logos in `src/assets/logos/` are inlined on every page (one ink through
`currentColor`), so they are kept small: optimised with SVGO, coordinates
rounded to three decimals, which draws them identically at 1200 px. Run it on
any new logo:

```sh
npx svgo@4 --config design-system/svgo.config.mjs -f src/assets/logos -r
```
