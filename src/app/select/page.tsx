"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";

const PHONES = [
  { id: "pixel",   label: "pixel 9",   brand: "Google",  href: "/diagram/pixel",  objectPosition: "0% center" },
  { id: "iphone",  label: "iphone 16", brand: "Apple",   href: "/diagram/iphone", objectPosition: "50% center" },
  { id: "samsung", label: "galaxy s25", brand: "Samsung", href: "/diagram/galaxy", objectPosition: "100% center" },
];

// Container dimensions derived so objectFit:cover scales by height → scaled SVG width = 3×CW
// CH/CW = (1600×3)/2150 ≈ 2.233 ensures exactly one phone per card width
const CW = 240;
const CH = Math.round(CW * (1600 * 3) / 2150); // ≈ 536

export default function SelectPage() {
  const router = useRouter();
  const [active, setActive] = useState(1);
  const [isExiting, setIsExiting] = useState(false);
  const [hoveredCenter, setHoveredCenter] = useState(false);

  // Drag state
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const wasDrag = useRef(false);

  const prev = useCallback(() => setActive((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setActive((i) => Math.min(PHONES.length - 1, i + 1)), []);

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Enter" && !isExiting) handleCenterClick();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, prev, next, isExiting]);

  const handleCenterClick = useCallback(() => {
    if (isExiting || wasDrag.current) return;
    setIsExiting(true);
    setTimeout(() => router.push(PHONES[active].href), 480);
  }, [active, isExiting, router]);

  // Drag handlers on the carousel container
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    wasDrag.current = false;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    setDragOffset(delta);
    if (Math.abs(delta) > 8) wasDrag.current = true;
  };

  const onPointerUp = () => {
    if (dragStartX.current === null) return;
    if (dragOffset < -72) next();
    else if (dragOffset > 72) prev();
    setDragOffset(0);
    dragStartX.current = null;
    // Keep wasDrag true for a tick so the onClick that follows doesn't fire
    setTimeout(() => { wasDrag.current = false; }, 50);
  };

  return (
    <main
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Full-screen cream exit overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: "var(--cream)",
          opacity: isExiting ? 1 : 0,
          transition: "opacity 0.48s ease",
        }}
      />

      {/* Back button */}
      <button
        type="button"
        onClick={() => router.push("/")}
        className="absolute left-6 top-6 z-10 text-xs uppercase tracking-[0.32em] transition-opacity hover:opacity-60"
        style={{
          color: "var(--warm-gray)",
          fontFamily: "var(--font-mono), monospace",
          opacity: isExiting ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        ← back
      </button>

      <div
        className="flex flex-1 flex-col items-center justify-center gap-10 px-4 py-16"
        style={{ opacity: isExiting ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        <p
          className="text-xs uppercase tracking-[0.32em]"
          style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
        >
          choose a device
        </p>

        {/* ── Draggable carousel ── */}
        <div
          className="flex items-end justify-center gap-5 select-none"
          style={{
            cursor: dragStartX.current !== null ? "grabbing" : "grab",
            touchAction: "none",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {PHONES.map((phone, i) => {
            const isCenter = i === active;
            const offset = i - active;
            const showGlow = isCenter && hoveredCenter && !isExiting;

            // During drag, shift cards slightly for somatic feedback
            const dragShift = isCenter
              ? dragOffset * 0.18
              : dragOffset * 0.08 * (i < active ? -1 : 1) * -1;

            return (
              <button
                key={phone.id}
                type="button"
                aria-label={isCenter ? `Open ${phone.label}` : `Select ${phone.label}`}
                onClick={() => {
                  if (wasDrag.current) return;
                  if (!isCenter) setActive(i);
                  else handleCenterClick();
                }}
                onMouseEnter={() => isCenter && setHoveredCenter(true)}
                onMouseLeave={() => setHoveredCenter(false)}
                style={{
                  transform: isExiting && isCenter
                    ? "scale(9)"
                    : `scale(${isCenter ? 1 : 0.72}) translateY(${isCenter ? 0 : 32}px) translateX(${dragShift}px)`,
                  opacity: isExiting
                    ? (isCenter ? 1 : 0)
                    : (isCenter ? 1 : 0.45),
                  transition: isExiting
                    ? "transform 0.48s cubic-bezier(0.2,0,0.8,1), opacity 0.32s ease"
                    : "transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.38s ease",
                  transformOrigin: isExiting ? "center center" : "bottom center",
                  zIndex: isCenter ? (isExiting ? 50 : 10) : 5 - Math.abs(offset),
                  outline: "none",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: isCenter ? "pointer" : "pointer",
                  flexShrink: 0,
                }}
              >
                {/* Phone image crop */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/illustrations/models.svg"
                  alt={phone.label}
                  draggable={false}
                  style={{
                    width: CW,
                    height: CH,
                    objectFit: "cover",
                    objectPosition: phone.objectPosition,
                    display: "block",
                    borderRadius: 6,
                    boxShadow: showGlow
                      ? "0 0 0 2px var(--cranberry), 0 0 48px rgba(139,38,53,0.32), 0 0 96px rgba(139,38,53,0.12)"
                      : "none",
                    transition: "box-shadow 0.25s ease",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />

                {/* Label pill */}
                <div className="mt-4 flex justify-center">
                  <span
                    className="inline-flex items-center justify-center rounded-[18px] px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      background: isCenter ? "var(--cranberry)" : "rgba(250,245,238,0.88)",
                      color: isCenter ? "var(--cream)" : "var(--ink)",
                      border: isCenter
                        ? "1px solid rgba(139,38,53,0.7)"
                        : "1px solid rgba(46,38,46,0.18)",
                      opacity: isCenter ? 1 : 0.6,
                    }}
                  >
                    {phone.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dot nav only — no arrows */}
        <div className="flex gap-2">
          {PHONES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 24 : 6,
                background: i === active ? "var(--cranberry)" : "var(--warm-gray)",
                opacity: i === active ? 1 : 0.4,
              }}
              aria-label={`Select phone ${i + 1}`}
            />
          ))}
        </div>

        <p
          className="text-[0.65rem] uppercase tracking-[0.28em]"
          style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
        >
          {active === 1 ? "tap to explore →" : "drag or tap to browse"}
        </p>
      </div>
    </main>
  );
}
