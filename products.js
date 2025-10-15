// Products page specific functionality

// Product data with inline image paths
const productsByBusinessType = {
  "pubs-bars": {
    title: "Pubs & Bars",
    description: "Essential cleaning supplies for hospitality venues",
    essential: [
      {
        name: "Purple Beerline Cleaner 5L",
        description: "Contains colour indicator for exhausted product",
        code: "0209PP",
        category: "Beerline Cleaners",
        price: 10.26,
        image: "purple-beerline-cleaner.jpg",
      },
      {
        name: "Blast - 5L",
        description: "Beer Pipeline Cleaner",
        code: "302",
        category: "Dishwashing",
        price: 9.41,
        image: "blast-beer-pipeline-cleaner.jpg",
      },
      {
        name: "Rapier 5L",
        description: "Premium Auto Dishwash Detergent",
        code: "303",
        category: "Dishwashing",
        price: 14.84,
        image: "rapier-dishwash-detergent.jpg",
      },
      {
        name: "Citrol 5L",
        description: "Lemon Washing Up Liquid",
        code: "401",
        category: "Dishwashing Detergents",
        price: 12.82,
        image: "citrol-lemon-washing-liquid.jpg",
      },
      {
        name: "C2 Floor Cleaner, 5L",
        description: "Floor Cleaner",
        code: "122",
        category: "Floor Cleaners",
        price: 18.81,
        image: "c2-floor-cleaner.jpg",
      },
      {
        name: "Auto Glasswash 5L",
        description: "Premium Auto Glasswash Detergent",
        code: "318",
        category: "Dishwashing",
        price: 16.8,
        image: "auto-glasswash-detergent.jpg",
      },
      {
        name: "Clarifi - 5L",
        description: "Drinking Glass Renovator",
        code: "369",
        category: "Dishwashing",
        price: 13.66,
        image: "clarifi-glass-renovator.jpg",
      },
    ],
    recommended: [
      {
        name: "Spray & Wipe - 5L",
        description: "Fragrant Cleaner and Disinfectant",
        code: "211B",
        category: "Disinfectants",
        price: 10.79,
        image: "spray-wipe-disinfectant.jpg",
      },
      {
        name: "Enchant 750ml",
        description: "High Impact Lemon Air Freshener",
        code: "816",
        category: "Air Fresheners/ Deodorisers",
        price: 3.84,
        image: "enchant-air-freshener.jpg",
      },
      {
        name: "Black Cocktail Napkins 23cm 2ply",
        description: "Cocktail Napkins",
        code: "232BK",
        category: "Napkins",
        price: 3.7,
        image: "black-cocktail-napkins.jpg",
      },
      {
        name: "Centrefeed 2 ply White",
        description: "Centrefeed 2 ply white",
        code: "319",
        category: "Centrefeed",
        price: 16.98,
        image: "centrefeed-white.jpg",
      },
      {
        name: "Arosa - 750ml",
        description: "Fragrant Air freshener",
        code: "812",
        category: "Air Fresheners/ Deodorisers",
        price: 3.46,
        image: "arosa-air-freshener.jpg",
      },
      {
        name: "Magnum Refill (Citrus Grove) 270ml",
        description: "Aerosol Fragrance refill",
        code: "704C",
        category: "Air Fresheners/ Deodorisers",
        price: 4.26,
        image: "magnum-refill-citrus.jpg",
      },
      {
        name: "Royal Cologne - 750ml",
        description: "'Designer' Fragrance Air Freshener",
        code: "811",
        category: "Air Fresheners/ Deodorisers",
        price: 3,
        image: "royal-cologne-air-freshener.jpg",
      },
    ],
  },
  "restaurants-cafes": {
    title: "Restaurants & Cafes",
    description: "Food service cleaning and hygiene solutions",
    essential: [
      {
        name: "Fairy Dishwasher Capsules",
        description: "Lemon Dishwasher Capsules - 90",
        code: "FAIRYDISH",
        category: "Dishwashing",
        price: 18.58,
        image: "fairy-dishwasher-capsules.jpg",
      },
      {
        name: "D4 Concentrated washing up liquid 5L",
        description: "Concentrated detergent",
        code: "021432X5",
        category: "Dishwashing Detergents",
        price: 10.84,
        image: "d4-concentrated-washing-up-liquid.jpg",
      },
      {
        name: "Halo Cleaning Powder",
        description: "Coffee&Tea De-Tannin Powder",
        code: "PN902",
        category: "Catering Essentials",
        price: 5.3,
        image: "halo-cleaning-powder.jpg",
      },
      {
        name: "Senses Fragrance-free Antibacterial Hand Wash 5L",
        description: "Antibacterial Hand Wash",
        code: "077028X5",
        category: "Soaps",
        price: 10.53,
        image: "senses-fragrance-free-antibacterial-hand-wash.jpg",
      },
      {
        name: "Blue detectable plasters",
        description: "Blue Plasters (100)",
        code: "BLPLASTERS",
        category: "Catering Essentials",
        price: 2.1,
        image: "blue-detectable-plasters.jpg",
      },
      {
        name: "Halo Milk Line 1L",
        description: "Frother Cleaner",
        code: "PN905",
        category: "Catering Essentials",
        price: 5.95,
        image: "halo-milk-line.jpg",
      },
      {
        name: "Temperature Probe",
        description: "Temperature Probe",
        code: "TP101",
        category: "Catering Essentials",
        price: 3.6,
        image: "temperature-probe.jpg",
      },
    ],
    recommended: [
      {
        name: 'Cling Film (18") Cutterbox x 300m',
        description: 'Cling Film 18" Cutterbox',
        code: "10245H",
        category: "Catering Essentials",
        price: 10.91,
        image: "cling-film-cutterbox.jpg",
      },
      {
        name: 'Catering foil (18") Cutterbox',
        description: "Catering Foil 75m",
        code: "588",
        category: "Catering Essentials",
        price: 11.96,
        image: "catering-foil-cutterbox.jpg",
      },
      {
        name: "Nitrile Blue Pro Ultraflex Gloves, M",
        description: "Nitrile Blue Powder-Free Gloves, 100, Medium",
        code: "1162",
        category: "Gloves",
        price: 4.71,
        image: "nitrile-blue-pro-ultraflex-gloves.jpg",
      },
      {
        name: "All Purpose Cloths - Blue",
        description: "Handy Wipes Standard (50)",
        code: "104390",
        category: "Catering Essentials",
        price: 4.39,
        image: "all-purpose-cloths-blue.jpg",
      },
      {
        name: 'Baking Paper (18") - Cutterbox x75m',
        description: 'Baking Parchment 18" x 75m Cutterbox',
        code: "585",
        category: "Catering Essentials",
        price: 15.34,
        image: "baking-paper-cutterbox.jpg",
      },
      {
        name: '18" Piping Bags (100) on roll',
        description: '18" Piping Bags (100) on roll',
        code: "PIPING",
        category: "Catering Essentials",
        price: 12.42,
        image: "piping-bags-roll.jpg",
      },
      {
        name: "Barista Cloth- Orange",
        description: "Antibacterial Cloth",
        code: "104182",
        category: "Catering Essentials",
        price: 2.1,
        image: "barista-cloth-orange.jpg",
      },
      {
        name: "Black Straws",
        description: "Black Paper Straws",
        code: "BLACSTRAW",
        category: "Catering Essentials",
        price: 3.95,
        image: "black-straws.jpg",
      },
    ],
  },
  offices: {
    title: "Offices",
    description: "Professional cleaning supplies for office environments",
    essential: [
      {
        name: "Spirit - 750ml",
        description: "Fragrant Multi-Surface Cleaner",
        code: "450",
        category: "Interior- All purpose/Multi-purpose",
        price: 2.96,
        image: "spirit-multi-surface-cleaner.jpg",
      },
      {
        name: "Brite - 750ml",
        description: "Window, Mirror and Plastic Cleaner",
        code: "701",
        category: "Polish & Glass",
        price: 3.98,
        image: "brite-window-cleaner.jpg",
      },
      {
        name: "Luxury Cube Facial Tissues",
        description: "Cube Facial Tissues, 2 Ply, 24 packs x 70",
        code: "841103",
        category: "Tissue",
        price: 20.8,
        image: "luxury-cube-facial-tissues.jpg",
      },
      {
        name: "Bulk Pack Toilet Tissue",
        description: "White, 2 ply, 36 x 250 sheet packs",
        code: "811D23",
        category: "Toilet Rolls",
        price: 22.25,
        image: "bulk-pack-toilet-tissue.jpg",
      },
      {
        name: "70% Hand Sanitiser Gel - 500ml",
        description: "Hand Sanitiser Gel",
        code: "77137",
        category: "Hand creams/ Gels",
        price: 3.85,
        image: "hand-sanitiser-gel.jpg",
      },
      {
        name: "CleanIT 5L",
        description: "Interior Cleaner, multi surface, 5L",
        code: "397",
        category: "Interior- All purpose/Multi-purpose",
        price: 6.68,
        image: "cleanit-interior-cleaner.jpg",
      },
      {
        name: "Hand Towels - C Fold, 2 Ply White",
        description: "Hand Towels, 2400C, 100% pure pulp",
        code: "862122",
        category: "Hand Towels",
        price: 26.67,
        image: "hand-towels-c-fold.jpg",
      },
    ],
    recommended: [
      {
        name: "VDU Wipes",
        description: "Screen Wipes",
        code: "RH95",
        category: "Wipes",
        price: 2.4,
        image: "vdu-wipes.jpg",
      },
      {
        name: "Microfibre Cloth Blue (1)",
        description: "Microfibre Cloth Blue",
        code: "BMICROFIBRE",
        category: "Cloths and Towels",
        price: 0.45,
        image: "microfibre-cloth-blue.jpg",
      },
      {
        name: "Arosa - 750ml",
        description: "Fragrant Air freshener",
        code: "812",
        category: "Air Fresheners/ Deodorisers",
        price: 3.46,
        image: "arosa-air-freshener.jpg",
      },
      {
        name: "Black Sacks",
        description: "Heavy Duty Black Sacks (200)",
        code: "LD7080",
        category: "Sacks",
        price: 20.35,
        image: "black-sacks.jpg",
      },
      {
        name: "Swift- 750ml",
        description: "Clean & Shine Furniture Polish",
        code: "603",
        category: "Polish & Glass",
        price: 5.08,
        image: "swift-furniture-polish.jpg",
      },
      {
        name: "Yellow Dusters",
        description: "Dusters",
        code: "700S.14.10",
        category: "Polish & Glass",
        price: 3.35,
        image: "yellow-dusters.jpg",
      },
      {
        name: "Navigator A4 Paper",
        description: "Office Paper",
        code: "NAVIGATOR",
        price: null,
        image: "navigator-a4-paper.jpg",
      },
    ],
  },
  automotive: {
    title: "Automotive",
    description: "Specialized cleaning products for automotive businesses",
    essential: [
      {
        name: "Magnum Force Extra - 5L",
        description: "Heavy Duty Traffic Film Remover",
        code: "313",
        category: "Automotive",
        price: 14.42,
        image: "magnum-force-extra.jpg",
      },
      {
        name: "Truck Wash 80 20L",
        description: "Truck Wash",
        code: "307",
        category: "Automotive",
        price: 29.91,
        image: "truck-wash-80.jpg",
      },
      {
        name: "Autogloss",
        description: "Car Polish",
        code: "602",
        category: "Automotive",
        price: 27.24,
        image: "autogloss.jpg",
      },
      {
        name: "Trim Shine 750ml",
        description: "Trim Shine 750ml",
        code: "604B",
        category: "Automotive",
        price: 4.02,
        image: "trim-shine-750ml.jpg",
      },
      {
        name: "TFR & Polish, 5L",
        description: "Traffic Film Remover & Polish",
        code: "316",
        category: "Automotive",
        price: 12.86,
        image: "tfr-polish.jpg",
      },
      {
        name: "Activ F - 5L 403",
        description: "Neutral Detergent Cleaner",
        code: "ACTIVF",
        category: "Automotive",
        price: 8.78,
        image: "activ-f-neutral-detergent.jpg",
      },
      {
        name: "Truck Wash 80 - 200L",
        description: "Truck Wash 80 - 200L",
        code: "307B",
        category: "Automotive",
        price: 259.44,
        image: "truck-wash-80-200l.jpg",
      },
      {
        name: "Trim Shine 5L",
        description: "Interior Trim Cleaner",
        code: "604",
        category: "Automotive",
        price: 14.9,
        image: "trim-shine-5l.jpg",
      },
    ],
    recommended: [
      {
        name: "Viro-Sol 5L",
        description: "Citrus Based Cleaner/Degreaser",
        code: "326",
        category: "Degreasers",
        price: 12.92,
        image: "viro-sol.jpg",
      },
      {
        name: "DD10 - 5L",
        description: "Detergent Degreaser",
        code: "404",
        category: "Degreasers",
        price: 11.61,
        image: "dd10.jpg",
      },
      {
        name: "Disposable Car Seat Covers",
        description: "Car seat Covers",
        code: "DCARCOVERS",
        category: "Automotive",
        price: null,
        image: "disposable-car-seat-covers.jpg",
      },
      {
        name: "SkyTech Blue Wiping Roll 2 Ply Recycled 26cm x 350m",
        description: "Workshop Rolls 2 Ply Blue",
        code: "343",
        category: "Hand Towels",
        price: 28.93,
        image: "skytech-blue-wiping-roll.jpg",
      },
      {
        name: "Senses Lemon Industrial Hand Cleaner 5L",
        description: "Bead Free Lemon Hand Cleaner 5L",
        code: "72978",
        category: "Soaps",
        price: 15.1,
        image: "senses-lemon-industrial-hand-cleaner.jpg",
      },
      {
        name: "Dermex Mechanic Soap (Buster Extra) 5L",
        description: "Engineers Hand Cleaner",
        code: "415",
        category: "Hand creams/ Gels",
        price: 17.48,
        image: "dermex-mechanic-soap.jpg",
      },
    ],
  },
  healthcare: {
    title: "Healthcare & Care Homes",
    description: "Medical grade cleaning and hygiene products",
    essential: [
      {
        name: "Ultra Xtreme 5L",
        description: "Concentrated Virucidal/Bactericidal Disinfectant",
        code: "261",
        category: "Disinfectants",
        price: 17.73,
        image: "ultra-xtreme.jpg",
      },
      {
        name: "Antiviral Wipes Hycolin",
        description: "Antiviral Wipes",
        code: "ANTIWIPES",
        category: "Covid",
        price: 2.78,
        image: "antiviral-wipes-hycolin.jpg",
      },
      {
        name: "Larox - 5L",
        description: "Hygienic Hand Soap, Antibacterial",
        code: "426",
        category: "Soaps",
        price: 11.26,
        image: "larox-hand-soap.jpg",
      },
      {
        name: 'Hygiene Couch Rolls 3 Ply Blue 10"',
        description: "Couch Rolls - 24 rolls",
        code: "BCR250403",
        category: "Hygiene/Medical Rolls",
        price: 42.9,
        image: "hygiene-couch-rolls.jpg",
      },
      {
        name: "PRO Type IIR Facemasks disposable",
        description: "Facemasks Type IIR, box of 50",
        code: "MASKS",
        category: "Covid",
        price: 2.65,
        image: "pro-type-iir-facemasks.jpg",
      },
      {
        name: "Ultra Ax 5L",
        description: "Virucidal/Bactericidal Disinfectant",
        code: "259B",
        category: "Sanitisers/ Bactericidal",
        price: 11.54,
        image: "ultra-ax.jpg",
      },
      {
        name: "Terra Floor Ultra 5L",
        description: "Virucidal Floor Disinfectant 5L",
        code: "282",
        category: "Floor Cleaners",
        price: 12.88,
        image: "terra-floor-ultra.jpg",
      },
    ],
    recommended: [
      {
        name: "Nitrile Blue Pro Ultraflex Gloves, L",
        description: "Blue Nitrile Gloves, L, box 100",
        code: "1163",
        category: "Gloves",
        price: 4.71,
        image: "nitrile-blue-pro-ultraflex-gloves-l.jpg",
      },
      {
        name: "Aprons blue (500)",
        description: "Disposable Aprons",
        code: "BAPRON",
        category: "Protective Wear",
        price: 40.32,
        image: "aprons-blue.jpg",
      },
      {
        name: "Alcohol-free Clinical Wipes",
        description: "Sanitising wipes for hard surfaces tub x 200",
        code: "686",
        category: "Wipes",
        price: 4.43,
        image: "alcohol-free-clinical-wipes.jpg",
      },
      {
        name: "Laundry Sanitiser - 5L",
        description: "Specialist Sanitiser Additive",
        code: "238",
        category: "Laundry",
        price: 50.04,
        image: "laundry-sanitiser.jpg",
      },
      {
        name: "KN95 MASKS (Individual)",
        description: "Facemasks",
        code: "KN95",
        category: "Covid",
        price: 0.3,
        image: "kn95-masks.jpg",
      },
      {
        name: "V7 Antiviral Hand Soap 500ml",
        description: "Hycolin Antiviral Hand Soap 500ml",
        code: "ANTISOAP",
        category: "Covid",
        price: 1.92,
        image: "v7-antiviral-hand-soap.jpg",
      },
      {
        name: "Blue Mesh Hairnets (100)",
        description: "Hairnets",
        code: "19310",
        category: "Protective Wear",
        price: 7.95,
        image: "blue-mesh-hairnets.jpg",
      },
      {
        name: "Overshoes, Blue (100)",
        description: "Overshoes - Blue (100)",
        code: "7557",
        category: "Protective Wear",
        price: 3.12,
        image: "overshoes-blue.jpg",
      },
    ],
  },
  retail: {
    title: "Retail Stores",
    description: "Customer-facing cleaning and maintenance supplies",
    essential: [
      {
        name: "CleanIT 5L",
        description: "Interior Cleaner, multi surface, 5L",
        code: "397",
        category: "Interior- All purpose/Multi-purpose",
        price: 6.68,
        image: "cleanit-interior-cleaner.jpg",
      },
      {
        name: "Brite 5L",
        description: "Window, Mirror and Plastic Cleaner",
        code: "701",
        category: "Polish & Glass",
        price: 10.19,
        image: "brite-5l.jpg",
      },
      {
        name: "PDQ - 5L",
        description: "Floor Cleaner/ Polish Maintainer",
        code: "110",
        category: "Floor Cleaners",
        price: 11.56,
        image: "pdq-floor-cleaner.jpg",
      },
      {
        name: "Centrefeed 2 ply White",
        description: "Centrefeed 2 ply white",
        code: "319",
        category: "Centrefeed",
        price: 16.98,
        image: "centrefeed-white.jpg",
      },
      {
        name: "Standard Safety Cone",
        description: "Wet Floor Sign",
        code: "104383",
        category: "Buckets and Signs",
        price: 5.96,
        image: "standard-safety-cone.jpg",
      },
      {
        name: "Impact 5L",
        description: "Zesty Lemon Cleaning Gel",
        code: "111",
        category: "Floor Cleaners",
        price: 9.73,
        image: "impact-floor-cleaner.jpg",
      },
      {
        name: "Floorit - 5L",
        description: "Floor Cleaner",
        code: "498",
        category: "Floor Cleaners",
        price: 7.02,
        image: "floorit-floor-cleaner.jpg",
      },
    ],
    recommended: [
      {
        name: "Enchant 750ml",
        description: "High Impact Lemon Air Freshener",
        code: "816",
        category: "Air Fresheners/ Deodorisers",
        price: 3.84,
        image: "enchant-air-freshener.jpg",
      },
      {
        name: "Microfibre Cloth Yellow (1)",
        description: "Microfibre Cloth Yellow",
        code: "YMICROFIBRE",
        category: "Cloths and Towels",
        price: 0.45,
        image: "microfibre-cloth-yellow.jpg",
      },
      {
        name: "Black Sacks",
        description: "Heavy Duty Black Sacks (200)",
        code: "LD7080",
        category: "Sacks",
        price: 20.35,
        image: "black-sacks.jpg",
      },
      {
        name: "Hand Towels - C Fold, 2 Ply White",
        description: "Hand Towels, 2400C, 100% pure pulp",
        code: "862122",
        category: "Hand Towels",
        price: 26.67,
        image: "hand-towels-c-fold.jpg",
      },
      {
        name: "Wet Floor Sign Flat",
        description: "Wet Floor Sign 101423",
        code: "101423",
        category: "Buckets and Signs",
        price: 5.96,
        image: "wet-floor-sign-flat.jpg",
      },
      {
        name: "Banana Cone Wet floor sign",
        description: "Wet floor sign",
        code: "104557",
        category: "Buckets and Signs",
        price: 28.4,
        image: "banana-cone-wet-floor-sign.jpg",
      },
    ],
  },
}

