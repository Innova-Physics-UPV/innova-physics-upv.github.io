// The home page's own copy, in the three languages. The story's stations are
// in src/content/seasons/, the readings in src/data/readings.ts and the Join
// call reuses the Join page's words (src/i18n/join.ts). Placeholder copy from
// the canvas until the team's content document (docs/content-todo.md).

export const home = {
  cover: {
    kicker: {
      en: 'INNOVA PHYSICS UPV · VALÈNCIA · SINCE 2023',
      es: 'INNOVA PHYSICS UPV · VALÈNCIA · DESDE 2023',
      va: 'INNOVA PHYSICS UPV · VALÈNCIA · DES DE 2023',
    },
    shout: [
      { en: 'BUILD THE', es: 'CONSTRUYE', va: 'CONSTRUÏX' },
      { en: 'BEAM', es: 'EL HAZ', va: 'EL FEIX' },
    ],
    /** The scroll cue while S1 runs. */
    cueScene: {
      en: 'SCROLL TO SWITCH ON THE SOURCE',
      es: 'DESLIZA PARA ENCENDER LA FUENTE',
      va: 'LLISCA PER A ENCENDRE LA FONT',
    },
    join: { en: 'Join the team', es: 'Únete al equipo', va: 'Unix-te a l’equip' },
    follow: { en: 'Follow the beam', es: 'Sigue el haz', va: 'Seguix el feix' },
  },
  /** The cover figure, the COMSOL render of the ALOHA-0 source. */
  source: {
    alt: {
      en: 'COMSOL simulation of the ALOHA-0 electron source: the electrodes as a white wireframe and the electron beam leaving the cathode, pale at low energy and vermilion once accelerated.',
      es: 'Simulación en COMSOL de la fuente de electrones de ALOHA-0: los electrodos como una malla blanca y el haz de electrones saliendo del cátodo, pálido a baja energía y bermellón una vez acelerado.',
      va: 'Simulació en COMSOL de la font d’electrons d’ALOHA-0: els elèctrodes com una malla blanca i el feix d’electrons eixint del càtode, pàl·lid a baixa energia i vermelló una vegada accelerat.',
    },
    cathode: { en: 'CATHODE AND WEHNELT', es: 'CÁTODO Y WEHNELT', va: 'CÀTODE I WEHNELT' },
    anode: { en: 'ANODE · 30 kV', es: 'ÁNODO · 30 kV', va: 'ÀNODE · 30 kV' },
    telefocus: {
      en: 'TELEFOCUS · THE FOCUS LIES FAR BEYOND THE ANODE',
      es: 'TELEFOCUS · EL FOCO QUEDA MUY LEJOS DEL ÁNODO',
      va: 'TELEFOCUS · EL FOCUS QUEDA MOLT LLUNY DE L’ÀNODE',
    },
    caption: {
      lead: { en: 'ALOHA-0, the electron source.', es: 'ALOHA-0, la fuente de electrones.', va: 'ALOHA-0, la font d’electrons.' },
      text: { en: 'Simulated in COMSOL.', es: 'Simulada en COMSOL.', va: 'Simulada en COMSOL.' },
    },
    energy: { en: 'ELECTRON ENERGY', es: 'ENERGÍA DE LOS ELECTRONES', va: 'ENERGIA DELS ELECTRONS' },
  },
  team: {
    kicker: { en: 'THE TEAM', es: 'EL EQUIPO', va: 'L’EQUIP' },
    title: {
      en: 'Particle accelerators, within reach of students',
      es: 'Aceleradores de partículas al alcance de estudiantes',
      va: 'Acceleradors de partícules a l’abast d’estudiants',
    },
    /** S4 lights it word by word. */
    statement: {
      en: 'Few universities let undergraduates near an accelerator. We are students from different degrees at the UPV who design, simulate and build one, and we aim to publish every step so other teams can build their own.',
      es: 'Pocas universidades dejan que sus estudiantes de grado se acerquen a un acelerador. Somos estudiantes de distintas titulaciones de la UPV que diseñamos, simulamos y construimos uno, y aspiramos a publicar cada paso para que otros equipos puedan construir el suyo.',
      va: 'Poques universitats deixen que els seus estudiants de grau s’acosten a un accelerador. Som estudiants de diferents titulacions de la UPV que dissenyem, simulem i construïm un accelerador, i aspirem a publicar cada pas perquè altres equips puguen construir el seu.',
    },
    facts: {
      en: 'FOUNDED 2023 · 30+ STUDENTS · 4 DEPARTMENTS',
      es: 'FUNDADO EN 2023 · 30+ ESTUDIANTES · 4 DEPARTAMENTOS',
      va: 'FUNDAT EL 2023 · 30+ ESTUDIANTS · 4 DEPARTAMENTS',
    },
    photoAlt: {
      en: 'The Innova Physics UPV team, about thirty students in white team shirts, outdoors.',
      es: 'El equipo de Innova Physics UPV, una treintena de estudiantes con las camisetas blancas del equipo, al aire libre.',
      va: 'L’equip d’Innova Physics UPV, una trentena d’estudiants amb les samarretes blanques de l’equip, a l’aire lliure.',
    },
    caption: {
      lead: { en: 'The team.', es: 'El equipo.', va: 'L’equip.' },
      text: { en: '[SEASON].', es: '[TEMPORADA].', va: '[TEMPORADA].' },
    },
  },
  story: {
    kicker: { en: 'OUR STORY · 2023 TO NOW', es: 'NUESTRA HISTORIA · DE 2023 A HOY', va: 'LA NOSTRA HISTÒRIA · DE 2023 A HUI' },
    title: { en: 'One beamline', es: 'Una línea de haz', va: 'Una línia de feix' },
    lead: {
      en: 'Read it like an accelerator, from the source to the target: every season adds an element to the line.',
      es: 'Léela como un acelerador, de la fuente al blanco: cada temporada añade un elemento a la línea.',
      va: 'Llig-la com un accelerador, de la font al blanc: cada temporada afig un element a la línia.',
    },
    past: {
      en: 'PAST SEASONS · IP-0 TO IP-2',
      es: 'TEMPORADAS ANTERIORES · DE IP-0 A IP-2',
      va: 'TEMPORADES ANTERIORS · D’IP-0 A IP-2',
    },
  },
  readings: {
    kicker: { en: 'THE TARGET · AN AIM', es: 'EL BLANCO · UNA ASPIRACIÓN', va: 'EL BLANC · UNA ASPIRACIÓ' },
    /** The art line: its last words in italics. */
    title: {
      before: { en: 'A beam reads a painting ', es: 'Un haz lee un cuadro ', va: 'Un feix llig un quadre ' },
      em: { en: 'twice.', es: 'dos veces.', va: 'dues vegades.' },
    },
    text: {
      en: 'Above the line, energy: every pigment answers the beam with its own X-ray lines. Below it, depth: the layers a painter laid, and the ones they covered. We aim to make ALOHA a tool for conservation, one that reads pigments without taking a sample.',
      es: 'Por encima de la línea, la energía: cada pigmento responde al haz con sus propias líneas de rayos X. Por debajo, la profundidad: las capas que puso un pintor, y las que tapó. Aspiramos a hacer de ALOHA una herramienta para la conservación, que lea los pigmentos sin tomar muestras.',
      va: 'Damunt de la línia, l’energia: cada pigment respon al feix amb les seues pròpies línies de raigs X. Davall, la profunditat: les capes que va posar un pintor, i les que va tapar. Aspirem a fer d’ALOHA una eina per a la conservació, que llija els pigments sense prendre’n mostres.',
    },
  },
  join: {
    body: {
      en: 'Students from different degrees design, simulate and build ALOHA together: you learn by building, in one of four departments.',
      es: 'Estudiantes de distintas titulaciones diseñan, simulan y construyen ALOHA juntos: aprendes construyendo, en uno de los cuatro departamentos.',
      va: 'Estudiants de diferents titulacions dissenyen, simulen i construïxen ALOHA junts: aprens construint, en un dels quatre departaments.',
    },
    meet: { en: 'Meet the team', es: 'Conoce al equipo', va: 'Coneix l’equip' },
  },
  partners: {
    title: { en: 'WITH THE SUPPORT OF', es: 'CON EL APOYO DE', va: 'AMB EL SUPORT DE' },
    become: { en: 'BECOME A PARTNER', es: 'COLABORA CON NOSOTROS', va: 'COL·LABORA AMB NOSALTRES' },
  },
};
