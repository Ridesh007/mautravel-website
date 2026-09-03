import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ACTIVITIES } from "@/lib/constants";
import { ACTIVITY_DETAILS } from "@/lib/activity-data";
import { ActivityPageTemplate, type MergedActivityDetail, type RelatedActivity } from "@/components/templates/ActivityPageTemplate";
import { buildAlternates } from "@/i18n/seo";
import type { ActivityGuide, ActivityHighlight, ActivityLocation, ActivityPricingTier, FAQ } from "@/types";

export async function generateStaticParams() {
  return ACTIVITIES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!ACTIVITY_DETAILS[slug]) return {};
  const t = await getTranslations({ locale, namespace: `activityDetails.${slug}` });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: buildAlternates(locale, `/activities/${slug}`),
    openGraph: {
      title: `${t("pageTitle")} | MauTravel`,
      description: t("pageDescription"),
    },
  };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const structural = ACTIVITY_DETAILS[slug];
  if (!structural) notFound();

  const t = await getTranslations({ locale, namespace: `activityDetails.${slug}` });
  const translatedHighlights = t.raw("highlights") as { label: string; value: string }[];
  const translatedLocations = t.has("locations")
    ? (t.raw("locations") as { name: string; subtitle: string; walkTime: string; description: string; landmarks: string[] }[])
    : undefined;
  const translatedGuide = t.has("guide")
    ? (t.raw("guide") as { onlyPilotBadge: string; bio: string[]; stats: { label: string }[] })
    : undefined;

  const detail: MergedActivityDetail = {
    slug,
    name: t("name"),
    pageTitle: t("pageTitle"),
    pageDescription: t("pageDescription"),
    heroImage: structural.heroImage,
    heroSubtitle: t("heroSubtitle"),
    duration: t("duration"),
    difficulty: structural.difficulty ? t("difficulty") : undefined,
    about: t.raw("about") as string[],
    highlights: translatedHighlights.map((h, i): ActivityHighlight => ({
      icon: structural.highlightIcons[i] ?? "Clock",
      label: h.label,
      value: h.value,
    })),
    included: t.raw("included") as string[],
    notIncluded: t.raw("notIncluded") as string[],
    gallery: structural.gallery,
    locations: translatedLocations?.map((loc, i): ActivityLocation => ({
      ...loc,
      image: structural.locationImages?.[i] ?? structural.heroImage,
    })),
    pricing: t.raw("pricing") as ActivityPricingTier[],
    pricingNote: t.has("pricingNote") ? t("pricingNote") : undefined,
    faqs: t.raw("faqs") as FAQ[],
    activityReviews: structural.activityReviews
      ? { items: structural.activityReviews, note: t.has("activityReviewsNote") ? t("activityReviewsNote") : undefined }
      : undefined,
    guide: translatedGuide
      ? ({
          onlyPilotBadge: translatedGuide.onlyPilotBadge,
          bio: translatedGuide.bio,
          stats: translatedGuide.stats.map((s, i) => ({
            icon: structural.guideStatIcons?.[i] ?? "Star",
            label: s.label,
          })),
        } satisfies ActivityGuide)
      : undefined,
    videoPlaceholder: structural.videoPlaceholder ?? false,
    videoSrc: structural.videoSrc,
  };

  // Three related activities — exclude current, take first three
  const tActivitiesItems = await getTranslations({ locale, namespace: "activities.items" });
  const related: RelatedActivity[] = ACTIVITIES.filter((a) => a.slug !== slug)
    .slice(0, 3)
    .map((a) => {
      const text = tActivitiesItems.raw(a.id) as { name: string; description: string };
      return { id: a.id, slug: a.slug, image: a.image, duration: a.duration, name: text.name, description: text.description };
    });

  return <ActivityPageTemplate detail={detail} related={related} locale={locale} />;
}
