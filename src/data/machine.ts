// The machine page's content: the stages, their numbers, this year's road
// and the open licences, in the three languages. The copy is the launch copy
// (docs/copy/04-the-machine.md, Spanish and Valencian in 08, section 8.3).
// Every number carries its unit and its status. A whole number is written
// once; a decimal is a { en, es, va } text, since Spanish and Valencian take
// the decimal comma (2.998 GHz, 2,998 GHz).
import type { ImageMetadata } from 'astro';
import modelZero from '../assets/photos/model-0-bench.webp';
import alohaZeroRender from '../assets/photos/aloha-0-source-render.webp';
import { CERN_OHL_URL } from '../consts';
import type { Text } from '../i18n';

export type Marker = 'solid' | 'hatched' | 'outlined';

export interface Spec {
  quantity: Text;
  value: Text;
  unit?: Text;
  status: Text;
}

export interface Stage {
  id: string;
  kicker: Text;
  title: string;
  marker: Marker;
  /** The status in words, beside its chip. */
  status: Text;
  body: Text;
  specs: Spec[];
  picture?:
    | { kind: 'photo'; src: ImageMetadata; alt: Text; caption: { lead: Text; text?: Text } }
    | { kind: 'figure'; figure: 'aloha-0-section'; caption: { lead: Text; text?: Text } };
}

// The status words, so each is translated once.
const BUILT = { en: 'BUILT', es: 'CONSTRUIDO', va: 'CONSTRUÏT' };
const SIMULATED = { en: 'SIMULATED', es: 'SIMULADO', va: 'SIMULAT' };
const SIMULATED_COMSOL = { en: 'SIMULATED · COMSOL', es: 'SIMULADO · COMSOL', va: 'SIMULAT · COMSOL' };
const DESIGN = { en: 'DESIGN', es: 'DISEÑO', va: 'DISSENY' };
const DESIGN_TARGET = { en: 'DESIGN TARGET', es: 'OBJETIVO DE DISEÑO', va: 'OBJECTIU DE DISSENY' };
const PROPOSED = { en: 'PROPOSED', es: 'PROPUESTO', va: 'PROPOSAT' };
const AIM = { en: 'AIM', es: 'ASPIRACIÓN', va: 'ASPIRACIÓ' };
const CAVITIES = { en: 'cavities', es: 'cavidades', va: 'cavitats' };
const BEAM_ENERGY = { en: 'Beam energy', es: 'Energía del haz', va: 'Energia del feix' };
const BEFORE_JANUARY = {
  en: 'TARGET · BEFORE JANUARY 2027',
  es: 'OBJETIVO · ANTES DE ENERO DE 2027',
  va: 'OBJECTIU · ABANS DE GENER DE 2027',
};
const SEMESTER_1_BUILD = { en: 'SEMESTER 1 · BUILD', es: 'CUATRIMESTRE 1 · CONSTRUCCIÓN', va: 'QUADRIMESTRE 1 · CONSTRUCCIÓ' };

