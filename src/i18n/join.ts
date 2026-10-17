// The Join page's words, one object per language: the launch copy approved by
// Marc on 16 October 2026 (docs/copy/03-join.md, Spanish and Valencian in
// docs/copy/08-spanish-and-valencian.md, 8.2). The student count and the month
// the next round opens are facts, not words: src/data/recruitment.ts.

import type { Lang } from './index';

export interface JoinCopy {
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
    /** Once the round has closed: write to the team, to apply late or to hear of the next round. */
    closedAction: { label: string; subject: string };
    /** Under the student count (src/data/recruitment.ts); without a count, neither shows. */
    count: { label: string };
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
    /** Beside the student count, after the cards; without a count, the tile is left out. */
    rest: { text: string };
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
    /** With the month the next round aims to open, a last sentence says so; without it, the sentence is left out. */
    closed: (date: string, nextMonth?: string) => string;
  };
}

/** Tools are the same in every language; the fingerprint line names its element's role in each, with the decimal comma in Spanish and Valencian. */
export const departmentFacts = {
  'applied-physics': {
    tools: 'COMSOL · RF-Track · GEANT4 · CST',
    line: { en: 'W Lα 8.40 keV · THE CATHODE', es: 'W Lα 8,40 keV · EL CÁTODO', va: 'W Lα 8,40 keV · EL CÀTODE' },
  },
  'electronics-control': {
    tools: 'KiCad · STM32',
    line: { en: 'Cu Kα 8.05 keV · EVERY CONDUCTOR', es: 'Cu Kα 8,05 keV · CADA CONDUCTOR', va: 'Cu Kα 8,05 keV · CADA CONDUCTOR' },
  },
  'technical-design': {
    tools: 'FreeCAD',
    line: { en: 'Fe Kα 6.40 keV · STAINLESS STEEL', es: 'Fe Kα 6,40 keV · ACERO INOXIDABLE', va: 'Fe Kα 6,40 keV · ACER INOXIDABLE' },
  },
  communication: {
    tools: 'Figma · Manim · Astro',
    line: { en: 'Hg Lα 9.99 keV · VERMILION', es: 'Hg Lα 9,99 keV · BERMELLÓN', va: 'Hg Lα 9,99 keV · VERMELLÓ' },
  },
};

const en: JoinCopy = {
  readIn: 'READ IN ENGLISH',
  meta: {
    title: 'Join the team',
    description: 'Join Innova Physics UPV: students from different degrees designing and building ALOHA, an open-hardware electron accelerator, in four departments.',
  },
  cover: {
    kicker: (season) => `JOIN · ${season}`,
    shout: ['JOIN THE TEAM'],
    lead: 'Students from different degrees design, simulate and build ALOHA, an open-hardware electron accelerator, at the UPV. You learn by building, in one of four departments.',
    open: (season, date) => `APPLICATIONS FOR ${season} OPEN UNTIL ${date}`,
    closed: (season, date) => `APPLICATIONS FOR ${season} CLOSED ON ${date}`,
    apply: 'Apply now',
    closedAction: { label: 'Write to us', subject: 'Joining Innova Physics UPV' },
    count: { label: 'STUDENTS · OCTOBER 2026' },
    photo: {
      alt: 'Seven team members with CERN visitor lanyards, smiling in front of their posters at CERN.',
      lead: 'The team at CERN.',
      text: 'At the accelECR poster session, 3 July 2026.',
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
        body: 'Design the supplies and the control. This semester: the control of the vacuum system, then the cathode supply.',
        logoLabel: 'Innova Physics, with the fingerprint of copper',
      },
      {
        key: 'technical-design',
        name: 'Technical Design',
        body: 'Turn the physics into parts: the vacuum chamber, the electrodes and their supports, and the frame that holds it all, drawn for a machinist.',
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
      { title: 'Member', body: 'You join a department and pick up tasks. Each task team forms around one deliverable and dissolves when it ships.' },
      { title: 'Qualified', body: 'Recognised in an area, one area at a time.' },
    ],
  },
  team: {
    kicker: (season) => `THE TEAM · ${season}`,
    title: 'The people you would build with',
    note: 'PHOTOS IN COLOUR · PUBLISHED WITH CONSENT',
    rest: { text: 'students across the four departments' },
    photoMissing: 'PHOTO TO COME',
    onLinkedIn: (name) => `${name} on LinkedIn`,
  },
  privacy: { before: 'We handle your application as our ', link: 'privacy notice', href: '/privacy/', after: ' explains.' },
  closing: {
    kicker: (season) => `JOIN · ${season}`,
    title: 'Build it with us',
    open: (date) => `Applications are open until ${date}.`,
    closed: (date, nextMonth) =>
      `Applications closed on ${date}. Write to us to apply late, as an exception, or to hear when the next round opens.` +
      (nextMonth ? ` We aim to open it in ${nextMonth}.` : ''),
  },
};

