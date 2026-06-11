import Reveal from "./Reveal";

const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/wesley-reinert-da-silva-4b9970206",
  },
  { name: "GitHub", url: "https://github.com/wesurex" },
];

export default function Contact() {
  return (
    <section id="contato" className="section">
      <h2 className="section-title">Contato</h2>
      <Reveal>
        <p className="contact-desc">
          Tem um projeto em mente ou quer trocar uma ideia sobre e-commerce e
          produtos digitais?
        </p>
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
