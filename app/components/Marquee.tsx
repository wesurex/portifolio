const items = [
  "Django",
  "Next.js",
  "Shopify",
  "TypeScript",
  "Liquid",
  "Python",
  "React",
  "E-commerce",
  "REST APIs",
  "Celery",
  "PostgreSQL",
  "WordPress",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {/* lista duplicada para o loop ser contínuo */}
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
