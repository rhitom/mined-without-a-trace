"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const PHONES = [
  {
    id: "pixel",
    label: "pixel 9",
    brand: "Google",
    href: "/diagram/pixel",
    objectPosition: "17% center",
  },
  {
    id: "iphone",
    label: "iphone 16",
    brand: "Apple",
    href: "/diagram/iphone",
    objectPosition: "50% center",
  },
  {
    id: "samsung",
    label: "galaxy s25",
    brand: "Samsung",
    href: "/diagram/galaxy",
    objectPosition: "83% center",
  },
];

export default function SelectPage() {
  const router = useRouter();
  const [active, setActive] = useState(1);

  const prev = useCallback(() => setActive((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setActive((i) => Math.min(PHONES.length - 1, i + 1)),
    []
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Enter") router.push(PHONES[active].href);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, prev, next, router]);

  return (
    <main
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <button
        type="button"
        onClick={() => router.push("/")}
        className="absolute left-6 top-6 z-10 text-xs uppercase tracking-[0.32em] transition-colors hover:text-[var(--ink)]"
        style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
      >
        ← back
      </button>

      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-4 py-16">
        <p
          className="text-xs uppercase tracking-[0.32em]"
          style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
        >
          choose a device
        </p>

        {/* Carousel */}
        <div className="flex items-end justify-center gap-4 sm:gap-6">
          {PHONES.map((phone, i) => {
            const isCenter = i === active;
            const offset = i - active;

            return (
              <button
                key={phone.id}
                type="button"
                aria-label={isCenter ? `Enter ${phone.label}` : `Select ${phone.label}`}
                onClick={() => {
                  if (!isCenter) setActive(i);
                  else router.push(phone.href);
                }}
                style={{
                  transform: `scale(${isCenter ? 1 : 0.7}) translateY(${isCenter ? 0 : 32}px)`,
                  opacity: isCenter ? 1 : 0.45,
                  transition:
                    "transform 0.42s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.42s ease",
                  transformOrigin: "bottom center",
                  zIndex: isCenter ? 10 : 5 - Math.abs(offset),
                  outline: "none",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {/* Phone crop */}
                <div
                  className="overflow-hidden"
                  style={{
                    width: "clamp(180px, 22vw, 290px)",
                    height: "clamp(320px, 40vw, 520px)",
                    borderRadius: 8,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/illustrations/models.svg"
                    alt={phone.label}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: phone.objectPosition,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Label pill */}
                <div className="mt-4 flex justify-center">
                  <span
                    className="inline-flex items-center justify-center rounded-[18px] px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      background: isCenter
                        ? "var(--cranberry)"
                        : "rgba(250,245,238,0.88)",
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

        {/* Arrow nav */}
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={prev}
            disabled={active === 0}
            className="text-sm uppercase tracking-[0.24em] transition-opacity disabled:opacity-20 hover:opacity-70"
            style={{ color: "var(--ink)", fontFamily: "var(--font-mono), monospace" }}
          >
            ←
          </button>
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
          <button
            type="button"
            onClick={next}
            disabled={active === PHONES.length - 1}
            className="text-sm uppercase tracking-[0.24em] transition-opacity disabled:opacity-20 hover:opacity-70"
            style={{ color: "var(--ink)", fontFamily: "var(--font-mono), monospace" }}
          >
            →
          </button>
        </div>

        <p
          className="text-[0.65rem] uppercase tracking-[0.28em]"
          style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
        >
          {active === 1 ? "tap to explore →" : "← → to browse"}
        </p>
      </div>
    </main>
  );
}
