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
"[project]/src/app/diagram/[phone]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiagramPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$phones$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/phones.json.[json].cjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const SVG_WIDTH = 2150;
const SVG_HEIGHT = 1600;
const LABEL_COLUMN_X = 1000;
const COMPONENTS = [
    {
        id: "front-camera",
        label: "front camera",
        mineral: "rare-earths",
        labelPos: {
            x: LABEL_COLUMN_X,
            y: 552
        }
    },
    {
        id: "rear-camera",
        label: "rear cameras",
        mineral: "rare-earths",
        labelPos: {
            x: LABEL_COLUMN_X,
            y: 626
        }
    },
    {
        id: "circuit-board",
        label: "circuit board",
        mineral: "tin",
        labelPos: {
            x: LABEL_COLUMN_X,
            y: 738
        }
    },
    {
        id: "processor",
        label: "processor",
        mineral: "rare-earths",
        labelPos: {
            x: LABEL_COLUMN_X,
            y: 818
        }
    },
    {
        id: "battery",
        label: "battery",
        mineral: "cobalt",
        labelPos: {
            x: LABEL_COLUMN_X,
            y: 964
        }
    },
    {
        id: "display",
        label: "display",
        mineral: "rare-earths",
        labelPos: {
            x: LABEL_COLUMN_X,
            y: 1106
        }
    }
];
function toPercentX(value) {
    return `${value / SVG_WIDTH * 100}%`;
}
function toPercentY(value) {
    return `${value / SVG_HEIGHT * 100}%`;
}
function DiagramPage() {
    const { phone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const phoneData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$phones$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((p)=>p.id === phone);
    if (!phoneData || phoneData.status !== "active") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex h-screen w-full items-center justify-center",
            style: {
                background: "var(--cream)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--warm-gray)"
                },
                children: "Phone not found or coming soon."
            }, void 0, false, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/diagram/[phone]/page.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative flex h-screen w-full items-center justify-center overflow-hidden",
        style: {
            background: "var(--cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.push("/select"),
                className: "absolute left-5 top-5 z-20 text-xs uppercase tracking-widest sm:left-6 sm:top-6",
                style: {
                    color: "var(--warm-gray)",
                    fontFamily: "var(--font-mono), monospace"
                },
                children: "← Devices"
            }, void 0, false, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-5 z-20 -translate-x-1/2 text-center sm:top-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.3em]",
                        style: {
                            color: "var(--warm-gray)",
                            fontFamily: "var(--font-mono), monospace"
                        },
                        children: phoneData.brand
                    }, void 0, false, {
                        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg",
                        style: {
                            color: "var(--ink)"
                        },
                        children: phoneData.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex h-full w-full items-center justify-center px-3 pt-16 sm:px-6 sm:pt-20 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto flex h-full w-full max-w-[1320px] items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[2150/1600] w-full max-w-[1240px]",
                        style: {
                            transform: "translateX(6%) scale(1.06)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/illustrations/components.svg",
                                alt: "iPhone 16 component diagram",
                                className: "h-full w-full select-none object-contain",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            COMPONENTS.map((component)=>{
                                const isActive = hovered === component.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>router.push(`/globe/${component.mineral}`),
                                    onMouseEnter: ()=>setHovered(component.id),
                                    onMouseLeave: ()=>setHovered(null),
                                    onFocus: ()=>setHovered(component.id),
                                    onBlur: ()=>setHovered(null),
                                    className: "absolute z-10 text-left",
                                    style: {
                                        left: toPercentX(component.labelPos.x),
                                        top: toPercentY(component.labelPos.y),
                                        transform: "translateY(-50%)",
                                        border: "none",
                                        outline: "none",
                                        background: "transparent",
                                        cursor: "pointer"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block whitespace-nowrap rounded-[999px] border px-3 py-1 text-[10px] uppercase tracking-[0.24em] sm:px-3.5 sm:py-1.5 sm:text-xs",
                                        style: {
                                            color: isActive ? "var(--cream)" : "var(--ink)",
                                            background: isActive ? "var(--cranberry)" : "rgba(250,245,238,0.92)",
                                            borderColor: isActive ? "var(--cranberry)" : "rgba(46,38,46,0.22)",
                                            transition: "color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease",
                                            fontFamily: "var(--font-mono), monospace"
                                        },
                                        children: component.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this)
                                }, component.id, false, {
                                    fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_07bjgzt._.js.map