/** The page's own words. */
export const machinePage = {
  title: { en: 'The machine', es: 'La máquina', va: 'La màquina' },
  description: {
    en: 'ALOHA, a linear open-hardware accelerator, built in stages by students at the UPV: what is built, what is simulated and what is still on paper.',
    es: 'ALOHA, un acelerador lineal de hardware abierto, construido por etapas por estudiantes de la UPV: lo que está construido, lo que está simulado y lo que sigue sobre el papel.',
    va: 'ALOHA, un accelerador lineal de maquinari obert, construït per etapes per estudiants de la UPV: el que està construït, el que està simulat i el que continua sobre el paper.',
  },
  kicker: {
    en: 'ALOHA · A LINEAR OPEN-HARDWARE ACCELERATOR',
    es: 'ALOHA · UN ACELERADOR LINEAL DE HARDWARE ABIERTO',
    va: 'ALOHA · UN ACCELERADOR LINEAL DE MAQUINARI OBERT',
  },
  shout: { en: 'THE MACHINE', es: 'LA MÁQUINA', va: 'LA MÀQUINA' },
  lead: {
    en: 'ALOHA, A Linear Open-Hardware Accelerator, is built in stages, ordered by risk and by who will use them; the numbers follow the order they were proposed. We aim to design, simulate, build and document each one in the open before the next.',
    es: 'ALOHA, A Linear Open-Hardware Accelerator, se construye por etapas, ordenadas por riesgo y por quién las usará; los números siguen el orden en que se propusieron. Aspiramos a diseñar, simular, construir y documentar cada una en abierto antes de la siguiente.',
    va: 'ALOHA, A Linear Open-Hardware Accelerator, es construïx per etapes, ordenades per risc i per qui les usarà; els números seguixen l’ordre en què es van proposar. Aspirem a dissenyar, simular, construir i documentar cada una en obert abans de la següent.',
  },
  hero: {
    en: 'ALOHA-1, the whole line: scrolls sideways',
    es: 'ALOHA-1, la línea completa: se desplaza en horizontal',
    va: 'ALOHA-1, la línia completa: es desplaça en horitzontal',
  },
  legend: {
    label: { en: 'How the drawing shows status', es: 'Cómo muestra el dibujo el estado', va: 'Com mostra el dibuix l’estat' },
    solid: { en: 'SOLID · BUILT OR MEASURED', es: 'SÓLIDO · CONSTRUIDO O MEDIDO', va: 'SÒLID · CONSTRUÏT O MESURAT' },
    hatched: { en: 'HATCHED · SIMULATED', es: 'RAYADO · SIMULADO', va: 'RATLLAT · SIMULAT' },
    outlined: { en: 'OUTLINE · DESIGN OR PLANNED', es: 'CONTORNO · DISEÑO O PREVISTO', va: 'CONTORN · DISSENY O PREVIST' },
    caption: {
      lead: { en: 'ALOHA-1, the line.', es: 'ALOHA-1, la línea.', va: 'ALOHA-1, la línia.' },
      text: { en: 'Schematic, not to scale.', es: 'Esquema, no a escala.', va: 'Esquema, no a escala.' },
    },
  },
  stages: { en: 'Stages', es: 'Etapas', va: 'Etapes' },
  /** The name of a stage's table, for screen readers. */
  inNumbers: { en: 'in numbers', es: 'en cifras', va: 'en xifres' },
  road: { en: 'The road for', es: 'El camino de', va: 'El camí de' },
  open: { en: 'OPEN', es: 'ABIERTO', va: 'OBERT' },
};

