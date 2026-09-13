import Image from "next/image";
import { MessageCircle, MapPin, PlayCircle, ExternalLink, CheckCircle2, ArrowRight, Leaf, SlidersHorizontal } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { DestinationCard, type DestinationCardData } from "@/components/shared/DestinationCard";
import { DestinationQuickInfo, type QuickInfoItem } from "@/components/shared/DestinationQuickInfo";
import { FeatureHighlightCard, type FeatureHighlightData } from "@/components/shared/FeatureHighlightCard";
import { PlaceActivityCard, type PlaceActivityItem } from "@/components/shared/PlaceActivityCard";
import { TrailCard, type TrailData } from "@/components/shared/TrailCard";
import { HeritageTimeline } from "@/components/shared/HeritageTimeline";
import { CrossSellExperienceCard, type CrossSellExperienceData } from "@/components/shared/CrossSellExperienceCard";
import { ActivityFaqAccordion } from "@/components/templates/ActivityFaqAccordion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { FAQ, TimelineItem } from "@/types";

/**
 * Column count for the 4-up small-card grids (Why Visit, Encounters). Falls back to 3
 * columns for counts that would otherwise leave a visible hole in the last row, so a
 * section still looks deliberate after a card is removed.
 */
function fourUpColumns(count: number): string {
  if (count % 4 === 0) return "lg:grid-cols-4";
  if (count % 3 === 0) return "lg:grid-cols-3";
  return "lg:grid-cols-4";
}

/** Column count for the wide image+text card grids (Highlights), same idea as above. */
function balancedColumns(count: number): string {
  if (count % 3 === 0) return "lg:grid-cols-3";
  if (count % 2 === 0) return "sm:grid-cols-2";
  return "lg:grid-cols-3";
}