const allProductsCatalog = [
  // Air Conditioning
  {
    name: "UB70 - 2L",
    description: "Lemon Air Conditioner Concentrate",
    code: "997",
    category: "Air Conditioning",
    price: 11.91,
    image: "ub70-lemon-air-conditioner.jpg",
  },

  // Air Fresheners/ Deodorisers
  {
    name: "Arosa - 750ml",
    description: "Fragrant Air freshener",
    code: "812",
    category: "Air Fresheners/ Deodorisers",
    price: 3.46,
    image: "arosa-air-freshener.jpg",
  },
  {
    name: "Automatic Air Freshener Unit",
    description: "Automatic Air Freshener Dispenser",
    code: "948",
    category: "Air Fresheners/ Deodorisers",
    price: 25,
    image: "automatic-air-freshener-unit.jpg",
  },
  {
    name: "Bioshield- Lemon 1L",
    description: "Fragrant Cleaner and Deodoriser",
    code: "205",
    category: "Air Fresheners/ Deodorisers",
    price: 3.28,
    image: "bioshield-lemon.jpg",
  },
  {
    name: "Breeze - Cherry 300ml",
    description: "Water Soluble Essence",
    code: "807B",
    category: "Air Fresheners/ Deodorisers",
    price: 2.78,
    image: "breeze-cherry.jpg",
  },
  {
    name: "Breeze - Floral 300ml",
    description: "Water Soluble Essence",
    code: "802",
    category: "Air Fresheners/ Deodorisers",
    price: 2.78,
    image: "breeze-floral.jpg",
  },
  {
    name: "Breeze - Peach 300ml",
    description: "Water Soluble Essence",
    code: "804",
    category: "Air Fresheners/ Deodorisers",
    price: 2.78,
    image: "breeze-peach.jpg",
  },
  {
    name: "Breeze Lemon 300ml",
    description: "Water Soluble Essence",
    code: "801",
    category: "Air Fresheners/ Deodorisers",
    price: 2.78,
    image: "breeze-lemon.jpg",
  },
  {
    name: "Cleen Air Freshener - Citrus (400ml)",
    description: "Air Freshener Aerosol",
    code: "52085",
    category: "Air Fresheners/ Deodorisers",
    price: 3.25,
    image: "cleen-air-freshener-citrus.jpg",
  },
  {
    name: "Cleen Air Freshener - Cranberry (400ml)",
    description: "Air Freshener Aerosol",
    code: "52094",
    category: "Air Fresheners/ Deodorisers",
    price: 3.25,
    image: "cleen-air-freshener-cranberry.jpg",
  },
  {
    name: "Cleen Air Freshener - Vanilla (400ml)",
    description: "Air Freshener Aerosol",
    code: "52069",
    category: "Air Fresheners/ Deodorisers",
    price: 3.45,
    image: "cleen-air-freshener-vanilla.jpg",
  },
  {
    name: "Enchant 750ml",
    description: "High Impact Lemon Air Freshener",
    code: "816",
    category: "Air Fresheners/ Deodorisers",
    price: 3.84,
    image: "enchant-air-freshener.jpg",
  },
  {
    name: "Lufra San Deo (Fresh Deodoriser Concentrate)",
    description: "Candy Disinfectant / Deodoriser 5L",
    code: "223",
    category: "Air Fresheners/ Deodorisers",
    price: 8.4,
    image: "lufra-san-deo.jpg",
  },
  {
    name: "Magnum Refill (Citrus Grove) 270ml",
    description: "Aerosol Fragrance refill",
    code: "704C",
    category: "Air Fresheners/ Deodorisers",
    price: 4.26,
    image: "magnum-refill-citrus.jpg",
  },
  {
    name: "Magnum Refill (Mystique) 270ml",
    description: "Aerosol Refill",
    code: "MAGCASCADE",
    category: "Air Fresheners/ Deodorisers",
    price: 4.26,
    image: "magnum-refill-mystique.jpg",
  },

  // All purpose cleaners
  {
    name: "C1 5L",
    description: "Interior Cleaner",
    code: "381",
    category: "All purpose cleaners",
    price: 18.81,
    image: "C1 - 5L.png",
  },
  {
    name: "UB90- 2L",
    description: "Universal Room Cleaner",
    code: "999",
    category: "All purpose cleaners",
    price: 10.94,
    image: "ub90-universal-room-cleaner.jpg",
  },
  {
    name: "Ubik 2000 20L",
    description: "Universal Cleaner Concentrate",
    code: "301B",
    category: "All purpose cleaners",
    price: 42.81,
    image: "ubik-2000-20l.jpg",
  },
  {
    name: "Ubik 2000- 5L",
    description: "Universal Cleaner Concentrate",
    code: "301",
    category: "All purpose cleaners",
    price: 14.26,
    image: "ubik-2000-5l.jpg",
  },

  // Automotive
  {
    name: "Activ F - 5L 403",
    description: "Neutral Detergent Cleaner",
    code: "ACTIVF",
    category: "Automotive",
    price: 8.78,
    image: "activ-f-neutral-detergent.jpg",
  },
  {
    name: "Autogloss",
    description: "Car Polish",
    code: "602",
    category: "Automotive",
    price: 27.24,
    image: "autogloss.jpg",
  },
  {
    name: "Disposable Car Seat Covers",
    description: "Car seat Covers",
    code: "DCARCOVERS",
    category: "Automotive",
    price: null,
    image: "disposable-car-seat-covers.jpg",
  },
  {
    name: "Magnum Force Extra - 5L",
    description: "Heavy Duty Traffic Film Remover",
    code: "313",
    category: "Automotive",
    price: 14.42,
    image: "magnum-force-extra.jpg",
  },
  {
    name: "Trim Shine 750ml",
    description: "Trim Shine 750ml",
    code: "604B",
    category: "Automotive",
    price: 4.02,
    image: "trim-shine-750ml.jpg",
  },
  {
    name: "Truck Wash 80 20L",
    description: "Truck Wash",
    code: "307",
    category: "Automotive",
    price: 29.91,
    image: "truck-wash-80.jpg",
  },

  // Beerline Cleaners
  {
    name: "Purple Beerline Cleaner 5L",
    description: "Contains a colour indicator to signify when the product is exhausted",
    code: "0209PP",
    category: "Beerline Cleaners",
    price: 10.26,
    image: "purple-beerline-cleaner.jpg",
  },

  // Bins
  {
    name: "Cigarette Bin",
    description: "Cigarette Bin",
    code: "CIGBIN",
    category: "Bins",
    price: 23.45,
    image: "cigarette-bin.jpg",
  },
  {
    name: "Procycle Recycling Bin 80L",
    description: "Grey Recycling bin, lid and back panel",
    code: "105173",
    category: "Bins",
    price: 96.5,
    image: "procycle-recycling-bin.jpg",
  },
  {
    name: "Silver Bullet Bin Push 30L",
    description: "Silver Bullet Bin Push 30L",
    code: "101679",
    category: "Bins",
    price: 24,
    image: "silver-bullet-bin.jpg",
  },
  {
    name: "Swing Bin (White) Plastic",
    description: "Swing Bin",
    code: "5026W",
    category: "Bins",
    price: 14,
    image: "swing-bin-white.jpg",
  },

  // Bottles and Heads
  {
    name: "10ml Dosing Pump (2L bottles)",
    description: "Pump for 2L bottles",
    code: "DIS66",
    category: "Bottles and Heads",
    price: 3.9,
    image: "10ml-dosing-pump.jpg",
  },
  {
    name: "1L bottles",
    description: "Bottles",
    code: "1LBOT",
    category: "Bottles and Heads",
    price: 1.65,
    image: "1l-bottles.jpg",
  },
  {
    name: "20L Bottle Cap Tap",
    description: "Bottle Tap",
    code: "DIS76",
    category: "Bottles and Heads",
    price: 6.17,
    image: "20l-bottle-cap-tap.jpg",
  },
  {
    name: "300ml bottle with pump top (Thin)",
    description: "Thin 300ml empty bottle with pump top",
    code: "BOT300B",
    category: "Bottles and Heads",
    price: 1.29,
    image: "300ml-bottle-pump-top.jpg",
  },
  {
    name: "500ml Bottle (Round) with cap",
    description: "500ml Bottle",
    code: "BOT300",
    category: "Bottles and Heads",
    price: 0.92,
    image: "500ml-bottle-round.jpg",
  },
  {
    name: "5L Bottle Cap Tap",
    description: "Bottle Tap",
    code: "DIS83",
    category: "Bottles and Heads",
    price: 5.56,
    image: "5l-bottle-cap-tap.jpg",
  },
  {
    name: "60ml Measuring Cup",
    description: "Measuring Cup",
    code: "MEASURINGCUP",
    category: "Bottles and Heads",
    price: 0.69,
    image: "60ml-measuring-cup.jpg",
  },
  {
    name: "750ml Trigger Bottle Complete- Cleenol",
    description: "Bottle",
    code: "TBCC",
    category: "Bottles and Heads",
    price: 1.65,
    image: "750ml-trigger-bottle.jpg",
  },
  {
    name: "Bottle Cap (500ml round bottle top)",
    description: "Bottle Cap",
    code: "BOTCAP",
    category: "Bottles and Heads",
    price: 0.3,
    image: "bottle-cap-500ml.jpg",
  },
  {
    name: "Cleenol Trigger Heads",
    description: "Trigger Heads",
    code: "CLNTRGH",
    category: "Bottles and Heads",
    price: 0.65,
    image: "cleenol-trigger-heads.jpg",
  },
  {
    name: "Pelican Pump - 5L Cleenol",
    description: "Pelican Pump - 5L Cleenol",
    code: "136552",
    category: "Bottles and Heads",
    price: 1.5,
    image: "pelican-pump-5l.jpg",
  },
  {
    name: "Pump for 5 Litre Bottle (30cc shot) CLOVER",
    description: "Pelican Pump",
    code: "DIS77",
    category: "Bottles and Heads",
    price: 3.95,
    image: "pump-5l-30cc.jpg",
  },
  {
    name: "Pump for 5 Litre Bottle (4ml shot)",
    description: "Pelican Pump",
    code: "DIS40",
    category: "Bottles and Heads",
    price: 2.74,
    image: "pump-5l-4ml.jpg",
  },
  {
    name: "Pump for 5L bottles",
    description: "30cc shot",
    code: "DIS77",
    category: "Bottles and Heads",
    price: 3.95,
    image: "pump-5l-bottles.jpg",
  },
  {
    name: "Pump for 5L Buster & Buster Extra",
    description: "Pelican Pump 7cc",
    code: "DIS93",
    category: "Bottles and Heads",
    price: 7.39,
    image: "pump-buster-extra.jpg",
  },
  {
    name: "Push top Heads for thin 300ml bottles",
    description: "Heads",
    code: "PTHFTB",
    category: "Bottles and Heads",
    price: 0.3,
    image: "push-top-heads.jpg",
  },
  {
    name: "Round Trigger Bottle 750ml",
    description: "For use with TRG05",
    code: "BOT02",
    category: "Bottles and Heads",
    price: 1.1,
    image: "round-trigger-bottle.jpg",
  },
  {
    name: "Sample bottles 250ml",
    description: "Sample bottles",
    code: "Bot49",
    category: "Bottles and Heads",
    price: 1.06,
    image: "sample-bottles-250ml.jpg",
  },
  {
    name: "Trigger head 750ml",
    description: "Fits trigger bottle BOT02",
    code: "TRG05",
    category: "Bottles and Heads",
    price: 1.65,
    image: "trigger-head-750ml.jpg",
  },
  {
    name: "White angled cap",
    description: "caps for bottles",
    code: "CAP32",
    category: "Bottles and Heads",
    price: 0.3,
    image: "white-angled-cap.jpg",
  },

  // Brackets
  {
    name: "POD Clover 300ml and 750ml soap bottles",
    description: "Bracket",
    code: "DIS94",
    category: "Brackets",
    price: 2.56,
    image: "pod-clover-bracket.jpg",
  },

  // Breaker
  {
    name: "Breaker 5L",
    description: "Breaker - 5L",
    code: "506B",
    category: "Exterior cleaner",
    price: 17.33,
    image: "breaker-5l.jpg",
  },

  // Brushware
  {
    name: '12" Soft Blue Hygiene Broom Head',
    description: "Broom Head 30cm",
    code: "102910",
    category: "Brushware",
    price: 4.95,
    image: "12-soft-blue-broom.jpg",
  },
  {
    name: '12" Soft Red Hygiene Broom Head',
    description: "Broom Head 30cm",
    code: "102910",
    category: "Brushware",
    price: 4.95,
    image: "12-soft-red-broom.jpg",
  },
  {
    name: '12" Soft Yellow Hygiene Broom Head',
    description: "Broom Head 30cm",
    code: "102910",
    category: "Brushware",
    price: 4.95,
    image: "12-soft-yellow-broom.jpg",
  },
  {
    name: '12" Stiff Blue Hygiene Broom Head',
    description: "Broom Head 30cm",
    code: "102903",
    category: "Brushware",
    price: 4.95,
    image: "12-stiff-blue-broom.jpg",
  },
  {
    name: '12" Stiff Red Hygiene Broom Head',
    description: "Broom Head 30cm",
    code: "102903",
    category: "Brushware",
    price: 4.95,
    image: "12-stiff-red-broom.jpg",
  },
  {
    name: '12" Stiff Yellow Hygiene Broom Head',
    description: "Broom Head",
    code: "102903",
    category: "Brushware",
    price: 4.95,
    image: "12-stiff-yellow-broom.jpg",
  },
  {
    name: "12'' Soft Green Hygiene Broom Head",
    description: "Broom Head 30cm",
    code: "102910",
    category: "Brushware",
    price: 4.95,
    image: "12-soft-green-broom.jpg",
  },
  {
    name: "12'' Stiff Green Hygiene Broom Head",
    description: "Broom Head 30cm",
    code: "102903",
    category: "Brushware",
    price: 4.95,
    image: "12-stiff-green-broom.jpg",
  },
  {
    name: '18" Soft Blue Hygiene Broom Head',
    description: "Broom Head 45cm",
    code: "104949",
    category: "Brushware",
    price: 8.89,
    image: "18-soft-blue-broom.jpg",
  },
  {
    name: '18" Soft Yellow Hygiene Broom Head',
    description: "Broom Head 45cm",
    code: "104949",
    category: "Brushware",
    price: 8.89,
    image: "18-soft-yellow-broom.jpg",
  },
  {
    name: '18" Stiff Blue Hygiene Broom Head',
    description: '18" Stiff Blue Hygiene Broom Head 45cm',
    code: "104950",
    category: "Brushware",
    price: 8.89,
    image: "18-stiff-blue-broom.jpg",
  },
  {
    name: '18" Stiff Green Hygiene Broom Head',
    description: "Broom Head 45cm",
    code: "104950",
    category: "Brushware",
    price: 8.89,
    image: "18-stiff-green-broom.jpg",
  },
  {
    name: '18" Stiff Red Hygiene Broom Head',
    description: "Broom Head 45cm",
    code: "104950",
    category: "Brushware",
    price: 8.89,
    image: "18-stiff-red-broom.jpg",
  },
  {
    name: "18'' Soft Green Hygiene Broom Head",
    description: "Broom Head 45cm",
    code: "104949",
    category: "Brushware",
    price: 8.89,
    image: "18-soft-green-broom.jpg",
  },
  {
    name: "18'' Soft Red Hygiene Broom Head",
    description: "Broom Head 45cm",
    code: "104949",
    category: "Brushware",
    price: 8.89,
    image: "18-soft-red-broom.jpg",
  },
  {
    name: "18'' Stiff Yellow Hygiene Broom Head",
    description: "Broom Head 45cm",
    code: "102917",
    category: "Brushware",
    price: 8.89,
    image: "18-stiff-yellow-broom.jpg",
  },
  {
    name: "Cobweb Brush Head",
    description: "Cobweb Brush",
    code: "COBWEBBRUSH",
    category: "Brushware",
    price: 9.79,
    image: "cobweb-brush-head.jpg",
  },
  {
    name: "Deck Scrub (Blue)",
    description: "Deck Scrub",
    code: "102851",
    category: "Brushware",
    price: 2.47,
    image: "deck-scrub-blue.jpg",
  },
  {
    name: "Desktop Dustpan and Brush",
    description: "Desktop Dustpan and Brush",
    code: "DSKTPPAN",
    category: "Brushware",
    price: 1,
    image: "desktop-dustpan-brush.jpg",
  },
  {
    name: "Dustpan & Brush (Blue)",
    description: "Dustpan & Brush",
    code: "102940",
    category: "Brushware",
    price: 2.87,
    image: "dustpan-brush-blue.jpg",
  },
  {
    name: "Dustpan & Brush (Green)",
    description: "Dustpan & Brush",
    code: "102940",
    category: "Brushware",
    price: 2.87,
    image: "dustpan-brush-green.jpg",
  },
  {
    name: "Dustpan & Brush (Red)",
    description: "Dustpan & Brush",
    code: "102940",
    category: "Brushware",
    price: 2.87,
    image: "dustpan-brush-red.jpg",
  },
  {
    name: "Dustpan & Brush (Yellow)",
    description: "Dustpan & Brush",
    code: "102940",
    category: "Brushware",
    price: 2.87,
    image: "dustpan-brush-yellow.jpg",
  },
  {
    name: "Hygiene Brush Blue",
    description: "Hygiene brush",
    code: "102995",
    category: "Brushware",
    price: 3.31,
    image: "hygiene-brush-blue.jpg",
  },
  {
    name: "Hygiene Brush Green",
    description: "Hygiene Brush",
    code: "102995",
    category: "Brushware",
    price: 3.31,
    image: "hygiene-brush-green.jpg",
  },
  {
    name: "Hygiene Brush Red",
    description: "Hygiene Brush",
    code: "102995",
    category: "Brushware",
    price: 3.31,
    image: "hygiene-brush-red.jpg",
  },
  {
    name: "Hygiene Brush Yellow",
    description: "Hygiene Brush",
    code: "102995",
    category: "Brushware",
    price: 3.31,
    image: "hygiene-brush-yellow.jpg",
  },
  {
    name: "Hygiene Nail Brush Blue",
    description: "Hygiene Brush",
    code: "102995",
    category: "Brushware",
    price: 3.31,
    image: "hygiene-nail-brush-blue.jpg",
  },
  {
    name: "Lobby Dustpan & Brush",
    description: "Lobby Dustpan & Brush",
    code: "HB24B",
    category: "Brushware",
    price: 12.58,
    image: "lobby-dustpan-brush.jpg",
  },
  {
    name: "Nail brush Blue",
    description: "Nail brush Blue",
    code: "102929B",
    category: "Brushware",
    price: 0.85,
    image: "nail-brush-blue.jpg",
  },
  {
    name: "Nail Brush Green",
    description: "Nail Brush",
    code: "102929G",
    category: "Brushware",
    price: 0.85,
    image: "nail-brush-green.jpg",
  },
  {
    name: "Nail Brush Red",
    description: "Nail Brush",
    code: "102929R",
    category: "Brushware",
    price: 0.85,
    image: "nail-brush-red.jpg",
  },
  {
    name: "Nail Brush Yellow",
    description: "Nail Brush",
    code: "102929",
    category: "Brushware",
    price: 0.85,
    image: "nail-brush-yellow.jpg",
  },
  {
    name: "Roughneck Wire Brush",
    description: "Wire Brush",
    code: "SPD742",
    category: "Brushware",
    price: 2.1,
    image: "roughneck-wire-brush.jpg",
  },
  {
    name: "Scrubbing Brush - Yellow",
    description: "Brush",
    code: "NHB03Y",
    category: "Brushware",
    price: 4.16,
    image: "scrubbing-brush-yellow.jpg",
  },
  {
    name: "Washable Grout Brush Blue",
    description: "Grout Brush",
    code: "102856",
    category: "Brushware",
    price: 3.12,
    image: "grout-brush-blue.jpg",
  },
  {
    name: "Washable Grout Brush Green",
    description: "Grout Brush",
    code: "102856G",
    category: "Brushware",
    price: 3.12,
    image: "grout-brush-green.jpg",
  },
  {
    name: "Washable Grout Brush Red",
    description: "Grout Brush",
    code: "102856R",
    category: "Brushware",
    price: 3.12,
    image: "grout-brush-red.jpg",
  },
  {
    name: "Washable Grout Brush Yellow",
    description: "Grout Brush",
    code: "102856Y",
    category: "Brushware",
    price: 3.12,
    image: "grout-brush-yellow.jpg",
  },
  {
    name: "Washing Up Brush",
    description: "Dish Brush",
    code: "104969",
    category: "Brushware",
    price: 1.32,
    image: "washing-up-brush.jpg",
  },

  // Buckets and Signs
  {
    name: "Banana Cone Wet floor sign",
    description: "Wet floor sign",
    code: "104557",
    category: "Buckets and Signs",
    price: 28.4,
    image: "banana-cone-wet-floor-sign.jpg",
  },
  {
    name: "Bucket Speedy & Wringer 20L BLUE",
    description: "Bucket Speedy & Wringer 20L BLUE",
    code: "101248B",
    category: "Buckets and Signs",
    price: 39.9,
    image: "bucket-speedy-wringer-blue.jpg",
  },
  {
    name: "Bucket Speedy & Wringer 20L GREEN",
    description: "Bucket Speedy & Wringer 20L GREEN",
    code: "101248G",
    category: "Buckets and Signs",
    price: 39.9,
    image: "bucket-speedy-wringer-green.jpg",
  },
  {
    name: "Bucket Speedy & Wringer 20L RED",
    description: "Bucket Speedy & Wringer 20L RED",
    code: "101248",
    category: "Buckets and Signs",
    price: 39.9,
    image: "bucket-speedy-wringer-red.jpg",
  },
  {
    name: "Bucket Speedy & Wringer 20L YELLOW",
    description: "Bucket Speedy & Wringer 20L YELLOW",
    code: "101248Y",
    category: "Buckets and Signs",
    price: 39.9,
    image: "bucket-speedy-wringer-yellow.jpg",
  },
  {
    name: "Bucket, Round 9L Blue",
    description: "Bucket - Round 9L Blue",
    code: "755B",
    category: "Buckets and Signs",
    price: 2.24,
    image: "bucket-round-9l-blue.jpg",
  },
  {
    name: "Bucket, Round 9L Green",
    description: "Bucket - Round 9L Green",
    code: "755G",
    category: "Buckets and Signs",
    price: 2.24,
    image: "bucket-round-9l-green.jpg",
  },
  {
    name: "Bucket, Round 9L Red",
    description: "Bucket - Round 9L Red",
    code: "755R",
    category: "Buckets and Signs",
    price: 2.24,
    image: "bucket-round-9l-red.jpg",
  },
  {
    name: "Bucket, Round 9L Yellow",
    description: "Bucket - Round 9L Yellow",
    code: "755Y",
    category: "Buckets and Signs",
    price: 2.24,
    image: "bucket-round-9l-yellow.jpg",
  },
  {
    name: "Eco Wet Floor Sign",
    description: "Wet Floor Folding Sign, Recycled",
    code: "105050",
    category: "Buckets and Signs",
    price: 5.4,
    image: "eco-wet-floor-sign.jpg",
  },
  {
    name: "Standard Safety Cone",
    description: "Wet Floor Sign",
    code: "104383",
    category: "Buckets and Signs",
    price: 5.96,
    image: "standard-safety-cone.jpg",
  },
  {
    name: "Wet Floor Sign Flat",
    description: "Wet Floor Sign 101423",
    code: "101423",
    category: "Buckets and Signs",
    price: 5.96,
    image: "wet-floor-sign-flat.jpg",
  },

  // Carpet Cleaning
  {
    name: "Ador Neutra (Sanex) - 5L",
    description: "Odour and Urine Neutraliser",
    code: "208B",
    category: "Carpet Cleaning",
    price: 18.88,
    image: "ador-neutra-5l.jpg",
  },
  {
    name: "Ador Neutra (Sanex) - 750ml",
    description: "Odour and Urine Neutraliser",
    code: "208",
    category: "Carpet Cleaning",
    price: 4.54,
    image: "ador-neutra-750ml.jpg",
  },
  {
    name: "Comet - 1L",
    description: "Comet - 1L",
    code: "306",
    category: "Carpet Cleaning",
    price: 2.76,
    image: "comet-1l.jpg",
  },
  {
    name: "Comet - 5L",
    description: "Carpet Cleaner for Extraction Cleaning",
    code: "306B",
    category: "Carpet Cleaning",
    price: 11.4,
    image: "comet-5l.jpg",
  },
  {
    name: "Defoamer - 5L",
    description: "Concentrated Defoaming Agent",
    code: "445",
    category: "Carpet Cleaning",
    price: 14.24,
    image: "defoamer-5l.jpg",
  },
  {
    name: "Dry Foam 5L",
    description: "Dry Foam Carpet Shampoo",
    code: "444",
    category: "Carpet Cleaning",
    price: 12.88,
    image: "dry-foam-5l.jpg",
  },
  {
    name: "Henry Hoover Bags - 10",
    description: "Henry Hoover Bags - 10",
    code: "HENRY",
    category: "Carpet Cleaning",
    price: 12.5,
    image: "henry-hoover-bags.jpg",
  },
  {
    name: "Henry Turbo Head",
    description: "Turbo head for numatic range",
    code: "HENRYTURBO",
    category: "Carpet Cleaning",
    price: 25,
    image: "henry-turbo-head.jpg",
  },
  {
    name: "SAS 20 - 750ml",
    description: "Spot and Stain Remover",
    code: "442",
    category: "Carpet Cleaning",
    price: 4.52,
    image: "sas-20-750ml.jpg",
  },

  // Catering Essentials
  {
    name: '18" Piping Bags (100) on roll',
    description: '18" Piping Bags (100) on roll',
    code: "PIPING",
    category: "Catering Essentials",
    price: 12.42,
    image: "piping-bags-roll.jpg",
  },
  {
    name: "All purpose anti-bacterial wipes YELLOW ROLL",
    description: "All Purpose Wipes, tear off roll boxed, 200",
    code: "100247Y",
    category: "Catering Essentials",
    price: 9.89,
    image: "antibacterial-wipes-yellow.jpg",
  },
  {
    name: "All purpose anti-bacterial wipes GREEN ROLL",
    description: "All Purpose Wipes, tear off roll boxed, 200",
    code: "100247G",
    category: "Catering Essentials",
    price: 9.89,
    image: "antibacterial-wipes-green.jpg",
  },
  {
    name: "All purpose anti-bacterial wipes RED ROLL",
    description: "All Purpose Wipes, tear off roll boxed, 200",
    code: "100247R",
    category: "Catering Essentials",
    price: 9.89,
    image: "antibacterial-wipes-red.jpg",
  },
  {
    name: "All Purpose Cloths - Blue",
    description: "Handy Wipes Standard (50)",
    code: "104390",
    category: "Catering Essentials",
    price: 4.39,
    image: "all-purpose-cloths-blue.jpg",
  },
  {
    name: "All Purpose Cloths - Green",
    description: "Handy Wipes Standard (50)",
    code: "104390",
    category: "Catering Essentials",
    price: 4.39,
    image: "all-purpose-cloths-green.jpg",
  },
  {
    name: "All Purpose Cloths - Red",
    description: "Handy wipes Standard (50)",
    code: "104390",
    category: "Catering Essentials",
    price: 4.39,
    image: "all-purpose-cloths-red.jpg",
  },
  {
    name: "All Purpose Cloths - Yellow",
    description: "Handy Wipes Standard (50)",
    code: "104390",
    category: "Catering Essentials",
    price: 4.39,
    image: "all-purpose-cloths-yellow.jpg",
  },
  {
    name: "All Purpose Wipes anti-bacterial BLUE ROLL",
    description: "All-Purpose Wipes, tear-off roll boxed, 200",
    code: "100247B",
    category: "Catering Essentials",
    price: 9.89,
    image: "antibacterial-wipes-blue.jpg",
  },
  {
    name: 'Baking Paper (12")- Cutterbox 30cm x 75m',
    description: 'Baking Parchment Silicone (12")- Cutterbox 30cm x 75m',
    code: "13244B",
    category: "Catering Essentials",
    price: 9.16,
    image: "baking-paper-12-cutterbox.jpg",
  },
  {
    name: 'Baking Paper (18") - Cutterbox x75m',
    description: 'Baking Parchment 18" x 75m Cutterbox',
    code: "585",
    category: "Catering Essentials",
    price: 15.34,
    image: "baking-paper-cutterbox.jpg",
  },
  {
    name: "Barista Cloth- Orange",
    description: "Antibacterial Cloth",
    code: "104182",
    category: "Catering Essentials",
    price: 2.1,
    image: "barista-cloth-orange.jpg",
  },
  {
    name: "Black Straws",
    description: "Black Paper Straws",
    code: "BLACSTRAW",
    category: "Catering Essentials",
    price: 3.95,
    image: "black-straws.jpg",
  },
  {
    name: "Blue detectable plasters",
    description: "Blue Plasters (100)",
    code: "BLPLASTERS",
    category: "Catering Essentials",
    price: 2.1,
    image: "blue-detectable-plasters.jpg",
  },
  {
    name: 'Catering foil (12") Cutterbox x 75M',
    description: "Catering foil",
    code: "11345B",
    category: "Catering Essentials",
    price: 9.55,
    image: "catering-foil-12-cutterbox.jpg",
  },
  {
    name: 'Catering Foil (18") Cutterbox',
    description: "Catering Foil 75m",
    code: "588",
    category: "Catering Essentials",
    price: 11.96,
    image: "catering-foil-cutterbox.jpg",
  },
  {
    name: 'Cling Film (12") Cutterbox x 300m',
    description: 'Cling Film 12" Cutterbox',
    code: "10230H",
    category: "Catering Essentials",
    price: 8.95,
    image: "cling-film-12-cutterbox.jpg",
  },
  {
    name: 'Cling Film (18") Cutterbox x 300m',
    description: 'Cling Film 18" Cutterbox',
    code: "10245H",
    category: "Catering Essentials",
    price: 10.91,
    image: "cling-film-cutterbox.jpg",
  },
  {
    name: "Halo Cleaning Powder",
    description: "Coffee&Tea De-Tannin Powder",
    code: "PN902",
    category: "Catering Essentials",
    price: 5.3,
    image: "halo-cleaning-powder.jpg",
  },
  {
    name: "Halo Milk Line 1L",
    description: "Frother Cleaner",
    code: "PN905",
    category: "Catering Essentials",
    price: 5.95,
    image: "halo-milk-line.jpg",
  },
  {
    name: "Temperature Probe",
    description: "Temperature Probe",
    code: "TP101",
    category: "Catering Essentials",
    price: 3.6,
    image: "temperature-probe.jpg",
  },

  // Centrefeed
  {
    name: "Blue 2-ply Centrefeed, 150m",
    description: "Centrefeed 2 Ply Delta Blue Embossed, 6 pack",
    code: "852665",
    category: "Centrefeed",
    price: 16.98,
    image: "blue-2ply-centrefeed.jpg",
  },
  {
    name: "Centrefeed 1 Ply White 425",
    description: "Centrefeed",
    code: "FCFW19301",
    category: "Centrefeed",
    price: 21.65,
    image: "centrefeed-1ply-white.jpg",
  },
  {
    name: "Centrefeed 2 ply White",
    description: "Centrefeed 2 ply white",
    code: "319",
    category: "Centrefeed",
    price: 16.98,
    image: "centrefeed-white.jpg",
  },
  {
    name: "Mini Centrefeed Toilet Rolls 2 Ply White",
    description: "Mini Centrefeed Toilet Rolls (12)",
    code: "226",
    category: "Centrefeed",
    price: 23.9,
    image: "mini-centrefeed-toilet-rolls.jpg",
  },
  {
    name: "Sirius Mini Centrefeed 2ply White",
    description: "12 rolls, 90cm x 60m MWC60",
    code: "303",
    category: "Centrefeed",
    price: 23.5,
    image: "sirius-mini-centrefeed.jpg",
  },

  // Dishwashing
  {
    name: "Auto Glasswash 5L",
    description: "Premium Auto Glasswash Detergent",
    code: "318",
    category: "Dishwashing",
    price: 16.8,
    image: "auto-glasswash-detergent.jpg",
  },
  {
    name: "Blast - 5L",
    description: "Beer Pipeline Cleaner",
    code: "302",
    category: "Dishwashing",
    price: 9.41,
    image: "blast-beer-pipeline-cleaner.jpg",
  },
  {
    name: "C4 Machine Dishwash",
    description: "Machine dishwashing",
    code: "7011",
    category: "Dishwashing",
    price: 12.94,
    image: "c4-machine-dishwash.jpg",
  },
  {
    name: "Clarifi - 5L",
    description: "Drinking Glass Renovator",
    code: "369",
    category: "Dishwashing",
    price: 13.66,
    image: "clarifi-glass-renovator.jpg",
  },
  {
    name: "Fairy Dishwasher Capsules",
    description: "Lemon Dishwasher Capsules - 90",
    code: "FAIRYDISH",
    category: "Dishwashing",
    price: 18.58,
    image: "fairy-dishwasher-capsules.jpg",
  },
  {
    name: "Rapier 5L",
    description: "Premium Auto Dishwash Detergent",
    code: "303",
    category: "Dishwashing",
    price: 14.84,
    image: "rapier-dishwash-detergent.jpg",
  },
  {
    name: "Rinse Aid 5L",
    description: "Premium Rinse Aid Additive",
    code: "407",
    category: "Dishwashing",
    price: 12.86,
    image: "rinse-aid-5l.jpg",
  },

  // Dishwashing Detergents
  {
    name: "Citrol - 1L",
    description: "Lemon Washing Up Liquid",
    code: "401",
    category: "Dishwashing Detergents",
    price: 3.5,
    image: "citrol-1l.jpg",
  },
  {
    name: "Citrol 5L",
    description: "Lemon Washing Up Liquid",
    code: "401",
    category: "Dishwashing Detergents",
    price: 12.82,
    image: "citrol-lemon-washing-liquid.jpg",
  },
  {
    name: "D1 Washing Up Liquid 500ml",
    description: "Washing Up Liquid",
    code: "7018",
    category: "Dishwashing Detergents",
    price: 1.82,
    image: "D15L.png",
  },
  {
    name: "D3 Green Washing Up Liquid (10%) 5L",
    description: "liquid detergent",
    code: "7035",
    category: "Dishwashing Detergents",
    price: 8.36,
    image: "d3-green-washing-up-liquid.jpg",
  },
  {
    name: "D4 Concentrated washing up liquid 5L",
    description: "Concentrated detergent",
    code: "021432X5",
    category: "Dishwashing Detergents",
    price: 10.84,
    image: "d4-concentrated-washing-up-liquid.jpg",
  },
  {
    name: "Dish-Bac - 1L",
    description: "Washing up liquid with Bactericide",
    code: "221",
    category: "Dishwashing Detergents",
    price: 3.82,
    image: "dish-bac-1l.jpg",
  },
  {
    name: "Dish-Bac 5L",
    description: "Washing up liquid with Bactericide",
    code: "221",
    category: "Dishwashing Detergents",
    price: 13.48,
    image: "dish-bac-5l.jpg",
  },

  // Disinfectants
  {
    name: "Freshnit - 5L",
    description: "Sanitary Cleaner",
    code: "898",
    category: "Disinfectants",
    price: 10.44,
    image: "freshnit-5l.jpg",
  },
  {
    name: "San Multi Lemon (Fresh Wild Lemon)",
    description: "Daily Cleaner and Disinfectant",
    code: "202",
    category: "Disinfectants",
    price: 7.79,
    image: "san-multi-lemon.jpg",
  },
  {
    name: "Spray & Wipe - 5L",
    description: "Spray & Wipe - 5L",
    code: "211B",
    category: "Disinfectants",
    price: 10.79,
    image: "spray-wipe-disinfectant.jpg",
  },
  {
    name: "Spray & Wipe - 750ml",
    description: "Fragrant Cleaner and Disinfectant",
    code: "211",
    category: "Disinfectants",
    price: 3.14,
    image: "spray-wipe-750ml.jpg",
  },
  {
    name: "Ultra AX - 750ml",
    description: "Virucidal/Bactericidal Disinfectant",
    code: "259",
    category: "Disinfectants",
    price: 3.97,
    image: "ultra-ax-750ml.jpg",
  },
  {
    name: "Ultra Xtreme 1L",
    description: "Concentrated Virucidal/Bactericidal Disinfectant",
    code: "259D",
    category: "Disinfectants",
    price: 9.19,
    image: "ultra-xtreme-1l.jpg",
  },
  {
    name: "Ultra Xtreme 5L",
    description: "Concentrated Virucidal/Bactericidal Disinfectant",
    code: "261",
    category: "Disinfectants",
    price: 17.73,
    image: "ultra-xtreme.jpg",
  },
  {
    name: "Versan - 5L",
    description: "Broad spectrum surface disinfectant",
    code: "260",
    category: "Disinfectants",
    price: 10.86,
    image: "versan-5l.jpg",
  },
  {
    name: "Versan 1L",
    description: "Broad Spectrum Surface Disinfectant",
    code: "260",
    category: "Disinfectants",
    price: 4.53,
    image: "versan-1l.jpg",
  },

  // Floor Cleaners
  {
    name: "Bio-Shield Lemon - 5L",
    description: "Bio-Shield Lemon - 5L",
    code: "205B",
    category: "Floor Cleaners",
    price: 11.68,
    image: "bio-shield-lemon.jpg",
  },
  {
    name: "C2 Floor Cleaner, 1L",
    description: "C2 Floor Cleaner, 1L DoseIt",
    code: "122",
    category: "Floor Cleaners",
    price: 5.7,
    image: "c2-floor-cleaner-1l.jpg",
  },
  {
    name: "C2 Floor Cleaner, 5L",
    description: "C2 Floor Cleaner, 5L",
    code: "122",
    category: "Floor Cleaners",
    price: 18.81,
    image: "c2-floor-cleaner.jpg",
  },
  {
    name: "Clover Gel Contract Pine 5L",
    description: "Pine Floor Gel",
    code: "105",
    category: "Floor Cleaners",
    price: 8.85,
    image: "clover-gel-pine.jpg",
  },
  {
    name: "Clover Gel Lemon - 5L",
    description: "Concentrated Floor Gel",
    code: "107",
    category: "Floor Cleaners",
    price: 11.16,
    image: "clover-gel-lemon.jpg",
  },
  {
    name: "Diamond Extra 5L",
    description: "Wet Look Floor Polish (25%)",
    code: "109",
    category: "Floor Cleaners",
    price: 37.26,
    image: "diamond-extra.jpg",
  },
  {
    name: "Floorit - 5L",
    description: "Floor Cleaner",
    code: "498",
    category: "Floor Cleaners",
    price: 7.02,
    image: "floorit-floor-cleaner.jpg",
  },
  {
    name: "Impact 5L",
    description: "Zesty Lemon Cleaning Gel",
    code: "111",
    category: "Floor Cleaners",
    price: 9.73,
    image: "impact-floor-cleaner.jpg",
  },
  {
    name: "PDQ - 5L",
    description: "Floor Cleaner/ Polish Maintainer",
    code: "110",
    category: "Floor Cleaners",
    price: 11.56,
    image: "pdq-floor-cleaner.jpg",
  },
  {
    name: "Terra Floor Ultra 5L",
    description: "Virucidal Floor Disinfectant 5L",
    code: "282",
    category: "Floor Cleaners",
    price: 12.88,
    image: "terra-floor-ultra.jpg",
  },

  // Gloves
  {
    name: "Nitrile Black Gloves",
    description: "Nitrile black powder free gloves, L (100)",
    code: "Nitrileblack",
    category: "Gloves",
    price: 4.95,
    image: "nitrile-black-gloves.jpg",
  },
  {
    name: "Nitrile Blue Pro Ultraflex Gloves, M",
    description: "Nitrile Blue Powder-Free Gloves, 100, Medium",
    code: "1162",
    category: "Gloves",
    price: 4.71,
    image: "nitrile-blue-pro-ultraflex-gloves.jpg",
  },
  {
    name: "PRO UltraFlex Blue Nitrile Gloves, L",
    description: "Blue Nitrile Gloves, L, box 100",
    code: "1163",
    category: "Gloves",
    price: 4.71,
    image: "nitrile-blue-pro-ultraflex-gloves-l.jpg",
  },
  {
    name: "PRO UltraFlex Blue Nitrile Gloves, XL",
    description: "Blue Nitrile Gloves, XL, box 100",
    code: "1164",
    category: "Gloves",
    price: 4.71,
    image: "nitrile-blue-pro-ultraflex-gloves-xl.jpg",
  },
  {
    name: "Rubber Gloves Blue Large",
    description: "Rubber Gloves Blue Large",
    code: "CORG.B.L",
    category: "Gloves",
    price: 0.55,
    image: "rubber-gloves-blue-large.jpg",
  },
  {
    name: "Rubber Gloves Blue Medium",
    description: "Rubber Gloves",
    code: "CORG.B.M",
    category: "Gloves",
    price: 0.55,
    image: "rubber-gloves-blue-medium.jpg",
  },
  {
    name: "Rubber Gloves Blue Small",
    description: "Rubber Gloves",
    code: "CORG.B.S",
    category: "Gloves",
    price: 0.55,
    image: "rubber-gloves-blue-small.jpg",
  },
  {
    name: "Vinyl Blue Medium Powder Free Gloves",
    description: "Vinyl Gloves",
    code: "1261",
    category: "Gloves",
    price: 4.6,
    image: "vinyl-blue-medium-gloves.jpg",
  },
  {
    name: "Vinyl Blue Powder Free Gloves (L)",
    description: "Vinyl Gloves",
    code: "1262",
    category: "Gloves",
    price: 4.6,
    image: "vinyl-blue-large-gloves.jpg",
  },
  {
    name: "Vinyl Blue Powder Free Gloves (XL)",
    description: "Vinyl Gloves (100)",
    code: "1263",
    category: "Gloves",
    price: 4.6,
    image: "vinyl-blue-xl-gloves.jpg",
  },

  // Hand creams/ Gels
  {
    name: "70% Hand Sanitiser Gel - 500ml",
    description: "Hand Sanitiser Gel",
    code: "77137",
    category: "Hand creams/ Gels",
    price: 3.85,
    image: "hand-sanitiser-gel.jpg",
  },
  {
    name: "70% Hand Sanitiser Gel - 5L",
    description: "Hand Gel",
    code: "77123",
    category: "Hand creams/ Gels",
    price: 17.97,
    image: "hand-sanitiser-gel-5l.jpg",
  },
  {
    name: "Alcohol Free Foam Hand Sanitiser",
    description: "Hand Sanitiser",
    code: "74101",
    category: "Hand creams/ Gels",
    price: 15.74,
    image: "alcohol-free-foam-sanitiser.jpg",
  },
  {
    name: "Barrier Cream - 300ml",
    description: "Barrier Cream",
    code: "409",
    category: "Hand creams/ Gels",
    price: 2.46,
    image: "barrier-cream-300ml.jpg",
  },
  {
    name: "Barrier Cream - 5L",
    description: "Barrier Cream",
    code: "409C",
    category: "Hand creams/ Gels",
    price: 21.34,
    image: "barrier-cream-5l.jpg",
  },
  {
    name: "Care 4 - 300ml",
    description: "Replenishing Cream",
    code: "434",
    category: "Hand creams/ Gels",
    price: 2.5,
    image: "care-4-300ml.jpg",
  },
  {
    name: "Care 4 - 5L",
    description: "Replenishing Cream",
    code: "434C",
    category: "Hand creams/ Gels",
    price: 22.81,
    image: "care-4-5l.jpg",
  },
  {
    name: "Dermex Mechanic Soap (Buster Extra) 5L",
    description: "Engineers Hand Cleaner",
    code: "415",
    category: "Hand creams/ Gels",
    price: 17.48,
    image: "dermex-mechanic-soap.jpg",
  },

  // Hand Towels
  {
    name: "Autocut - Hand Towel, Roll, 1 Ply White",
    description: "White Autocut hand towels",
    code: "PHS101",
    category: "Hand Towels",
    price: 23.02,
    image: "autocut-hand-towel-1ply.jpg",
  },
  {
    name: "Autocut Hand Towel Rolls, 2 Ply",
    description: "White Autocut 2 Ply Hand Towel Rolls x 6",
    code: "367",
    category: "Hand Towels",
    price: 24.96,
    image: "autocut-hand-towel-2ply.jpg",
  },
  {
    name: "Hand Towels - C Fold, 1 Ply Blue",
    description: "100% recycled hand towels, 2640B, 31L x 22W, 2640",
    code: "862096E",
    category: "Hand Towels",
    price: 21.31,
    image: "hand-towels-c-fold-blue.jpg",
  },
  {
    name: "Hand Towels - C Fold, 2 Ply White",
    description: "Hand Towels, 2400C, 100% pure pulp, 32L x 22.5W, 2400",
    code: "862122",
    category: "Hand Towels",
    price: 26.67,
    image: "hand-towels-c-fold.jpg",
  },
  {
    name: "Hand Towels - Z Fold, 2 Ply White",
    description: "Hand Towels, 230Z, 100% pure pulp, 24L x 23W, 3000",
    code: "864083",
    category: "Hand Towels",
    price: 27.9,
    image: "hand-towels-z-fold.jpg",
  },
  {
    name: "Kitchen Rolls 2 Ply - 24",
    description: "Kitchen roll towels",
    code: "821663",
    category: "Hand Towels",
    price: 15.85,
    image: "kitchen-rolls-2ply.jpg",
  },
  {
    name: "SkyTech Blue Wiping Roll 2 Ply Recycled 26cm x 350m",
    description: "Workshop Rolls 2 Ply Blue",
    code: "343",
    category: "Hand Towels",
    price: 28.93,
    image: "skytech-blue-wiping-roll.jpg",
  },

  // Soaps
  {
    name: "Biodox - 300ml",
    description: "Hygienic Hand Soap",
    code: "213",
    category: "Soaps",
    price: 2.25,
    image: "biodox-300ml.jpg",
  },
  {
    name: "Biodox - 5L",
    description: "Hygienic Hand Soap",
    code: "213C",
    category: "Soaps",
    price: 11.38,
    image: "biodox-5l.jpg",
  },
  {
    name: "Citrus Hand Cleanser 500ml",
    description: "Citrus Antibacterial Liquid Soap 500ml",
    code: "77234",
    category: "Soaps",
    price: 3.26,
    image: "citrus-hand-cleanser.jpg",
  },
  {
    name: "Larox - 5L",
    description: "Hygienic Hand Soap, Antibacterial",
    code: "426",
    category: "Soaps",
    price: 11.26,
    image: "larox-hand-soap.jpg",
  },
  {
    name: "Luxury Liquid Soap 500ml",
    description: "Green hand soap",
    code: "77037",
    category: "Soaps",
    price: 2.63,
    image: "luxury-liquid-soap.jpg",
  },
  {
    name: "Savon Blanc - 5L",
    description: "Luxury Hand Soap",
    code: "446",
    category: "Soaps",
    price: 10.63,
    image: "savon-blanc.jpg",
  },
  {
    name: "Savon Pearle - 300ml",
    description: "Luxury Hand Soap",
    code: "402",
    category: "Soaps",
    price: 2.2,
    image: "savon-pearle-300ml.jpg",
  },
  {
    name: "Savon Pearle - 5L",
    description: "Luxury Hand Soap",
    code: "402C",
    category: "Soaps",
    price: 10.63,
    image: "savon-pearle-5l.jpg",
  },
  {
    name: "Senses Fragrance-free Antibacterial Hand Wash 5L",
    description: "Antibacterial Hand Wash",
    code: "077028X5",
    category: "Soaps",
    price: 10.53,
    image: "senses-fragrance-free-antibacterial-hand-wash.jpg",
  },
  {
    name: "Senses Lemon Industrial Hand Cleaner 5L",
    description: "Bead Free Lemon Hand Cleaner 5L",
    code: "72978",
    category: "Soaps",
    price: 15.1,
    image: "senses-lemon-industrial-hand-cleaner.jpg",
  },
  {
    name: "Silk - 300ml",
    description: "Luxury Hand Soap",
    code: "417",
    category: "Soaps",
    price: 2.32,
    image: "silk-300ml.jpg",
  },
  {
    name: "Silk - 5L",
    description: "Luxury Hand Soap",
    code: "417C",
    category: "Soaps",
    price: 14.22,
    image: "silk-5l.jpg",
  },

  // Toilet Rolls
  {
    name: "Bliss 2-Ply Soft Toilet Rolls",
    description: "10x4 rolls",
    code: "BDQ2PLY4PK",
    category: "Toilet Rolls",
    price: 16.15,
    image: "bliss-2ply-toilet-rolls.jpg",
  },
  {
    name: "Bliss 3-Ply Toilet Roll",
    description: "10x4 rolls",
    code: "BTQ3PLY4PK",
    category: "Toilet Rolls",
    price: 19.67,
    image: "bliss-3ply-toilet-rolls.jpg",
  },
  {
    name: "Bulk Pack Toilet Tissue",
    description: "White, 2 ply, 10.2 x 19.5cm, 36 x 250 sheet packs",
    code: "811D23",
    category: "Toilet Rolls",
    price: 22.25,
    image: "bulk-pack-toilet-tissue.jpg",
  },
  {
    name: "Coreless Toilet Rolls 95mm x 96m",
    description: "36 rolls, suitable for all standard coreless dispensers",
    code: "229",
    category: "Toilet Rolls",
    price: 39.5,
    image: "coreless-toilet-rolls.jpg",
  },
  {
    name: "Lucart 3-Ply Luxury Toilet Rolls",
    description: "3-Ply Pure, Luxury Toilet Rolls, 10x4 rolls",
    code: "811D21 Strong21",
    category: "Toilet Rolls",
    price: 19.5,
    image: "lucart-3ply-luxury.jpg",
  },
  {
    name: 'Maxi Jumbo 3" (76mm) core x 300m',
    description: "Jumbo toilet rolls",
    code: "812395",
    category: "Toilet Rolls",
    price: 18.9,
    image: "maxi-jumbo-toilet-rolls.jpg",
  },
  {
    name: 'Mini Jumbo 3" (76mm) core x 150m',
    description: "Mini Jumbo toilet rolls",
    code: "812350",
    category: "Toilet Rolls",
    price: 18.9,
    image: "mini-jumbo-toilet-rolls.jpg",
  },

  // Washroom/Bathroom
  {
    name: "Acid Wash 80 - 1L",
    description: "Extra Strong Acidic Cleaner",
    code: "502",
    category: "Washroom/Bathroom",
    price: 3.97,
    image: "acid-wash-80-1l.jpg",
  },
  {
    name: "Acid Wash 80 - 5L",
    description: "Extra Strong Acidic Cleaner",
    code: "502B",
    category: "Washroom/Bathroom",
    price: 11.75,
    image: "acid-wash-80-5l.jpg",
  },
  {
    name: "Apeal - 750ml",
    description: "Daily Washroom Cleaner",
    code: "251",
    category: "Washroom/Bathroom",
    price: 3.91,
    image: "apeal-750ml.jpg",
  },
  {
    name: "Apeal 5L",
    description: "Daily Washroom Cleaner",
    code: "251",
    category: "Washroom/Bathroom",
    price: 13.38,
    image: "apeal-5l.jpg",
  },
  {
    name: "C3 1L",
    description: "Washroom Cleaner",
    code: "533B",
    category: "Washroom/Bathroom",
    price: 5.7,
    image: "c3-washroom-cleaner-1l.jpg",
  },
  {
    name: "C3 Washroom Cleaner 5L",
    description: "Washroom Cleaner",
    code: "533",
    category: "Washroom/Bathroom",
    price: 18.81,
    image: "c3-washroom-cleaner-5l.jpg",
  },
  {
    name: "Lance - 750ml",
    description: "Foaming Limescale Remover",
    code: "524",
    category: "Washroom/Bathroom",
    price: 3.74,
    image: "lance-750ml.jpg",
  },
  {
    name: "Scale-It - 1L",
    description: "Sanitary Cleaner & Descaler",
    code: "598",
    category: "Washroom/Bathroom",
    price: 2.71,
    image: "scale-it-1l.jpg",
  },
  {
    name: "Scale-It - 5L",
    description: "Sanitary Cleaner & Descaler",
    code: "598B",
    category: "Washroom/Bathroom",
    price: 9.26,
    image: "scale-it-5l.jpg",
  },
  {
    name: "STC - 1L",
    description: "Acidic Toilet & Washroom Cleaner",
    code: "510",
    category: "Washroom/Bathroom",
    price: 2.92,
    image: "stc-1l.jpg",
  },
  {
    name: "STC 5L",
    description: "Acidic Toilet & Washroom Cleaner",
    code: "510",
    category: "Washroom/Bathroom",
    price: 9.96,
    image: "stc-5l.jpg",
  },
  {
    name: "Thick Bleach 5L",
    description: "Bleach",
    code: "062392X5",
    category: "Washroom/Bathroom",
    price: 6.99,
    image: "thick-bleach-5l.jpg",
  },
  {
    name: "Thick Bleach 750ml",
    description: "Thick Bleach 750ml",
    code: "BLEACH750ML",
    category: "Washroom/Bathroom",
    price: 1.49,
    image: "thick-bleach-750ml.jpg",
  },
  {
    name: "Zakol - 1L",
    description: "Acidic Toilet Cleaner/Descaler",
    code: "501",
    category: "Washroom/Bathroom",
    price: 2.96,
    image: "zakol-1l.jpg",
  },
  {
    name: "Zakol - 5L",
    description: "Acidic Toilet Cleaner/Descaler",
    code: "501B",
    category: "Washroom/Bathroom",
    price: 10.42,
    image: "zakol-5l.jpg",
  },

  // Wipes
  {
    name: "Alcohol-free Clinical Wipes",
    description: "Sanitising wipes for hard surfaces tub x 200",
    code: "686",
    category: "Wipes",
    price: 4.43,
    image: "alcohol-free-clinical-wipes.jpg",
  },
  {
    name: "Cleenol Alcohol Wipes (200)",
    description: "Alcohol Wipes",
    code: "13646AW",
    category: "Wipes",
    price: 3.9,
    image: "cleenol-alcohol-wipes.jpg",
  },
  {
    name: "Cleenol Wipes FOOD SAFE (200)",
    description: "Food Safe Wipes",
    code: "RH94",
    category: "Wipes",
    price: 3.27,
    image: "cleenol-food-safe-wipes.jpg",
  },
  {
    name: "Disinfectant Surface Wipes",
    description: "Lemon Fresh Wipes x 60",
    code: "Disinfectwipes",
    category: "Wipes",
    price: 2.48,
    image: "disinfectant-surface-wipes.jpg",
  },
  {
    name: "VDU Wipes",
    description: "Screen Wipes",
    code: "RH95",
    category: "Wipes",
    price: 2.4,
    image: "vdu-wipes.jpg",
  },

  // Sacks
  {
    name: "Black Compactor Sacks",
    description: "Black Compactor Sacks (box 100, 559x850x1168mm)",
    code: "6010",
    category: "Sacks",
    price: 19.3,
    image: "black-compactor-sacks.jpg",
  },
  {
    name: "Black Sacks",
    description: "Sacks - Black Heavy Duty (200, 450x720x950mm)",
    code: "LD7080",
    category: "Sacks",
    price: 20.35,
    image: "black-sacks.jpg",
  },
  {
    name: "Clear Sacks- Medium Duty",
    description: 'PUMA Clear Sacks x 200, 18"x28"x37"',
    code: "7550",
    category: "Sacks",
    price: 21.72,
    image: "clear-sacks-medium.jpg",
  },
  {
    name: "HD Pedal Bin Liners",
    description: "Pedal Bin Liners, Heavy Duty (box 1000) 280x425x425",
    code: "HDPEDAL",
    category: "Sacks",
    price: 16.8,
    image: "hd-pedal-bin-liners.jpg",
  },
  {
    name: "HD Swing Bin Liners",
    description: "Swing Bin Liners, Heavy Duty (box 1000) 300x550x700m",
    code: "HDSWING 7533",
    category: "Sacks",
    price: 16.9,
    image: "hd-swing-bin-liners.jpg",
  },
  {
    name: "Mammoth Wheelie Bin Liners",
    description: "Black Wheelie Bin Liners (100, 760x1165x1370mm)",
    code: "7561",
    category: "Sacks",
    price: 24.85,
    image: "mammoth-wheelie-bin-liners.jpg",
  },
  {
    name: "Swing Bin Liners",
    description: "Liners - Swing Bin - Economy - 1000 (11000110), 300x550x700",
    code: "ECONSWING",
    category: "Sacks",
    price: 14.2,
    image: "swing-bin-liners.jpg",
  },

  // Polish & Glass
  {
    name: "Brite - 750ml",
    description: "Brite - 750ml",
    code: "701",
    category: "Polish & Glass",
    price: 3.98,
    image: "brite-window-cleaner.jpg",
  },
  {
    name: "Brite 5L",
    description: "Window, Mirror and Plastic Cleaner",
    code: "701",
    category: "Polish & Glass",
    price: 10.19,
    image: "brite-5l.jpg",
  },
  {
    name: "Dazzle - 750ml",
    description: "Stainless Steel Cleaner/Polish",
    code: "715",
    category: "Polish & Glass",
    price: 7.18,
    image: "dazzle-750ml.jpg",
  },
  {
    name: "Lambswool Duster",
    description: "Lambswool Duster",
    code: "101005",
    category: "Polish & Glass",
    price: 2.47,
    image: "lambswool-duster.jpg",
  },
  {
    name: "Orange Dusters",
    description: "Dusters",
    code: "700A.20.10",
    category: "Polish & Glass",
    price: 7.06,
    image: "orange-dusters.jpg",
  },
  {
    name: "Swift 5L",
    description: "Polish",
    code: "603",
    category: "Polish & Glass",
    price: 18.63,
    image: "swift-5l.jpg",
  },
  {
    name: "Swift- 750ml",
    description: "Clean & Shine Furniture Polish",
    code: "603",
    category: "Polish & Glass",
    price: 5.08,
    image: "swift-furniture-polish.jpg",
  },
  {
    name: "Yellow Dusters",
    description: "Dusters",
    code: "700S.14.10",
    category: "Polish & Glass",
    price: 3.35,
    image: "yellow-dusters.jpg",
  },

  // Napkins
  {
    name: "Black Cocktail Napkins 23cm 2ply",
    description: "Cocktail Napkins",
    code: "232BK",
    category: "Napkins",
    price: 3.7,
    image: "black-cocktail-napkins.jpg",
  },
  {
    name: "Napkins - Recycled 33cm 2 Ply",
    description: "Unbleached Recycled Premium Napkins - 33cm, 2 Ply - 2000",
    code: "513",
    category: "Napkins",
    price: 29.68,
    image: "napkins-recycled-33cm.jpg",
  },
  {
    name: "Napkins, 40cm, 2 ply white",
    description: "Napkins - 40cm 2 Ply White",
    code: "SPD1377",
    category: "Napkins",
    price: 36.46,
    image: "napkins-40cm-white.jpg",
  },

  // Tissue
  {
    name: "Luxury Cube Facial Tissues",
    description: "Cube Facial Tissues, 2 Ply, 24 packs x 70",
    code: "841103",
    category: "Tissue",
    price: 20.8,
    image: "luxury-cube-facial-tissues.jpg",
  },

  // Protective Wear
  {
    name: "Aprons blue (500)",
    description: "Disposable Aprons",
    code: "BAPRON",
    category: "Protective Wear",
    price: 40.32,
    image: "aprons-blue.jpg",
  },
  {
    name: "Blue Mesh Hairnets (100)",
    description: "Hairnets",
    code: "19310",
    category: "Protective Wear",
    price: 7.95,
    image: "blue-mesh-hairnets.jpg",
  },
  {
    name: "Mob Caps - Blue (100)",
    description: "Mob Caps - Blue (100)",
    code: "125B",
    category: "Protective Wear",
    price: 2.99,
    image: "mob-caps-blue.jpg",
  },
  {
    name: "Overshoes, Blue (100)",
    description: "Overshoes - Blue (100)",
    code: "7557",
    category: "Protective Wear",
    price: 3.12,
    image: "overshoes-blue.jpg",
  },
  {
    name: "Oversleeves - Blue (100)",
    description: "Oversleeves",
    code: "16210",
    category: "Protective Wear",
    price: 3.53,
    image: "oversleeves-blue.jpg",
  },

  // Covid
  {
    name: "Antiviral Spray Can 300ml",
    description: "Antiviral Spray",
    code: "V11",
    category: "Covid",
    price: 2.45,
    image: "antiviral-spray-can.jpg",
  },
  {
    name: "Antiviral Wipes Hycolin",
    description: "Antiviral Wipes",
    code: "ANTIWIPES",
    category: "Covid",
    price: 2.78,
    image: "antiviral-wipes-hycolin.jpg",
  },
  {
    name: "KN95 MASKS (Individual)",
    description: "Facemasks",
    code: "KN95",
    category: "Covid",
    price: 0.3,
    image: "kn95-masks.jpg",
  },
  {
    name: "PRO Type IIR Facemasks disposable",
    description: "Facemasks Type IIR, box of 50",
    code: "MASKS",
    category: "Covid",
    price: 2.65,
    image: "pro-type-iir-facemasks.jpg",
  },
  {
    name: "V7 Antiviral Hand Soap 500ml",
    description: "Hycolin Antiviral Hand Soap 500ml",
    code: "ANTISOAP",
    category: "Covid",
    price: 1.92,
    image: "v7-antiviral-hand-soap.jpg",
  },

  // Laundry
  {
    name: "Ariel Laundry Tablets",
    description: "Laundry Tablets",
    code: "ARIELLLATAB",
    category: "Laundry",
    price: 18.25,
    image: "ariel-laundry-tablets.jpg",
  },
  {
    name: "CrystalBrite Laundry Powder - Bio -10kg",
    description: "Laundry Powder - Bio - 10kg 100 washes",
    code: "31118",
    category: "Laundry",
    price: 22.47,
    image: "crystalbrite-bio-powder.jpg",
  },
  {
    name: "CrystalBrite Laundry Powder - Non Bio 10kg",
    description: "Laundry Powder - Non Bio -10kg 100 washes",
    code: "31107",
    category: "Laundry",
    price: 22.47,
    image: "crystalbrite-non-bio-powder.jpg",
  },
  {
    name: "Laundry Sanitiser - 5L",
    description: "Specialist Sanitiser Additive",
    code: "238",
    category: "Laundry",
    price: 50.04,
    image: "laundry-sanitiser.jpg",
  },
  {
    name: "Puriti Fabric Conditioner - 5L",
    description: "Liquid Fabric Conditioner",
    code: "421",
    category: "Laundry",
    price: 7.5,
    image: "puriti-fabric-conditioner.jpg",
  },
  {
    name: "Puriti Liquid Laundry Bio Detergent 5L",
    description: "Liquid Laundry Bio Detergent",
    code: "405",
    category: "Laundry",
    price: 18.29,
    image: "puriti-liquid-laundry-bio.jpg",
  },

  // Degreasers
  {
    name: "D1 1L",
    description: "Cleaner / Degreaser",
    code: "325",
    category: "Degreasers",
    price: 5.7,
    image: "d1-degreaser-1l.jpg",
  },
  {
    name: "DD10 - 5L",
    description: "Detergent Degreaser",
    code: "404",
    category: "Degreasers",
    price: 11.61,
    image: "dd10.jpg",
  },
  {
    name: "Finito 750ml",
    description: "Degreaser Cleaner, 750ml",
    code: "420",
    category: "Degreasers",
    price: 3.88,
    image: "finito-750ml.jpg",
  },
  {
    name: "UB10 - 2L",
    description: "Degreaser - Super Concentrate",
    code: "991",
    category: "Degreasers",
    price: 12.94,
    image: "ub10-2l.jpg",
  },
  {
    name: "Viro-Sol 5L",
    description: "Citrus Based Cleaner/Degreaser",
    code: "326",
    category: "Degreasers",
    price: 12.92,
    image: "viro-sol.jpg",
  },
  {
    name: "Viro-Sol RTU 750ml",
    description: "Powerful Cleaner & Degreaser",
    code: "382",
    category: "Degreasers",
    price: 3.46,
    image: "viro-sol-rtu.jpg",
  },

  // Interior- All purpose/Multi-purpose
  {
    name: "C1 1L",
    description: "Interior Cleaner",
    code: "381",
    category: "Interior- All purpose/Multi-purpose",
    price: 5.76,
    image: "c1-interior-cleaner-1l.jpg",
  },
  {
    name: "CleanIT 5L",
    description: "CleanIT Interior Cleaner, multi surface, 5L",
    code: "397",
    category: "Interior- All purpose/Multi-purpose",
    price: 6.68,
    image: "cleanit-interior-cleaner.jpg",
  },
  {
    name: "CleanIt 750ml",
    description: "Interior Cleaner (Ready to Use)",
    code: "497",
    category: "Interior- All purpose/Multi-purpose",
    price: 3.24,
    image: "cleanit-750ml.jpg",
  },
  {
    name: "Drastik - 750ml",
    description: "Mould & Mildew Remover",
    code: "252",
    category: "Interior- All purpose/Multi-purpose",
    price: 3.97,
    image: "drastik-750ml.jpg",
  },
  {
    name: "Lemon Cream Cleaner - 300ml",
    description: "Cream Cleaner",
    code: "431",
    category: "Interior- All purpose/Multi-purpose",
    price: 1.6,
    image: "lemon-cream-cleaner.jpg",
  },
  {
    name: "Spirit - 5L",
    description: "Fragrant Multi-Surface Cleaner",
    code: "350",
    category: "Interior- All purpose/Multi-purpose",
    price: 6.92,
    image: "spirit-5l.jpg",
  },
  {
    name: "Spirit - 750ml",
    description: "Fragrant Multi-Surface Cleaner",
    code: "450",
    category: "Interior- All purpose/Multi-purpose",
    price: 2.96,
    image: "spirit-multi-surface-cleaner.jpg",
  },
  {
    name: "Top It - 750ml",
    description: "Multi Surface Sanitising Cleaner",
    code: "244",
    category: "Interior- All purpose/Multi-purpose",
    price: 3.56,
    image: "top-it-750ml.jpg",
  },

  // Cloths and Towels
  {
    name: "Microfibre Cloth Blue (1)",
    description: "Microfibre Cloth Blue",
    code: "BMICROFIBRE",
    category: "Cloths and Towels",
    price: 0.45,
    image: "microfibre-cloth-blue.jpg",
  },
  {
    name: "Microfibre Cloth Green (1)",
    description: "Microfibre Cloth Green",
    code: "GMICROFIBRE",
    category: "Cloths and Towels",
    price: 0.45,
    image: "microfibre-cloth-green.jpg",
  },
  {
    name: "Microfibre Cloth Red (1)",
    description: "Microfibre Cloth Red",
    code: "RMICROFIBRE",
    category: "Cloths and Towels",
    price: 0.45,
    image: "microfibre-cloth-red.jpg",
  },
  {
    name: "Microfibre Cloth Yellow (1)",
    description: "Microfibre Cloth Yellow",
    code: "YMICROFIBRE",
    category: "Cloths and Towels",
    price: 0.45,
    image: "microfibre-cloth-yellow.jpg",
  },
  {
    name: "Microfibre Microglass Cloth, Large",
    description: "Glass Cloth 76x70cm, single",
    code: "101221",
    category: "Cloths and Towels",
    price: 3.94,
    image: "microfibre-microglass-cloth.jpg",
  },
  {
    name: "Velette Wipes- Blue",
    description: "Antibacterial Cloths - 25",
    code: "100245",
    category: "Cloths and Towels",
    price: 4.74,
    image: "velette-wipes-blue.jpg",
  },
  {
    name: "Velette Wipes- Green",
    description: "Antibacterial Cloths - 25",
    code: "100245",
    category: "Cloths and Towels",
    price: 4.74,
    image: "velette-wipes-green.jpg",
  },
  {
    name: "Velette Wipes- Red",
    description: "Antibacterial Cloths - 25",
    code: "100245",
    category: "Cloths and Towels",
    price: 4.74,
    image: "velette-wipes-red.jpg",
  },
  {
    name: "Velette Wipes- Yellow",
    description: "Antibacterial Cloths - 25",
    code: "100245",
    category: "Cloths and Towels",
    price: 4.74,
    image: "velette-wipes-yellow.jpg",
  },
]

