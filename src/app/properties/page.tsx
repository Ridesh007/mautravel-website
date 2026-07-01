import type { Metadata } from "next";
import Image from "next/image";
import { BedDouble, Users, CheckCircle2 } from "lucide-react";
import { PROPERTIES } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Properties in Mauritius",
  description:
    "Hand-picked villas, apartments and beachfront properties in Mauritius. Book your perfect Mauritius accommodation with MauTravel.",
  alternates: {
    canonical: "/properties",
  },
  openGraph: {
    url: "/properties",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        title="Properties in Mauritius"
        subtitle="From intimate garden apartments to breathtaking beachfront villas — we curate only the finest accommodation across the island."
        image="https://images.unsplash.com/photo-1582574643306-d00ea3f7d49b?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Accommodation"
        breadcrumbs={[{ label: "Properties", href: "/properties" }]}
      />

      {/* Properties Grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Available Properties"
              title="Find Your Perfect Stay"
              description="Every property we list has been personally inspected to ensure it meets MauTravel's standards for quality, comfort and value."
            />
          </AnimatedSection>

          <div className="space-y-10">
            {PROPERTIES.map((property, i) => (
              <AnimatedSection key={property.id} delay={i * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-cream rounded-3xl overflow-hidden ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative aspect-[4/3] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className={`p-8 md:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {property.type}
                    </span>
                    <h2 className="font-heading text-3xl font-bold text-navy mb-2">{property.name}</h2>
                    <div className="flex items-center gap-5 text-sm text-charcoal/60 mb-4">
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-4 h-4" />
                        {property.bedrooms} bedrooms
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        Up to {property.guests} guests
                      </div>
                    </div>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-5">{property.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {property.amenities.map((a) => (
                        <span key={a} className="flex items-center gap-1.5 text-xs bg-white text-charcoal/70 px-3 py-1.5 rounded-full shadow-sm">
                          <CheckCircle2 className="w-3 h-3 text-gold" />
                          {a}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gold font-bold text-xl">{property.priceFrom}</p>
                      <div className="flex gap-2">
                        <WhatsAppButton service={`Property — ${property.name}`} size="md" />
                        <WhatsAppButton service={`Property — ${property.name}`} size="md" variant="quote" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-cream">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-navy mb-2 text-center">Request Availability</h2>
              <p className="text-charcoal/60 text-sm text-center mb-8">Tell us your dates and party size and we&apos;ll find the perfect property for your stay.</p>
              <QuoteForm defaultService="Property" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
