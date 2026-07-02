import Image from "next/image";
import { useTranslations } from "next-intl";
import { BedDouble, Users } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PROPERTIES } from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { HomeSectionCarousel } from "@/components/shared/HomeSectionCarousel";

interface PropertyText { name: string; type: string; description: string; amenities: string[] }

export function PropertiesSection() {
  const t = useTranslations("properties");
  const tHome = useTranslations("home");

  return (
    <section className="section-padding bg-cream">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow={t("hero.eyebrow")}
            title={t("hero.title")}
            description={t("gridHeading.description")}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <HomeSectionCarousel viewAllHref="/properties" viewAllLabel={tHome("tours.viewAll")}>
            {PROPERTIES.map((property) => {
              const text = t.raw(`items.${property.id}`) as PropertyText;
              return (
                <div
                  key={property.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-[90%] sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={property.image}
                      alt={text.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 90vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                        {text.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-navy text-xl mb-2">{text.name}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {text.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-4 h-4" />
                        {property.bedrooms} {t("bedrooms")}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        {t("upTo")} {property.guests} {t("guests")}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {text.amenities.slice(0, 3).map((a) => (
                        <span key={a} className="text-xs bg-cream text-charcoal/70 px-3 py-1 rounded-full">
                          {a}
                        </span>
                      ))}
                      {text.amenities.length > 3 && (
                        <span className="text-xs bg-cream text-charcoal/70 px-3 py-1 rounded-full">
                          +{text.amenities.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gold font-bold text-base">{property.priceFrom}</p>
                      <div className="flex gap-2">
                        <Link
                          href="/properties"
                          className="text-sm font-semibold text-navy border border-navy/20 hover:bg-navy hover:text-white px-4 py-2 rounded-full transition-all duration-200"
                        >
                          {tHome("tours.learnMore")}
                        </Link>
                        <WhatsAppButton service={`Property — ${text.name}`} size="sm" label={tHome("tours.book")} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </HomeSectionCarousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
