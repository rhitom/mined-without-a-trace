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
    maxH: "58vh",
  },
  {
    src: "/illustrations/prologue-d.png",
    alt: "Hand dropping the phone",
    rotate: 3,
    tx: "13%",
    ty: "-6%",
    maxH: "55vh",
  },
  {
    src: "/illustrations/prologue-c.png",
    alt: "Cracked phone in a sewer grate",
    rotate: -2.5,
    tx: "-8%",
    ty: "9%",
    maxH: "56vh",
  },
  // Last panel — expands to fill the page
  {
    src: "/illustrations/prologue-b.png",
    alt: "Desk with laptop showing InsideScoop",
    rotate: 4,
    tx: "10%",
    ty: "7%",
    maxH: "54vh",
  },
];

const SPLOTS = [
  { cx: "11%", cy: "17%", rx: 28, ry: 18, rotate: -15 },
  { cx: "84%", cy: "76%", rx: 22, ry: 32, rotate: 25 },
  { cx: "73%", cy: "13%", rx: 14, ry: 10, rotate: 8 },
];

const LAST = PANELS.length - 1;

export default function ProloguePage() {
  const router = useRouter();
  const [revealedCount, setRevealedCount] = useState(0);
  const [lastExpanded, setLastExpanded] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    PANELS.forEach((p) => {
      const img = new window.Image();
      img.src = p.src;
    });
  }, []);

  // First panel drops in automatically
  useEffect(() => {
    const t = setTimeout(() => setRevealedCount(1), 400);
    return () => clearTimeout(t);
  }, []);

  // When all panels revealed, expand the last one after a beat
  useEffect(() => {
    if (revealedCount < PANELS.length) return;
    const t = setTimeout(() => setLastExpanded(true), 150);
    return () => clearTimeout(t);
  }, [revealedCount]);

  function handleClick() {
    if (exiting) return;

    // Exit: zoom-fade the last panel out, then navigate
    if (lastExpanded) {
      setExiting(true);
      setTimeout(() => router.push("/select"), 750);
      return;
    }

    if (revealedCount < PANELS.length) {
      setRevealedCount((c) => c + 1);
    }
  }

  return (
    <main
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: BG,
        cursor: "pointer",
      }}
    >
      {/* SVG filter for ink splots only */}
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
        <defs>
          <filter id="splot" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Ink splots */}
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
            opacity: 0.72,
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

      {/* Panels 1–3: scattered, natural aspect ratio */}
      {PANELS.slice(0, LAST).map((panel, i) => {
        const isVisible = i < revealedCount;
        return (
          <div
            key={panel.src}
            style={{
              position: "absolute",
              left: `calc(50% + ${panel.tx})`,
              top: `calc(50% + ${panel.ty})`,
              width: "fit-content",
              transform: isVisible
                ? `translate(-50%, -50%) rotate(${panel.rotate}deg)`
                : `translate(-50%, -140%) rotate(${panel.rotate * 0.4}deg)`,
              opacity: isVisible ? 1 : 0,
              transition: isVisible
                ? "opacity 0.6s ease-out, transform 0.8s ease-out"
                : "none",
              zIndex: i + 1,
              pointerEvents: "none",
            }}
          >
            <img
              src={panel.src}
              alt={panel.alt}
              draggable={false}
              style={{
                height: panel.maxH,
                width: "auto",
                display: "block",
                userSelect: "none",
              }}
            />
            <PanelNumber n={i + 1} />
          </div>
        );
      })}

      {/* Panel 4: drops in as scattered photo, then expands to fill page */}
      {(() => {
        const panel = PANELS[LAST];
        const isVisible = revealedCount >= PANELS.length;
        return (
          <div
            key={panel.src}
            style={{
              position: "absolute",
              left: lastExpanded ? 0 : `calc(50% + ${panel.tx})`,
              top: lastExpanded ? 0 : `calc(50% + ${panel.ty})`,
              width: lastExpanded ? "100vw" : "fit-content",
              height: lastExpanded ? "100vh" : "auto",
              transform: exiting
                ? "scale(1.07)"
                : lastExpanded
                  ? "none"
                  : isVisible
                    ? `translate(-50%, -50%) rotate(${panel.rotate}deg)`
                    : `translate(-50%, -140%) rotate(${panel.rotate * 0.4}deg)`,
              opacity: exiting ? 0 : isVisible ? 1 : 0,
              transition: isVisible
                ? exiting
                  ? "opacity 0.65s ease, transform 0.65s ease"
                  : lastExpanded
                    ? "left 0.9s ease-out, top 0.9s ease-out, width 0.9s ease-out, height 0.9s ease-out, transform 0.9s ease-out"
                    : "opacity 0.6s ease-out, transform 0.8s ease-out"
                : "none",
              zIndex: lastExpanded ? 15 : LAST + 1,
              pointerEvents: "none",
            }}
          >
            <img
              src={panel.src}
              alt={panel.alt}
              draggable={false}
              style={{
                width: lastExpanded ? "100%" : "auto",
                height: lastExpanded ? "100%" : panel.maxH,
                objectFit: lastExpanded ? "cover" : undefined,
                objectPosition: "center center",
                display: "block",
                userSelect: "none",
              }}
            />
            {!lastExpanded && <PanelNumber n={PANELS.length} />}

            {lastExpanded && !exiting && (
              <p
                style={{
                  position: "absolute",
                  bottom: 28,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#EDE8DC",
                  opacity: 0.7,
                  pointerEvents: "none",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  textShadow: "0 1px 6px rgba(0,0,0,0.35)",
                }}
              >
                click to continue →
              </p>
            )}
          </div>
        );
      })()}

      {/* "click to continue" hint while still revealing */}
      {revealedCount > 0 && !lastExpanded && (
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
            opacity: 0.35,
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
            zIndex: 20,
          }}
        >
          click to continue
        </p>
      )}
    </main>
  );
}

function PanelNumber({ n }: { n: number }) {
  return (
    <span
      style={{
        position: "absolute",
        top: 8,
        left: 10,
        fontFamily: "ui-monospace, monospace",
        fontSize: "0.55rem",
        letterSpacing: "0.18em",
        color: "#1a1218",
        opacity: 0.35,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}
