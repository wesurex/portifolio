// Tipos compartilhados entre os dicionários e os componentes.
// Mantido fora de dictionaries.ts para poder ser importado sem o "server-only".

export type CaseStudy = {
  label: string;
  title: string;
  desc: string;
  stats: { num: string; label: string }[];
  highlights: string[];
  tags: string[];
  link?: { url: string; text: string };
  image?: string;
};

export type Dictionary = {
  metadata: { title: string; description: string };
  header: {
    projects: string;
    experience: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    desc: string;
    cta: string;
  };
  projects: {
    sectionTitle: string;
    caseStudies: CaseStudy[];
    cardsTitle: string;
    cards: {
      title: string;
      desc: string;
      tags: string[];
      link?: { url: string; text: string };
      image?: string;
    }[];
  };
  experience: {
    sectionTitle: string;
    items: {
      period: string;
      role: string;
      company: string;
      desc?: string;
      tags: string[];
    }[];
    certsTitle: string;
    certs: { title: string; detail: string }[];
  };
  about: {
    sectionTitle: string;
    p1: string;
    p2: string;
    educationTitle: string;
    education: { title: string; detail: string }[];
    skills: { area: string; stack: string }[];
  };
  contact: { sectionTitle: string; desc: string };
  footer: { text: string };
};
