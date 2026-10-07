# Website design: Fingerprint & Pentimento

Handoff for implementing the new Innova Physics website in the existing Astro repo (`innova-physics-upv.github.io`). The design lives on a canvas; this file says what to build from it, in what order, and which rules hold. It describes round 3, the current state.

- **Design canvas:** "Innova Physics website", https://claude.ai/artifact/MGyLTEg4oSEKtzBYSMvn9L (private to Marc until shared). Every artboard is HTML with inline styles: copy geometry, copy and colours from there. Press Play on "Home · desktop" to see the motion.
- **Design system:** "Innova Physics Fingerprint & Pentimento", https://claude.ai/artifact/1rD2qo4GC8qVYyVJsisWnJ. Its `tokens.json` is the source of truth for colours, type, spacing and the spectrum line energies.

## The direction

How we got here: round 1 changed ground at every section and read as five sites in one. Round 2 made the whole home ultramarine: consistent, but loud to read. Round 3 keeps the blue as the cover and puts the reading on paper, the way the CERN Courier does.

- **A blue cover, then paper.** Every page, the home included, opens on an ultramarine cover and reads on gesso. Ultramarine comes back only as a sheet laid on the page (the Join call on the home, the closing sheet on the other pages) and in the sticky header, which works like the Courier's blue masthead band.
- **Why not darker.** The loudness came from chroma, not lightness: ultramarine is about C 0.18 in OKLCH, gesso about 0.01, and ultramarine-deep is still 0.14. A darker blue page is more dramatic, not calmer. Vermilion on ultramarine also vibrates (2.0:1 luminance contrast across very different hues); on gesso the beam sits still at 4.0:1.
- **A dark mode, as night paper.** For readers who want it, the gesso turns to night, a desaturated ultramarine; the cover, the header and the sheets stay ultramarine (below).
- **One shout per page.** Heros Cn Bold capitals only for the cover title: BUILD THE BEAM on the home, THE MACHINE, JOIN THE TEAM and PARTNERS on their pages. Section titles are calm, sentence case.
- **Room to breathe.** About twice the space between sections, no rules between them, text capped at about 60 characters a line, fewer small monospaced labels.
- **One story.** The home tells the team's story as a beamline, season by season, the way Swissloop lines up its pods and AMZ its cars.
- **Motion.** Four movements, one per section, all linear: they move, then stop.

## What we took from the CERN Courier

From cerncourier.com and the print issues (October 2026):

- One blue masthead band, then paper and ink.
- Reading type at 17/29 px in a column of about 65 characters (theirs is FF Meta Serif; ours stays Heros 55 at 17/28).
- A small category kicker above every headline (`CULTURE AND HISTORY | FEATURE`); ours are the Fragment Mono labels.
- Captions with a bold lead-in, then the text, then the credit (`Bunch crossing Members of the ATLAS collaboration… Credit: M Struik/CERN`).
- Blue comes back only as inset promo sheets on the white page.
- Each print cover is one strong image with the masthead and a cover line.

## The artboards

| Artboard | Route | Grounds, top to bottom |
| --- | --- | --- |
| Home, desktop and phone (two phone frames: the page is about 9,000 px tall at 390) | `/` | ultramarine cover; gesso from the team onwards; Join as an ultramarine sheet on the page; footer on gesso |
| The machine | `/machine` | ultramarine cover; gesso page; ultramarine closing sheet; footer |
| Logbook entry | `/logbook/[slug]` | ultramarine cover (machine entries) or gesso (Pentimento entries); gesso article with an ultramarine datum sheet; footer |
| Join, with the whole team | `/join` | ultramarine cover with the team at CERN; gesso page; footer |
| Partners | `/partners` | ultramarine cover; gesso page; ultramarine closing sheet; footer |
| Header, Footer | every page | Header ultramarine (gesso only on a Pentimento entry); Footer gesso, or night in dark mode |
| Home, dark (desktop and phone) | `/` with the dark mode on | the same page with the night palette |
| Motion · the plan | none, a reference board | every movement, playable, with its trigger, timing and easing |
| Scroll scenes · the plan | none, a reference board | the Apple-style scenes S1 to S4, scrubbable with a slider |

**The rule for every page:** a cover on ultramarine, a page on gesso, an ultramarine sheet laid on the gesso before the end (inset to the content width, never full bleed), then the footer.

