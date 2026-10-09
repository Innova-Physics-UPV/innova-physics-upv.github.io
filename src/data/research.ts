// The research pages' own copy and labels, in the three languages. The items
// themselves are Markdown in src/content/research/<item>/index.md(x), in the
// language they were written in (English so far). Placeholder copy until the
// team's content document (docs/content-todo.md).
import { CONTACT_EMAIL } from '../consts';

export const researchLabels = {
  type: {
    paper: { en: 'PAPER', es: 'ARTÍCULO', va: 'ARTICLE' },
    poster: { en: 'POSTER', es: 'PÓSTER', va: 'PÒSTER' },
    'write-up': { en: 'WRITE-UP', es: 'INFORME', va: 'INFORME' },
  },
  status: {
    published: { en: 'PUBLISHED', es: 'PUBLICADO', va: 'PUBLICAT' },
    preprint: { en: 'PREPRINT', es: 'PREPRINT', va: 'PREPRINT' },
    presented: { en: 'PRESENTED', es: 'PRESENTADO', va: 'PRESENTAT' },
    coming: { en: 'COMING', es: 'PRÓXIMAMENTE', va: 'PRÒXIMAMENT' },
  },
  /** Said of an item on a Spanish or Valencian page. */
  inEnglish: { en: 'IN ENGLISH', es: 'EN INGLÉS', va: 'EN ANGLÉS' },
};

export const researchPage = {
  title: { en: 'Research', es: 'Investigación', va: 'Recerca' },
  shout: { en: 'RESEARCH', es: 'INVESTIGACIÓN', va: 'RECERCA' },
  kicker: {
    en: 'RESEARCH · PAPERS, POSTERS AND WRITE-UPS',
    es: 'INVESTIGACIÓN · ARTÍCULOS, PÓSTERES E INFORMES',
    va: 'RECERCA · ARTICLES, PÒSTERS I INFORMES',
  },
  lead: {
    en: 'What we design, simulate and measure, written up and published in the open: the papers, the posters we present and the write-ups of every stage of ALOHA.',
    es: 'Lo que diseñamos, simulamos y medimos, escrito y publicado en abierto: los artículos, los pósteres que presentamos y los informes de cada etapa de ALOHA. Los publicamos en inglés.',
    va: 'El que dissenyem, simulem i mesurem, escrit i publicat en obert: els articles, els pòsters que presentem i els informes de cada etapa d’ALOHA. Els publiquem en anglés.',
  },
  /** After the number of items. */
  items: { en: 'ITEMS', es: 'ENTRADAS', va: 'ENTRADES' },
  listTitle: { en: 'Everything we have published', es: 'Todo lo que hemos publicado', va: 'Tot el que hem publicat' },
  closing: {
    kicker: { en: 'OPEN', es: 'ABIERTO', va: 'OBERT' },
    title: {
      en: 'Read it, reuse it, build on it',
      es: 'Léelo, reutilízalo, construye sobre ello',
      va: 'Llig-ho, reutilitza-ho, construïx sobre això',
    },
    text: {
      en: 'Our write-ups and designs are open. If you work on something close, or want to build your own source, write to us.',
      es: 'Nuestros informes y diseños son abiertos. Si trabajas en algo parecido, o quieres construir tu propia fuente, escríbenos.',
      va: 'Els nostres informes i dissenys són oberts. Si treballes en alguna cosa semblant, o vols construir la teua pròpia font, escriu-nos.',
    },
    action: {
      label: { en: 'Write to us', es: 'Escríbenos', va: 'Escriu-nos' },
      href: `mailto:${CONTACT_EMAIL}?subject=Research`,
    },
  },
};