/**
 * Normalizes a string for comparison by removing special characters,
 * converting to lowercase, and handling common variations
 */
function normalizeForMatching(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "") // Remove all special characters
    .replace(/litre|liter/g, "l") // Normalize liter variations
    .replace(/millilitre|milliliter|mls/g, "ml") // Normalize ml variations
}

/**
 * Extracts size information from a string (e.g., "5l", "750ml", "20l")
 */
function extractSize(str) {
  const sizeMatch = str.match(/(\d+(?:\.\d+)?)(ml|l)/i)
  return sizeMatch ? sizeMatch[0].toLowerCase() : null
}

/**
 * Helper function to get all products from all categories
 */
function getAllProducts() {
  const allProducts = []

  // Get products from business types
  Object.values(productsByBusinessType).forEach((businessType) => {
    if (businessType.essential) allProducts.push(...businessType.essential)
    if (businessType.recommended) allProducts.push(...businessType.recommended)
  })

  // Get products from all products array
  if (typeof allProductsCatalog !== "undefined") {
    allProducts.push(...allProductsCatalog)
  }

  // Remove duplicates based on product code
  const uniqueProducts = []
  const seenCodes = new Set()

  allProducts.forEach((product) => {
    if (!seenCodes.has(product.code)) {
      seenCodes.add(product.code)
      uniqueProducts.push(product)
    }
  })

  return uniqueProducts
}

