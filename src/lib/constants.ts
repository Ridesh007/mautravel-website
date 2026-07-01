import type { HeroSlide, Tour, Activity, Vehicle, Property, Review, Event, FAQ } from "@/types";

// All images are verified free Unsplash photos of real Mauritius locations (CDN-verified)
const MU = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Mauritius CDN photo IDs (verified free license + real Mauritius location + 200 OK)
export const MU_PHOTOS = {
  // Aerial — Mauritius Underwater Waterfall illusion, Le Morne (world-famous Mauritius icon)
  underwaterWaterfall: "1513415563383-4e580ed27a46",
  // Aerial — Paradis Beachcomber Golf Resort & Spa, Black River, Mauritius
  paradisBCR: "1513415277900-a62401e19be4",
  // Aerial beach — Flat Island, Mauritius (crystal-clear waters)
  flatIsland: "1686739996006-7c2cdff5d34c",
  // Palm trees reflected in water — Flic en Flac, Mauritius (west coast)
  flicEnFlac: "1507187632231-5beb21a654a2",
  // Pool hut resort — Shangri-La Le Touessrok, Trou d'Eau Douce, Mauritius
  shangriLa: "1582574643306-d00ea3f7d49b",
  // Le Morne Brabant UNESCO heritage mountain — Mauritius (most iconic landmark)
  leMorneMountain: "1668265704484-b5f975f37610",
  // Le Morne coastline aerial — Mauritius (Le Morne + turquoise lagoon)
  leMorneAerial: "1687977424023-83e3d3385131",
  // Le Morne resort area aerial — Mauritius (luxury hotels south coast)
  leMorneResort: "1650928367430-254e3e672dd9",
  // Belle Mare, Quatre Cocos coast — Mauritius (pristine east coast beach)
  belleMare: "1738610612578-7c31a08c54b4",
  // Aerial — Flic en Flac city + beach, Mauritius (west coast hub)
  flicEnFlacCity: "1651104677157-f14b80602682",
  // Aerial forest coastline — Mauritius (Guillaume Baudusseau)
  coastForest: "1509722156492-92fa997b78f5",
  // Couple on catamaran — Mauritius (Miguel Alcântara)
  catamaran: "1647773090746-7d50ecb68b7a",
  // Waterfall in green forest — Mauritius Island
  waterfall: "1586853211885-d69f5be5ce9f",
  // Rocky beach with tree — Mauritius Island
  rockyBeach: "1707381997108-a21519a2b8eb",
  // Beach + white house — Mauritius Island coast
  islandCoast: "1690413994339-2b147e5129c8",
  // Palm trees, Dinarobin Beachcomber — Black River, Mauritius
  dinarobinPalms: "1537640685236-a9df2496e232",
  // Port Louis area beach — Mauritius (historical film photo)
  portLouis: "1634972312739-d7237018e06a",
  // Green trees by blue sea — Mauritius (coast/nature)
  greenCoast: "1589745659208-9bdc6fb0ef23",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Airport Transfers", href: "/airport-transfers" },
  { label: "Tours", href: "/tours" },
  { label: "Activities", href: "/activities" },
  { label: "Car Rental", href: "/car-rental" },
  // { label: "Properties", href: "/properties" }, // HIDDEN — uncomment to restore
  { label: "Events", href: "/events" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: MU(MU_PHOTOS.underwaterWaterfall),
    label: "Airport Transfers",
    title: "Arrive in Pure Comfort",
    subtitle: "Luxury private transfers from SSR International Airport to your destination — on time, every time.",
    cta: { label: "Book a Transfer", href: "/airport-transfers" },
  },
  {
    image: MU(MU_PHOTOS.paradisBCR),
    label: "Private Tours",
    title: "Discover Mauritius",
    subtitle: "Expert-guided private tours revealing the island's most breathtaking landscapes and hidden gems.",
    cta: { label: "Explore Tours", href: "/tours" },
  },
  {
    image: MU(MU_PHOTOS.flatIsland),
    label: "Activities",
    title: "Unforgettable Experiences",
    subtitle: "From tandem paragliding to catamaran cruises — curated activities for every kind of adventurer.",
    cta: { label: "View Activities", href: "/activities" },
  },
  {
    image: MU(MU_PHOTOS.flicEnFlac),
    label: "Car Rental",
    title: "Explore on Your Terms",
    subtitle: "Premium vehicles at your disposal — discover every corner of Mauritius with total freedom.",
    cta: { label: "View Vehicles", href: "/car-rental" },
  },
  {
    image: MU(MU_PHOTOS.shangriLa),
    label: "Properties",
    title: "Stay Where You Belong",
    subtitle: "Hand-picked villas, apartments and beachfront retreats for a stay beyond expectations.",
    cta: { label: "View Properties", href: "/properties" },
  },
  {
    image: MU(MU_PHOTOS.leMorneMountain),
    label: "Mauritius",
    title: "Your Island Story Begins",
    subtitle: "MauTravel — Mauritius's trusted Tour Operator for discerning travellers.",
    cta: { label: "Contact Us", href: "/contact" },
  },
];

