// The recruitment round shown in the Join call. The site is static, so the
// status is decided when the site is built: it rebuilds every night, and the
// morning after `closes` the copy turns to "closed" on its own.
import { dateLocale, type Lang } from '../i18n';

export const round = {
  season: '2026-27',
  /** The last day applications are accepted, inclusive. */
  closes: '2026-10-16',
};

export function roundIsOpen(today: Date = new Date()): boolean {
  return today.toISOString().slice(0, 10) <= round.closes;
}

/** The closing day as each language writes it: "16 October", "16 de octubre". */
export const closesOn = (lang: Lang) =>
  new Date(`${round.closes}T12:00:00Z`).toLocaleDateString(dateLocale[lang], { day: 'numeric', month: 'long', timeZone: 'UTC' });
