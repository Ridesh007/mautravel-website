// ============================================================
// Structural (locale-independent) data for activity detail pages.
// All text (name, about, highlights, included, pricing, faqs, locations)
// lives in messages/<locale>.json under `activityDetails.<slug>`.
// PLACEHOLDER pricing amounts (€XX) still need real figures before launch.
// ============================================================

import type { ActivityDetailStructural, ActivityReview } from "@/types";

const PARAGLIDING_REVIEWS: ActivityReview[] = [
  { id: "r1", name: "Andrzej K", badge: "Local Guide · 24 Reviews · 844 Photos", date: "May 2026", rating: 5, text: "An unforgettable tandem paragliding experience. Bambam was incredibly professional, friendly and made me feel completely safe throughout the entire flight. Even after trying skydiving before, I can honestly say paragliding impressed me even more. Highly recommended." },
  { id: "r2", name: "Dylan Seetaloo", badge: "Local Guide · 24 Reviews · 8 Photos", date: "May 2026", rating: 5, text: "This isn't just an activity — it's a memory you'll keep forever. The feeling of flying above Mauritius is impossible to describe. Absolutely breathtaking." },
  { id: "r3", name: "Beedasy Zubair", badge: "1 Review · 2 Photos", date: "April 2026", rating: 5, text: "Everything was perfectly organised from beginning to end. The pilot made me feel comfortable and confident throughout the flight. Truly an unforgettable experience." },
  { id: "r4", name: "Gosia Kieda", badge: "Local Guide · 59 Reviews · 285 Photos", date: "May 2026", rating: 5, text: "Although I'm afraid of heights, Bambam explained everything patiently and made me feel completely safe. Thanks to him I achieved something I never thought I'd do." },
  { id: "r5", name: "Shaey Ma", badge: "1 Review", date: "June 2026", rating: 5, text: "I was nervous because of my fear of heights, but the team made me feel incredibly safe. Friendly, professional and unforgettable. I will definitely come back." },
  { id: "r6", name: "Raza Guide", badge: "Local Guide · 20 Reviews · 130 Photos", date: "June 2026", rating: 5, text: "One of the best experiences I've had in Mauritius. Very professional, excellent guidance and breathtaking views. Definitely worth doing." },
  { id: "r7", name: "Akash Seer", badge: "1 Review · 2 Photos", date: "April 2026", rating: 5, text: "The pilot immediately put me at ease. The views were spectacular and the flight was incredibly comfortable. Highly recommended." },
  { id: "r8", name: "Aliyah Bheekhoo", badge: "1 Review · 1 Photo", date: "May 2026", rating: 5, text: "Best experience ever! Bambam was incredibly friendly and made me feel comfortable throughout the entire flight. Worth every euro." },
  { id: "r9", name: "Esha Chokowry", badge: "2 Reviews", date: "April 2026", rating: 5, text: "One of the most unforgettable experiences of my life. Once you're in the air, all the fear disappears and you're left with complete peace and breathtaking views." },
  { id: "r10", name: "Krishna Chakowry", badge: "Local Guide · 5 Reviews · 22 Photos", date: "April 2026", rating: 5, text: "Seeing Mauritius from a bird's-eye view was absolutely incredible. An experience I'll never forget." },
  { id: "r11", name: "Sakeena Chokowry", badge: "1 Review", date: "April 2026", rating: 5, text: "Smooth, safe and beyond exciting. The pilot was professional from take-off to landing. I highly recommend this experience." },
  { id: "r12", name: "Giacomo", badge: "Local Guide · 351 Reviews · 249 Photos", date: "May 2026", rating: 5, text: "Both my girlfriend and I enjoyed an incredible scenic flight. The team was welcoming, attentive and highly professional. The views over Mauritius were unforgettable." },
  { id: "r13", name: "Anne-Sophie Saudel", badge: "1 Review · 2 Photos", date: "May 2026", rating: 5, text: "My first paragliding experience couldn't have been better. Professional, reassuring and unforgettable." },
  { id: "r14", name: "Matthieu Gaubert", badge: "1 Review", date: "May 2026", rating: 5, text: "Despite changing weather conditions, the team remained professional and accommodating. A wonderful experience and a fantastic memory." },
  { id: "r15", name: "Quentin Hemeury", badge: "5 Reviews · 1 Photo", date: "June 2026", rating: 5, text: "Flying above Quatre Sœurs during our honeymoon was unforgettable. Thomas was reassuring throughout the entire experience." },
  { id: "r16", name: "Alina Bikteeva", badge: "2 Reviews · 7 Photos", date: "June 2026", rating: 5, text: "Flying from Le Morne was one of the highlights of our trip. Booking through WhatsApp was simple and the views of the lagoon and underwater waterfall were incredible." },
  { id: "r17", name: "Sarah (S16)", badge: "5 Reviews · 1 Photo", date: "June 2026", rating: 5, text: "The best activity I experienced in Mauritius. The pilot understood exactly what I wanted to see and made the entire flight unforgettable." },
];

