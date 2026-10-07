// The Join page's words, one object per language. Placeholder copy from the
// canvas until the team's content document (docs/content-todo.md); the
// Spanish and Valencian versions are drafts for the team to review.

export type JoinLocale = 'en' | 'es' | 'ca-ES-valencia';

export interface JoinCopy {
  /** Where this language's Join page lives. */
  path: string;
  /** The link to this language, in this language. */
  readIn: string;
  meta: { title: string; description: string };
  cover: {
    kicker: (season: string) => string;
    shout: string[];
    lead: string;
    open: (season: string, date: string) => string;
    closed: (season: string, date: string) => string;
    apply: string;
    waitlist: string;
    count: { value: string; label: string };
    photo: { alt: string; lead: string; text: string };
  };
  departments: {
    kicker: string;
    title: string;
    items: { key: 'applied-physics' | 'electronics-control' | 'technical-design' | 'communication'; name: string; body: string; logoLabel: string }[];
  };
  ladder: { kicker: string; title: string; steps: { title: string; body: string }[] };
  team: {
    kicker: (season: string) => string;
    title: string;
    note: string;
    rest: { value: string; text: string };
    photoMissing: string;
  };
  closing: {
    kicker: (season: string) => string;
    title: string;
    open: (date: string) => string;
    closed: (date: string) => string;
  };
}

/** Tools and fingerprint lines are the same in every language. */
export const departmentFacts = {
  'applied-physics': { tools: 'COMSOL · RF-Track · GEANT4 · CST', line: 'W Lα 8.40 keV · THE CATHODE' },
  'electronics-control': { tools: 'KiCad · STM32', line: 'Cu Kα 8.05 keV · EVERY CONDUCTOR' },
  'technical-design': { tools: 'FreeCAD', line: 'Fe Kα 6.40 keV · STAINLESS STEEL' },
  communication: { tools: 'Figma · Manim · Astro', line: 'Hg Lα 9.99 keV · VERMILION' },
} as const;

const en: JoinCopy = {
  path: '/join/',
  readIn: 'READ IN ENGLISH',
  meta: {
    title: 'Join the team',
    description: 'Join Innova Physics UPV: students from different degrees design, simulate and build an electron accelerator at the UPV, in four departments.',
  },
  cover: {
    kicker: (season) => `JOIN · ${season}`,
    shout: ['JOIN THE TEAM'],
    lead: 'Students from different degrees design, simulate and build an electron accelerator at the UPV. You learn by building, in one of four departments.',
    open: (season, date) => `APPLICATIONS FOR ${season} OPEN UNTIL ${date}`,
    closed: (season, date) => `APPLICATIONS FOR ${season} CLOSED ON ${date}`,
    apply: 'Apply now',
    waitlist: 'Tell me when it opens',
    count: { value: '30+', label: 'STUDENTS · OCTOBER 2026' },
    photo: {
      alt: 'Seven team members with CERN visitor lanyards, smiling in front of their posters at CERN.',
      lead: 'The team at CERN.',
      text: 'July 2026.',
    },
  },
  departments: {
    kicker: 'DEPARTMENTS',
    title: 'Four departments, one machine',
    items: [
      {
        key: 'applied-physics',
        name: 'Applied Physics',
        body: 'Simulate the beam: fields, optics and the RF of the cavities, from the cathode to the 1 MeV design target.',
        logoLabel: 'Innova Physics, with the fingerprint of tungsten',
      },
      {
        key: 'electronics-control',
        name: 'Electronics & Control',
        body: 'Design the supplies and the control. This semester: the cathode supply and the control of the vacuum system.',
        logoLabel: 'Innova Physics, with the fingerprint of copper',
      },
      {
        key: 'technical-design',
        name: 'Technical Design',
        body: 'Turn the physics into parts: chambers, supports and the mechanics of the cavities.',
        logoLabel: 'Innova Physics, with the fingerprint of stainless steel',
      },
      {
        key: 'communication',
        name: 'Communication',
        body: 'Tell the story: the posts, the research write-ups, explainers and this website, in the team’s own design system.',
        logoLabel: 'Innova Physics, with the fingerprint of vermilion',
      },
    ],
  },
  ladder: {
    kicker: 'HOW IT WORKS',
    title: 'From candidate to qualified',
    steps: [
      { title: 'Apply', body: 'When a round opens, fill in the form.' },
      { title: 'Candidate', body: 'A trial on a real task, with a mentor.' },
      { title: 'Member', body: 'Part of a department and its tasks.' },
      { title: 'Qualified', body: 'Recognised in an area, one area at a time.' },
    ],
  },
  team: {
    kicker: (season) => `THE TEAM · ${season}`,
    title: 'The people you would build with',
    note: 'PHOTOS IN COLOUR · PUBLISHED WITH CONSENT',
    rest: { value: '30+', text: 'students across the four departments' },
    photoMissing: 'PHOTO TO COME',
  },
  closing: {
    kicker: (season) => `JOIN · ${season}`,
    title: 'Build it with us',
    open: (date) => `Applications are open until ${date}.`,
    closed: (date) => `Applications closed on ${date}. Leave your email and we will write when the next round opens.`,
  },
};

export const joinCopy: Partial<Record<JoinLocale, JoinCopy>> = { en };
