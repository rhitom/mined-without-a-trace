"use client";

import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

type ArcStep = { lat: number; lng: number; label: string };

type Props = {
  mineLocation: { lat: number; lng: number; name: string; country: string };
  supplyChain: ArcStep[];
  mineralColor: string;
  activeStepIndex: number;
};

export default function GlobeView({
  mineLocation,
  supplyChain,
  mineralColor,
  activeStepIndex,
}: Props) {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [creamTexture, setCreamTexture] = useState<string>("");

  // Build a 2×2 cream canvas texture — solid #F5EFE3 (slightly warmer than page cream)
  // so the globe reads as parchment against the page background.
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 2;
    canvas.height = 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#EDE5D4";
    ctx.fillRect(0, 0, 2, 2);
    setCreamTexture(canvas.toDataURL());
  }, []);

  // Initial camera — zoom to show the whole supply chain arc
  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;
    const timer = setTimeout(() => {
      globe.pointOfView(
        { lat: mineLocation.lat, lng: mineLocation.lng, altitude: 2.0 },
        1800
      );
    }, 400);
    return () => clearTimeout(timer);
  }, [mineLocation]);

  // Rotate to whichever step is active in the pipeline
  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;
    const step = supplyChain[activeStepIndex];
    if (!step) return;
    globe.pointOfView({ lat: step.lat, lng: step.lng, altitude: 1.7 }, 1100);
  }, [activeStepIndex, supplyChain]);

  const points = supplyChain.map((s, i) => ({
    lat: s.lat,
    lng: s.lng,
    label: s.label,
    isMine: i === 0,
    isActive: i === activeStepIndex,
    index: i,
  }));

  const arcs = supplyChain.slice(0, -1).map((_, i) => ({
    startLat: supplyChain[i].lat,
    startLng: supplyChain[i].lng,
    endLat: supplyChain[i + 1].lat,
    endLng: supplyChain[i + 1].lng,
    label: `${supplyChain[i].label} → ${supplyChain[i + 1].label}`,
    isActive:
      activeStepIndex > i && activeStepIndex <= i + 1,
  }));

  return (
    <Globe
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere={false}
      showGraticules={true}
      globeImageUrl={creamTexture || undefined}
      // Points
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointLabel="label"
      pointColor={(p: object) => {
        const pt = p as typeof points[number];
        if (pt.isActive) return mineralColor;
        if (pt.isMine) return mineralColor;
        return "rgba(46,38,46,0.45)";
      }}
      pointAltitude={(p: object) => {
        const pt = p as typeof points[number];
        return pt.isActive ? 0.02 : pt.isMine ? 0.015 : 0.008;
      }}
      pointRadius={(p: object) => {
        const pt = p as typeof points[number];
        return pt.isActive ? 0.55 : pt.isMine ? 0.42 : 0.28;
      }}
      // Arcs
      arcsData={arcs}
      arcStartLat="startLat"
      arcStartLng="startLng"
      arcEndLat="endLat"
      arcEndLng="endLng"
      arcLabel="label"
      arcColor={() => mineralColor}
      arcAltitude={0.28}
      arcStroke={0.55}
      arcDashLength={0.45}
      arcDashGap={0.18}
      arcDashAnimateTime={1800}
    />
  );
}