/** Full visitor-guide content for a fully-built-out destination page. Omit to render the lightweight "coming soon" stub instead. */
export interface RichDestinationContent {
  heroSubtitle: string;
  heroFeatures: string[];
  /** Overrides the generic "Plan Your Visit" primary hero button label. */
  heroPrimaryCta?: string;
  /** In-page section id the primary hero button scrolls to. Defaults to "plan-your-visit". */
  heroPrimaryAnchor?: string;
  quickInfo: QuickInfoItem[];
  discoverTitle: string;
  discoverParagraphs: string[];
  discoverImage: string;
  discoverBadgeLine1: string;
  discoverBadgeLine2: string;
  videoSrc?: string;
  /** Large image+text highlight cards with a scroll-anchor "Learn More" button. Optional — a place may use `parkHighlights` instead. */
  featuredAttractionsEyebrow?: string;
  featuredAttractionsTitle?: string;
  featuredAttractionsSubtitle?: string;
  featuredAttractions?: FeatureHighlightData[];
  /** Optional secondary feature grid ("Why Visit {name}?") — small cards with an icon, image, title and description. */
  whyVisitEyebrow?: string;
  whyVisitTitle?: string;
  whyVisit?: PlaceActivityItem[];
  /** Optional large "cross-sell" cards linking out to existing activity/experience pages (e.g. Paragliding, Dolphin Watching) — rendered high on the page, right after Why Visit. */
  crossSellEyebrow?: string;
  crossSellTitle?: string;
  crossSellSubtitle?: string;
  crossSell?: CrossSellExperienceData[];
  /** Per-place override for the generic "Things to Do" section eyebrow — falls back to the shared translation when omitted. */
  activitiesEyebrow?: string;
  /** Omit `activitiesTitle`/`activities` together for a place whose guide covers its activities inside other sections — the whole "Things to Do" block is then skipped. */
  activitiesTitle?: string;
  /** Optional intro paragraph shown under the activities section title. */
  activitiesIntro?: string;
  activities?: PlaceActivityItem[];
  /** Optional compact "looking for more adventure?" link row rendered under Things To Do — small pill links to real activity pages. */
  moreAdventureTitle?: string;
  moreAdventureLinks?: { emoji: string; label: string; href: string }[];
  /** Optional full-bleed single "experience spotlight" section (e.g. a signature market/cultural moment) — same visual language as `peak`, positioned independently between Why Visit and Featured Attractions. Set `experiencePosition: "after"` to render it after Featured Attractions instead (before Things To Do). Defaults to "before". */
  experiencePosition?: "before" | "after";
  experienceEyebrow?: string;
  experienceTitle?: string;
  experienceDescription?: string;
  experienceFeatures?: string[];
  /** Optional small icon+sentence callout rows shown below the experience spotlight text (e.g. a size stat, a seasonal caveat). */
  experienceNotes?: { icon?: string; text: string }[];
  experienceImage?: string;
  /** Optional history/heritage timeline — rendered after Things To Do, before any highlight/pricing sections. */
  timelineEyebrow?: string;
  timelineTitle?: string;
  timeline?: TimelineItem[];
  /** Optional hands-on "encounters" grid — small cards with image, title, description and a small tag badge. */
  encountersEyebrow?: string;
  encountersTitle?: string;
  encountersIntro?: string;
  encounters?: PlaceActivityItem[];
  /** Optional large image+text cards with no button — a plain highlight showcase. */
  highlightsEyebrow?: string;
  highlightsTitle?: string;
  highlightsSubtitle?: string;
  highlights?: FeatureHighlightData[];
  /** Optional hiking-trail grid, e.g. for a national park. */
  trailsEyebrow?: string;
  trailsTitle?: string;
  trailsIntro?: string;
  trails?: TrailData[];
  trailsNote?: string;
  /** Optional single dramatic full-width "featured experience" block (e.g. a summit or landmark). Set `peakHref` (structural) to turn it into a clickable promo banner linking to a real page, e.g. an activity. */
  peakEyebrow?: string;
  peakTitle?: string;
  peakSubtitle?: string;
  peakStat?: string;
  peakDescription?: string;
  peakImage?: string;
  peakHref?: string;
  /** CTA button label shown when `peakHref` is set. */
  peakCtaLabel?: string;
  /** Optional "Build Your Day" itinerary — a horizontal timeline of suggested steps, reusing HeritageTimeline (icon/emoji folded into the "year" slot). Purely inspirational; pair with `dayPlanNote` to avoid promising fixed timings. */
  dayPlanEyebrow?: string;
  dayPlanTitle?: string;
  dayPlanSteps?: { time: string; icon: string; title: string; description: string }[];
  dayPlanNote?: string;
  dayPlanCtaLabel?: string;
  /** Optional secondary highlight grid with real internal links (e.g. "Waterfalls & Viewpoints"), rendered via FeatureHighlightCard. */
  waterfallsEyebrow?: string;
  waterfallsTitle?: string;
  waterfallsSubtitle?: string;
  waterfalls?: FeatureHighlightData[];
  /** Pricing card — omit `pricingTiers` (leave undefined/empty) for a protected park with no entrance fee; pair with `visiting*` instead. */
  pricingTitle?: string;
  pricingSubtitle?: string;
  pricingTiers?: { label: string; price: string }[];
  pricingNote?: string;
  externalBookingUrl?: string;
  externalBookingDomain?: string;
  /** Per-place override for the generic "Check Current Prices" button label — falls back to the shared translation when omitted. */
  pricingButtonLabel?: string;
  /** Plain informational alternative to the pricing card (e.g. for a free-to-enter national park). */
  visitingTitle?: string;
  visitingText?: string[];
  visitingNote?: string;
  beforeYouGoTitle: string;
  beforeYouGo: string[];
  /** Optional conservation/education section — text + a single atmospheric image. */
  conservationEyebrow?: string;
  conservationTitle?: string;
  conservationText?: string[];
  conservationImage?: string;
  region: string;
  tourName: string;
  nearbySubtitle: string;
  faqs: FAQ[];
  /** Per-place override for the "Need Transport" heading/body — falls back to the generic {name}-templated copy when omitted. */
  transportTitle?: string;
  transportText?: string;
  /** Per-place override for the final CTA heading/body — falls back to the generic {region}-templated copy when omitted. */
  finalCtaTitle?: string;
  finalCtaText?: string;
  /** Extra real-route buttons shown in the final CTA alongside the tour/parent-place link and WhatsApp button (e.g. links to related activity pages). */
  finalCtaLinks?: { label: string; href: string }[];
  /** Label for the button linking to `content.parentPlace` (hero secondary button + final CTA), e.g. "Discover Port Louis". Required for that button to render when a parent place is set. */
  heroSecondaryCta?: string;
}

