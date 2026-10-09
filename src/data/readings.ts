// The two readings of a panel painting: its strata, top to bottom, and the
// X-ray lines each one gives in the 1 to 15 keV window. Energies are
// tabulated (X-ray Data Booklet, as in design-system/tokens.json); heights
// are design values, a fraction of the 180px tallest line, not measured
// intensities. Ca Kβ is drawn on the canvas but not yet in tokens.json.
// Words in the three languages; element symbols and energies are the same.
import type { Text } from '../i18n';

export interface XrayLine {
  element: string;
  line: string;
  keV: number;
  /** Drawn height, 0 to 1 of the tallest line. */
  height: number;
  /** Where the line comes from, for the legend (M11). */
  from: Text;
}

export interface Stratum {
  name: Text;
  /** The stratum's own label in the cross-section. */
  label: Text;
  ground: string;
  ink: string;
  /** What the probe reads there, in the art voice. */
  aside: Text;
  lines: XrayLine[];
}

export const ENERGY_MIN = 1;
export const ENERGY_MAX = 15;

const lazurite = (element: Record<'en' | 'es' | 'va', string>) => ({
  en: `${element.en}, from the lapis lazuli ground to a blue`,
  es: `${element.es}, del lapislázuli molido hasta dar un azul`,
  va: `${element.va}, del lapislàtzuli mòlt fins a donar un blau`,
});
const cinnabar = { en: 'mercury, in vermilion', es: 'mercurio, en el bermellón', va: 'mercuri, en el vermelló' };
const gypsum = { en: 'calcium, from the gypsum of the ground', es: 'calcio, del yeso de la preparación', va: 'calci, del guix de la preparació' };

export const strata: Stratum[] = [
  {
    name: { en: 'VARNISH', es: 'BARNIZ', va: 'VERNÍS' },
    label: { en: 'VARNISH · NO LINES · ULTRAVIOLET', es: 'BARNIZ · SIN LÍNEAS · ULTRAVIOLETA', va: 'VERNÍS · SENSE LÍNIES · ULTRAVIOLAT' },
    ground: 'var(--varnish)',
    ink: 'var(--bone-black)',
    aside: {
      en: 'Natural resin is hydrogen, carbon and oxygen: hydrogen gives no X-rays and the other two fall below the window. Ultraviolet light reads it instead.',
      es: 'La resina natural es hidrógeno, carbono y oxígeno: el hidrógeno no da rayos X y los otros dos quedan por debajo de la ventana. La luz ultravioleta la lee en su lugar.',
      va: 'La resina natural és hidrogen, carboni i oxigen: l’hidrogen no dona raigs X i els altres dos queden per davall de la finestra. La llum ultraviolada la llig en el seu lloc.',
    },
    lines: [],
  },
  {
    name: { en: 'ULTRAMARINE', es: 'ULTRAMAR', va: 'ULTRAMAR' },
    label: { en: 'ULTRAMARINE · S Kα 2.31 keV', es: 'ULTRAMAR · S Kα 2.31 keV', va: 'ULTRAMAR · S Kα 2.31 keV' },
    ground: 'var(--ultramarine)',
    ink: 'var(--lead-white)',
    aside: {
      en: 'Lapis lazuli ground to a blue: aluminium, silicon and sulfur.',
      es: 'Lapislázuli molido hasta dar un azul: aluminio, silicio y azufre.',
      va: 'Lapislàtzuli mòlt fins a donar un blau: alumini, silici i sofre.',
    },
    lines: [
      { element: 'Al', line: 'Kα', keV: 1.487, height: 0.45, from: lazurite({ en: 'aluminium', es: 'aluminio', va: 'alumini' }) },
      { element: 'Si', line: 'Kα', keV: 1.74, height: 0.75, from: lazurite({ en: 'silicon', es: 'silicio', va: 'silici' }) },
      { element: 'S', line: 'Kα', keV: 2.308, height: 1, from: lazurite({ en: 'sulfur', es: 'azufre', va: 'sofre' }) },
    ],
  },
  {
    name: { en: 'VERMILION', es: 'BERMELLÓN', va: 'VERMELLÓ' },
    label: { en: 'VERMILION · Hg Lα 9.99 keV', es: 'BERMELLÓN · Hg Lα 9.99 keV', va: 'VERMELLÓ · Hg Lα 9.99 keV' },
    ground: 'var(--vermilion)',
    ink: 'var(--white)',
    aside: {
      en: 'Cinnabar, mercury sulfide. Under the ultramarine, it says the robe was red first.',
      es: 'Cinabrio, sulfuro de mercurio. Bajo el ultramar, dice que el manto fue rojo primero.',
      va: 'Cinabri, sulfur de mercuri. Davall de l’ultramar, diu que el mantell va ser roig primer.',
    },
    lines: [
      {
        element: 'S',
        line: 'Kα',
        keV: 2.308,
        height: 0.15,
        from: {
          en: 'sulfur, the other half of mercury sulfide',
          es: 'azufre, la otra mitad del sulfuro de mercurio',
          va: 'sofre, l’altra meitat del sulfur de mercuri',
        },
      },
      { element: 'Hg', line: 'Lα', keV: 9.989, height: 1, from: cinnabar },
      { element: 'Hg', line: 'Lβ', keV: 11.823, height: 0.6, from: cinnabar },
      { element: 'Hg', line: 'Lγ', keV: 13.83, height: 0.12, from: cinnabar },
    ],
  },
  {
    name: { en: 'GESSO', es: 'YESO', va: 'GUIX' },
    label: { en: 'GESSO · Ca Kα 3.69 keV', es: 'YESO · Ca Kα 3.69 keV', va: 'GUIX · Ca Kα 3.69 keV' },
    ground: 'var(--gesso-layer)',
    ink: 'var(--bone-black)',
    aside: {
      en: 'Gypsum in animal glue, the white ground a panel painting starts on: calcium.',
      es: 'Yeso en cola animal, la preparación blanca sobre la que empieza una pintura sobre tabla: calcio.',
      va: 'Guix en cola animal, la preparació blanca sobre la qual comença una pintura sobre taula: calci.',
    },
    lines: [
      { element: 'Ca', line: 'Kα', keV: 3.692, height: 1, from: gypsum },
      { element: 'Ca', line: 'Kβ', keV: 4.013, height: 0.13, from: gypsum },
    ],
  },
  {
    name: { en: 'PANEL', es: 'TABLA', va: 'TAULA' },
    label: { en: 'PANEL · POPLAR · NO LINES', es: 'TABLA · ÁLAMO · SIN LÍNEAS', va: 'TAULA · ÀLBER · SENSE LÍNIES' },
    ground: 'var(--panel)',
    ink: 'var(--bone-black)',
    aside: {
      en: 'Poplar wood, made of light elements: no lines in the window.',
      es: 'Madera de álamo, hecha de elementos ligeros: ninguna línea en la ventana.',
      va: 'Fusta d’àlber, feta d’elements lleugers: cap línia en la finestra.',
    },
    lines: [],
  },
];

