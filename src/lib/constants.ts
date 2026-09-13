import type {
  HeroSlideStructural,
  TourStructural,
  DestinationStructural,
  ActivityStructural,
  Vehicle,
  PropertyStructural,
  ReviewStructural,
  EventStructural,
  PackageItemStructural,
} from "@/types";

// All images are verified free Unsplash photos of real Mauritius locations (CDN-verified)
export const MU = (id: string, w = 1920) =>
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

  // ── Mauritius Holiday Package page — location-tagged on Unsplash, verified 200 ──
  // Pamplemousses Botanical Garden — location tag "Pamplemousses, Île Maurice" (Remy Hellequin)
  pamplemousses: "1781959719830-650e19fe3eeb",
  // Port Louis harbour — location tag "Port Louis, Mauritius" (Yannick Sookree)
  portLouisHarbour: "1741961934697-770dccc0e1ea",
  // Grand Baie lagoon boats — location tag "Grand-Baie, Mauritius" (Ajit Sandhu)
  grandBaie: "1662039071109-001778325956",
  // Cap Malheureux red-roof church, aerial — location tag "Cap Malheureux, Mauritius"
  capMalheureux: "1686740297492-7ab8937a2548",
  // Casela Nature Parks (ostrich) — location tag "Casela Nature Parks, Royal Road, Cascavelle, Mauritius"
  casela: "1741976628999-6fc59b75e2d0",
  // La Vanille Nature Park crocodile — location tag "La Vanille Nature Park, Riviere des Anguilles, Mauritius"
  laVanille: "1709078054826-4b5bd729ec60",
  // Black River Gorges National Park — caption "Black River Gorges - Mauritius"
  blackRiverGorges: "1540458886614-fb70955f6168",
  // Snorkelling, Blue Bay Marine Park — location tag "Blue Bay Marine Park, Blue Bay, Mauritius"
  snorkellingBlueBay: "1533914772478-15cc30e93990",
  // Dolphins, Tamarin Bay — location tag "Baie du Tamarin, Mauritius" (Mauritius's dolphin-watching spot)
  dolphinsTamarin: "1511220413245-032551094262",
  // Genuine Mauritius sunset over the ocean (location tagged "Mauritius"; exact beach not confirmed as Flic-en-Flac)
  mauritiusSunset: "1645189965761-a2d2aedbbcaa",
  // Parasailing — real parasail-over-ocean shot; location tagged Raa Atoll, Maldives (no Mauritius-tagged photo exists on Unsplash)
  parasailingGeneric: "1632904074880-b77f02b6d01e",
  // Quad biking / ATV on a forest trail — real activity shot; no location tag (no Mauritius-tagged photo exists on Unsplash)
  quadBikingGeneric: "1675428604186-a165487f857c",

  // ── La Vallée des Couleurs adventure activities — generic verified stock, no Mauritius tag exists for these ──
  // Man zip-lining through a forest canopy
  ziplineGeneric: "1637511077877-3c6a00eb32ba",
  // Suspended wood-and-rope pedestrian bridge over a forest (Monteverde, Costa Rica)
  suspensionBridgeGeneric: "1679482468134-300543dc26c3",
  // Woman on a zip line over jungle — used for "Bicycle Zipline" (no bike-on-cable photo exists)
  bicycleZiplineGeneric: "1712782516688-cbcbf93b1b7c",
  // Jeep driving an off-road dirt trail beside a forest
  fourByFourGeneric: "1704812641798-02bc92f9f39d",

  // ── La Vanille Nature Park — generic verified stock, no Mauritius tag exists for these ──
  // Close-up giant tortoise face/head portrait
  giantTortoiseGeneric: "1706957754445-273ee56b790a",
  // Nile crocodile close-up, jaws open
  nileCrocodileGeneric: "1774590552091-47215947e629",
  // Wooden boardwalk winding through dense green tropical forest
  tropicalPathGeneric: "1771904793441-f6995d734910",
  // A hand feeding a giant tortoise
  handFeedTortoiseGeneric: "1536746295297-2539b444b74d",
  // A small crocodile held in a person's palm
  babyCrocodileGeneric: "1734099308726-5d12f9ba9f8d",
  // Butterfly close-up on a leaf
  butterflyGeneric: "1634029450658-1e03987c8032",
  // Triceratops skeleton in a museum display case
  fossilMuseumGeneric: "1632665745163-84b8342ee740",
  // Tiny baby tortoise resting on dirt and grass
  babyTortoiseGeneric: "1743443776093-1582e14941b9",
  // Aerial view of crocodiles clustered on a muddy riverbank
  crocodileValleyGeneric: "1763390956088-a69023ad3cac",
  // Taxidermy great auk (extinct flightless bird) — stand-in for a "Lost Land of the Dodo" exhibit; no dodo-specific photo exists
  extinctBirdExhibitGeneric: "1787759153046-8d9c0e91346d",

  // ── Black River Gorges National Park — generic verified stock, no Mauritius tag exists for these ──
  // Wide panoramic green mountain valley (Kluane National Park, Yukon)
  mountainValleyGeneric: "1464822759023-fed622ff2c3b",
  // Solo hiker with backpack on a forest mountain trail
  hikerTrailGeneric: "1760715651666-c3e408bfdda7",
  // Colorful bird (resplendent quetzal) perched on a mossy branch
  forestBirdGeneric: "1727288549018-8bcad5503acd",
  // Observation deck with railing overlooking layered forested mountains
  viewpointRailingGeneric: "1757641193893-138b55ac69c7",
  // Wooden boardwalk through dense forest
  forestBoardwalkGeneric: "1779284297734-3d726648a08e",
  // Photographer carrying a camera across mountainous terrain
  photographerMountainsGeneric: "1535426768830-b3d7a997de2e",
  // Waterfall cascading through a lush green canyon
  tropicalWaterfallGeneric: "1773814798794-e3bd2ff56cc7",
  // Dense, moody misty forest interior
  mistyForestGeneric: "1743749601691-2e1bd776ace3",
  // Dramatic mountain peak shrouded in cloud/mist
  mistyPeakGeneric: "1761857570544-83c168b5455b",
  // Misty forested valley with layered mountains (gorge-like)
  mistyValleyGeneric: "1765871319901-0aaafe3f1a2a",
  // Aerial view of dense forest interspersed with mountain peaks
  aerialForestMountainsGeneric: "1518108157836-e65356001781",
  // Sunbeams through misty forest trees onto a path
  sunbeamForestGeneric: "1757916797439-f001c3b20716",

  // ── Port Louis destination page — verified real photos ──
  // Elevated panoramic view of Port Louis from Signal Hill — city, harbour and mountains (Unsplash caption: "Mauritius Port Louis from Signal Hill")
  portLouisSkyline: "1635427700425-3645af1fb8f9",

  // ── Cap Malheureux / Notre Dame Auxiliatrice destination page ──
  // Boats near an island — location tag "Mauritius" (Sergey Zhesterev)
  capMalheureuxBoats: "1567067947263-a242e6434f06",
  // Church interior with stained glass and wooden pews — generic verified stock, no
  // location tag exists for the real Notre Dame Auxiliatrice interior specifically
  churchInteriorGeneric: "1438032005730-c779502df39b",
};

