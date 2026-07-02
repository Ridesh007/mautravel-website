import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WhyChooseGrid } from "@/components/shared/WhyChooseGrid";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export function WhyChooseSection() {
  const t = useTranslations("home.whyChoose");
  const features = t.raw("features") as Feature[];

  return (
    <section className="section-padding bg-cream">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </AnimatedSection>

        <WhyChooseGrid
          features={features}
          showMoreLabel={t("showMore")}
          showLessLabel={t("showLess")}
        />
      </div>
    </section>
  );
}
