import Reveal from "./Reveal";
import type { Dictionary } from "../[lang]/dictionary";

const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/wesley-reinert-da-silva-4b9970206",
  },
  { name: "GitHub", url: "https://github.com/wesurex" },
];

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contato" className="section">
      <h2 className="section-title">{dict.sectionTitle}</h2>
      <Reveal>
        <p className="contact-desc">{dict.desc}</p>
        <a className="contact-email" href="mailto:wesley.aqw@gmail.com">
          wesley.aqw@gmail.com
        </a>
        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.name}
              className="store-link"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name} <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
