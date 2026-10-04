// Sponsorship tiers and benefits, from the Partnership Dossier 2026-27 (p. 4).
// The minimum amounts per season are left out on purpose: they are in the PDF.
// Lowest tier first, as in the dossier. The colours are the tier tokens in globals.css.
export const tiers = [
  { name: 'Neutrino', color: 'var(--c-tier-neutrino)' },
  { name: 'Quark',    color: 'var(--c-tier-quark)' },
  { name: 'Photon',   color: 'var(--c-tier-photon)' },
  { name: 'Higgs',    color: 'var(--c-tier-higgs)' },
];

// Each benefit starts at `from` and every tier above it gets it too.
export const benefits = [
  { text: 'Name on our website and public docs',     from: 'Neutrino' },
  { text: 'Credit in the post about your support',   from: 'Neutrino' },
  { text: 'Impact letter at the end of the season',  from: 'Neutrino' },
  { text: 'Name or logo on the team shirt',          from: 'Neutrino' },
  { text: 'Logo on the website, posts and roll-up',  from: 'Quark' },
  { text: 'Closing slide of our talks',              from: 'Quark' },
  { text: 'Logo on posters and the main roll-up',    from: 'Photon' },
  { text: 'Formal polo and a plate on the machine',  from: 'Photon' },
  { text: 'A named subsystem of the machine',        from: 'Higgs' },
  { text: 'A talk at our design challenge',          from: 'Higgs' },
  { text: 'Recruiting talk at ETSIT and our CV book', from: 'Higgs' },
];
