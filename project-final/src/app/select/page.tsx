"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";

const PHONES = [
  {
    id: "pixel",
    label: "Pixel 9",
    brand: "Google",
    href: "/diagram/pixel",
    objectPosition: "0% center",
    stars: 4,
    price: "$799",
    specs: [
      { label: "Battery",       value: "4,700 mAh · cobalt-cell lithium-ion · DRC-sourced" },
      { label: "Processor",     value: "Tensor G4 · tantalum capacitors, conflict zone" },
      { label: "Display",       value: "6.3\" Actua OLED · rare earth phosphors" },
      { label: "Circuit Board", value: "tin-solder logic board · cassiterite, South Kivu" },
      { label: "Haptics",       value: "haptic motor · tungsten rotor, Myanmar-sourced" },
    ],
  },
  {
    id: "iphone",
    label: "iPhone 16",
    brand: "Apple",
    href: "/diagram/iphone",
    objectPosition: "50% center",
    stars: 5,
    price: "$999",
    badge: "Editor's Choice",
    specs: [
      { label: "Battery",       value: "3,561 mAh · cobalt-cell lithium-ion · DRC-sourced" },
      { label: "Processor",     value: "A18 Bionic · tantalum capacitors, conflict zone" },
      { label: "Display",       value: "6.1\" Super Retina XDR · rare earth phosphors" },
      { label: "Circuit Board", value: "tin-solder logic board · cassiterite, South Kivu" },
      { label: "Haptics",       value: "Taptic Engine · tungsten rotor, Myanmar-sourced" },
    ],
  },
  {
    id: "samsung",
    label: "Galaxy S25",
    brand: "Samsung",
    href: "/diagram/galaxy",
    objectPosition: "100% center",
    stars: 4,
    price: "$799",
    badge: null,
    specs: [
      { label: "Battery",       value: "4,000 mAh · cobalt-cell lithium-ion · DRC-sourced" },
      { label: "Processor",     value: "Snapdragon 8 Elite · tantalum capacitors, conflict zone" },
      { label: "Display",       value: "6.2\" Dynamic AMOLED · rare earth phosphors" },
      { label: "Circuit Board", value: "tin-solder PCB · cassiterite, South Kivu" },
      { label: "Haptics",       value: "linear motor · tungsten rotor, Myanmar-sourced" },
    ],
  },
];

const CW = 240;
const CH = Math.round(CW * (1600 * 3) / 2150);

