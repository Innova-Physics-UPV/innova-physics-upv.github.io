// The machine page's content: the stages, their numbers, this year's road
// and the open licences, in the three languages. Placeholder copy from the
// canvas board until the team's content document (docs/content-todo.md).
// Every number carries its unit and its status; the numbers themselves are
// written once and read the same in every language.
import type { ImageMetadata } from 'astro';
import modelZero from '../assets/photos/model-0-bench.webp';
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
const PLANNED = { en: 'PLANNED', es: 'PREVISTO', va: 'PREVIST' };
const PROPOSED = { en: 'PROPOSED', es: 'PROPUESTO', va: 'PROPOSAT' };
const AIM = { en: 'AIM', es: 'ASPIRACIÓN', va: 'ASPIRACIÓ' };
const CAVITIES = { en: 'cavities', es: 'cavidades', va: 'cavitats' };
const BEFORE_JANUARY = {
  en: 'TARGET · BEFORE JANUARY 2027',
  es: 'PREVISTO · ANTES DE ENERO DE 2027',
  va: 'PREVIST · ABANS DE GENER DE 2027',
};

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
    en: 'ALOHA, A Linear Open-Hardware Accelerator, is built in stages. Each one is designed, simulated, built and documented in the open before the next.',
    es: 'ALOHA, A Linear Open-Hardware Accelerator (un acelerador lineal de hardware abierto), se construye por etapas. Cada una se diseña, se simula, se construye y se documenta en abierto antes de la siguiente.',
    va: 'ALOHA, A Linear Open-Hardware Accelerator (un accelerador lineal de maquinari obert), es construïx per etapes. Cada una es dissenya, se simula, es construïx i es documenta en obert abans de la següent.',
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
      { quantity: { en: 'Pressure', es: 'Presión', va: 'Pressió' }, value: '~1', unit: 'Torr', status: BUILT },
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
    kicker: { en: 'STAGE 1 · THE FIRST ACCELERATOR', es: 'ETAPA 1 · EL PRIMER ACELERADOR', va: 'ETAPA 1 · EL PRIMER ACCELERADOR' },
    title: 'ALOHA-0',
    marker: 'hatched',
    status: SIMULATED,
    body: {
      en: 'The electron source: a thermionic telefocus triode. A tungsten cathode emits, a Wehnelt cylinder shapes the emission into a converging beam, and the anode extracts it. An einzel lens comes next.',
      es: 'La fuente de electrones: un triodo termoiónico telefocus. Un cátodo de wolframio emite, un cilindro de Wehnelt da a la emisión la forma de un haz convergente y el ánodo lo extrae. Después viene una lente einzel.',
      va: 'La font d’electrons: un tríode termoiònic telefocus. Un càtode de wolframi emet, un cilindre de Wehnelt dona a l’emissió la forma d’un feix convergent i l’ànode l’extrau. Després ve una lent einzel.',
    },
    specs: [
      { quantity: { en: 'Extraction voltage', es: 'Tensión de extracción', va: 'Tensió d’extracció' }, value: '30', unit: 'kV', status: SIMULATED_COMSOL },
      { quantity: { en: 'Beam current', es: 'Corriente del haz', va: 'Corrent del feix' }, value: '1.5', unit: 'mA', status: SIMULATED_COMSOL },
      { quantity: { en: 'Beam spot, symmetric', es: 'Mancha del haz, simétrica', va: 'Taca del feix, simètrica' }, value: '<1', unit: 'mm', status: SIMULATED_COMSOL },
      { quantity: { en: 'Cathode', es: 'Cátodo', va: 'Càtode' }, value: 'W', unit: { en: 'thermionic', es: 'termoiónico', va: 'termoiònic' }, status: DESIGN },
      { quantity: { en: 'Focusing lens', es: 'Lente de enfoque', va: 'Lent d’enfocament' }, value: 'Einzel', status: PLANNED },
    ],
    picture: {
      kind: 'figure',
      figure: 'aloha-0-section',
      caption: {
        lead: { en: 'The source, in section.', es: 'La fuente, en sección.', va: 'La font, en secció.' },
        text: {
          en: 'Cathode, Wehnelt and anode hatched: simulated in COMSOL. The einzel lens outlined: planned.',
          es: 'Cátodo, Wehnelt y ánodo rayados: simulados en COMSOL. La lente einzel en contorno: prevista.',
          va: 'Càtode, Wehnelt i ànode ratllats: simulats en COMSOL. La lent einzel en contorn: prevista.',
        },
      },
    },
  },
  {
    id: 'aloha-1',
    kicker: { en: 'STAGE 2 · ACCELERATION', es: 'ETAPA 2 · ACELERACIÓN', va: 'ETAPA 2 · ACCELERACIÓ' },
    title: 'ALOHA-1',
    marker: 'outlined',
    status: DESIGN,
    body: {
      en: 'Adds pre-acceleration, a buncher and an accelerating structure at 2.998 GHz, with an experiment at the end of the line. Everything after the source is still on paper.',
      es: 'Añade preaceleración, un agrupador y una estructura aceleradora a 2.998 GHz, con un experimento al final de la línea. Todo lo que hay después de la fuente sigue sobre el papel.',
      va: 'Afig preacceleració, un agrupador i una estructura acceleradora a 2.998 GHz, amb un experiment al final de la línia. Tot el que hi ha després de la font continua sobre el paper.',
    },
    specs: [
      { quantity: { en: 'Beam energy', es: 'Energía del haz', va: 'Energia del feix' }, value: '1', unit: 'MeV', status: DESIGN_TARGET },
      { quantity: { en: 'RF frequency, S-band', es: 'Frecuencia de RF, banda S', va: 'Freqüència de RF, banda S' }, value: '2.998', unit: 'GHz', status: DESIGN },
      { quantity: { en: 'Buncher', es: 'Agrupador', va: 'Agrupador' }, value: '4', unit: CAVITIES, status: DESIGN },
      { quantity: { en: 'Accelerating structure', es: 'Estructura aceleradora', va: 'Estructura acceleradora' }, value: '4', unit: CAVITIES, status: DESIGN },
      { quantity: { en: 'Experiment', es: 'Experimento', va: 'Experiment' }, value: 'Smith-Purcell', unit: 'sub-THz', status: PROPOSED },
      {
        quantity: { en: 'Conservation', es: 'Conservación', va: 'Conservació' },
        value: { en: 'X-ray spectroscopy', es: 'Espectroscopia de rayos X', va: 'Espectroscòpia de raigs X' },
        unit: { en: 'of pigments', es: 'de pigmentos', va: 'de pigments' },
        status: AIM,
      },
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
      { en: 'DESIGN · 2.998 GHz', es: 'DISEÑO · 2.998 GHz', va: 'DISSENY · 2.998 GHz' },
    ],
  },
  { x: 1680, top: true, lines: ['1 MeV', DESIGN_TARGET] },
];

