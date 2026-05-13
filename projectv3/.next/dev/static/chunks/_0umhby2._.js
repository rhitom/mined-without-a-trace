(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/phones.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/minerals.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "cobalt",
        "name": "Cobalt",
        "component": "Battery",
        "formula": "Co",
        "color": "#3B5BDB",
        "mineLocation": {
            "name": "Kolwezi Mining District",
            "country": "Democratic Republic of Congo",
            "lat": -10.7148,
            "lng": 25.4656
        },
        "supplyChain": [
            {
                "label": "Artisanal Mine",
                "lat": -10.7148,
                "lng": 25.4656
            },
            {
                "label": "Smelter",
                "lat": 22.5431,
                "lng": 114.0579
            },
            {
                "label": "Battery Factory",
                "lat": 31.2304,
                "lng": 121.4737
            },
            {
                "label": "Assembly",
                "lat": 24.4798,
                "lng": 118.0894
            },
            {
                "label": "Consumer",
                "lat": 41.8781,
                "lng": -87.6298
            }
        ],
        "cards": [
            {
                "title": "The Mine",
                "body": "Over 70% of the world's cobalt comes from the Democratic Republic of Congo — much of it from artisanal mines in the Kolwezi district where tens of thousands of informal miners, including children as young as six, dig by hand in tunnels without protective equipment.",
                "citation": "Amnesty International, 'This Is What We Die For' (2016)"
            },
            {
                "title": "The Metal",
                "body": "Cobalt is essential to lithium-ion batteries, giving them their energy density and stability. A single iPhone battery contains roughly 10 grams of cobalt — small enough to hold in your palm, costly enough in human terms to fill a report.",
                "citation": "USGS Mineral Commodity Summaries (2024)"
            },
            {
                "title": "The Journey",
                "body": "Raw cobalt ore travels from Congolese mines to smelters in China, where it's refined into cobalt sulfate, then shipped to battery cell manufacturers, then to Apple's assembly partners in Zhengzhou — a journey of over 12,000 miles before the phone reaches a shelf.",
                "citation": "Global Witness, 'Beneath the Shine' (2023)"
            },
            {
                "title": "What Can Change",
                "body": "Apple has committed to sourcing 100% of its cobalt from recycled sources by 2025. Progress is mixed. The Responsible Minerals Initiative audits smelters but does not reach artisanal mines. The gap between policy and practice remains wide.",
                "citation": "Apple Conflict Minerals Report (2023)"
            }
        ]
    },
    {
        "id": "tantalum",
        "name": "Tantalum",
        "component": "Capacitors",
        "formula": "Ta",
        "color": "#862E9C",
        "mineLocation": {
            "name": "North Kivu Province",
            "country": "Democratic Republic of Congo",
            "lat": -1.5,
            "lng": 29.0
        },
        "supplyChain": [
            {
                "label": "Coltan Mine",
                "lat": -1.5,
                "lng": 29.0
            },
            {
                "label": "Smelter",
                "lat": 35.6762,
                "lng": 139.6503
            },
            {
                "label": "Component Fab",
                "lat": 35.0116,
                "lng": 135.7681
            },
            {
                "label": "Assembly",
                "lat": 24.4798,
                "lng": 118.0894
            },
            {
                "label": "Consumer",
                "lat": 51.5074,
                "lng": -0.1278
            }
        ],
        "cards": [
            {
                "title": "Coltan",
                "body": "Tantalum comes from columbite-tantalite, or 'coltan' — a dull gray ore mined predominantly in eastern DRC. Armed groups have long taxed coltan trade routes to finance conflict, making it one of the original 'conflict minerals' targeted by international regulation.",
                "citation": "UN Group of Experts on the DRC (2022)"
            },
            {
                "title": "The Component",
                "body": "Tantalum capacitors regulate voltage and store charge in nearly every circuit board. A modern smartphone contains dozens. They are tiny, reliable, and almost impossible to make without tantalum.",
                "citation": "ITRI, Tantalum in Electronics (2021)"
            }
        ]
    },
    {
        "id": "tungsten",
        "name": "Tungsten",
        "component": "Vibration Motor",
        "formula": "W",
        "color": "#495057",
        "mineLocation": {
            "name": "South Kivu Province",
            "country": "Democratic Republic of Congo",
            "lat": -2.8,
            "lng": 28.6
        },
        "supplyChain": [
            {
                "label": "Wolframite Mine",
                "lat": -2.8,
                "lng": 28.6
            },
            {
                "label": "Processing",
                "lat": 25.0,
                "lng": 102.7
            },
            {
                "label": "Motor Factory",
                "lat": 22.3,
                "lng": 114.2
            },
            {
                "label": "Assembly",
                "lat": 24.4798,
                "lng": 118.0894
            },
            {
                "label": "Consumer",
                "lat": 40.7128,
                "lng": -74.006
            }
        ],
        "cards": [
            {
                "title": "The Buzz",
                "body": "The subtle vibration that tells you a message arrived — that's tungsten. The Taptic Engine in every iPhone uses a tungsten-weighted rotor. Tungsten's extreme density (nearly twice that of lead) makes it ideal for compact, powerful vibration motors.",
                "citation": "iFixit iPhone 16 Teardown (2024)"
            }
        ]
    },
    {
        "id": "gold",
        "name": "Gold",
        "component": "Connectors",
        "formula": "Au",
        "color": "#F08C00",
        "mineLocation": {
            "name": "Ituri Province",
            "country": "Democratic Republic of Congo",
            "lat": 1.8,
            "lng": 30.0
        },
        "supplyChain": [
            {
                "label": "Artisanal Mine",
                "lat": 1.8,
                "lng": 30.0
            },
            {
                "label": "Refinery",
                "lat": 1.3521,
                "lng": 103.8198
            },
            {
                "label": "Plating",
                "lat": 35.6762,
                "lng": 139.6503
            },
            {
                "label": "Assembly",
                "lat": 24.4798,
                "lng": 118.0894
            },
            {
                "label": "Consumer",
                "lat": 37.7749,
                "lng": -122.4194
            }
        ],
        "cards": [
            {
                "title": "Gold in Your Phone",
                "body": "Gold doesn't tarnish and conducts electricity reliably. It coats the connectors, pins, and bond wires inside your phone — roughly 0.034 grams per device. Globally, that adds up to 300 tons of gold mined annually for electronics.",
                "citation": "World Gold Council, Electronics Report (2023)"
            }
        ]
    },
    {
        "id": "tin",
        "name": "Tin",
        "component": "Circuit Board",
        "formula": "Sn",
        "color": "#74C0FC",
        "mineLocation": {
            "name": "South Kivu / Maniema",
            "country": "Democratic Republic of Congo",
            "lat": -3.5,
            "lng": 27.5
        },
        "supplyChain": [
            {
                "label": "Cassiterite Mine",
                "lat": -3.5,
                "lng": 27.5
            },
            {
                "label": "Smelter",
                "lat": -7.9558,
                "lng": 112.6131
            },
            {
                "label": "Solder Fab",
                "lat": 22.5431,
                "lng": 114.0579
            },
            {
                "label": "Assembly",
                "lat": 24.4798,
                "lng": 118.0894
            },
            {
                "label": "Consumer",
                "lat": 48.8566,
                "lng": 2.3522
            }
        ],
        "cards": [
            {
                "title": "Solder",
                "body": "Tin is the primary ingredient in the solder that holds every component to a circuit board. Without tin, the logic board — the brain of your phone — cannot be assembled. Most of the tin in electronics originates from Indonesia, but DRC is a growing source.",
                "citation": "ITRI, Tin in Electronics (2022)"
            }
        ]
    },
    {
        "id": "rare-earths",
        "name": "Rare Earth Elements",
        "component": "Processor / Display",
        "formula": "REE",
        "color": "#2F9E44",
        "mineLocation": {
            "name": "Bayan Obo Mining District",
            "country": "China",
            "lat": 41.7667,
            "lng": 109.9667
        },
        "supplyChain": [
            {
                "label": "REE Mine",
                "lat": 41.7667,
                "lng": 109.9667
            },
            {
                "label": "Separation Plant",
                "lat": 40.8077,
                "lng": 111.6543
            },
            {
                "label": "Display / Chip Fab",
                "lat": 37.5665,
                "lng": 126.978
            },
            {
                "label": "Assembly",
                "lat": 24.4798,
                "lng": 118.0894
            },
            {
                "label": "Consumer",
                "lat": 34.0522,
                "lng": -118.2437
            }
        ],
        "cards": [
            {
                "title": "17 Elements",
                "body": "Rare earth elements — a group of 17 metals with names like neodymium, dysprosium, and yttrium — are used in everything from the magnets in your speaker to the phosphors that give your screen its color. China controls over 60% of global REE production.",
                "citation": "USGS Rare Earth Statistics (2024)"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/diagram/[phone]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiagramPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$phones$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/phones.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$minerals$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/minerals.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SVG_WIDTH = 2150;
const SVG_HEIGHT = 1600;
const COMPONENTS = [
    {
        id: "front-camera",
        label: "Front Camera",
        mineral: "rare-earths",
        description: "7 MP TrueDepth camera. Rare earth elements coat the lens and power the image sensor.",
        labelPos: {
            x: 1015,
            y: 566
        },
        highlightPath: "M204 620 L286 580 L332 612 L300 686 L224 706 L187 670 Z"
    },
    {
        id: "rear-camera",
        label: "Rear Cameras",
        mineral: "rare-earths",
        description: "48 MP Fusion camera system. Rare earth optical coatings and magnetic lens actuators.",
        labelPos: {
            x: 322,
            y: 637
        },
        highlightPath: "M148 752 L230 686 L440 780 L314 935 L138 854 Z"
    },
    {
        id: "circuit-board",
        label: "Circuit Board",
        mineral: "tin",
        description: "Main PCB. Tin solder holds every chip, capacitor, and connector in place.",
        labelPos: {
            x: 654,
            y: 790
        },
        highlightPath: "M512 728 L1042 842 L892 1020 L474 930 L398 856 Z"
    },
    {
        id: "processor",
        label: "Processor",
        mineral: "rare-earths",
        description: "Apple A18 Bionic. Rare earth elements in the package substrate and on-chip magnets.",
        labelPos: {
            x: 1023,
            y: 818
        },
        highlightPath: "M592 666 L708 692 L656 776 L540 748 Z"
    },
    {
        id: "battery",
        label: "Battery",
        mineral: "cobalt",
        description: "3,561 mAh lithium-ion cell. Contains ~10 g of cobalt, most of it mined in the DRC.",
        labelPos: {
            x: 763,
            y: 942
        },
        highlightPath: "M344 876 L628 1020 L544 1132 L312 1002 L244 926 Z"
    },
    {
        id: "display",
        label: "Display",
        mineral: "rare-earths",
        description: "6.1\" Super Retina XDR OLED. Indium tin oxide touch layer, rare earth phosphors.",
        labelPos: {
            x: 1004,
            y: 1109
        },
        highlightPath: "M122 1200 L604 1418 L853 1558 L1058 1410 L1144 1454 L973 1588 L558 1600 L182 1466 L93 1332 Z"
    }
];
const MINERAL_COLORS = {
    cobalt: "#3B5BDB",
    tantalum: "#862E9C",
    tungsten: "#495057",
    gold: "#F08C00",
    tin: "#74C0FC",
    "rare-earths": "#2F9E44"
};
function toPercentX(value) {
    return `${value / SVG_WIDTH * 100}%`;
}
function toPercentY(value) {
    return `${value / SVG_HEIGHT * 100}%`;
}
function DiagramPage() {
    _s();
    const { phone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const phoneData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$phones$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find((p)=>p.id === phone);
    if (!phoneData || phoneData.status !== "active") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex h-screen w-full items-center justify-center",
            style: {
                background: "var(--cream)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--warm-gray)"
                },
                children: "Phone not found or coming soon."
            }, void 0, false, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/diagram/[phone]/page.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this);
    }
    const activeId = hovered ?? selected?.id ?? null;
    const activeComponent = activeId ? COMPONENTS.find((component)=>component.id === activeId) ?? null : null;
    const mineral = selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$minerals$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find((m)=>m.id === selected.mineral) : null;
    function navigateToGlobe(mineralId) {
        router.push(`/globe/${mineralId}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative flex h-screen w-full flex-col overflow-hidden lg:flex-row",
        style: {
            background: "var(--cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.push("/select"),
                className: "absolute left-5 top-5 z-20 text-xs uppercase tracking-widest sm:left-6 sm:top-6",
                style: {
                    color: "var(--warm-gray)"
                },
                children: "← Devices"
            }, void 0, false, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-5 z-20 -translate-x-1/2 text-center sm:top-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.3em]",
                        style: {
                            color: "var(--warm-gray)"
                        },
                        children: phoneData.brand
                    }, void 0, false, {
                        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg",
                        style: {
                            color: "var(--ink)"
                        },
                        children: phoneData.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex min-h-0 flex-1 items-center justify-center px-4 pb-6 pt-24 sm:px-8 lg:px-10 lg:pb-10 lg:pt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[1120px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto aspect-[2150/1600] w-full max-w-[980px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/illustrations/components.svg",
                                alt: "iPhone 16 component diagram",
                                className: "h-full w-full select-none object-contain",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: `0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`,
                                className: "pointer-events-none absolute inset-0 h-full w-full",
                                "aria-hidden": "true",
                                children: activeComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: activeComponent.highlightPath,
                                    fill: "rgba(139, 38, 53, 0.18)",
                                    stroke: "rgba(139, 38, 53, 0.88)",
                                    strokeWidth: "9",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            COMPONENTS.map((component)=>{
                                const isActive = activeId === component.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setSelected(selected?.id === component.id ? null : component),
                                    onMouseEnter: ()=>setHovered(component.id),
                                    onMouseLeave: ()=>setHovered(null),
                                    onFocus: ()=>setHovered(component.id),
                                    onBlur: ()=>setHovered(null),
                                    className: "absolute z-10 text-left",
                                    style: {
                                        left: toPercentX(component.labelPos.x),
                                        top: toPercentY(component.labelPos.y),
                                        transform: "translateY(-50%)",
                                        padding: "3px 8px",
                                        background: isActive ? "rgba(139, 38, 53, 0.08)" : "transparent",
                                        border: "none",
                                        outline: "none",
                                        cursor: "pointer"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block whitespace-nowrap text-[10px] uppercase tracking-[0.28em] sm:text-xs",
                                        style: {
                                            color: isActive ? "var(--cranberry)" : "var(--ink)",
                                            transition: "color 0.15s ease",
                                            fontFamily: "Georgia, 'Times New Roman', serif"
                                        },
                                        children: component.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 19
                                    }, this)
                                }, component.id, false, {
                                    fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "flex w-full shrink-0 flex-col justify-center border-t px-6 py-8 lg:w-80 lg:border-l lg:border-t-0 lg:px-8 lg:py-12",
                style: {
                    borderColor: "rgba(176,170,166,0.3)"
                },
                children: selected && mineral ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 text-xs uppercase tracking-[0.25em]",
                            style: {
                                color: MINERAL_COLORS[selected.mineral]
                            },
                            children: [
                                mineral.name,
                                " · ",
                                mineral.formula
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-3 text-xl",
                            style: {
                                color: "var(--ink)"
                            },
                            children: selected.label
                        }, void 0, false, {
                            fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-sm leading-relaxed",
                            style: {
                                color: "var(--warm-gray)"
                            },
                            children: selected.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 pb-4 text-xs",
                            style: {
                                borderBottom: "1px solid rgba(176,170,166,0.3)",
                                color: "var(--warm-gray)"
                            },
                            children: [
                                "Mined in",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "var(--ink)"
                                    },
                                    children: mineral.mineLocation.country
                                }, void 0, false, {
                                    fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>navigateToGlobe(selected.mineral),
                            className: "w-full rounded-[2px] py-2 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-80",
                            style: {
                                background: "var(--cranberry)",
                                color: "var(--cream)"
                            },
                            children: "Trace the supply chain →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelected(null),
                            className: "mt-3 w-full py-1 text-xs uppercase tracking-widest",
                            style: {
                                color: "var(--warm-gray)"
                            },
                            children: "← Back"
                        }, void 0, false, {
                            fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    ]
                }, selected.id, true, {
                    fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs uppercase tracking-[0.25em]",
                    style: {
                        color: "var(--warm-gray)"
                    },
                    children: "Hover a label to locate the component. Tap to explore its supply chain."
                }, void 0, false, {
                    fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                    lineNumber: 273,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/diagram/[phone]/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(DiagramPage, "Gjs4Z6yzukcgwAlKK8AHvMRE2WI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DiagramPage;
var _c;
__turbopack_context__.k.register(_c, "DiagramPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0umhby2._.js.map