The templates were drawn in round 2 with the round-2 spacing; build them with the round-3 spacing tokens below.

Later rounds: `/logbook` index (the covers in a chequerboard), `/team` on its own if it outgrows `/join`, `/events` (CMS virtual visit, the Accelerator Design Challenge), `/open`, the templates drawn in dark mode.

## Decisions taken

- **Languages.** English by default. Spanish and Valencian versions of the pages students and the UPV read: Join, Team, Events. Logbook, Machine and Partners stay English. The header carries `EN · ES · VAL`. Routes `/`, `/es/…`, `/va/…` with Astro i18n (`prefixDefaultLocale: false`); `lang` is `en`, `es` and `ca-ES-valencia`. This replaces, for the site, the brand book's three parallel columns (fair posters keep the columns).
- **People:** everyone, with photos in colour, never dramatic. Nobody is published without consent.
- **Status as drawing.** On every machine figure: solid is built or measured, hatched (tratteggio) is simulated, outline is design or planned. The einzel lens is planned, so it is outlined everywhere.
- **Logbook 02 is the vacuum system.**

## Colour

| Role | Token | Where |
| --- | --- | --- |
| Cover | `ultramarine` #2338a8 | the cover of every page, the sticky header, the Join sheet and closing sheets |
| Figure on the cover | `lead-white` #f4f1ea | type, lines, primary buttons (ultramarine text on lead white, 8.5:1) |
| Muted on the cover | `lapis-light` #c9cfee | labels and captions on ultramarine (6.2:1) |
| Page | `gesso` #eeeae1 | the reading ground of every page, the home included |
| Ink | `bone-black` #1c1b19 | type, figures, rail markers on gesso (14.3:1) |
| Muted ink | `graphite` #66615a | labels and captions on gesso (5.1:1) |
| Construction | `line-gesso` #d9d3c6 | the rail and other construction on gesso (decoration only) |
| Accent | `vermilion` #d4391f | one element per composition, a shape: the beam in the cover figure, the beam on the story rail, the probe, the Higgs line. Never type on ultramarine, never a ground, never a button |
| Strata | `varnish`, `gesso-layer`, `panel` | the cross-section only |

Themes in `tokens.css`: `[data-theme="ultramarine|gesso"]` setting `--ground`, `--figure`, `--figure-muted`, `--accent`, `--sheet`, `--construction` as the token table maps them. The `black` and `vermilion` themes stay in the design system for posts, not on the site.

## Dark mode: night paper

Only the page changes. The cover, the header, the Join sheet and the closing sheets stay ultramarine; the photos, the cover figure and the strata of the cross-section keep their colours.

| Role | Day | Night | Night contrast |
| --- | --- | --- | --- |
| `--page` | `gesso` #eeeae1 | `night` #111932 | |
| `--ink` | `bone-black` #1c1b19 | `gesso` #eeeae1 | 14.5:1 |
| `--muted` | `graphite` #66615a | `lapis-dim` #939dbe | 6.5:1 |
| `--construction` | `line-gesso` #d9d3c6 | `line-night` #233056 | 1.35:1, decoration only |
| accent | `vermilion` #d4391f | `vermilion` #d4391f | 3.6:1, shapes only |
| sheets, cover | `ultramarine` #2338a8 | `ultramarine` #2338a8 | 1.8:1 against night: the sheet still reads as a sheet |

- **Why night and not ultramarine-deep.** Night is the ultramarine hue (268°) at OKLCH L 0.22 and C 0.05, a quarter of the brand's chroma. Ultramarine-deep is C 0.14: as a reading ground it brings back the glare and the vibration we removed, and vermilion on it falls to 2.6:1. On night the beam keeps 3.6:1, enough for a graphic (WCAG 1.4.11 asks 3:1). Ink is gesso rather than lead white, a touch softer at night. New tokens, both derived from the palette: `night` #111932 and `lapis-dim` #939dbe (lapis light at L 0.70); `line-night` #233056 for construction.
- **Marks.** The Innova logo switches to its on-ultramarine version (lead white and vermilion). UPV, GE, ETSIT and the partners go one ink, white: ship white SVGs rather than a CSS filter, so the marks stay crisp and exact.
- **Switching.** By default the site follows the system (`prefers-color-scheme`). A `DARK` switch in the header (`<button aria-pressed>`, a 12px square, outlined by day and filled by night) overrides it and is remembered in `localStorage`. An inline script in `<head>` sets `<html data-mode>` before the first paint, so the page never flashes the wrong ground. CSS:

