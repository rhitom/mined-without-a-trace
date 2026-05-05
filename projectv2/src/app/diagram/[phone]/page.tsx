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
  // % of image container — label dot placed at end of annotation line
  labelPos: { x: number; y: number };
  // region to paint red on hover
  hotspot: { x: number; y: number; w: number; h: number };
};

// Label positions derived from the annotation line endpoints in components.svg (2150×1600 viewBox).
// Order top-to-bottom matches the user-specified component order.
const COMPONENTS: Component[] = [
  {
    id: "front-camera",
    label: "Front Camera",
    mineral: "rare-earths",
    description: "7 MP TrueDepth camera. Rare earth elements coat the lens and power the image sensor.",
    labelPos: { x: 47.2, y: 35.4 },
    hotspot: { x: 28, y: 5, w: 20, h: 14 },
  },
  {
    id: "rear-camera",
    label: "Rear Camera",
    mineral: "rare-earths",
    description: "48 MP Fusion camera system. Rare earth optical coatings and magnetic lens actuators.",
    labelPos: { x: 15.0, y: 39.8 },
    hotspot: { x: 5, y: 16, w: 24, h: 16 },
  },
  {
    id: "circuit-board",
    label: "Circuit Board",
    mineral: "tin",
    description: "Main PCB. Tin solder holds every chip, capacitor, and connector in place.",
    labelPos: { x: 30.4, y: 49.4 },
    hotspot: { x: 12, y: 31, w: 28, h: 14 },
  },
  {
    id: "processor",
    label: "Processor",
    mineral: "rare-earths",
    description: "Apple A18 Bionic. Rare earth elements in the package substrate and on-chip magnets.",
    labelPos: { x: 47.6, y: 51.1 },
    hotspot: { x: 19, y: 34, w: 12, h: 8 },
  },
  {
    id: "battery",
    label: "Battery",
    mineral: "cobalt",
    description: "3,561 mAh lithium-ion cell. Contains ~10 g of cobalt, most of it mined in the DRC.",
    labelPos: { x: 35.5, y: 58.9 },
    hotspot: { x: 9, y: 62, w: 32, h: 16 },
  },
  {
    id: "display",
    label: "Display",
    mineral: "rare-earths",
    description: "6.1\" Super Retina XDR OLED. Indium tin oxide touch layer, rare earth phosphors.",
    labelPos: { x: 46.7, y: 69.3 },
    hotspot: { x: 7, y: 48, w: 34, h: 12 },
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

      {/* Diagram panel */}
      <div className="relative flex-1 flex items-center justify-start pl-8">
        <div className="relative" style={{ width: "60vw", maxWidth: 680 }}>
          <img
            src="/illustrations/components.svg"
            alt="iPhone 16 component diagram"
            className="w-full h-auto select-none"
            draggable={false}
          />

          {/* Red component highlight on hover */}
          {hovered && (() => {
            const comp = COMPONENTS.find((c) => c.id === hovered)!;
            return (
              <div
                className="absolute pointer-events-none transition-opacity duration-150"
                style={{
                  left: `${comp.hotspot.x}%`,
                  top: `${comp.hotspot.y}%`,
                  width: `${comp.hotspot.w}%`,
                  height: `${comp.hotspot.h}%`,
                  background: "rgba(139,38,53,0.22)",
                  border: "1.5px solid rgba(139,38,53,0.55)",
                  borderRadius: 3,
                }}
              />
            );
          })()}

          {/* Annotation line labels */}
          {COMPONENTS.map((comp) => {
            const isActive = hovered === comp.id || selected?.id === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setSelected(selected?.id === comp.id ? null : comp)}
                onMouseEnter={() => setHovered(comp.id)}
                onMouseLeave={() => setHovered(null)}
                className="absolute text-left"
                style={{
                  left: `${comp.labelPos.x}%`,
                  top: `${comp.labelPos.y}%`,
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  padding: "2px 6px",
                  background: isActive ? "rgba(139,38,53,0.08)" : "transparent",
                  border: "none",
                  outline: "none",
                }}
              >
                <span
                  className="text-xs tracking-widest uppercase whitespace-nowrap"
                  style={{
                    color: isActive ? "var(--cranberry)" : "var(--ink)",
                    transition: "color 0.15s ease",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {comp.label}
                </span>
              </button>
            );
          })}
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
            <button
              onClick={() => setSelected(null)}
              className="mt-3 w-full py-1 text-xs tracking-widest uppercase"
              style={{ color: "var(--warm-gray)" }}
            >
              ← Back
            </button>
          </div>
        ) : (
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--warm-gray)" }}>
            Tap a component to explore its supply chain.
          </p>
        )}
      </div>
    </main>
  );
}