// Port Louis destination page — Wikimedia Commons photos (verified real, identifiable locations).
// Direct upload.wikimedia.org file URLs, per next.config.ts remote pattern allowlist.
export const PORT_LOUIS_PHOTOS = {
  // Port Louis Central Market — the market's own cast-iron gateway (the "VR" arch), the
  // green market halls and the "Marché Central" opening-hours board, so the building is
  // unmistakable. CC0, author Karsten Ratzke — no attribution required.
  // Replaces a file titled "(Central Market)" that actually shows a rainy side street:
  // a bicycle, a tree trunk and shuttered shopfronts, with no part of the market visible.
  centralMarket: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Port_Louis%2C_Iron_Works_of_Port_Louis_Market.JPG",
  // Inside the Central Market — the hand-painted herbal-tisane stall, used for the
  // full-bleed "Experience the Heart of Port Louis" section, which describes the stalls
  // rather than the building. CC BY-SA 4.0, author Sushil Dawka.
  centralMarketStalls: "https://upload.wikimedia.org/wikipedia/commons/6/61/Herbal_tisanes_for_several_ailments_on_sale_at_the_Central_Market%2C_Port_Louis%2C_Mauritius.jpg",
  centralMarketStallsCredit: "Photo: Sushil Dawka / Wikimedia Commons, CC BY-SA 4.0",
  // Caudan Waterfront plaza — CC0 1.0, author Benoît Prieur, no credit required
  caudanWaterfront: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Vue_de_la_place_de_Caudan_Waterfront_%28Port_Louis%29_-_1.jpg",
  // Fort Adelaide (the Citadel) — CC BY-SA 3.0, author Thierry
  fortAdelaide: "https://upload.wikimedia.org/wikipedia/commons/d/d9/The_Citadel_of_Port_Louis.JPG",
  fortAdelaideCredit: "Photo: Thierry / Wikimedia Commons, CC BY-SA 3.0",
  // Aapravasi Ghat UNESCO World Heritage Site — CC BY-SA 4.0, author Suyash Dwivedi
  aapravasiGhat: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Aapravasi_Ghat_Museum%2C_Mauritius_%2841%29.jpg",
  aapravasiGhatCredit: "Photo: Suyash Dwivedi / Wikimedia Commons, CC BY-SA 4.0",
  // Chinatown, Port Louis — the paifang gateway, red lanterns and the Chinatown Food &
  // Culture Festival banner, with Mauritian number plates in shot. CC BY-SA 3.0, author Sualkdd.
  // Replaces a file titled "China Town" that actually shows the Royal Bridge canal: a real
  // Port Louis street, but with nothing in frame that reads as Chinatown.
  chinatown: "https://upload.wikimedia.org/wikipedia/commons/0/00/China_Town_-_panoramio.jpg",
  chinatownCredit: "Photo: Sualkdd / Wikimedia Commons, CC BY-SA 3.0",
  // Natural History Museum (Mauritius Institute) exterior — CC0, author Karsten Ratzke, no credit required
  naturalHistoryMuseum: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Port_Louis%2C_Mauritius_Institute.JPG",
  // Royal Road, Port Louis — a historic colonial-era street — CC BY-SA 4.0, author Z thomas
  colonialStreet: "https://upload.wikimedia.org/wikipedia/commons/8/81/Royal_road_Port_Louis_2019-09-27.jpg",
  colonialStreetCredit: "Photo: Z thomas / Wikimedia Commons, CC BY-SA 4.0",
};

