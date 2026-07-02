import type { Metadata } from "next";
import { Star, Quote, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { REVIEWS, ACTIVITY_REVIEWS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { cn } from "@/lib/utils";
import { buildAlternates } from "@/i18n/seo";
import type { ReviewStructural } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.reviews" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/reviews"),
    openGraph: { title: `${t("title")} | MauTravel`, description: t("description") },
  };
}

const ALL_REVIEWS = [...REVIEWS, ...ACTIVITY_REVIEWS];

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

function ReviewCard({ review, text, activityLabel }: { review: ReviewStructural; text: string; activityLabel?: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      {activityLabel && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
            <Zap className="w-3 h-3" />
            {activityLabel}
          </span>
        </div>
      )}
      <Quote className="w-7 h-7 text-gold/20 mb-3" />
      <StarRating rating={review.rating} />
      <p className="text-charcoal/80 text-sm leading-relaxed mt-3 mb-5 italic flex-1">
        &ldquo;{text}&rdquo;
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

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reviews" });
  const tActivitiesItems = await getTranslations({ locale, namespace: "activities.items" });

  const REVIEWS_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: ALL_REVIEWS.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5", worstRating: "1" },
        author: { "@type": "Person", name: r.name },
        reviewBody: (t.raw(`items.${r.id}`) as { text: string }).text,
        datePublished: r.date,
        itemReviewed: { "@type": "TravelAgency", "@id": "https://www.mautravel.com/#organization", name: "MauTravel" },
      },
    })),
  };

  return (
    <>
      <JsonLd data={REVIEWS_SCHEMA} />
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image="https://images.unsplash.com/photo-1668265704484-b5f975f37610?auto=format&fit=crop&w=1920&q=80"
        eyebrow={t("hero.eyebrow")}
        breadcrumbs={[{ label: t("hero.title"), href: "/reviews" }]}
      />

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-xl">
          <AnimatedGrid
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
            stagger={0.1}
          >
            {(t.raw("stats") as { value: string; label: string }[]).map((stat) => (
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
              eyebrow={t("generalHeading.eyebrow")}
              title={t("generalHeading.title")}
              description={t("generalHeading.description")}
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.07}
          >
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} text={(t.raw(`items.${review.id}`) as { text: string }).text} />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Activity reviews */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow={t("activityHeading.eyebrow")}
              title={t("activityHeading.title")}
              description={t("activityHeading.description")}
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.07}
          >
            {ACTIVITY_REVIEWS.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                text={(t.raw(`items.${review.id}`) as { text: string }).text}
                activityLabel={(tActivitiesItems.raw(review.activityKey) as { name: string }).name}
              />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Leave a review */}
      <section className="py-16 bg-navy text-center">
        <div className="container-xl max-w-2xl">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t("ctaEyebrow")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              {t("ctaText")}
            </p>
            <WhatsAppButton service="I'd like to share my MauTravel experience" size="lg" label={t("ctaButton")} />
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