export const WHY_CHOOSE_FEATURES = [
  {
    icon: "ShieldCheck",
    title: "Licensed Local Experts",
    description: "Fully licensed and government-registered Tour Operator with deep local knowledge built over years of experience.",
  },
  {
    icon: "Clock",
    title: "Reliable & Punctual",
    description: "We understand your time is precious. Our services are designed around precision and reliability.",
  },
  {
    icon: "Tag",
    title: "Transparent Pricing",
    description: "Fixed, all-inclusive pricing with no hidden fees. What you see is exactly what you pay.",
  },
  {
    icon: "Star",
    title: "Personalized Service",
    description: "Every itinerary is crafted around your specific needs, preferences and travel style.",
  },
  {
    icon: "Users",
    title: "Trusted Local Partners",
    description: "Our curated network of vetted local partners ensures consistent quality across every service.",
  },
  {
    icon: "MessageCircle",
    title: "Fast WhatsApp Booking",
    description: "Book anything instantly via WhatsApp — our team responds quickly and efficiently.",
  },
  {
    icon: "Heart",
    title: "Excellent Customer Care",
    description: "From first inquiry to final farewell, we're with you every step of your Mauritius journey.",
  },
  {
    icon: "Globe",
    title: "Complete Travel Solutions",
    description: "One trusted partner for all your Mauritius travel needs — transfers, tours, stays and more.",
  },
];

export const TOURS: Tour[] = [
  {
    id: "north",
    name: "North Tour",
    image: MU(MU_PHOTOS.portLouis, 800),
    description: "Explore the vibrant north with Port Louis markets, Pamplemousses Botanical Garden, and the stunning Citadel fortress.",
    duration: "Full Day (8–9 hours)",
    highlights: ["Port Louis City Centre", "Pamplemousses Botanical Garden", "Caudan Waterfront", "Citadel Fortress", "Local street food"],
    slug: "north-tour",
  },
  {
    id: "south",
    name: "South Tour",
    image: MU(MU_PHOTOS.leMorneAerial, 800),
    description: "Discover the dramatic south coast — the iconic Le Morne peninsula, Black River Gorges, and the famous coloured earths of Chamarel.",
    duration: "Full Day (8–9 hours)",
    highlights: ["Le Morne Brabant", "Black River Gorges", "Chamarel Coloured Earths", "Rum Distillery", "La Roche Qui Pleure"],
    slug: "south-tour",
  },
  {
    id: "east",
    name: "East Tour",
    image: MU(MU_PHOTOS.belleMare, 800),
    description: "Enjoy the serene east coast with pristine Belle Mare beach, the Mahebourg museum, and the breathtaking Blue Bay lagoon.",
    duration: "Full Day (8–9 hours)",
    highlights: ["Belle Mare Beach", "Mahebourg History Museum", "Blue Bay Marine Park", "Île aux Aigrettes", "Seafood lunch by the beach"],
    slug: "east-tour",
  },
  {
    id: "west",
    name: "West Tour",
    image: MU(MU_PHOTOS.dinarobinPalms, 800),
    description: "Experience the wild west — stunning sunsets over Flic en Flac beach, Casela World of Adventures, and Tamarin dolphin bay.",
    duration: "Full Day (8–9 hours)",
    highlights: ["Flic en Flac Beach", "Casela World of Adventures", "Tamarin Bay (dolphins)", "Sunset viewpoint", "Local cuisine"],
    slug: "west-tour",
  },
  {
    id: "custom",
    name: "Custom Private Tour",
    image: MU(MU_PHOTOS.leMorneResort, 800),
    description: "Design your perfect Mauritius day. Choose your destinations, pace, and experiences for a completely personalised adventure.",
    duration: "Flexible (half day or full day)",
    highlights: ["Choose your own stops", "Flexible schedule", "Private vehicle", "Personal guide", "Customised itinerary"],
    slug: "custom-tour",
  },
];

