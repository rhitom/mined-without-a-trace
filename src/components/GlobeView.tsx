"use client";

import { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

type ArcStep = { lat: number; lng: number; label: string };

type Props = {
  mineLocation: { lat: number; lng: number; name: string; country: string };
  supplyChain: ArcStep[];
  mineralColor: string;
};

export default function GlobeView({ mineLocation, supplyChain, mineralColor }: Props) {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);

  const points = supplyChain.map((s) => ({
    lat: s.lat,
    lng: s.lng,
    label: s.label,
  }));

  const arcs = supplyChain.slice(0, -1).map((_, i) => ({
    startLat: supplyChain[i].lat,
    startLng: supplyChain[i].lng,
    endLat: supplyChain[i + 1].lat,
    endLng: supplyChain[i + 1].lng,
    label: `${supplyChain[i].label} -> ${supplyChain[i + 1].label}`,
  }));

  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;

    const timer = setTimeout(() => {
      globe.pointOfView(
        { lat: mineLocation.lat, lng: mineLocation.lng, altitude: 2.2 },
        1800
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [mineLocation]);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere={false}
      showGraticules={false}
      globeImageUrl="/illustrations/globe-political-atlas.svg"
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointLabel="label"
      pointColor={() => mineralColor}
      pointAltitude={0.006}
      pointRadius={0.22}
      arcsData={arcs}
      arcStartLat="startLat"
      arcStartLng="startLng"
      arcEndLat="endLat"
      arcEndLng="endLng"
      arcLabel="label"
      arcColor={() => mineralColor}
      arcAltitude={0.24}
      arcStroke={0.45}
      arcDashLength={0.4}
      arcDashGap={0.2}
      arcDashAnimateTime={2000}
    />
  );
}
