import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { PLACES, TOURS } from "@/lib/constants";
import { PLACE_DETAILS } from "@/lib/place-data";
import { DestinationPage, type RichDestinationContent } from "@/components/templates/DestinationPage";
import type { DestinationCardData } from "@/components/shared/DestinationCard";
import { buildAlternates } from "@/i18n/seo";

export async function generateStaticParams() {
  return PLACES.map((place) => ({ slug: place.slug }));
}

interface PlaceText {
  name: string;
  shortDescription: string;
  tag: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const place = PLACES.find((p) => p.slug === slug);
  if (!place) return {};

  const structural = PLACE_DETAILS[slug];
  if (structural) {
    const td = await getTranslations({ locale, namespace: `placeDetails.items.${slug}` });
    const title = td("pageTitle");
    const description = td("pageDescription");
    return {
      title,
      description,
      alternates: buildAlternates(locale, `/places/${slug}`),
      openGraph: { title, description },
    };
  }

  const t = await getTranslations({ locale, namespace: "places.items" });
  const text = t.raw(slug) as PlaceText;
  return {
    title: `${text.name} | MauTravel`,
    description: text.shortDescription,
    alternates: buildAlternates(locale, `/places/${slug}`),
    openGraph: { title: `${text.name} | MauTravel`, description: text.shortDescription },
  };
}

function toCardData(slug: string, text: PlaceText): DestinationCardData | null {
  const place = PLACES.find((p) => p.slug === slug);
  if (!place) return null;
  return { slug, image: place.image, name: text.name, shortDescription: text.shortDescription, tag: text.tag };
}

