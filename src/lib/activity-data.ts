// ============================================================
// PLACEHOLDER CONTENT — Replace each activity's fields with
// official information, pricing, inclusions, and FAQs when ready.
// All prices are illustrative and MUST be updated before launch.
// ============================================================

import type { ActivityDetail, ActivityLocation, ActivityReview } from "@/types";

const mu = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Verified Mauritius Unsplash CDN IDs
const P = {
  underwaterWaterfall: "1513415563383-4e580ed27a46",
  paradisBCR:         "1513415277900-a62401e19be4",
  flatIsland:         "1686739996006-7c2cdff5d34c",
  flicEnFlac:         "1507187632231-5beb21a654a2",
  shangriLa:          "1582574643306-d00ea3f7d49b",
  leMorneMountain:    "1668265704484-b5f975f37610",
  leMorneAerial:      "1687977424023-83e3d3385131",
  leMorneResort:      "1650928367430-254e3e672dd9",
  belleMare:          "1738610612578-7c31a08c54b4",
  flicEnFlacCity:     "1651104677157-f14b80602682",
  coastForest:        "1509722156492-92fa997b78f5",
  catamaran:          "1647773090746-7d50ecb68b7a",
  waterfall:          "1586853211885-d69f5be5ce9f",
  rockyBeach:         "1707381997108-a21519a2b8eb",
  islandCoast:        "1690413994339-2b147e5129c8",
  dinarobinPalms:     "1537640685236-a9df2496e232",
  portLouis:          "1634972312739-d7237018e06a",
  greenCoast:         "1589745659208-9bdc6fb0ef23",
};

