// Sponsorship tiers and benefits, from the Partnership Dossier 2026-27 (p. 4).
// The minimum amounts per season are left out on purpose: they are in the PDF.
// Lowest tier first, as in the dossier. Tier names are the same in every
// language.
export const tiers = [{ name: 'Neutrino' }, { name: 'Quark' }, { name: 'Photon' }, { name: 'Higgs' }];

// Each benefit starts at `from` and every tier above it gets it too.
export const benefits = [
  {
    text: {
      en: 'Name on our website and public docs',
      es: 'Nombre en nuestra web y documentación pública',
      va: 'Nom en la nostra web i documentació pública',
    },
    from: 'Neutrino',
  },
  {
    text: {
      en: 'Credit in the post about your support',
      es: 'Mención en la publicación sobre tu apoyo',
      va: 'Menció en la publicació sobre el teu suport',
    },
    from: 'Neutrino',
  },
  {
    text: {
      en: 'Impact letter at the end of the season',
      es: 'Carta de impacto al final de la temporada',
      va: 'Carta d’impacte al final de la temporada',
    },
    from: 'Neutrino',
  },
  {
    text: {
      en: 'Name or logo on the team shirt',
      es: 'Nombre o logo en la camiseta del equipo',
      va: 'Nom o logo en la samarreta de l’equip',
    },
    from: 'Neutrino',
  },
  {
    text: {
      en: 'Logo on the website, posts and roll-up',
      es: 'Logo en la web, las publicaciones y el roll-up',
      va: 'Logo en la web, les publicacions i el roll-up',
    },
    from: 'Quark',
  },
  {
    text: {
      en: 'Closing slide of our talks',
      es: 'Diapositiva final de nuestras charlas',
      va: 'Diapositiva final de les nostres xarrades',
    },
    from: 'Quark',
  },
  {
    text: {
      en: 'Logo on posters and the main roll-up',
      es: 'Logo en los pósteres y el roll-up principal',
      va: 'Logo en els pòsters i el roll-up principal',
    },
    from: 'Photon',
  },
  {
    text: {
      en: 'Formal polo and a plate on the machine',
      es: 'Polo formal y una placa en la máquina',
      va: 'Polo formal i una placa en la màquina',
    },
    from: 'Photon',
  },
  {
    text: {
      en: 'A named subsystem of the machine',
      es: 'Un subsistema de la máquina con tu nombre',
      va: 'Un subsistema de la màquina amb el teu nom',
    },
    from: 'Higgs',
  },
  {
    text: {
      en: 'A talk at our design challenge',
      es: 'Una charla en nuestro reto de diseño',
      va: 'Una xarrada en el nostre repte de disseny',
    },
    from: 'Higgs',
  },
  {
    text: {
      en: 'Recruiting talk at ETSIT and our CV book',
      es: 'Charla de captación en la ETSIT y nuestro libro de CV',
      va: 'Xarrada de captació a l’ETSIT i el nostre llibre de CV',
    },
    from: 'Higgs',
  },
];
