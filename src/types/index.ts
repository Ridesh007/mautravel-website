// Structural (locale-independent) shapes. All translatable text lives in
// messages/<locale>.json and is merged in at render time, keyed by `id`/`slug`.

export interface HeroSlideStructural {
  id: string;
  image: string;
  href: string;
}

export interface TourStructural {
  id: string;
  image: string;
  heroImage: string;
  duration: string;
  slug: string;
  /** Slugs of DestinationStructural entries shown on this tour's detail page, in display order. */
  destinationSlugs: string[];
}

/** Structural (locale-independent) data for a destination/place shown inside a tour and at /places/[slug]. */
export interface DestinationStructural {
  slug: string;
  image: string;
  /** Visible attribution text, required for Wikimedia Commons (CC BY/BY-SA) photos — omit for license-free sources. */
  credit?: string;
}

/** Structural (non-text) data for a fully-built-out /places/[slug] destination guide page. */
export interface PlaceDetailStructural {
  slug: string;
  heroImage: string;
  /** lucide-react icon name per quick-info item, in the same order as the translated `quickInfo` array. */
  quickInfoIcons: string[];
  discoverImage: string;
  /** Images for large "Featured Attractions" cards (with a scroll-anchor or real-link "Learn More" button), in the same order as the translated `featuredAttractions` array. Optional — a place may use `highlightImages` instead. */
  featuredAttractions?: { image: string; anchorId?: string; href?: string }[];
  /** Images for the "Things to Do" cards, in the same order as the translated `activities` array. Omit for a place whose guide has no "Things to Do" section at all. */
  activityImages?: string[];
  /** Images for the optional "Why Visit" cards, in the same order as the translated `whyVisit` array. */
  whyVisitImages?: string[];
  /** Images for the optional hands-on "encounters" cards, in the same order as the translated `encounters` array. */
  encounterImages?: string[];
  /** Images for the optional plain highlight cards (no button), in the same order as the translated `highlights` array. */
  highlightImages?: string[];
  /** Official third-party booking/info URL, opened in a new tab from the pricing section. Omit for a free-to-enter destination (e.g. a national park) — pair with `visiting*` copy instead. */
  externalBookingUrl?: string;
  externalBookingDomain?: string;
  videoSrc?: string;
  /** Structural difficulty tier per hiking trail (for badge colour), in the same order as the translated `trails` array. */
  trailDifficultyLevels?: ("easy" | "moderate" | "strenuous")[];
  /** Image for the optional single dramatic "featured experience" block (e.g. a summit view). */
  peakImage?: string;
  /** Images for the optional secondary linked-highlight grid (e.g. "Waterfalls & Viewpoints"), in the same order as the translated `waterfalls` array. Each entry may carry a real internal `href` instead of a scroll `anchorId`. */
  waterfalls?: { image: string; href?: string; anchorId?: string }[];
  /** Image for the optional conservation/education section. */
  conservationImage?: string;
  /** Explicit nearby-places override (slugs into PLACES), replacing the default "other places on the same tour" derivation. */
  nearbySlugs?: string[];
  /** Image for the optional full-bleed single "experience spotlight" section (e.g. a signature market/cultural moment) — see RichDestinationContent.experienceImage. */
  experienceImage?: string;
  /** Slug of a PLACES entry this destination sits "inside" (e.g. a landmark within a city) — adds a breadcrumb level and a "Discover {place}" link in place of the generic tour link. */
  parentPlaceSlug?: string;
  /** Real route this destination's `peak` full-bleed spotlight links to (e.g. a related activity page) — turns it into a clickable promo banner. Omit for a purely decorative peak section. */
  peakHref?: string;
  /** Images + real routes for the optional large "cross-sell" experience cards (e.g. linking out to existing activity pages), in the same order as the translated `crossSell` array. */
  crossSell?: { image: string; href: string }[];
}

/** One entry in an optional "history/heritage" timeline section (e.g. RichDestinationContent.timeline). */
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ActivityStructural {
  id: string;
  image: string;
  duration: string;
  difficulty?: string;
  slug: string;
}

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  seats: number;
  transmission: "Manual" | "Automatic";
  fuel: string;
  dailyRate: string;
  features: string[];
  objectFit?: "cover" | "contain";
}

export interface PropertyStructural {
  id: string;
  image: string;
  bedrooms: number;
  guests: number;
  priceFrom: string;
  slug: string;
}

export interface ReviewStructural {
  id: string;
  name: string;
  country: string;
  rating: number;
  date: string;
}

export interface EventStructural {
  id: string;
  date: string;
  image: string;
  slug: string;
}

export interface FAQ {
  question: string;
  answer: string;
  /** Optional small linked callouts rendered below the answer (e.g. "Explore Paragliding →" pointing at a real activity page). */
  links?: { label: string; href: string }[];
}

export interface ActivityHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface ActivityPricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ActivityReview {
  id: string;
  name: string;
  badge?: string;
  date: string;
  rating: number;
  text: string;
}

export interface ActivityLocation {
  name: string;
  subtitle: string;
  walkTime: string;
  description: string;
  landmarks: string[];
  image: string;
}

export interface ActivityGuideStat {
  icon: string;
  label: string;
}

export interface ActivityGuide {
  onlyPilotBadge: string;
  bio: string[];
  stats: ActivityGuideStat[];
}

/** Structural (non-text) data for a package attraction/experience card — image + optional link only. */
export interface PackageItemStructural {
  id: string;
  image: string;
  /** Link to an existing MauTravel route (e.g. an activity detail page), if one exists. */
  href?: string;
  /** Visible attribution text, required for Wikimedia Commons (CC BY/BY-SA) photos — omit for license-free sources. */
  credit?: string;
}

/** Structural (non-text) data for an activity detail page — icons + images only. */
export interface ActivityDetailStructural {
  slug: string;
  heroImage: string;
  duration: string;
  difficulty?: string;
  highlightIcons: string[];
  gallery: string[];
  locationImages?: string[];
  activityReviews?: ActivityReview[];
  guideStatIcons?: string[];
  videoPlaceholder?: boolean;
  videoSrc?: string;
}