export const ACTIVITY_DETAILS: Record<string, ActivityDetailStructural> = {
  paragliding: {
    slug: "paragliding",
    heroImage: "/activities/paragliding/card.jpeg",
    duration: "45 – 90 minutes (incl. briefing)",
    difficulty: "All levels — no experience needed",
    highlightIcons: ["Clock", "UserCheck", "MapPin", "Users", "Shield", "Sunrise"],
    locationImages: [
      "https://images.unsplash.com/photo-1687977424023-83e3d3385131?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1686739996006-7c2cdff5d34c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589745659208-9bdc6fb0ef23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513415563383-4e580ed27a46?auto=format&fit=crop&w=800&q=80",
    ],
    gallery: [
      "/activities/paragliding/pg-1.jpg", "/activities/paragliding/pg-2.jpg", "/activities/paragliding/pg-3.jpg",
      "/activities/paragliding/pg-4.jpg", "/activities/paragliding/pg-5.jpg", "/activities/paragliding/pg-6.jpg",
      "/activities/paragliding/pg-7.jpg", "/activities/paragliding/pg-8.jpg", "/activities/paragliding/pg-9.jpg",
    ],
    activityReviews: PARAGLIDING_REVIEWS,
  },

  "hiking-adventures": {
    slug: "hiking-adventures",
    heroImage: "/activities/hiking-adventures/card.jpeg",
    duration: "3 – 8 hours",
    difficulty: "All levels",
    highlightIcons: ["Clock", "MapPin", "Users", "Zap", "UserCheck", "Shield"],
    gallery: [
      "/activities/hiking-adventures/ha-1.jpeg", "/activities/hiking-adventures/ha-2.jpeg", "/activities/hiking-adventures/ha-3.jpeg",
      "/activities/hiking-adventures/ha-4.jpeg", "/activities/hiking-adventures/ha-5.jpeg", "/activities/hiking-adventures/ha-6.jpeg",
      "/activities/hiking-adventures/ha-7.jpeg", "/activities/hiking-adventures/ha-8.jpeg", "/activities/hiking-adventures/ha-9.jpeg",
      "/activities/hiking-adventures/ha-10.jpeg", "/activities/hiking-adventures/ha-11.jpeg",
    ],
  },

  "waterfalls-river-treks": {
    slug: "waterfalls-river-treks",
    heroImage: "/activities/waterfall-river-treks/card.jpeg",
    duration: "3 – 7 hours",
    difficulty: "Moderate",
    highlightIcons: ["Clock", "MapPin", "Users", "Zap", "UserCheck", "Shield"],
    gallery: [
      "/activities/waterfall-river-treks/wf-1.jpg", "/activities/waterfall-river-treks/wf-2.jpg", "/activities/waterfall-river-treks/wf-3.jpg",
      "/activities/waterfall-river-treks/wf-4.jpg", "/activities/waterfall-river-treks/wf-5.jpg", "/activities/waterfall-river-treks/wf-6.jpg",
      "/activities/waterfall-river-treks/wf-7.jpg", "/activities/waterfall-river-treks/wf-8.jpg", "/activities/waterfall-river-treks/wf-9.jpg",
      "/activities/waterfall-river-treks/wf-10.jpg", "/activities/waterfall-river-treks/wf-11.jpg", "/activities/waterfall-river-treks/wf-12.jpg",
      "/activities/waterfall-river-treks/wf-13.jpg", "/activities/waterfall-river-treks/wf-14.jpg", "/activities/waterfall-river-treks/wf-15.jpg",
      "/activities/waterfall-river-treks/wf-16.jpg", "/activities/waterfall-river-treks/wf-17.jpg", "/activities/waterfall-river-treks/wf-18.jpg",
    ],
  },

  "7-caves-exploration": {
    slug: "7-caves-exploration",
    heroImage: "/activities/7-caves-exploration/card.jpeg",
    duration: "3 – 4 hours",
    difficulty: "Easy to Moderate",
    highlightIcons: ["Clock", "MapPin", "Users", "Zap", "UserCheck", "Shield"],
    gallery: [
      "/activities/7-caves-exploration/sc-1.jpeg", "/activities/7-caves-exploration/sc-2.jpeg", "/activities/7-caves-exploration/sc-3.jpeg",
      "/activities/7-caves-exploration/sc-4.jpeg", "/activities/7-caves-exploration/sc-5.jpeg", "/activities/7-caves-exploration/sc-6.jpeg",
      "/activities/7-caves-exploration/sc-7.jpeg", "/activities/7-caves-exploration/sc-8.jpeg", "/activities/7-caves-exploration/sc-9.jpeg",
      "/activities/7-caves-exploration/sc-10.jpeg", "/activities/7-caves-exploration/sc-11.jpeg", "/activities/7-caves-exploration/sc-12.jpeg",
      "/activities/7-caves-exploration/sc-13.jpeg", "/activities/7-caves-exploration/sc-14.jpeg",
    ],
  },

  "wild-south-experience": {
    slug: "wild-south-experience",
    heroImage: "/activities/wild-south-experience/card.jpeg",
    duration: "Full Day (7 – 9 hours)",
    highlightIcons: ["Clock", "MapPin", "Users", "Star", "UserCheck", "Shield"],
    gallery: [
      "/activities/wild-south-experience/wse-1.jpeg", "/activities/wild-south-experience/wse-2.jpeg", "/activities/wild-south-experience/wse-3.jpeg",
      "/activities/wild-south-experience/wse-4.jpeg", "/activities/wild-south-experience/wse-5.jpeg", "/activities/wild-south-experience/wse-6.jpeg",
      "/activities/wild-south-experience/wse-7.jpeg", "/activities/wild-south-experience/wse-8.jpeg", "/activities/wild-south-experience/wse-9.jpeg",
      "/activities/wild-south-experience/wse-10.jpeg", "/activities/wild-south-experience/wse-11.jpeg", "/activities/wild-south-experience/wse-12.jpeg",
      "/activities/wild-south-experience/wse-13.jpeg", "/activities/wild-south-experience/wse-14.jpeg", "/activities/wild-south-experience/wse-15.jpeg",
      "/activities/wild-south-experience/wse-16.jpeg", "/activities/wild-south-experience/wse-17.jpeg",
    ],
  },

  "mangrove-kayaking": {
    slug: "mangrove-kayaking",
    heroImage: "/activities/mangrove-kayaking/card.jpeg",
    duration: "2 – 3 hours",
    highlightIcons: ["Clock", "MapPin", "Users", "Star", "Heart", "Shield"],
    gallery: [
      "/activities/mangrove-kayaking/mk-1.jpeg", "/activities/mangrove-kayaking/mk-2.jpeg", "/activities/mangrove-kayaking/mk-3.jpeg",
      "/activities/mangrove-kayaking/mk-4.jpeg", "/activities/mangrove-kayaking/mk-5.jpeg", "/activities/mangrove-kayaking/mk-6.jpeg",
      "/activities/mangrove-kayaking/mk-7.jpeg", "/activities/mangrove-kayaking/mk-8.jpeg", "/activities/mangrove-kayaking/mk-9.jpeg",
      "/activities/mangrove-kayaking/mk-10.jpeg", "/activities/mangrove-kayaking/mk-11.jpeg", "/activities/mangrove-kayaking/mk-12.jpeg",
      "/activities/mangrove-kayaking/mk-13.jpeg", "/activities/mangrove-kayaking/mk-14.jpeg", "/activities/mangrove-kayaking/mk-15.jpeg",
      "/activities/mangrove-kayaking/mk-16.jpeg", "/activities/mangrove-kayaking/mk-17.jpeg",
    ],
  },

  "dolphin-encounter": {
    slug: "dolphin-encounter",
    heroImage: "https://images.unsplash.com/photo-1509722156492-92fa997b78f5?auto=format&fit=crop&w=1920&q=80",
    duration: "2 – 4 hours",
    highlightIcons: ["Clock", "MapPin", "Users", "Sunrise", "Heart", "Shield"],
    gallery: [
      "https://images.unsplash.com/photo-1509722156492-92fa997b78f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1647773090746-7d50ecb68b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1650928367430-254e3e672dd9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1686739996006-7c2cdff5d34c?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  parasailing: {
    slug: "parasailing",
    heroImage: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1920&q=80",
    duration: "15 – 20 minutes",
    highlightIcons: ["Clock", "MapPin", "Users", "Star", "Heart", "Shield"],
    gallery: [
      "https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1651104677157-f14b80602682?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1668265704484-b5f975f37610?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1650928367430-254e3e672dd9?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  "underwater-walk": {
    slug: "underwater-walk",
    heroImage: "https://images.unsplash.com/photo-1707381997108-a21519a2b8eb?auto=format&fit=crop&w=1920&q=80",
    duration: "30 – 45 minutes",
    highlightIcons: ["Clock", "MapPin", "Users", "Star", "UserCheck", "Shield"],
    gallery: [],
  },
};
