"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import phones from "@/data/phones.json";

const SVG_WIDTH = 2150;
const SVG_HEIGHT = 1600;
const LABEL_COLUMN_X = 1000;

type DiagramComponent = {
  id: string;
  label: string;
  mineral: string;
  labelPos: { x: number; y: number };
};

const COMPONENTS: DiagramComponent[] = [
  {
    id: "front-camera",
    label: "front camera",
    mineral: "rare-earths",
    labelPos: { x: LABEL_COLUMN_X, y: 552 },
  },
  {
    id: "rear-camera",
    label: "rear cameras",
    mineral: "rare-earths",
    labelPos: { x: LABEL_COLUMN_X, y: 626 },
  },
  {
    id: "circuit-board",
    label: "circuit board",
    mineral: "tin",
    labelPos: { x: LABEL_COLUMN_X, y: 738 },
  },
  {
    id: "processor",
    label: "processor",
    mineral: "rare-earths",
    labelPos: { x: LABEL_COLUMN_X, y: 818 },
  },
  {
    id: "battery",
    label: "battery",
    mineral: "cobalt",
    labelPos: { x: LABEL_COLUMN_X, y: 964 },
  },
  {
    id: "display",
    label: "display",
    mineral: "rare-earths",
    labelPos: { x: LABEL_COLUMN_X, y: 1106 },
  },
];

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
        <p style={{ color: "var(--warm-gray)" }}>Phone not found or coming soon.</p>
      </main>
    );
  }

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
        ← Devices
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
              src="/illustrations/components.svg"
              alt="iPhone 16 component diagram"
              className="h-full w-full select-none object-contain"
              draggable={false}
            />

            {COMPONENTS.map((component) => {
              const isActive = hovered === component.id;

              return (
                <button
                  key={component.id}
                  type="button"
                  onClick={() => router.push(`/globe/${component.mineral}`)}
                  onMouseEnter={() => setHovered(component.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(component.id)}
                  onBlur={() => setHovered(null)}
                  className="absolute z-10 text-left"
                  style={{
                    left: toPercentX(component.labelPos.x),
                    top: toPercentY(component.labelPos.y),
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
                      background: isActive ? "var(--cranberry)" : "rgba(250,245,238,0.92)",
                      borderColor: isActive
                        ? "var(--cranberry)"
                        : "rgba(46,38,46,0.22)",
                      transition:
                        "color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    {component.label}
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