export const ACTIVITIES: Activity[] = [
  // CATAMARAN HIDDEN — uncomment to restore
  // {
  //   id: "catamaran",
  //   name: "Catamaran Cruise",
  //   image: MU(MU_PHOTOS.catamaran, 800),
  //   description: "Sail the turquoise lagoon on a luxury catamaran with snorkelling, onboard lunch, and swimming in Mauritius paradise.",
  //   duration: "Full Day / Half Day",
  //   slug: "catamaran-cruise",
  // },

  // ── Activities with gallery photos / reviews (shown first) ──────────────────
  {
    id: "paragliding",
    name: "Tandem Paragliding",
    image: "/activities/paragliding/card.jpeg",
    description: "Soar above Mauritius's mountains, lagoons and coastline on a tandem paragliding flight with a certified professional pilot.",
    duration: "45 – 90 minutes",
    difficulty: "All levels",
    slug: "paragliding",
  },
  {
    id: "hiking-adventures",
    name: "Hiking Adventures",
    image: "/activities/hiking-adventures/card.jpeg",
    description: "Conquer the volcanic peaks and forested ridges of Mauritius on guided hikes suited to every fitness level. From the iconic Le Morne Brabant to hidden summits like Pieter Both and Piton Savanne, each trail rewards you with breathtaking panoramic views of the island's lagoons, forests and coastline. Our experienced guides ensure a safe, memorable and deeply rewarding experience in the Mauritian highlands.",
    duration: "3 – 8 hours",
    difficulty: "All levels",
    highlights: [
      "Le Morne Brabant", "Signal Mountain", "Pieter Both", "Le Pouce",
      "Piton de la Petite Rivière Noire", "Corps de Garde", "Lion Mountain",
      "Piton Savanne", "Tourelle du Tamarin", "Deux Mamelles",
      "Trois Mamelles", "Montagne Cocotte", "Montagne Calebasses",
    ],
    suitableFor: "Beginners to experienced hikers",
    slug: "hiking-adventures",
  },
  {
    id: "waterfalls-river-treks",
    name: "Waterfalls & River Treks",
    image: "/activities/waterfall-river-treks/card.jpeg",
    description: "Follow wild river gorges and jungle trails to some of Mauritius's most spectacular hidden waterfalls. From the thundering seven-tiered Tamarind Falls to the tranquil Eau Bleue and dramatic Rochester Falls, each trek immerses you in lush tropical nature. Swim in crystal-clear pools beneath cascades and discover landscapes most visitors never see.",
    duration: "3 – 7 hours",
    difficulty: "Moderate",
    highlights: [
      "Tamarind Falls (7 Cascades)", "Minissy Waterfall", "Rochester Falls",
      "500ft Waterfall", "Alexandra Falls", "Eau Bleue Waterfall",
      "Rioux Waterfall", "Léon Waterfall", "La Nicolière River Trek",
    ],
    suitableFor: "Nature lovers & adventure seekers",
    slug: "waterfalls-river-treks",
  },
  {
    id: "7-caves-exploration",
    name: "7 Caves Exploration",
    image: "/activities/7-caves-exploration/card.jpeg",
    description: "Explore one of Mauritius's most fascinating underground adventures as you journey through ancient volcanic lava tunnels carved thousands of years ago. Experience spectacular rock formations, hidden chambers, and learn about the island's volcanic origins with an experienced local guide.",
    duration: "3 – 4 hours",
    difficulty: "Easy to Moderate",
    highlights: [
      "Explore ancient volcanic lava tubes",
      "Discover unique underground formations",
      "Learn the geological history of Mauritius",
      "Safe guided exploration",
      "Perfect for adventure lovers",
      "Amazing photography opportunities",
    ],
    suitableFor: "Families, couples, groups & adventure seekers",
    slug: "7-caves-exploration",
  },
  {
    id: "mangrove-kayaking",
    name: "Mangrove Kayaking",
    image: "/activities/mangrove-kayaking/card.jpeg",
    description: "Paddle silently through Mauritius's ancient mangrove forests and sheltered coastal channels — a peaceful, immersive nature experience suitable for all abilities.",
    duration: "2 – 3 hours",
    highlights: [
      "Mangrove forest channels", "Coastal wildlife spotting",
      "Sheltered lagoon paddling", "No experience needed",
    ],
    suitableFor: "All ages & abilities",
    slug: "mangrove-kayaking",
  },
  {
    id: "wild-south-experience",
    name: "The Wild South Experience",
    image: "/activities/wild-south-experience/card.jpeg",
    description: "Discover the untamed and dramatic southern coast of Mauritius — a world away from the resort beaches, where raw volcanic cliffs meet pounding ocean waves. Stand at Gris Gris where the Indian Ocean crashes against jagged black rocks, swim in secluded natural pools, stumble upon hidden beaches and drink in some of the most scenic viewpoints the island has to offer.",
    duration: "Full Day (7 – 9 hours)",
    highlights: [
      "Gris Gris cliffs & viewpoint", "Natural rock pools",
      "Hidden southern beaches", "Scenic coastal viewpoints",
      "Southern coastal exploration",
    ],
    suitableFor: "Nature lovers & photographers",
    slug: "wild-south-experience",
  },

  // ── Activities without gallery photos or reviews (shown last) ───────────────
  {
    id: "dolphins",
    name: "Dolphin Encounter",
    image: MU(MU_PHOTOS.coastForest, 800),
    description: "Swim with wild dolphins in the warm waters of Tamarin Bay on the west coast — a magical, unforgettable experience.",
    duration: "2 – 4 hours",
    slug: "dolphin-encounter",
  },
  {
    id: "parasailing",
    name: "Parasailing",
    image: MU(MU_PHOTOS.paradisBCR, 800),
    description: "Soar high above the Mauritius lagoon with incredible panoramic views of the coastline and crystal-clear waters below.",
    duration: "15 – 20 minutes",
    slug: "parasailing",
  },
  {
    id: "underwater-walk",
    name: "Underwater Walk",
    image: MU(MU_PHOTOS.rockyBeach, 800),
    description: "Walk on the seabed in a pressurised helmet and discover Mauritius's vibrant coral reef — no diving experience needed.",
    duration: "30 – 45 minutes",
    slug: "underwater-walk",
  },
];

