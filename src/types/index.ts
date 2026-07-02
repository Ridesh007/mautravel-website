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
  duration: string;
  slug: string;
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
}
