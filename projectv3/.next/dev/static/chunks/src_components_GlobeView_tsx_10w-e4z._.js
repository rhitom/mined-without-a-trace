(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/GlobeView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GlobeView({ mineLocation, supplyChain, mineralColor }) {
    _s();
    const globeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const points = supplyChain.map((s)=>({
            lat: s.lat,
            lng: s.lng,
            label: s.label
        }));
    const arcs = supplyChain.slice(0, -1).map((_, i)=>({
            startLat: supplyChain[i].lat,
            startLng: supplyChain[i].lng,
            endLat: supplyChain[i + 1].lat,
            endLng: supplyChain[i + 1].lng,
            label: `${supplyChain[i].label} -> ${supplyChain[i + 1].label}`
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobeView.useEffect": ()=>{
            const globe = globeEl.current;
            if (!globe) return;
            const timer = setTimeout({
                "GlobeView.useEffect.timer": ()=>{
                    globe.pointOfView({
                        lat: mineLocation.lat,
                        lng: mineLocation.lng,
                        altitude: 2.2
                    }, 1800);
                }
            }["GlobeView.useEffect.timer"], 500);
            return ({
                "GlobeView.useEffect": ()=>clearTimeout(timer)
            })["GlobeView.useEffect"];
        }
    }["GlobeView.useEffect"], [
        mineLocation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: globeEl,
        backgroundColor: "rgba(0,0,0,0)",
        showAtmosphere: false,
        showGraticules: false,
        globeImageUrl: "/illustrations/globe-political-atlas.svg",
        pointsData: points,
        pointLat: "lat",
        pointLng: "lng",
        pointLabel: "label",
        pointColor: ()=>mineralColor,
        pointAltitude: 0.006,
        pointRadius: 0.22,
        arcsData: arcs,
        arcStartLat: "startLat",
        arcStartLng: "startLng",
        arcEndLat: "endLat",
        arcEndLng: "endLng",
        arcLabel: "label",
        arcColor: ()=>mineralColor,
        arcAltitude: 0.24,
        arcStroke: 0.45,
        arcDashLength: 0.4,
        arcDashGap: 0.2,
        arcDashAnimateTime: 2000
    }, void 0, false, {
        fileName: "[project]/src/components/GlobeView.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(GlobeView, "EFxWCNvYXoXG6t8JTJFN0+m3ZSM=");
_c = GlobeView;
var _c;
__turbopack_context__.k.register(_c, "GlobeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlobeView.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/GlobeView.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_GlobeView_tsx_10w-e4z._.js.map