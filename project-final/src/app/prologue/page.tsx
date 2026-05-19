"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const BG = "#EDE8DC";

const PANELS = [
  {
    src: "/illustrations/prologue-e.png",
    alt: "Feet tripping on a phone",
    rotate: -5,
    tx: "-14%",
    ty: "-8%",
    scale: 0.60,
  },
  {
    src: "/illustrations/prologue-d.png",
    alt: "Hand dropping the phone",
    rotate: 3,
    tx: "13%",
    ty: "-6%",
    scale: 0.57,
  },
  {
    src: "/illustrations/prologue-c.png",
    alt: "Cracked phone in a sewer grate",
    rotate: -2.5,
    tx: "-8%",
    ty: "9%",
    scale: 0.59,
  },
  {
    src: "/illustrations/prologue-b.png",
    alt: "Desk with laptop showing InsideScoop",
    rotate: 4,
    tx: "10%",
    ty: "7%",
    scale: 0.55,
  },
];

// Fixed ink splot positions — organic blobs scattered on the page
const SPLOTS = [
  { cx: "12%", cy: "18%", rx: 28, ry: 18, rotate: -15, seed: 3 },
  { cx: "83%", cy: "74%", rx: 22, ry: 32, rotate: 25, seed: 9 },
  { cx: "72%", cy: "14%", rx: 14, ry: 10, rotate: 8, seed: 5 },
];

type Mode = "scatter" | "zoomed";

export default function ProloguePage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("scatter");
  const [revealedCount, setRevealedCount] = useState(0);
  const [zoomedIndex, setZoomedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Preload all panel images
  useEffect(() => {
    PANELS.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  function wipe(after: () => void) {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      after();
      setTransitioning(false);
    }, 1400);
  }

  function handlePageClick() {
    if (mode !== "scatter") return;
    if (revealedCount < PANELS.length) {
      setRevealedCount((c) => c + 1);
    }
  }

  function clickPanel(i: number) {
    if (revealedCount < PANELS.length) return; // still revealing
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

  const allRevealed = revealedCount >= PANELS.length;
  const isLastPanel = zoomedIndex === PANELS.length - 1;

  return (
    <main
      onClick={handlePageClick}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: BG,
        cursor: !allRevealed && mode === "scatter" ? "pointer" : "default",
      }}
    >
      {/* ── SVG filter defs (hidden) ── */}
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
        <defs>
          {/* Rough/hand-drawn border displacement */}
          <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          {/* Ink splot wobble */}
          <filter id="splot" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ── SCATTER VIEW ── */}
      {mode === "scatter" && (
        <>
          {/* Ink splots — always visible beneath photos */}
          {SPLOTS.map((s, si) => (
            <svg
              key={si}
              style={{
                position: "absolute",
                left: s.cx,
                top: s.cy,
                transform: `translate(-50%,-50%) rotate(${s.rotate}deg)`,
                overflow: "visible",
                pointerEvents: "none",
                zIndex: 0,
                opacity: 0.82,
              }}
              width={s.rx * 2 + 20}
              height={s.ry * 2 + 20}
              viewBox={`0 0 ${s.rx * 2 + 20} ${s.ry * 2 + 20}`}
            >
              <ellipse
                cx={s.rx + 10}
                cy={s.ry + 10}
                rx={s.rx}
                ry={s.ry}
                fill="#1a1218"
                filter="url(#splot)"
              />
            </svg>
          ))}

          {/* Photo panels */}
          {PANELS.map((panel, i) => {
            const isVisible = i < revealedCount;
            return (
              <div
                key={panel.src}
                onClick={(e) => {
                  if (!allRevealed) return;
                  e.stopPropagation();
                  clickPanel(i);
                }}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${panel.tx})`,
                  top: `calc(50% + ${panel.ty})`,
                  width: `${panel.scale * 100}vmin`,
                  height: `${panel.scale * 100}vmin`,
                  transform: isVisible
                    ? `translate(-50%, -50%) rotate(${panel.rotate}deg)`
                    : `translate(-50%, -130%) rotate(${panel.rotate * 0.6}deg) scale(0.88)`,
                  opacity: isVisible ? 1 : 0,
                  transition: isVisible
                    ? "opacity 0.5s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)"
                    : "none",
                  cursor: allRevealed ? "pointer" : "default",
                  zIndex: i + 1,
                }}
                onMouseEnter={(e) => {
                  if (!allRevealed) return;
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.zIndex = "10";
                  el.style.transform = `translate(-50%, -50%) rotate(${panel.rotate * 0.35}deg) scale(1.025)`;
                }}
                onMouseLeave={(e) => {
                  if (!allRevealed) return;
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.zIndex = String(i + 1);
                  el.style.transform = `translate(-50%, -50%) rotate(${panel.rotate}deg)`;
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

                {/* Textured ink border — SVG overlay, rough filter */}
                <svg
                  style={{
                    position: "absolute",
                    inset: -5,
                    width: "calc(100% + 10px)",
                    height: "calc(100% + 10px)",
                    pointerEvents: "none",
                    overflow: "visible",
                  }}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="2" y="2" width="96" height="96"
                    fill="none"
                    stroke="#1a1218"
                    strokeWidth="4.5"
                    filter="url(#rough)"
                  />
                </svg>

                {/* Panel number */}
                <span
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 10,
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.18em",
                    color: "var(--ink)",
                    opacity: 0.4,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
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
              opacity: revealedCount === 0 ? 0.38 : allRevealed ? 0.38 : 0,
              transition: "opacity 0.5s ease",
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "nowrap",
              zIndex: 20,
            }}
          >
            {allRevealed ? "click a photo to begin" : "click to reveal"}
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
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              key={zoomedIndex}
              src={PANELS[zoomedIndex].src}
              alt={PANELS[zoomedIndex].alt}
              draggable={false}
              style={{
                maxWidth: "84vw",
                maxHeight: "84vh",
                objectFit: "contain",
                userSelect: "none",
                display: "block",
              }}
            />
            {/* Textured border on zoomed image */}
            <svg
              style={{
                position: "absolute",
                inset: -6,
                width: "calc(100% + 12px)",
                height: "calc(100% + 12px)",
                pointerEvents: "none",
                overflow: "visible",
              }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <rect
                x="2" y="2" width="96" height="96"
                fill="none"
                stroke="#1a1218"
                strokeWidth="4"
                filter="url(#rough)"
              />
            </svg>
          </div>

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
            zIndex: 30,
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
