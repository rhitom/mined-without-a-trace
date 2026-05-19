// ─────────────────────────────────────────────────────────────
// Globe info-card content — one card per stop type.
// stopType keys: "mine" | "refinery" | "assembly" | "consumer"
// image field is optional; only the mine card for cobalt uses it.
// ─────────────────────────────────────────────────────────────

export type StopCard = {
  title: string;
  body: string;
  quote?: string; // pull-quote rendered as blockquote, separate from body
  citation: string;
  image?: string; // path relative to /public
};

export type MineralCards = {
  mine: StopCard;
  refinery: StopCard;
  assembly: StopCard;
  consumer: StopCard;
};

export const GLOBE_CARDS: Record<string, MineralCards> = {

  cobalt: {
    mine: {
      title: "The Mine",
      body: "Paul, aged 14, started mining at the age of 12 and worked in tunnels underground. Children said that they worked for up to 12 hours a day in the mines, carrying heavy loads, to earn between one and two dollars a day. Even those children who went to school worked 10–12 hours during the weekend and school holidays, and in the time before and after school. The children who were not attending school worked in the mines all year around.\n\nIn 2024, 76% of the world's cobalt was mined in two southeastern DRC provinces — Haut-Katanga and Lualaba. A 2025 survey of 1,431 artisanal miners around Kolwezi found that 36.8% met criteria for forced labour and 9.2% for child labour. Average daily income: $3.28.",
      quote: "\"I’d spend 24 hours down in the tunnels. I arrived in the morning and would leave the following morning.\"",
      citation: "Blood Batteries, University of Nottingham / Rights Lab (Aug 2025); Amnesty International, ‘This Is What We Die For’ (2016)",
    },
    refinery: {
      title: "The Refiner",
      body: "Huayou Cobalt — headquartered in Tongxiang, Zhejiang — is one of the world's largest cobalt refiners and a major trader through its DRC subsidiary Congo Dongfang Mining (CDM). Despite corporate denials, supply chain records link Apple, Microsoft, LG Chem, and Samsung to Huayou's sourcing network. China refines 60–70% of global cobalt despite mining only 10–30% of it. Fifteen of the 19 major copper-cobalt concessions in the DRC are majority-owned by Chinese companies. In December 2024, the DRC government filed criminal complaints against Apple in France and Belgium for incorporating illegally sourced DRC minerals.",
      citation: "Genocide Watch, DRC Conflict Minerals Special Report (June 2025); Amnesty International (2016)",
    },
    assembly: {
      title: "Final Assembly",
      body: "From Chinese smelters, refined cobalt moves to battery cell plants in Shanghai and Zhengzhou, then to Foxconn's Longhua campus in Shenzhen — a 12,000-mile journey from the tunnel where Paul worked. The Longhua campus houses up to 300,000 workers. The phone is boxed, shrink-wrapped, and loaded onto a freight aircraft. Apple posted $416.2 billion in revenue in 2025. Its iPhone business alone: $209.6 billion. The company claims full cobalt auditing — but audits reach smelters, not artisanal mine sites.",
      citation: "Apple Full Year 2025 Report; Blood Batteries, Univ. of Nottingham (Aug 2025)",
    },
    consumer: {
      title: "What Can Change",
      body: "87.8% of surveyed ASM miners said they work because there is no other means of survival. 70% would quit if they could. The ITSCI traceability program — the main conflict minerals audit — was suspended by the Responsible Minerals Initiative in 2024 for serious fraud lapses. The Washington Accord (June 27, 2025) between the DRC and Rwanda may open space for stronger governance. Durable change requires armed group demobilization, transparent mineral tagging at mine sites, and investment in Congolese processing capacity so that more of the value chain stays in the country that holds the ore.",
      citation: "Blood Batteries (Aug 2025); DRC Conflict Minerals Special Report (June 2025)",
    },
  },

  tantalum: {
    mine: {
      title: "The Mine",
      body: "The DRC holds 64% of the world's known coltan reserves. The M23 rebel group's control of the Rubaya mine in North Kivu yields roughly $300,000 per month, with at least 150 tons of tantalum ore smuggled into Rwanda monthly. Artisanal miners dig columbite-tantalite — 'coltan' — by hand from river sediments and hillside pits, earning less than $2 per day. Armed groups tax every sack that leaves. The same routes used for militia revenue feed the global electronics supply chain.",
      citation: "UN Group of Experts on the DRC (2022); DRC Conflict Minerals Special Report (June 2025)",
    },
    refinery: {
      title: "The Refiner",
      body: "Coltan ore moves overland from North Kivu through Rwanda, Uganda, and Burundi — countries that export far more tantalum than their own geology produces. In 2022, Rwanda exported $654 million in gold; in 2024, 150 metric tons of coltan — vastly exceeding domestic production. The ore is then smelted in Japan and processed into tantalum powder. This laundering of origin through transit countries is the primary mechanism by which conflict mineral revenue reaches audited supply chains.",
      citation: "IMF; DRC Conflict Minerals Special Report (June 2025); UN Group of Experts (2022)",
    },
    assembly: {
      title: "Final Assembly",
      body: "Tantalum capacitors regulate voltage and store charge in nearly every circuit board — a modern smartphone contains dozens of them. From Japanese smelters, tantalum powder is pressed into capacitors and shipped to electronics assembly plants in China. They are almost impossible to manufacture without tantalum. Coltan mined by rebel-controlled mines feeds the same global electronics supply chain as any other ore, indistinguishable after the first border crossing.",
      citation: "ITRI, Tantalum in Electronics (2021); USGS Minerals in Mobile Devices (2016)",
    },
    consumer: {
      title: "What Can Change",
      body: "Section 1502 of the US Dodd-Frank Act requires publicly traded companies to audit 3TG conflict mineral sourcing. The law created audit trails but reduced investment in Congolese mining rather than eliminating armed group involvement. The OECD Due Diligence Guidance provides a framework, but the ITSCI program — the primary traceability scheme — was suspended in 2024 after serious fraud was exposed. The Washington Accord (June 27, 2025) between the DRC and Rwanda may open space for stronger governance.",
      citation: "OECD Due Diligence Guidance (2016); DRC Conflict Minerals Special Report (June 2025)",
    },
  },

  tungsten: {
    mine: {
      title: "The Mine",
      body: "The subtle vibration that tells you a message arrived — that's tungsten. In 2025, 74% of Congolese people lived on less than $2.15 per day. Armed militia groups in South Kivu tax every sack of wolframite that leaves the mine. The M23's January 2025 offensive killed over 7,000 civilians; armed militias earned at least $140 million in mineral revenues in gold-rich Ituri Province alone in 2024. Miners extract wolframite by hand from hard-rock deposits — the same method used for centuries.",
      citation: "DRC Conflict Minerals Special Report (June 2025); World Bank (2025)",
    },
    refinery: {
      title: "The Refiner",
      body: "Wolframite ore is exported from South Kivu and processed primarily in China's Yunnan and Jiangxi provinces into ammonium paratungstate (APT) — the industrial intermediate form. China refines the vast majority of the world's tungsten, maintaining dominant strategic control. Tungsten's density — nearly twice that of lead — makes it irreplaceable in the compact haptic motors that give your phone its vibration. There is no viable substitute at scale.",
      citation: "USGS Tungsten Commodity Summary (2024); research brief (2025)",
    },
    assembly: {
      title: "Final Assembly",
      body: "From APT, tungsten is fabricated into dense weighted rotors for haptic actuators — the Taptic Engine in every iPhone uses one. These components ship to electronics assembly plants in Zhengzhou, where they are installed into phone chassis on production lines running 24 hours a day. The finished device is packaged and air-freighted to consumer markets. The entire supply chain — from South Kivu tunnel to retail shelf — takes roughly six weeks.",
      citation: "iFixit iPhone 16 Teardown (2024); research brief (2025)",
    },
    consumer: {
      title: "What Can Change",
      body: "On June 27, 2025, the DRC and Rwanda signed the Washington Accord — a US-brokered peace treaty. The US committed to security guarantees in exchange for access to mineral territories. Despite the signing, violence continues. Durable change requires armed group demobilization, transparent mineral tagging at mine sites, and investment in Congolese processing capacity — so that more of the value chain stays in the country that holds the ore.",
      citation: "DRC Conflict Minerals Special Report (June 2025)",
    },
  },

  gold: {
    mine: {
      title: "The Mine",
      body: "Gold is mined artisanally across Ituri Province and North and South Kivu. In gold-rich Ituri, armed militias earned at least $140 million in mineral revenues in 2024. A 2016 investigation found the Chinese-owned Kun Hou Mining supplied AK-47 rifles and cash to the Raia Mutomboki militia for access to a gold site. Gold is the most liquid and hardest-to-trace of the four 3TG conflict minerals: unlike tin or tantalum, raw gold needs no processing before it can be traded across a border.",
      citation: "DRC Conflict Minerals Special Report (June 2025); UN Group of Experts on the DRC (2022)",
    },
    refinery: {
      title: "The Refiner",
      body: "DRC artisanal gold moves through informal networks across porous borders into Uganda, Rwanda, and Burundi — where origin is obscured. Uganda exported $2.25 billion in gold in 2020–21 despite minimal domestic production; a 2024 UN report confirmed Uganda falsely labels DRC-sourced gold as domestic exports. From there it enters formal refinery channels in Dubai, Switzerland, and Singapore. Once it reaches an audited refinery, its conflict origin is undetectable.",
      citation: "DRC Conflict Minerals Special Report (June 2025); UN Group of Experts (2022); USGS (2024)",
    },
    assembly: {
      title: "Final Assembly",
      body: "From refineries, gold is electroplated onto connectors, pins, and bond wires in electronics factories in Japan and South Korea — roughly 0.034 grams per phone. Globally that adds up to 300 tons of gold mined annually for electronics. Those plated components ship to assembly plants in Zhengzhou, where they are soldered into logic boards. Gold doesn't tarnish and conducts electricity reliably — properties that make it irreplaceable at the nanoscale.",
      citation: "World Gold Council, Electronics Report (2023); research brief (2025)",
    },
    consumer: {
      title: "What Can Change",
      body: "The London Bullion Market Association (LBMA) Responsible Gold Guidance requires refineries to conduct enhanced due diligence on gold from conflict-affected regions. But conflict gold enters the formal supply chain through smuggling networks before it ever reaches an audited refinery. The Washington Accord (2025) may improve security in eastern DRC, but connecting peace to traceable supply chains requires sustained investment in local certification systems that reach the mine site — not just the refinery.",
      citation: "LBMA Responsible Gold Guidance (2023); DRC Conflict Minerals Special Report (June 2025)",
    },
  },

  tin: {
    mine: {
      title: "The Mine",
      body: "Cassiterite is mined in South Kivu and Maniema provinces. Dozens of militia groups have controlled cassiterite territories, taxing output to fund armed operations. Artisanal miners extract the ore using hand tools. The M23's 2025 offensive seized all commercial points between Rwanda and North/South Kivu — including the tin trade routes. The ITSCI traceability program for tin was suspended in 2024 after serious fraud was uncovered, yet many companies continue to accept its documents as proof of conflict-free sourcing.",
      citation: "DRC Conflict Minerals Special Report (June 2025); ITRI (2022)",
    },
    refinery: {
      title: "The Refiner",
      body: "DRC cassiterite is exported overland through Rwanda and Uganda or via Congolese river ports, then smelted primarily in Indonesia, Malaysia, and China into refined tin ingots. Indonesia is the world's second-largest tin producer and a major smelter of DRC ore. The tin is alloyed into solder paste — the substance that physically bonds every component to every circuit board on earth. Without tin solder, no smartphone, AI chip, EV battery pack, or aerospace circuit can be assembled.",
      citation: "ITRI, Tin in Electronics (2022); USGS Mineral Commodity Summaries (2024)",
    },
    assembly: {
      title: "Final Assembly",
      body: "Solder paste is applied to circuit boards by automated stencil printers, then components are placed by pick-and-place machines at rates of tens of thousands per hour. A reflow oven melts the solder, bonding every chip, capacitor, and resistor to the board. Every logic board — from a $1,200 iPhone to a $5 billion NVIDIA AI server — is held together by this tin. The board is tested, installed in a chassis, and the phone is sealed, boxed, and shipped.",
      citation: "ITRI, Tin in Electronics (2022); research brief (2025)",
    },
    consumer: {
      title: "What Can Change",
      body: "The ITSCI (ITRI Tin Supply Chain Initiative) tags cassiterite sacks at DRC mine sites with numbered tickets to create an audit trail. The program covers significant volumes of DRC tin but doesn't reach all artisanal sites — and was suspended for fraud in 2024. Section 1502 of the Dodd-Frank Act requires US companies to disclose 3TG sourcing, but enforcement has been inconsistent. Critics note these programs often hurt artisanal miners more than the militia bosses who can evade sanctions.",
      citation: "ITSCI Program Report (2023); DRC Conflict Minerals Special Report (June 2025)",
    },
  },

  indium: {
    mine: {
      title: "The Mine",
      body: "Indium is not mined directly — it is a byproduct of zinc smelting, extracted from the slag and flue dust of zinc processing plants. China produces approximately 57% of the world's refined indium, primarily from zinc smelters in Yunnan and Inner Mongolia. The Fenghuang and Dachang districts in Guangxi hold some of the richest indium-bearing zinc deposits on earth. Unlike cobalt or tantalum, there are no artisanal miners — indium workers are industrial smelter workers, often exposed to cadmium and lead dust in inadequately ventilated facilities.\n\nA single smartphone contains roughly 50 milligrams of indium. Global reserves are estimated at just 16,000 tons — scarcer than silver. The US Geological Survey classifies indium as a critical mineral.",
      citation: "USGS Indium Mineral Commodity Summary (2024); European Commission Critical Raw Materials (2023)",
    },
    refinery: {
      title: "The Refiner",
      body: "Refined indium metal is alloyed with tin to produce indium tin oxide (ITO) — a transparent, electrically conductive film applied in nanometer-thin layers onto glass panels. ITO is the material your finger actually touches when you use a touchscreen. The sputtering process that deposits ITO requires vacuum chambers and high-purity indium ingots. South Korea (LG, Samsung) and Japan (Sharp, JDI) dominate ITO-coated display glass production. China's Zhuzhou Smelter Group and Yunnan Germanium are the largest indium refiners.",
      citation: "USGS Indium Commodity Summary (2024); ITO Market Report, Display Supply Chain Consultants (2023)",
    },
    assembly: {
      title: "Final Assembly",
      body: "ITO-coated glass panels ship from South Korean and Japanese fabs to display assembly plants in Vietnam and China, where they are laminated to OLED emitter layers and backplanes. The completed display module is the most expensive single component in a modern smartphone — roughly 25–30% of total bill of materials. Once soldered into the chassis, the indium is permanently embedded. There is no economically viable process to recover ITO indium from a discarded screen at scale.",
      citation: "Display Supply Chain Consultants, Mobile Display Report (2024); iFixit iPhone 16 Teardown (2024)",
    },
    consumer: {
      title: "What Can Change",
      body: "Indium recovery from end-of-life electronics is technically possible but economically marginal — recovery rates remain below 1% globally. The European Union's Critical Raw Materials Act (2024) lists indium as a strategic material and sets a target of 15% domestic processing capacity by 2030. South Korea's K-Circular program offers subsidies for ITO reclaim from scrap glass. Longer device lifespans are the most effective lever: a phone used for five years instead of two uses less than half the indium per year of service.",
      citation: "European Commission Critical Raw Materials Act (2024); USGS (2024); K-Circular Economy Initiative, Republic of Korea",
    },
  },

  "rare-earths": {
    mine: {
      title: "The Mine",
      body: "The Bayan Obo district in Inner Mongolia is the world's largest single rare earth element deposit. China mines and refines approximately 90% of the world's REEs and leads refining for 19 of 20 key energy-related minerals, with an average 70% global market share. Through the Belt and Road Initiative, Chinese-backed entities have invested nearly $57 billion in mineral projects across 19 countries, securing raw material flows into Chinese refining infrastructure and reinforcing China's position as the central hub of global mineral processing.",
      citation: "IEA Critical Minerals Report (2024); research brief (2025)",
    },
    refinery: {
      title: "The Refiner",
      body: "REE separation at Baotou — the industrial city adjacent to Bayan Obo — produces radioactive and acidic waste at industrial scale, making it one of China's most polluted cities. A tailings lake near Baotou covering several square kilometers holds the byproduct of decades of separation. Apple's supplier Baotou INST Magnetic New Materials — set to supply rare earth magnets beginning 2027 — reported annual revenue of CNY 1.44 billion. US supplier MP Materials (Fort Worth, TX) is building domestic supply, but scaling takes a decade.",
      citation: "Apple Full Year 2025 Report; research brief (2025); IEA (2024)",
    },
    assembly: {
      title: "Final Assembly",
      body: "Purified rare earth elements are incorporated into display phosphors, speaker magnets, and chip substrates, then sent to display and semiconductor fabrication plants in South Korea and Taiwan before reaching Foxconn assembly in Zhengzhou. Neodymium magnets give your speaker its power. Yttrium and europium give your screen its color gamut. Dysprosium stabilizes the magnets at high temperature. Each element performs a function nothing else can replicate at scale.",
      citation: "IEA Critical Minerals Report (2024); USGS Rare Earth Statistics (2024)",
    },
    consumer: {
      title: "What Can Change",
      body: "The US, EU, and Australia are investing billions to establish REE mining and processing outside China. Australia supplied nearly half of global lithium in 2023 and ranked among the top five REE producers. Google's suppliers — ReElement Technologies, Aqua Metals, MP Materials — target 36% recycled minerals and a 2030 carbon-free goal. But current REE recovery rates from discarded electronics remain under 1%. China's dominance is the product of 40 years of sustained industrial policy; alternatives take time.",
      citation: "IEA Critical Minerals Report (2024); research brief (2025); GOOG Q4 2025 Earnings Release",
    },
  },
};
