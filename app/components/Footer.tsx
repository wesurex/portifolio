import type { Dictionary } from "../[lang]/dictionary";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return <footer className="footer">{dict.text}</footer>;
}
