// The home page's own copy, in the three languages. The story's stations are
// in src/content/seasons/, the readings in src/data/readings.ts and the Join
// call reuses the Join page's words (src/i18n/join.ts). The launch copy is
// the doc "Website copy for launch", tab 2 (docs/copy/02-home.md). No founding
// year anywhere: the story starts in 2026.
import type { Text } from '../i18n';
import { round } from './recruitment';

/** Students this season, counted once the round is decided: one number for the home and Join, set in src/data/recruitment.ts. While it is not set the facts line leaves the count out. */
const STUDENTS = round.students;

export const home = {
  cover: {
    kicker: 'INNOVA PHYSICS UPV · VALÈNCIA',
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
      en: 'Few universities let undergraduates near an accelerator. At the UPV, the accelerator elective our tutor teaches at ETSIT began as our proposal. We are students from different degrees who design, simulate and build an accelerator, and we aim to publish every step so other teams can build their own.',
      es: 'Pocas universidades dejan que sus estudiantes de grado se acerquen a un acelerador. En la UPV, la optativa de aceleradores que imparte nuestro tutor en la ETSIT nació como una propuesta nuestra. Somos estudiantes de distintas titulaciones que diseñamos, simulamos y construimos un acelerador, y aspiramos a publicar cada paso para que otros equipos construyan el suyo.',
      va: 'Poques universitats deixen que els seus estudiants de grau s’acosten a un accelerador. A la UPV, l’optativa d’acceleradors que impartix el nostre tutor a l’ETSIT va nàixer com una proposta nostra. Som estudiants de diferents titulacions que dissenyem, simulem i construïm un accelerador, i aspirem a publicar cada pas perquè altres equips construïsquen el seu.',
    },
    /** The facts line, its parts joined with " · ". The season dates the count. */
    facts: [
      ...(STUDENTS
        ? [{ en: `${STUDENTS} STUDENTS IN ${round.season}`, es: `${STUDENTS} ESTUDIANTES EN ${round.season}`, va: `${STUDENTS} ESTUDIANTS EN ${round.season}` }]
        : []),
      { en: '4 DEPARTMENTS', es: '4 DEPARTAMENTOS', va: '4 DEPARTAMENTS' },
    ],
    photoAlt: {
      en: 'The Innova Physics UPV team, about thirty students in white team shirts, outdoors.',
      es: 'El equipo de Innova Physics UPV, una treintena de estudiantes con las camisetas blancas del equipo, al aire libre.',
      va: 'L’equip d’Innova Physics UPV, una trentena d’estudiants amb les samarretes blanques de l’equip, a l’aire lliure.',
    },
    caption: {
      lead: { en: '25/26 team photo.', es: 'Foto del equipo 25/26.', va: 'Foto de l’equip 25/26.' },
      /** More about the photo (a place, a credit), if it is ever wanted. Without it the lead stands alone. */
      text: undefined as Text | undefined,
    },
  },
  story: {
    kicker: {
      en: 'OUR STORY · ALOHA · SINCE 2026',
      es: 'NUESTRA HISTORIA · ALOHA · DESDE 2026',
      va: 'LA NOSTRA HISTÒRIA · ALOHA · DES DE 2026',
    },
    title: { en: 'One beamline', es: 'Una línea de haz', va: 'Una línia de feix' },
    lead: {
      en: 'Read it like an accelerator, from the source to the target: every step adds an element to the line.',
      es: 'Léela como un acelerador, de la fuente al blanco: cada paso añade un elemento a la línea.',
      va: 'Llig-la com un accelerador, de la font al blanc: cada pas afig un element a la línia.',
    },
    past: {
      en: 'PAST SEASONS · IP0 TO IP2',
      es: 'TEMPORADAS ANTERIORES · DE IP0 A IP2',
      va: 'TEMPORADES ANTERIORS · D’IP0 A IP2',
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
