// The recruitment round shown in the Join call. The site is static, so the
// status is decided when the site is built: it rebuilds every night, and the
// morning after `closes` the copy turns to "closed" on its own.
import { dateLocale, type Lang } from '../i18n';

export const round: {
  season: string;
  closes: string;
  students?: number | undefined;
  nextOpens?: string | undefined;
} = {
  season: '2026-27',
  /** The last day applications are accepted, inclusive. */
  closes: '2026-10-16',
  /**
   * Students in the team once the round is decided, counted by Direction; the
   * home's facts line gives the same number. Left out, Join shows no count.
   */
  students: undefined,
  /**
   * The month the next round aims to open, as YYYY-MM (e.g. '2027-02'). Left
   * out, the closed sentence ends without "We aim to open it in …".
   */
  nextOpens: undefined,
};

export function roundIsOpen(today: Date = new Date()): boolean {
  return today.toISOString().slice(0, 10) <= round.closes;
}

/** The closing day as each language writes it: "16 October", "16 de octubre". */
export const closesOn = (lang: Lang) =>
  new Date(`${round.closes}T12:00:00Z`).toLocaleDateString(dateLocale[lang], { day: 'numeric', month: 'long', timeZone: 'UTC' });

/** The month the next round aims to open, as each language writes it ("February", "febrero"), or '' while it is not set. */
export const nextOpensIn = (lang: Lang) =>
  round.nextOpens
    ? new Date(`${round.nextOpens}-01T12:00:00Z`).toLocaleDateString(dateLocale[lang], { month: 'long', timeZone: 'UTC' })
    : '';