// Initialize products page
document.addEventListener("DOMContentLoaded", () => {
  // Generate all products array
  generateAllProducts()

  // Initialize event listeners
  initializeEventListeners()

  // Load initial content
  switchIndustry(currentIndustry)
})

// Global state
let allProducts = []
let filteredProducts = []
let currentIndustry = "pubs-bars"
let currentTab = "by-industry"

// Declare variables
function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || null
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

const lucide = {
  createIcons: () => {
    // Placeholder for Lucide icon creation logic
  },
}

function generateAllProducts() {
  allProducts = []

  // Add products from business types
  Object.values(productsByBusinessType).forEach((businessType) => {
    allProducts.push(...businessType.essential, ...businessType.recommended)
  })

  allProducts.push(...allProductsCatalog)

  // Remove duplicates based on product code
  const uniqueProducts = []
  const seenCodes = new Set()

  allProducts.forEach((product) => {
    if (!seenCodes.has(product.code)) {
      seenCodes.add(product.code)
      uniqueProducts.push(product)
    }
  })

  allProducts = uniqueProducts
  filteredProducts = [...allProducts]
}

function initializeEventListeners() {
  // Tab switching
  document.getElementById("tab-by-industry").addEventListener("click", () => switchTab("by-industry"))
  document.getElementById("tab-all-products").addEventListener("click", () => switchTab("all-products"))

  // Industry tabs
  document.querySelectorAll(".industry-tab").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const industry = e.target.dataset.industry
      switchIndustry(industry)
    })
  })

  // Search functionality
  const searchInput = document.getElementById("product-search")
  if (searchInput) {
    searchInput.addEventListener("input", debounce(handleSearch, 300))
  }
}