// Spanish, reviewed by Marc on 9 October 2026; launch copy from tab 8.2.
const es: JoinCopy = {
  readIn: 'LEER EN ESPAÑOL',
  meta: {
    title: 'Únete al equipo',
    description: 'Únete a Innova Physics UPV: estudiantes de distintas titulaciones que diseñan y construyen ALOHA, un acelerador de electrones de hardware abierto, en cuatro departamentos.',
  },
  cover: {
    kicker: (season) => `ÚNETE · ${season}`,
    shout: ['ÚNETE AL EQUIPO'],
    lead: 'Estudiantes de distintas titulaciones diseñan, simulan y construyen ALOHA, un acelerador de electrones de hardware abierto, en la UPV. Aprendes construyendo, en uno de los cuatro departamentos.',
    open: (season, date) => `INSCRIPCIONES ${season} ABIERTAS HASTA EL ${date}`,
    closed: (season, date) => `INSCRIPCIONES ${season} CERRADAS EL ${date}`,
    apply: 'Inscríbete',
    closedAction: { label: 'Escríbenos', subject: 'Unirme a Innova Physics UPV' },
    count: { label: 'ESTUDIANTES · OCTUBRE 2026' },
    photo: {
      alt: 'Siete miembros del equipo con acreditaciones de visitante del CERN, sonriendo delante de sus pósteres en el CERN.',
      lead: 'El equipo en el CERN.',
      text: 'En la sesión de pósteres accelECR, 3 de julio de 2026.',
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
        body: 'Diseñar las fuentes de alimentación y el control. Este cuatrimestre: el control del sistema de vacío y, después, la fuente del cátodo.',
        logoLabel: 'Innova Physics, con la huella del cobre',
      },
      {
        key: 'technical-design',
        name: 'Diseño Técnico',
        body: 'Convertir la física en piezas: la cámara de vacío, los electrodos y sus soportes, y la estructura que lo sostiene todo, dibujados para un taller de mecanizado.',
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
      { title: 'Miembro', body: 'Entras en un departamento y asumes tareas. Cada equipo de tarea se forma en torno a un entregable y se disuelve al entregarlo.' },
      { title: 'Cualificación', body: 'Reconocimiento en un área, de una en una.' },
    ],
  },
  team: {
    kicker: (season) => `EL EQUIPO · ${season}`,
    title: 'Las personas con las que construirías',
    note: 'FOTOS EN COLOR · PUBLICADAS CON CONSENTIMIENTO',
    rest: { text: 'estudiantes en los cuatro departamentos' },
    photoMissing: 'FOTO PENDIENTE',
    onLinkedIn: (name) => `${name} en LinkedIn`,
  },
  privacy: { before: 'Tratamos tu candidatura como explica nuestra ', link: 'política de privacidad', href: '/es/privacy/', after: '.' },
  closing: {
    kicker: (season) => `ÚNETE · ${season}`,
    title: 'Constrúyelo con nosotros',
    open: (date) => `Las inscripciones están abiertas hasta el ${date}.`,
    closed: (date, nextMonth) =>
      `Las candidaturas se cerraron el ${date}. Escríbenos para presentar una candidatura fuera de plazo, como excepción, o para saber cuándo se abre la próxima convocatoria.` +
      (nextMonth ? ` Aspiramos a abrirla en ${nextMonth}.` : ''),
  },
};

