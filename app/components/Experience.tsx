import Reveal from "./Reveal";
import type { Dictionary } from "../[lang]/dictionary";

export default function Experience({
  dict,
}: {
  dict: Dictionary["experience"];
}) {
  return (
    <section id="experiencia" className="section">
      <h2 className="section-title">{dict.sectionTitle}</h2>
      <Reveal>
        <ol className="xp-list">
          {dict.items.map((x) => (
            <li key={x.role + x.period}>
              <span className="xp-period">{x.period}</span>
              <div>
                <h3>{x.role}</h3>
                <p className="xp-company">{x.company}</p>
                {x.desc && <p className="xp-desc">{x.desc}</p>}
              </div>
              <div className="card-tags">
                {x.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <h3 className="sub-title">{dict.certsTitle}</h3>
        <ul className="education">
          {dict.certs.map((c) => (
            <li key={c.title}>
              <span>{c.title}</span>
              <span className="education-detail">{c.detail}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
