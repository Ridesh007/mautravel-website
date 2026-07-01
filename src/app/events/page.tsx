import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import { EVENTS } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Events & Festivals in Mauritius",
  description:
    "Discover the rich calendar of festivals, cultural events and seasonal celebrations in Mauritius. Plan your visit around the island's best events.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    url: "/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events & Festivals in Mauritius"
        subtitle="Mauritius's multicultural heritage creates a vibrant calendar of festivals and celebrations throughout the year — each one a unique window into island life."
        image="https://images.unsplash.com/photo-1509722156492-92fa997b78f5?auto=format&fit=crop&w=1920&q=80"
        eyebrow="What's On"
        breadcrumbs={[{ label: "Events", href: "/events" }]}
      />

      {/* Events grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="2026 Calendar"
              title="Mauritius Events & Festivals"
              description="Mauritius is a melting pot of Hindu, Muslim, Christian and Chinese cultures — each contributing unique and spectacular celebrations throughout the year."
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.07}
          >
            {EVENTS.map((event) => (
              <article
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-charcoal/50 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                  <h2 className="font-heading font-bold text-navy text-xl mb-2 leading-snug">{event.title}</h2>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{event.description}</p>
                  <WhatsAppButton
                    service={`I'd like to visit Mauritius during ${event.title}`}
                    size="sm"
                    label="Plan Your Visit"
                    className="w-full justify-center"
                  />
                </div>
              </article>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Cultural info */}
      <section className="section-padding bg-cream">
        <div className="container-xl max-w-4xl">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              Plan Your Visit Around Mauritius&apos;s Festivals
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Experiencing a Mauritius festival is one of the most memorable parts of any island visit.
              From the spectacular fireworks of Chinese New Year in Port Louis to the devotion and colour
              of Thaipoosam Cavadee, these events offer a genuine window into Mauritius&apos;s extraordinary
              multicultural identity. Our team can help you plan your stay to coincide with the celebrations
              most meaningful to you.
            </p>
            <WhatsAppButton
              service="I'd like to plan my Mauritius visit around a festival"
              size="lg"
              label="Talk to Our Team"
            />
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