export const VEHICLES: Vehicle[] = [
  {
    id: "suzuki-swift",
    name: "Suzuki Swift",
    image: "/car-rental/suzuki-swift.png",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    dailyRate: "MUR 1,300/day",
    features: ["Air Conditioning", "Automatic Gearbox", "5 Passengers", "Petrol"],
    objectFit: "contain",
  },
  {
    id: "toyota-yaris",
    name: "Toyota Yaris",
    image: "/car-rental/toyota-yaris.png",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    dailyRate: "MUR 1,400/day",
    features: ["Air Conditioning", "Automatic Gearbox", "5 Passengers", "Petrol"],
    objectFit: "contain",
  },
  {
    id: "nissan-march",
    name: "Nissan March",
    image: "/car-rental/nissan-march.png",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    dailyRate: "MUR 1,000/day",
    features: ["Air Conditioning", "Automatic Gearbox", "5 Passengers", "Petrol"],
    objectFit: "contain",
  },
];

export const PROPERTIES: Property[] = [
  {
    id: "beachfront-villa",
    name: "Beachfront Villa",
    type: "Luxury Villa",
    image: MU(MU_PHOTOS.shangriLa, 800),
    description: "A stunning beachfront villa with private pool, direct beach access, and panoramic ocean views over the Indian Ocean.",
    bedrooms: 4,
    guests: 8,
    amenities: ["Private Pool", "Beach Access", "Fully Equipped Kitchen", "Garden", "Housekeeping", "Chef Available"],
    priceFrom: "From €400/night",
    slug: "beachfront-villa",
  },
  {
    id: "garden-apartment",
    name: "Garden Apartment",
    type: "Apartment",
    image: MU(MU_PHOTOS.islandCoast, 800),
    description: "A beautifully furnished apartment set in a lush tropical garden, perfect for couples or small families exploring Mauritius.",
    bedrooms: 2,
    guests: 4,
    amenities: ["Tropical Garden", "Swimming Pool", "Air Conditioning", "Wi-Fi", "Parking"],
    priceFrom: "From €120/night",
    slug: "garden-apartment",
  },
  {
    id: "luxury-penthouse",
    name: "Ocean View Penthouse",
    type: "Penthouse",
    image: MU(MU_PHOTOS.leMorneResort, 800),
    description: "The ultimate luxury penthouse with wrap-around terrace, private jacuzzi, and sweeping views of the Indian Ocean.",
    bedrooms: 3,
    guests: 6,
    amenities: ["Wrap-around Terrace", "Private Jacuzzi", "Concierge", "Gym Access", "Panoramic Views"],
    priceFrom: "From €300/night",
    slug: "ocean-view-penthouse",
  },
  {
    id: "jungle-villa",
    name: "Jungle Retreat Villa",
    type: "Villa",
    image: MU(MU_PHOTOS.waterfall, 800),
    description: "Escape into nature with this secluded villa set within Mauritius's lush tropical interior, far from the crowds.",
    bedrooms: 3,
    guests: 6,
    amenities: ["Nature Trails", "Private Pool", "BBQ Area", "Yoga Deck", "Chef Available"],
    priceFrom: "From €250/night",
    slug: "jungle-retreat",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Soph & Jamie Family",
    country: "United Kingdom",
    rating: 5,
    text: "MauTravel made our honeymoon in Mauritius absolutely perfect. The airport transfer was seamless, the south tour was incredible, and every single detail was taken care of. We cannot recommend them highly enough!",
    date: "March 2025",
  },
  {
    id: "2",
    name: "The Müller Family",
    country: "Germany",
    rating: 5,
    text: "We booked a full week itinerary through MauTravel and it was the best decision we made. Professional, friendly, and they knew exactly what would suit our family with young children. Truly exceptional service.",
    date: "January 2025",
  },
  {
    id: "3",
    name: "Isa L. Family",
    country: "France",
    rating: 5,
    text: "Notre voyage à l'île Maurice était magique grâce à MauTravel. Le service était impeccable — ponctualité parfaite, guides extraordinaires et des expériences mémorables. Nous reviendrons certainement!",
    date: "February 2025",
  },
  {
    id: "5",
    name: "Priya & Raj Family",
    country: "India",
    rating: 5,
    text: "MauTravel handled everything for our family vacation — airport pick-up, tours, activities, and accommodation. Every single experience was exceptional. The team's attention to detail is remarkable.",
    date: "December 2024",
  },
];

