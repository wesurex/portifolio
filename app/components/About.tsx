const skills = [
  { area: "Backend", stack: "Django · Python" },
  { area: "Frontend", stack: "Next.js · React" },
  { area: "Web", stack: "HTML · CSS · JavaScript" },
  { area: "E-commerce", stack: "Shopify · Liquid · Tray" },
  { area: "CMS", stack: "WordPress" },
  { area: "Integrações", stack: "Bling · Omie · REST APIs" },
  { area: "Infra", stack: "WSL · Linux · CI" },
];

const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    detail: "Superior · UniSociesc · 1º de 5 semestres",
  },
  {
    title: "Técnico em Análise e Desenvolvimento de Sistemas",
    detail: "SENAI · concluído",
  },
  {
    title: "Inglês",
    detail: "Rockfeller · 2º semestre",
  },
];

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="section">
      <h2 className="section-title">Sobre</h2>
      <Reveal>
      <div className="about-wrap">
        <div className="about-text">
          <p>
            Sou desenvolvedor de Joinville-SC, nascido em novembro de 1996,
            focado em e-commerce e produtos digitais. Atualmente trabalho como
            dev full-stack na Alva Personal Care, do banco de dados ao pixel:
            arquitetura de backend em Django, interfaces em Next.js e
            customizações profundas em Shopify.
          </p>
          <p>
            Também tenho experiência com WordPress e lojas Tray, além de
            integrações com Bling, Omie e REST APIs em geral.
          </p>

          <h3 className="about-subtitle">Formação</h3>
          <ul className="education">
            {education.map((e) => (
              <li key={e.title}>
                <span>{e.title}</span>
                <span className="education-detail">{e.detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill-row" key={s.area}>
              <span>{s.area}</span>
              <span>{s.stack}</span>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