export const stages: Stage[] = [
  {
    id: 'model-0',
    kicker: { en: 'STAGE 0 · DEMONSTRATOR', es: 'ETAPA 0 · DEMOSTRADOR', va: 'ETAPA 0 · DEMOSTRADOR' },
    title: 'Model-0',
    marker: 'solid',
    status: BUILT,
    body: {
      en: 'A glow-discharge demonstrator that makes the path of a beam visible. It brought Edwards Vacuum on board as our first sponsor.',
      es: 'Un demostrador de descarga luminiscente que hace visible el camino de un haz. Gracias a él, Edwards Vacuum se unió como nuestro primer patrocinador.',
      va: 'Un demostrador de descàrrega luminescent que fa visible el camí d’un feix. Gràcies a ell, Edwards Vacuum es va unir com el nostre primer patrocinador.',
    },
    specs: [
      {
        quantity: { en: 'Pressure, operating', es: 'Presión, en funcionamiento', va: 'Pressió, en funcionament' },
        value: { en: '1.7', es: '1,7', va: '1,7' },
        unit: 'Torr',
        status: {
          en: 'MEASURED · PIRANI GAUGE · 7 JULY 2026',
          es: 'MEDIDO · VACUÓMETRO PIRANI · 7 DE JULIO DE 2026',
          va: 'MESURAT · VACUÒMETRE PIRANI · 7 DE JULIOL DE 2026',
        },
      },
      { quantity: { en: 'Supply, isolated', es: 'Fuente, aislada', va: 'Font, aïllada' }, value: '10', unit: 'kV', status: BUILT },
    ],
    picture: {
      kind: 'photo',
      src: modelZero,
      alt: {
        en: 'Model-0 on the bench: an Edwards vacuum pump connected to the glass tube where the discharge glows.',
        es: 'Model-0 en el banco: una bomba de vacío Edwards conectada al tubo de vidrio donde brilla la descarga.',
        va: 'Model-0 en el banc: una bomba de buit Edwards connectada al tub de vidre on brilla la descàrrega.',
      },
      caption: {
        lead: { en: 'Model-0 on the bench.', es: 'Model-0 en el banco.', va: 'Model-0 en el banc.' },
        text: {
          en: 'The vacuum pump and the glass tube where the discharge glows.',
          es: 'La bomba de vacío y el tubo de vidrio donde brilla la descarga.',
          va: 'La bomba de buit i el tub de vidre on brilla la descàrrega.',
        },
      },
    },
  },
  {
    id: 'aloha-0',
    kicker: { en: 'STAGE 1 · THE ELECTRON SOURCE', es: 'ETAPA 1 · LA FUENTE DE ELECTRONES', va: 'ETAPA 1 · LA FONT D’ELECTRONS' },
    title: 'ALOHA-0',
    marker: 'hatched',
    status: SIMULATED,
    body: {
      en: 'The electron source: a thermionic telefocus triode. A tungsten hairpin cathode and a Wehnelt cylinder at −20 kV face a grounded anode, and the Wehnelt shapes the emission so the beam focuses far beyond the anode. The 20 keV beam ends on a graphite collector inside a closed chamber, which stops it and measures its current. We build it once, to the beam requirements of ALOHA-2.',
      es: 'La fuente de electrones: un triodo termoiónico telefocus. Un cátodo de horquilla de wolframio y un cilindro de Wehnelt a −20 kV se enfrentan a un ánodo a tierra, y el Wehnelt da forma a la emisión para que el haz enfoque mucho más allá del ánodo. El haz de 20 keV termina en un colector de grafito dentro de una cámara cerrada, que lo detiene y mide su corriente. La construimos una sola vez, con los requisitos de haz de ALOHA-2.',
      va: 'La font d’electrons: un tríode termoiònic telefocus. Un càtode de forquilla de tungstè i un cilindre de Wehnelt a −20 kV s’encaren a un ànode connectat a terra, i el Wehnelt dona forma a l’emissió perquè el feix enfoque molt més enllà de l’ànode. El feix de 20 keV acaba en un col·lector de grafit dins d’una cambra tancada, que l’atura i en mesura el corrent. La construïm una sola vegada, amb els requisits de feix d’ALOHA-2.',
    },
    // The design point (20 keV, under 1 mA) waits for a new simulation; the
    // 30 kV run stays as what was simulated, so no number reads as both.
    specs: [
      { quantity: BEAM_ENERGY, value: '20', unit: 'keV', status: DESIGN },
      { quantity: { en: 'Beam current', es: 'Corriente del haz', va: 'Corrent del feix' }, value: '<1', unit: 'mA', status: DESIGN },
      {
        quantity: { en: 'Extraction voltage, as simulated', es: 'Tensión de extracción, simulada', va: 'Tensió d’extracció, simulada' },
        value: '30',
        unit: 'kV',
        status: SIMULATED_COMSOL,
      },
      {
        quantity: { en: 'Beam current, as simulated', es: 'Corriente del haz, simulada', va: 'Corrent del feix, simulat' },
        value: { en: '1.5', es: '1,5', va: '1,5' },
        unit: 'mA',
        status: SIMULATED_COMSOL,
      },
      {
        quantity: { en: 'Beam spot, as simulated', es: 'Foco del haz, simulado', va: 'Focus del feix, simulat' },
        value: '<1',
        unit: 'mm',
        status: SIMULATED_COMSOL,
      },
      {
        quantity: { en: 'Cathode', es: 'Cátodo', va: 'Càtode' },
        value: { en: 'W hairpin, thermionic', es: 'Horquilla de W, termoiónico', va: 'Forquilla de W, termoiònic' },
        status: DESIGN,
      },
      {
        quantity: { en: 'Beam stop', es: 'Absorbedor del haz', va: 'Absorbidor del feix' },
        value: { en: 'Graphite collector', es: 'Colector de grafito', va: 'Col·lector de grafit' },
        status: DESIGN,
      },
      // Proposed for ALOHA-0's own beam, not ALOHA-1's (Marc, 17 October 2026).
      { quantity: { en: 'Experiment', es: 'Experimento', va: 'Experiment' }, value: 'Smith-Purcell', unit: 'sub-THz', status: PROPOSED },
    ],
    // The COMSOL render of the source (Marc, 17 October 2026), flattened
    // onto white so its thin lines also read at night.
    picture: {
      kind: 'photo',
      src: alohaZeroRender,
      alt: {
        en: 'COMSOL simulation of the ALOHA-0 electron source: the electrodes in thin grey lines on white, and the electron beam leaving the cathode, coloured from blue to red as it crosses the anode.',
        es: 'Simulación en COMSOL de la fuente de electrones de ALOHA-0: los electrodos en líneas grises finas sobre blanco y el haz de electrones saliendo del cátodo, de azul a rojo a medida que atraviesa el ánodo.',
        va: 'Simulació en COMSOL de la font d’electrons d’ALOHA-0: els elèctrodes en línies grises fines sobre blanc i el feix d’electrons eixint del càtode, de blau a roig a mesura que travessa l’ànode.',
      },
      caption: {
        lead: { en: 'The source, simulated in COMSOL.', es: 'La fuente, simulada en COMSOL.', va: 'La font, simulada en COMSOL.' },
        text: {
          en: 'Cathode and Wehnelt on the left, the anode in the middle, and the beam leaving through it.',
          es: 'El cátodo y el Wehnelt a la izquierda, el ánodo en el centro y el haz que sale a través de él.',
          va: 'El càtode i el Wehnelt a l’esquerra, l’ànode al centre i el feix que ix a través d’ell.',
        },
      },
    },
  },
  {
    // Stage 2, proposed: no drawing of it yet, so no picture.
    id: 'aloha-2',
    kicker: { en: 'STAGE 2 · THE INSTRUMENT', es: 'ETAPA 2 · EL INSTRUMENTO', va: 'ETAPA 2 · L’INSTRUMENT' },
    title: 'ALOHA-2',
    marker: 'outlined',
    status: PROPOSED,
    body: {
      en: 'ALOHA-0 plus a target that turns its beam into X-rays, a window that lets only the X-rays out towards a painting, an energy-dispersive detector, shielding and a scanning stage. At 20 keV it reads the core of a restorer’s palette without taking a sample; the 20 keV ceiling protects the paintings.',
      es: 'ALOHA-0 más un blanco que convierte su haz en rayos X, una ventana que solo deja salir los rayos X hacia un cuadro, un detector de energía dispersiva, blindaje y una platina de barrido. A 20 keV lee el núcleo de la paleta de un restaurador sin tomar ninguna muestra; el límite de 20 keV protege los cuadros.',
      va: 'ALOHA-0 més un blanc que convertix el seu feix en raigs X, una finestra que només deixa eixir els raigs X cap a un quadre, un detector de dispersió d’energia, blindatge i una platina d’escombratge. A 20 keV llig el nucli de la paleta d’un restaurador sense prendre cap mostra; el límit de 20 keV protegix els quadres.',
    },
    specs: [
      { quantity: BEAM_ENERGY, value: '20', unit: 'keV', status: DESIGN_TARGET },
      {
        quantity: { en: 'Technique', es: 'Técnica', va: 'Tècnica' },
        value: { en: 'X-ray fluorescence', es: 'Fluorescencia de rayos X', va: 'Fluorescència de raigs X' },
        status: PROPOSED,
      },
      { quantity: { en: 'Elements read', es: 'Elementos leídos', va: 'Elements llegits' }, value: 'Ca, Fe, Cu, As, Hg, Pb', status: DESIGN_TARGET },
      {
        quantity: { en: 'Use', es: 'Uso', va: 'Ús' },
        value: { en: 'X-ray spectroscopy', es: 'Espectroscopia de rayos X', va: 'Espectroscòpia de raigs X' },
        unit: { en: 'of pigments', es: 'de pigmentos', va: 'de pigments' },
        status: AIM,
      },
    ],
  },
  {
    id: 'aloha-1',
    kicker: {
      en: 'STAGE 3 · ACCELERATION · CONDITIONAL',
      es: 'ETAPA 3 · ACELERACIÓN · CONDICIONADA',
      va: 'ETAPA 3 · ACCELERACIÓ · CONDICIONADA',
    },
    title: 'ALOHA-1',
    marker: 'outlined',
    status: DESIGN,
    body: {
      en: 'Adds pre-acceleration, a buncher and an accelerating structure at 2.998 GHz, fed by a second ALOHA-0, up to 1 MeV, with an experiment at the end of the line. It is conditional: we build it once a research group commits to using it. Until then it advances without beam, in the design and cold tests of its cavities.',
      es: 'Añade preaceleración, un agrupador y una estructura aceleradora a 2,998 GHz, alimentados por una segunda ALOHA-0, hasta 1 MeV, con un experimento al final de la línea. Está condicionado: lo construimos cuando un grupo de investigación se comprometa a usarlo. Hasta entonces avanza sin haz, con el diseño y los ensayos en frío de sus cavidades.',
      va: 'Afig preacceleració, un agrupador i una estructura acceleradora a 2,998 GHz, alimentats per una segona ALOHA-0, fins a 1 MeV, amb un experiment al final de la línia. Està condicionat: el construïm quan un grup d’investigació es comprometa a usar-lo. Fins aleshores avança sense feix, amb el disseny i els assajos en fred de les seues cavitats.',
    },
    specs: [
      { quantity: BEAM_ENERGY, value: '1', unit: 'MeV', status: DESIGN_TARGET },
      {
        quantity: { en: 'RF frequency, S-band', es: 'Frecuencia de RF, banda S', va: 'Freqüència de RF, banda S' },
        value: { en: '2.998', es: '2,998', va: '2,998' },
        unit: 'GHz',
        status: DESIGN,
      },
      { quantity: { en: 'Buncher', es: 'Agrupador', va: 'Agrupador' }, value: '4', unit: CAVITIES, status: DESIGN },
      { quantity: { en: 'Accelerating structure', es: 'Estructura aceleradora', va: 'Estructura acceleradora' }, value: '4', unit: CAVITIES, status: DESIGN },
    ],
  },
];

