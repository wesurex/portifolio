import Reveal from "./Reveal";
import type { Dictionary } from "../[lang]/dictionary";

export default function Projects({
  dict,
}: {
  dict: Dictionary["projects"];
}) {
  return (
    <section id="projetos" className="section">
      <h2 className="section-title">{dict.sectionTitle}</h2>

      {dict.caseStudies.map((cs) => (
        <Reveal key={cs.title}>
          <article className="case-study">
            <p className="case-label">{cs.label}</p>
            <h3>{cs.title}</h3>
            <p className="case-desc">{cs.desc}</p>

            <div className="case-stats">
              {cs.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <ul className="case-highlights">
              {cs.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="card-tags">
              {cs.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>

            {cs.link && (
              <a
                className="store-link"
                href={cs.link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cs.link.text} <span className="arrow">↗</span>
              </a>
            )}
          </article>
        </Reveal>
      ))}

      <div className="projects-grid">
        {dict.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 120}>
            <article className="card">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="card-tags">
                {card.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