// SSR Botanical Garden (Pamplemousses) destination page — Wikimedia Commons photos (verified real, on-site).
export const SSR_GARDEN_PHOTOS = {
  // Victoria cruziana giant water lily pond — CC0, author Benoît Prieur
  giantWaterLilies: "https://upload.wikimedia.org/wikipedia/commons/9/99/Victoria_cruziana_pond_at_Sir_Seewoosagur_Ramgoolam_Botanical_Garden%2C_March_2020_%282%29.jpg",
  // Avenue of Royal Palms (Poivre Avenue) — CC BY-SA 3.0, author Anne97432
  palmAvenue: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Poivreavenue.jpg",
  palmAvenueCredit: "Photo: Anne97432 / Wikimedia Commons, CC BY-SA 3.0",
  // Pink lotus pond — CC0, author Benoît Prieur
  lotusPond: "https://upload.wikimedia.org/wikipedia/commons/9/97/Pink_Lotus_Pond_at_Sir_Seewoosagur_Ramgoolam_Botanical_Garden_%281%29.jpg",
  // Grand Bassin — the garden's own internal pond (not the southern Ganga Talao/Grand Bassin) — CC0, author Benoît Prieur
  grandBassin: "https://upload.wikimedia.org/wikipedia/commons/8/89/Grand_bassin_au_jardin_botanique_de_Pamplemousses%2C_mars_2020.jpg",
  // Baobab (Adansonia digitata) — a notable historic tree — CC BY-SA 3.0, author Liné1
  historicTree: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Adansonia_digitata_01_by_Line1.JPG",
  historicTreeCredit: "Photo: Liné1 / Wikimedia Commons, CC BY-SA 3.0",
  // Château Mon Plaisir, the historic estate house — CC BY-SA 3.0, author Lonelyplanet
  monPlaisir: "https://upload.wikimedia.org/wikipedia/commons/8/88/Mon_Plaisir_im_Sir_Seewoosagur_Ramgoolam_Botanical_Garden.jpg",
  monPlaisirCredit: "Photo: Lonelyplanet / Wikimedia Commons, CC BY-SA 3.0",
  // Latania verschaffeltii, an endemic Mascarene fan palm, photographed in the garden — Public Domain
  exoticPlant: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Latania_verschaffeltii_Pamplemousses_Garden.JPG",
};

