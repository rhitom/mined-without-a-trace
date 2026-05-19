"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Background color sampled from the prologue illustrations
const BG = "#EDE8DC";

const PANELS = [
  {
    src: "/illustrations/prologue-e.png",
    alt: "Feet tripping on a phone",
    objectPosition: "center center",
  },
  {
    src: "/illustrations/prologue-d.png",
    alt: "Hand dropping the phone",
    objectPosition: "center center",
  },
  {
    src: "/illustrations/prologue-c.png",
    alt: "Cracked phone in a sewer grate",
    objectPosition: "center center",
  },
  {
    src: "/illustrations/prologue-b.png",
    alt: "Desk with laptop showing InsideScoop",
    objectPosition: "center center",
  },
];

type Mode = "grid" | "zoomed";

export default function ProloguePage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("grid");
  const [zoomedIndex, setZoomedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [visible, setVisible] = useState([false, false, false, false]);
  const [hintVisible, setHintVisible] = useState(true);

  // Preload all panel images upfront
  useEffect(() => {
    PANELS.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  // Stagger panels in on mount
  useEffect(() => {
    const timers = PANELS.map((_, i) =>
      setTimeout(
        () => setVisible((v) => { const n = [...v]; n[i] = true; return n; }),
        80 + i * 160
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
    setHintVisible(false);
    wipe(() => {
      setZoomedIndex(i);
      setMode("zoomed");
    });
  }

  function advanceZoomed() {
    setHintVisible(false);
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

      {/* ── GRID VIEW ── */}
      {mode === "grid" && (
        <>
          {/* 1×4 horizontal comic strip; gap + outer padding act as ink borders */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr",
              gap: 6,
              padding: 6,
              width: "100%",
              height: "100%",
              background: "var(--ink)",
              boxSizing: "border-box",
            }}
          >
            {PANELS.map((panel, i) => (
              <div
                key={panel.src}
                onClick={() => clickPanel(i)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: BG,
                  opacity: visible[i] ? 1 : 0,
                  transform: visible[i] ? "scale(1)" : "scale(0.975)",
                  transition: "opacity 0.45s ease, transform 0.45s ease",
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
                    objectPosition: panel.objectPosition,
                    display: "block",
                    userSelect: "none",
                  }}
                />

                {/* Hover overlay — subtle darkening */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(46,38,46,0)",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background = "rgba(46,38,46,0.05)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background = "rgba(46,38,46,0)")
                  }
                />

                {/* Panel number */}
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 12,
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    color: "var(--ink)",
                    opacity: 0.35,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          {/* Grid hint */}
          <p
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--ink)",
              opacity: hintVisible ? 0.38 : 0,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 5,
            }}
          >
            click a panel to begin
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
              width: "100%",
              height: "100%",
              objectFit: "contain",
              userSelect: "none",
              display: "block",
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
