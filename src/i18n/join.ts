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
    /** The name of the link from a card to the person's LinkedIn profile. */
    onLinkedIn: (name: string) => string;
  };
  /** The line beside the application button: how applications are handled. */
  privacy: { before: string; link: string; href: string; after: string };
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
    onLinkedIn: (name) => `${name} on LinkedIn`,
  },
  privacy: { before: 'We handle your application as our ', link: 'privacy notice', href: '/privacy/', after: ' explains.' },
  closing: {
    kicker: (season) => `JOIN · ${season}`,
    title: 'Build it with us',
    open: (date) => `Applications are open until ${date}.`,
    closed: (date) => `Applications closed on ${date}. Leave your email and we will write when the next round opens.`,
  },
};

// Draft, to be reviewed by the team.
const es: JoinCopy = {
  path: '/es/join/',
  readIn: 'LEER EN ESPAÑOL',
  meta: {
    title: 'Únete al equipo',
    description: 'Únete a Innova Physics UPV: estudiantes de distintas titulaciones diseñan, simulan y construyen un acelerador de electrones en la UPV, en cuatro departamentos.',
  },
  cover: {
    kicker: (season) => `ÚNETE · ${season}`,
    shout: ['ÚNETE AL EQUIPO'],
    lead: 'Estudiantes de distintas titulaciones diseñan, simulan y construyen un acelerador de electrones en la UPV. Aprendes construyendo, en uno de los cuatro departamentos.',
    open: (season, date) => `INSCRIPCIONES ${season} ABIERTAS HASTA EL ${date}`,
    closed: (season, date) => `INSCRIPCIONES ${season} CERRADAS EL ${date}`,
    apply: 'Inscríbete',
    waitlist: 'Avísame cuando abra',
    count: { value: '30+', label: 'ESTUDIANTES · OCTUBRE 2026' },
    photo: {
      alt: 'Siete miembros del equipo con acreditaciones de visitante del CERN, sonriendo delante de sus pósteres en el CERN.',
      lead: 'El equipo en el CERN.',
      text: 'Julio de 2026.',
    },
  },
  departments: {
    kicker: 'DEPARTAMENTOS',
    title: 'Cuatro departamentos, una máquina',
    items: [
      {
        key: 'applied-physics',
        name: 'Física Aplicada',
        body: 'Simula el haz: campos, óptica y la RF de las cavidades, desde el cátodo hasta el objetivo de diseño de 1\u00a0MeV.',
        logoLabel: 'Innova Physics, con la huella del wolframio',
      },
      {
        key: 'electronics-control',
        name: 'Electrónica y Control',
        body: 'Diseña las fuentes y el control. Este cuatrimestre: la fuente del cátodo y el control del sistema de vacío.',
        logoLabel: 'Innova Physics, con la huella del cobre',
      },
      {
        key: 'technical-design',
        name: 'Diseño Técnico',
        body: 'Convierte la física en piezas: cámaras, soportes y la mecánica de las cavidades.',
        logoLabel: 'Innova Physics, con la huella del acero inoxidable',
      },
      {
        key: 'communication',
        name: 'Comunicación',
        body: 'Cuenta la historia: las publicaciones, los informes de investigación, la divulgación y esta web, con el sistema de diseño del equipo.',
        logoLabel: 'Innova Physics, con la huella del bermellón',
      },
    ],
  },
  ladder: {
    kicker: 'CÓMO FUNCIONA',
    title: 'De la candidatura a la cualificación',
    steps: [
      { title: 'Inscripción', body: 'Cuando abra una convocatoria, rellena el formulario.' },
      { title: 'Candidatura', body: 'Una prueba en una tarea real, con una persona mentora.' },
      { title: 'Miembro', body: 'Parte de un departamento y de sus tareas.' },
      { title: 'Cualificación', body: 'Reconocimiento en un área, de una en una.' },
    ],
  },
  team: {
    kicker: (season) => `EL EQUIPO · ${season}`,
    title: 'Las personas con las que construirías',
    note: 'FOTOS EN COLOR · PUBLICADAS CON CONSENTIMIENTO',
    rest: { value: '30+', text: 'estudiantes en los cuatro departamentos' },
    photoMissing: 'FOTO PENDIENTE',
    onLinkedIn: (name) => `${name} en LinkedIn`,
  },
  privacy: { before: 'Tratamos tu candidatura como explica nuestra ', link: 'política de privacidad', href: '/es/privacy/', after: '.' },
  closing: {
    kicker: (season) => `ÚNETE · ${season}`,
    title: 'Constrúyelo con nosotros',
    open: (date) => `Las inscripciones están abiertas hasta el ${date}.`,
    closed: (date) => `Las inscripciones se cerraron el ${date}. Déjanos tu correo y te escribiremos cuando abra la próxima convocatoria.`,
  },
};

