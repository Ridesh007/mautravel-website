import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { AirportTransfersSection } from "@/components/sections/AirportTransfersSection";
import { ToursSection } from "@/components/sections/ToursSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { CarRentalSection } from "@/components/sections/CarRentalSection";
// import { PropertiesSection } from "@/components/sections/PropertiesSection"; // HIDDEN — uncomment to restore
import { MauritiusHolidaySection } from "@/components/sections/MauritiusHolidaySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import type { Metadata } from "next";
import { SocialSection } from "@/components/sections/SocialSection";
import { setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: buildAlternates(locale, "") };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Required for static rendering: without it the sections' useTranslations() falls back to
  // reading request headers, which made the homepage the only dynamically rendered page.
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <AirportTransfersSection />
      <ToursSection />
      <ActivitiesSection />
      <CarRentalSection />
      {/* <PropertiesSection /> */}{/* HIDDEN — uncomment to restore */}
      <MauritiusHolidaySection />
      <EventsSection />
      <ReviewsSection />
      <CtaSection />
      <SocialSection />
    </>
  );
}
