# Research items

Research launched with no items (Marc, 16 October 2026): `/research/` shows only
its cover, RESEARCH / COMING SOON, in the three languages. This file is not an
item: the collection only reads `*/index.md` and `*/index.mdx`
(`src/content.config.ts`).

## Add an item

One folder per item. The folder's name is the item's address:
`democratising-particle-accelerators/` becomes `/research/democratising-particle-accelerators/`.

```
src/content/research/
  democratising-particle-accelerators/
    index.md       (or index.mdx, to use <Datum> or <Term>)
    poster.webp    (its pictures, side by side with the text)
```

The front matter is defined in `src/content.config.ts` (the `research`
collection): `title`, `type`, `authors`, `venue`, `date`, `status` and `aside`
are required; `picture`, `machine`, `numbers`, `department`, `pdf`, `licence`
and `theme` are optional. `npm run check` says which field is missing. An item
is written in one language (English so far); math is LaTeX between `$…$` or
`$$…$$`. Its PDF goes in `public/research/` and `pdf:` takes that path.

## With the first item

These switch back on their own, at the next build:

- The index page loses its `noindex` (`src/pages/[...lang]/research/index.astro`).
- The sitemap lists `/research/`, `/es/research/` and `/va/research/` again
  (the filter in `astro.config.mjs` looks for an item folder here).

These are done by hand, in the same change:

- The index page goes back to its list of items and its closing sheet: the
  last version with them is
  `git show 96f28dc:"src/pages/[...lang]/research/index.astro"`, and its
  blocks are `src/components/ResearchCard.astro`.
- Its copy in `src/data/research.ts`: the kicker, lead, list title and closing
  text of tab 5.1 and the description of tab 7.1 (`docs/copy/`), read by the
  page instead of the lead, each with its approved Spanish and Valencian.
- The two CERN posters are ready in `research-posters.zip` (tab 5.2), and the
  PDF link of tab 5.4 replaces the plain "PDF" in
  `src/pages/research/[slug].astro`.

The items that were here before launch are in the git history
(`git log -- src/content/research`).