```css
:root { --page: #eeeae1; --ink: #1c1b19; --muted: #66615a; --construction: #d9d3c6; }
:root[data-mode="dark"] { --page: #111932; --ink: #eeeae1; --muted: #939dbe; --construction: #233056; }
@media (prefers-color-scheme: dark) {
  :root:not([data-mode="light"]) { --page: #111932; --ink: #eeeae1; --muted: #939dbe; --construction: #233056; }
}
```

- Every figure on a page reads its colours from these variables (`fill: var(--ink)` in inline SVG, set through `style`, not presentation attributes), so the drawings change with the page. The canvas does exactly this: see "Home · desktop, dark", the theme tweak on "Home · desktop", and the DARK switch in its header in Play mode.

## Type

| Style | Family | Desktop | Phone | Leading |
| --- | --- | --- | --- | --- |
| `label`, the kicker | Fragment Mono, capitals typed, 0.06em | 13px | 13px | 20px |
| `caption` | Heros 55, lead-in in Heros 65 | 15px | 15px | 22px |
| `body` | Heros 55 | 17px | 17px | 28px |
| `body` in a Logbook article | Heros 55 | 19px | 17px | 31px |
| `lead` | Heros 55 | 22px | 19px | 1.45 |
| station title | Heros 65, −0.01em | 32px | 24px | 1.15 |
| section headline | Heros 65, −0.02em, sentence case | 48px | 32px | 1.1 |
| `art-m`, the one art line of a section | EB Garamond | 64px | 40px | 1.05 |
| `shout`, a page cover | Heros Cn Bold 67, capitals, −0.01em | 120px | 56px | 0.88 |
| `shout`, the home cover | Heros Cn Bold 67, capitals, −0.01em | 144px | 64px | 0.88 |
| `numeral` | Heros 65, −0.04em | 104px | 72px | 0.9 |
| `aside`, `legend` | EB Garamond italic | 24px / 17px | 19px / 16px | 1.25 |

Use `clamp()` between the two columns, as the canvas does (`clamp(32px, 3.3vw, 48px)` for a section headline).

**Captions** follow the Courier: `<strong>` lead-in in bone black, then the text in graphite, then the credit if it is not ours: "**Model-0 on the bench.** The vacuum pump and the glass tube where the discharge glows." Figures use the same pattern instead of a monospaced FIG line.

## Spacing

| Token | Value | Use |
| --- | --- | --- |
| `--pad` | `clamp(20px, 5.6vw, 80px)` | side margin |
| `--section` | `clamp(80px, 10.4vw, 152px)` | the space above every section; no rules between sections |
| station gap | `clamp(72px, 7.2vw, 104px)` | between seasons on the rail |
| `--measure` | `520px` | the longest line of running text, about 60 characters |
| `--rail` | `clamp(56px, 7vw, 120px)` | the story's first column (below) |

Content up to 1440px. Every length a multiple of 8px where it can be.

**The rail.** The story and the two readings share one narrow first column, `--rail`. The beam runs in it, 8px wide, centred 36px from the content edge; the season markers (16px squares) sit on it; season text and the strata labels start at `--rail`. The probe falls on exactly the same line, so the beam of the story becomes the probe.

## Fonts

- **TeX Gyre Heros** (GUST Font License): self-host WOFF2 of regular 400, bold 700 and condensed bold 700 (the `shout`), converted from the design system's OTFs; ship the licence file beside them.
- **EB Garamond** (400, roman and italic) and **Fragment Mono** (400): self-host through `@fontsource`, not the Google CDN. Fragment Mono has no Greek, so keep `"TeX Gyre Heros"` second in the mono stack: α, β, γ fall back to Heros.
- **Remove `public/Alfabet/`**: commercial font files in a public repository. Remove the `curves*.webp` backgrounds and `BackgroundWave.astro` with them.

## The home, section by section

