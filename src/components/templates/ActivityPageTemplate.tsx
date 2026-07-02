import Image from "next/image";
import {
  Clock, MapPin, Users, Star, Zap, UserCheck, Shield,
  Heart, Anchor, Sunrise, CheckCircle2, XCircle, MessageCircle,
  FileText, ChevronRight, LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { ActivityHighlight, ActivityPricingTier, ActivityLocation, ActivityReview, FAQ } from "@/types";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ActivityFaqAccordion } from "@/components/templates/ActivityFaqAccordion";
import { ActivityReviewCarousel } from "@/components/templates/ActivityReviewCarousel";
import { ActivityGallery } from "@/components/templates/ActivityGallery";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Clock, MapPin, Users, Star, Zap, UserCheck, Shield,
  Heart, Anchor, Sunrise, CheckCircle2,
};

const isPlaceholderPrice = (price: string) =>
  price.includes("XX") || price.toLowerCase().includes("contact");

export interface MergedActivityDetail {
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
  activityReviews?: { items: ActivityReview[]; note?: string };
}

export interface RelatedActivity {
  id: string;
  slug: string;
  image: string;
  duration: string;
  name: string;
  description: string;
}

interface Props {
  detail: MergedActivityDetail;
  related: RelatedActivity[];
  locale: string;
}