export interface DestinationPageContent {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  tag: string;
  /** Full long-form content, once written for this destination — undefined shows the "coming soon" stub. */
  fullContent?: string[];
  parentTour?: { name: string; slug: string };
  /** A place this destination sits "inside" (e.g. a landmark within a city) — adds a breadcrumb level and a "Discover {place}" link in the hero/final CTA, in place of the generic tour link. */
  parentPlace?: { name: string; slug: string };
  related: DestinationCardData[];
  /** Rich, fully-built-out visitor guide — when present, replaces the whole body with the premium layout. */
  rich?: RichDestinationContent;
}

interface Props {
  content: DestinationPageContent;
  locale: string;
}

export async function DestinationPage({ content, locale }: Props) {
  const t = await getTranslations({ locale, namespace: "places.ui" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const { rich } = content;

  const breadcrumbs = [
    { label: t("toursBreadcrumb"), href: "/tours" },
    ...(content.parentTour
      ? [{ label: content.parentTour.name, href: `/tours/${content.parentTour.slug}` }]
      : []),
    ...(content.parentPlace
      ? [{ label: content.parentPlace.name, href: `/places/${content.parentPlace.slug}` }]
      : []),
    { label: content.name, href: `/places/${content.slug}` },
  ];

  if (!rich) {
    return (
      <>
        <PageHero
          title={content.name}
          subtitle={content.shortDescription}
          image={content.image}
          eyebrow={content.tag}
          breadcrumbs={breadcrumbs}
        />

        <section className="section-padding bg-white">
          <div className="container-xl max-w-2xl">
            <AnimatedSection>
              {content.fullContent ? (
                <div className="space-y-4 text-charcoal/70 leading-relaxed">
                  {content.fullContent.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              ) : (
                <div className="bg-cream rounded-3xl p-8 md:p-12 text-center">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-navy mb-3">{t("comingSoonTitle")}</h2>
                  <p className="text-charcoal/60 leading-relaxed">{t("comingSoonBody")}</p>
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>

        {content.related.length > 0 && (
          <section className="section-padding bg-cream">
            <div className="container-xl">
              <AnimatedSection>
                <SectionHeader eyebrow={t("relatedEyebrow")} title={t("relatedTitle")} />
              </AnimatedSection>
              <AnimatedGrid
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                stagger={0.08}
              >
                {content.related.map((place) => (
                  <DestinationCard key={place.slug} {...place} learnMoreLabel={tCommon("learnMore")} />
                ))}
              </AnimatedGrid>
            </div>
          </section>
        )}

        <section className="section-padding bg-white">
          <div className="container-xl max-w-2xl text-center">
            <AnimatedSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-3">{t("planTitle")}</h2>
              <p className="text-charcoal/60 mb-8 leading-relaxed">{t("planSubtitle")}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <WhatsAppButton service={content.name} variant="book" size="lg" label={t("bookNow")} />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-navy/20 text-navy font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:bg-navy hover:text-white text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("chatOnWhatsapp")}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </>
    );
  }

  // ── Rich, fully-built-out visitor guide ─────────────────────────────────
  const td = await getTranslations({ locale, namespace: "placeDetails.ui" });

  // Single dramatic full-bleed feature (e.g. a signature market/cultural moment or panoramic viewpoint).
  // Rendered either before or after Featured Attractions depending on `experiencePosition` — see the two call sites below.
  const experienceSpotlight = (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden scroll-mt-20">
      <Image src={rich.experienceImage ?? ""} alt={`${rich.experienceTitle ?? content.name} — ${content.name}, Mauritius`} fill className="object-cover" sizes="100vw" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/20" />
      <div className="relative container-xl">
        <AnimatedSection>
          <div className="max-w-lg">
            {rich.experienceEyebrow && (
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">{rich.experienceEyebrow}</p>
            )}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{rich.experienceTitle}</h2>
            <p className="text-white/70 leading-relaxed mb-6">{rich.experienceDescription}</p>
            {rich.experienceFeatures && rich.experienceFeatures.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {rich.experienceFeatures.map((f) => (
                  <span key={f} className="text-xs font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
                    {f}
                  </span>
                ))}
              </div>
            )}
            {rich.experienceNotes && rich.experienceNotes.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4">
                {rich.experienceNotes.map((note) => (
                  <div key={note.text} className="flex items-start gap-2 text-white/70 text-sm leading-snug">
                    <Leaf className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    {note.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <>
      <PageHero
        title={content.name}
        subtitle={rich.heroSubtitle}
        image={content.image}
        eyebrow={td("heroEyebrow")}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap gap-2 mt-5">
          {rich.heroFeatures.map((f) => (
            <span key={f} className="text-xs font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
              {f}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href={`#${rich.heroPrimaryAnchor ?? "plan-your-visit"}`}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm hover:-translate-y-0.5 shadow-sm"
          >
            {rich.heroPrimaryCta ?? td("planVisit")}
          </a>
          {content.parentPlace ? (
            <Link
              href={`/places/${content.parentPlace.slug}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 backdrop-blur-sm text-sm"
            >
              {rich.heroSecondaryCta ?? content.parentPlace.name}
            </Link>
          ) : (
            content.parentTour && (
              <Link
                href={`/tours/${content.parentTour.slug}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 backdrop-blur-sm text-sm"
              >
                {rich.heroSecondaryCta ?? td("nearbyTitle", { region: rich.region })}
              </Link>
            )
          )}
        </div>
      </PageHero>

      {/* Quick visitor info */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-xl py-6">
          <DestinationQuickInfo items={rich.quickInfo} />
        </div>
      </section>

      {/* Discover */}
      <section id="discover" className="section-padding bg-white scroll-mt-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{td("discoverEyebrow")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-5">{rich.discoverTitle}</h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed mb-6">
                {rich.discoverParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {rich.videoSrc && (
                <a
                  href={rich.videoSrc}
                  className="inline-flex items-center gap-2 border border-navy/20 text-navy font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-navy hover:text-white text-sm"
                >
                  <PlayCircle className="w-4 h-4" />
                  {td("watchVideo")}
                </a>
              )}
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src={rich.discoverImage}
                  alt={`${content.name}, Mauritius — ${rich.discoverBadgeLine1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-md">
                  <p className="font-heading font-bold text-navy text-sm leading-tight">{rich.discoverBadgeLine1}</p>
                  <p className="text-charcoal/60 text-xs">{rich.discoverBadgeLine2}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why visit */}
      {rich.whyVisit && rich.whyVisit.length > 0 && (
        <section className="pb-20 md:pb-28 bg-white">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader eyebrow={rich.whyVisitEyebrow} title={rich.whyVisitTitle ?? ""} />
            </AnimatedSection>
            <AnimatedGrid className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6", fourUpColumns(rich.whyVisit.length))} stagger={0.06}>
              {rich.whyVisit.map((item) => (
                <PlaceActivityCard key={item.name} {...item} placeName={content.name} />
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {/* Cross-sell: large cards linking out to existing activity pages (e.g. Paragliding, Dolphin Watching) */}
      {rich.crossSell && rich.crossSell.length > 0 && (
        <section id="experiences" className="pb-20 md:pb-28 bg-cream scroll-mt-20">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader eyebrow={rich.crossSellEyebrow} title={rich.crossSellTitle ?? ""} description={rich.crossSellSubtitle} />
            </AnimatedSection>
            <AnimatedGrid className="grid grid-cols-1 lg:grid-cols-2 gap-8" stagger={0.1}>
              {rich.crossSell.map((item) => (
                <CrossSellExperienceCard key={item.title} {...item} />
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {rich.experienceImage && rich.experiencePosition !== "after" && experienceSpotlight}

      {/* Featured attractions */}
      {rich.featuredAttractions && rich.featuredAttractions.length > 0 && (
        <section className="pb-20 md:pb-28 bg-white">
          <div className="container-xl">
            {(rich.featuredAttractionsEyebrow || rich.featuredAttractionsTitle) && (
              <AnimatedSection>
                <SectionHeader
                  eyebrow={rich.featuredAttractionsEyebrow}
                  title={rich.featuredAttractionsTitle ?? ""}
                  description={rich.featuredAttractionsSubtitle}
                />
              </AnimatedSection>
            )}
            <AnimatedGrid className="grid grid-cols-1 lg:grid-cols-2 gap-6" stagger={0.1}>
              {rich.featuredAttractions.map((attraction) => (
                <FeatureHighlightCard key={attraction.title} {...attraction} placeName={content.name} learnMoreLabel={td("learnMore")} />
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {rich.experienceImage && rich.experiencePosition === "after" && experienceSpotlight}

      {/* Things to do — omitted entirely for places that cover their activities in other sections */}
      {rich.activities && rich.activities.length > 0 && (
      <section id="activities" className="section-padding bg-cream scroll-mt-20">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader eyebrow={rich.activitiesEyebrow ?? td("activitiesEyebrow")} title={rich.activitiesTitle ?? ""} description={rich.activitiesIntro} />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06}>
            {rich.activities.map((activity) => (
              <PlaceActivityCard key={activity.name} {...activity} placeName={content.name} />
            ))}
          </AnimatedGrid>
          {rich.moreAdventureLinks && rich.moreAdventureLinks.length > 0 && (
            <AnimatedSection delay={0.1}>
              <div className="mt-10 text-center">
                {rich.moreAdventureTitle && (
                  <p className="text-charcoal/50 text-sm font-medium mb-4">{rich.moreAdventureTitle}</p>
                )}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {rich.moreAdventureLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gold hover:shadow-sm text-navy font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200"
                    >
                      <span aria-hidden="true">{link.emoji}</span>
                      {link.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
      )}

      {/* History / heritage timeline */}
      {rich.timeline && rich.timeline.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader eyebrow={rich.timelineEyebrow} title={rich.timelineTitle ?? ""} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <HeritageTimeline items={rich.timeline} />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Hiking trails */}
      {rich.trails && rich.trails.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-xl">
            <AnimatedSection>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{rich.trailsEyebrow}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-3">{rich.trailsTitle}</h2>
              {rich.trailsIntro && <p className="text-charcoal/60 max-w-2xl mb-10 leading-relaxed">{rich.trailsIntro}</p>}
            </AnimatedSection>
            <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.05}>
              {rich.trails.map((trail) => (
                <TrailCard key={trail.name} {...trail} />
              ))}
            </AnimatedGrid>
            {rich.trailsNote && (
              <AnimatedSection delay={0.1}>
                <div className="flex items-start gap-2.5 mt-8 text-sm text-charcoal/60 max-w-3xl">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  {rich.trailsNote}
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      )}

      {/* Featured peak / dramatic single experience — clickable promo banner when peakHref is set */}
      {rich.peakImage && (
        <section className="relative py-20 md:py-28 overflow-hidden">
          {rich.peakHref ? (
            <Link href={rich.peakHref} className="group absolute inset-0 block">
              <Image src={rich.peakImage} alt={`${rich.peakTitle ?? content.name} — ${content.name}, Mauritius`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="100vw" loading="lazy" />
            </Link>
          ) : (
            <Image src={rich.peakImage} alt={`${rich.peakTitle ?? content.name} — ${content.name}, Mauritius`} fill className="object-cover" sizes="100vw" loading="lazy" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/20 pointer-events-none" />
          <div className="relative container-xl">
            <AnimatedSection>
              <div className="max-w-lg">
                <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">{rich.peakEyebrow}</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">{rich.peakTitle}</h2>
                {rich.peakSubtitle && <p className="text-white/90 font-semibold mb-1">{rich.peakSubtitle}</p>}
                {rich.peakStat && <p className="text-gold text-2xl font-heading font-bold mb-4">{rich.peakStat}</p>}
                <p className="text-white/70 leading-relaxed">{rich.peakDescription}</p>
                {rich.peakHref && rich.peakCtaLabel && (
                  <Link
                    href={rich.peakHref}
                    className="group/cta inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm mt-6"
                  >
                    {rich.peakCtaLabel}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </Link>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Build Your Day — inspirational itinerary timeline */}
      {rich.dayPlanSteps && rich.dayPlanSteps.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader eyebrow={rich.dayPlanEyebrow} title={rich.dayPlanTitle ?? ""} />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <HeritageTimeline
                items={rich.dayPlanSteps.map((step) => ({ year: `${step.icon} ${step.time}`, title: step.title, description: step.description }))}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="text-center mt-10">
                {/* "Build your day" is the same intent as Customize Tour — send it to the
                    Mauritius Holiday planner rather than opening a WhatsApp quote. */}
                {rich.dayPlanCtaLabel && (
                  <Link
                    href="/mauritius-holiday-package#customize"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3.5 rounded-full transition-all duration-200 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    {rich.dayPlanCtaLabel}
                  </Link>
                )}
                {rich.dayPlanNote && <p className="text-charcoal/40 text-xs mt-4 max-w-2xl mx-auto leading-relaxed">{rich.dayPlanNote}</p>}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Waterfalls & viewpoints (or other secondary linked highlight grid) */}
      {rich.waterfalls && rich.waterfalls.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader
                eyebrow={rich.waterfallsEyebrow ?? rich.highlightsEyebrow}
                title={rich.waterfallsTitle ?? ""}
                description={rich.waterfallsSubtitle}
              />
            </AnimatedSection>
            <AnimatedGrid
              className={cn("grid grid-cols-1 gap-6", rich.waterfalls.length >= 3 ? "lg:grid-cols-3" : "sm:grid-cols-2")}
              stagger={0.08}
            >
              {rich.waterfalls.map((item) => (
                <FeatureHighlightCard key={item.title} {...item} placeName={content.name} learnMoreLabel={td("learnMore")} />
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {/* Animal / hands-on encounters */}
      {rich.encounters && rich.encounters.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader
                eyebrow={rich.encountersEyebrow}
                title={rich.encountersTitle ?? ""}
                description={rich.encountersIntro}
              />
            </AnimatedSection>
            <AnimatedGrid className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6", fourUpColumns(rich.encounters.length))} stagger={0.06}>
              {rich.encounters.map((item) => (
                <PlaceActivityCard key={item.name} {...item} placeName={content.name} />
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {/* Plain highlight cards */}
      {rich.highlights && rich.highlights.length > 0 && (
        <section className="pb-20 md:pb-28 bg-white">
          <div className="container-xl">
            {(rich.highlightsEyebrow || rich.highlightsTitle) && (
              <AnimatedSection>
                <SectionHeader eyebrow={rich.highlightsEyebrow} title={rich.highlightsTitle ?? ""} description={rich.highlightsSubtitle} />
              </AnimatedSection>
            )}
            <AnimatedGrid
              className={cn("grid grid-cols-1 gap-6", balancedColumns(rich.highlights.length))}
              stagger={0.08}
            >
              {rich.highlights.map((item) => (
                <FeatureHighlightCard key={item.title} {...item} placeName={content.name} learnMoreLabel={td("learnMore")} />
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {/* Pricing (or plain visiting info) + Before you go */}
      <section className="section-padding bg-white">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatedSection>
            {rich.pricingTiers && rich.pricingTiers.length > 0 ? (
              <div className="bg-cream rounded-3xl p-8 h-full flex flex-col">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{td("pricingEyebrow")}</p>
                <h2 className="font-heading text-2xl font-bold text-navy mb-1">{rich.pricingTitle}</h2>
                <p className="text-charcoal/50 text-sm mb-5">{rich.pricingSubtitle}</p>
                <div className="space-y-2 mb-5">
                  {rich.pricingTiers.map((tier) => (
                    <div key={tier.label} className="flex items-center justify-between bg-white rounded-xl px-4 py-3">
                      <span className="text-sm text-charcoal/70">{tier.label}</span>
                      <span className="font-bold text-navy">{tier.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-charcoal/50 text-xs leading-relaxed mb-6">{rich.pricingNote}</p>
                {rich.externalBookingUrl && (
                  <>
                    <a
                      href={rich.externalBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm mt-auto"
                    >
                      {rich.pricingButtonLabel ?? td("checkCurrentPrices")}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-charcoal/40 text-xs mt-2.5">{td("opensOfficialSite", { domain: rich.externalBookingDomain ?? "" })}</p>
                  </>
                )}
              </div>
            ) : (
              <div className="bg-cream rounded-3xl p-8 h-full flex flex-col">
                <h2 className="font-heading text-2xl font-bold text-navy mb-4">{rich.visitingTitle}</h2>
                <div className="space-y-3 text-charcoal/70 leading-relaxed mb-5">
                  {rich.visitingText?.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {rich.visitingNote && (
                  <p className="text-navy text-sm font-semibold bg-white rounded-xl px-4 py-3">{rich.visitingNote}</p>
                )}
                {/* A free-to-enter place still has hours and access conditions worth
                    checking at the source before travelling. */}
                {rich.externalBookingUrl && (
                  <div className="mt-auto pt-6">
                    <a
                      href={rich.externalBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
                    >
                      {rich.pricingButtonLabel ?? td("checkCurrentPrices")}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-charcoal/40 text-xs mt-2.5">{td("opensOfficialSite", { domain: rich.externalBookingDomain ?? "" })}</p>
                  </div>
                )}
              </div>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 h-full">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{td("beforeYouGoEyebrow")}</p>
              <h2 className="font-heading text-2xl font-bold text-navy mb-5">{rich.beforeYouGoTitle}</h2>
              <ul className="space-y-3">
                {rich.beforeYouGo.map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conservation */}
      {rich.conservationImage && (
        <section className="section-padding bg-cream">
          <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              {rich.conservationEyebrow && (
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{rich.conservationEyebrow}</p>
              )}
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-5">{rich.conservationTitle}</h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                {rich.conservationText?.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src={rich.conservationImage}
                  alt={`${rich.conservationTitle ?? content.name} — ${content.name}, Mauritius`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Need transport */}
      <section id="plan-your-visit" className="relative py-20 md:py-28 overflow-hidden scroll-mt-20">
        <Image src={content.image} alt="" fill className="object-cover" sizes="100vw" loading="lazy" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative container-xl max-w-2xl text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">{td("transportEyebrow")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{rich.transportTitle ?? td("transportTitle", { name: content.name })}</h2>
            <p className="text-white/70 mb-8 leading-relaxed">{rich.transportText ?? td("transportText")}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <WhatsAppButton service={content.name} variant="quote" size="lg" label={td("arrangeTransport")} />
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm text-base"
              >
                <MessageCircle className="w-5 h-5" />
                {td("chatOnWhatsapp")}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Explore region */}
      {content.related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader
                eyebrow={td("nearbyEyebrow")}
                title={td("nearbyTitle", { region: rich.region })}
                description={rich.nearbySubtitle}
              />
            </AnimatedSection>
            <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10" stagger={0.07}>
              {content.related.map((place) => (
                <DestinationCard key={place.slug} {...place} learnMoreLabel={tCommon("learnMore")} />
              ))}
            </AnimatedGrid>
            {content.parentTour && (
              <div className="text-center">
                <Link
                  href={`/tours/${content.parentTour.slug}`}
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm hover:-translate-y-0.5 shadow-sm"
                >
                  {td("nearbyTourCta", { tour: rich.tourName })}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <SectionHeader eyebrow={td("faqEyebrow")} title={td("faqTitle")} />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ActivityFaqAccordion faqs={rich.faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image src={content.image} alt="" fill className="object-cover" sizes="100vw" loading="lazy" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative container-xl text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">{td("finalCtaEyebrow")}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight text-balance">
              {rich.finalCtaTitle ?? td("finalCtaTitle", { region: rich.region })}
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              {rich.finalCtaText ?? td("finalCtaText", { name: content.name, region: rich.region })}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {content.parentPlace && (
                <Link
                  href={`/places/${content.parentPlace.slug}`}
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
                >
                  {rich.heroSecondaryCta ?? content.parentPlace.name}
                </Link>
              )}
              {content.parentTour && (
                <Link
                  href={`/tours/${content.parentTour.slug}`}
                  className={cn(
                    "inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-200",
                    content.parentPlace
                      ? "bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm"
                      : "bg-gold hover:bg-gold-light text-navy"
                  )}
                >
                  {td("finalCtaTourButton", { tour: rich.tourName })}
                </Link>
              )}
              {rich.finalCtaLinks?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  {link.label}
                </Link>
              ))}
              <WhatsAppButton service={content.name} size="lg" label={td("chatOnWhatsapp")} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