/** The labels on the hero figure, placed in the figure's own units (1920 x 340). */
export const heroLabels = [
  {
    x: 120,
    top: false,
    lines: [{ en: 'ALOHA-0 · ELECTRON SOURCE', es: 'ALOHA-0 · FUENTE DE ELECTRONES', va: 'ALOHA-0 · FONT D’ELECTRONS' }, SIMULATED_COMSOL],
  },
  { x: 760, top: false, lines: [{ en: 'BUNCHER · 4 CAVITIES', es: 'AGRUPADOR · 4 CAVIDADES', va: 'AGRUPADOR · 4 CAVITATS' }, DESIGN] },
  {
    x: 1180,
    top: false,
    lines: [
      {
        en: 'ACCELERATING STRUCTURE · 4 CAVITIES',
        es: 'ESTRUCTURA ACELERADORA · 4 CAVIDADES',
        va: 'ESTRUCTURA ACCELERADORA · 4 CAVITATS',
      },
      { en: 'DESIGN · 2.998 GHz', es: 'DISEÑO · 2,998 GHz', va: 'DISSENY · 2,998 GHz' },
    ],
  },
  { x: 1680, top: true, lines: ['1 MeV', DESIGN_TARGET] },
];

export interface RoadItem {
  label: Text;
  when: Text;
  /** Committed this season (solid) or not yet (outlined), as drawn; the words under each say why. */
  marker: 'solid' | 'outlined';
}