function switchTab(tabName) {
  currentTab = tabName

  // Update tab buttons
  document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"))
  document.getElementById(`tab-${tabName}`).classList.add("active")

  // Show/hide content
  document.querySelectorAll(".tab-content").forEach((content) => content.classList.add("hidden"))
  document.getElementById(`${tabName}-content`).classList.remove("hidden")

  if (tabName === "all-products") {
    generateCategoryFilters()
    filterAllProducts()
  }
}

function switchIndustry(industry) {
  currentIndustry = industry

  // Update industry tabs
  document.querySelectorAll(".industry-tab").forEach((tab) => {
    tab.classList.remove("active", "bg-background", "text-foreground", "shadow-sm")
    tab.classList.add("hover:bg-background/50")
  })

  const activeTab = document.querySelector(`[data-industry="${industry}"]`)
  activeTab.classList.add("active", "bg-background", "text-foreground", "shadow-sm")
  activeTab.classList.remove("hover:bg-background/50")

  loadIndustryContent(industry)
}

function loadIndustryContent(industry) {
  const businessType = productsByBusinessType[industry]
  const container = document.getElementById("industry-content")

  container.innerHTML = `
        <div class="text-center mb-12">
            <h3 class="text-2xl font-light mb-4">${businessType.title}</h3>
            <p class="text-muted-foreground">${businessType.description}</p>
        </div>
        
        <div class="space-y-8">
            <div>
                <h4 class="text-xl font-medium mb-6 text-center">Essential Products</h4>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${businessType.essential.map((product) => createProductCard(product)).join("")}
                </div>
            </div>
            
            <div>
                <h4 class="text-xl font-medium mb-6 text-center">Recommended Products</h4>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${businessType.recommended.map((product) => createProductCard(product)).join("")}
                </div>
            </div>
        </div>
        
        
    `
}

