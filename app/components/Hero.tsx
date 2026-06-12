import type { Dictionary } from "../[lang]/dictionary";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="hero">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <p className="hero-eyebrow">{dict.eyebrow}</p>
      <h1 className="hero-title">
        {dict.titleBefore}
        <em>{dict.titleEm}</em>
        {dict.titleAfter}
      </h1>
      <p className="hero-desc">{dict.desc}</p>
      <a className="hero-cta" href="#projetos">
        {dict.cta}
      </a>
    </section>
  );
}
