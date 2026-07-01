import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, CheckCircle2 } from "lucide-react";
import { TOURS } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Private Tours",
  description:
    "Expert-guided private tours across Mauritius — North, South, East, West and custom itineraries. Discover the island with MauTravel.",
  alternates: {
    canonical: "/tours",
  },
  openGraph: {
    url: "/tours",
  },
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        title="Private Tours of Mauritius"
        subtitle="Let our expert local guides reveal the very best of Mauritius — from dramatic volcanic landscapes to vibrant cultural treasures."
        image="https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1920&q=80"
        eyebrow="MauTravel Tours"
        breadcrumbs={[{ label: "Tours", href: "/tours" }]}
      />

      {/* Tours Grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Tours"
              title="Explore Every Corner of the Island"
              description="Each tour is led by a knowledgeable local guide in a private, air-conditioned vehicle. No groups, no rushing — just you and Mauritius."
            />
          </AnimatedSection>
          <div className="space-y-12">
            {TOURS.map((tour, i) => (
              <AnimatedSection key={tour.id} delay={i * 0.08}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Private Tour</p>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-3">{tour.name}</h2>
                    <div className="flex items-center gap-2 text-charcoal/60 text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <p className="text-charcoal/70 leading-relaxed mb-6">{tour.description}</p>
                    <div className="mb-6">
                      <p className="font-semibold text-navy text-sm mb-3">Tour Highlights</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tour.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-charcoal/70">
                            <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <WhatsAppButton service={tour.name} size="md" />
                      <WhatsAppButton service={tour.name} size="md" variant="quote" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="What's Included"
              title="Everything You Need, Nothing You Don't"
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            stagger={0.07}
          >
            {[
              { title: "Private Vehicle", desc: "Air-conditioned car or minibus depending on group size." },
              { title: "Local Expert Guide", desc: "Knowledgeable, friendly and passionate about Mauritius." },
              { title: "Flexible Itinerary", desc: "We adapt the day to your pace and interests." },
              { title: "Door to Door", desc: "Collected from and returned to your accommodation." },
              { title: "Bottled Water", desc: "Complimentary refreshments throughout the tour." },
              { title: "Free Cancellation", desc: "Cancel up to 48 hours before with no charge." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-charcoal/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <div className="bg-cream rounded-3xl p-8 md:p-12">
              <h2 className="font-heading text-3xl font-bold text-navy mb-2 text-center">Plan Your Private Tour</h2>
              <p className="text-charcoal/60 text-sm text-center mb-8">Tell us about your group and we&apos;ll create a personalised tour quote.</p>
              <QuoteForm defaultService="Private Tour" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
