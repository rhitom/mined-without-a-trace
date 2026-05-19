"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import phones from "@/data/phones.json";

const SVG_W = 2150;
const SVG_H = 1600;
const LX = 1000; // label ellipse center X (SVG units)

// ─── Editable per-component config ───────────────────────────────────────────
// ly  = ellipse center Y (SVG units) — tune to align with diagram
// ax/ay = anchor point where annotation line touches the illustration
// rx/ry = ellipse axes (vary slightly for hand-drawn feel)
// rot = label text rotation in degrees
// ─────────────────────────────────────────────────────────────────────────────
type CompDef = {
  id: string;
  mineral: string;
  label: string;
  ly: number;
  ax: number;
  ay: number;
  rx: number;
  ry: number;
  rot: number;
};

const COMPONENTS: Record<string, CompDef[]> = {
  iphone: [
    { id: "front-camera",  mineral: "rare-earths", label: "cameras",      ly: 552,  ax: 640, ay: 540,  rx: 92, ry: 26, rot: -2   },
    { id: "rear-camera",   mineral: "rare-earths", label: "processor",    ly: 626,  ax: 670, ay: 618,  rx: 88, ry: 28, rot:  1.5 },
    { id: "circuit-board", mineral: "tin",         label: "logic board",  ly: 738,  ax: 620, ay: 728,  rx: 95, ry: 25, rot: -1   },
    { id: "processor",     mineral: "rare-earths", label: "a18 chip",     ly: 818,  ax: 665, ay: 808,  rx: 90, ry: 27, rot:  2   },
    { id: "battery",       mineral: "cobalt",      label: "battery",      ly: 964,  ax: 600, ay: 952,  rx: 86, ry: 29, rot: -1.5 },
    { id: "display",       mineral: "rare-earths", label: "oled display", ly: 1106, ax: 635, ay: 1094, rx: 93, ry: 26, rot:  1   },
  ],
  galaxy: [
    { id: "front-camera",  mineral: "rare-earths", label: "cameras",       ly: 650,  ax: 640, ay: 638,  rx: 92, ry: 26, rot: -2   },
    { id: "battery",       mineral: "cobalt",      label: "battery",       ly: 460,  ax: 600, ay: 448,  rx: 88, ry: 28, rot:  1.5 },
    { id: "circuit-board", mineral: "tin",         label: "circuit board", ly: 550,  ax: 620, ay: 540,  rx: 95, ry: 25, rot: -1   },
    { id: "processor",     mineral: "rare-earths", label: "processor",     ly: 880,  ax: 665, ay: 868,  rx: 90, ry: 27, rot:  2   },
    { id: "display",       mineral: "rare-earths", label: "display",       ly: 1100, ax: 635, ay: 1088, rx: 86, ry: 29, rot: -1.5 },
  ],
  // Pixel anchor coords are placeholders — adjust ax/ay and ly to match pixel-components.svg
  pixel: [
    { id: "display",      mineral: "rare-earths", label: "actua oled",  ly: 480,  ax: 620, ay: 468,  rx: 93, ry: 26, rot: -2   },
    { id: "logic-board",  mineral: "tin",         label: "logic board", ly: 640,  ax: 620, ay: 628,  rx: 88, ry: 28, rot:  1.5 },
    { id: "cameras",      mineral: "rare-earths", label: "cameras",     ly: 780,  ax: 640, ay: 768,  rx: 92, ry: 26, rot: -1   },
    { id: "processor",    mineral: "rare-earths", label: "tensor g4",   ly: 920,  ax: 665, ay: 908,  rx: 90, ry: 27, rot:  2   },
    { id: "battery",      mineral: "cobalt",      label: "battery",     ly: 1060, ax: 600, ay: 1048, rx: 86, ry: 29, rot: -1.5 },
  ],
};

const DIAGRAM_SVG: Record<string, string> = {
  iphone: "/illustrations/components.svg",
  galaxy: "/illustrations/samsung-components.svg",
  pixel:  "/illustrations/pixel.png",
};

const LABEL_FADE_IN = 220;  // ms
const STAGGER       = 150;  // ms between each label

export default function DiagramPage() {
  const { phone } = useParams<{ phone: string }>();
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  // Trigger animations after first paint
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

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
  const comps = COMPONENTS[phone] ?? COMPONENTS.iphone;

  return (
    <main
      className="page-enter relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Nav */}
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
            {/* Diagram illustration */}
            <img
              src={svgSrc}
              alt={`${phoneData.name} component diagram`}
              className="h-full w-full select-none object-contain"
              draggable={false}
            />

            {/* SVG annotation overlay — same coordinate space as illustration */}
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="absolute inset-0 h-full w-full overflow-visible"
              style={{ pointerEvents: "none" }}
            >
              {comps.map((c, i) => {
                const isHovered = hovered === c.id;
                const labelDelay = ready ? i * STAGGER : 99999;
                const rx = c.rx, ry = c.ry;

                return (
                  <g
                    key={c.id}
                    style={{ pointerEvents: "all", cursor: "pointer" }}
                    onClick={() => router.push(`/globe/${c.mineral}`)}
                    onMouseEnter={() => setHovered(c.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Cranberry fill — sweeps left-to-right on hover via clip-path */}
                    <rect
                      x={LX - rx}
                      y={c.ly - ry}
                      width={rx * 2}
                      height={ry * 2}
                      fill="var(--cranberry)"
                      style={{
                        clipPath: isHovered
                          ? "inset(0 0% 0 0)"
                          : "inset(0 100% 0 0)",
                        transition: "clip-path 0.22s ease",
                      }}
                    />

                    {/* Invisible hit-area rect */}
                    <rect
                      x={LX - rx}
                      y={c.ly - ry}
                      width={rx * 2}
                      height={ry * 2}
                      fill="transparent"
                      style={{
                        opacity: 0,
                        animation: ready
                          ? `diagram-fade ${LABEL_FADE_IN}ms ease forwards`
                          : "none",
                        animationDelay: `${labelDelay}ms`,
                      }}
                    />

                    {/* Label text */}
                    <text
                      x={LX}
                      y={c.ly}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontFamily="'Playfair Display', Georgia, serif"
                      fontStyle="italic"
                      fontSize={24}
                      fill={isHovered ? "var(--cream)" : "var(--ink)"}
                      style={{
                        opacity: 0,
                        transition: "fill 0.22s ease",
                        userSelect: "none",
                        animation: ready
                          ? `diagram-fade ${LABEL_FADE_IN}ms ease forwards`
                          : "none",
                        animationDelay: `${labelDelay}ms`,
                        pointerEvents: "none",
                      }}
                      transform={`rotate(${c.rot}, ${LX}, ${c.ly})`}
                    >
                      {c.label}
                    </text>

                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes diagram-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </main>
  );
}
