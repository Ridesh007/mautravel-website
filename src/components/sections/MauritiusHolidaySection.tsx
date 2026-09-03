import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PACKAGE_HERO_IMAGE } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function MauritiusHolidaySection() {
  const t = useTranslations("home.mauritiusHoliday");
  const features = t.raw("features") as string[];
  return (
    <section className="section-padding bg-cream">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src={PACKAGE_HERO_IMAGE}
                alt="Le Morne mountain and lagoon, Mauritius"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <SectionHeader
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
              centered={false}
            />
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-charcoal/80 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/mauritius-holiday-package"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              {t("cta")} <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
