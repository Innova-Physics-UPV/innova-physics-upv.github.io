// Shared destinations, so URLs are not repeated across components.

// Sign-up form (Formbricks). This is the clean URL: the one in HeroHome
// carried utm_source=ig / utm_medium=social / utm_content=link_in_bio and an
// fbclid from the Instagram bio campaign. Reusing those here would attribute
// sign-ups that came from the website to Instagram.
export const FORM_URL = 'https://app.formbricks.com/s/cmtu7yz8fjked01z5rk1eelti';

// The PDF goes in public/dossier.pdf. Until it is there, /partners hides the
// download button instead of linking to a 404.
export const DOSSIER_URL = '/dossier.pdf';

export const CONTACT_EMAIL = 'innovaphysicsupv@gmail.com';

// Once a round has closed, the Join call becomes an email to the team: to
// apply late, as an exception, or to hear when the next round opens (Marc,
// 10 October 2026). The subject is in the reader's language (src/i18n/join.ts).
export const writeToJoin = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

// The museum of past seasons (/seasons/) stays out of the site until IP0 to
// IP2 have their copy and photos (Direction, 9 October 2026): no page, no
// link from the home or the footer, nothing in the sitemap. Set it to true to
// publish it.
export const PAST_SEASONS_LIVE = false;

// The CERN Open Hardware Licence, strongly reciprocal (CERN-OHL-S v2).
export const CERN_OHL_URL = 'https://cern-ohl.web.cern.ch/';

// Texts, write-ups, drawings and documents: Creative Commons Attribution 4.0
// (Direction, 10 October 2026). Not photos of people, not others' marks.
export const CC_BY_URL = 'https://creativecommons.org/licenses/by/4.0/';
