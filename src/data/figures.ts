// Machine figures drawn by Lattice, in the canvas's own coordinates
// (Main.dc.html, stations ALOHA-0 and ALOHA-1). Status as drawing: built is
// solid, simulated hatched, design outlined. The einzel lens is planned, so
// it is outlined everywhere.

export type Status = 'built' | 'simulated' | 'design';

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type LatticeElement =
  | ({ shape: 'rect'; status: Status; stroke?: number } & Box)
  | { shape: 'ellipse'; status: Status; stroke?: number; cx: number; cy: number; rx: number; ry: number };

export interface LatticeFigure {
  viewBox: string;
  /** What is drawn and its status, for screen readers. */
  label: string;
  /** The construction line before the source. */
  construction?: Box;
  /** The beam axis. */
  axis?: Box;
  /** The beam itself, in the accent: on a cover, where the figure is the one vermilion element. */
  beam?: Box;
  elements: LatticeElement[];
}

const rect = (status: Status, x: number, y: number, w: number, h: number): LatticeElement => ({ shape: 'rect', status, x, y, w, h });
const cavity = (cx: number, rx: number): LatticeElement => ({ shape: 'ellipse', status: 'design', cx, cy: 150, rx, ry: 120, stroke: 4 });

/** ALOHA-0, the electron source in section: cathode, Wehnelt and anode simulated; the einzel lens planned. */
export const aloha0Section: LatticeFigure = {
  viewBox: '200 -40 1100 380',
  label:
    'The ALOHA-0 electron source on its axis. Cathode, Wehnelt and anode are hatched because they are simulated; the einzel lens is outlined because it is planned.',
  construction: { x: 200, y: 149, w: 90, h: 2 },
  axis: { x: 330, y: 148, w: 970, h: 4 },
  elements: [
    // Cathode, Wehnelt and anode: simulated.
    rect('simulated', 290, 130, 40, 40),
    rect('simulated', 234, -6, 160, 24),
    rect('simulated', 370, -6, 24, 120),
    rect('simulated', 234, 282, 160, 24),
    rect('simulated', 370, 186, 24, 120),
    rect('simulated', 530, -30, 16, 152),
    rect('simulated', 530, 178, 16, 152),
    // The einzel lens: planned.
    rect('design', 690, 50, 80, 56),
    rect('design', 690, 194, 80, 56),
    rect('design', 850, 26, 80, 80),
    rect('design', 850, 194, 80, 80),
    rect('design', 1010, 50, 80, 56),
    rect('design', 1010, 194, 80, 56),
  ],
};

/** ALOHA-1, the design: the source, then four buncher and four accelerating cavities. */
export const aloha1Section: LatticeFigure = {
  viewBox: '100 20 1600 260',
  label:
    'ALOHA-1 on its axis. The electron source is hatched because it is simulated; the einzel lens, the four buncher cavities and the four accelerating cavities are outlined because they are design.',
  construction: { x: 100, y: 149, w: 53.6, h: 2 },
  axis: { x: 177.6, y: 148, w: 1522.4, h: 4 },
  elements: [
    // The source: simulated.
    rect('simulated', 153.6, 138, 24, 24),
    rect('simulated', 120, 56.4, 96, 14.4),
    rect('simulated', 201.6, 56.4, 14.4, 72),
    rect('simulated', 120, 229.2, 96, 14.4),
    rect('simulated', 201.6, 171.6, 14.4, 72),
    rect('simulated', 297.6, 42, 9.6, 91.2),
    rect('simulated', 297.6, 166.8, 9.6, 91.2),
    // The einzel lens: planned.
    rect('design', 393.6, 90, 48, 33.6),
    rect('design', 393.6, 176.4, 48, 33.6),
    rect('design', 489.6, 75.6, 48, 48),
    rect('design', 489.6, 176.4, 48, 48),
    rect('design', 585.6, 90, 48, 33.6),
    rect('design', 585.6, 176.4, 48, 33.6),
    // Four buncher cavities, then four accelerating cavities at 2.998 GHz: design.
    cavity(780, 20),
    cavity(844, 28),
    cavity(926, 38),
    cavity(1028, 48),
    cavity(1230, 50),
    cavity(1346, 50),
    cavity(1462, 50),
    cavity(1578, 50),
  ],
};

/** ALOHA-1 on a cover: the same line, full width, the beam running out of the right edge. */
export const aloha1Line: LatticeFigure = {
  ...aloha1Section,
  viewBox: '0 0 1920 340',
  label:
    'ALOHA-1 on its beam. The electron source is hatched because it is simulated. The einzel lens, planned, and the four buncher and four accelerating cavities, design, are outlined. The beam reaches 1 MeV, a design target.',
  construction: { x: 0, y: 149, w: 154, h: 2 },
  axis: undefined,
  beam: { x: 177.6, y: 146, w: 1742.4, h: 8 },
};

/** ALOHA-0 on a cover: the source full width, its beam running out of the right edge. */
export const aloha0Line: LatticeFigure = {
  ...aloha0Section,
  viewBox: '0 -40 1920 380',
  construction: { x: 0, y: 149, w: 290, h: 2 },
  axis: undefined,
  beam: { x: 330, y: 146, w: 1590, h: 8 },
};
