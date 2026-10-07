// The machine page's content: the stages, their numbers, this year's road
// and the open licences. Placeholder copy from the canvas board until the
// team's content document (docs/content-todo.md). Every number carries its
// unit and its status.
import type { ImageMetadata } from 'astro';
import modelZero from '../assets/photos/model-0-bench.webp';
import { CERN_OHL_URL } from '../consts';

export type Marker = 'solid' | 'hatched' | 'outlined';

export interface Spec {
  quantity: string;
  value: string;
  unit?: string;
  status: string;
}

export interface Stage {
  id: string;
  kicker: string;
  title: string;
  marker: Marker;
  /** The status in words, beside its chip. */
  status: string;
  body: string;
  specs: Spec[];
  picture?:
    | { kind: 'photo'; src: ImageMetadata; alt: string; caption: { lead: string; text?: string } }
    | { kind: 'figure'; figure: 'aloha-0-section'; caption: { lead: string; text?: string } };
}

export const stages: Stage[] = [
  {
    id: 'model-0',
    kicker: 'STAGE 0 · DEMONSTRATOR',
    title: 'Model-0',
    marker: 'solid',
    status: 'BUILT',
    body: 'A glow-discharge demonstrator that makes the path of a beam visible. It brought Edwards Vacuum on board as our first sponsor.',
    specs: [
      { quantity: 'Pressure', value: '~1', unit: 'Torr', status: 'BUILT' },
      { quantity: 'Supply, isolated', value: '10', unit: 'kV', status: 'BUILT' },
    ],
    picture: {
      kind: 'photo',
      src: modelZero,
      alt: 'Model-0 on the bench: an Edwards vacuum pump connected to the glass tube where the discharge glows.',
      caption: { lead: 'Model-0 on the bench.', text: 'The vacuum pump and the glass tube where the discharge glows.' },
    },
  },
  {
    id: 'aloha-0',
    kicker: 'STAGE 1 · THE FIRST ACCELERATOR',
    title: 'ALOHA-0',
    marker: 'hatched',
    status: 'SIMULATED',
    body: 'The electron source: a thermionic telefocus triode. A tungsten cathode emits, a Wehnelt cylinder shapes the emission into a converging beam, and the anode extracts it. An einzel lens comes next.',
    specs: [
      { quantity: 'Extraction voltage', value: '30', unit: 'kV', status: 'SIMULATED · COMSOL' },
      { quantity: 'Beam current', value: '1.5', unit: 'mA', status: 'SIMULATED · COMSOL' },
      { quantity: 'Beam spot, symmetric', value: '<1', unit: 'mm', status: 'SIMULATED · COMSOL' },
      { quantity: 'Cathode', value: 'W', unit: 'thermionic', status: 'DESIGN' },
      { quantity: 'Focusing lens', value: 'Einzel', status: 'PLANNED' },
    ],
    picture: {
      kind: 'figure',
      figure: 'aloha-0-section',
      caption: {
        lead: 'The source, in section.',
        text: 'Cathode, Wehnelt and anode hatched: simulated in COMSOL. The einzel lens outlined: planned.',
      },
    },
  },
  {
    id: 'aloha-1',
    kicker: 'STAGE 2 · ACCELERATION',
    title: 'ALOHA-1',
    marker: 'outlined',
    status: 'DESIGN',
    body: 'Adds pre-acceleration, a buncher and an accelerating structure at 2.998 GHz, with an experiment at the end of the line. Everything after the source is still on paper.',
    specs: [
      { quantity: 'Beam energy', value: '1', unit: 'MeV', status: 'DESIGN TARGET' },
      { quantity: 'RF frequency, S-band', value: '2.998', unit: 'GHz', status: 'DESIGN' },
      { quantity: 'Buncher', value: '4', unit: 'cavities', status: 'DESIGN' },
      { quantity: 'Accelerating structure', value: '4', unit: 'cavities', status: 'DESIGN' },
      { quantity: 'Experiment', value: 'Smith-Purcell', unit: 'sub-THz', status: 'PROPOSED' },
      { quantity: 'Conservation', value: 'X-ray spectroscopy', unit: 'of pigments', status: 'AIM' },
    ],
  },
];

/** The labels on the hero figure, placed in the figure's own units (1920 x 340). */
export const heroLabels = [
  { x: 120, top: false, lines: ['ALOHA-0 · ELECTRON SOURCE', 'SIMULATED · COMSOL'] },
  { x: 760, top: false, lines: ['BUNCHER · 4 CAVITIES', 'DESIGN'] },
  { x: 1180, top: false, lines: ['ACCELERATING STRUCTURE · 4 CAVITIES', 'DESIGN · 2.998 GHz'] },
  { x: 1680, top: true, lines: ['1 MeV', 'DESIGN TARGET'] },
];

export interface RoadItem {
  label: string;
  when: string;
  /** Committed this year (solid) or depending on sponsors (outlined), as drawn. */
  marker: 'solid' | 'outlined';
}

export const year = {
  season: '2026-27',
  title: 'This year',
  lead: 'The least we aim for: a working vacuum bench and its control electronics, tested.',
  road: [
    { label: 'CATHODE SUPPLY', when: 'SEMESTER 1 · BUILD', marker: 'solid' },
    { label: 'VACUUM CONTROL', when: 'SEMESTER 1 · BUILD', marker: 'solid' },
    { label: 'OPEN DOCUMENTATION', when: 'TARGET · BEFORE JANUARY 2027', marker: 'solid' },
    { label: 'STABLE MEASURED BEAM', when: 'GOAL · DEPENDS ON SPONSORS', marker: 'outlined' },
    { label: '1 MeV LINAC ON PAPER', when: 'DESIGN · END OF THE SEASON', marker: 'outlined' },
  ] satisfies RoadItem[],
};

/** The closing sheet. A link with no URL yet is left out, never "#". */
export const open = {
  title: 'Everything we design stays open',
  items: [
    {
      title: 'CERN-OHL-S',
      body: 'The hardware licence: strongly reciprocal, so whatever is built from our designs stays open too.',
      link: { href: CERN_OHL_URL, label: 'THE LICENCE' },
    },
    {
      title: 'GitHub',
      body: 'The public record of the design process: reports, inputs and the reasoning behind every number.',
      // The docs repository URL is still to come.
      status: 'COMING · THE DOCS REPOSITORY',
    },
    {
      title: 'Handbook',
      body: 'How the team works, as a public online book.',
      status: 'TARGET · BEFORE JANUARY 2027',
    },
  ] as { title: string; body: string; link?: { href: string; label: string }; status?: string }[],
};
