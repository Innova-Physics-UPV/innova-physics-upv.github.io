// The two readings of a panel painting: its strata, top to bottom, and the
// X-ray lines each one gives in the 1 to 15 keV window. Energies are
// tabulated (X-ray Data Booklet, as in design-system/tokens.json); heights
// are design values, a fraction of the 180px tallest line, not measured
// intensities. Ca Kβ is drawn on the canvas but not yet in tokens.json.

export interface XrayLine {
  element: string;
  line: string;
  keV: number;
  /** Drawn height, 0 to 1 of the tallest line. */
  height: number;
  /** Where the line comes from, for the legend (M11). */
  from: string;
}

export interface Stratum {
  name: string;
  /** The stratum's own label in the cross-section. */
  label: string;
  ground: string;
  ink: string;
  /** What the probe reads there, in the art voice. */
  aside: string;
  lines: XrayLine[];
}

export const ENERGY_MIN = 1;
export const ENERGY_MAX = 15;

const lazurite = 'from the lapis lazuli ground to a blue';
const cinnabar = 'mercury, in vermilion';
const gypsum = 'calcium, from the gypsum of the ground';

export const strata: Stratum[] = [
  {
    name: 'VARNISH',
    label: 'VARNISH · NO LINES · ULTRAVIOLET',
    ground: 'var(--varnish)',
    ink: 'var(--bone-black)',
    aside:
      'Natural resin is hydrogen, carbon and oxygen: hydrogen gives no X-rays and the other two fall below the window. Ultraviolet light reads it instead.',
    lines: [],
  },
  {
    name: 'ULTRAMARINE',
    label: 'ULTRAMARINE · S Kα 2.31 keV',
    ground: 'var(--ultramarine)',
    ink: 'var(--lead-white)',
    aside: 'Lapis lazuli ground to a blue: aluminium, silicon and sulfur.',
    lines: [
      { element: 'Al', line: 'Kα', keV: 1.487, height: 0.45, from: `aluminium, ${lazurite}` },
      { element: 'Si', line: 'Kα', keV: 1.74, height: 0.75, from: `silicon, ${lazurite}` },
      { element: 'S', line: 'Kα', keV: 2.308, height: 1, from: `sulfur, ${lazurite}` },
    ],
  },
  {
    name: 'VERMILION',
    label: 'VERMILION · Hg Lα 9.99 keV',
    ground: 'var(--vermilion)',
    ink: 'var(--white)',
    aside: 'Cinnabar, mercury sulfide. Under the ultramarine, it says the robe was red first.',
    lines: [
      { element: 'S', line: 'Kα', keV: 2.308, height: 0.15, from: 'sulfur, the other half of mercury sulfide' },
      { element: 'Hg', line: 'Lα', keV: 9.989, height: 1, from: cinnabar },
      { element: 'Hg', line: 'Lβ', keV: 11.823, height: 0.6, from: cinnabar },
      { element: 'Hg', line: 'Lγ', keV: 13.83, height: 0.12, from: cinnabar },
    ],
  },
  {
    name: 'GESSO',
    label: 'GESSO · Ca Kα 3.69 keV',
    ground: 'var(--gesso-layer)',
    ink: 'var(--bone-black)',
    aside: 'Gypsum in animal glue, the white ground a panel painting starts on: calcium.',
    lines: [
      { element: 'Ca', line: 'Kα', keV: 3.692, height: 1, from: gypsum },
      { element: 'Ca', line: 'Kβ', keV: 4.013, height: 0.13, from: gypsum },
    ],
  },
  {
    name: 'PANEL',
    label: 'PANEL · POPLAR · NO LINES',
    ground: 'var(--panel)',
    ink: 'var(--bone-black)',
    aside: 'Poplar wood, made of light elements: no lines in the window.',
    lines: [],
  },
];

/** The default reading: vermilion, under the ultramarine. */
export const DEFAULT_STRATUM = 2;
