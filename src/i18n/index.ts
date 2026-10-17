// The site's three languages. English lives at the root, Spanish under /es/
// and Valencian under /va/ (its HTML language is ca-ES-valencia). Every page
// exists in all three (Marc, 9 October 2026); a research item stays in the
// language it was written in.
//
// A string in the site's copy is either one string, when it reads the same in
// every language (a name, a number), or the three side by side:
//   { en: 'The machine', es: 'La máquina', va: 'La màquina' }
// so a change in one language sits next to the two that must follow it.
import type { ImageMetadata } from 'astro';

export const langs = ['en', 'es', 'va'] as const;
export type Lang = (typeof langs)[number];

export type Text = string | Record<Lang, string>;

/** <html lang> and hreflang. */
export const htmlLang: Record<Lang, string> = { en: 'en', es: 'es', va: 'ca-ES-valencia' };

/** How dates and numbers are written in each language. */
export const dateLocale: Record<Lang, string> = { en: 'en-GB', es: 'es-ES', va: 'ca-ES-valencia' };

/** Each language's name in itself, and its short label on the masthead. */
export const langNames: Record<Lang, { label: string; name: string }> = {
  en: { label: 'EN', name: 'English' },
  es: { label: 'ES', name: 'Español' },
  va: { label: 'VAL', name: 'Valencià' },
};

/** The language of the page being built (Astro.currentLocale). */
export function langOf(locale: string | undefined): Lang {
  if (locale === 'es') return 'es';
  if (locale === 'va' || locale === 'ca-ES-valencia') return 'va';
  return 'en';
}

const isText = (value: unknown): value is Record<Lang, string> =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  Object.keys(value).length === langs.length &&
  langs.every((l) => typeof (value as Record<string, unknown>)[l] === 'string');

const isImage = (value: object): value is ImageMetadata => 'src' in value && 'format' in value && 'width' in value;

/** Content with every { en, es, va } replaced by the string in one language. */
export type InLang<T> = T extends Record<Lang, string>
  ? string
  : T extends ImageMetadata | Date | ((...args: never[]) => unknown)
    ? T
    : T extends readonly (infer U)[]
      ? InLang<U>[]
      : T extends object
        ? { [K in keyof T]: InLang<T[K]> }
        : T;

/** One string, or a whole object of copy, in one language. Pictures and dates pass through untouched. */
export function inLang<T>(value: T, lang: Lang): InLang<T> {
  if (isText(value)) return value[lang] as InLang<T>;
  if (Array.isArray(value)) return value.map((v) => inLang(v, lang)) as InLang<T>;
  if (typeof value === 'object' && value !== null && !(value instanceof Date) && !isImage(value)) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, inLang(v, lang)])) as InLang<T>;
  }
  return value as InLang<T>;
}

// The pages that exist in every language. Anything else (a research item, a
// PDF, an outside address) keeps its one address.
const translated = /^\/(?:(?:machine|research|join|partners|seasons|legal|privacy)\/)?(?:#.*)?$/;

/** An address on the site, in a language: `localise('/machine/', 'es')` is `/es/machine/`. */
export function localise(href: string, lang: Lang): string {
  if (lang === 'en' || !translated.test(href)) return href;
  return `/${lang}${href}`;
}

/** The same page in every language, for the language switch and hreflang. */
export const alternates = (path: string): Record<Lang, string> =>
  Object.fromEntries(langs.map((l) => [l, localise(path, l)])) as Record<Lang, string>;

/**
 * getStaticPaths for a page in src/pages/[...lang]/: English at the root (an
 * empty segment), then /es/ and /va/. The page receives its language as `lang`.
 */
export const everyLang = () => langs.map((lang) => ({ params: { lang: lang === 'en' ? undefined : lang }, props: { lang } }));

/** A month and a year, in capitals, as the labels write dates. */
export const monthYear = (date: Date, lang: Lang) =>
  date.toLocaleDateString(dateLocale[lang], { month: 'long', year: 'numeric', timeZone: 'UTC' }).toUpperCase();