function createProductCard(product) {
  const imageSrc = getProductImage(product)
  const imageHtml = `<div class="product-image-container mb-4">
        <img src="${imageSrc}" alt="${product.name}" class="product-image" 
             onerror="this.src='/placeholder.svg?height=200&width=200'">
    </div>`

  const priceHtml = product.price
    ? `<p class="text-sm font-medium text-primary mb-2">£${product.price.toFixed(2)}</p>`
    : ""

  return `
        <div class="product-card card p-6 hover:shadow-lg transition-shadow duration-300">
            ${imageHtml}
            <div class="flex justify-between items-start mb-3">
                <h4 class="text-lg font-medium text-balance">${product.name}</h4>
                <span class="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">${product.code}</span>
            </div>
            <p class="text-muted-foreground mb-2 leading-relaxed text-sm">${product.description}</p>
            ${priceHtml}
            <div class="flex justify-between items-center">
                <p class="text-xs text-muted-foreground">${product.category}</p>
            </div>
        </div>
    `
}

function generateCategoryFilters() {
  const categories = [...new Set(allProducts.map((product) => product.category))].sort()
  const container = document.getElementById("category-filters")

  // Clear existing filters to avoid duplicates if called multiple times
  container.innerHTML = ""

  // Add an "All Categories" button
  const allButton = document.createElement("button")
  allButton.className = "category-filter btn btn-outline btn-sm active bg-primary text-primary-foreground"
  allButton.dataset.category = ""
  allButton.textContent = "All Categories"
  allButton.addEventListener("click", () => filterByCategory(""))
  container.appendChild(allButton)

  categories.forEach((category) => {
    const button = document.createElement("button")
    button.className = "category-filter btn btn-outline btn-sm"
    button.dataset.category = category
    button.textContent = category
    button.addEventListener("click", () => filterByCategory(category))
    container.appendChild(button)
  })
}

