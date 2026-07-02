import Image from "next/image";
import { useTranslations } from "next-intl";
import { Clock, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TOURS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { HomeSectionCarousel } from "@/components/shared/HomeSectionCarousel";

interface TourText {
  name: string;
  description: string;
}

export function ToursSection() {
  const t = useTranslations("home.tours");
  const tItems = useTranslations("tours.items");

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

        <AnimatedSection delay={0.1}>
          <HomeSectionCarousel viewAllHref="/tours" viewAllLabel={t("viewAll")}>
            {TOURS.map((tour) => {
              const text = tItems.raw(tour.id) as TourText;
              return (
                <div
                  key={tour.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={text.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gold font-semibold uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {t("badge")}
                    </div>
                    <h3 className="font-heading font-bold text-navy text-xl mb-2">{text.name}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {text.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-charcoal/50 mb-5">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.duration}
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="/tours"
                        className="flex-1 text-center text-sm font-semibold text-navy border border-navy/20 hover:bg-navy hover:text-white py-2.5 rounded-full transition-all duration-200"
                      >
                        {t("learnMore")}
                      </Link>
                      <WhatsAppButton service={text.name} size="sm" label={t("book")} />
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
