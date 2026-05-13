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
"[project]/src/data/minerals.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$minerals$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/minerals.json.[json].cjs [app-ssr] (ecmascript)");
"use client";
;
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
    const { phone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const mineral = selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$minerals$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((m)=>m.id === selected.mineral) : null;
    function navigateToGlobe(mineralId) {
        router.push(`/globe/${mineralId}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative flex h-screen w-full flex-col overflow-hidden lg:flex-row",
        style: {
            background: "var(--cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-5 z-20 -translate-x-1/2 text-center sm:top-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex min-h-0 flex-1 items-center justify-center px-4 pb-6 pt-24 sm:px-8 lg:px-10 lg:pb-10 lg:pt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[1120px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto aspect-[2150/1600] w-full max-w-[980px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/illustrations/components.svg",
                                alt: "iPhone 16 component diagram",
                                className: "h-full w-full select-none object-contain",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/app/diagram/[phone]/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: `0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`,
                                className: "pointer-events-none absolute inset-0 h-full w-full",
                                "aria-hidden": "true",
                                children: activeComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "flex w-full shrink-0 flex-col justify-center border-t px-6 py-8 lg:w-80 lg:border-l lg:border-t-0 lg:px-8 lg:py-12",
                style: {
                    borderColor: "rgba(176,170,166,0.3)"
                },
                children: selected && mineral ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 pb-4 text-xs",
                            style: {
                                borderBottom: "1px solid rgba(176,170,166,0.3)",
                                color: "var(--warm-gray)"
                            },
                            children: [
                                "Mined in",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
];

//# sourceMappingURL=src_13ei-tl._.js.map