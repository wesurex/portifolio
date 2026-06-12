import Link from "next/link";
import type { Locale } from "../[lang]/dictionaries";
import type { Dictionary } from "../[lang]/dictionary";

const languages: { locale: Locale; label: string; href: string }[] = [
  { locale: "en", label: "EN", href: "/" },
  { locale: "pt-BR", label: "PT", href: "/pt-BR" },
  { locale: "es", label: "ES", href: "/es" },
];

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["header"];
}) {
  return (
    <header className="header">
      <div className="logo">
        wrs<span>dev</span>
      </div>
      <nav className="nav">
        <a href="#projetos">{dict.projects}</a>
        <a href="#sobre">{dict.about}</a>
        <a href="#contato">{dict.contact}</a>
      </nav>
      <div className="lang-switcher">
        {languages.map((l) => (
          <Link
            key={l.locale}
            href={l.href}
            className={l.locale === lang ? "active" : undefined}
            aria-current={l.locale === lang ? "true" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
