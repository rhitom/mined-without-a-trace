"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const PANELS = [
  { src: "/illustrations/prologue-e.png", alt: "Feet tripping on a phone" },
  { src: "/illustrations/prologue-d.png", alt: "Hand dropping the phone" },
  { src: "/illustrations/prologue-c.png", alt: "Cracked phone in a sewer grate" },
  { src: "/illustrations/prologue-b.png", alt: "Desk with laptop showing InsideScoop" },
];

// Approximate position of the laptop screen inside prologue-b.png
// (as percentages of the image, tuned to the illustration)
const LAPTOP_SCREEN = { left: 31, top: 22, width: 38, height: 34 };

export default function ProloguePage() {
  const router = useRouter();
  const [panelIndex, setPanelIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  // For panel 3 zoom-out of laptop screen
  const [zooming, setZooming] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload next panel
  useEffect(() => {
    if (panelIndex < PANELS.length - 1) {
      const img = new window.Image();
      img.src = PANELS[panelIndex + 1].src;
    }
  }, [panelIndex]);

  function advance() {
    if (transitioning) return;

    if (panelIndex === PANELS.length - 1) {
      // Panel 3 (desk) — zoom into laptop screen then navigate
      setZooming(true);
      setTimeout(() => router.push("/select"), 900);
      return;
    }

    setTransitioning(true);
    setHintVisible(false);
    setTimeout(() => {
      setPanelIndex((i) => i + 1);
      setTransitioning(false);
    }, 380);
  }

  const panel = PANELS[panelIndex];
  const isLastPanel = panelIndex === PANELS.length - 1;

  // Zoom transform: scale up so the laptop screen fills the viewport
  // Scale factor = 100 / LAPTOP_SCREEN.width ≈ 2.63
  // We also need to shift origin to center on the screen midpoint
  const zoomOriginX = LAPTOP_SCREEN.left + LAPTOP_SCREEN.width / 2;
  const zoomOriginY = LAPTOP_SCREEN.top + LAPTOP_SCREEN.height / 2;

  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      style={{ background: "var(--cream)", cursor: "pointer" }}
      onClick={advance}
    >
      {/* Panel image */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{
          opacity: transitioning ? 0 : 1,
          transition: transitioning
            ? "opacity 0.38s ease"
            : zooming
            ? "none"
            : "opacity 0.38s ease",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transformOrigin: `${zoomOriginX}% ${zoomOriginY}%`,
            transform: zooming && isLastPanel ? "scale(4)" : "scale(1)",
            transition: zooming ? "transform 0.85s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        >
          <img
            key={panel.src}
            src={panel.src}
            alt={panel.alt}
            className="w-full h-full object-contain select-none"
            draggable={false}
            style={{ background: "var(--cream)" }}
          />
        </div>
      </div>

      {/* SVG ink-wipe overlay drawn on top during transition */}
      {transitioning && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            x="0" y="0" width="100" height="100"
            fill="var(--cream)"
            style={{
              clipPath: "inset(0 100% 0 0)",
              animation: "ink-wipe 0.38s cubic-bezier(0.4,0,0.2,1) forwards",
            }}
          />
        </svg>
      )}

      {/* Panel counter dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
        {PANELS.map((_, i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: i === panelIndex ? "var(--ink)" : "rgba(46,38,46,0.2)",
              transition: "background 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Hint text — fades after first click */}
      <p
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-xs tracking-[0.28em] uppercase select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--warm-gray)",
          opacity: hintVisible ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        click anywhere to continue
      </p>

      <style>{`
        @keyframes ink-wipe {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
      `}</style>
    </main>
  );
}
