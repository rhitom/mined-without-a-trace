// ─────────────────────────────────────────────────────────────
// Globe info-card content — edit this file to update card text.
// Each mineral maps to an array of cards shown in the right panel.
// Fields: title, body, citation
// ─────────────────────────────────────────────────────────────

export type Card = {
  title: string;
  body: string;
  citation: string;
};

export const GLOBE_CARDS: Record<string, Card[]> = {

  cobalt: [
    {
      title: "The Mine",
      body: "In 2024, 76% of the world's cobalt was mined in two southeastern DRC provinces — Haut-Katanga and Lualaba. A 2025 labour survey of 1,431 artisanal miners around Kolwezi found that 36.8% met criteria for forced labour and 9.2% for child labour. Average daily income: $3.28. Implied hourly wage: $0.34. \"Cobalt is a curse. It is killing Congolese people.\" — a mother of three who washes ore near Kolwezi.",
      citation: "Blood Batteries, University of Nottingham / Rights Lab (Aug 2025)"
    },
    {
      title: "The Refiner",
      body: "Huayou Cobalt — headquartered in Tongxiang, Zhejiang — is one of the world's largest cobalt refiners and a major trader through its DRC subsidiary Congo Dongfang Mining (CDM). Despite US and Korean corporate denials, supply chain records link Apple, Microsoft, LG Chem, and Samsung to Huayou's sourcing. In December 2024, the DRC government filed criminal complaints against Apple in France and Belgium for incorporating illegally sourced DRC minerals.",
      citation: "Genocide Watch, DRC Conflict Minerals Special Report (June 2025); Amnesty International (2016)"
    },
    {
      title: "The Journey",
      body: "Cobalt ore leaves Kolwezi by truck, crosses into Zambia or travels by river, and reaches Chinese smelters — which refine 60–70% of global cobalt despite mining only 10–30% of it. From Shenzhen refineries it moves to battery cell plants in Shanghai and Zhengzhou, then to assembly in Zhengzhou or Foxconn's Longhua campus — a journey exceeding 12,000 miles. Fifteen of the 19 major copper-cobalt concessions in the DRC are majority-owned by Chinese companies.",
      citation: "IEA Critical Minerals Report (2024); research brief (2025)"
    },
    {
      title: "What Can Change",
      body: "Apple posted $416.2 billion in revenue in 2025. Its iPhone business alone: $209.6 billion. The company claims full cobalt auditing — but audits reach smelters, not artisanal mine sites. 87.8% of surveyed ASM miners said they work because there is no other means of survival. 70% would quit if they could. The ITSCI traceability program — the main conflict minerals audit — was suspended by the Responsible Minerals Initiative in 2024 for serious fraud lapses.",
      citation: "Apple Full Year 2025 Report; Blood Batteries (2025); DRC Conflict Minerals Special Report (2025)"
    },
  ],

  tantalum: [
    {
      title: "Coltan",
      body: "Tantalum comes from columbite-tantalite — 'coltan' — a black, tar-like mineral. The DRC holds 64% of the world's known coltan reserves. When refined, coltan becomes a resistant powder capable of holding a high electric charge. Armed groups have long taxed coltan trade routes: the M23 rebel group's control of the Rubaya mine yields roughly $300,000 per month, with at least 150 tons of tantalum ore smuggled into Rwanda monthly.",
      citation: "UN Group of Experts on the DRC (2022); DRC Conflict Minerals Special Report (June 2025)"
    },
    {
      title: "The Component",
      body: "Tantalum capacitors regulate voltage and store charge in nearly every circuit board. A modern smartphone contains dozens of them. They are almost impossible to manufacture without tantalum — and they sit in mobile phones, computer chips, game consoles, and AI servers. Coltan mined by rebel-controlled mines feeds the same global electronics supply chain as any other ore.",
      citation: "ITRI, Tantalum in Electronics (2021); USGS Minerals in Mobile Devices (2016)"
    },
    {
      title: "The Journey",
      body: "Coltan ore moves overland from North Kivu through Rwanda, Uganda, and Burundi — countries that export far more tantalum than their own geology produces. In 2022, Rwanda exported $654 million in gold; in 2024, 150 metric tons of coltan — vastly exceeding domestic production. Uganda exported $2.25 billion in gold in 2020–21 despite limited local deposits. The ore is then smelted in Japan and refined into tantalum powder before becoming capacitors.",
      citation: "IMF / DRC Conflict Minerals Special Report (June 2025); UN Group of Experts (2022)"
    },
    {
      title: "What Can Change",
      body: "Section 1502 of the US Dodd-Frank Act requires publicly traded companies to audit 3TG conflict mineral sourcing. The law created audit trails but reduced investment in Congolese mining rather than eliminating armed group involvement. The OECD Due Diligence Guidance provides a framework, but the ITSCI program — the primary traceability scheme — was suspended in 2024 after serious fraud was exposed. The Washington Accord (June 27, 2025) between the DRC and Rwanda may open space for stronger governance.",
      citation: "OECD Due Diligence Guidance (2016); DRC Conflict Minerals Special Report (June 2025)"
    },
  ],

  tungsten: [
    {
      title: "The Buzz",
      body: "The subtle vibration that tells you a message arrived — that's tungsten. The Taptic Engine in every iPhone uses a tungsten-weighted rotor. Tungsten's density (nearly twice that of lead) makes it ideal for compact haptic motors. Its source mineral, wolframite (Fe,Mn)WO₄, is one of the four 3TG conflict minerals mined in eastern DRC's South Kivu province.",
      citation: "iFixit iPhone 16 Teardown (2024); USGS Minerals in Mobile Devices (2016)"
    },
    {
      title: "The Mine",
      body: "In 2025, 74% of Congolese people lived on less than $2.15 per day. Armed militia groups in South Kivu tax every sack of wolframite that leaves the mine. The M23's January 2025 offensive killed over 7,000 civilians; armed militias earned at least $140 million in mineral revenues in gold-rich Ituri Province alone in 2024. Miners extract wolframite by hand from hard-rock deposits — the same method used for centuries.",
      citation: "DRC Conflict Minerals Special Report (June 2025); World Bank (2025)"
    },
    {
      title: "The Journey",
      body: "Wolframite ore is exported from South Kivu and processed primarily in China's Yunnan and Jiangxi provinces into ammonium paratungstate (APT) — the industrial intermediate form. China refines the vast majority of the world's tungsten, maintaining dominant strategic control. From APT, tungsten is fabricated into the dense weighted rotors used in haptic actuators, then shipped to electronics assembly plants.",
      citation: "USGS Tungsten Commodity Summary (2024); research brief (2025)"
    },
    {
      title: "What Can Change",
      body: "On June 27, 2025, the DRC and Rwanda signed the Washington Accord — a US-brokered peace treaty. The US committed to security guarantees in exchange for access to mineral territories. Despite the signing, violence continues. Durable change requires armed group demobilization, transparent mineral tagging at mine sites, and investment in Congolese processing capacity — so that more of the value chain stays in the country that holds the ore.",
      citation: "DRC Conflict Minerals Special Report (June 2025)"
    },
  ],

  gold: [
    {
      title: "Gold in Your Phone",
      body: "Gold doesn't tarnish and conducts electricity reliably. It coats the connectors, pins, and bond wires inside your phone — roughly 0.034 grams per device. Globally that adds up to 300 tons of gold mined annually for electronics. Gold is also the most liquid and hardest-to-trace of the four 3TG conflict minerals: unlike tin or tantalum, raw gold needs no processing before it can be traded.",
      citation: "World Gold Council, Electronics Report (2023); research brief (2025)"
    },
    {
      title: "The Mine",
      body: "Gold is mined artisanally across Ituri Province and North and South Kivu. In gold-rich Ituri, armed militias earned at least $140 million in mineral revenues in 2024. A 2016 investigation found the Chinese-owned Kun Hou Mining supplied AK-47 rifles and cash to the Raia Mutomboki militia for access to a gold site. Global Witness investigations show how Congolese officials and army officers facilitate the black-market gold trade.",
      citation: "DRC Conflict Minerals Special Report (June 2025); UN Group of Experts on the DRC (2022)"
    },
    {
      title: "The Journey",
      body: "DRC artisanal gold moves through informal networks across porous borders into Uganda, Rwanda, and Burundi — where origin is obscured. Uganda exported $2.25 billion in gold in 2020–21 despite minimal domestic production; a 2024 UN report confirmed Uganda falsely labels DRC-sourced gold as domestic exports. From there it enters formal refinery channels in Dubai, Switzerland, and Singapore, then is electroplated onto connectors in Japan and South Korea before reaching assembly in China.",
      citation: "DRC Conflict Minerals Special Report (June 2025); UN Group of Experts (2022); USGS (2024)"
    },
    {
      title: "What Can Change",
      body: "The London Bullion Market Association (LBMA) Responsible Gold Guidance requires refineries to conduct enhanced due diligence on gold from conflict-affected regions. But conflict gold enters the formal supply chain through smuggling networks before it ever reaches an audited refinery. The Washington Accord (2025) may improve security in eastern DRC, but connecting peace to traceable supply chains requires sustained investment in local certification systems that reach the mine site — not just the refinery.",
      citation: "LBMA Responsible Gold Guidance (2023); DRC Conflict Minerals Special Report (June 2025)"
    },
  ],

  tin: [
    {
      title: "Solder",
      body: "Tin is the primary ingredient in the solder that bonds every component to a circuit board. Without tin, no smartphone, AI chip, EV battery pack, or aerospace circuit can be assembled. Tin also forms the transparent conductive layers in touchscreens as indium-tin-oxide. Its source mineral, cassiterite (SnO₂), is one of the four 3TG conflict minerals mined in eastern DRC.",
      citation: "ITRI, Tin in Electronics (2022); USGS Minerals in Mobile Devices (2016)"
    },
    {
      title: "The Mine",
      body: "Cassiterite is mined in South Kivu and Maniema provinces. Dozens of militia groups have controlled cassiterite territories, taxing output to fund armed operations. Artisanal miners extract the ore using hand tools. The M23's 2025 offensive seized all commercial points between Rwanda and North/South Kivu — including the tin trade routes. The ITSCI traceability program for tin was suspended in 2024 after serious fraud was uncovered, yet many companies continue to accept its documents as proof of conflict-free sourcing.",
      citation: "DRC Conflict Minerals Special Report (June 2025); ITRI (2022)"
    },
    {
      title: "The Journey",
      body: "DRC cassiterite is exported overland through Rwanda and Uganda or via Congolese river ports, then smelted primarily in Indonesia, Malaysia, and China into refined tin ingots. The tin is alloyed into solder paste and shipped to circuit board manufacturers worldwide. Every logic board — from a $1,200 iPhone to a $5 billion NVIDIA AI server — is held together by this solder.",
      citation: "ITRI, Tin in Electronics (2022); USGS Mineral Commodity Summaries (2024)"
    },
    {
      title: "What Can Change",
      body: "The ITSCI (ITRI Tin Supply Chain Initiative) tags cassiterite sacks at DRC mine sites with numbered tickets to create an audit trail. The program covers significant volumes of DRC tin but doesn't reach all artisanal sites — and was suspended for fraud in 2024. Section 1502 of the Dodd-Frank Act requires US companies to disclose 3TG sourcing, but enforcement has been inconsistent. Critics note these programs often hurt artisanal miners more than the militia bosses who can evade sanctions.",
      citation: "ITSCI Program Report (2023); DRC Conflict Minerals Special Report (June 2025)"
    },
  ],

  "rare-earths": [
    {
      title: "17 Elements",
      body: "Rare earth elements — neodymium, dysprosium, yttrium, and 14 others — appear in everything from the magnets in your speaker to the phosphors that give your screen its color. China mines and refines approximately 90% of the world's REEs, leading refining for 19 of 20 key energy-related minerals with an average 70% global market share. The Bayan Obo district in Inner Mongolia is the world's largest single REE deposit.",
      citation: "IEA Critical Minerals Report (2024); USGS Rare Earth Statistics (2024)"
    },
    {
      title: "The Mine",
      body: "REE separation at Baotou — the industrial city adjacent to Bayan Obo — produces radioactive and acidic waste at industrial scale, making it one of China's most polluted cities. Through the Belt and Road Initiative, Chinese-backed entities have invested nearly $57 billion in mineral projects across 19 countries, securing raw material flows into Chinese refining infrastructure and reinforcing China's position as the central hub of global mineral processing.",
      citation: "IEA Critical Minerals Report (2024); research brief (2025)"
    },
    {
      title: "The Journey",
      body: "REE ores mined at Bayan Obo are separated at Baotou, then incorporated into display phosphors, speaker magnets, and chip substrates. Purified elements travel to display and semiconductor fabrication in South Korea and Taiwan before reaching final assembly in China. Apple's supplier Baotou INST Magnetic New Materials — set to supply rare earth magnets beginning 2027 — reported annual revenue of CNY 1.44 billion. US supplier MP Materials (Fort Worth, TX) is building domestic supply, but scaling takes a decade.",
      citation: "Apple Full Year 2025 Report; research brief (2025); IEA (2024)"
    },
    {
      title: "What Can Change",
      body: "The US, EU, and Australia are investing billions to establish REE mining and processing outside China. Australia supplied nearly half of global lithium in 2023 and ranked among the top five REE producers. Google's suppliers — ReElement Technologies, Aqua Metals, MP Materials — target 36% recycled minerals and a 2030 carbon-free goal. But current REE recovery rates from discarded electronics remain under 1%. China's dominance is the product of 40 years of sustained industrial policy; alternatives take time.",
      citation: "IEA Critical Minerals Report (2024); research brief (2025); GOOG Q4 2025 Earnings Release"
    },
  ],
};
