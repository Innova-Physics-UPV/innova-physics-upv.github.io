// Partners shown on the home page and on /partners.
// The SVGs live in public/partners/ and are served from /partners/<file>.
// `tier` is the name of a tier in sponsorship.ts. `fullName` is the partner's
// name written out, the logo's alt text and so the link's label
// (src/components/PartnerMark.astro). `url` is the page each partner asks for.
import type { Text } from '../i18n';

export interface Partner {
  name: string;
  fullName: Text;
  logo: string;
  url: string;
  tier: string;
}

export const partners: Partner[] = [
  {
    name: 'ETSIT',
    fullName: {
      en: 'Escuela Técnica Superior de Ingenieros de Telecomunicación (ETSIT), UPV',
      es: 'Escuela Técnica Superior de Ingenieros de Telecomunicación (ETSIT), UPV',
      va: 'Escola Tècnica Superior d’Enginyers de Telecomunicació (ETSIT), UPV',
    },
    logo: '/partners/teleco.svg',
    url: 'https://www.upv.es/entidades/etsit/',
    tier: 'Higgs',
  },
  {
    name: 'IUMPA',
    fullName: {
      en: 'Instituto Universitario de Matemática Pura y Aplicada (IUMPA), UPV',
      es: 'Instituto Universitario de Matemática Pura y Aplicada (IUMPA), UPV',
      va: 'Institut Universitari de Matemàtica Pura i Aplicada (IUMPA), UPV',
    },
    logo: '/partners/iumpa.svg',
    url: 'https://iumpa.webs.upv.es/',
    tier: 'Higgs',
  },
  {
    name: 'iTEAM',
    fullName: {
      en: 'Instituto de Telecomunicaciones y Aplicaciones Multimedia (iTEAM), UPV',
      es: 'Instituto de Telecomunicaciones y Aplicaciones Multimedia (iTEAM), UPV',
      va: 'Institut de Telecomunicacions i Aplicacions Multimèdia (iTEAM), UPV',
    },
    logo: '/partners/iteam.svg',
    url: 'https://www.iteam.upv.es/',
    tier: 'Higgs',
  },
  // Edwards Vacuum keeps its name in every language.
  {
    name: 'Edwards',
    fullName: 'Edwards Vacuum',
    logo: '/partners/edwards.svg',
    url: 'https://www.edwardsvacuum.com/',
    tier: 'Higgs',
  },
];
