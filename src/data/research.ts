// The research pages' own copy and labels. The items themselves are
// Markdown in src/content/research/<item>/index.md(x). Placeholder copy until
// the team's content document (docs/content-todo.md).
import { CONTACT_EMAIL } from '../consts';

export const researchLabels = {
  type: { paper: 'PAPER', poster: 'POSTER', 'write-up': 'WRITE-UP' },
  status: { published: 'PUBLISHED', preprint: 'PREPRINT', presented: 'PRESENTED', coming: 'COMING' },
} as const;

/** A date as the research pages show it: the month and the year, in capitals. */
export const researchMonth = (date: Date) =>
  date.toLocaleString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' }).toUpperCase();

export const researchPage = {
  kicker: 'RESEARCH · PAPERS, POSTERS AND WRITE-UPS',
  lead: 'What we design, simulate and measure, written up and published in the open: the papers, the posters we present and the write-ups of every stage of ALOHA.',
  listTitle: 'Everything we have published',
  closing: {
    kicker: 'OPEN',
    title: 'Read it, reuse it, build on it',
    text: 'Our write-ups and designs are open. If you work on something close, or want to build your own source, write to us.',
    action: { label: 'Write to us', href: `mailto:${CONTACT_EMAIL}?subject=Research` },
  },
};
