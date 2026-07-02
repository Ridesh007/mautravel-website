import type {
  HeroSlideStructural,
  TourStructural,
  ActivityStructural,
  Vehicle,
  PropertyStructural,
  ReviewStructural,
  EventStructural,
} from "@/types";

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
  { key: "home", href: "/" },
  { key: "airportTransfers", href: "/airport-transfers" },
  { key: "tours", href: "/tours" },
  { key: "activities", href: "/activities" },
  { key: "carRental", href: "/car-rental" },
  // { key: "properties", href: "/properties" }, // HIDDEN — uncomment to restore
  { key: "events", href: "/events" },
  { key: "reviews", href: "/reviews" },
  { key: "contact", href: "/contact" },
] as const;

// Text (label/title/subtitle/cta) comes from messages.home.heroSlides, same order/index.
export const HERO_SLIDES: HeroSlideStructural[] = [
  { id: "airportTransfers", image: MU(MU_PHOTOS.underwaterWaterfall), href: "/airport-transfers" },
  { id: "tours", image: MU(MU_PHOTOS.paradisBCR), href: "/tours" },
  { id: "activities", image: MU(MU_PHOTOS.flatIsland), href: "/activities" },
  { id: "carRental", image: MU(MU_PHOTOS.flicEnFlac), href: "/car-rental" },
  { id: "properties", image: MU(MU_PHOTOS.shangriLa), href: "/properties" },
  { id: "mauritius", image: MU(MU_PHOTOS.leMorneMountain), href: "/contact" },
];

export const TOURS: TourStructural[] = [
  { id: "north", image: MU(MU_PHOTOS.portLouis, 800), duration: "Full Day (8–9 hours)", slug: "north-tour" },
  { id: "south", image: MU(MU_PHOTOS.leMorneAerial, 800), duration: "Full Day (8–9 hours)", slug: "south-tour" },
  { id: "east", image: MU(MU_PHOTOS.belleMare, 800), duration: "Full Day (8–9 hours)", slug: "east-tour" },
  { id: "west", image: MU(MU_PHOTOS.dinarobinPalms, 800), duration: "Full Day (8–9 hours)", slug: "west-tour" },
  { id: "custom", image: MU(MU_PHOTOS.leMorneResort, 800), duration: "Flexible (half day or full day)", slug: "custom-tour" },
];

export const ACTIVITIES: ActivityStructural[] = [
  // CATAMARAN HIDDEN — uncomment to restore
  // { id: "catamaran", image: MU(MU_PHOTOS.catamaran, 800), duration: "Full Day / Half Day", slug: "catamaran-cruise" },

  // ── Activities with gallery photos / reviews (shown first) ──────────────────
  { id: "paragliding", image: "/activities/paragliding/card.jpeg", duration: "45 – 90 minutes", difficulty: "All levels", slug: "paragliding" },
  { id: "hiking-adventures", image: "/activities/hiking-adventures/card.jpeg", duration: "3 – 8 hours", difficulty: "All levels", slug: "hiking-adventures" },
  { id: "waterfalls-river-treks", image: "/activities/waterfall-river-treks/card.jpeg", duration: "3 – 7 hours", difficulty: "Moderate", slug: "waterfalls-river-treks" },
  { id: "7-caves-exploration", image: "/activities/7-caves-exploration/card.jpeg", duration: "3 – 4 hours", difficulty: "Easy to Moderate", slug: "7-caves-exploration" },
  { id: "mangrove-kayaking", image: "/activities/mangrove-kayaking/card.jpeg", duration: "2 – 3 hours", slug: "mangrove-kayaking" },
  { id: "wild-south-experience", image: "/activities/wild-south-experience/card.jpeg", duration: "Full Day (7 – 9 hours)", slug: "wild-south-experience" },

  // ── Activities without gallery photos or reviews (shown last) ───────────────
  { id: "dolphins", image: MU(MU_PHOTOS.coastForest, 800), duration: "2 – 4 hours", slug: "dolphin-encounter" },
  { id: "parasailing", image: MU(MU_PHOTOS.paradisBCR, 800), duration: "15 – 20 minutes", slug: "parasailing" },
  { id: "underwater-walk", image: MU(MU_PHOTOS.rockyBeach, 800), duration: "30 – 45 minutes", slug: "underwater-walk" },
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

export const PROPERTIES: PropertyStructural[] = [
  { id: "beachfront-villa", image: MU(MU_PHOTOS.shangriLa, 800), bedrooms: 4, guests: 8, priceFrom: "From €400/night", slug: "beachfront-villa" },
  { id: "garden-apartment", image: MU(MU_PHOTOS.islandCoast, 800), bedrooms: 2, guests: 4, priceFrom: "From €120/night", slug: "garden-apartment" },
  { id: "luxury-penthouse", image: MU(MU_PHOTOS.leMorneResort, 800), bedrooms: 3, guests: 6, priceFrom: "From €300/night", slug: "ocean-view-penthouse" },
  { id: "jungle-villa", image: MU(MU_PHOTOS.waterfall, 800), bedrooms: 3, guests: 6, priceFrom: "From €250/night", slug: "jungle-retreat" },
];

// Names are proper nouns / real guest names — kept as-is across locales; review `text` is translated (Tier 1) or left in original language for authenticity (Tier 2-4).
export const REVIEWS: ReviewStructural[] = [
  { id: "1", name: "Soph & Jamie Family", country: "United Kingdom", rating: 5, date: "March 2025" },
  { id: "2", name: "The Müller Family", country: "Germany", rating: 5, date: "January 2025" },
  { id: "3", name: "Isa L. Family", country: "France", rating: 5, date: "February 2025" },
  { id: "5", name: "Priya & Raj Family", country: "India", rating: 5, date: "December 2024" },
];

// `activityKey` references messages.activities.items[key].name for the activity badge label.
export const ACTIVITY_REVIEWS: (ReviewStructural & { activityKey: string })[] = [
  { id: "act-2", name: "Marco Ferri", country: "Italy", rating: 5, activityKey: "paragliding", date: "June 2026" },
  { id: "act-3", name: "Aisha & Family", country: "India", rating: 5, activityKey: "dolphins", date: "April 2026" },
  { id: "act-4", name: "James Carter", country: "Australia", rating: 5, activityKey: "hiking-adventures", date: "May 2026" },
  { id: "act-5", name: "Amélie Rousseau", country: "France", rating: 5, activityKey: "7-caves-exploration", date: "March 2026" },
  { id: "act-6", name: "Lena & Stefan Bauer", country: "Germany", rating: 5, activityKey: "waterfalls-river-treks", date: "June 2026" },
];

export const EVENTS: EventStructural[] = [
  { id: "cavadee-2026", date: "January 2026", image: MU(MU_PHOTOS.flicEnFlac, 800), slug: "thaipoosam-cavadee-2026" },
  { id: "chinese-new-year", date: "January/February 2026", image: MU(MU_PHOTOS.portLouis, 800), slug: "chinese-new-year-2026" },
  { id: "holi-2026", date: "March 2026", image: MU(MU_PHOTOS.dinarobinPalms, 800), slug: "holi-2026" },
  { id: "independence-day", date: "12 March 2026", image: MU(MU_PHOTOS.coastForest, 800), slug: "independence-day-2026" },
  { id: "diwali-2026", date: "October/November 2026", image: MU(MU_PHOTOS.greenCoast, 800), slug: "diwali-2026" },
  { id: "kite-festival", date: "August 2026", image: MU(MU_PHOTOS.flatIsland, 800), slug: "kite-festival-2026" },
];