/** The default reading: vermilion, under the ultramarine. */
export const DEFAULT_STRATUM = 2;

/** The figure's own words. */
export const readingsCopy = {
  probeOn: { en: 'PROBE ON', es: 'SONDA EN', va: 'SONDA EN' },
  spectrum: { en: 'Spectrum, 1 to 15 keV', es: 'Espectro, de 1 a 15 keV', va: 'Espectre, d’1 a 15 keV' },
  noLines: {
    en: 'NO LINES IN THE WINDOW, 1 TO 15 keV',
    es: 'NINGUNA LÍNEA EN LA VENTANA, DE 1 A 15 keV',
    va: 'CAP LÍNIA EN LA FINESTRA, D’1 A 15 keV',
  },
  strata: {
    en: 'The layers of a panel painting, top to bottom. Select one to read it.',
    es: 'Las capas de una pintura sobre tabla, de arriba abajo. Selecciona una para leerla.',
    va: 'Les capes d’una pintura sobre taula, de dalt a baix. Selecciona’n una per a llegir-la.',
  },
  reading: { en: 'READING', es: 'LEYENDO', va: 'LLEGINT' },
  line: { en: 'LINE', es: 'LÍNEA', va: 'LÍNIA' },
  none: { en: 'none in the window', es: 'ninguna en la ventana', va: 'cap en la finestra' },
  caption: {
    lead: { en: 'A panel painting in section.', es: 'Una pintura sobre tabla, en sección.', va: 'Una pintura sobre taula, en secció.' },
    text: {
      en: 'Schematic, layers not to scale; energy from 1 to 15 keV, lines tabulated.',
      es: 'Esquema, capas no a escala; energía de 1 a 15 keV, líneas tabuladas.',
      va: 'Esquema, capes no a escala; energia d’1 a 15 keV, línies tabulades.',
    },
    /** Only where JavaScript runs. */
    how: {
      en: 'Select a layer to read it, or point at a line to name it.',
      es: 'Selecciona una capa para leerla, o señala una línea para nombrarla.',
      va: 'Selecciona una capa per a llegir-la, o assenyala una línia per a anomenar-la.',
    },
  },
};
