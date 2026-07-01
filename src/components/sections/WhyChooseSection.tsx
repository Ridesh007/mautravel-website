import { WHY_CHOOSE_FEATURES } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhyChooseGrid } from "@/components/shared/WhyChooseGrid";

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Why MauTravel"
            title="Your Island, Our Expertise"
            description="We combine deep local knowledge with genuine care for every traveller who chooses MauTravel."
          />
        </AnimatedSection>

        <WhyChooseGrid features={WHY_CHOOSE_FEATURES} />
      </div>
    </section>
  );
}
