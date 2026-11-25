import type { Dictionary } from "../[lang]/dictionary";

// Commits de minha autoria por repositório, de jun a nov/2026 (git log --author).
const commits: [repo: string, count: number][] = [
  ["compre-alva", 499],
  ["alva-tools", 78],
  ["wrs-tools", 37],
  ["frigobar-estoque", 27],
  ["live-alva", 25],
];
const max = commits[0][1];

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="hero">
      <div>
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
      </div>

      <figure className="term">
        <figcaption>
          <code>git shortlog -sn --since=2026-06</code>
        </figcaption>
        <ul className="term-rows">
          {commits.map(([repo, count]) => (
            <li key={repo}>
              <span className="term-num">{count}</span>
              <span className="term-name">{repo}</span>
              {/* raiz quadrada: mantém os repositórios menores visíveis ao lado do maior */}
              <span
                className="term-bar"
                style={{ width: `${Math.sqrt(count / max) * 100}%` }}
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </figure>
    </section>
  );
}