function filterByCategory(category) {
  // Update active filter
  document.querySelectorAll(".category-filter").forEach((btn) => {
    btn.classList.remove("active", "bg-primary", "text-primary-foreground")
    btn.classList.add("btn-outline")
  })

  const activeBtn = document.querySelector(`[data-category="${category}"]`)
  activeBtn.classList.add("active", "bg-primary", "text-primary-foreground")
  activeBtn.classList.remove("btn-outline")

  filterAllProducts(category)
}

function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase()
  filterAllProducts(null, searchTerm)
}

function filterAllProducts(category = null, searchTerm = "") {
  const searchInput = document.getElementById("product-search")
  const currentSearch = searchTerm || (searchInput ? searchInput.value.toLowerCase() : "")
  const currentCategory =
    category !== null ? category : document.querySelector(".category-filter.active")?.dataset.category || ""

  filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      !currentSearch ||
      product.name.toLowerCase().includes(currentSearch) ||
      product.description.toLowerCase().includes(currentSearch) ||
      product.code.toLowerCase().includes(currentSearch)

    const matchesCategory = !currentCategory || product.category === currentCategory

    return matchesSearch && matchesCategory
  })

  updateProductsDisplay()
}

function updateProductsDisplay() {
  const container = document.getElementById("all-products-grid")
  const noProductsMessage = document.getElementById("no-products-message")
  const filteredCount = document.getElementById("filtered-count")
  const totalCount = document.getElementById("total-count")

  // Update counts
  filteredCount.textContent = filteredProducts.length
  totalCount.textContent = allProducts.length

  if (filteredProducts.length === 0) {
    container.innerHTML = ""
    noProductsMessage.classList.remove("hidden")
  } else {
    noProductsMessage.classList.add("hidden")
    container.innerHTML = filteredProducts.map((product) => createProductCard(product)).join("")
  }

  // Reinitialize Lucide icons
  lucide.createIcons()
}

function getProductImage(product) {
  if (product.image) {
    // Check if it's already a full path
    if (product.image.startsWith("/") || product.image.startsWith("http")) {
      return product.image
    } else if (product.image.startsWith("images/")) {
      // Already has images/ prefix, use as-is
      return product.image
    } else {
      // Add the relative images/ prefix to match index.html pattern
      return `images/${product.image}`
    }
  }

  // Fall back to placeholder
  return "/placeholder.svg?height=200&width=200"
}
