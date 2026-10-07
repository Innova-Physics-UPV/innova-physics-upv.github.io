// The recruitment round shown in the Join call. The site is static, so the
// status is decided when the site is built: rebuild after `closes` and the
// copy turns to "closed" on its own.

export const round = {
  season: '2026-27',
  /** The last day applications are accepted, inclusive. */
  closes: '2026-10-16',
  closesLabel: '16 October',
};

export function roundIsOpen(today: Date = new Date()): boolean {
  return today.toISOString().slice(0, 10) <= round.closes;
}