// Citadelle / Fort Adelaide destination page — Wikimedia Commons photos (verified real, on-site).
export const CITADEL_PHOTOS = {
  // Aerial/drone shot — fort's basalt bastion walls + Port Louis city + mountains together — CC BY-SA 3.0, author Arne Müseler
  heroAerial: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Mauritius_citadelle_fort_adelaide.jpg",
  heroAerialCredit: "Photo: Arne Müseler / Wikimedia Commons, CC BY-SA 3.0",
  // View from the fort over Champ de Mars racetrack, city and mountains — CC BY-SA 4.0, author Z thomas
  viewFromFort: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Pferderennbahn_port_Louis_2019-09-27.jpg",
  viewFromFortCredit: "Photo: Z thomas / Wikimedia Commons, CC BY-SA 4.0",
  // Basalt rampart wall with arched casemates, close/medium shot — CC BY-SA 4.0, author Z thomas
  basaltWalls: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Fort_Adelaide_Port_Louis_2019-09-27_2.jpg",
  basaltWallsCredit: "Photo: Z thomas / Wikimedia Commons, CC BY-SA 4.0",
  // Main stone entrance archway with flanking cannon-barrel bollards — CC BY-SA 4.0, author Z thomas
  entranceCannons: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fort_Adelaide_Port_Louis_2019-09-27.jpg",
  entranceCannonsCredit: "Photo: Z thomas / Wikimedia Commons, CC BY-SA 4.0",
  // Wide shot from town looking up at the fort's ridge silhouette — Public Domain, author Karsten Ratzke
  fortSilhouette: "https://upload.wikimedia.org/wikipedia/commons/3/38/Port_Louis%2C_Fort_Adelaide.JPG",
  // Champ de Mars racecourse, elevated view with city and mountains — CC BY-SA 4.0, author Martin Falbisoner
  champDeMars: "https://upload.wikimedia.org/wikipedia/commons/e/ed/The_Champ_de_Mars_Racecourse.JPG",
  champDeMarsCredit: "Photo: Martin Falbisoner / Wikimedia Commons, CC BY-SA 4.0",
};

export const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "airportTransfers", href: "/airport-transfers" },
  { key: "tours", href: "/tours" },
  { key: "mauritiusHoliday", href: "/mauritius-holiday-package" },
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