// Valencian elides the article before a day said with a vowel: l’1, l’11.
const el = (date: string) => (/^1{1,2}\s/.test(date) ? `l’${date}` : `el ${date}`);
const al = (date: string) => (/^1{1,2}\s/.test(date) ? `a l’${date}` : `al ${date}`);

// Valencian (AVL norms), reviewed by Marc on 9 October 2026; launch copy from tab 8.2.
const va: JoinCopy = {
  readIn: 'LLEGIR EN VALENCIÀ',
  meta: {
    title: 'Unix-te a l’equip',
    description: 'Unix-te a Innova Physics UPV: estudiants de diferents titulacions que dissenyen i construïxen ALOHA, un accelerador d’electrons de maquinari obert, en quatre departaments.',
  },
  cover: {
    kicker: (season) => `UNIX-TE · ${season}`,
    shout: ['UNIX-TE A L’EQUIP'],
    lead: 'Estudiants de diferents titulacions dissenyen, simulen i construïxen ALOHA, un accelerador d’electrons de maquinari obert, a la UPV. Aprens construint, en un dels quatre departaments.',
    open: (season, date) => `INSCRIPCIONS ${season} OBERTES FINS ${al(date).toUpperCase()}`,
    closed: (season, date) => `INSCRIPCIONS ${season} TANCADES ${el(date).toUpperCase()}`,
    apply: 'Inscriu-te',
    closedAction: { label: 'Escriu-nos', subject: 'Unir-me a Innova Physics UPV' },
    count: { label: 'ESTUDIANTS · OCTUBRE 2026' },
    photo: {
      alt: 'Set membres de l’equip amb acreditacions de visitant del CERN, somrient davant dels seus pòsters al CERN.',
      lead: 'L’equip al CERN.',
      text: 'A la sessió de pòsters accelECR, 3 de juliol de 2026.',
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
        body: 'Dissenyar les fonts d’alimentació i el control. Este quadrimestre: el control del sistema de buit i, després, la font del càtode.',
        logoLabel: 'Innova Physics, amb l’empremta del coure',
      },
      {
        key: 'technical-design',
        name: 'Disseny Tècnic',
        body: 'Convertir la física en peces: la cambra de buit, els elèctrodes i els seus suports, i l’estructura que ho sosté tot, dibuixats per a un taller de mecanitzat.',
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
      { title: 'Membre', body: 'Entres en un departament i assumixes tasques. Cada equip de tasca es forma al voltant d’un lliurable i es dissol en lliurar-lo.' },
      { title: 'Qualificació', body: 'Reconeixement en una àrea, d’una en una.' },
    ],
  },
  team: {
    kicker: (season) => `L’EQUIP · ${season}`,
    title: 'Les persones amb qui construiries',
    note: 'FOTOS EN COLOR · PUBLICADES AMB CONSENTIMENT',
    rest: { text: 'estudiants en els quatre departaments' },
    photoMissing: 'FOTO PENDENT',
    onLinkedIn: (name) => `${name} a LinkedIn`,
  },
  privacy: { before: 'Tractem la teua candidatura com explica la nostra ', link: 'política de privacitat', href: '/va/privacy/', after: '.' },
  closing: {
    kicker: (season) => `UNIX-TE · ${season}`,
    title: 'Construïx-lo amb nosaltres',
    open: (date) => `Les inscripcions estan obertes fins ${al(date)}.`,
    closed: (date, nextMonth) =>
      `Les candidatures es van tancar ${el(date)}. Escriu-nos per a presentar una candidatura fora de termini, com a excepció, o per a saber quan s’obri la pròxima convocatòria.` +
      (nextMonth ? ` Aspirem a obrir-la en ${nextMonth}.` : ''),
  },
};

export const joinCopy: Record<Lang, JoinCopy> = { en, es, va };