export default async function PlaceDetailRoutePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const place = PLACES.find((p) => p.slug === slug);
  if (!place) notFound();

  const tPlaces = await getTranslations({ locale, namespace: "places.items" });
  const text = tPlaces.raw(slug) as PlaceText;

  const parentTour = TOURS.find((tour) => tour.destinationSlugs.includes(slug));
  let parentTourInfo: { name: string; slug: string } | undefined;

  if (parentTour) {
    const tTourItems = await getTranslations({ locale, namespace: "tours.items" });
    parentTourInfo = { name: tTourItems(`${parentTour.id}.name`), slug: parentTour.slug };
  }

  const structural = PLACE_DETAILS[slug];

  // A place this destination sits "inside" (e.g. a landmark within a city), if the structural data names one.
  let parentPlaceInfo: { name: string; slug: string } | undefined;
  if (structural?.parentPlaceSlug) {
    const parentText = tPlaces.raw(structural.parentPlaceSlug) as PlaceText;
    parentPlaceInfo = { name: parentText.name, slug: structural.parentPlaceSlug };
  }

  // Nearby places: an explicit curated list on rich pages, otherwise the other places on the same tour.
  const nearbySlugs = structural?.nearbySlugs ?? parentTour?.destinationSlugs.filter((s) => s !== slug).slice(0, 3) ?? [];
  const related: DestinationCardData[] = nearbySlugs.flatMap((relSlug) => {
    const relText = tPlaces.raw(relSlug) as PlaceText;
    const card = toCardData(relSlug, relText);
    return card ? [card] : [];
  });

  let rich: RichDestinationContent | undefined;
  if (structural) {
    const td = await getTranslations({ locale, namespace: `placeDetails.items.${slug}` });
    const heroFeatures = td.raw("heroFeatures") as string[];
    const quickInfoText = td.raw("quickInfo") as { label: string; value: string }[];
    const activitiesText = td.has("activities")
      ? (td.raw("activities") as { name: string; description: string }[])
      : undefined;
    const beforeYouGo = td.raw("beforeYouGo") as string[];
    const discoverParagraphs = td.raw("discoverParagraphs") as string[];
    const faqs = td.raw("faqs") as { question: string; answer: string }[];

    const featuredAttractionsText = td.has("featuredAttractions")
      ? (td.raw("featuredAttractions") as { title: string; description: string; tag?: string }[])
      : undefined;
    const whyVisitText = td.has("whyVisit") ? (td.raw("whyVisit") as { name: string; description: string; icon: string }[]) : undefined;
    const crossSellText = td.has("crossSell")
      ? (td.raw("crossSell") as { badge: string; title: string; subtitle: string; description: string; features: string[]; ctaLabel: string; promptLabel?: string; promptCta?: string }[])
      : undefined;
    const encountersText = td.has("encounters") ? (td.raw("encounters") as { name: string; description: string; tag: string }[]) : undefined;
    const highlightsText = td.has("highlights") ? (td.raw("highlights") as { title: string; description: string; tag?: string; href?: string }[]) : undefined;
    const timelineItems = td.has("timeline") ? (td.raw("timeline") as { year: string; title: string; description: string }[]) : undefined;
    const trailsText = td.has("trails") ? (td.raw("trails") as { name: string; distance: string; difficulty: string; description: string }[]) : undefined;
    const waterfallsText = td.has("waterfalls") ? (td.raw("waterfalls") as { title: string; description: string }[]) : undefined;
    const hasPricing = td.has("pricingTiers") && (td.raw("pricingTiers") as unknown[]).length > 0;

    rich = {
      heroSubtitle: td("heroSubtitle"),
      heroFeatures,
      heroPrimaryCta: td.has("heroPrimaryCta") ? td("heroPrimaryCta") : undefined,
      heroPrimaryAnchor: td.has("heroPrimaryAnchor") ? td("heroPrimaryAnchor") : undefined,
      quickInfo: quickInfoText.map((item, i) => ({ ...item, icon: structural.quickInfoIcons[i] ?? "MapPin" })),
      discoverTitle: td("discoverTitle"),
      discoverParagraphs,
      discoverImage: structural.discoverImage,
      discoverBadgeLine1: td("discoverBadgeLine1"),
      discoverBadgeLine2: td("discoverBadgeLine2"),
      videoSrc: structural.videoSrc,
      featuredAttractionsEyebrow: td.has("featuredAttractionsEyebrow") ? td("featuredAttractionsEyebrow") : undefined,
      featuredAttractionsTitle: td.has("featuredAttractionsTitle") ? td("featuredAttractionsTitle") : undefined,
      featuredAttractionsSubtitle: td.has("featuredAttractionsSubtitle") ? td("featuredAttractionsSubtitle") : undefined,
      featuredAttractions: featuredAttractionsText?.map((a, i) => ({
        ...a,
        image: structural.featuredAttractions?.[i]?.image ?? place.image,
        anchorId: structural.featuredAttractions?.[i]?.anchorId,
        href: structural.featuredAttractions?.[i]?.href,
      })),
      whyVisitEyebrow: td.has("whyVisitEyebrow") ? td("whyVisitEyebrow") : undefined,
      whyVisitTitle: td.has("whyVisitTitle") ? td("whyVisitTitle") : undefined,
      whyVisit: whyVisitText?.map((item, i) => ({ ...item, image: structural.whyVisitImages?.[i] ?? place.image })),
      crossSellEyebrow: td.has("crossSellEyebrow") ? td("crossSellEyebrow") : undefined,
      crossSellTitle: td.has("crossSellTitle") ? td("crossSellTitle") : undefined,
      crossSellSubtitle: td.has("crossSellSubtitle") ? td("crossSellSubtitle") : undefined,
      crossSell: crossSellText?.map((item, i) => ({
        ...item,
        image: structural.crossSell?.[i]?.image ?? place.image,
        href: structural.crossSell?.[i]?.href ?? `/places/${slug}`,
      })),
      activitiesEyebrow: td.has("activitiesEyebrow") ? td("activitiesEyebrow") : undefined,
      activitiesTitle: td.has("activitiesTitle") ? td("activitiesTitle") : undefined,
      activitiesIntro: td.has("activitiesIntro") ? td("activitiesIntro") : undefined,
      activities: activitiesText?.map((a, i) => ({ ...a, image: structural.activityImages?.[i] ?? place.image })),
      moreAdventureTitle: td.has("moreAdventureTitle") ? td("moreAdventureTitle") : undefined,
      moreAdventureLinks: td.has("moreAdventureLinks") ? (td.raw("moreAdventureLinks") as { emoji: string; label: string; href: string }[]) : undefined,
      experiencePosition: td.has("experiencePosition") ? (td("experiencePosition") as "before" | "after") : undefined,
      experienceEyebrow: td.has("experienceEyebrow") ? td("experienceEyebrow") : undefined,
      experienceTitle: td.has("experienceTitle") ? td("experienceTitle") : undefined,
      experienceDescription: td.has("experienceDescription") ? td("experienceDescription") : undefined,
      experienceFeatures: td.has("experienceFeatures") ? (td.raw("experienceFeatures") as string[]) : undefined,
      experienceNotes: td.has("experienceNotes") ? (td.raw("experienceNotes") as { icon?: string; text: string }[]) : undefined,
      experienceImage: structural.experienceImage,
      timelineEyebrow: td.has("timelineEyebrow") ? td("timelineEyebrow") : undefined,
      timelineTitle: td.has("timelineTitle") ? td("timelineTitle") : undefined,
      timeline: timelineItems,
      encountersEyebrow: td.has("encountersEyebrow") ? td("encountersEyebrow") : undefined,
      encountersTitle: td.has("encountersTitle") ? td("encountersTitle") : undefined,
      encountersIntro: td.has("encountersIntro") ? td("encountersIntro") : undefined,
      encounters: encountersText?.map((item, i) => ({ ...item, image: structural.encounterImages?.[i] ?? place.image })),
      highlightsEyebrow: td.has("highlightsEyebrow") ? td("highlightsEyebrow") : undefined,
      highlightsTitle: td.has("highlightsTitle") ? td("highlightsTitle") : undefined,
      highlightsSubtitle: td.has("highlightsSubtitle") ? td("highlightsSubtitle") : undefined,
      highlights: highlightsText?.map((item, i) => ({ ...item, image: structural.highlightImages?.[i] ?? place.image })),
      trailsEyebrow: td.has("trailsEyebrow") ? td("trailsEyebrow") : undefined,
      trailsTitle: td.has("trailsTitle") ? td("trailsTitle") : undefined,
      trailsIntro: td.has("trailsIntro") ? td("trailsIntro") : undefined,
      trails: trailsText?.map((trail, i) => ({ ...trail, difficultyLevel: structural.trailDifficultyLevels?.[i] ?? "moderate" })),
      trailsNote: td.has("trailsNote") ? td("trailsNote") : undefined,
      peakEyebrow: td.has("peakEyebrow") ? td("peakEyebrow") : undefined,
      peakTitle: td.has("peakTitle") ? td("peakTitle") : undefined,
      peakSubtitle: td.has("peakSubtitle") ? td("peakSubtitle") : undefined,
      peakStat: td.has("peakStat") ? td("peakStat") : undefined,
      peakDescription: td.has("peakDescription") ? td("peakDescription") : undefined,
      peakImage: structural.peakImage,
      peakHref: structural.peakHref,
      peakCtaLabel: td.has("peakCtaLabel") ? td("peakCtaLabel") : undefined,
      dayPlanEyebrow: td.has("dayPlanEyebrow") ? td("dayPlanEyebrow") : undefined,
      dayPlanTitle: td.has("dayPlanTitle") ? td("dayPlanTitle") : undefined,
      dayPlanSteps: td.has("dayPlanSteps") ? (td.raw("dayPlanSteps") as { time: string; icon: string; title: string; description: string }[]) : undefined,
      dayPlanNote: td.has("dayPlanNote") ? td("dayPlanNote") : undefined,
      dayPlanCtaLabel: td.has("dayPlanCtaLabel") ? td("dayPlanCtaLabel") : undefined,
      waterfallsEyebrow: td.has("waterfallsEyebrow") ? td("waterfallsEyebrow") : undefined,
      waterfallsTitle: td.has("waterfallsTitle") ? td("waterfallsTitle") : undefined,
      waterfallsSubtitle: td.has("waterfallsSubtitle") ? td("waterfallsSubtitle") : undefined,
      waterfalls: waterfallsText?.map((item, i) => ({
        ...item,
        image: structural.waterfalls?.[i]?.image ?? place.image,
        href: structural.waterfalls?.[i]?.href,
        anchorId: structural.waterfalls?.[i]?.anchorId,
      })),
      pricingTitle: hasPricing ? td("pricingTitle") : undefined,
      pricingSubtitle: hasPricing ? td("pricingSubtitle") : undefined,
      pricingTiers: hasPricing ? (td.raw("pricingTiers") as { label: string; price: string }[]) : undefined,
      pricingNote: hasPricing ? td("pricingNote") : undefined,
      externalBookingUrl: structural.externalBookingUrl,
      externalBookingDomain: structural.externalBookingDomain,
      pricingButtonLabel: td.has("pricingButtonLabel") ? td("pricingButtonLabel") : undefined,
      visitingTitle: td.has("visitingTitle") ? td("visitingTitle") : undefined,
      visitingText: td.has("visitingText") ? (td.raw("visitingText") as string[]) : undefined,
      visitingNote: td.has("visitingNote") ? td("visitingNote") : undefined,
      beforeYouGoTitle: td("beforeYouGoTitle"),
      beforeYouGo,
      conservationEyebrow: td.has("conservationEyebrow") ? td("conservationEyebrow") : undefined,
      conservationTitle: td.has("conservationTitle") ? td("conservationTitle") : undefined,
      conservationText: td.has("conservationText") ? (td.raw("conservationText") as string[]) : undefined,
      conservationImage: structural.conservationImage,
      region: td("region"),
      tourName: td("tourName"),
      nearbySubtitle: td("nearbySubtitle"),
      faqs,
      transportTitle: td.has("transportTitle") ? td("transportTitle") : undefined,
      transportText: td.has("transportText") ? td("transportText") : undefined,
      finalCtaTitle: td.has("finalCtaTitle") ? td("finalCtaTitle") : undefined,
      finalCtaText: td.has("finalCtaText") ? td("finalCtaText") : undefined,
      finalCtaLinks: td.has("finalCtaLinks") ? (td.raw("finalCtaLinks") as { label: string; href: string }[]) : undefined,
      heroSecondaryCta: td.has("heroSecondaryCta") ? td("heroSecondaryCta") : undefined,
    };
  }

  return (
    <DestinationPage
      locale={locale}
      content={{
        slug,
        name: text.name,
        image: structural?.heroImage ?? place.image,
        shortDescription: text.shortDescription,
        tag: text.tag,
        parentTour: parentTourInfo,
        parentPlace: parentPlaceInfo,
        related,
        rich,
      }}
    />
  );
}