// `destinationSlugs` reference DestinationStructural entries in PLACES below, in display
// order on each tour's /tours/[slug] detail page. Sourced from this tour's own `highlights`
// (see messages/en.json tours.items.<id>.highlights) plus, where the region overlaps, the
// matching discover section on /mauritius-holiday-package — no destinations invented.
export const TOURS: TourStructural[] = [
  {
    id: "north",
    image: MU(MU_PHOTOS.portLouis, 800),
    heroImage: MU(MU_PHOTOS.portLouis, 1920),
    duration: "Full Day (8–9 hours)",
    slug: "north-tour",
    destinationSlugs: ["port-louis", "caudan-waterfront", "pamplemousses-botanical-garden", "citadel-fortress", "grand-baie", "cap-malheureux"],
  },
  {
    id: "south",
    image: MU(MU_PHOTOS.leMorneAerial, 800),
    heroImage: MU(MU_PHOTOS.leMorneAerial, 1920),
    duration: "Full Day (8–9 hours)",
    slug: "south-tour",
    destinationSlugs: ["le-morne-brabant", "black-river-gorges", "chamarel", "rhumerie-de-chamarel", "la-roche-qui-pleure", "alexandra-falls", "la-vallee-des-couleurs", "la-vanille-nature-park", "gris-gris", "rochester-falls"],
  },
  {
    id: "east",
    image: MU(MU_PHOTOS.belleMare, 800),
    heroImage: MU(MU_PHOTOS.belleMare, 1920),
    duration: "Full Day (8–9 hours)",
    slug: "east-tour",
    destinationSlugs: ["belle-mare-beach", "mahebourg-history-museum", "blue-bay-marine-park", "ile-aux-aigrettes", "ile-aux-cerfs", "grse-waterfall"],
  },
  {
    id: "west",
    image: MU(MU_PHOTOS.dinarobinPalms, 800),
    heroImage: MU(MU_PHOTOS.dinarobinPalms, 1920),
    duration: "Full Day (8–9 hours)",
    slug: "west-tour",
    destinationSlugs: ["flic-en-flac-beach", "casela-world-of-adventures", "tamarin-bay"],
  },
  {
    id: "custom",
    image: MU(MU_PHOTOS.leMorneResort, 800),
    heroImage: MU(MU_PHOTOS.leMorneResort, 1920),
    duration: "Flexible (half day or full day)",
    slug: "custom-tour",
    destinationSlugs: [],
  },
];