// Draft in Valencian (AVL norms), to be reviewed by the team.
const va: JoinCopy = {
  path: '/va/join/',
  readIn: 'LLEGIR EN VALENCIÀ',
  meta: {
    title: 'Unix-te a l’equip',
    description: 'Unix-te a Innova Physics UPV: estudiants de diferents titulacions dissenyen, simulen i construïxen un accelerador d’electrons a la UPV, en quatre departaments.',
  },
  cover: {
    kicker: (season) => `UNIX-TE · ${season}`,
    shout: ['UNIX-TE A L’EQUIP'],
    lead: 'Estudiants de diferents titulacions dissenyen, simulen i construïxen un accelerador d’electrons a la UPV. Aprens construint, en un dels quatre departaments.',
    open: (season, date) => `INSCRIPCIONS ${season} OBERTES FINS AL ${date}`,
    closed: (season, date) => `INSCRIPCIONS ${season} TANCADES EL ${date}`,
    apply: 'Inscriu-te',
    waitlist: 'Avisa’m quan s’òbriga',
    count: { value: '30+', label: 'ESTUDIANTS · OCTUBRE 2026' },
    photo: {
      alt: 'Set membres de l’equip amb acreditacions de visitant del CERN, somrient davant dels seus pòsters al CERN.',
      lead: 'L’equip al CERN.',
      text: 'Juliol de 2026.',
    },
  },
  departments: {
    kicker: 'DEPARTAMENTS',
    title: 'Quatre departaments, una màquina',
    items: [
      {
        key: 'applied-physics',
        name: 'Física Aplicada',
        body: 'Simula el feix: camps, òptica i la RF de les cavitats, des del càtode fins a l’objectiu de disseny d’1\u00a0MeV.',
        logoLabel: 'Innova Physics, amb l’empremta del wolframi',
      },
      {
        key: 'electronics-control',
        name: 'Electrònica i Control',
        body: 'Dissenya les fonts i el control. Este quadrimestre: la font del càtode i el control del sistema de buit.',
        logoLabel: 'Innova Physics, amb l’empremta del coure',
      },
      {
        key: 'technical-design',
        name: 'Disseny Tècnic',
        body: 'Convertix la física en peces: cambres, suports i la mecànica de les cavitats.',
        logoLabel: 'Innova Physics, amb l’empremta de l’acer inoxidable',
      },
      {
        key: 'communication',
        name: 'Comunicació',
        body: 'Conta la història: les publicacions, els informes de recerca, la divulgació i esta web, amb el sistema de disseny de l’equip.',
        logoLabel: 'Innova Physics, amb l’empremta del vermelló',
      },
    ],
  },
  ladder: {
    kicker: 'COM FUNCIONA',
    title: 'De la candidatura a la qualificació',
    steps: [
      { title: 'Inscripció', body: 'Quan s’òbriga una convocatòria, emplena el formulari.' },
      { title: 'Candidatura', body: 'Una prova en una tasca real, amb una persona mentora.' },
      { title: 'Membre', body: 'Part d’un departament i de les seues tasques.' },
      { title: 'Qualificació', body: 'Reconeixement en una àrea, d’una en una.' },
    ],
  },
  team: {
    kicker: (season) => `L’EQUIP · ${season}`,
    title: 'Les persones amb qui construiries',
    note: 'FOTOS EN COLOR · PUBLICADES AMB CONSENTIMENT',
    rest: { value: '30+', text: 'estudiants en els quatre departaments' },
    photoMissing: 'FOTO PENDENT',
    onLinkedIn: (name) => `${name} a LinkedIn`,
  },
  privacy: { before: 'Tractem la teua candidatura com explica la nostra ', link: 'política de privacitat', href: '/es/privacy/', after: ' (en castellà).' },
  closing: {
    kicker: (season) => `UNIX-TE · ${season}`,
    title: 'Construïx-lo amb nosaltres',
    open: (date) => `Les inscripcions estan obertes fins al ${date}.`,
    closed: (date) => `Les inscripcions es van tancar el ${date}. Deixa’ns el teu correu i t’escriurem quan s’òbriga la pròxima convocatòria.`,
  },
};

export const joinCopy: Partial<Record<JoinLocale, JoinCopy>> = { en, es, 'ca-ES-valencia': va };