export interface RoadItem {
  label: Text;
  when: Text;
  /** Committed this year (solid) or depending on sponsors (outlined), as drawn. */
  marker: 'solid' | 'outlined';
}

export const year = {
  season: '2026-27',
  title: { en: 'This year', es: 'Este curso', va: 'Este curs' },
  lead: {
    en: 'The least we aim for: a working vacuum bench and its control electronics, tested.',
    es: 'Lo mínimo a lo que aspiramos: un banco de vacío que funcione y su electrónica de control, probada.',
    va: 'El mínim a què aspirem: un banc de buit que funcione i la seua electrònica de control, provada.',
  },
  road: [
    {
      label: { en: 'CATHODE SUPPLY', es: 'FUENTE DEL CÁTODO', va: 'FONT DEL CÀTODE' },
      when: { en: 'SEMESTER 1 · BUILD', es: 'CUATRIMESTRE 1 · CONSTRUCCIÓN', va: 'QUADRIMESTRE 1 · CONSTRUCCIÓ' },
      marker: 'solid',
    },
    {
      label: { en: 'VACUUM CONTROL', es: 'CONTROL DEL VACÍO', va: 'CONTROL DEL BUIT' },
      when: { en: 'SEMESTER 1 · BUILD', es: 'CUATRIMESTRE 1 · CONSTRUCCIÓN', va: 'QUADRIMESTRE 1 · CONSTRUCCIÓ' },
      marker: 'solid',
    },
    {
      label: { en: 'OPEN DOCUMENTATION', es: 'DOCUMENTACIÓN ABIERTA', va: 'DOCUMENTACIÓ OBERTA' },
      when: BEFORE_JANUARY,
      marker: 'solid',
    },
    {
      label: { en: 'STABLE MEASURED BEAM', es: 'HAZ ESTABLE Y MEDIDO', va: 'FEIX ESTABLE I MESURAT' },
      when: { en: 'GOAL · DEPENDS ON SPONSORS', es: 'META · DEPENDE DE LOS PATROCINADORES', va: 'META · DEPÉN DELS PATROCINADORS' },
      marker: 'outlined',
    },
    {
      label: { en: '1 MeV LINAC ON PAPER', es: 'LINAC DE 1 MeV SOBRE EL PAPEL', va: 'LINAC D’1 MeV SOBRE EL PAPER' },
      when: { en: 'DESIGN · END OF THE SEASON', es: 'DISEÑO · FINAL DE LA TEMPORADA', va: 'DISSENY · FINAL DE LA TEMPORADA' },
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
