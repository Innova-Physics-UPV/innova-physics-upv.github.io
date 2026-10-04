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
