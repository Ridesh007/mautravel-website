import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Zap, ChevronRight } from "lucide-react";
import { ActivityCardReadMore } from "@/components/shared/ActivityCardReadMore";
import { ACTIVITIES } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Activities in Mauritius",
  description:
    "Book thrilling activities in Mauritius — catamaran cruises, dolphin encounters, tandem paragliding, parasailing, hiking adventures and more.",
  alternates: {
    canonical: "/activities",
  },
  openGraph: {
    url: "/activities",
  },
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="Activities in Mauritius"
        subtitle="Curated experiences for every kind of adventurer — from tranquil underwater walks to exhilarating paragliding flights above the island."
        image="https://images.unsplash.com/photo-1686739996006-7c2cdff5d34c?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Things To Do"
        breadcrumbs={[{ label: "Activities", href: "/activities" }]}
      />

      {/* Activities Grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Activities"
              title="Unforgettable Mauritius Experiences"
              description="We partner with the best activity providers in Mauritius to guarantee safety, quality and memories that last a lifetime."
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            stagger={0.08}
          >
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <Link href={`/activities/${activity.slug}`} className="block relative aspect-[16/8] overflow-hidden shrink-0">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  {activity.difficulty && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur text-navy text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-gold" />
                        {activity.difficulty}
                      </span>
                    </div>
                  )}
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-charcoal/50 text-xs mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    {activity.duration}
                  </div>
                  <h2 className="font-heading font-bold text-navy text-2xl mb-2">{activity.name}</h2>
                  <ActivityCardReadMore
                    description={activity.description}
                    highlights={activity.highlights}
                    suitableFor={activity.suitableFor}
                  />
                  <div className="flex flex-wrap gap-3 mt-auto pt-2">
                    <Link
                      href={`/activities/${activity.slug}`}
                      className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 text-sm hover:-translate-y-0.5 shadow-sm"
                    >
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <WhatsAppButton service={activity.name} size="sm" />
                  </div>
                </div>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Safety note */}
      <section className="py-16 bg-cream">
        <div className="container-xl max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">Safety First, Always</h2>
            <p className="text-charcoal/60 leading-relaxed">
              All our activity partners are fully licensed, insured and adhere to the highest safety standards in Mauritius.
              We hand-pick every provider to ensure your experience is not only thrilling — but completely safe.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <div className="bg-cream rounded-3xl p-8 md:p-12">
              <h2 className="font-heading text-3xl font-bold text-navy mb-2 text-center">Book an Activity</h2>
              <p className="text-charcoal/60 text-sm text-center mb-8">Tell us which activity interests you and we&apos;ll get back to you with availability and pricing.</p>
              <QuoteForm defaultService="Activity" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
