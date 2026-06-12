import Reveal from "./Reveal";
import type { Dictionary } from "../[lang]/dictionary";

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="sobre" className="section">
      <h2 className="section-title">{dict.sectionTitle}</h2>
      <Reveal>
      <div className="about-wrap">
        <div className="about-text">
          <p>{dict.p1}</p>
          <p>{dict.p2}</p>

          <h3 className="about-subtitle">{dict.educationTitle}</h3>
          <ul className="education">
            {dict.education.map((e) => (
              <li key={e.title}>
                <span>{e.title}</span>
                <span className="education-detail">{e.detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills">
          {dict.skills.map((s) => (
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
