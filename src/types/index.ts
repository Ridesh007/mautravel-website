export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  label: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export interface Tour {
  id: string;
  name: string;
  image: string;
  description: string;
  duration: string;
  highlights: string[];
  slug: string;
}

export interface Activity {
  id: string;
  name: string;
  image: string;
  description: string;
  duration: string;
  difficulty?: string;
  highlights?: string[];
  suitableFor?: string;
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

export interface Property {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  bedrooms: number;
  guests: number;
  amenities: string[];
  priceFrom: string;
  slug: string;
}

export interface Review {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  date: string;
  activity?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
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

export interface ActivityDetail {
  slug: string;
  name: string;
  pageTitle: string;
  pageDescription: string;
  heroImage: string;
  heroSubtitle: string;
  duration: string;
  difficulty?: string;
  about: string[];
  highlights: ActivityHighlight[];
  included: string[];
  notIncluded: string[];
  gallery: string[];
  locations?: ActivityLocation[];
  pricing: ActivityPricingTier[];
  pricingNote?: string;
  faqs: FAQ[];
  activityReviews?: {
    items: ActivityReview[];
    note?: string;
  };
}
