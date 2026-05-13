module.exports = [
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
"[project]/src/app/globe/[mineral]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$minerals$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/minerals.json.[json].cjs [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
const GlobeView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/GlobeView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const MINERAL_COLORS = {
    cobalt: "#8B2635",
    tantalum: "#8B2635",
    tungsten: "#8B2635",
    gold: "#8B2635",
    tin: "#8B2635",
    "rare-earths": "#8B2635"
};
function GlobePage() {
    const { mineral: mineralId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeCard, setActiveCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [panelOpen, setPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const mineral = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$minerals$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((m)=>m.id === mineralId);
    if (!mineral) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex h-screen w-full items-center justify-center",
            style: {
                background: "var(--cream)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--warm-gray)"
                },
                children: "Mineral not found."
            }, void 0, false, {
                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/globe/[mineral]/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    const color = MINERAL_COLORS[mineralId] || "var(--cranberry)";
    const card = mineral.cards[activeCard];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative h-screen w-full overflow-hidden",
        style: {
            background: "var(--cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeView, {
                    mineLocation: mineral.mineLocation,
                    supplyChain: mineral.supplyChain,
                    mineralColor: color
                }, void 0, false, {
                    fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.back(),
                        className: "text-xs uppercase tracking-widest",
                        style: {
                            color: "var(--warm-gray)"
                        },
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full px-3 py-1 text-xs uppercase tracking-[0.3em]",
                            style: {
                                background: "rgba(250,245,238,0.92)",
                                color: "var(--ink)",
                                border: "1px solid rgba(46,38,46,0.14)"
                            },
                            children: [
                                mineral.name,
                                " · ",
                                mineral.formula
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPanelOpen((v)=>!v),
                        className: "text-xs uppercase tracking-widest",
                        style: {
                            color: "var(--warm-gray)"
                        },
                        children: [
                            panelOpen ? "Hide" : "Show",
                            " cards"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-6 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.2em]",
                        style: {
                            color: "var(--warm-gray)"
                        },
                        children: "Mine location"
                    }, void 0, false, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        style: {
                            color: "var(--ink)"
                        },
                        children: mineral.mineLocation.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        style: {
                            color: "var(--warm-gray)"
                        },
                        children: mineral.mineLocation.country
                    }, void 0, false, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3",
                children: mineral.supplyChain.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded px-2 py-0.5 text-xs",
                                style: {
                                    background: "rgba(250,245,238,0.94)",
                                    color: "var(--ink)",
                                    border: "1px solid rgba(46,38,46,0.14)"
                                },
                                children: step.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            i < mineral.supplyChain.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(46,38,46,0.35)",
                                    fontSize: 10
                                },
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-scroll absolute right-0 top-0 z-10 flex h-full flex-col overflow-y-auto",
                style: {
                    width: 340,
                    background: "rgba(250,245,238,0.94)",
                    backdropFilter: "blur(16px)",
                    borderLeft: "1px solid rgba(46,38,46,0.08)",
                    transform: panelOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-7 pb-6 pt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 flex gap-2",
                                children: mineral.cards.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCard(i),
                                        className: "h-2 w-2 rounded-full transition-all duration-200",
                                        style: {
                                            background: activeCard === i ? "var(--cranberry)" : "rgba(46,38,46,0.16)",
                                            transform: activeCard === i ? "scale(1.3)" : "scale(1)"
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-4 text-base leading-snug",
                                        style: {
                                            color: "var(--ink)"
                                        },
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-6 text-sm leading-relaxed",
                                        style: {
                                            color: "var(--warm-gray)"
                                        },
                                        children: card.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs italic",
                                        style: {
                                            color: "var(--warm-gray)",
                                            borderTop: "1px solid rgba(46,38,46,0.08)",
                                            paddingTop: 12
                                        },
                                        children: card.citation
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, activeCard, true, {
                                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCard((v)=>Math.max(0, v - 1)),
                                        disabled: activeCard === 0,
                                        className: "text-xs uppercase tracking-widest transition-opacity disabled:opacity-20",
                                        style: {
                                            color: "var(--cranberry)"
                                        },
                                        children: "← Prev"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCard((v)=>Math.min(mineral.cards.length - 1, v + 1)),
                                        disabled: activeCard === mineral.cards.length - 1,
                                        className: "text-xs uppercase tracking-widest transition-opacity disabled:opacity-20",
                                        style: {
                                            color: "var(--cranberry)"
                                        },
                                        children: "Next →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto px-7 py-6",
                        style: {
                            borderTop: "1px solid rgba(46,38,46,0.08)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 text-xs uppercase tracking-[0.2em]",
                                style: {
                                    color: "var(--warm-gray)"
                                },
                                children: "Component"
                            }, void 0, false, {
                                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                style: {
                                    color: "var(--ink)"
                                },
                                children: mineral.component
                            }, void 0, false, {
                                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/globe/[mineral]/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/globe/[mineral]/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0ix42~z._.js.map