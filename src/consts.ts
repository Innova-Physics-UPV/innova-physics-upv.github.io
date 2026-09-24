// Shared destinations, so URLs are not repeated across components.

// Sign-up form (Formbricks). This is the clean URL: the one in HeroHome
// carried utm_source=ig / utm_medium=social / utm_content=link_in_bio and an
// fbclid from the Instagram bio campaign. Reusing those here would attribute
// sign-ups that came from the website to Instagram.
export const FORM_URL = 'https://app.formbricks.com/s/cmtu7yz8fjked01z5rk1eelti';

// TODO: the PDF still needs uploading to public/dossier.pdf - until then this 404s.
export const DOSSIER_URL = '/dossier.pdf';