1. **Header**, sticky, ultramarine with a 2px hairline: compact logo, `MACHINE · LOGBOOK · TEAM · PARTNERS`, then `JOIN` as a boxed link (the one call to action), then `EN · ES · VAL`.
2. **The cover** (ultramarine): label `INNOVA PHYSICS UPV · VALÈNCIA · SINCE 2023`; shout `BUILD THE / BEAM`; the lead and two buttons (`Join the team`, `Follow the beam` → `#story`) on the left; on the right, bleeding off the right edge, the recoloured COMSOL render of ALOHA-0, captioned "**ALOHA-0, the electron source.** Simulated in COMSOL." with the colour scale `ELECTRON ENERGY · 0 → 30 keV`.
3. **The team** (`#team`, gesso from here on): kicker, the headline "Particle accelerators, within reach of students", one paragraph, one line of facts (`FOUNDED 2023 · 30+ STUDENTS · 4 DEPARTMENTS`) and the team photo at 16:9, restored as it scrolls in (motion 2).
4. **Our story** (`#story`): kicker, the headline "One beamline", one line of lead, and the key to the markers (built, simulated, not built yet, the beam). Then six seasons on the rail, each **text and one picture, nothing else**: season label, title, two or three lines, one photo or figure with its caption. Numbers and status chips live on `/machine`.

   | Season | Marker | Picture |
   | --- | --- | --- |
   | 2023 · FOUNDED, A question at the UPV | solid | the founding question in the art voice: *What about undergraduates?* |
   | [SEASON] · MODEL-0, A beam you can see | solid | Model-0 on the bench |
   | 2025-26 · ALOHA-0, The electron source, simulated (link to Logbook 01) | hatched | the source in section, hatched, the einzel lens outlined |
   | JULY 2026 · CERN, Our posters at CERN | solid | at the accelECR poster session |
   | 2026-27 · NOW, From simulation to the bench (Logbook 02 coming) | outlined; **the beam stops here** | at the vacuum bench |
   | NEXT · ALOHA-1, 1 MeV on a tabletop (link to the machine) | outlined | ALOHA-1 in section, the cavities outlined |

5. **The target** (`#readings`): kicker `THE TARGET · AN AIM`, the art line *A beam reads a painting twice.*, one paragraph, then the two readings (below).
6. **Join** (`#join`): an ultramarine sheet laid on the page: kicker, "Build it with us", the status of the round, `Tell me when it opens` and `Meet the team`. The departments live on `/join`.
7. **Partners**: `WITH THE SUPPORT OF`, the logos in one ink (bone black) in a single row on gesso, `BECOME A PARTNER →`.
8. **Footer** on gesso: the closing row of logos centred, as the team likes its closing slides.

The home has no Logbook grid: the story links into the Logbook where it happened, and the header carries LOGBOOK.

## Motion and interaction plan

Every movement is playable on the canvas board "Motion · the plan", with its trigger, timing and easing beside it. The rules: along an axis, at constant speed, then a hold, like the second hand of the SBB clock; one movement per section, one at a time; data jumps, it never morphs; the HTML is the finished state.

### Core: ships with the site

