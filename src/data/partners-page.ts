// The partners page's own copy, in the three languages. The partners
// themselves are in src/data/partners.ts and the tiers and benefits in
// src/data/sponsorship.ts. Launch copy from "Website copy for launch", tabs 6,
// 7.1 and 8.5 (docs/copy/), approved by Marc on 16 October 2026.

export const partnersPage = {
  title: { en: 'Partners', es: 'Colaboradores', va: 'Col·laboradors' },
  shout: { en: 'PARTNERS', es: 'COLABORADORES', va: 'COL·LABORADORS' },
  kicker: { en: 'PARTNERS · 2026-27', es: 'COLABORADORES · 2026-27', va: 'COL·LABORADORS · 2026-27' },
  // For search results and shared links, under about 155 characters; the lead
  // is too long for that.
  description: {
    en: 'Support ALOHA, an open-hardware electron accelerator built by students at the UPV: four partner tiers, from your name on this site to a named subsystem.',
    es: 'Apoya ALOHA, un acelerador de electrones de hardware abierto construido por estudiantes de la UPV: cuatro niveles de colaboración, desde tu nombre en esta web hasta un subsistema con tu nombre.',
    va: 'Dona suport a ALOHA, un accelerador d’electrons de maquinari obert construït per estudiants de la UPV: quatre nivells de col·laboració, des del teu nom en esta web fins a un subsistema amb el teu nom.',
  },
  lead: {
    en: 'Institutions and companies that help us build ALOHA. Each tier adds to the one below it, from your name on this site to a subsystem of the machine named after you.',
    es: 'Instituciones y empresas que nos ayudan a construir ALOHA. Cada nivel suma al anterior, desde tu nombre en esta web hasta un subsistema de la máquina con tu nombre.',
    va: 'Institucions i empreses que ens ajuden a construir ALOHA. Cada nivell suma a l’anterior, des del teu nom en esta web fins a un subsistema de la màquina amb el teu nom.',
  },
  tiersLabel: {
    en: 'The four tiers as lines of growing height: Neutrino, Quark, Photon and Higgs.',
    es: 'Los cuatro niveles como líneas de altura creciente: Neutrino, Quark, Photon y Higgs.',
    va: 'Els quatre nivells com a línies d’altura creixent: Neutrino, Quark, Photon i Higgs.',
  },
  benefits: {
    kicker: { en: 'WHAT EACH TIER BRINGS', es: 'LO QUE APORTA CADA NIVEL', va: 'EL QUE APORTA CADA NIVELL' },
    title: { en: 'Benefits', es: 'Ventajas', va: 'Avantatges' },
    caption: {
      en: 'The benefits of each tier; each tier includes those of the tiers below it.',
      es: 'Las ventajas de cada nivel; cada nivel incluye las de los niveles inferiores.',
      va: 'Els avantatges de cada nivell; cada nivell inclou els dels nivells inferiors.',
    },
    notes: [
      {
        en: 'AMOUNTS PER TIER ARE IN THE DOSSIER',
        es: 'LAS CUANTÍAS DE CADA NIVEL ESTÁN EN EL DOSIER',
        va: 'LES QUANTIES DE CADA NIVELL SÓN AL DOSSIER',
      },
      {
        en: 'HIGGS IS ALSO BY INVITATION',
        es: 'HIGGS TAMBIÉN ES POR INVITACIÓN',
        va: 'HIGGS TAMBÉ ÉS PER INVITACIÓ',
      },
      {
        en: 'IN KIND COUNTS TOO · LICENCES, LOANS AND DONATED EQUIPMENT',
        es: 'EN ESPECIE TAMBIÉN CUENTA · LICENCIAS, PRÉSTAMOS Y EQUIPOS CEDIDOS',
        va: 'EN ESPÈCIE TAMBÉ COMPTA · LLICÈNCIES, PRÉSTECS I EQUIPS CEDITS',
      },
    ],
  },
  ours: {
    title: {
      en: 'Our partners this season',
      es: 'Nuestros colaboradores esta temporada',
      va: 'Els nostres col·laboradors esta temporada',
    },
  },
  dossier: {
    kicker: {
      en: 'PARTNERSHIP DOSSIER · 2026-27 · PDF',
      es: 'DOSIER DE PATROCINIO · 2026-27 · PDF, EN INGLÉS',
      va: 'DOSSIER DE PATROCINI · 2026-27 · PDF, EN ANGLÉS',
    },
    title: { en: 'Put your name on the beam', es: 'Pon tu nombre en el haz', va: 'Posa el teu nom en el feix' },
    lead: {
      en: 'The dossier has the tiers, the amounts and what your support builds. Or write to us, and let’s meet.',
      es: 'El dosier recoge los niveles, los importes y lo que construye tu apoyo. O escríbenos y quedamos.',
      va: 'El dossier recull els nivells, els imports i el que construïx el teu suport. O escriu-nos i quedem.',
    },
    download: { en: 'Download the dossier', es: 'Descarga el dosier', va: 'Descarrega el dossier' },
    downloadName: 'Innova-Physics-Partnership-Dossier-2026-27.pdf',
    write: { en: 'Write to us', es: 'Escríbenos', va: 'Escriu-nos' },
    // The subject of the "Write to us" email, in the reader's language.
    subject: {
      en: 'Partnering with Innova Physics UPV',
      es: 'Colaborar con Innova Physics UPV',
      va: 'Col·laborar amb Innova Physics UPV',
    },
  },
};