export const ACTIVITY_DETAILS: Record<string, ActivityDetail> = {

  "catamaran-cruise": {
    slug: "catamaran-cruise",
    name: "Catamaran Cruise",
    pageTitle: "Catamaran Cruise Mauritius",
    pageDescription: "Sail the turquoise lagoon on a luxury Mauritius catamaran cruise — snorkelling, BBQ lunch, open bar, and swimming in paradise. Book with MauTravel.",
    heroImage: mu(P.catamaran, 1920),
    heroSubtitle: "Set sail on a luxury catamaran through Mauritius's legendary turquoise lagoon, snorkel above vibrant coral reefs, swim in crystal-clear waters, and enjoy a freshly prepared barbecue lunch on board.",
    duration: "Half Day / Full Day",
    about: [
      // PLACEHOLDER — Replace with official tour operator description
      "A Mauritius catamaran cruise is the quintessential island experience — and with MauTravel, it becomes something truly special. Our hand-selected catamaran partners offer vessels that combine comfort, elegance, and adventure in equal measure.",
      "Departing from the west or south-west coast, your cruise glides through Mauritius's protected lagoon, passing by uninhabited islets and marine reserves. The water here is legendary — shades of turquoise, emerald and cobalt that photographs cannot fully capture.",
      "Highlights include snorkelling over the colourful coral reef, swimming in sheltered bays, and encountering marine life including sea turtles, tropical fish and — on full-day cruises — wild dolphins in their natural habitat. A freshly prepared barbecue lunch with salads, fresh fruit and drinks is served on board.",
    ],
    highlights: [
      { icon: "Clock",      label: "Duration",         value: "Half day (4h) or Full day (7h)" }, // PLACEHOLDER
      { icon: "MapPin",     label: "Departure point",  value: "West coast, Mauritius" },           // PLACEHOLDER
      { icon: "Users",      label: "Group size",       value: "Private or shared" },
      { icon: "Star",       label: "Minimum age",      value: "All ages welcome" },
      { icon: "UserCheck",  label: "Crew",             value: "Experienced on-board crew" },
      { icon: "Anchor",     label: "Includes",         value: "BBQ lunch & open bar" },            // PLACEHOLDER
    ],
    included: [
      "Catamaran cruise (half or full day)",
      "Snorkelling equipment",
      "Freshly prepared BBQ lunch (full day)",
      "Open bar (soft drinks, beer, rum punch)",
      "Life jackets and safety equipment",
      "Hotel transfers (on select departures)", // PLACEHOLDER
    ],
    notIncluded: [
      "Travel insurance",
      "Personal items (sunscreen, towel)",
      "Gratuities for crew",
      "Underwater photography equipment",
    ],
    gallery: [
      mu(P.catamaran),
      mu(P.flatIsland),
      mu(P.coastForest),
      mu(P.paradisBCR),
    ],
    pricing: [
      // PLACEHOLDER — All prices must be confirmed before launch
      {
        name: "Shared Half Day",
        price: "€XX per person",
        description: "Join a small group cruise — perfect for solo travellers and couples.",
        features: ["4-hour cruise", "Snorkelling included", "Soft drinks & snacks"],
      },
      {
        name: "Shared Full Day",
        price: "€XX per person",
        description: "The complete experience — including BBQ lunch, open bar and dolphin watching.",
        features: ["7-hour cruise", "BBQ lunch & open bar", "Dolphin watching stop", "Snorkelling"],
        popular: true,
      },
      {
        name: "Private Charter",
        price: "From €XXX",
        description: "The entire boat, exclusively for your group. Perfect for families and celebrations.",
        features: ["Exclusive vessel", "Custom itinerary", "Private crew", "Full catering", "Flexible departure"],
      },
    ],
    faqs: [
      { question: "Can non-swimmers join the catamaran cruise?", answer: "Absolutely. Life jackets are available for all guests and non-swimmers are very welcome. You can enjoy the boat, the scenery, and the food without entering the water." }, // PLACEHOLDER
      { question: "Is the cruise suitable for young children?", answer: "Yes, the cruise is family-friendly and suitable for children of all ages. Life jackets are provided for children and the crew ensures everyone's safety." }, // PLACEHOLDER
      { question: "What should I bring?", answer: "We recommend bringing sunscreen, a towel, sunglasses, a hat, and a change of clothes. Reef-safe sunscreen is preferred to protect the coral. All other equipment is provided." }, // PLACEHOLDER
      { question: "What if the sea is rough?", answer: "All departures are subject to sea conditions and captain's discretion. In the event of poor sea conditions, we will reschedule or offer a full refund." }, // PLACEHOLDER
      { question: "Can I book a sunset cruise?", answer: "Sunset cruises may be available on request depending on the season and departure point. Please contact us via WhatsApp and we'll check availability for your dates." }, // PLACEHOLDER
    ],
  },

  "dolphin-encounter": {
    slug: "dolphin-encounter",
    name: "Dolphin Encounter",
    pageTitle: "Dolphin Encounter Mauritius — Swim with Wild Dolphins",
    pageDescription: "Swim with wild dolphins in Tamarin Bay, Mauritius. An unforgettable ethical wildlife encounter in the warm Indian Ocean. Book with MauTravel.",
    heroImage: mu(P.coastForest, 1920),
    heroSubtitle: "Experience one of the most magical wildlife encounters in the Indian Ocean — swimming alongside pods of wild spinner dolphins in the warm, crystal-clear waters of Tamarin Bay.",
    duration: "2 – 4 hours",
    about: [
      // PLACEHOLDER — Replace with official tour operator description
      "Mauritius is one of very few places in the world where you can swim with wild dolphins in their natural habitat. Tamarin Bay on the west coast is home to resident pods of spinner dolphins, who gather in the bay during the early morning hours before heading out to sea.",
      "MauTravel's dolphin encounter is an ethical, respectful wildlife experience. We work exclusively with operators who follow strict guidelines to ensure minimal disturbance to the dolphins. Guests enter the water quietly and allow the dolphins to approach naturally — there is no chasing, no touching, and no captivity.",
      "The experience typically begins at dawn, when the dolphins are most active near shore. You'll travel by boat to find the pod, then gently slip into the water to observe and swim alongside them. It's a moment of pure magic that travellers describe as a life highlight.",
    ],
    highlights: [
      { icon: "Clock",      label: "Duration",         value: "2 – 4 hours" },              // PLACEHOLDER
      { icon: "MapPin",     label: "Location",         value: "Tamarin Bay, west coast" },   // PLACEHOLDER
      { icon: "Users",      label: "Group size",       value: "Small groups only" },
      { icon: "Sunrise",    label: "Best time",        value: "Early morning departure" },
      { icon: "Heart",      label: "Ethics",           value: "Wild & non-captive dolphins" },
      { icon: "Shield",     label: "Safety",           value: "Life jackets & safety briefing" },
    ],
    included: [
      "Boat transfer to dolphin location",
      "Snorkelling mask and fins",
      "Life jacket",
      "Guide and safety briefing",
      "Light refreshments on board", // PLACEHOLDER
    ],
    notIncluded: [
      "Hotel transfers (available on request)",
      "Professional underwater photography",
      "Travel insurance",
      "Wetsuit (rental available)", // PLACEHOLDER
    ],
    gallery: [
      mu(P.coastForest),
      mu(P.catamaran),
      mu(P.leMorneResort),
      mu(P.flatIsland),
    ],
    pricing: [
      // PLACEHOLDER — All prices must be confirmed before launch
      {
        name: "Standard",
        price: "€XX per person",
        description: "Join a small shared boat for the dolphin encounter experience.",
        features: ["Shared boat", "Snorkelling equipment", "Guide included"],
      },
      {
        name: "Family Pack",
        price: "€XXX (up to 4)",
        description: "A dedicated family boat for a more intimate experience.",
        features: ["Semi-private boat", "Family guide", "Child-friendly briefing", "Refreshments"],
        popular: true,
      },
      {
        name: "Private Charter",
        price: "From €XXX",
        description: "An exclusive private boat for your group — the ultimate dolphin experience.",
        features: ["Private boat & crew", "Flexible duration", "Snorkelling equipment", "Refreshments", "Photo opportunity"],
      },
    ],
    faqs: [
      { question: "Is it guaranteed we'll see dolphins?", answer: "While dolphins are resident in Tamarin Bay and sightings are very frequent, we cannot guarantee encounters as these are wild animals. In the rare event of no dolphin sighting, we'll discuss options including a partial refund or alternative activity." }, // PLACEHOLDER
      { question: "Can non-swimmers participate?", answer: "Non-swimmers can join the boat trip and observe from above the water, but will not be able to swim with the dolphins. Life jackets are provided for all guests on board." }, // PLACEHOLDER
      { question: "Is this suitable for children?", answer: "Yes, children aged 5 and above can participate. The experience is gentle and suitable for families. Children must be accompanied by an adult in the water." }, // PLACEHOLDER
      { question: "What time does the tour depart?", answer: "The tour typically departs at sunrise (around 6:00–7:00am) when dolphins are most active near shore. Exact departure times will be confirmed when you book." }, // PLACEHOLDER
      { question: "Are the dolphins wild or captive?", answer: "The dolphins are completely wild and free. We work only with ethical operators who respect the dolphins' natural behaviour. There is no feeding, no touching, and no captivity involved." }, // PLACEHOLDER
    ],
  },

  "underwater-walk": {
    slug: "underwater-walk",
    name: "Underwater Walk",
    pageTitle: "Underwater Walk Mauritius — Sea Walk Experience",
    pageDescription: "Walk on the seabed in Mauritius with a pressurised helmet — discover vibrant coral reefs and tropical fish. No swimming experience needed. Book with MauTravel.",
    heroImage: mu(P.rockyBeach, 1920),
    heroSubtitle: "Walk on the ocean floor and discover Mauritius's extraordinary underwater world — no diving experience needed. Simply descend in a pressurised helmet and meet the tropical fish face-to-face.",
    duration: "30 – 45 minutes",
    about: [
      // PLACEHOLDER — Replace with official tour operator description
      "The Underwater Walk — also known as a Sea Walk — is one of Mauritius's most unique and accessible water experiences. Unlike scuba diving, there's no training or swimming ability required. Guests of all ages and swimming abilities can participate.",
      "Wearing a specially designed pressurised helmet that maintains air at a comfortable level, you descend a short ladder into the warm, clear waters and walk gently on the sandy seabed. The world around you transforms — tropical fish, sea urchins, and vibrant coral formations surround you in a living aquarium.",
      "The descent is gradual and completely safe, accompanied by a professional underwater guide at all times. Most guests are amazed by how natural and comfortable the experience feels — many describe it as one of the highlights of their entire Mauritius holiday.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",          value: "30 – 45 minutes" },              // PLACEHOLDER
      { icon: "MapPin",    label: "Location",           value: "Blue Bay, south-east Mauritius" }, // PLACEHOLDER
      { icon: "Users",     label: "Min / Max age",      value: "8 – 60 years" },                  // PLACEHOLDER
      { icon: "Star",      label: "Swimming required",  value: "No swimming needed" },
      { icon: "UserCheck", label: "Guide",              value: "Certified underwater guide" },
      { icon: "Shield",    label: "Equipment",          value: "Pressurised safety helmet" },
    ],
    included: [
      "Pressurised underwater helmet",
      "Certified underwater guide",
      "Safety briefing before descent",
      "Underwater fish feeding",
      "Basic photos by guide",       // PLACEHOLDER
    ],
    notIncluded: [
      "Professional underwater photography package (available on request)",
      "Hotel transfers",
      "Travel insurance",
      "Wetsuit (not required — water is warm)",
    ],
    gallery: [],
    pricing: [
      // PLACEHOLDER — All prices must be confirmed before launch
      {
        name: "Standard",
        price: "€XX per person",
        description: "Individual sea walk with certified guide.",
        features: ["30–45 minute descent", "Guide included", "Safety equipment", "Fish feeding"],
      },
      {
        name: "With Photos",
        price: "€XX per person",
        description: "The same experience plus a professional underwater photo package.",
        features: ["30–45 minute descent", "Underwater photo set", "Digital delivery", "Guide included"],
        popular: true,
      },
      {
        name: "Family Pack",
        price: "€XXX (up to 4)",
        description: "A dedicated group descent for families — memorable for all ages.",
        features: ["Family group descent", "Dedicated guide", "Photo package", "Flexible timing"],
      },
    ],
    faqs: [
      { question: "Do I need to know how to swim?", answer: "No swimming ability is required. The underwater walk uses a pressurised helmet that keeps your head completely dry throughout the descent. You walk on the seabed rather than swimming." }, // PLACEHOLDER
      { question: "Is it suitable for people with claustrophobia?", answer: "The helmet is open at the bottom and you are always in a well-lit, open environment. However, if you have significant claustrophobia, we recommend discussing this with us before booking." }, // PLACEHOLDER
      { question: "Is it safe for older participants?", answer: "The sea walk is suitable for adults up to approximately 60 years. Guests with heart conditions, ear problems, or respiratory issues should consult their doctor before participating." }, // PLACEHOLDER
      { question: "How deep do we go underwater?", answer: "The descent is approximately 3–4 metres below the surface — deep enough to fully immerse you in the reef ecosystem while remaining safe and comfortable." }, // PLACEHOLDER
      { question: "Will we see tropical fish?", answer: "Yes — the sea walk site is located above a vibrant coral reef teeming with tropical fish, sea urchins, starfish and other marine life. Fish feeding is included to attract fish close to you." }, // PLACEHOLDER
    ],
  },

  "scuba-diving": {
    slug: "scuba-diving",
    name: "Scuba Diving",
    pageTitle: "Scuba Diving Mauritius — Explore World-Class Dive Sites",
    pageDescription: "Discover Mauritius's legendary dive sites — wrecks, reef walls and extraordinary marine life. Beginner to advanced. Book scuba diving with MauTravel.",
    heroImage: mu(P.flatIsland, 1920),
    heroSubtitle: "Explore one of the Indian Ocean's finest diving destinations — spectacular wrecks, vibrant reef walls, and extraordinary marine life in crystal-clear Mauritius waters.",
    duration: "1 – 3 hours",
    difficulty: "Beginner to Advanced",
    about: [
      // PLACEHOLDER — Replace with official tour operator description
      "Mauritius is a world-renowned scuba diving destination, offering a remarkable variety of dive sites suitable for every level of experience. From sheltered shallow reefs perfect for beginners to dramatic drop-offs and famous wrecks for advanced divers, the island's underwater landscape is endlessly rewarding.",
      "Our diving partners operate from multiple points around the island, giving access to Mauritius's best dive sites. The legendary Stella Maris wreck, the Cathedral dive site, and the world-class reefs of Flic en Flac are just a few of the extraordinary locations on offer.",
      "For non-certified divers, a Discover Scuba session allows you to experience the thrill of breathing underwater and exploring the reef for the first time — under the close supervision of a qualified PADI or SSI instructor. Certified divers can join guided dives at sites matched to their experience level.",
    ],
    highlights: [
      { icon: "Clock",      label: "Duration",        value: "1 – 3 hours per session" },          // PLACEHOLDER
      { icon: "MapPin",     label: "Dive sites",      value: "Multiple sites across Mauritius" },
      { icon: "Zap",        label: "Level",           value: "Beginner to Advanced" },
      { icon: "UserCheck",  label: "Instructors",     value: "PADI / SSI certified" },             // PLACEHOLDER
      { icon: "Star",       label: "Visibility",      value: "Up to 30m on good days" },           // PLACEHOLDER
      { icon: "Shield",     label: "Equipment",       value: "Full scuba gear provided" },
    ],
    included: [
      "Full scuba equipment (tank, BCD, regulator, wetsuit, mask, fins)",
      "Qualified dive instructor or guide",
      "Safety briefing and dive plan",
      "Boat transfer to dive site",
      "Post-dive refreshments",                                                           // PLACEHOLDER
    ],
    notIncluded: [
      "PADI / SSI certification course fees (if pursuing full certification)",
      "Underwater camera rental",
      "Travel insurance (strongly recommended)",
      "Hotel transfers",
    ],
    gallery: [
      mu(P.flatIsland),
      mu(P.underwaterWaterfall),
      mu(P.belleMare),
      mu(P.coastForest),
    ],
    pricing: [
      // PLACEHOLDER — All prices must be confirmed before launch
      {
        name: "Discover Scuba",
        price: "€XX per person",
        description: "Your first breath underwater — a supervised introduction for non-certified divers.",
        features: ["Shallow reef dive", "Full instructor supervision", "All equipment", "Safety briefing"],
      },
      {
        name: "Guided Fun Dive",
        price: "€XX per person",
        description: "For certified divers (OW or higher) — explore Mauritius's best dive sites.",
        features: ["Full dive site", "Certified dive guide", "All equipment", "Boat transfer"],
        popular: true,
      },
      {
        name: "Two-Tank Dive",
        price: "€XXX per person",
        description: "Two different dive sites in one day — perfect for enthusiasts.",
        features: ["Two guided dives", "Two sites", "Surface interval lunch", "All equipment"],
      },
    ],
    faqs: [
      { question: "Do I need a diving certificate?", answer: "Not for the Discover Scuba session, which is available to complete beginners (minimum age 10 years). For guided fun dives, you need an Open Water certification or equivalent from a recognised agency." }, // PLACEHOLDER
      { question: "What is the water temperature in Mauritius?", answer: "Water temperatures in Mauritius range from approximately 24°C in July/August to 29°C in January/February. A thin 3mm wetsuit is comfortable year-round." }, // PLACEHOLDER
      { question: "What is the maximum depth for the Discover Scuba session?", answer: "Discover Scuba dives are conducted in shallow water, typically to a maximum of 6–12 metres, under close instructor supervision." }, // PLACEHOLDER
      { question: "Can I dive if I have a medical condition?", answer: "Certain medical conditions may affect your ability to dive safely. You'll need to complete a medical declaration form before diving. Please consult your doctor if you have any concerns." }, // PLACEHOLDER
      { question: "What are the best dive sites in Mauritius?", answer: "Mauritius has exceptional dive sites around the island. Popular sites include the Stella Maris wreck, Cathedral, Shark Pit, and the reefs of Belle Mare and Trou aux Biches. Your guide will recommend the best site for your level and the day's conditions." }, // PLACEHOLDER
    ],
  },

  "parasailing": {
    slug: "parasailing",
    name: "Parasailing",
    pageTitle: "Parasailing Mauritius — Fly Above the Indian Ocean",
    pageDescription: "Soar high above Mauritius's stunning lagoon on a parasailing adventure. Solo, tandem or triple options available. Book with MauTravel.",
    heroImage: mu(P.paradisBCR, 1920),
    heroSubtitle: "Experience the thrill of flying high above the Indian Ocean, with breathtaking panoramic views of Mauritius's turquoise lagoon, white beaches and dramatic coastline stretching below you.",
    duration: "15 – 20 minutes",
    about: [
      // PLACEHOLDER — Replace with official tour operator description
      "Parasailing in Mauritius is an exhilarating experience that combines the thrill of flying with some of the most beautiful scenery in the Indian Ocean. Tethered safely to a modern parachute and towed by a professional motorboat, you'll lift gently off the water and ascend to heights of up to 150 metres.",
      "From your vantage point in the sky, the views are nothing short of spectacular — the varied blues and greens of the lagoon, the white ribbon of beach stretching in both directions, and the volcanic peaks of the island's interior rising behind you. It's a perspective of Mauritius that you'll never forget.",
      "Parasailing is available in solo, tandem (two people), and triple (three people) configurations, making it ideal for couples, families, and friends. The take-off and landing both happen from the boat, so you don't even need to get wet — a great option for non-swimmers.",
    ],
    highlights: [
      { icon: "Clock",     label: "Flight time",    value: "15 – 20 minutes airborne" },    // PLACEHOLDER
      { icon: "MapPin",    label: "Location",        value: "West coast, Mauritius" },        // PLACEHOLDER
      { icon: "Users",     label: "Options",         value: "Solo, Tandem or Triple" },
      { icon: "Star",      label: "Height",          value: "Up to 150 metres altitude" },   // PLACEHOLDER
      { icon: "Heart",     label: "Suitable for",    value: "Non-swimmers welcome" },
      { icon: "Shield",    label: "Safety",          value: "Modern harness & equipment" },
    ],
    included: [
      "Parasailing flight (15–20 minutes)",
      "Safety harness and life jacket",
      "Boat crew and professional operator",
      "Safety briefing before take-off",
    ],
    notIncluded: [
      "Hotel transfers",
      "Action camera rental",
      "Travel insurance",
      "Photos and videos (available on request)", // PLACEHOLDER
    ],
    gallery: [
      mu(P.paradisBCR),
      mu(P.flicEnFlacCity),
      mu(P.leMorneMountain),
      mu(P.leMorneResort),
    ],
    pricing: [
      // PLACEHOLDER — All prices must be confirmed before launch
      {
        name: "Solo",
        price: "€XX per person",
        description: "Take to the skies alone — full 15-minute solo flight.",
        features: ["Solo flight", "Safety harness", "Boat crew"],
      },
      {
        name: "Tandem",
        price: "€XX per person",
        description: "Fly together — perfect for couples and best friends.",
        features: ["Side-by-side flight", "Shared harness system", "Boat crew", "Photo opportunity"],
        popular: true,
      },
      {
        name: "Triple",
        price: "€XX per person",
        description: "Three up in the air at once — the most fun you'll have on holiday.",
        features: ["Triple flight configuration", "All safety equipment", "Longer ride time", "Ideal for families"],
      },
    ],
    faqs: [
      { question: "Do I need to be able to swim?", answer: "No swimming ability is required. Take-off and landing both take place from the boat — you don't need to enter the water. Life jackets are provided for all passengers." }, // PLACEHOLDER
      { question: "Is there a weight limit?", answer: "Yes, weight and age restrictions apply for safety reasons. Please contact us with your details and we'll confirm suitability before booking." }, // PLACEHOLDER
      { question: "Is it scary?", answer: "Most guests are surprised by how smooth and peaceful parasailing is. The ascent is gradual and the flight itself is quiet and serene. Many people say it's far less frightening than they expected!" }, // PLACEHOLDER
      { question: "Can I parasail if I'm pregnant?", answer: "Parasailing is not recommended for pregnant guests. Please contact us to discuss alternative activities." }, // PLACEHOLDER
      { question: "What should I wear?", answer: "Wear comfortable clothing and secure any loose items. Avoid flip-flops for safety reasons — closed shoes or bare feet are better. A change of clothes is useful as you may get splashed on the boat." }, // PLACEHOLDER
    ],
  },

  "quad-biking": {
    slug: "quad-biking",
    name: "Quad Biking",
    pageTitle: "Quad Biking Mauritius — Off-Road Adventure",
    pageDescription: "Explore Mauritius's rugged interior and sugarcane fields on an exhilarating quad bike adventure. All levels welcome. Book with MauTravel.",
    heroImage: mu(P.greenCoast, 1920),
    heroSubtitle: "Rev through Mauritius's dramatic volcanic terrain, lush sugarcane fields, and forest trails on an adrenaline-fuelled quad biking adventure designed for all levels of experience.",
    duration: "2 – 3 hours",
    about: [
      // PLACEHOLDER — Replace with official tour operator description
      "Quad biking in Mauritius takes you off the beaten track and into the island's dramatic interior — a side of Mauritius that most beach-goers never discover. Riding through sugarcane plantations, volcanic rock formations, and green mountain trails, you'll experience the island from a completely different perspective.",
      "All our quad biking partners use powerful, well-maintained automatic quads that are suitable for beginners and experienced riders alike. A brief safety and operational briefing is provided before departure, and guides lead every tour so you always have expert local knowledge alongside you.",
      "The routes pass through some of Mauritius's most spectacular inland scenery, with viewpoints offering panoramic vistas over the surrounding landscape. Depending on the package, routes may include stops at local farms, viewpoints, and naturally formed rock formations.",
    ],
    highlights: [
      { icon: "Clock",      label: "Duration",         value: "2 – 3 hours" },              // PLACEHOLDER
      { icon: "MapPin",     label: "Location",         value: "Black River area, Mauritius" }, // PLACEHOLDER
      { icon: "Zap",        label: "Level",            value: "Beginner to experienced" },
      { icon: "Users",      label: "Group size",       value: "Private & shared groups" },
      { icon: "UserCheck",  label: "Guide",            value: "Local expert guide" },
      { icon: "Shield",     label: "Equipment",        value: "Helmet & protective gear" },
    ],
    included: [
      "Quad bike rental",
      "Helmet and basic protective gear",
      "Safety and operational briefing",
      "Guided tour through scenic routes",
      "Light refreshments at viewpoint stop", // PLACEHOLDER
    ],
    notIncluded: [
      "Hotel transfers (available on request)",
      "Additional protective clothing",
      "Travel insurance",
      "Photos and video (available on request)", // PLACEHOLDER
    ],
    gallery: [
      mu(P.greenCoast),
      mu(P.waterfall),
      mu(P.dinarobinPalms),
      mu(P.islandCoast),
    ],
    pricing: [
      // PLACEHOLDER — All prices must be confirmed before launch
      {
        name: "Standard Tour (2 hours)",
        price: "€XX per person",
        description: "A 2-hour guided quad adventure through Mauritius's scenic interior.",
        features: ["2-hour tour", "Helmet & gear", "Local guide", "Scenic viewpoints"],
      },
      {
        name: "Extended Tour (3 hours)",
        price: "€XX per person",
        description: "More terrain, more viewpoints, and a refreshment break mid-tour.",
        features: ["3-hour tour", "Longer route", "Refreshment stop", "More viewpoints"],
        popular: true,
      },
      {
        name: "Sunset Quad",
        price: "€XX per person",
        description: "Time your ride to end with a spectacular Mauritius sunset.",
        features: ["Timed sunset route", "Panoramic viewpoint", "Sunset photo stop", "Evening atmosphere"],
      },
    ],
    faqs: [
      { question: "Do I need a driving licence?", answer: "A driving licence is not required for quad biking on private terrain. Our guides will provide a full operational briefing before departure. Minimum age restrictions apply." }, // PLACEHOLDER
      { question: "Is quad biking suitable for beginners?", answer: "Yes, all our quads are automatic (no gear changes required) and suitable for complete beginners. Our guide will lead at a pace that's comfortable for the group." }, // PLACEHOLDER
      { question: "What should I wear?", answer: "We recommend long trousers, closed shoes, and clothing you don't mind getting dusty. Helmets are provided. Light gloves are useful but not essential." }, // PLACEHOLDER
      { question: "Is it dusty or muddy?", answer: "Trails may be dusty in dry season and muddy in wet season. We recommend wearing clothes that can get dirty. Waterproof gear is useful in the rainy season (January–March)." }, // PLACEHOLDER
      { question: "Can I ride with a passenger?", answer: "Most of our quads are single-rider. Tandem (two-person) quads may be available on request. Please let us know when booking if you need a tandem option." }, // PLACEHOLDER
    ],
  },

  "ziplining": {
    slug: "ziplining",
    name: "Ziplining",
    pageTitle: "Ziplining Mauritius — Forest Canopy Adventure",
    pageDescription: "Glide through Mauritius's lush forest canopy on thrilling zip lines with panoramic island views. Book your ziplining adventure with MauTravel.",
    heroImage: mu(P.waterfall, 1920),
    heroSubtitle: "Soar through the lush tropical forest canopy of Mauritius on a series of thrilling zip lines — breathtaking views, towering trees, and the pure exhilaration of flight.",
    duration: "2 – 3 hours",
    about: [
      // PLACEHOLDER — Replace with official tour operator description
      "Ziplining in Mauritius combines natural beauty with adrenaline in a spectacular way. Launching from elevated platforms among ancient trees in the island's lush interior, you'll glide across multiple zip lines of varying lengths and heights, gaining stunning aerial views of the forest canopy and surrounding landscape.",
      "Our ziplining partner maintains a purpose-built circuit through certified forest terrain, with multiple lines offering different perspectives — some crossing valleys, others threading through the canopy level. Between lines, experienced guides share knowledge about Mauritius's unique flora and fauna.",
      "The circuit is designed to be enjoyed by a wide range of guests — from those seeking their first outdoor adventure to experienced thrill-seekers looking for an exciting way to explore the island. All safety equipment is provided and maintained to the highest international standards.",
    ],
    highlights: [
      { icon: "Clock",      label: "Duration",        value: "2 – 3 hours (full circuit)" }, // PLACEHOLDER
      { icon: "MapPin",     label: "Location",        value: "Black River Gorges area" },    // PLACEHOLDER
      { icon: "Zap",        label: "Thrill level",    value: "Moderate to high" },
      { icon: "Users",      label: "Min age",         value: "10 years (subject to weight)" }, // PLACEHOLDER
      { icon: "UserCheck",  label: "Guides",          value: "Certified zipline operators" },
      { icon: "Shield",     label: "Equipment",       value: "Harness, helmet & carabiner" },
    ],
    included: [
      "Full zipline circuit",
      "Safety harness, helmet and gloves",
      "Certified guide throughout",
      "Safety briefing before start",
      "Refreshments at mid-point stop",                                              // PLACEHOLDER
    ],
    notIncluded: [
      "Hotel transfers (available on request)",
      "Action camera or GoPro rental",
      "Travel insurance",
      "Gratuities for guides",
    ],
    gallery: [
      mu(P.waterfall),
      mu(P.greenCoast),
      mu(P.dinarobinPalms),
      mu(P.portLouis),
    ],
    pricing: [
      // PLACEHOLDER — All prices must be confirmed before launch
      {
        name: "Standard Circuit",
        price: "€XX per person",
        description: "The full zipline circuit through the Mauritius forest canopy.",
        features: ["Full circuit", "Safety equipment", "Guide", "Refreshment stop"],
      },
      {
        name: "Full Adventure",
        price: "€XX per person",
        description: "Extended circuit plus optional forest walk and viewpoint stop.",
        features: ["Extended circuit", "Forest walk", "Viewpoint stop", "Photo opportunities"],
        popular: true,
      },
      {
        name: "Private Group",
        price: "From €XXX (group)",
        description: "The circuit reserved exclusively for your group — ideal for families and teams.",
        features: ["Private circuit access", "Dedicated guides", "Flexible pace", "Group photos"],
      },
    ],
    faqs: [
      { question: "Is there a weight or height limit?", answer: "Yes, weight and age restrictions apply for safety reasons. Minimum and maximum weight limits are set by the operator. Please contact us with your details and we'll confirm eligibility before booking." }, // PLACEHOLDER
      { question: "Is ziplining scary?", answer: "The first line can feel daunting, but most guests quickly find it exhilarating rather than frightening. Our guides are experienced at supporting first-timers and will never rush you." }, // PLACEHOLDER
      { question: "What should I wear?", answer: "Wear comfortable, fitted clothing (nothing too loose), closed shoes with a good grip, and secure any long hair. You'll be provided with a helmet and harness. Avoid sandals or flip-flops." }, // PLACEHOLDER
      { question: "Is it suitable for people who are afraid of heights?", answer: "Some guests with a fear of heights find that the harness and platform structure make the experience manageable. However, if you have a severe phobia, we recommend discussing it with us before booking." }, // PLACEHOLDER
      { question: "Can I bring a camera?", answer: "Small, secure cameras and GoPros worn on a harness mount are welcome. Handheld cameras and phones are not permitted on the zip lines for safety reasons. Action camera mounts may be available to rent." }, // PLACEHOLDER
    ],
  },

  "paragliding": {
    slug: "paragliding",
    name: "Tandem Paragliding in Mauritius",
    pageTitle: "Tandem Paragliding Mauritius | MauTravel Tour Operator",
    pageDescription: "Soar above Mauritius on a tandem paragliding adventure with MauTravel. Four spectacular flying locations — Le Morne, Chamarel, Montagne Longue & Quatre Sœurs. From €170 per person. Certified professional pilots.",
    heroImage: "/activities/paragliding/card.jpeg",
    heroSubtitle: "Experience Mauritius from an entirely new perspective as you soar above mountains, lagoons, and breathtaking landscapes with a certified tandem paragliding pilot.",
    duration: "45 – 90 minutes (incl. briefing)",
    difficulty: "All levels — no experience needed",

    about: [
      "MauTravel's tandem paragliding experience offers one of the most extraordinary perspectives of Mauritius — drifting freely above volcanic peaks, forested valleys, and the endless turquoise expanse of the Indian Ocean. With four exceptional flying sites across the island, each flight reveals a different and equally breathtaking side of Mauritius that simply cannot be appreciated from the ground.",
      "From the dramatic central highlands of Montagne Longue and the east-coast splendour of Quatre Sœurs, to the forested ridges of Chamarel and the iconic lagoon of Le Morne — every location offers its own unique landscape and atmosphere. Your pilot selects the ideal take-off site on the day based on prevailing wind and weather conditions, ensuring the finest views and the safest possible flight for every guest.",
      "Tandem paragliding is entirely suitable for beginners — no previous experience is required. You are secured alongside a fully certified, experienced professional pilot throughout the entire flight, from take-off to landing. All flights begin with a thorough safety briefing and equipment check. Advance booking is strongly recommended to confirm your preferred date and receive personalised assistance from our team.",
    ],

    highlights: [
      { icon: "Clock",     label: "Duration",        value: "Approx. 45 – 90 min (incl. briefing)" },
      { icon: "UserCheck", label: "Tandem Pilot",    value: "Certified & experienced professional" },
      { icon: "MapPin",    label: "Flying Locations", value: "Le Morne, Chamarel & more" },
      { icon: "Users",     label: "Suitable For",    value: "All levels — beginners welcome" },
      { icon: "Shield",    label: "Safety",          value: "Full equipment & briefing provided" },
      { icon: "Sunrise",   label: "Season",          value: "Year-round, weather permitting" },
    ],

    locations: [
      {
        name: "Montagne Longue",
        subtitle: "Central Highlands Flying",
        walkTime: "~20-min walk to take-off",
        description: "Set within the central highlands of Mauritius, Montagne Longue offers an authentic inland mountain paragliding experience unlike any other on the island. A gentle 20-minute ascent to the take-off point rewards you with sweeping panoramas across volcanic ridges and lush green valleys stretching in every direction.",
        landmarks: [
          "Panoramic views of Gros Morne",
          "Dramatic mountain ridge scenery",
          "Potential extension toward Pieter Both (weather permitting)",
          "Unique inland highland flying experience",
        ],
        image: mu(P.leMorneAerial, 800),
      } as ActivityLocation,
      {
        name: "Quatre Sœurs",
        subtitle: "East Coast Adventure",
        walkTime: "20–30-min ascent",
        description: "Perched on the east coast of Mauritius, Quatre Sœurs delivers a spectacular combination of mountain grandeur and ocean panoramas. A 20–30-minute ascent to the launch site reveals breathtaking views across verdant valleys, rugged ridges, and the shimmering Indian Ocean coastline stretching to the horizon.",
        landmarks: [
          "Panoramic Indian Ocean vistas",
          "Views toward Les Chats et la Souris and Montagne Bambous",
          "Sweeping valleys and mountain ridge scenery",
          "Dramatic east coast coastal panoramas",
        ],
        image: mu(P.flatIsland, 800),
      } as ActivityLocation,
      {
        name: "Chamarel",
        subtitle: "Rugged Valley Scenery",
        walkTime: "~10-min walk to take-off",
        description: "Chamarel's rugged and richly forested landscape provides a stunning natural amphitheatre for paragliding. Just a 10-minute walk from the launch area, pilots and passengers take flight from one of Mauritius's most scenic regions — with forested mountain ridges gradually opening toward the sparkling west coast and the vast Indian Ocean beyond.",
        landmarks: [
          "Forested mountain and valley views",
          "Gradual reveal of the west coast and Indian Ocean",
          "Scenic Chamarel valley landscapes",
          "Classic Mauritius highland flying experience",
        ],
        image: mu(P.greenCoast, 800),
      } as ActivityLocation,
      {
        name: "Le Morne",
        subtitle: "Mauritius's Most Iconic Flight",
        walkTime: "~30-min ascent",
        description: "Le Morne is widely regarded as the most celebrated paragliding destination on the island. The 30-minute ascent to the take-off site culminates in one of Mauritius's most spectacular launches — with the legendary turquoise Le Morne lagoon spread out below, and the world-famous underwater waterfall illusion often visible from above on clear days.",
        landmarks: [
          "Breathtaking Le Morne lagoon and peninsula views",
          "The iconic underwater waterfall illusion (visible from above)",
          "Le Morne Brabant mountain scenery",
          "Turquoise lagoon meeting the open Indian Ocean",
        ],
        image: mu(P.underwaterWaterfall, 800),
      } as ActivityLocation,
    ],

    included: [
      "Certified professional tandem pilot",
      "Full pre-flight safety briefing",
      "Complete flight equipment (harness & helmet)",
      "Tandem paragliding flight (~15–25 minutes)",
      "Take-off location selected for best conditions",
      "Third-party liability insurance",
    ],

    notIncluded: [
      "Hotel transfers (available on request — please enquire)",
      "Personal travel insurance",
      "Food, beverages, and personal expenses",
      "Professional photo/video package (available separately upon request)",
      "Gratuities for your pilot (entirely at your discretion)",
    ],

    gallery: [
      "/activities/paragliding/pg-1.jpg",
      "/activities/paragliding/pg-2.jpg",
      "/activities/paragliding/pg-3.jpg",
      "/activities/paragliding/pg-4.jpg",
      "/activities/paragliding/pg-5.jpg",
      "/activities/paragliding/pg-6.jpg",
      "/activities/paragliding/pg-7.jpg",
      "/activities/paragliding/pg-8.jpg",
      "/activities/paragliding/pg-9.jpg",
    ],

    pricing: [
      {
        name: "Tandem Paragliding Flight",
        price: "€170",
        description: "Per person — all inclusive",
        popular: true,
        features: [
          "Certified professional tandem pilot",
          "Complete pre-flight safety briefing",
          "Full flight equipment (harness & helmet)",
          "Tandem paragliding flight (~15–25 minutes)",
          "Take-off location selected for optimal conditions",
          "Third-party liability insurance",
        ],
      },
    ],

    pricingNote: "€170 per participant. Flights are operated by certified professional tandem pilots. The final take-off location — Le Morne, Chamarel, Montagne Longue, or Quatre Sœurs — is selected on the day based on weather and wind conditions to ensure the safest and most enjoyable experience for every guest.",

    activityReviews: {
      note: "These reviews are from guests who experienced tandem paragliding with one of MauTravel's trusted local activity partners.",
      items: [
        {
          id: "r1",
          name: "Andrzej K",
          badge: "Local Guide · 24 Reviews · 844 Photos",
          date: "May 2026",
          rating: 5,
          text: "An unforgettable tandem paragliding experience. Bambam was incredibly professional, friendly and made me feel completely safe throughout the entire flight. Even after trying skydiving before, I can honestly say paragliding impressed me even more. Highly recommended.",
        },
        {
          id: "r2",
          name: "Dylan Seetaloo",
          badge: "Local Guide · 24 Reviews · 8 Photos",
          date: "May 2026",
          rating: 5,
          text: "This isn't just an activity — it's a memory you'll keep forever. The feeling of flying above Mauritius is impossible to describe. Absolutely breathtaking.",
        },
        {
          id: "r3",
          name: "Beedasy Zubair",
          badge: "1 Review · 2 Photos",
          date: "April 2026",
          rating: 5,
          text: "Everything was perfectly organised from beginning to end. The pilot made me feel comfortable and confident throughout the flight. Truly an unforgettable experience.",
        },
        {
          id: "r4",
          name: "Gosia Kieda",
          badge: "Local Guide · 59 Reviews · 285 Photos",
          date: "May 2026",
          rating: 5,
          text: "Although I'm afraid of heights, Bambam explained everything patiently and made me feel completely safe. Thanks to him I achieved something I never thought I'd do.",
        },
        {
          id: "r5",
          name: "Shaey Ma",
          badge: "1 Review",
          date: "June 2026",
          rating: 5,
          text: "I was nervous because of my fear of heights, but the team made me feel incredibly safe. Friendly, professional and unforgettable. I will definitely come back.",
        },
        {
          id: "r6",
          name: "Raza Guide",
          badge: "Local Guide · 20 Reviews · 130 Photos",
          date: "June 2026",
          rating: 5,
          text: "One of the best experiences I've had in Mauritius. Very professional, excellent guidance and breathtaking views. Definitely worth doing.",
        },
        {
          id: "r7",
          name: "Akash Seer",
          badge: "1 Review · 2 Photos",
          date: "April 2026",
          rating: 5,
          text: "The pilot immediately put me at ease. The views were spectacular and the flight was incredibly comfortable. Highly recommended.",
        },
        {
          id: "r8",
          name: "Aliyah Bheekhoo",
          badge: "1 Review · 1 Photo",
          date: "May 2026",
          rating: 5,
          text: "Best experience ever! Bambam was incredibly friendly and made me feel comfortable throughout the entire flight. Worth every euro.",
        },
        {
          id: "r9",
          name: "Esha Chokowry",
          badge: "2 Reviews",
          date: "April 2026",
          rating: 5,
          text: "One of the most unforgettable experiences of my life. Once you're in the air, all the fear disappears and you're left with complete peace and breathtaking views.",
        },
        {
          id: "r10",
          name: "Krishna Chakowry",
          badge: "Local Guide · 5 Reviews · 22 Photos",
          date: "April 2026",
          rating: 5,
          text: "Seeing Mauritius from a bird's-eye view was absolutely incredible. An experience I'll never forget.",
        },
        {
          id: "r11",
          name: "Sakeena Chokowry",
          badge: "1 Review",
          date: "April 2026",
          rating: 5,
          text: "Smooth, safe and beyond exciting. The pilot was professional from take-off to landing. I highly recommend this experience.",
        },
        {
          id: "r12",
          name: "Giacomo",
          badge: "Local Guide · 351 Reviews · 249 Photos",
          date: "May 2026",
          rating: 5,
          text: "Both my girlfriend and I enjoyed an incredible scenic flight. The team was welcoming, attentive and highly professional. The views over Mauritius were unforgettable.",
        },
        {
          id: "r13",
          name: "Anne-Sophie Saudel",
          badge: "1 Review · 2 Photos",
          date: "May 2026",
          rating: 5,
          text: "My first paragliding experience couldn't have been better. Professional, reassuring and unforgettable.",
        },
        {
          id: "r14",
          name: "Matthieu Gaubert",
          badge: "1 Review",
          date: "May 2026",
          rating: 5,
          text: "Despite changing weather conditions, the team remained professional and accommodating. A wonderful experience and a fantastic memory.",
        },
        {
          id: "r15",
          name: "Quentin Hemeury",
          badge: "5 Reviews · 1 Photo",
          date: "June 2026",
          rating: 5,
          text: "Flying above Quatre Sœurs during our honeymoon was unforgettable. Thomas was reassuring throughout the entire experience.",
        },
        {
          id: "r16",
          name: "Alina Bikteeva",
          badge: "2 Reviews · 7 Photos",
          date: "June 2026",
          rating: 5,
          text: "Flying from Le Morne was one of the highlights of our trip. Booking through WhatsApp was simple and the views of the lagoon and underwater waterfall were incredible.",
        },
        {
          id: "r17",
          name: "Sarah (S16)",
          badge: "5 Reviews · 1 Photo",
          date: "June 2026",
          rating: 5,
          text: "The best activity I experienced in Mauritius. The pilot understood exactly what I wanted to see and made the entire flight unforgettable.",
        },
      ] as ActivityReview[],
    },

    faqs: [
      {
        question: "Do I need previous paragliding experience?",
        answer: "No experience is required at all. Tandem paragliding means you fly secured in a harness alongside a certified professional pilot who manages every aspect of the flight — from launch to landing. Your only role is to relax, enjoy the views, and take it all in.",
      },
      {
        question: "Is tandem paragliding safe?",
        answer: "Tandem paragliding with MauTravel is conducted exclusively with fully certified, experienced professional pilots using regularly inspected and approved safety equipment. All flights are weather-dependent and will only proceed when conditions are assessed as safe by your pilot. Your safety is the absolute priority at every step.",
      },
      {
        question: "What should I wear and bring?",
        answer: "Wear comfortable, close-fitting clothing appropriate for the weather. Sturdy closed-toe shoes — trainers or walking shoes — are strongly recommended. Avoid scarves, loose layers, or flowing garments. Sunglasses with a secure strap and sunscreen are advisable. Your pilot will provide any additional pre-flight guidance.",
      },
      {
        question: "Can children participate?",
        answer: "Children may participate subject to minimum age, weight, and health requirements. We recommend contacting MauTravel directly via WhatsApp with your child's age and weight before booking so we can confirm eligibility and advise accordingly.",
      },
      {
        question: "How long is the total paragliding experience?",
        answer: "The complete experience — including the ascent to the take-off site, equipment fitting, safety briefing, and the flight itself — typically takes between 45 minutes and 2 hours depending on the location chosen. The actual paragliding flight lasts approximately 15–25 minutes.",
      },
      {
        question: "What happens if the weather is unsuitable on my booking date?",
        answer: "Your pilot and the MauTravel team monitor wind and weather conditions carefully ahead of every flight. If conditions are not suitable on your scheduled date, we will contact you promptly to reschedule to the next available date at no additional charge.",
      },
      {
        question: "Can I take my phone or camera during the flight?",
        answer: "We strongly recommend securing all personal belongings before take-off. Phones and cameras must be attached with a wrist strap or mounted on a secure harness. Your pilot will advise on what is safe to carry. A professional photo and video package may be available on request — please enquire when booking.",
      },
    ],
  },

  "hiking-adventures": {
    slug: "hiking-adventures",
    name: "Hiking Adventures",
    pageTitle: "Hiking in Mauritius — Guided Mountain & Trail Hikes",
    pageDescription: "Explore Mauritius's volcanic peaks and forest trails on expert-guided hikes. Le Morne, Pieter Both, Le Pouce, Lion Mountain and more. Book with MauTravel.",
    heroImage: "/activities/hiking-adventures/card.jpeg",
    heroSubtitle: "Conquer volcanic summits, traverse forested ridges, and discover sweeping panoramas of the Mauritian landscape on guided hikes suited to every level — from gentle walks to challenging peak ascents.",
    duration: "3 – 8 hours",
    difficulty: "All levels",
    about: [
      "Mauritius is far more than beaches — its volcanic interior is laced with dramatic mountain trails, dense forests, and viewpoints that reward the effort with unforgettable panoramas of turquoise lagoons and rolling sugarcane fields. MauTravel partners with expert local guides who know every trail intimately.",
      "Our hiking programme covers the full range of Mauritius's peaks and trails: the iconic UNESCO-listed Le Morne Brabant, the challenging rock scramble of Pieter Both, the accessible ridgeline of Le Pouce above Port Louis, and lesser-known gems like Piton Savanne, Tourelle du Tamarin and Montagne Cocotte. Each hike is tailored to your group's fitness level and interests.",
      "All hikes are led by certified, experienced guides who provide full equipment guidance, safety briefings, and fascinating insights into the island's geology, flora and fauna. Whether you're a first-time hiker or a seasoned trail runner, we have a route that will challenge and inspire you.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",      value: "3 – 8 hours depending on trail" },
      { icon: "MapPin",    label: "Trails",         value: "13 peaks & routes available" },
      { icon: "Users",     label: "Group size",     value: "Private groups (2–12 pax)" },
      { icon: "Zap",       label: "Difficulty",     value: "Easy to challenging" },
      { icon: "UserCheck", label: "Guide",          value: "Certified local mountain guide" },
      { icon: "Shield",    label: "Safety",         value: "Full safety briefing & equipment" },
    ],
    included: [
      "Certified local mountain guide",
      "Safety briefing and trail notes",
      "Bottled water throughout the hike",
      "Hotel pick-up and drop-off",
      "Light snack on longer hikes",
    ],
    notIncluded: [
      "Hiking boots (strongly recommended — rental available on request)",
      "Travel insurance",
      "Personal meals and additional drinks",
      "National park entry fees where applicable",
    ],
    gallery: [
      "/activities/hiking-adventures/ha-1.jpeg",
      "/activities/hiking-adventures/ha-2.jpeg",
      "/activities/hiking-adventures/ha-3.jpeg",
      "/activities/hiking-adventures/ha-4.jpeg",
      "/activities/hiking-adventures/ha-5.jpeg",
      "/activities/hiking-adventures/ha-6.jpeg",
      "/activities/hiking-adventures/ha-7.jpeg",
      "/activities/hiking-adventures/ha-8.jpeg",
      "/activities/hiking-adventures/ha-9.jpeg",
      "/activities/hiking-adventures/ha-10.jpeg",
      "/activities/hiking-adventures/ha-11.jpeg",
    ],
    pricing: [
      {
        name: "Half Day Hike",
        price: "Contact for price",
        description: "A 3–4 hour guided hike on one of our shorter routes such as Le Pouce or Corps de Garde.",
        features: ["Certified guide", "Water included", "Hotel transfers", "Trail briefing"],
      },
      {
        name: "Full Day Hike",
        price: "Contact for price",
        description: "A 6–8 hour guided ascent of a major peak — Le Morne, Pieter Both or Piton de la Petite Rivière Noire.",
        features: ["All half-day inclusions", "Packed lunch", "Summit certificate", "Extended guide support"],
        popular: true,
      },
      {
        name: "Private Group Package",
        price: "Contact for price",
        description: "Exclusive guided hiking for your group — choose your peak and we build a custom day around your abilities.",
        features: ["Custom route planning", "Private guide", "Full day or half day", "Flexible pace", "Group transfers"],
      },
    ],
    faqs: [
      { question: "Do I need prior hiking experience?", answer: "Not at all. We offer routes graded from beginner-friendly (Le Pouce, Signal Mountain) to challenging technical ascents (Pieter Both, Piton de la Petite Rivière Noire). Tell us your fitness level when booking and we'll match you to the perfect trail." },
      { question: "What should I wear and bring?", answer: "We recommend lightweight, breathable clothing, sturdy closed-toe shoes or hiking boots, a hat, sunscreen, and a small daypack. We provide water but suggest bringing extra snacks. A full kit list is sent upon booking confirmation." },
      { question: "Is Le Morne suitable for beginners?", answer: "The lower section of Le Morne Brabant is accessible to reasonably fit beginners. The upper section involves some scrambling and is recommended for those comfortable with heights and uneven terrain. Your guide will advise on the day based on conditions and your group's ability." },
      { question: "What is the best time of year for hiking in Mauritius?", answer: "The cooler, drier months of May to November are ideal for hiking. Trails can be slippery during the wet season (December to April) and some routes may be temporarily closed after heavy rain. We monitor conditions daily and will advise if a route needs to be adjusted." },
      { question: "How fit do I need to be for the full-day hikes?", answer: "Full-day hikes to major peaks such as Pieter Both or Le Morne Brabant require a good level of fitness and comfortable walking for 5–7 hours. If you are unsure, start with a half-day hike to assess your stamina, or contact us to discuss your fitness level before booking." },
    ],
  },

  "waterfalls-river-treks": {
    slug: "waterfalls-river-treks",
    name: "Waterfalls & River Treks",
    pageTitle: "Waterfall Hikes & River Treks Mauritius",
    pageDescription: "Discover Mauritius's hidden waterfalls and jungle river treks — Tamarind Falls, Rochester Falls, 500ft Waterfall and more. Guided adventures with MauTravel.",
    heroImage: "/activities/waterfall-river-treks/card.jpeg",
    heroSubtitle: "Follow wild rivers through tropical gorges, swim beneath thundering cascades, and discover the hidden natural wonders of Mauritius's lush interior — experiences that no beach excursion can match.",
    duration: "3 – 7 hours",
    difficulty: "Moderate",
    about: [
      "Mauritius hides some of the Indian Ocean's most spectacular waterfalls and river gorges deep within its volcanic interior. MauTravel's waterfall and river trek experiences take you off the tourist trail and into landscapes of extraordinary natural beauty — thick jungle canopy, volcanic rock formations, and crystal-clear freshwater pools.",
      "The undisputed highlight of any waterfall itinerary is the Tamarind Falls — also known as the 7 Cascades — a series of seven magnificent waterfalls cascading through a steep, forested gorge in the Tamarin area. Other unmissable destinations include the dramatically flat ledge of Rochester Falls, the powerful 500ft Waterfall, the tranquil Alexandra Falls, and the serene Eau Bleue and Léon waterfalls tucked away in the island's southern highlands.",
      "Every trek is led by experienced local guides who know the safest river crossings, the best swimming pools, and the hidden viewpoints that make each journey unique. These are genuine wilderness experiences — not tourist paths — so you can expect mud, water, and memories that last a lifetime.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",     value: "3 – 7 hours depending on route" },
      { icon: "MapPin",    label: "Locations",    value: "Multiple sites across Mauritius" },
      { icon: "Users",     label: "Group size",   value: "Private groups (2–10 pax)" },
      { icon: "Zap",       label: "Difficulty",   value: "Moderate — some river crossings" },
      { icon: "UserCheck", label: "Guide",        value: "Experienced local trail guide" },
      { icon: "Shield",    label: "Safety",       value: "Safety briefing & proper footwear required" },
    ],
    included: [
      "Certified local guide",
      "Safety briefing and route notes",
      "Bottled water throughout",
      "Hotel transfers",
      "Swimming stop at waterfalls",
    ],
    notIncluded: [
      "Water shoes or trekking sandals (essential — rental available)",
      "Change of clothing for after swimming",
      "Travel insurance",
      "Personal snacks and meals",
    ],
    gallery: [
      "/activities/waterfall-river-treks/wf-1.jpg",
      "/activities/waterfall-river-treks/wf-2.jpg",
      "/activities/waterfall-river-treks/wf-3.jpg",
      "/activities/waterfall-river-treks/wf-4.jpg",
      "/activities/waterfall-river-treks/wf-5.jpg",
      "/activities/waterfall-river-treks/wf-6.jpg",
      "/activities/waterfall-river-treks/wf-7.jpg",
      "/activities/waterfall-river-treks/wf-8.jpg",
      "/activities/waterfall-river-treks/wf-9.jpg",
      "/activities/waterfall-river-treks/wf-10.jpg",
      "/activities/waterfall-river-treks/wf-11.jpg",
      "/activities/waterfall-river-treks/wf-12.jpg",
      "/activities/waterfall-river-treks/wf-13.jpg",
      "/activities/waterfall-river-treks/wf-14.jpg",
      "/activities/waterfall-river-treks/wf-15.jpg",
      "/activities/waterfall-river-treks/wf-16.jpg",
      "/activities/waterfall-river-treks/wf-17.jpg",
      "/activities/waterfall-river-treks/wf-18.jpg",
    ],
    pricing: [
      {
        name: "Single Waterfall Trek",
        price: "Contact for price",
        description: "A half-day guided trek to one major waterfall with swimming — perfect for families or those short on time.",
        features: ["Certified guide", "Water & transfers", "Swimming stop", "3–4 hours"],
      },
      {
        name: "Tamarind 7 Cascades",
        price: "Contact for price",
        description: "The signature waterfall experience — a full traverse of all seven cascades in the Tamarin gorge.",
        features: ["7 waterfall traverse", "Full day guided", "Multiple swims", "Packed lunch", "Private group"],
        popular: true,
      },
      {
        name: "Multi-Waterfall Day",
        price: "Contact for price",
        description: "Visit two or three different waterfall sites in one day for the ultimate Mauritius waterfall experience.",
        features: ["2–3 waterfall sites", "Custom routing", "Private vehicle", "Full day", "Lunch included"],
      },
    ],
    faqs: [
      { question: "How difficult are the river treks?", answer: "Most waterfall treks are rated moderate — they involve walking on uneven terrain, crossing streams, and scrambling over rocks. Participants should be reasonably fit and comfortable on rough ground. We do not recommend these treks for guests with serious mobility issues." },
      { question: "What footwear should I wear?", answer: "Water shoes or sturdy trekking sandals with grip are essential. Regular trainers are not suitable as they will get wet and can become slippery. If you don't have suitable footwear, please let us know and we can advise on rental options." },
      { question: "Is it safe to swim in the waterfalls?", answer: "Yes — we only swim at locations that our guides have assessed as safe. We avoid swimming during or immediately after heavy rainfall when currents can be stronger. Your guide will assess conditions on the day and make the final decision on swimming." },
      { question: "Can children participate?", answer: "Children aged 8 and above can join most waterfall treks with a parent or guardian. Some more challenging routes are adult-only. Please advise us of children's ages when booking so we can recommend the most suitable experience." },
      { question: "What is the best waterfall to visit in Mauritius?", answer: "Tamarind Falls (7 Cascades) is widely considered the most spectacular and is our most popular trek. Rochester Falls is the easiest and most accessible, making it great for families. The 500ft Waterfall offers the most dramatic single cascade. We can recommend the best option for your group." },
    ],
  },

  "water-activities": {
    slug: "water-activities",
    name: "Water Activities",
    pageTitle: "Water Activities Mauritius — Dolphin & Whale Watching",
    pageDescription: "Explore Mauritius by water — dolphin watching and whale watching in the Indian Ocean. Unforgettable ethical wildlife encounters with MauTravel.",
    heroImage: mu(P.catamaran, 1920),
    heroSubtitle: "Sail alongside wild spinner dolphins in Tamarin Bay, or witness majestic humpback whales passing through the warm waters of the Indian Ocean on a dedicated wildlife excursion.",
    duration: "3 – 6 hours",
    about: [
      "The waters surrounding Mauritius offer some of the most rewarding marine wildlife encounters in the Indian Ocean. MauTravel's water activity programme gives you access to experiences most visitors never find — sailing with wild dolphins and witnessing humpback whales in their natural ocean habitat.",
      "For wildlife encounters, few experiences match sailing alongside a pod of wild spinner dolphins as they surf the bow wave of your boat, or witnessing a humpback whale breach in the open ocean during the August–November migration season. All wildlife encounters are conducted ethically with minimal disturbance to the animals.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",     value: "3 – 6 hours depending on activity" },
      { icon: "MapPin",    label: "Locations",    value: "West coast & open ocean" },
      { icon: "Users",     label: "Group size",   value: "Small groups & private options" },
      { icon: "Star",      label: "Season",       value: "Whale watching: Aug – Nov" },
      { icon: "Heart",     label: "Ethics",       value: "Responsible wildlife encounters" },
      { icon: "Shield",    label: "Safety",       value: "Life jackets & certified guides" },
    ],
    included: [
      "Certified guide or boat captain",
      "Safety equipment and life jackets",
      "Light refreshments on board",
      "Hotel transfers on most departures",
    ],
    notIncluded: [
      "Wetsuit (not required — water is warm)",
      "Professional photography",
      "Travel insurance",
      "Personal items (sunscreen, towel)",
    ],
    gallery: [
      mu(P.catamaran),
      mu(P.coastForest),
      mu(P.flatIsland),
      mu(P.paradisBCR),
    ],
    pricing: [
      {
        name: "Dolphin Watching",
        price: "Contact for price",
        description: "Sail to Tamarin Bay to observe and swim alongside wild spinner dolphins in their natural habitat.",
        features: ["Shared or private boat", "Certified guide", "Snorkelling equipment", "Ethical wildlife experience"],
        popular: true,
      },
      {
        name: "Whale Watching",
        price: "Contact for price",
        description: "A specialist ocean excursion to spot humpback whales during their annual Indian Ocean migration.",
        features: ["Seasonal (Aug–Nov)", "Private charter boat", "Marine biologist guide", "Open ocean experience"],
      },
    ],
    faqs: [
      { question: "Is dolphin watching guaranteed?", answer: "Spinner dolphins are resident in Tamarin Bay and sightings are very frequent year-round. However, as with all wild animals, encounters cannot be guaranteed. In the rare event of no sighting, we will discuss options including a partial refund or alternative experience." },
      { question: "When is the best time for whale watching in Mauritius?", answer: "Humpback whales pass through Mauritian waters between approximately August and November as part of their annual migration. The peak window is typically September and October. Outside of this season, whale sightings are not possible." },
      { question: "Are these activities suitable for non-swimmers?", answer: "For dolphin watching, life jackets are provided and non-swimmers can observe from the boat. Whale watching is conducted entirely from the boat so swimming ability is not required." },
      { question: "Can children participate?", answer: "Yes. Dolphin watching is suitable for all ages. Whale watching is suitable for children aged 5 and above. All children must be accompanied by an adult." },
    ],
  },

  "lava-tube-adventure": {
    slug: "lava-tube-adventure",
    name: "Lava Tube Adventure",
    pageTitle: "Lava Tube Adventure Mauritius — Roches Noires Underground Caves",
    pageDescription: "Explore ancient volcanic lava tubes at Roches Noires, Mauritius. A unique underground adventure through geological formations millions of years old. Book with MauTravel.",
    heroImage: mu(P.rockyBeach, 1920),
    heroSubtitle: "Descend into the ancient volcanic underworld of Mauritius and explore lava tubes carved by molten rock millions of years ago — a rare and otherworldly adventure unlike anything else on the island.",
    duration: "2 – 3 hours",
    difficulty: "Moderate",
    about: [
      "Beneath the surface of Mauritius lies a hidden geological world formed by volcanic activity millions of years ago. The lava tubes at Roches Noires on the north-east coast are one of the island's best-kept secrets — underground tunnels and chambers created when the outer shell of flowing lava solidified while molten rock continued to flow beneath, eventually draining to leave hollow tubes in the rock.",
      "Exploring these lava tubes is a truly unique experience. You'll descend into chambers of extraordinary geological formations — lava stalactites, ancient flow marks, volcanic rock walls in striking textures and colours — all formed long before human life reached this island. The experience combines geology, history, and genuine exploration in a way no other Mauritius activity can match.",
      "The adventure is led by specialist local guides with deep knowledge of Mauritius's volcanic geology. Group sizes are kept small to preserve the integrity of these fragile formations and to ensure every guest has a genuinely immersive experience. Torches and helmets are provided.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",    value: "2 – 3 hours" },
      { icon: "MapPin",    label: "Location",    value: "Roches Noires, north-east Mauritius" },
      { icon: "Users",     label: "Group size",  value: "Max 8 per group" },
      { icon: "Zap",       label: "Difficulty",  value: "Moderate — some low passages" },
      { icon: "UserCheck", label: "Guide",       value: "Specialist geology guide" },
      { icon: "Shield",    label: "Equipment",   value: "Helmet & torch provided" },
    ],
    included: [
      "Specialist local guide",
      "Safety helmet and head torch",
      "Full safety briefing before entry",
      "Hotel transfers",
      "Geological commentary throughout",
    ],
    notIncluded: [
      "Closed-toe shoes (essential — sandals not permitted)",
      "Old clothes recommended (caves can be dusty/muddy)",
      "Travel insurance",
      "Professional photography equipment",
    ],
    gallery: [
      mu(P.rockyBeach),
      mu(P.leMorneMountain),
      mu(P.greenCoast),
      mu(P.coastForest),
    ],
    pricing: [
      {
        name: "Standard Lava Tube Tour",
        price: "Contact for price",
        description: "A guided exploration of the main lava tube chambers with full geological commentary.",
        features: ["Specialist guide", "Helmet & torch", "2 hour exploration", "Hotel transfers"],
      },
      {
        name: "Extended Exploration",
        price: "Contact for price",
        description: "A deeper, longer exploration covering additional chambers and passages for the more adventurous.",
        features: ["All standard inclusions", "Extended route", "Additional chambers", "Photography opportunities"],
        popular: true,
      },
      {
        name: "Private Group",
        price: "Contact for price",
        description: "An exclusive private tour for your group — ideal for families, couples or small parties.",
        features: ["Private guide", "Flexible timing", "Custom pace", "Extended commentary", "Maximum 8 guests"],
      },
    ],
    faqs: [
      { question: "Is the lava tube suitable for claustrophobic guests?", answer: "Some passages within the lava tubes are low and narrow. If you experience significant claustrophobia, we recommend discussing this with us before booking. Your guide can advise on which sections can be bypassed. Many guests who consider themselves mildly claustrophobic find the experience entirely manageable." },
      { question: "What should I wear?", answer: "Wear old, comfortable clothing that you don't mind getting dirty. Closed-toe shoes with grip are essential — sandals and open shoes are not permitted for safety reasons. The temperature inside the tubes is cooler than outside, so a light layer is recommended." },
      { question: "Is it suitable for children?", answer: "Children aged 10 and above can participate with a parent or guardian. Younger children are generally not permitted due to the low passages and the physical demands of the exploration. All children must be accompanied by an adult." },
      { question: "How physically demanding is the tour?", answer: "The lava tube tour requires ducking through low passages, stepping over uneven rock surfaces, and occasional crawling. A moderate level of fitness and flexibility is recommended. The tour is not suitable for guests with serious back, knee, or joint conditions." },
      { question: "Can I take photographs inside the lava tubes?", answer: "Yes, photography is welcome. Smartphones and compact cameras work well inside the tubes. Additional lighting equipment can be arranged on request. Please take care not to touch or damage any geological formations when positioning for photographs." },
    ],
  },

  "7-caves-exploration": {
    slug: "7-caves-exploration",
    name: "7 Caves Exploration",
    pageTitle: "7 Caves Exploration Mauritius | Volcanic Lava Tube Adventure | MauTravel",
    pageDescription: "Discover the hidden volcanic lava tubes of Mauritius on a guided 7 Caves Exploration. Journey through ancient underground chambers, spectacular rock formations and geological wonders. Book with MauTravel.",
    heroImage: "/activities/7-caves-exploration/card.jpeg",
    heroSubtitle: "Journey beneath the surface and discover the hidden volcanic world of Mauritius — ancient lava tubes, dramatic underground chambers, and geological wonders that most visitors never see.",
    duration: "3 – 4 hours",
    difficulty: "Easy to Moderate",
    about: [
      "Beneath the lush surface of Mauritius lies a geological underworld of extraordinary beauty. Formed millions of years ago during periods of intense volcanic activity, the island's lava tubes are among its most remarkable and least-known natural treasures. The 7 Caves Exploration takes you deep into this hidden world — a series of interconnected volcanic tunnels and chambers that wind through ancient rock formations shaped by rivers of molten lava long before human eyes ever saw them.",
      "Walking through these underground passages is a genuinely immersive experience. The cave walls reveal layer upon layer of volcanic history — smooth lava flows, dramatic stalactite formations, and rock textures in striking shades of black, red and ochre. Your expert local guide brings the geology to life, explaining how each chamber was formed and what it tells us about the volcanic origins of the island. It is a rare opportunity to understand Mauritius not just as a tropical paradise, but as a place of extraordinary geological significance.",
      "The 7 Caves Exploration is designed to be accessible to a wide range of guests — no previous caving or climbing experience is required. The pace is relaxed and the route is carefully chosen to balance discovery with safety. Whether you are a curious family, a couple seeking something beyond the beach, or a dedicated nature lover, this underground adventure will be one of the most memorable and unexpected highlights of your time in Mauritius.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",    value: "3 – 4 hours" },
      { icon: "MapPin",    label: "Location",    value: "North-East Mauritius" },
      { icon: "Users",     label: "Group size",  value: "Small private groups" },
      { icon: "Zap",       label: "Difficulty",  value: "Easy to Moderate" },
      { icon: "UserCheck", label: "Guide",       value: "Expert local geologist guide" },
      { icon: "Shield",    label: "Safety",      value: "Full briefing & equipment" },
    ],
    included: [
      "Expert local guide with geological knowledge",
      "Full safety briefing before entry",
      "Safety helmet and head torch",
      "Geological commentary throughout",
      "Photography assistance",
      "Hotel transfers (available on request)",
    ],
    notIncluded: [
      "Closed-toe shoes (essential — sandals not permitted)",
      "Travel insurance (strongly recommended)",
      "Personal food and drinks",
      "Professional photography equipment",
    ],
    gallery: [
      "/activities/7-caves-exploration/sc-1.jpeg",
      "/activities/7-caves-exploration/sc-2.jpeg",
      "/activities/7-caves-exploration/sc-3.jpeg",
      "/activities/7-caves-exploration/sc-4.jpeg",
      "/activities/7-caves-exploration/sc-5.jpeg",
      "/activities/7-caves-exploration/sc-6.jpeg",
      "/activities/7-caves-exploration/sc-7.jpeg",
      "/activities/7-caves-exploration/sc-8.jpeg",
      "/activities/7-caves-exploration/sc-9.jpeg",
      "/activities/7-caves-exploration/sc-10.jpeg",
      "/activities/7-caves-exploration/sc-11.jpeg",
      "/activities/7-caves-exploration/sc-12.jpeg",
      "/activities/7-caves-exploration/sc-13.jpeg",
      "/activities/7-caves-exploration/sc-14.jpeg",
    ],
    pricing: [
      {
        name: "Guided Cave Exploration",
        price: "Contact for price",
        description: "A fully guided 3–4 hour exploration of all 7 volcanic caves with expert geological commentary.",
        features: ["Expert guide", "Safety helmet & torch", "All 7 caves", "Photography stops", "Geological insights"],
        popular: true,
      },
      {
        name: "Private Group Tour",
        price: "Contact for price",
        description: "An exclusive private exploration for your group — ideal for families, couples and small parties.",
        features: ["Private guide", "Flexible pace", "Custom photography stops", "Dedicated group experience", "Hotel transfers"],
      },
    ],
    faqs: [
      {
        question: "Is the cave exploration safe?",
        answer: "Yes. The 7 Caves tour is fully guided by an experienced local expert and is suitable for beginners. A comprehensive safety briefing is given before entry, and helmets and head torches are provided. The route has been carefully selected to offer a genuine underground experience while maintaining the highest safety standards throughout.",
      },
      {
        question: "Can children join the exploration?",
        answer: "Yes, children aged 8 and above can participate with a parent or guardian. The route is accessible for reasonably active children and the pace is always set to suit the group. Please advise us of children's ages when booking so we can prepare accordingly and confirm the most suitable route.",
      },
      {
        question: "Do I need previous caving experience?",
        answer: "No previous experience is required at all. The 7 Caves Exploration is designed for first-time visitors to underground environments. Your guide will walk you through every step and the pace is entirely relaxed — there is no rushing, no climbing, and no tight passages that require special skills.",
      },
      {
        question: "What should I wear?",
        answer: "Comfortable, fitted clothing that you don't mind getting dusty is ideal. Closed-toe shoes with a good grip are essential — sandals, open shoes and flip-flops are not permitted for safety reasons. The temperature inside the caves is slightly cooler than outside, so a light layer is a good idea. Helmets are provided.",
      },
      {
        question: "Is photography allowed inside the caves?",
        answer: "Absolutely — photography is warmly encouraged. Smartphones and compact cameras work well inside the caves. Your guide will point out the best formations and lighting angles for memorable shots. Please take care not to touch or lean on geological formations when positioning for photographs.",
      },
      {
        question: "What is the best time of day to visit?",
        answer: "The caves can be explored in the morning or afternoon, and conditions inside remain consistent throughout the day regardless of external weather. Morning departures are popular for guests who wish to combine the cave exploration with another activity in the afternoon. We will confirm the ideal departure time when you book.",
      },
    ],
  },

  "wild-south-experience": {
    slug: "wild-south-experience",
    name: "The Wild South Experience",
    pageTitle: "Wild South Mauritius — Gris Gris, Natural Pools & Hidden Beaches",
    pageDescription: "Explore the dramatic and untouched southern coast of Mauritius — Gris Gris cliffs, natural rock pools, hidden beaches and scenic viewpoints. Book with MauTravel.",
    heroImage: "/activities/wild-south-experience/card.jpeg",
    heroSubtitle: "Discover the wild, untouched southern coastline of Mauritius — volcanic cliffs, crashing ocean waves, secret rock pools, and hidden beaches that the resort crowds never find.",
    duration: "Full Day (7 – 9 hours)",
    about: [
      "The south coast of Mauritius is a world apart from the calm lagoons and resort hotels that most visitors experience. Here, the Indian Ocean meets the island with full force — dramatic volcanic cliffs, powerful surf, and rugged coastal scenery that feels genuinely wild and untouched. The Wild South Experience is our signature full-day exploration of this extraordinary coastline.",
      "The centrepiece is Gris Gris, arguably the most dramatic viewpoint on the entire island — a clifftop promontory where waves crash spectacularly against black volcanic rock while the ocean stretches uninterrupted to Antarctica. From here, the journey continues along the southern coast, discovering natural rock pools carved by centuries of wave action, secret beaches accessible only by foot, and sweeping panoramic viewpoints over the ocean and the highlands.",
      "Unlike a standard island tour, the Wild South Experience is designed for guests who want to move beyond the postcard scenes and encounter Mauritius in its most raw, authentic form. Your guide brings deep local knowledge of every hidden path, viewpoint and pool along the route — places that simply aren't in any guidebook.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",      value: "Full day (7 – 9 hours)" },
      { icon: "MapPin",    label: "Route",         value: "Southern coastal circuit" },
      { icon: "Users",     label: "Group size",    value: "Private groups (2–8 pax)" },
      { icon: "Star",      label: "Highlights",    value: "Gris Gris, natural pools, hidden beaches" },
      { icon: "UserCheck", label: "Guide",         value: "Expert local coastal guide" },
      { icon: "Shield",    label: "Transport",     value: "Private air-conditioned vehicle" },
    ],
    included: [
      "Expert local guide",
      "Private air-conditioned vehicle",
      "Hotel pick-up and drop-off",
      "Bottled water throughout",
      "Packed lunch or lunch stop at local restaurant",
    ],
    notIncluded: [
      "Swimming costume and towel (for natural pools)",
      "Sturdy footwear for rocky terrain",
      "Travel insurance",
      "Personal purchases at local shops",
    ],
    gallery: [
      "/activities/wild-south-experience/wse-1.jpeg",
      "/activities/wild-south-experience/wse-2.jpeg",
      "/activities/wild-south-experience/wse-3.jpeg",
      "/activities/wild-south-experience/wse-4.jpeg",
      "/activities/wild-south-experience/wse-5.jpeg",
      "/activities/wild-south-experience/wse-6.jpeg",
      "/activities/wild-south-experience/wse-7.jpeg",
      "/activities/wild-south-experience/wse-8.jpeg",
      "/activities/wild-south-experience/wse-9.jpeg",
      "/activities/wild-south-experience/wse-10.jpeg",
      "/activities/wild-south-experience/wse-11.jpeg",
      "/activities/wild-south-experience/wse-12.jpeg",
      "/activities/wild-south-experience/wse-13.jpeg",
      "/activities/wild-south-experience/wse-14.jpeg",
      "/activities/wild-south-experience/wse-15.jpeg",
      "/activities/wild-south-experience/wse-16.jpeg",
      "/activities/wild-south-experience/wse-17.jpeg",
    ],
    pricing: [
      {
        name: "Wild South Day",
        price: "Contact for price",
        description: "A full-day private exploration of the southern coast with a knowledgeable local guide.",
        features: ["Private guide", "Air-con vehicle", "Hotel transfers", "Bottled water", "7–9 hour experience"],
        popular: true,
      },
      {
        name: "South & Highlands Combo",
        price: "Contact for price",
        description: "Combine the Wild South coastal route with the Black River Gorges highland scenery for a comprehensive southern day.",
        features: ["Wild South route", "Black River Gorges", "Full day", "Lunch included", "Private group"],
      },
      {
        name: "Photography Special",
        price: "Contact for price",
        description: "A photographer-focused version of the Wild South tour, timed for golden-hour light at Gris Gris and the coastal cliffs.",
        features: ["Dawn or dusk timing", "Extended cliff stops", "Guide photography knowledge", "Private group only"],
      },
    ],
    faqs: [
      { question: "Is the Wild South suitable for families with young children?", answer: "The Wild South Experience is best suited to adults and older children (10+) due to the uneven cliff-top terrain near Gris Gris and some of the natural pool locations. The vehicle-based sections are suitable for all ages. Please contact us to discuss your group composition." },
      { question: "Can we swim at the natural pools?", answer: "Yes — the natural rock pools along the southern coast are sheltered enough for safe swimming on most days. However, the open coastline at Gris Gris is not suitable for swimming due to strong currents and waves. Your guide will always assess conditions before any water entry." },
      { question: "What is the road access like on the south coast?", answer: "Most of the southern coastal route is accessed via good tar roads. Some hidden locations involve short walks on rough coastal tracks. Our vehicles are well-maintained and suitable for the terrain. We recommend wearing comfortable shoes for the walking sections." },
      { question: "Is this different from a standard South Tour?", answer: "Yes, significantly. A standard South Tour typically focuses on popular stops like Chamarel Coloured Earths, Le Morne and rum distilleries. The Wild South Experience focuses exclusively on the raw coastal scenery, hidden natural spots and less-visited locations that most tour operators don't include." },
      { question: "What time does the tour start and finish?", answer: "The tour typically departs between 7:30–8:30am from your hotel and returns in the late afternoon (around 4:00–5:00pm). Departure times can be adjusted for photographers wishing to catch early morning light. Exact times are confirmed upon booking." },
    ],
  },

  "island-tours": {
    slug: "island-tours",
    name: "Island Tours",
    pageTitle: "Private Island Tours Mauritius — North, South, East, West & Custom",
    pageDescription: "Explore every corner of Mauritius on a private guided island tour. North, South, East, West and fully custom itineraries. Book your private tour with MauTravel.",
    heroImage: mu(P.flicEnFlacCity, 1920),
    heroSubtitle: "Explore the full beauty of Mauritius with a knowledgeable local guide in a private, air-conditioned vehicle — from the vibrant north to the dramatic south, serene east and wild west.",
    duration: "Half day to full day",
    about: [
      "Mauritius is a compact island but endlessly varied — each coast has its own character, landscapes, cuisine and history. MauTravel's private island tours give you the most complete and flexible way to experience the island, with a dedicated local guide who knows every hidden gem, local eatery and scenic viewpoint the island has to offer.",
      "Choose from our four directional tours — North, South, East and West — each covering the most celebrated highlights of their respective coastline, or combine routes into a custom itinerary designed entirely around your interests. Our tours are strictly private — you'll never be in a group with strangers — and the pace is always set by you.",
      "Every tour is operated in a clean, air-conditioned private vehicle with a knowledgeable local guide who speaks English and can adapt the day's programme to whatever interests you most. Whether you're interested in beaches, history, food, culture, nature or photography, we tailor the experience accordingly.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",     value: "Half day (4h) or Full day (8–9h)" },
      { icon: "MapPin",    label: "Routes",       value: "North, South, East, West or Custom" },
      { icon: "Users",     label: "Group size",   value: "Private — just your group" },
      { icon: "Star",      label: "Vehicle",      value: "Air-conditioned private car/minibus" },
      { icon: "UserCheck", label: "Guide",        value: "Expert local English-speaking guide" },
      { icon: "Shield",    label: "Flexibility",  value: "Fully adaptable itinerary" },
    ],
    included: [
      "Private air-conditioned vehicle",
      "Expert English-speaking local guide",
      "Hotel pick-up and drop-off",
      "Bottled water throughout",
      "Flexible itinerary adjustments on the day",
    ],
    notIncluded: [
      "Entry fees to attractions (Chamarel, Black River Gorges, etc.)",
      "Meals and personal purchases",
      "Travel insurance",
      "Gratuities for guide",
    ],
    gallery: [
      mu(P.flicEnFlacCity),
      mu(P.leMorneAerial),
      mu(P.belleMare),
      mu(P.dinarobinPalms),
    ],
    pricing: [
      {
        name: "Half Day Tour",
        price: "Contact for price",
        description: "A focused 4-hour exploration of one area — perfect for guests with limited time or as an add-on to another activity.",
        features: ["4 hours", "Private guide", "Private vehicle", "Hotel transfers", "Flexible route"],
      },
      {
        name: "Full Day Tour",
        price: "Contact for price",
        description: "A comprehensive 8–9 hour day covering all the highlights of one of our directional routes.",
        features: ["8–9 hours", "All half-day inclusions", "Lunch stop", "Cultural commentary", "Photo stops"],
        popular: true,
      },
      {
        name: "Custom Private Tour",
        price: "Contact for price",
        description: "A fully bespoke itinerary designed around your specific interests, time frame and group needs.",
        features: ["Your chosen stops", "Flexible hours", "Bespoke commentary", "Any combination of routes", "Special requests welcome"],
      },
    ],
    faqs: [
      { question: "What's the difference between your four tours?", answer: "The North Tour covers Pamplemousses Botanical Garden, Grand Baie, Cap Malheureux and the northern beaches. The South Tour explores Le Morne, Black River Gorges, Chamarel and Gris Gris. The East Tour focuses on Belle Mare, Mahebourg and Blue Bay. The West Tour covers Flic en Flac, Casela and Tamarin. Each tour can be adjusted to your preferences." },
      { question: "Can we combine stops from different tours?", answer: "Absolutely — our Custom Tour is designed precisely for this. Tell us which sites interest you most and we'll build an itinerary that combines the best of multiple routes in a single day, or across multiple days if you prefer." },
      { question: "How many people can join a private tour?", answer: "Our standard private tours cater for up to 6 guests in a comfortable car. For larger groups of 7–12 guests, we provide a minibus at no extra charge. Groups larger than 12 are accommodated with two vehicles. All remain completely private — never mixed with other travellers." },
      { question: "Do you include entry fees in the tour price?", answer: "Entry fees to paid attractions (such as Chamarel Coloured Earths, Black River Gorges National Park and some botanical gardens) are not included in the tour price. Your guide will advise on any entrance fees before you arrive so there are no surprises." },
      { question: "What languages do your guides speak?", answer: "All MauTravel guides are fluent in English and French. Some guides also speak Hindi, Creole and basic Mandarin. Please advise us of any language requirements when booking and we will match you with the most suitable guide." },
    ],
  },

  "mangrove-kayaking": {
    slug: "mangrove-kayaking",
    name: "Mangrove Kayaking",
    pageTitle: "Mangrove Kayaking Mauritius — Guided Coastal Kayak Tours",
    pageDescription: "Paddle through Mauritius's ancient mangrove forests and sheltered coastal channels on a guided kayak tour. A peaceful, immersive nature experience for all abilities. Book with MauTravel.",
    heroImage: "/activities/mangrove-kayaking/card.jpeg",
    heroSubtitle: "Glide silently through ancient mangrove forests and tranquil coastal channels, discovering Mauritius's extraordinary wetland ecosystems and the hidden wildlife that calls them home.",
    duration: "2 – 3 hours",
    about: [
      "Mauritius's mangrove forests are among the island's most extraordinary and least-visited natural treasures. These protected coastal wetlands — where the sea meets the land in a tangle of roots, shallow channels and wildlife-rich water — offer a completely different side of the island from the resort beaches most visitors experience.",
      "MauTravel's guided mangrove kayaking experience takes you through sheltered channels on a sit-on-top kayak, accompanied by a knowledgeable local guide who will point out the birds, fish and marine life that inhabit these fragile ecosystems. The pace is entirely gentle — this is not an adrenaline sport but a peaceful, immersive encounter with nature.",
      "No prior kayaking experience is needed. The routes are calm and sheltered, suitable for families, couples and solo travellers of all fitness levels. A short paddling lesson is given before you set off, and the guide accompanies the group throughout to ensure everyone is comfortable and enjoying the experience at their own pace.",
    ],
    highlights: [
      { icon: "Clock",     label: "Duration",     value: "2 – 3 hours" },
      { icon: "MapPin",    label: "Location",     value: "West coast mangroves, Mauritius" },
      { icon: "Users",     label: "Group size",   value: "Small private groups" },
      { icon: "Star",      label: "Experience",   value: "No paddling experience needed" },
      { icon: "Heart",     label: "Suitable for", value: "All ages & abilities" },
      { icon: "Shield",    label: "Safety",       value: "Life jackets & certified guide" },
    ],
    included: [
      "Sit-on-top kayak and paddle",
      "Life jacket and safety equipment",
      "Certified local guide",
      "Paddling technique briefing",
      "Light refreshments",
    ],
    notIncluded: [
      "Hotel transfers (available on request)",
      "Wetsuit (not required — water is warm)",
      "Travel insurance",
      "Personal items (sunscreen, towel, hat)",
    ],
    gallery: [
      "/activities/mangrove-kayaking/mk-1.jpeg",
      "/activities/mangrove-kayaking/mk-2.jpeg",
      "/activities/mangrove-kayaking/mk-3.jpeg",
      "/activities/mangrove-kayaking/mk-4.jpeg",
      "/activities/mangrove-kayaking/mk-5.jpeg",
      "/activities/mangrove-kayaking/mk-6.jpeg",
      "/activities/mangrove-kayaking/mk-7.jpeg",
      "/activities/mangrove-kayaking/mk-8.jpeg",
      "/activities/mangrove-kayaking/mk-9.jpeg",
      "/activities/mangrove-kayaking/mk-10.jpeg",
      "/activities/mangrove-kayaking/mk-11.jpeg",
      "/activities/mangrove-kayaking/mk-12.jpeg",
      "/activities/mangrove-kayaking/mk-13.jpeg",
      "/activities/mangrove-kayaking/mk-14.jpeg",
      "/activities/mangrove-kayaking/mk-15.jpeg",
      "/activities/mangrove-kayaking/mk-16.jpeg",
      "/activities/mangrove-kayaking/mk-17.jpeg",
    ],
    pricing: [
      {
        name: "Guided Kayak Tour",
        price: "Contact for price",
        description: "A 2–3 hour guided paddle through Mauritius's mangrove channels with a certified local guide.",
        features: ["Kayak & paddle provided", "Life jacket included", "Certified guide", "Nature commentary", "Light refreshments"],
        popular: true,
      },
      {
        name: "Private Group Tour",
        price: "Contact for price",
        description: "An exclusive private kayaking experience for your group — ideal for families and couples.",
        features: ["Private guide", "Dedicated kayaks for your group", "Flexible pace", "Personalised route", "Light refreshments"],
      },
    ],
    faqs: [
      { question: "Do I need kayaking experience?", answer: "Not at all. Our mangrove routes follow calm, sheltered channels that are ideal for first-time paddlers. Your guide will give a short technique lesson before you set off and will paddle alongside you throughout the experience." },
      { question: "Is it suitable for children?", answer: "Yes — mangrove kayaking is one of our most family-friendly experiences. Children aged 6 and above can paddle in tandem kayaks with a parent. Life jackets are provided in all sizes. Please let us know children's ages when booking so we can prepare the right equipment." },
      { question: "What should I wear?", answer: "Wear light, comfortable clothing that you don't mind getting slightly wet. A hat, sunglasses, and reef-safe sunscreen are strongly recommended. Secure footwear (water shoes or trainers) is preferred over sandals or flip-flops." },
      { question: "What wildlife might we see?", answer: "Mauritius's mangrove channels are home to a variety of bird species including herons, kingfishers and egrets, as well as small fish, crabs and other marine life visible in the shallow clear water. Sightings vary by season and time of day — early morning paddles tend to be particularly rewarding for wildlife." },
      { question: "What time of day is best for kayaking?", answer: "Early morning is ideal — the water is calmest, the light is beautiful, and wildlife activity is at its peak. Afternoon tours are also available and offer a different, equally enjoyable experience. We will confirm the best departure time for your group when booking." },
    ],
  },

};
