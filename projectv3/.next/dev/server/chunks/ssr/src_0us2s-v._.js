module.exports = [
"[project]/src/data/phones.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "iphone",
        "name": "iPhone 16",
        "brand": "Apple",
        "status": "active",
        "components": [
            {
                "id": "battery",
                "label": "Battery",
                "mineral": "cobalt",
                "description": "3,561 mAh lithium-ion battery. Contains ~10g of cobalt.",
                "hotspot": {
                    "x": 50,
                    "y": 68,
                    "w": 36,
                    "h": 22
                }
            },
            {
                "id": "processor",
                "label": "A18 Chip",
                "mineral": "rare-earths",
                "description": "Apple A18 Bionic SoC. Rare earth elements in substrate and magnets.",
                "hotspot": {
                    "x": 35,
                    "y": 38,
                    "w": 22,
                    "h": 16
                }
            },
            {
                "id": "display",
                "label": "OLED Display",
                "mineral": "rare-earths",
                "description": "6.1\" Super Retina XDR OLED. Indium tin oxide touch layer.",
                "hotspot": {
                    "x": 20,
                    "y": 15,
                    "w": 60,
                    "h": 8
                }
            },
            {
                "id": "circuit-board",
                "label": "Logic Board",
                "mineral": "tin",
                "description": "Main PCB with tin solder connecting all components.",
                "hotspot": {
                    "x": 30,
                    "y": 42,
                    "w": 40,
                    "h": 14
                }
            },
            {
                "id": "capacitors",
                "label": "Capacitors",
                "mineral": "tantalum",
                "description": "Tantalum capacitors throughout the logic board regulate voltage.",
                "hotspot": {
                    "x": 62,
                    "y": 40,
                    "w": 14,
                    "h": 10
                }
            },
            {
                "id": "vibration-motor",
                "label": "Taptic Engine",
                "mineral": "tungsten",
                "description": "Tungsten-weighted linear actuator. Produces the haptic buzz.",
                "hotspot": {
                    "x": 58,
                    "y": 58,
                    "w": 18,
                    "h": 10
                }
            },
            {
                "id": "connectors",
                "label": "Connectors",
                "mineral": "gold",
                "description": "Gold-plated USB-C port, antenna connectors, and internal pins.",
                "hotspot": {
                    "x": 42,
                    "y": 88,
                    "w": 16,
                    "h": 6
                }
            }
        ]
    },
    {
        "id": "galaxy",
        "name": "Galaxy S25",
        "brand": "Samsung",
        "status": "coming-soon",
        "components": []
    },
    {
        "id": "pixel",
        "name": "Pixel 9",
        "brand": "Google",
        "status": "coming-soon",
        "components": []
    }
];
}),
"[project]/src/app/select/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$phones$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/phones.json.[json].cjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const PHONE_LABELS = [
    {
        id: "galaxy",
        brand: "Samsung",
        name: "Galaxy S25"
    },
    {
        id: "iphone",
        brand: "Apple",
        name: "iPhone 16"
    },
    {
        id: "pixel",
        brand: "Google",
        name: "Pixel 9"
    }
];
function SelectPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // center phone (index 1 = iPhone) is active by default
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const phone = PHONE_LABELS[active];
    const isClickable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$phones$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((p)=>p.id === phone.id)?.status === "active";
    function handleSelect() {
        if (!isClickable) return;
        router.push(`/diagram/${phone.id}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative w-full h-screen flex flex-col items-center justify-center overflow-hidden",
        style: {
            background: "var(--cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.push("/"),
                className: "absolute top-6 left-6 text-xs tracking-widest uppercase",
                style: {
                    color: "var(--warm-gray)"
                },
                children: "← Back"
            }, void 0, false, {
                fileName: "[project]/src/app/select/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs tracking-[0.3em] uppercase mb-12 select-none",
                style: {
                    color: "var(--warm-gray)"
                },
                children: "Choose a device"
            }, void 0, false, {
                fileName: "[project]/src/app/select/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-2xl",
                style: {
                    aspectRatio: "1080/620"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/illustrations/phone-select.png",
                        alt: "Three phones",
                        className: "w-full h-full object-contain select-none",
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/select/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    PHONE_LABELS.map((p, i)=>{
                        const isActive = active === i;
                        // Position each hotspot over the three illustrated phones
                        const positions = [
                            {
                                left: "13%",
                                top: "20%",
                                width: "22%",
                                height: "68%"
                            },
                            {
                                left: "37%",
                                top: "12%",
                                width: "26%",
                                height: "80%"
                            },
                            {
                                left: "65%",
                                top: "22%",
                                width: "22%",
                                height: "64%"
                            }
                        ];
                        const pos = positions[i];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setActive(i);
                                if (isActive && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$phones$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((ph)=>ph.id === p.id)?.status === "active") {
                                    router.push(`/diagram/${p.id}`);
                                }
                            },
                            className: "absolute rounded-lg transition-all duration-300",
                            style: {
                                left: pos.left,
                                top: pos.top,
                                width: pos.width,
                                height: pos.height,
                                background: isActive ? "rgba(139,38,53,0.06)" : "transparent",
                                border: isActive ? "2px solid rgba(139,38,53,0.25)" : "2px solid transparent",
                                cursor: "pointer"
                            },
                            "aria-label": `Select ${p.name}`
                        }, p.id, false, {
                            fileName: "[project]/src/app/select/page.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/select/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center mt-8 gap-3",
                style: {
                    minHeight: 80
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[0.25em] uppercase",
                                style: {
                                    color: "var(--warm-gray)"
                                },
                                children: phone.brand
                            }, void 0, false, {
                                fileName: "[project]/src/app/select/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl mt-1",
                                style: {
                                    color: "var(--ink)"
                                },
                                children: phone.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/select/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, active, true, {
                        fileName: "[project]/src/app/select/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    isClickable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSelect,
                        className: "mt-2 px-6 py-2 text-xs tracking-widest uppercase transition-all duration-200",
                        style: {
                            background: "var(--cranberry)",
                            color: "var(--cream)",
                            borderRadius: 2,
                            letterSpacing: "0.2em"
                        },
                        children: "Explore →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/select/page.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs tracking-widest uppercase",
                        style: {
                            color: "var(--warm-gray)"
                        },
                        children: "Coming soon"
                    }, void 0, false, {
                        fileName: "[project]/src/app/select/page.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/select/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/select/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0us2s-v._.js.map