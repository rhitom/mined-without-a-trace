"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import phones from "@/data/phones.json";
import minerals from "@/data/minerals.json";

type Component = {
  id: string;
  label: string;
  mineral: string;
  description: string;
  hotspot: { x: number; y: number; w: number; h: number };
};

// Hotspot positions calibrated to the components.png exploded-view illustration.
// The illustration is ~1080×720, left-aligned, with components stacked vertically.
// Positions are expressed as percentages of the image container.
const HOTSPOTS: Component[] = [
  {
    id: "display",
    label: "OLED Display",
    mineral: "rare-earths",
    description: "6.1\" Super Retina XDR OLED. Indium tin oxide touch layer, rare earth phosphors.",
    hotspot: { x: 7, y: 48, w: 34, h: 12 },
  },
  {
    id: "circuit-board",
    label: "Logic Board",
    mineral: "tin",
    description: "Main PCB with tin solder holding every chip and connector in place.",
    hotspot: { x: 12, y: 31, w: 28, h: 14 },
  },
  {
    id: "processor",
    label: "A18 Chip",
    mineral: "rare-earths",
    description: "Apple A18 Bionic SoC. Rare earth elements in package substrate and magnets.",
    hotspot: { x: 19, y: 34, w: 12, h: 8 },
  },
  {
    id: "capacitors",
    label: "Capacitors",
    mineral: "tantalum",
    description: "Dozens of tantalum capacitors regulate voltage across the logic board.",
    hotspot: { x: 28, y: 36, w: 10, h: 6 },
  },
  {
    id: "battery",
    label: "Battery",
    mineral: "cobalt",
    description: "3,561 mAh lithium-ion battery. Contains ~10g of cobalt from the DRC.",
    hotspot: { x: 9, y: 62, w: 32, h: 16 },
  },
  {
    id: "vibration-motor",
    label: "Taptic Engine",
    mineral: "tungsten",
    description: "Tungsten-weighted linear actuator — the source of every haptic buzz.",
    hotspot: { x: 7, y: 33, w: 8, h: 8 },
  },
  {
    id: "connectors",
    label: "USB-C / Pins",
    mineral: "gold",
    description: "Gold-plated USB-C port, antenna connectors, and internal bond wires.",
    hotspot: { x: 10, y: 79, w: 20, h: 6 },
  },
];

const MINERAL_COLORS: Record<string, string> = {
  cobalt: "#3B5BDB",
  tantalum: "#862E9C",
  tungsten: "#495057",
  gold: "#F08C00",
  tin: "#74C0FC",
  "rare-earths": "#2F9E44",
};

export default function DiagramPage() {
  const { phone } = useParams<{ phone: string }>();
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Component | null>(null);

  const phoneData = phones.find((p) => p.id === phone);
  if (!phoneData || phoneData.status !== "active") {
    return (
      <main className="w-full h-screen flex items-center justify-center" style={{ background: "var(--cream)" }}>
        <p style={{ color: "var(--warm-gray)" }}>Phone not found or coming soon.</p>
      </main>
    );
  }

  const activeHotspot = hovered || selected?.id || null;
  const mineral = selected ? minerals.find((m) => m.id === selected.mineral) : null;

  function navigateToGlobe(mineralId: string) {
    router.push(`/globe/${mineralId}`);
  }

  return (
    <main
      className="relative w-full h-screen flex overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Back */}
      <button
        onClick={() => router.push("/select")}
        className="absolute top-6 left-6 z-10 text-xs tracking-widest uppercase"
        style={{ color: "var(--warm-gray)" }}
      >
        ← Devices
      </button>

      {/* Title */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-10">
        <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--warm-gray)" }}>
          {phoneData.brand}
        </p>
        <h1 className="text-lg" style={{ color: "var(--ink)" }}>
          {phoneData.name}
        </h1>
      </div>

      {/* Component diagram — left panel */}
      <div className="relative flex-1 flex items-center justify-start pl-8">
        <div className="relative" style={{ width: "60vw", maxWidth: 680 }}>
          <img
            src="/illustrations/components.png"
            alt="iPhone 16 component diagram"
            className="w-full h-auto select-none"
            draggable={false}
          />

          {/* Hotspot overlays */}
          {HOTSPOTS.map((hs) => {
            const isActive = activeHotspot === hs.id;
            const color = MINERAL_COLORS[hs.mineral] || "#8B2635";

            return (
              <button
                key={hs.id}
                onClick={() => setSelected(selected?.id === hs.id ? null : hs)}
                onMouseEnter={() => setHovered(hs.id)}
                onMouseLeave={() => setHovered(null)}
                className="absolute transition-all duration-200"
                style={{
                  left: `${hs.hotspot.x}%`,
                  top: `${hs.hotspot.y}%`,
                  width: `${hs.hotspot.w}%`,
                  height: `${hs.hotspot.h}%`,
                  background: isActive ? `${color}22` : "transparent",
                  border: isActive ? `1.5px solid ${color}99` : "1.5px solid transparent",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
                aria-label={hs.label}
              />
            );
          })}

          {/* Floating label on hover */}
          {hovered && !selected && (() => {
            const hs = HOTSPOTS.find((h) => h.id === hovered)!;
            const color = MINERAL_COLORS[hs.mineral] || "#8B2635";
            return (
              <div
                className="absolute pointer-events-none px-2 py-1 text-xs whitespace-nowrap"
                style={{
                  left: `${hs.hotspot.x + hs.hotspot.w / 2}%`,
                  top: `${hs.hotspot.y - 8}%`,
                  transform: "translateX(-50%)",
                  background: "var(--cream)",
                  border: `1px solid ${color}66`,
                  color: color,
                  borderRadius: 2,
                  letterSpacing: "0.1em",
                }}
              >
                {hs.label}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Right panel — component detail */}
      <div
        className="w-80 flex flex-col justify-center px-8 py-12 shrink-0"
        style={{ borderLeft: "1px solid rgba(176,170,166,0.3)" }}
      >
        {selected && mineral ? (
          <div className="fade-up" key={selected.id}>
            <div
              className="text-xs tracking-[0.25em] uppercase mb-2"
              style={{ color: MINERAL_COLORS[selected.mineral] }}
            >
              {mineral.name} · {mineral.formula}
            </div>
            <h2 className="text-xl mb-3" style={{ color: "var(--ink)" }}>
              {selected.label}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--warm-gray)" }}>
              {selected.description}
            </p>
            <div
              className="text-xs mb-4 pb-4"
              style={{ borderBottom: "1px solid rgba(176,170,166,0.3)", color: "var(--warm-gray)" }}
            >
              Mined in{" "}
              <span style={{ color: "var(--ink)" }}>{mineral.mineLocation.country}</span>
            </div>
            <button
              onClick={() => navigateToGlobe(selected.mineral)}
              className="w-full py-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{
                background: "var(--cranberry)",
                color: "var(--cream)",
                borderRadius: 2,
                letterSpacing: "0.2em",
              }}
            >
              Trace the supply chain →
            </button>
          </div>
        ) : (
          <div style={{ color: "var(--warm-gray)" }}>
            <p className="text-xs tracking-[0.25em] uppercase mb-4">Components</p>
            <ul className="space-y-3">
              {HOTSPOTS.map((hs) => (
                <li key={hs.id}>
                  <button
                    onClick={() => setSelected(hs)}
                    className="flex items-center gap-3 text-sm text-left w-full group"
                    style={{ color: "var(--ink)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: MINERAL_COLORS[hs.mineral] || "#8B2635" }}
                    />
                    <span className="group-hover:opacity-70 transition-opacity">
                      {hs.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