function Stars({ count }: { count: number }) {
  return (
    <span style={{ color: "var(--cranberry)", fontSize: "0.72rem", letterSpacing: "0.04em" }}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default function SelectPage() {
  const router = useRouter();
  const [active, setActive] = useState(1);
  const [isExiting, setIsExiting] = useState(false);
  const [flickerIdx, setFlickerIdx] = useState<number>(-1);
  const flickerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dragStartX = useRef<number | null>(null);
  const dragDistRef = useRef(0);
  const wasDrag = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);

  const prev = useCallback(() => setActive((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setActive((i) => Math.min(PHONES.length - 1, i + 1)), []);

  // Flicker a random spec row when the active phone changes
  useEffect(() => {
    if (flickerTimer.current) clearTimeout(flickerTimer.current);
    const idx = Math.floor(Math.random() * PHONES[active].specs.length);
    setFlickerIdx(idx);
    flickerTimer.current = setTimeout(() => setFlickerIdx(-1), 220);
  }, [active]);

  useEffect(() => {
    return () => { if (flickerTimer.current) clearTimeout(flickerTimer.current); };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Enter" && !isExiting) handleCenterClick();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isExiting, prev, next]);

  const handleCenterClick = useCallback(() => {
    if (isExiting || wasDrag.current) return;
    setIsExiting(true);
    setTimeout(() => router.push(PHONES[active].href), 480);
  }, [active, isExiting, router]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragDistRef.current = 0;
    wasDrag.current = false;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragDistRef.current = delta;
    setDragOffset(delta);
  };
  const onPointerUp = () => {
    if (dragStartX.current === null) return;
    const dist = dragDistRef.current;
    if (dist < -72) next();
    else if (dist > 72) prev();
    wasDrag.current = Math.abs(dist) > 30;
    setDragOffset(0);
    dragDistRef.current = 0;
    dragStartX.current = null;
    setTimeout(() => { wasDrag.current = false; }, 50);
  };

  const phone = PHONES[active];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        opacity: isExiting ? 0 : 1,
        transition: isExiting ? "opacity 0.45s ease" : undefined,
        overflow: "hidden",
      }}
    >

      {/* ── InsideScoop Header ── */}
      <header style={{ borderBottom: "1px solid rgba(46,38,46,0.11)", padding: "0 2.5rem", flexShrink: 0 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.9rem 0 0.7rem" }}>
            <span style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}>
              InsideScoop
            </span>
            <nav style={{ display: "flex", gap: "1.75rem" }}>
              {["Reviews", "Compare", "Deals", "Newsletter"].map((item) => (
                <span key={item} style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--warm-gray)",
                  cursor: "default",
                }}>
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* Search bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.55rem",
            padding: "0.45rem 0.75rem",
            border: "1px solid rgba(46,38,46,0.13)",
            borderRadius: 3,
            marginBottom: "0.75rem",
            maxWidth: 380,
            background: "rgba(46,38,46,0.02)",
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(46,38,46,0.3)" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.6rem",
              color: "rgba(46,38,46,0.3)",
              letterSpacing: "0.06em",
            }}>
              Search phones, reviews...
            </span>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "1.75rem 2.5rem 0.5rem", width: "100%" }}>
        <h1 style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
          color: "var(--ink)",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          marginBottom: "0.4rem",
        }}>
          Compare top{" "}
          <span style={{ borderBottom: "2px solid var(--cranberry)", paddingBottom: "0.05em" }}>
            smartphones
          </span>
          {" "}for 2026
        </h1>
        <p style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.12em",
          color: "var(--warm-gray)",
        }}>
          Unbiased specs. Real performance. Everything you need to know.
        </p>
      </section>

      {/* ── Carousel + specs ── */}
      <section style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 2.5rem 2rem",
        gap: "1.25rem",
      }}>

        {/* Draggable carousel */}
        <div
          style={{ cursor: dragStartX.current !== null ? "grabbing" : "grab", touchAction: "none", userSelect: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "1.25rem" }}>
            {PHONES.map((p, i) => {
              const isCenter = i === active;
              const offset = i - active;
              const dragShift = isCenter ? dragOffset * 0.18 : dragOffset * 0.08 * (i < active ? 1 : -1);

              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    if (wasDrag.current) return;
                    if (!isCenter) setActive(i);
                    else handleCenterClick();
                  }}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    outline: "none",
                    flexShrink: 0,
                    transform: isExiting && isCenter
                      ? "scale(9)"
                      : `scale(${isCenter ? 1 : 0.72}) translateY(${isCenter ? 0 : 28}px) translateX(${dragShift}px)`,
                    opacity: isCenter ? 1 : 0.45,
                    transition: isExiting
                      ? "transform 0.48s cubic-bezier(0.2,0,0.8,1), opacity 0.32s ease"
                      : "transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.38s ease",
                    transformOrigin: isExiting ? "center center" : "bottom center",
                    zIndex: isCenter ? (isExiting ? 50 : 10) : 5 - Math.abs(offset),
                  }}
                >
                  <img
                    src="/illustrations/models.svg"
                    alt={p.label}
                    draggable={false}
                    style={{
                      width: CW,
                      height: CH,
                      objectFit: "cover",
                      objectPosition: p.objectPosition,
                      display: "block",
                      borderRadius: 18,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  />
                  {/* Label beneath phone */}
                  <div style={{ marginTop: 10, textAlign: "center" }}>
                    <div style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "0.85rem",
                      color: isCenter ? "var(--ink)" : "var(--warm-gray)",
                      transition: "color 0.3s ease",
                    }}>
                      {p.label}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.52rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--warm-gray)",
                      opacity: isCenter ? 0.7 : 0.4,
                      marginTop: 2,
                    }}>
                      {p.brand}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dot nav */}
        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          {PHONES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              style={{
                height: 5,
                width: i === active ? 22 : 5,
                borderRadius: 3,
                background: i === active ? "var(--ink)" : "rgba(46,38,46,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Active phone spec panel — updates on carousel change */}
        <div style={{
          width: "100%",
          maxWidth: 480,
          borderTop: "1px solid rgba(46,38,46,0.10)",
          paddingTop: "1rem",
        }}>
          {/* Stars + price + badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
            <Stars count={phone.stars} />
            <span style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.58rem",
              color: "var(--warm-gray)",
              letterSpacing: "0.06em",
            }}>
              from {phone.price}
            </span>
            {phone.badge && (
              <span style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.48rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--cranberry)",
                border: "1px solid rgba(139,38,53,0.3)",
                borderRadius: 2,
                padding: "1px 5px",
                background: "rgba(139,38,53,0.05)",
              }}>
                {phone.badge}
              </span>
            )}
          </div>

          {/* Spec list */}
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {phone.specs.map((spec, si) => {
              const isFlickering = si === flickerIdx;
              return (
                <li key={spec.label} style={{
                  display: "flex",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.6rem",
                  lineHeight: 1.75,
                  borderTop: "1px solid rgba(46,38,46,0.07)",
                  paddingTop: "0.3rem",
                  color: isFlickering ? "var(--cranberry)" : "var(--warm-gray)",
                  transition: isFlickering ? "none" : "color 0.2s ease",
                }}>
                  <span style={{
                    color: isFlickering ? "var(--cranberry)" : "var(--ink)",
                    minWidth: 80,
                    flexShrink: 0,
                    transition: isFlickering ? "none" : "color 0.2s ease",
                  }}>
                    {spec.label}:
                  </span>
                  {spec.value}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={handleCenterClick}
            style={{
              marginTop: "1rem",
              padding: "0.55rem 1.25rem",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "var(--ink)",
              color: "var(--cream)",
              border: "none",
              borderRadius: 3,
              cursor: "pointer",
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.75"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
          >
            Explore internals →
          </button>
        </div>
      </section>

      {/* Footer rule */}
      <div style={{ borderTop: "1px solid rgba(46,38,46,0.08)", padding: "0.85rem 2.5rem", flexShrink: 0 }}>
        <p style={{
          maxWidth: 1100,
          margin: "0 auto",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(46,38,46,0.22)",
        }}>
          InsideScoop · Independent Tech Reviews · 2026
        </p>
      </div>
    </main>
  );
}