export const ACTIVITY_REVIEWS: Review[] = [
  {
    id: "act-2",
    name: "Marco Ferri",
    country: "Italy",
    rating: 5,
    activity: "Tandem Paragliding",
    text: "I was genuinely nervous but the pilot made me feel completely safe from the very first moment. Flying above Mauritius is one of the most breathtaking things I've ever experienced.",
    date: "June 2026",
  },
  {
    id: "act-3",
    name: "Aisha & Family",
    country: "India",
    rating: 5,
    activity: "Dolphin Encounter",
    text: "Swimming with wild dolphins in Tamarin Bay was magical for the whole family. The kids couldn't stop talking about it for days — one of those memories that lasts forever.",
    date: "April 2026",
  },
  {
    id: "act-4",
    name: "James Carter",
    country: "Australia",
    rating: 5,
    activity: "Hiking Adventures",
    text: "Our guide was brilliant — knowledgeable, encouraging and genuinely passionate about Mauritius. The summit views were absolutely worth the effort. Already planning our next hike.",
    date: "May 2026",
  },
  {
    id: "act-5",
    name: "Amélie Rousseau",
    country: "France",
    rating: 5,
    activity: "7 Caves Exploration",
    text: "Such a fascinating underground experience — ancient lava tunnels, incredible formations and a guide who made the geology come alive. Wonderful for the whole family.",
    date: "March 2026",
  },
  {
    id: "act-6",
    name: "Lena & Stefan Bauer",
    country: "Germany",
    rating: 5,
    activity: "Waterfalls & River Treks",
    text: "The trek to Tamarind Falls was spectacular. Wild jungle, natural swimming pools and a guide who knew every trail perfectly. Exactly the Mauritius most tourists never get to see.",
    date: "June 2026",
  },
];

