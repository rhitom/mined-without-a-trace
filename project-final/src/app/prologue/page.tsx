"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const PANELS = [
  { src: "/illustrations/prologue-e.png", alt: "Feet tripping on a phone" },
  { src: "/illustrations/prologue-d.png", alt: "Hand dropping the phone" },
  { src: "/illustrations/prologue-c.png", alt: "Cracked phone in a sewer grate" },
  { src: "/illustrations/prologue-b.png", alt: "Desk with laptop showing InsideScoop" },
];

// Tripping panel: three clip regions that reveal sequentially.
// inset(top right bottom left)
// Left shoe:       bottom-left corner
// Right shoe:      bottom-right corner
// Exclamation:     top strip
const CLIP_LEFT_SHOE  = "inset(48% 52% 0% 0%)";
const CLIP_RIGHT_SHOE = "inset(48% 0% 0% 48%)";
const CLIP_EXCLAIM    = "inset(0% 0% 52% 0%)";

export default function ProloguePage() {
  const router = useRouter();
  const [panelIndex, setPanelIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  // Tripping-panel stagger: 0=nothing, 1=left shoe, 2=right shoe, 3=exclamation
  const [trippingStep, setTrippingStep] = useState(0);

  // Preload next panel
  useEffect(() => {
    if (panelIndex < PANELS.length - 1) {
      const img = new window.Image();
      img.src = PANELS[panelIndex + 1].src;
    }
  }, [panelIndex]);

  // Auto-advance tripping reveal when on panel 0
  useEffect(() => {
    if (panelIndex !== 0) return;
    setTrippingStep(0);
    const t1 = setTimeout(() => setTrippingStep(1), 120);
    const t2 = setTimeout(() => setTrippingStep(2), 750);
    const t3 = setTimeout(() => setTrippingStep(3), 1450);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [panelIndex]);

  function advance() {
    if (transitioning) return;

    setTransitioning(true);
    setHintVisible(false);

    setTimeout(() => {
      if (panelIndex === PANELS.length - 1) {
        router.push("/select");
      } else {
        setPanelIndex((i) => i + 1);
        setTransitioning(false);
      }
    }, 720);
  }

  const panel = PANELS[panelIndex];
  const isTripping = panelIndex === 0;

  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      style={{ background: "var(--cream)", cursor: "pointer" }}
      onClick={advance}
    >
      {/* Panel image */}
      <div
        className="absolute inset-0"
        style={{
          opacity: transitioning ? 0 : 1,
          transition: "opacity 0.72s ease",
        }}
      >
        {isTripping ? (
          /* Staggered element reveal for the tripping panel */
          <div className="absolute inset-0">
            {/* Left shoe */}
            <img
              src={panel.src}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-contain select-none"
              draggable={false}
              style={{
                background: "var(--cream)",
                clipPath: CLIP_LEFT_SHOE,
                opacity: trippingStep >= 1 ? 1 : 0,
                transition: "opacity 0.45s ease",
              }}
            />
            {/* Right shoe */}
            <img
              src={panel.src}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-contain select-none"
              draggable={false}
              style={{
                background: "var(--cream)",
                clipPath: CLIP_RIGHT_SHOE,
                opacity: trippingStep >= 2 ? 1 : 0,
                transition: "opacity 0.45s ease",
              }}
            />
            {/* Exclamation point */}
            <img
              src={panel.src}
              alt={panel.alt}
              className="absolute inset-0 w-full h-full object-contain select-none"
              draggable={false}
              style={{
                background: "var(--cream)",
                clipPath: CLIP_EXCLAIM,
                opacity: trippingStep >= 3 ? 1 : 0,
                transition: "opacity 0.55s ease",
              }}
            />
          </div>
        ) : (
          <img
            key={panel.src}
            src={panel.src}
            alt={panel.alt}
            className="w-full h-full object-contain select-none"
            draggable={false}
            style={{ background: "var(--cream)" }}
          />
        )}
      </div>

      {/* Ink-wipe overlay — plays during every transition */}
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
              animation: "ink-wipe 0.72s cubic-bezier(0.76,0,0.24,1) forwards",
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
