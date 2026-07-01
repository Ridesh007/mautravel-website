import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { AirportTransfersSection } from "@/components/sections/AirportTransfersSection";
import { ToursSection } from "@/components/sections/ToursSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { CarRentalSection } from "@/components/sections/CarRentalSection";
// import { PropertiesSection } from "@/components/sections/PropertiesSection"; // HIDDEN — uncomment to restore
import { EventsSection } from "@/components/sections/EventsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import type { Metadata } from "next";
import { SocialSection } from "@/components/sections/SocialSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <AirportTransfersSection />
      <ToursSection />
      <ActivitiesSection />
      <CarRentalSection />
      {/* <PropertiesSection /> */}{/* HIDDEN — uncomment to restore */}
      <EventsSection />
      <ReviewsSection />
      <CtaSection />
      <SocialSection />
    </>
  );
}