// Structural data for /places/[slug] destination pages, also used to render the
// "Places You'll Discover" cards on each /tours/[slug] page. Text (name/shortDescription/tag)
// lives in messages/<locale>.json under places.items.<slug>. Images reuse verified
// Mauritius-tagged photos already used elsewhere on the site (see MU_PHOTOS above) —
// duplicated across a couple of places where no distinct genuine photo exists yet.
export const PLACES: DestinationStructural[] = [
  // North
  { slug: "port-louis", image: MU(MU_PHOTOS.portLouisSkyline, 1600) },
  { slug: "caudan-waterfront", image: PORT_LOUIS_PHOTOS.caudanWaterfront },
  { slug: "pamplemousses-botanical-garden", image: SSR_GARDEN_PHOTOS.giantWaterLilies },
  { slug: "citadel-fortress", image: CITADEL_PHOTOS.heroAerial, credit: CITADEL_PHOTOS.heroAerialCredit },
  { slug: "grand-baie", image: MU(MU_PHOTOS.grandBaie, 1600) },
  { slug: "cap-malheureux", image: MU(MU_PHOTOS.capMalheureux, 1600) },
  {
    slug: "aapravasi-ghat",
    image: PORT_LOUIS_PHOTOS.aapravasiGhat,
    credit: PORT_LOUIS_PHOTOS.aapravasiGhatCredit,
  },

  // North — nearby beaches referenced from the Grand Baie destination page (no
  // dedicated verified Mauritius-tagged photo exists yet for these three; reusing
  // already-verified generic Mauritius beach photos, consistent with the pattern above)
  {
    // Was Flat Island — a different island off the north coast. Now the real Péreybère beach.
    slug: "pereybere",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Plage_de_Pereybere_2016.jpg",
    credit: "Photo: Gonzolito / Wikimedia Commons, CC BY-SA 4.0",
  },
  {
    // Was a generic "Mauritius island coast" shot. Now Mont Choisy bay from the air.
    slug: "mont-choisy",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Aerial_view_of_the_Mon_Choisy_Beach_and_Trou_aux_Biches_Beach_in_Mauritius_%2853698215480%29.jpg",
    credit: "Photo: dronepicr / Wikimedia Commons, CC BY 2.0",
  },
  {
    // Was a generic rocky beach (shared with two southern sites). Now the real Trou aux Biches sand.
    slug: "trou-aux-biches",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Aerial_view_of_the_Trou_aux_Biches_Beach%2C_Mauritius_%2853697771176%29.jpg",
    credit: "Photo: dronepicr / Wikimedia Commons, CC BY 2.0",
  },

  // South
  { slug: "le-morne-brabant", image: MU(MU_PHOTOS.leMorneMountain, 1600) },
  { slug: "black-river-gorges", image: MU(MU_PHOTOS.blackRiverGorges, 1600) },
  {
    slug: "chamarel",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Seven_Coloured_Earths%2C_Chamarel%2C_March_2020_%284%29.jpg",
  },
  {
    slug: "rhumerie-de-chamarel",
    // Genuine aerial photo of the Rhumerie de Chamarel estate — CC BY 2.0, author dronepicr
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Rhumerie_de_Chamarel_Restaurant_and_Rum_Distillery_in_Mauritius_%2853697998963%29.jpg",
    credit: "Photo: dronepicr / Wikimedia Commons, CC BY 2.0",
  },
  {
    // The Souillac headland this rock sits on — the same coast, a few minutes' walk away.
    slug: "la-roche-qui-pleure",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/2006-10-08_Gris_Gris_Beach%2C_Mauritius.jpg",
    credit: "Photo: Hansueli Krapf / Wikimedia Commons, CC BY-SA 3.0",
  },
  {
    slug: "alexandra-falls",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Alexandra_Falls_Mauritius_2019-09-28.jpg",
    credit: "Photo: Z thomas / Wikimedia Commons, CC BY-SA 4.0",
  },
  {
    // ⚠ NEEDS AUTHENTIC PHOTO — this card previously showed Chamarel's Seven Coloured
    // Earths, which is a DIFFERENT attraction (Chamarel has seven colours, this park
    // has twenty-three) and made the two cards identical. No freely-licensed photo of
    // La Vallée des Couleurs exists on Wikimedia Commons. Until MauTravel-owned or
    // licensed photography of the park is available this uses a neutral southern-
    // Mauritius nature photo that does not depict any other named attraction.
    slug: "la-vallee-des-couleurs",
    image: MU(MU_PHOTOS.coastForest, 1600),
  },
  { slug: "la-vanille-nature-park", image: MU(MU_PHOTOS.laVanille, 1600) },
  {
    // Was a generic rocky beach. Now the actual Gris Gris clifftop.
    slug: "gris-gris",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/2006-10-03_Gris_Gris_Beach%2C_Mauritius.jpg",
    credit: "Photo: Hansueli Krapf / Wikimedia Commons, CC BY-SA 3.0",
  },
  {
    // Was a generic waterfall shared with GRSE. Now Rochester Falls' own basalt columns.
    slug: "rochester-falls",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/2006-10-03_Rochester_Falls%2C_Mauritius.jpg",
    credit: "Photo: Hansueli Krapf / Wikimedia Commons, CC BY-SA 3.0",
  },

  // East
  { slug: "belle-mare-beach", image: MU(MU_PHOTOS.belleMare, 1600) },
  {
    // Was a beach photo for a museum. Now the actual National History Museum building.
    slug: "mahebourg-history-museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/National_History_Museum_building%2C_Mahebourg%2C_Mauritius.jpg",
    credit: "Photo: आशीष भटनागर / Wikimedia Commons, CC BY-SA 3.0",
  },
  { slug: "blue-bay-marine-park", image: MU(MU_PHOTOS.snorkellingBlueBay, 1600) },
  {
    // Was a generic green coastline. Now the reserve itself, seen from offshore.
    slug: "ile-aux-aigrettes",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ile_aux_Aigrettes_Nature_Reserve_from_offshore%2C_Mauritius.JPG",
    credit: "Photo: Shoestring / Wikimedia Commons, CC BY-SA 4.0",
  },
  {
    // Was Flat Island — a different island. Now Île aux Cerfs itself.
    slug: "ile-aux-cerfs",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Mauritius_Ile_aux_Cerfs_aerial.jpg",
    credit: "Photo: Arne Müseler / Wikimedia Commons, CC BY-SA 3.0 DE",
  },
  {
    // Was the same generic waterfall as Rochester Falls. Now the real Grand River South East falls.
    slug: "grse-waterfall",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grand_river_south_east_Mauritius_2019-09-29.jpg",
    credit: "Photo: Z thomas / Wikimedia Commons, CC BY-SA 4.0",
  },

  // West
  { slug: "flic-en-flac-beach", image: MU(MU_PHOTOS.flicEnFlac, 1600) },
  { slug: "casela-world-of-adventures", image: MU(MU_PHOTOS.casela, 1600) },
  { slug: "tamarin-bay", image: MU(MU_PHOTOS.dolphinsTamarin, 1600) },
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

// ── Mauritius Holiday Package page (/mauritius-holiday-package) ─────────────
// Structural-only: images + optional links to existing routes. All text lives
// in messages/<locale>.json under "mauritiusPackage" — edit copy there, edit
// the attraction list (add/remove/reorder) here.

export const PACKAGE_HERO_IMAGE = MU(MU_PHOTOS.leMorneAerial);

// Small circular "Your Journey" preview strip at the bottom of the hero.
// Reuses images already verified/used elsewhere on this page — no new sourcing needed.
export const HERO_JOURNEY_PREVIEW: PackageItemStructural[] = [
  { id: "north", image: MU(MU_PHOTOS.pamplemousses, 200) },
  { id: "wildSouth", image: MU(MU_PHOTOS.blackRiverGorges, 200) },
  { id: "wildlife", image: MU(MU_PHOTOS.casela, 200) },
  { id: "westCoast", image: MU(MU_PHOTOS.mauritiusSunset, 200) },
  { id: "ileAuxCerfs", image: MU(MU_PHOTOS.flatIsland, 200) },
  { id: "adventure", image: "/activities/paragliding/card.jpeg" },
];
// "Your Mauritius Experience" section — aerial coastal town, alongside the journey steps
export const PACKAGE_EXPERIENCE_IMAGE = MU(MU_PHOTOS.flicEnFlacCity);
// Real photo of SSR International Airport, Mauritius — the pick-up/drop-off curbside
// canopy. Not on Unsplash (verified — no free SSR/Mauritius-airport photo exists there);
// sourced from Wikimedia Commons instead, which — unlike Unsplash — requires visible
// attribution under its licence. Keep PACKAGE_AIRPORT_IMAGE_CREDIT rendered alongside it.
export const PACKAGE_AIRPORT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flughafen_Mauritius_2019-10-01.jpg/1920px-Flughafen_Mauritius_2019-10-01.jpg";
export const PACKAGE_AIRPORT_IMAGE_CREDIT = "Photo: Z thomas / Wikimedia Commons, CC BY-SA 4.0";
export const PACKAGE_CASELA_IMAGE = MU(MU_PHOTOS.casela);
export const PACKAGE_SUNSET_IMAGE = MU(MU_PHOTOS.mauritiusSunset);

export const NORTH_ATTRACTIONS: PackageItemStructural[] = [
  { id: "pamplemousses", image: MU(MU_PHOTOS.pamplemousses, 400) },
  { id: "portLouis", image: MU(MU_PHOTOS.portLouisHarbour, 400) },
  { id: "grandBaie", image: MU(MU_PHOTOS.grandBaie, 400) },
  { id: "capMalheureux", image: MU(MU_PHOTOS.capMalheureux, 400) },
];

// NOTE: no genuine "Alexandra Falls" or "La Vallée des Couleurs" photo exists on Unsplash
// (verified via exhaustive search) — sourced real photos of each specific spot from
// Wikimedia Commons instead. Alexandra Falls' photo is CC BY-SA 4.0 (requires the visible
// `credit` attribution below); the Vallée des Couleurs / Seven Coloured Earths photo is
// CC0 (public domain — no attribution required).
export const SOUTH_ATTRACTIONS: PackageItemStructural[] = [
  { id: "blackRiverGorges", image: MU(MU_PHOTOS.blackRiverGorges, 400) },
  {
    id: "alexandraFalls",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Alexandra_Falls_Mauritius_2019-09-28.jpg",
    credit: "Photo: Z thomas / Wikimedia Commons, CC BY-SA 4.0",
  },
  {
    id: "valleeDesCouleurs",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Seven_Coloured_Earths%2C_Chamarel%2C_March_2020_%284%29.jpg",
  },
  { id: "laVanille", image: MU(MU_PHOTOS.laVanille, 400) },
];

// NOTE: no genuine "Île aux Cerfs" or "GRSE Waterfall" photo exists on Unsplash
// (verified via exhaustive search) — still using placeholders until real photos of
// these specific spots are sourced.
export const OCEAN_EXPERIENCES: PackageItemStructural[] = [
  { id: "ileAuxCerfs", image: MU(MU_PHOTOS.flatIsland, 800) },
  { id: "grseWaterfall", image: MU(MU_PHOTOS.underwaterWaterfall, 800) },
  { id: "snorkelling", image: MU(MU_PHOTOS.snorkellingBlueBay, 800) },
  { id: "catamaran", image: MU(MU_PHOTOS.catamaran, 800) },
];

// `href` only set where a matching route already exists under /activities — do not invent routes.
// Quad Biking has no dedicated activity page yet, so its slide has no link.
// Parasailing / Quad Biking: no Mauritius-tagged photo exists on Unsplash — using a real
// photo of the activity itself (location unconfirmed) rather than an unrelated stock image.
// Order matches the "Add Some Adventure" carousel; sized larger (1600w) for full-bleed display.
export const ADVENTURE_ACTIVITIES: PackageItemStructural[] = [
  { id: "paragliding", image: "/activities/paragliding/card.jpeg", href: "/activities/paragliding" },
  { id: "parasailing", image: MU(MU_PHOTOS.parasailingGeneric, 1600), href: "/activities/parasailing" },
  { id: "dolphinWatching", image: MU(MU_PHOTOS.dolphinsTamarin, 1600), href: "/activities/dolphin-encounter" },
  { id: "underseaWalk", image: MU(MU_PHOTOS.flatIsland, 1600), href: "/activities/underwater-walk" },
  { id: "quadBiking", image: MU(MU_PHOTOS.quadBikingGeneric, 1600) },
  { id: "waterfallTrekking", image: "/activities/waterfall-river-treks/card.jpeg", href: "/activities/waterfalls-river-treks" },
];

export const EVENTS: EventStructural[] = [
  { id: "cavadee-2026", date: "January 2026", image: MU(MU_PHOTOS.flicEnFlac, 800), slug: "thaipoosam-cavadee-2026" },
  { id: "chinese-new-year", date: "January/February 2026", image: MU(MU_PHOTOS.portLouis, 800), slug: "chinese-new-year-2026" },
  { id: "holi-2026", date: "March 2026", image: MU(MU_PHOTOS.dinarobinPalms, 800), slug: "holi-2026" },
  { id: "independence-day", date: "12 March 2026", image: MU(MU_PHOTOS.coastForest, 800), slug: "independence-day-2026" },
  { id: "diwali-2026", date: "October/November 2026", image: MU(MU_PHOTOS.greenCoast, 800), slug: "diwali-2026" },
  { id: "kite-festival", date: "August 2026", image: MU(MU_PHOTOS.flatIsland, 800), slug: "kite-festival-2026" },
];