export async function ActivityPageTemplate({ detail, related, locale }: Props) {
  const t = await getTranslations({ locale, namespace: "activityDetails.ui" });

  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        title={detail.name}
        subtitle={detail.heroSubtitle}
        image={detail.heroImage}
        eyebrow={t("heroEyebrow")}
        className="md:min-h-[560px] md:h-[70vh]"
        breadcrumbs={[
          { label: t("activitiesBreadcrumb"), href: "/activities" },
          { label: detail.name, href: `/activities/${detail.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3 mt-6">
          <WhatsAppButton service={detail.name} size="lg" />
          <WhatsAppButton service={detail.name} size="lg" variant="quote" />
        </div>
      </PageHero>

      {/* ── Highlights strip ── */}
      <section className="bg-navy py-10">
        <div className="container-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {detail.highlights.map((h) => {
              const Icon = ICONS[h.icon] ?? Clock;
              return (
                <div key={h.label} className="flex flex-col items-center text-center gap-2 p-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-widest leading-tight">{h.label}</p>
                  <p className="text-white font-semibold text-sm leading-snug">{h.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About + Included / Not Included ── */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* About */}
            <AnimatedSection className="lg:col-span-2">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t("aboutEyebrow")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                {t("aboutTitle")}
              </h2>
              <div className="space-y-4">
                {detail.about.map((para, i) => (
                  <p key={i} className="text-charcoal/70 leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimatedSection>

            {/* Included / Not Included */}
            <AnimatedSection delay={0.15} className="space-y-8">
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-heading font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  {t("includedTitle")}
                </h3>
                <ul className="space-y-2.5">
                  {detail.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                      <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-heading font-bold text-charcoal text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-charcoal/40" />
                  {t("notIncludedTitle")}
                </h3>
                <ul className="space-y-2.5">
                  {detail.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/60">
                      <XCircle className="w-4 h-4 text-charcoal/30 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Flying Locations (shown only when detail.locations is provided) ── */}
      {detail.locations && detail.locations.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader
                eyebrow={t("locationsEyebrow")}
                title={t("locationsTitle")}
                description={t("locationsDescription")}
              />
            </AnimatedSection>
            <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.08}>
              {detail.locations.map((loc: ActivityLocation) => (
                <div
                  key={loc.name}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`${loc.name} — ${detail.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {loc.walkTime}
                      </span>
                      <h3 className="font-heading font-bold text-white text-xl leading-tight">{loc.name}</h3>
                      <p className="text-white/70 text-sm mt-0.5">{loc.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{loc.description}</p>
                    <ul className="space-y-2">
                      {loc.landmarks.map((lm) => (
                        <li key={lm} className="flex items-start gap-2 text-sm text-charcoal/60">
                          <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                          {lm}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {detail.gallery.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader eyebrow={t("galleryEyebrow")} title={t("galleryTitle")} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <ActivityGallery images={detail.gallery} name={detail.name} />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── Guest Reviews (shown only when detail.activityReviews is provided) ── */}
      {detail.activityReviews && (
        <section className="section-padding bg-navy">
          <div className="container-xl">

            {/* Header + overall rating */}
            <AnimatedSection>
              <div className="text-center mb-14">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                  {t("reviewsEyebrow")}
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                  {t("reviewsTitle")}
                </h2>
                <p className="text-white/55 max-w-xl mx-auto text-sm leading-relaxed">
                  {t("reviewsSubtitle")}
                </p>
                <div className="flex items-center justify-center gap-3 mt-7">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="font-heading font-bold text-white text-2xl">5.0</span>
                  <span className="text-white/45 text-sm">{t("averageRating")}</span>
                </div>
                <p className="text-white/30 text-xs mt-1">{t("basedOnReviews")}</p>
              </div>
            </AnimatedSection>

            {/* Review carousel */}
            <AnimatedSection delay={0.1}>
              <ActivityReviewCarousel reviews={detail.activityReviews.items} />
            </AnimatedSection>

            {/* Partner note */}
            {detail.activityReviews.note && (
              <AnimatedSection delay={0.2}>
                <p className="text-white/30 text-xs text-center mt-10 max-w-lg mx-auto leading-relaxed">
                  {detail.activityReviews.note}
                </p>
              </AnimatedSection>
            )}

            {/* Inline CTA */}
            <AnimatedSection delay={0.25} className="mt-14 text-center">
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-3">
                {t("reviewsCtaTitle")}
              </h3>
              <p className="text-white/55 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                {t("reviewsCtaSubtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <WhatsAppButton service={detail.name} size="lg" />
                <WhatsAppButton service={detail.name} size="lg" variant="quote" />
              </div>
            </AnimatedSection>

          </div>
        </section>
      )}

      {/* ── Pricing ── */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          {detail.pricing.every((p) => isPlaceholderPrice(p.price)) ? (
            /* No confirmed prices — show a simple quotation request */
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t("pricingEyebrow")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">{t("pricingQuoteTitle")}</h2>
              <p className="text-charcoal/60 leading-relaxed mb-8">
                {t("pricingQuoteText")}
              </p>
              <WhatsAppButton service={detail.name} size="lg" variant="quote" label={t("requestQuotation")} />
            </AnimatedSection>
          ) : (
            /* Confirmed prices — show package cards */
            <>
              <AnimatedSection>
                <SectionHeader
                  eyebrow={t("pricingEyebrow")}
                  title={t("pricingPackagesTitle")}
                />
                {detail.pricingNote && (
                  <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-xl px-4 py-3 mb-10 max-w-2xl mx-auto">
                    <span className="text-gold text-lg mt-0.5">ℹ</span>
                    <p className="text-sm text-charcoal/80">{detail.pricingNote}</p>
                  </div>
                )}
              </AnimatedSection>
              <AnimatedGrid
                className={cn(
                  "grid gap-6",
                  detail.pricing.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto" : "grid-cols-1 md:grid-cols-3"
                )}
                stagger={0.08}
              >
                {detail.pricing.map((tier) => (
                  <div
                    key={tier.name}
                    className={cn(
                      "relative rounded-2xl p-7 flex flex-col gap-5 border transition-all duration-300 hover:-translate-y-1",
                      tier.popular
                        ? "bg-navy border-navy shadow-xl"
                        : "bg-white border-gray-100 shadow-sm hover:shadow-md"
                    )}
                  >
                    {tier.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                        {t("mostPopular")}
                      </span>
                    )}
                    <div>
                      <h3 className={cn("font-heading font-bold text-xl mb-1", tier.popular ? "text-white" : "text-navy")}>
                        {tier.name}
                      </h3>
                      <p className={cn("text-sm leading-snug", tier.popular ? "text-white/70" : "text-charcoal/60")}>
                        {tier.description}
                      </p>
                    </div>
                    <p className={cn("text-3xl font-bold font-heading", tier.popular ? "text-gold" : "text-navy")}>
                      {tier.price}
                    </p>
                    <ul className="space-y-2.5 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className={cn("flex items-start gap-2 text-sm", tier.popular ? "text-white/80" : "text-charcoal/70")}>
                          <CheckCircle2 className={cn("w-4 h-4 mt-0.5 shrink-0", tier.popular ? "text-gold" : "text-gold")} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <WhatsAppButton
                      service={`${detail.name} — ${tier.name}`}
                      size="md"
                      label={t("bookThisPackage")}
                      className={cn("w-full justify-center", tier.popular ? "!bg-gold !text-white hover:!bg-gold/90" : "")}
                    />
                  </div>
                ))}
              </AnimatedGrid>
            </>
          )}
        </div>
      </section>

      {/* ── Booking Process ── */}
      <section className="section-padding bg-cream">
        <div className="container-xl max-w-4xl">
          <AnimatedSection>
            <SectionHeader eyebrow={t("howToBookEyebrow")} title={t("howToBookTitle")} />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {[
              { step: "01", icon: MessageCircle, title: t("step1Title"), desc: t("step1Desc") },
              { step: "02", icon: FileText, title: t("step2Title"), desc: t("step2Desc") },
              { step: "03", icon: CheckCircle2, title: t("step3Title"), desc: t("step3Desc") },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-7 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{t("stepLabel")} {s.step}</p>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </AnimatedGrid>
          <AnimatedSection delay={0.2} className="mt-8 text-center">
            <WhatsAppButton service={detail.name} size="lg" label={t("bookNamedViaWhatsapp", { name: detail.name })} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <SectionHeader eyebrow={t("faqEyebrow")} title={t("faqTitle")} />
            <ActivityFaqAccordion faqs={detail.faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Related Activities ── */}
      {related.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader
                eyebrow={t("relatedEyebrow")}
                title={t("relatedTitle")}
                description={t("relatedDescription")}
              />
            </AnimatedSection>
            <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.08}>
              {related.map((activity) => (
                <Link
                  key={activity.id}
                  href={`/activities/${activity.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading font-bold text-white text-lg leading-tight">{activity.name}</h3>
                      <p className="text-white/70 text-xs mt-1">{activity.duration}</p>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <p className="text-charcoal/60 text-sm line-clamp-1">{activity.description.slice(0, 60)}…</p>
                    <ChevronRight className="w-4 h-4 text-gold shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CtaSection />
    </>
  );
}
