"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import phones from "@/data/phones.json";

// Phone positions mapped to prologue-a.png (browser mockup illustration).
// Hotspots cover the full phone body including the drawn pill label beneath it.
// All values are percentages of the container's rendered width/height.
const PHONES = [
  {
    id: "pixel",
    name: "Pixel 10",
    brand: "Google",
    // left phone — slightly tilted back
    hotspot: { left: "5%", top: "18%", width: "27%", height: "64%" },
  },
  {
    id: "iphone",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    // center phone — tallest, most prominent
    hotspot: { left: "31%", top: "12%", width: "36%", height: "76%" },
  },
  {
    id: "galaxy",
    name: "Samsung S25",
    brand: "Samsung",
    // right phone — angled right
    hotspot: { left: "65%", top: "18%", width: "30%", height: "64%" },
  },
];

export default function SelectPage() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const [comingSoonPhone, setComingSoonPhone] = useState<string | null>(null);

  function handleClick(phoneId: string) {
    const phoneData = phones.find((p) => p.id === phoneId);
    if (phoneData?.status === "active") {
      router.push(`/diagram/${phoneId}`);
    } else {
      // Flash "coming soon" on stub phones
      setComingSoonPhone(phoneId);
      setTimeout(() => setComingSoonPhone(null), 1400);
    }
  }

  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Back to prologue */}
      <button
        onClick={() => router.push("/prologue")}
        className="absolute top-5 left-5 z-20 text-xs tracking-widest uppercase"
        style={{ fontFamily: "var(--font-mono)", color: "var(--warm-gray)" }}
      >
        ← back
      </button>

      {/* Full-bleed illustration — the drawn InsideScoop browser window */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ padding: "0" }}
      >
        <img
          src="/illustrations/prologue-a.png"
          alt="InsideScoop — Compare 2026's top 3 models"
          className="w-full h-full object-contain select-none"
          draggable={false}
          style={{ background: "var(--cream)" }}
        />
      </div>

      {/* Invisible hotspot overlays mapped to each drawn phone */}
      {PHONES.map((phone) => {
        const isHovered = hovered === phone.id;
        const isComingSoon = comingSoonPhone === phone.id;
        const isActive = phones.find((p) => p.id === phone.id)?.status === "active";

        return (
          <button
            key={phone.id}
            aria-label={`Select ${phone.name}`}
            onMouseEnter={() => setHovered(phone.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(phone.id)}
            className="absolute z-10 transition-all duration-200"
            style={{
              left: phone.hotspot.left,
              top: phone.hotspot.top,
              width: phone.hotspot.width,
              height: phone.hotspot.height,
              background: isHovered
                ? isActive
                  ? "rgba(139,38,53,0.07)"
                  : "rgba(46,38,46,0.04)"
                : "transparent",
              border: isHovered
                ? isActive
                  ? "1.5px solid rgba(139,38,53,0.3)"
                  : "1.5px solid rgba(46,38,46,0.12)"
                : "1.5px solid transparent",
              borderRadius: 6,
              cursor: isActive ? "pointer" : "default",
            }}
          >
            {/* "Coming soon" tooltip on stub phones */}
            {isComingSoon && (
              <span
                className="absolute left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full fade-up"
                style={{
                  bottom: "calc(100% + 8px)",
                  fontFamily: "var(--font-mono)",
                  background: "var(--ink)",
                  color: "var(--cream)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                coming soon
              </span>
            )}

            {/* Hover label for the active phone */}
            {isHovered && isActive && (
              <span
                className="absolute left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full fade-up"
                style={{
                  bottom: "calc(100% + 8px)",
                  fontFamily: "var(--font-mono)",
                  background: "var(--cranberry)",
                  color: "var(--cream)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                explore internals →
              </span>
            )}
          </button>
        );
      })}
    </main>
  );
}
