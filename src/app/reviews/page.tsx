import type { Metadata } from "next";
import { Star, Quote, Zap } from "lucide-react";
import { REVIEWS, ACTIVITY_REVIEWS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { cn } from "@/lib/utils";
import type { Review } from "@/types";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what travellers from around the world say about MauTravel. Hundreds of 5-star reviews from satisfied clients.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    url: "/reviews",
  },
};

const ALL_REVIEWS = [...REVIEWS, ...ACTIVITY_REVIEWS];

const REVIEWS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: ALL_REVIEWS.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewBody: r.text,
      datePublished: r.date,
      itemReviewed: {
        "@type": "TravelAgency",
        "@id": "https://www.mautravel.com/#organization",
        name: "MauTravel",
      },
    },
  })),
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("w-4 h-4", i < rating ? "text-gold fill-gold" : "text-gray-200 fill-gray-200")}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, showActivity = false }: { review: Review; showActivity?: boolean }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      {showActivity && review.activity && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
            <Zap className="w-3 h-3" />
            {review.activity}
          </span>
        </div>
      )}
      <Quote className="w-7 h-7 text-gold/20 mb-3" />
      <StarRating rating={review.rating} />
      <p className="text-charcoal/80 text-sm leading-relaxed mt-3 mb-5 italic flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-sm shrink-0">
          {review.name[0]}
        </div>
        <div>
          <p className="font-semibold text-navy text-sm">{review.name}</p>
          <p className="text-charcoal/50 text-xs">{review.country} · {review.date}</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={REVIEWS_SCHEMA} />
      <PageHero
        title="Customer Reviews"
        subtitle="Read what thousands of happy travellers from around the world say about their experiences with MauTravel."
        image="https://images.unsplash.com/photo-1668265704484-b5f975f37610?auto=format&fit=crop&w=1920&q=80"
        eyebrow="What Clients Say"
        breadcrumbs={[{ label: "Reviews", href: "/reviews" }]}
      />

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-xl">
          <AnimatedGrid
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
            stagger={0.1}
          >
            {[
              { value: "4.9 / 5", label: "Average Rating" },
              { value: "500+", label: "Verified Reviews" },
              { value: "2,000+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-bold text-navy text-4xl mb-1">{stat.value}</p>
                <p className="text-charcoal/60 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* General reviews */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Client Testimonials"
              title="Stories From Our Travellers"
              description="Every review is from a real client who experienced MauTravel's services firsthand."
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.07}
          >
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Activity reviews */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Activity Experiences"
              title="What Adventurers Say"
              description="From catamaran cruises to cave explorations — real stories from guests who booked activities through MauTravel."
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.07}
          >
            {ACTIVITY_REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} showActivity />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Leave a review */}
      <section className="py-16 bg-navy text-center">
        <div className="container-xl max-w-2xl">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Share Your Experience</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Travelled with MauTravel?
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              We&apos;d love to hear about your experience. Leave us a review on Google — it helps other travellers
              discover MauTravel and means the world to our team.
            </p>
            <WhatsAppButton service="I'd like to share my MauTravel experience" size="lg" label="Share Your Story" />
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