export const year = {
  season: '2026-27',
  title: { en: 'This year', es: 'Este curso', va: 'Este curs' },
  lead: {
    en: 'The least we aim for: the vacuum system, pumped down and measured, with its control electronics tested.',
    es: 'Lo mínimo a lo que aspiramos: el sistema de vacío, bombeado y medido, con su electrónica de control probada.',
    va: 'El mínim a què aspirem: el sistema de buit, bombat i mesurat, amb la seua electrònica de control provada.',
  },
  road: [
    {
      label: { en: 'VACUUM SYSTEM', es: 'SISTEMA DE VACÍO', va: 'SISTEMA DE BUIT' },
      when: SEMESTER_1_BUILD,
      marker: 'solid',
    },
    {
      label: { en: 'VACUUM CONTROL', es: 'CONTROL DEL VACÍO', va: 'CONTROL DEL BUIT' },
      when: SEMESTER_1_BUILD,
      marker: 'solid',
    },
    {
      label: { en: 'CATHODE SUPPLY', es: 'FUENTE DEL CÁTODO', va: 'FONT DEL CÀTODE' },
      when: {
        en: 'AFTER THE VACUUM · DEPENDS ON FUNDING',
        es: 'TRAS EL VACÍO · SEGÚN LA FINANCIACIÓN',
        va: 'DESPRÉS DEL BUIT · SEGONS EL FINANÇAMENT',
      },
      marker: 'outlined',
    },
    {
      label: { en: 'OPEN DOCUMENTATION', es: 'DOCUMENTACIÓN ABIERTA', va: 'DOCUMENTACIÓ OBERTA' },
      when: BEFORE_JANUARY,
      marker: 'solid',
    },
    {
      label: { en: 'ALOHA-2 REQUIREMENTS MEETING', es: 'REUNIÓN DE REQUISITOS DE ALOHA-2', va: 'REUNIÓ DE REQUISITS D’ALOHA-2' },
      when: '2026-27',
      marker: 'outlined',
    },
    {
      label: { en: 'ALOHA-1 CAVITY DESIGN', es: 'DISEÑO DE CAVIDADES DE ALOHA-1', va: 'DISSENY DE CAVITATS D’ALOHA-1' },
      when: { en: 'DESIGN · THROUGH THE SEASON', es: 'DISEÑO · DURANTE LA TEMPORADA', va: 'DISSENY · DURANT LA TEMPORADA' },
      marker: 'outlined',
    },
  ] satisfies RoadItem[],
};