export const EVENTS: Event[] = [
  {
    id: "cavadee-2026",
    title: "Thaipoosam Cavadee",
    date: "January 2026",
    category: "Religious Festival",
    image: MU(MU_PHOTOS.flicEnFlac, 800),
    description: "One of Mauritius's most colourful Hindu festivals, featuring devotees carrying ornate Cavadees to temples across the island.",
    slug: "thaipoosam-cavadee-2026",
  },
  {
    id: "chinese-new-year",
    title: "Chinese New Year",
    date: "January/February 2026",
    category: "Cultural Festival",
    image: MU(MU_PHOTOS.portLouis, 800),
    description: "Mauritius celebrates the Chinese New Year with spectacular lion dances, fireworks and festivities in Port Louis's Chinatown.",
    slug: "chinese-new-year-2026",
  },
  {
    id: "holi-2026",
    title: "Holi Festival of Colours",
    date: "March 2026",
    category: "Hindu Festival",
    image: MU(MU_PHOTOS.dinarobinPalms, 800),
    description: "Celebrate the Festival of Colours across Mauritius with vibrant powder throwing, music, and communal celebrations.",
    slug: "holi-2026",
  },
  {
    id: "independence-day",
    title: "Mauritius Independence Day",
    date: "12 March 2026",
    category: "National Holiday",
    image: MU(MU_PHOTOS.coastForest, 800),
    description: "Mauritius celebrates its National Day with parades, cultural events, and ceremonies across the island.",
    slug: "independence-day-2026",
  },
  {
    id: "diwali-2026",
    title: "Diwali Festival of Lights",
    date: "October/November 2026",
    category: "Hindu Festival",
    image: MU(MU_PHOTOS.greenCoast, 800),
    description: "The Festival of Lights transforms Mauritius into a magical spectacle of lamps, fireworks and communal celebration.",
    slug: "diwali-2026",
  },
  {
    id: "kite-festival",
    title: "International Kite Festival",
    date: "August 2026",
    category: "Cultural Event",
    image: MU(MU_PHOTOS.flatIsland, 800),
    description: "A spectacular kite festival held on Mauritius's beaches during the windy August month — a family favourite.",
    slug: "kite-festival-2026",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "How do I book a service with MauTravel?",
    answer: "The easiest way is to tap our WhatsApp button and send us a message. We respond quickly and can confirm your booking within minutes. You can also use the contact form on our website.",
  },
  {
    question: "Are your prices fixed or negotiable?",
    answer: "Our prices are transparent and fixed with no hidden fees. We believe in honest, straightforward pricing so you know exactly what you're paying for.",
  },
  {
    question: "Do you provide airport pick-up services?",
    answer: "Yes, we offer 24/7 airport transfer services from Sir Seewoosagur Ramgoolam International Airport to any destination in Mauritius. Our driver will meet you at arrivals with a name board.",
  },
  {
    question: "Are your guides English-speaking?",
    answer: "Yes, all our guides speak English fluently. We also have guides who speak French, German, and several other languages. Please let us know your preferred language when booking.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand plans can change. We offer free cancellation up to 48 hours before your booked service. Please contact us as soon as possible if you need to cancel or reschedule.",
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes, we offer attractive rates for groups of 6 or more travellers. Contact us with your group size and requirements for a custom quote.",
  },
  {
    question: "Is MauTravel licensed and registered?",
    answer: "Yes, MauTravel is a fully licensed and government-registered Tour Operator in Mauritius. We comply with all tourism regulations and industry standards.",
  },
  {
    question: "Can you arrange full holiday packages?",
    answer: "Absolutely. We can arrange comprehensive holiday packages including accommodation, transfers, tours, activities and more — all customised to your preferences and budget.",
  },
];
