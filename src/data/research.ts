// The research pages' own copy and labels, in the three languages. The items
// themselves are Markdown in src/content/research/<item>/index.md(x), in the
// language they were written in (English so far).

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

// Until the first item is up, the page is only its cover (Marc, 16 October
// 2026). The list's copy (tab 5.1) and the page's description (tab 7.1) are
// in docs/copy/ and come here, in the three languages, with the first item:
// see src/content/research/README.md.
export const researchPage = {
  title: { en: 'Research', es: 'Investigación', va: 'Recerca' },
  kicker: { en: 'RESEARCH', es: 'INVESTIGACIÓN', va: 'RECERCA' },
  shout: { en: 'COMING SOON', es: 'PRÓXIMAMENTE', va: 'PRÒXIMAMENT' },
};
