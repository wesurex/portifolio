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
};

export type Dictionary = {
  metadata: { title: string; description: string };
  header: { projects: string; about: string; contact: string };
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
    cards: { title: string; desc: string; tags: string[] }[];
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
