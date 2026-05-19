"use client";

import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

type ArcStep = {
  lat: number;
  lng: number;
  label: string;
  locationLabel?: string;
  pinType?: string;
};

type Props = {
  mineLocation: { lat: number; lng: number; name: string; country: string };
  supplyChain: ArcStep[];
  mineralColor: string;
  activeStepIndex: number;
};

// SVG icon paths for each pin type — rendered as HTML elements on the globe
const PIN_ICONS: Record<string, string> = {
  mine: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E262E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="21" x2="15" y2="9"/>
    <path d="M9.5 4.5L19.5 14.5"/>
    <path d="M15 9l4.5-4.5 1 1-1 3-3 1z"/>
    <line x1="14.5" y1="9.5" x2="19.5" y2="4.5"/>
  </svg>`,
  refinery: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E262E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>`,
  factory: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E262E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>`,
  consumer: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E262E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>`,
};

function makePinElement(
  step: ArcStep,
  isActive: boolean,
  onClick: () => void
): HTMLElement {
  const pinType = step.pinType ?? "factory";
  const wrapper = document.createElement("div");
  wrapper.style.cssText = [
    "display:flex",
    "flex-direction:column",
    "align-items:center",
    "gap:3px",
    "cursor:pointer",
    "transform:translateX(-50%) translateY(-50%)",
    "pointer-events:auto",
    "user-select:none",
  ].join(";");

  const iconBox = document.createElement("div");
  iconBox.style.cssText = [
    "width:28px",
    "height:28px",
    "border-radius:50%",
    "display:flex",
    "align-items:center",
    "justify-content:center",
    `background:${isActive ? "#8B2635" : "rgba(221,208,187,0.92)"}`,
    `border:1px solid ${isActive ? "#8B2635" : "rgba(46,38,46,0.35)"}`,
    "transition:all 0.3s ease",
    "box-shadow:0 1px 3px rgba(0,0,0,0.12)",
  ].join(";");

  iconBox.innerHTML = PIN_ICONS[pinType] ?? PIN_ICONS.factory;

  // Tint icon white when active
  if (isActive) {
    const svgEl = iconBox.querySelector("svg");
    if (svgEl) (svgEl as SVGElement).style.filter = "brightness(10)";
  }

  const label = document.createElement("div");
  label.style.cssText = [
    "font-size:7.5px",
    "font-family:ui-monospace,monospace",
    "color:rgba(46,38,46,0.72)",
    "letter-spacing:0.11em",
    "text-transform:uppercase",
    "white-space:nowrap",
    "background:rgba(221,208,187,0.82)",
    "padding:1.5px 5px",
    "border-radius:2px",
    "line-height:1.5",
    "pointer-events:none",
    "border:0.5px solid rgba(46,38,46,0.1)",
  ].join(";");
  label.textContent = step.locationLabel ?? step.label;

  wrapper.appendChild(iconBox);
  wrapper.appendChild(label);
  wrapper.addEventListener("click", (e) => {
    e.stopPropagation();
    onClick();
  });

  return wrapper;
}

export default function GlobeView({
  mineLocation,
  supplyChain,
  mineralColor,
  activeStepIndex,
}: Props) {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [creamTexture, setCreamTexture] = useState<string>("");
  const [countries, setCountries] = useState<{ features: object[] }>({ features: [] });
  const didInitialCamera = useRef(false);
  const prevActiveStep = useRef(activeStepIndex);

  // Cream ocean canvas texture
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 2;
    canvas.height = 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#DDD0BB";
    ctx.fillRect(0, 0, 2, 2);
    setCreamTexture(canvas.toDataURL());
  }, []);

  // Fetch country polygons for parchment map look
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((r) => r.json())
      .then((d) => setCountries(d));
  }, []);

  // Initial camera — fires once after globe is ready, zooms to mine
  useEffect(() => {
    if (didInitialCamera.current) return;
    const globe = globeEl.current;
    if (!globe) return;
    const timer = setTimeout(() => {
      globe.pointOfView(
        { lat: mineLocation.lat, lng: mineLocation.lng, altitude: 2.0 },
        1600
      );
      didInitialCamera.current = true;
    }, 500);
    return () => clearTimeout(timer);
  }, [mineLocation, creamTexture]);

  // Step rotation — only fires when activeStepIndex actually changes after mount
  useEffect(() => {
    if (prevActiveStep.current === activeStepIndex && didInitialCamera.current) return;
    if (!didInitialCamera.current) return;
    prevActiveStep.current = activeStepIndex;
    const globe = globeEl.current;
    if (!globe) return;
    const step = supplyChain[activeStepIndex];
    if (!step) return;
    globe.pointOfView({ lat: step.lat, lng: step.lng, altitude: 1.4 }, 1100);
  }, [activeStepIndex, supplyChain]);

  const arcs = supplyChain.slice(0, -1).map((_, i) => ({
    startLat: supplyChain[i].lat,
    startLng: supplyChain[i].lng,
    endLat: supplyChain[i + 1].lat,
    endLng: supplyChain[i + 1].lng,
    label: `${supplyChain[i].label} → ${supplyChain[i + 1].label}`,
  }));

  // Build HTML pin elements — recreated when activeStepIndex changes
  const htmlPins = supplyChain.map((step, i) => ({
    ...step,
    _index: i,
  }));

  return (
    <Globe
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere={false}
      showGraticules={true}
      globeImageUrl={creamTexture || undefined}
      // Country polygon outlines — parchment land on cream ocean
      polygonsData={countries.features}
      polygonCapColor={() => "#B8A98A"}
      polygonSideColor={() => "rgba(0,0,0,0)"}
      polygonStrokeColor={() => "rgba(46,38,46,0.50)"}
      polygonAltitude={0.003}
      // HTML icon markers
      htmlElementsData={htmlPins}
      htmlLat="lat"
      htmlLng="lng"
      htmlAltitude={0.022}
      htmlElement={(d: object) => {
        const pin = d as (typeof htmlPins)[number];
        const isActive = pin._index === activeStepIndex;
        return makePinElement(
          pin,
          isActive,
          // Click on pin just highlights — parent page handles step selection via pipeline header
          () => {}
        );
      }}
      // Supply chain arcs
      arcsData={arcs}
      arcStartLat="startLat"
      arcStartLng="startLng"
      arcEndLat="endLat"
      arcEndLng="endLng"
      arcLabel="label"
      arcColor={() => mineralColor}
      arcAltitude={0.3}
      arcStroke={0.6}
      arcDashLength={0.45}
      arcDashGap={0.18}
      arcDashAnimateTime={1800}
    />
  );
}
