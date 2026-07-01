import Image from "next/image";
import Link from "next/link";
import { BedDouble, Users } from "lucide-react";
import { PROPERTIES } from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { HomeSectionCarousel } from "@/components/shared/HomeSectionCarousel";

export function PropertiesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Properties"
            title="Stay Where You Belong"
            description="Hand-picked villas, apartments and retreats across Mauritius's most desirable locations."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <HomeSectionCarousel viewAllHref="/properties" viewAllLabel="View All Properties">
            {PROPERTIES.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-[90%] sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 90vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">{property.name}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {property.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4" />
                      {property.bedrooms} bedrooms
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      Up to {property.guests} guests
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {property.amenities.slice(0, 3).map((a) => (
                      <span key={a} className="text-xs bg-cream text-charcoal/70 px-3 py-1 rounded-full">
                        {a}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="text-xs bg-cream text-charcoal/70 px-3 py-1 rounded-full">
                        +{property.amenities.length - 3} more
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
                        Details
                      </Link>
                      <WhatsAppButton service={`Property — ${property.name}`} size="sm" label="Book" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </HomeSectionCarousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
