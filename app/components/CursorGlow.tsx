"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 10;

export default function CursorGlow() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dots = Array.from(wrap.children) as HTMLElement[];
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    const pos = dots.map(() => ({ x: targetX, y: targetY }));
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      wrap.style.opacity = "1";
    };

    // a cabeça gruda no cursor; cada ponto persegue o anterior, formando o rastro
    const loop = () => {
      pos[0].x += (targetX - pos[0].x) * 0.55;
      pos[0].y += (targetY - pos[0].y) * 0.55;
      for (let i = 1; i < pos.length; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * 0.38;
        pos[i].y += (pos[i - 1].y - pos[i].y) * 0.38;
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].style.transform = `translate(${pos[i].x}px, ${pos[i].y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="cursor-trail" aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => {
        const size = 22 - i * 1.6;
        return (
          <span
            key={i}
            className="trail-dot"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              opacity: 1 - i / TRAIL_LENGTH,
            }}
          />
        );
      })}
    </div>
  );
}
