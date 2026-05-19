"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const BG = "#EDE8DC";

// Each panel has a fixed rotation + offset so they look casually scattered.
// landed: whether the drop animation has fired.
const PANELS = [
  {
    src: "/illustrations/prologue-e.png",
    alt: "Feet tripping on a phone",
    rotate: -4,
    tx: "-6%",
    ty: "-4%",
    scale: 0.52,
    delay: 0,
  },
  {
    src: "/illustrations/prologue-d.png",
    alt: "Hand dropping the phone",
    rotate: 2.5,
    tx: "5%",
    ty: "2%",
    scale: 0.48,
    delay: 220,
  },
  {
    src: "/illustrations/prologue-c.png",
    alt: "Cracked phone in a sewer grate",
    rotate: -2,
    tx: "-3%",
    ty: "5%",
    scale: 0.50,
    delay: 460,
  },
  {
    src: "/illustrations/prologue-b.png",
    alt: "Desk with laptop showing InsideScoop",
    rotate: 3.5,
    tx: "4%",
    ty: "-3%",
    scale: 0.46,
    delay: 700,
  },
];

type Mode = "scatter" | "zoomed";

export default function ProloguePage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("scatter");
  const [zoomedIndex, setZoomedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [landed, setLanded] = useState([false, false, false, false]);

  // Preload all panel images
  useEffect(() => {
    PANELS.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  // Stagger panels dropping in
  useEffect(() => {
    const timers = PANELS.map((p, i) =>
      setTimeout(
        () => setLanded((v) => { const n = [...v]; n[i] = true; return n; }),
        p.delay + 120
      )
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  function wipe(after: () => void) {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      after();
      setTransitioning(false);
    }, 1400);
  }

  function clickPanel(i: number) {
    wipe(() => {
      setZoomedIndex(i);
      setMode("zoomed");
    });
  }

  function advanceZoomed() {
    wipe(() => {
      if (zoomedIndex >= PANELS.length - 1) {
        router.push("/select");
      } else {
        setZoomedIndex((prev) => prev + 1);
      }
    });
  }

  const isLastPanel = zoomedIndex === PANELS.length - 1;

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: BG,
      }}
    >

      {/* ── SCATTER VIEW ── */}
      {mode === "scatter" && (
        <>
          {PANELS.map((panel, i) => {
            const isLanded = landed[i];
            return (
              <div
                key={panel.src}
                onClick={() => clickPanel(i)}
                style={{
                  position: "absolute",
                  // Center each panel, then nudge by tx/ty
                  left: `calc(50% + ${panel.tx})`,
                  top: `calc(50% + ${panel.ty})`,
                  width: `${panel.scale * 100}vmin`,
                  height: `${panel.scale * 100}vmin`,
                  transform: isLanded
                    ? `translate(-50%, -50%) rotate(${panel.rotate}deg)`
                    : `translate(-50%, -80%) rotate(${panel.rotate * 0.5}deg) scale(0.92)`,
                  opacity: isLanded ? 1 : 0,
                  transition: isLanded
                    ? "opacity 0.55s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1)"
                    : "none",
                  cursor: "pointer",
                  zIndex: i + 1,
                  // Ink border — thick, like a physical photo
                  outline: "5px solid var(--ink)",
                  outlineOffset: "0px",
                  boxShadow: "4px 6px 18px rgba(46,38,46,0.22)",
                }}
              >
                <img
                  src={panel.src}
                  alt={panel.alt}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    display: "block",
                    userSelect: "none",
                  }}
                />

                {/* Hover lift */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    transition: "box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget.parentElement as HTMLDivElement;
                    el.style.zIndex = "10";
                    el.style.boxShadow = "8px 12px 32px rgba(46,38,46,0.32)";
                    el.style.transform = `translate(-50%, -50%) rotate(${panel.rotate * 0.4}deg) scale(1.03)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget.parentElement as HTMLDivElement;
                    el.style.zIndex = String(i + 1);
                    el.style.boxShadow = "4px 6px 18px rgba(46,38,46,0.22)";
                    el.style.transform = `translate(-50%, -50%) rotate(${panel.rotate}deg)`;
                  }}
                />
              </div>
            );
          })}

          {/* Hint */}
          <p
            style={{
              position: "absolute",
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--ink)",
              opacity: landed[3] ? 0.38 : 0,
              transition: "opacity 0.6s ease 0.3s",
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "nowrap",
              zIndex: 20,
            }}
          >
            click a photo to begin
          </p>
        </>
      )}

      {/* ── ZOOMED VIEW ── */}
      {mode === "zoomed" && (
        <div
          onClick={advanceZoomed}
          style={{
            position: "absolute",
            inset: 0,
            cursor: "pointer",
            background: BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            key={zoomedIndex}
            src={PANELS[zoomedIndex].src}
            alt={PANELS[zoomedIndex].alt}
            draggable={false}
            style={{
              maxWidth: "88vw",
              maxHeight: "88vh",
              objectFit: "contain",
              userSelect: "none",
              display: "block",
              outline: "5px solid var(--ink)",
              boxShadow: "6px 10px 28px rgba(46,38,46,0.20)",
            }}
          />

          {/* Dot counter */}
          <div
            style={{
              position: "absolute",
              bottom: 28,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 7,
              pointerEvents: "none",
            }}
          >
            {PANELS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === zoomedIndex ? 18 : 5,
                  height: 5,
                  borderRadius: 3,
                  background: i === zoomedIndex ? "var(--ink)" : "rgba(46,38,46,0.2)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Hint */}
          <p
            style={{
              position: "absolute",
              bottom: 52,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--ink)",
              opacity: 0.35,
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            {isLastPanel ? "click to continue →" : "click to advance"}
          </p>
        </div>
      )}

      {/* ── Ink-wipe transition overlay ── */}
      {transitioning && (
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 20,
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            x="0" y="0" width="100" height="100"
            fill={BG}
            style={{
              clipPath: "inset(0 100% 0 0)",
              animation: "ink-wipe 1.4s cubic-bezier(0.76,0,0.24,1) forwards",
            }}
          />
        </svg>
      )}

      <style>{`
        @keyframes ink-wipe {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
      `}</style>
    </main>
  );
}
