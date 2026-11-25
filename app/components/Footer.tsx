import type { Dictionary } from "../[lang]/dictionary";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="footer">
      <p className="wordmark" aria-hidden="true">wrsdev</p>
      <p>{dict.text}</p>
    </footer>
  );
}
