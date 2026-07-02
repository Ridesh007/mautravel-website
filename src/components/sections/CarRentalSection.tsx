import Image from "next/image";
import { useTranslations } from "next-intl";
import { Users, Fuel, Settings } from "lucide-react";
import { VEHICLES } from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { HomeSectionCarousel } from "@/components/shared/HomeSectionCarousel";

export function CarRentalSection() {
  const t = useTranslations("home.carRental");

  return (
    <section className="section-padding bg-navy">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            light
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <HomeSectionCarousel viewAllHref="/car-rental" viewAllLabel={t("viewAll")} light>
            {VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{vehicle.name}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <Users className="w-3.5 h-3.5" />
                      {vehicle.seats} {t("seats")}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <Settings className="w-3.5 h-3.5" />
                      {vehicle.transmission}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <Fuel className="w-3.5 h-3.5" />
                      {vehicle.fuel}
                    </div>
                  </div>
                  <p className="text-gold font-bold text-base mb-4">{vehicle.dailyRate}</p>
                  <WhatsAppButton
                    service={`Car Rental — ${vehicle.name}`}
                    size="sm"
                    label={t("bookThisVehicle")}
                    className="w-full justify-center"
                  />
                </div>
              </div>
            ))}
          </HomeSectionCarousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
