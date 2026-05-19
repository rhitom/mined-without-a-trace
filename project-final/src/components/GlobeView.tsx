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
    ctx.fillStyle = "#E8DECA";
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
  }, [mineLocation, creamTexture]); // re-check once texture is ready

  // Step rotation — only fires when activeStepIndex actually changes after mount
  useEffect(() => {
    if (prevActiveStep.current === activeStepIndex && didInitialCamera.current) return;
    if (!didInitialCamera.current) return;
    prevActiveStep.current = activeStepIndex;
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
  }));

  const arcs = supplyChain.slice(0, -1).map((_, i) => ({
    startLat: supplyChain[i].lat,
    startLng: supplyChain[i].lng,
    endLat: supplyChain[i + 1].lat,
    endLng: supplyChain[i + 1].lng,
    label: `${supplyChain[i].label} → ${supplyChain[i + 1].label}`,
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
      polygonCapColor={() => "#DDD1B6"}
      polygonSideColor={() => "rgba(0,0,0,0)"}
      polygonStrokeColor={() => "rgba(46,38,46,0.38)"}
      polygonAltitude={0.003}
      // Supply chain points
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointLabel="label"
      pointColor={(p: object) => {
        const pt = p as (typeof points)[number];
        return pt.isActive || pt.isMine ? mineralColor : "rgba(46,38,46,0.55)";
      }}
      pointAltitude={(p: object) => {
        const pt = p as (typeof points)[number];
        return pt.isActive ? 0.025 : pt.isMine ? 0.018 : 0.01;
      }}
      pointRadius={(p: object) => {
        const pt = p as (typeof points)[number];
        return pt.isActive ? 0.6 : pt.isMine ? 0.45 : 0.3;
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
