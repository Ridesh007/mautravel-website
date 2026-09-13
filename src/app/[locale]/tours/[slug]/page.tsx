import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { TOURS, PLACES } from "@/lib/constants";
import { TourDetailPage } from "@/components/templates/TourDetailPage";
import type { DestinationCardData } from "@/components/shared/DestinationCard";
import { buildAlternates } from "@/i18n/seo";

export async function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) return {};
  const t = await getTranslations({ locale, namespace: `tourDetails.tours.${tour.id}` });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: buildAlternates(locale, `/tours/${slug}`),
    openGraph: { title: `${t("pageTitle")} | MauTravel`, description: t("pageDescription") },
  };
}

interface PlaceText {
  name: string;
  shortDescription: string;
  tag: string;
}

export default async function TourDetailRoutePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) notFound();

  const tTourItems = await getTranslations({ locale, namespace: "tours.items" });
  const name = tTourItems(`${tour.id}.name`);

  const td = await getTranslations({ locale, namespace: `tourDetails.tours.${tour.id}` });
  const tPlaces = await getTranslations({ locale, namespace: "places.items" });

  const destinations: DestinationCardData[] = tour.destinationSlugs.flatMap((destSlug) => {
    const place = PLACES.find((p) => p.slug === destSlug);
    if (!place) return [];
    const text = tPlaces.raw(destSlug) as PlaceText;
    return [{ slug: destSlug, image: place.image, name: text.name, shortDescription: text.shortDescription, tag: text.tag }];
  });

  const whyChoose = td.has("whyChoose") ? (td.raw("whyChoose") as string[]) : undefined;

  return (
    <TourDetailPage
      locale={locale}
      content={{
        slug: tour.slug,
        name,
        duration: tour.duration,
        heroImage: tour.heroImage,
        heroTitle: td("title"),
        heroIntro: td("intro"),
        destinations,
        whyChoose,
      }}
    />
  );
}
