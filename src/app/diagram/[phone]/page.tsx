"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import phones from "@/data/phones.json";

const SVG_WIDTH = 2150;
const SVG_HEIGHT = 1600;
const LABEL_COLUMN_X = 1000;

// Per-phone diagram SVG — falls back to components.svg until real art lands
const DIAGRAM_SVG: Record<string, string> = {
  iphone: "/illustrations/components.svg",
  galaxy: "/illustrations/samsung-components.svg",
  pixel: "/illustrations/pixel-components.svg",
};

// Label y-positions keyed by component id (same layout for all phones)
const LABEL_Y: Record<string, number> = {
  "front-camera": 552,
  "rear-camera": 626,
  "circuit-board": 738,
  processor: 818,
  battery: 964,
  display: 1106,
  capacitors: 880,
  "vibration-motor": 1040,
  connectors: 1180,
};

// Canonical 6-slot component list per phone, ordered top-to-bottom
const PHONE_COMPONENTS: Record<string, { id: string; mineral: string }[]> = {
  iphone: [
    { id: "front-camera", mineral: "rare-earths" },
    { id: "rear-camera", mineral: "rare-earths" },
    { id: "circuit-board", mineral: "tin" },
    { id: "processor", mineral: "rare-earths" },
    { id: "battery", mineral: "cobalt" },
    { id: "display", mineral: "rare-earths" },
  ],
  galaxy: [
    { id: "front-camera", mineral: "rare-earths" },
    { id: "rear-camera", mineral: "rare-earths" },
    { id: "circuit-board", mineral: "tin" },
    { id: "processor", mineral: "rare-earths" },
    { id: "battery", mineral: "cobalt" },
    { id: "display", mineral: "rare-earths" },
  ],
  pixel: [
    { id: "front-camera", mineral: "rare-earths" },
    { id: "rear-camera", mineral: "rare-earths" },
    { id: "circuit-board", mineral: "tin" },
    { id: "processor", mineral: "rare-earths" },
    { id: "battery", mineral: "cobalt" },
    { id: "display", mineral: "rare-earths" },
  ],
};

// Phone-specific display labels for the annotated slots
const SLOT_LABELS: Record<string, Record<string, string>> = {
  iphone: {
    "front-camera": "front camera",
    "rear-camera": "rear cameras",
    "circuit-board": "logic board",
    processor: "a18 chip",
    battery: "battery",
    display: "oled display",
  },
  galaxy: {
    "front-camera": "front camera",
    "rear-camera": "rear cameras",
    "circuit-board": "circuit board",
    processor: "snapdragon 8 elite",
    battery: "battery",
    display: "dynamic amoled",
  },
  pixel: {
    "front-camera": "front camera",
    "rear-camera": "rear cameras",
    "circuit-board": "circuit board",
    processor: "tensor g4",
    battery: "battery",
    display: "actua oled",
  },
};

function toPercentX(value: number) {
  return `${(value / SVG_WIDTH) * 100}%`;
}

function toPercentY(value: number) {
  return `${(value / SVG_HEIGHT) * 100}%`;
}

export default function DiagramPage() {
  const { phone } = useParams<{ phone: string }>();
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const phoneData = phones.find((p) => p.id === phone);

  if (!phoneData || phoneData.status !== "active") {
    return (
      <main
        className="flex h-screen w-full items-center justify-center"
        style={{ background: "var(--cream)" }}
      >
        <p style={{ color: "var(--warm-gray)" }}>coming soon.</p>
      </main>
    );
  }

  const svgSrc = DIAGRAM_SVG[phone] ?? "/illustrations/components.svg";
  const slots = PHONE_COMPONENTS[phone] ?? PHONE_COMPONENTS.iphone;
  const labels = SLOT_LABELS[phone] ?? SLOT_LABELS.iphone;

  return (
    <main
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <button
        onClick={() => router.push("/select")}
        className="absolute left-5 top-5 z-20 text-xs uppercase tracking-widest sm:left-6 sm:top-6"
        style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
      >
        ← devices
      </button>

      <div className="absolute left-1/2 top-5 z-20 -translate-x-1/2 text-center sm:top-6">
        <p
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--warm-gray)", fontFamily: "var(--font-mono), monospace" }}
        >
          {phoneData.brand}
        </p>
        <h1 className="text-lg" style={{ color: "var(--ink)" }}>
          {phoneData.name}
        </h1>
      </div>

      <section className="flex h-full w-full items-center justify-center px-3 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="relative mx-auto flex h-full w-full max-w-[1320px] items-center justify-center">
          <div
            className="relative aspect-[2150/1600] w-full max-w-[1240px]"
            style={{ transform: "translateX(6%) scale(1.06)" }}
          >
            <img
              src={svgSrc}
              alt={`${phoneData.name} component diagram`}
              className="h-full w-full select-none object-contain"
              draggable={false}
            />

            {slots.map((slot) => {
              const y = LABEL_Y[slot.id];
              if (y === undefined) return null;
              const isActive = hovered === slot.id;
              const label = labels[slot.id] ?? slot.id;

              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => router.push(`/globe/${slot.mineral}`)}
                  onMouseEnter={() => setHovered(slot.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(slot.id)}
                  onBlur={() => setHovered(null)}
                  className="absolute z-10 text-left"
                  style={{
                    left: toPercentX(LABEL_COLUMN_X),
                    top: toPercentY(y),
                    transform: "translateY(-50%)",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="block whitespace-nowrap rounded-[999px] border px-3 py-1 text-[10px] uppercase tracking-[0.24em] sm:px-3.5 sm:py-1.5 sm:text-xs"
                    style={{
                      color: isActive ? "var(--cream)" : "var(--ink)",
                      background: isActive
                        ? "var(--cranberry)"
                        : "rgba(250,245,238,0.92)",
                      borderColor: isActive
                        ? "var(--cranberry)"
                        : "rgba(46,38,46,0.22)",
                      transition:
                        "color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
