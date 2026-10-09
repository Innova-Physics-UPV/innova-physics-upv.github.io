// The words every page shares: the masthead, the footer, the head and the
// small labels of the shared components. Page copy lives with each page's
// data (src/data/) and content (src/content/). The Spanish and Valencian
// (AVL norms) are drafts for the team to review.

export const ui = {
  site: {
    description: {
      en: 'A student team at the Universitat Politècnica de València designing and building ALOHA, an open-hardware tabletop electron accelerator.',
      es: 'Un equipo de estudiantes de la Universitat Politècnica de València que diseña y construye ALOHA, un acelerador de electrones de sobremesa de hardware abierto.',
      va: 'Un equip d’estudiants de la Universitat Politècnica de València que dissenya i construïx ALOHA, un accelerador d’electrons de sobretaula de maquinari obert.',
    },
    imageAlt: {
      en: 'Build the beam: Innova Physics UPV, València.',
      es: 'Construye el haz: Innova Physics UPV, València.',
      va: 'Construïx el feix: Innova Physics UPV, València.',
    },
    skip: { en: 'Skip to content', es: 'Saltar al contenido', va: 'Anar al contingut' },
  },
  masthead: {
    home: { en: 'Innova Physics, home', es: 'Innova Physics, inicio', va: 'Innova Physics, inici' },
    nav: { en: 'Main', es: 'Principal', va: 'Principal' },
    machine: { en: 'MACHINE', es: 'MÁQUINA', va: 'MÀQUINA' },
    research: { en: 'RESEARCH', es: 'INVESTIGACIÓN', va: 'RECERCA' },
    team: { en: 'TEAM', es: 'EQUIPO', va: 'EQUIP' },
    partners: { en: 'PARTNERS', es: 'COLABORADORES', va: 'COL·LABORADORS' },
    join: { en: 'JOIN', es: 'ÚNETE', va: 'UNIX-TE' },
    language: { en: 'Language', es: 'Idioma', va: 'Idioma' },
    /** Said of a language this page does not exist in. */
    onlyIn: {
      en: 'this page is in English only',
      es: 'esta página solo está en inglés',
      va: 'esta pàgina només està en anglés',
    },
    dark: { en: 'DARK', es: 'OSCURO', va: 'FOSC' },
    /** Narrow screens: the button that opens the links. */
    menu: { en: 'MENU', es: 'MENÚ', va: 'MENÚ' },
  },
  footer: {
    marks: {
      en: 'Innova Physics UPV and its institutions',
      es: 'Innova Physics UPV y sus instituciones',
      va: 'Innova Physics UPV i les seues institucions',
    },
    innova: { en: 'Innova Physics UPV, home', es: 'Innova Physics UPV, inicio', va: 'Innova Physics UPV, inici' },
    address: { en: 'ADDRESS', es: 'DIRECCIÓN', va: 'ADREÇA' },
    street: { en: 'Camino de Vera, s/n', es: 'Camino de Vera, s/n', va: 'Camí de Vera, s/n' },
    contact: { en: 'CONTACT', es: 'CONTACTO', va: 'CONTACTE' },
    site: { en: 'SITE', es: 'WEB', va: 'WEB' },
    siteNav: { en: 'Site', es: 'Web', va: 'Web' },
    links: {
      home: { en: 'Home', es: 'Inicio', va: 'Inici' },
      machine: { en: 'The machine', es: 'La máquina', va: 'La màquina' },
      research: { en: 'Research', es: 'Investigación', va: 'Recerca' },
      join: { en: 'Team and join', es: 'El equipo y cómo unirte', va: 'L’equip i com unir-te' },
      partners: { en: 'Partners', es: 'Colaboradores', va: 'Col·laboradors' },
      seasons: { en: 'Past seasons', es: 'Temporadas anteriores', va: 'Temporades anteriors' },
    },
    open: { en: 'OPEN', es: 'ABIERTO', va: 'OBERT' },
    docs: { en: 'DOCS · GITHUB', es: 'DOCUMENTACIÓN · GITHUB', va: 'DOCUMENTACIÓ · GITHUB' },
    texts: { en: 'TEXTS', es: 'TEXTOS', va: 'TEXTOS' },
    /** Creative Commons' own page for the licence, in each language. */
    ccDeed: { en: '', es: 'deed.es', va: 'deed.ca' },
    type: { en: 'TYPE', es: 'TIPOGRAFÍA', va: 'TIPOGRAFIA' },
    legal: { en: 'LEGAL NOTICE', es: 'AVISO LEGAL', va: 'AVÍS LEGAL' },
    privacy: { en: 'PRIVACY', es: 'PRIVACIDAD', va: 'PRIVACITAT' },
    motto: { en: 'Build the beam.', es: 'Construye el haz.', va: 'Construïx el feix.' },
  },
  cue: { en: 'SCROLL', es: 'DESLIZA', va: 'LLISCA' },
  credit: { en: 'Credit:', es: 'Crédito:', va: 'Crèdit:' },
  /** A sideways-scrolling frame (a wide table or figure on a phone). */
  scrolls: { en: 'scrolls sideways', es: 'se desplaza en horizontal', va: 'es desplaça en horitzontal' },
  spec: {
    quantity: { en: 'QUANTITY', es: 'MAGNITUD', va: 'MAGNITUD' },
    value: { en: 'VALUE', es: 'VALOR', va: 'VALOR' },
    status: { en: 'STATUS', es: 'ESTADO', va: 'ESTAT' },
  },
  matrix: {
    benefit: { en: 'BENEFIT', es: 'VENTAJA', va: 'AVANTATGE' },
    included: { en: 'Included', es: 'Incluido', va: 'Inclòs' },
    notIncluded: { en: 'Not included', es: 'No incluido', va: 'No inclòs' },
  },
  markers: {
    label: { en: 'Key to the markers', es: 'Clave de los marcadores', va: 'Clau dels marcadors' },
    built: { en: 'BUILT', es: 'CONSTRUIDO', va: 'CONSTRUÏT' },
    simulated: { en: 'SIMULATED', es: 'SIMULADO', va: 'SIMULAT' },
    notYet: { en: 'NOT BUILT YET', es: 'AÚN SIN CONSTRUIR', va: 'ENCARA SENSE CONSTRUIR' },
    beam: {
      en: 'THE BEAM, AS FAR AS WE HAVE COME',
      es: 'EL HAZ, HASTA DONDE HEMOS LLEGADO',
      va: 'EL FEIX, FINS ON HEM ARRIBAT',
    },
  },
  station: {
    placeholder: {
      en: 'PLACEHOLDER · COPY TO COME FROM THE TEAM',
      es: 'PROVISIONAL · EL TEXTO LO ENVIARÁ EL EQUIPO',
      va: 'PROVISIONAL · EL TEXT L’ENVIARÀ L’EQUIP',
    },
  },
} as const;