| # | Where | Movement | Trigger | Timing | How |
| --- | --- | --- | --- | --- | --- |
| M1 | Cover | The beam leaves the source: the figure is uncovered left to right, electrodes first, then the beam runs out of the right edge | load, once, 160 ms after first paint | 1800 ms, linear | `clip-path: inset(0 100% 0 0)` → `inset(0)` |
| M2 | Header | The masthead tightens while you read | the cover's bottom passes under the header (an `IntersectionObserver` on a sentinel at the cover's foot) | 200 ms, linear | padding 24 → 12 px, logo 44 → 32 px; back at the top |
| M3 | The team | The photo is restored: a veil of page-coloured hatching (6 px of every 8 px) withdraws left to right | the photo's top crosses 78% of the viewport, once | 1600 ms, linear | the veil's `clip-path: inset(0)` → `inset(0 0 0 100%)` |
| M4 | Our story | The beam runs down the rail with your reading and holds on each season's marker; it stops at NOW | scroll, linked, no time | n/a | the mapping below, applied as `clip-path: inset(0 0 calc((1 - y) * 100%) 0)` on the beam |
| M5 | The target | The probe steps to a layer and holds; the spectrum swaps its lines once the probe has stopped | sticky scroll on desktop (one screen per layer, about four screens), or the layer buttons | 480 ms a step, linear | `height` transition on the probe |
| M6 | Everywhere | Buttons swap fill and outline; text links thicken their rule from 2 to 4 px and their arrow moves 4 px right; focus is a 2 px outline at 2 px offset, never animated; photos do not react | `:hover`, `:focus-visible` | 120 ms, linear | CSS only |
| M12 | Every cover | The page goes on: a white beam grows down a lapis line beside the word `SCROLL`, the first metre of the rail; with S1 it reads `SCROLL TO SWITCH ON THE SOURCE` | load, after M1 (2.2 s); leaves for good at the first scroll past 40 px | grows 1200 ms linear, holds 1000 ms, twice (4.4 s, under WCAG's 5 s), then stays full | `position: sticky; bottom: 24px` inside the cover, on the rail's line (36 px from the content edge); white, not vermilion, since the cover already has its accent |

**M4, the mapping.** Let `p` be the scroll progress of the beam element (the reading line at 62% of the viewport, from the beam's top to its end at NOW) and `m₀ … m₄` the markers' positions as fractions of the same length. Around each marker, a hold band of half-width `h` (35% of the gap between two markers, so `h = 0.175 × gap`) keeps the head on the marker; between bands the head travels linearly, a little faster than the scroll, to catch up:

```
y(p) = mᵢ                                                     if |p − mᵢ| ≤ h
y(p) = mᵢ + (p − (mᵢ + h)) / ((mᵢ₊₁ − h) − (mᵢ + h)) × (mᵢ₊₁ − mᵢ)   if mᵢ + h < p < mᵢ₊₁ − h
y(p) = m₄  (NOW)                                              if p ≥ m₄ − h
```

Measure the markers' real offsets on load and on resize; update in a passive, `requestAnimationFrame`-throttled scroll listener. The board plots this function: flat where the beam holds.

### Optional: decide before building

| # | Where | Movement | How |
| --- | --- | --- | --- |
| M7 | Dark mode | Night falls as a raster scan: the new theme is revealed behind a horizontal edge sweeping down the page, 480 ms, linear | `document.startViewTransition(() => setMode(next))`, with `::view-transition-new(root) { animation: scan 480ms linear }` from `clip-path: inset(0 0 100% 0)` to `inset(0)` and no animation on the old root. Only on the switch: following the system setting changes the theme silently |
| M8 | Our story | Seasons light up when the beam arrives: the label goes from muted to ink | a class toggled when `y(p) ≥ mᵢ`; a change of state, not an animation |
| M9 | Between pages | The masthead stays still and the next page's cover slides in from the left, 360 ms, linear | cross-document view transitions: `@view-transition { navigation: auto; }`, `view-transition-name: masthead` on the header, a clip-path wipe on `::view-transition-new(root)` |
| M10 | Logbook entries | A vermilion line under the masthead grows with your reading | `animation-timeline: scroll(root)` on `transform: scaleX(0 → 1)`, `transform-origin: left`; it replaces the header's hairline on these pages only |
| M11 | Spectra | Hover or focus a line and the legend under the spectrum names it (element, line, energy, where it comes from) | lines are `<button>`s with an `aria-label`; the legend is `aria-live="polite"`; instant |

### Not doing

Fade-ins on scroll, parallax, particles, glows and light leaks, counters ticking up, scroll hijacking or snapping (the only sticky part is the two readings, on desktop), custom cursors, autoplaying video or carousels, spinners and skeleton shimmer.

### Reduced motion and no JavaScript

The finished state is the HTML state. A tiny script adds `data-motion` to `<html>` only if `prefers-reduced-motion` is not `reduce`; only then are the cover figure, the veil and the beam set to their start states.

| # | Prefers reduced motion | No JavaScript |
| --- | --- | --- |
| M1 | the figure is there, whole | the same |
| M2 | changes size without a transition | stays full height, still sticky |
| M3 | no veil | no veil |
| M4 | drawn in full to NOW | drawn in full to NOW |
| M5 | no sticky scroll; the buttons move the probe without a transition | the vermilion layer, read, as a still figure |
| M6 | states change without a transition | works: it is CSS |
| M7 | the theme switches at once | the system setting still applies through CSS; the switch is hidden |
| M12 | still: the full white beam beside SCROLL; it still leaves at the first scroll | still, and it stays; sticky through CSS |
| M8 to M11 | instant, or off | off; M11 shows the strongest line's legend |

**Islands.** One vanilla TypeScript module for M1 to M4 (and M8 if chosen), well under 3 KB: an `IntersectionObserver` for M2 and M3, one scroll listener for M4. The Two readings stay a Svelte island (M5, M11). M7, M9 and M10 are CSS with a few lines of script. On the canvas the frames are a whole page tall, so the motion plays only in Play mode.

## Scroll scenes: big pictures, scrubbed by the scroll (proposal)

Apple's product-page trick, in our grammar: a scene holds still for a moment and the reader's scroll becomes its clock. Playable on "Scroll scenes · the plan".

**Rules.** Scrubbed by the scroll, never by time (scroll back and it runs backwards). At most two pinned scenes on a page, each two screens of scroll at most; the scroll speed is never changed and nothing snaps. Full bleed only for our own photos and simulations; labels go on figures, never on photos. With reduced motion or no JavaScript, each scene is its last frame and nothing pins.

| # | Where | Pinned | Keyframes (scroll progress) | Status |
| --- | --- | --- | --- | --- |
| S1 | Home cover | 200vh desktop, 150vh phone | 0 to 40%: the words scroll away, the figure grows from its column to full bleed. 40 to 90%: the beam switches on from the cathode to the edge; each electrode is named as the beam passes it (CATHODE AND WEHNELT, ANODE · 30 kV, TELEFOCUS · THE FOCUS LIES FAR BEYOND THE ANODE). 90 to 100%: hold, then the page moves on | recommended; replaces M1 |
| S2 | The team | 150vh | 0 to 60%: the photo grows from its column to the whole screen while its hatching withdraws (M3 and the growth are one movement, one number). 60 to 100%: hold at full bleed, the caption on the page below | recommended |
| S3 | Our story | nothing: a sticky picture column | the season pictures double in size (7 columns, up to 72vh) and stay on screen while the text scrolls; the picture jumps when a season reaches the reading line; the rail and beam (M4) carry on | optional: needs one picture per season at 2000 px or more |
| S4 | The team statement | nothing | each word jumps from graphite to ink as the scroll reaches it; unlit words stay readable (5.1:1) | optional |

**Before S1, the beam is off.** The cover shows the wireframe and, at 16% opacity, the beam's planned path; the first scroll switches the source on. The render ships as two layers on the same 1600 × 960 crop: `aloha-0-source-wire.webp` (the electrodes on ultramarine, about 130 KB) and `aloha-0-source-beam.webp` (the trajectories alone with transparency, about 220 KB), made by `split_layers.py` from the COMSOL export. If the team exports a time-dependent particle-tracing study, the reveal can become the real simulation: about 60 frames drawn on a `<canvas>`, loaded after the first paint, about 3 MB.

**How to build a pinned scene.** A track section `200vh` tall holds a stage with `position: sticky; top: 0; height: 100vh`. Progress is how far the track has scrolled past the stage, `p = clamp(−trackTop / (trackHeight − innerHeight), 0, 1)`. Where the browser supports scroll-driven animations, use `animation-timeline: view()` with linear keyframes and `animation-range` per phase; elsewhere one passive scroll listener writes `p` into a CSS custom property (`--p`) and the styles read it with `calc()`. No GSAP, no scroll library. Size changes are `transform: scale()` and `clip-path`, never `width`/`height`, so nothing reflows. On phones the stage is `100svh` so the browser bars do not make it jump.

## The signature interaction: Two readings

On gesso:

- **State:** one layer index, 0 to 4: varnish, ultramarine, vermilion, gesso, panel. Default: vermilion (under the ultramarine: the robe was red first).
- **Drawing:** the spectrum figure is `clamp(272px, calc(560px - 20vw), 420px)` tall; the energy axis (4px, bone black) runs from `--rail` to the right edge, 1 to 15 keV, linear, with a graphite tick each keV and no numbers on it (the caption gives the window). Lines are 6px, bone black, up to 180px tall, labelled above. No accent among them: the probe is the accent.
- **The probe** (8px, vermilion) starts 24px below the top of the figure and ends on top of the selected stratum, through the 4px painting surface: `height: calc(100% - 20px + 48px × layer)`.
- **The cross-section** sits under a 4px bone-black surface line, within the content width; each stratum is a `<button aria-pressed>` 48px tall, labelled from `--rail`; the selected one says `READING` at its right end.
- **Announcement:** an `aria-live="polite"` aside says what the probe reads.
- **Physics:** it shows the fingerprint of the layer the probe stops on, as a depth-resolved (confocal) X-ray fluorescence reading would. A cumulative, attenuated spectrum is a later refinement.

## Pictures

- **Our photos.** Natural colour, even light, no filters, no duotones, never type on a photo. One photo per composition. Seasons at 3:2, the team at 16:9, the Join cover at 3:2, `object-fit: cover`. Captions in the Courier pattern. Through Astro's `<Image>` as WebP or AVIF, with `widths` for 1x and 2x.
- **The cover figure** is the ALOHA-0 COMSOL render, recoloured (and, for S1, split into a wireframe layer and a beam layer): wireframe in lead white, beam from lapis light (low energy) to vermilion (30 keV), on the ultramarine ground so it melts into the cover. The file is `aloha-0-source-ultramarine.webp` (1600 × 960, 5:3) and the script that makes it from the render is `recolour.py`; both come with this spec. If the COMSOL plot was coloured by speed rather than kinetic energy, change the legend, not the picture.
- **CERN imagery**, to explain, never to decorate. Under CERN's audiovisual terms, its photos and videos may be used for educational and informational purposes only, with CERN credited as the source; not commercially, not in advertising or promotion, never in a way that suggests endorsement by CERN or its people, never passed on for third parties to use (so no CERN images in a press kit or a download), and the CERN logo only with CERN's prior written approval. Photos in CDS's "Creative Commons Images from CERN" collection are CC BY-SA instead: credit CERN and share any modified version under the same licence. Check the licence on each record. So: a CERN photo may illustrate what an S-band accelerating structure or an electron linac looks like on `/machine` or in a Logbook entry, beside our own drawing, with a Courier caption ending in `Credit: CERN` and a link to its record. Never as a cover, never on Join or Partners (recruitment and sponsorship read as promotion), never cropped to put the CERN logo in focus. Our own photos taken at CERN are ours.

## Components

| Component | Props | Notes |
| --- | --- | --- |
| `Header` | `theme` (ultramarine, gesso), `active`, `lang`, `mode` | sticky, tightens after the cover (M2); compact logo; nav in `label`; `JOIN` boxed, filled when active; `aria-current="page"`; language switch; the `DARK` switch; 2px hairline under it |
| `Footer` | `lang`, `mode` | the closing row (Innova, UPV, GE, ETSIT, centred: their own inks by day, one ink white by night), address, contact, site map, the open licences line |
| `Cover` | `shout`, `kicker`, `lead`, `actions`, `figure` | ultramarine; the one shout of the page |
| `Section` | `kicker`, `title`, `id` | gesso; `--section` above, nothing below; no rules |
| `Rail` + `Season` | `season`, `title`, `body`, `marker` (solid, hatched, outlined), `picture`, `caption`, `link` | text and one picture; the beam element lives in the wrapper of the passed seasons and ends 12px into NOW |
| `Caption` | `lead`, `text`, `credit` | the Courier pattern |
| `Sheet` | slot | ultramarine sheet inset on a gesso page: the Join call, the closing sheets |
| `Spectrum` | `lines`, `mode`, `scale`, `labels`, `interactive` | 1 to 15 keV, linear; never a continuum or a peak shape |
| `Strata` | `layers`, `probeAt` | 48px buttons |
| `Lattice` | `elements[]` with `status` built, simulated or design | solid, `<pattern>` tratteggio (4px strokes on an 8px pitch at 1920 units) or outline; no text inside small SVGs, captions in HTML |
| `Datum`, `StatusChip`, `SpecTable`, `Roadmap` | | for `/machine` and the Logbook, not the home |
| `LogbookCard`, `DeptCard`, `PersonCard`, `TierLadder`, `BenefitsMatrix`, `PartnerTile`, `Button` | | as drawn; buttons at least 48px high; primary lead white with ultramarine text on the cover and sheets; vermilion is never a button |

## Content

- `src/content/seasons/*.yaml` (new): `order`, `season` (label), `title`, `body`, `marker` (solid, hatched, outlined), `picture` (photo or figure), `alt`, `caption` (lead, text, credit), `link`, `now: true` on the current season. Moving `now` when a season closes is the only edit the story needs each year.
- `src/content/logbook/*.mdx`: `series` (LOGBOOK, FINGERPRINT, PENTIMENTO), `number`, `title`, `aside`, `date`, `status` (published, next), `theme`, `department`, `figure`, `lang: en`.
- `src/content/team/*.yaml`: `name`, `role`, `department`, `photo`, `consent: true` (a person without it is not rendered), `order`.
- Keep `src/data/partners.ts` and `src/data/sponsorship.ts` as they are: the tiers (Neutrino, Quark, Photon, Higgs) and benefits feed `/partners`.
- `src/consts.ts` keeps the form, dossier and email destinations.

## Rules that hold on every page

- Aims, not promises: "we aim to". Every number has its unit and its status (SIMULATED · COMSOL, DESIGN, DESIGN TARGET, BUILT, MEASURED with date and instrument).
- "Electron source", never "gun". (The CERN posters in the photos say "gun"; that is fine in a photo, not in our copy.)
- The art direction is written as an aim and names no faculty, museum, partner or work until they have agreed.
- One shout per page, one art line per section, one accent element per composition.
- No em dashes in copy.
- Drop the old `_wip/OurAproach.astro` roadmap (mass production, 100 institutions): it contradicts everything above.

## Accessibility and performance

- Contrast, day: bone black on gesso 14.3:1, graphite 5.1:1; lead white on ultramarine 8.5:1, lapis light 6.2:1; vermilion only as shapes (4.0:1 on gesso). Night: gesso on night 14.5:1, lapis dim 6.5:1, vermilion 3.6:1.
- Visible focus (2px outline in `--figure`, 2px offset), targets of at least 44px, real `<button>`, `<a href>` and `<table>`.
- Figures are inline SVG with `role="img"` and an `aria-label` that says what is drawn and its status. Photos have alt text that says who and what.
- Motion: `prefers-reduced-motion` and no-JS both give the final state (see the table above). The DARK switch is a real `<button>` with `aria-pressed`.
- No client JavaScript beyond the motion module and the Two readings island. Cover image with `fetchpriority="high"`; the rest lazy.

## Build order

1. `tokens.css` (ultramarine and gesso themes, the day and night roles, the spacing tokens), the no-flash mode script, fonts including Heros Cn Bold, base layout; remove Alfabet and the curves.
2. `Header` (sticky, JOIN boxed, the DARK switch) and `Footer` (day and night marks).
3. `Cover`, `Section`, `Caption`, `Sheet`, `Lattice`, `Button`.
4. Home: cover, team, the seasons collection with `Rail` and `Season`, then Join and partners.
5. The motion module (M1 to M4, and M8 if chosen), then the Two readings island (M5, and M11 if chosen); M7, M9 and M10 once decided.
6. `/machine`, with `Datum`, `StatusChip`, `SpecTable` and `Roadmap`.
7. Logbook collection, the entry template, then the index.
8. `/join` with the team collection.
9. `/partners`, restyled on the existing data.
10. Spanish and Valencian for Join (then Team and Events).
11. An accessibility and Lighthouse pass on phone and desktop, with and without reduced motion.

## Still needed from the team

- The season of Model-0 and of the team photo (both `[SEASON]` on the canvas).
- A photo of Model-0 glowing, in colour, for `/machine`.
- Consent from everyone visible in the team, CERN and bench photos.
- Partner logos in one ink for the home: IUMPA, iTEAM, Edwards; ETSIT is drawn.
- Members' surnames, and every member's role and department.
- The docs repository and handbook URLs, and whether the Formbricks form stays open after 16 October.
- Spanish and Valencian copy for Join.

## Decisions after the handoff (7 October 2026)

- Every optional movement and scroll scene is built: M7 to M11 and S1 to S4.
- The home keeps the six stations, and the story links to a museum of past seasons, `/seasons`, for IP-0 to IP-2.
- With S1 and S2 as the home's two pinned scenes, M5 on the home moves by the layer buttons rather than sticky scroll.
