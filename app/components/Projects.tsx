import Image from "next/image";
import Reveal from "./Reveal";
import type { Dictionary } from "../[lang]/dictionary";

function ExternalLink({ link }: { link: { url: string; text: string } }) {
  return (
    <a
      className="store-link"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.text} <span className="arrow">↗</span>
    </a>
  );
}

// Captura de tela do site público do projeto (1280x720, em public/projects).
function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      className="shot"
      src={src}
      alt={alt}
      width={1280}
      height={720}
      sizes="(max-width: 720px) 100vw, 720px"
    />
  );
}

function Links({
  link,
  github,
}: {
  link?: { url: string; text: string };
  github?: string;
}) {
  return (
    <div className="links">
      {link && <ExternalLink link={link} />}
      {github && <ExternalLink link={{ url: github, text: "GitHub" }} />}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="card-tags">
      {tags.map((t) => (
        <span className="tag" key={t}>{t}</span>
      ))}
    </div>
  );
}

export default function Projects({
  dict,
}: {
  dict: Dictionary["projects"];
}) {
  return (
    <section id="projetos" className="section">
      <h2 className="section-title">{dict.sectionTitle}</h2>

      <ol className="work-list">
        {dict.caseStudies.map((cs, i) => (
          <li key={cs.title}>
            {/* <details> nativo: abre/fecha sem JS; o primeiro já vem aberto */}
            <details className="work" open={i === 0}>
              <summary>
                <span className="work-idx">{String(i + 1).padStart(3, "0")}</span>
                <h3>{cs.title}</h3>
                <span className="work-label">{cs.label}</span>
              </summary>
              <div className="work-body">
                {cs.image && <Shot src={cs.image} alt={cs.title} />}
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

                <Tags tags={cs.tags} />
                <Links link={cs.link} github={cs.github} />
              </div>
            </details>
          </li>
        ))}
      </ol>

      <h3 className="sub-title">{dict.cardsTitle}</h3>
      <div className="projects-grid">
        {dict.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 60}>
            <article className="card">
              {card.image && <Shot src={card.image} alt={card.title} />}
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Tags tags={card.tags} />
              <Links link={card.link} github={card.github} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