/** The closing sheet. A link with no URL yet is left out, never "#". */
export const open = {
  title: {
    en: 'Everything we design stays open',
    es: 'Todo lo que diseñamos sigue abierto',
    va: 'Tot el que dissenyem continua obert',
  },
  items: [
    {
      title: 'CERN-OHL-S',
      body: {
        en: 'The hardware licence: strongly reciprocal, so whatever is built from our designs stays open too.',
        es: 'La licencia del hardware: fuertemente recíproca, así que lo que se construya a partir de nuestros diseños también sigue abierto.',
        va: 'La llicència del maquinari: fortament recíproca, així que el que es construïsca a partir dels nostres dissenys també continua obert.',
      },
      link: { href: CERN_OHL_URL, label: { en: 'THE LICENCE', es: 'LA LICENCIA', va: 'LA LLICÈNCIA' } },
    },
    {
      title: 'GitHub',
      body: {
        en: 'The public record of the design process: reports, inputs and the reasoning behind every number.',
        es: 'El registro público del proceso de diseño: informes, datos de entrada y el razonamiento detrás de cada número.',
        va: 'El registre públic del procés de disseny: informes, dades d’entrada i el raonament darrere de cada número.',
      },
      // The docs repository URL is still to come.
      status: {
        en: 'COMING · THE DOCS REPOSITORY',
        es: 'PRÓXIMAMENTE · EL REPOSITORIO DE DOCUMENTACIÓN',
        va: 'PRÒXIMAMENT · EL REPOSITORI DE DOCUMENTACIÓ',
      },
    },
    {
      title: { en: 'Handbook', es: 'Manual', va: 'Manual' },
      body: {
        en: 'How the team works, as a public online book.',
        es: 'Cómo trabaja el equipo, como un libro público en línea.',
        va: 'Com treballa l’equip, com un llibre públic en línia.',
      },
      status: BEFORE_JANUARY,
    },
  ] as { title: Text; body: Text; link?: { href: string; label: Text }; status?: Text }[],
};
