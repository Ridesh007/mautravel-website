import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Clock, MapPin, Star, Tag, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { CtaSection } from "@/components/sections/CtaSection";
import { FleetCarousel } from "@/components/shared/FleetCarousel";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Airport Transfers",
  description:
    "Private luxury airport transfers from SSR International Airport to any destination in Mauritius. 24/7, fixed prices, professional drivers.",
  alternates: {
    canonical: "/airport-transfers",
  },
  openGraph: {
    url: "/airport-transfers",
    title: "Airport Transfers | MauTravel",
    description:
      "Private luxury airport transfers from SSR International Airport to any destination in Mauritius. 24/7, fixed prices, professional drivers.",
  },
};

const AIRPORT_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Airport Transfer Mauritius",
  serviceType: "Airport Transfer",
  provider: { "@id": "https://www.mautravel.com/#organization" },
  areaServed: { "@type": "Country", name: "Mauritius" },
  description:
    "Private luxury airport transfers from Sir Seewoosagur Ramgoolam (SSR) International Airport to any destination in Mauritius, available 24/7.",
  url: "https://www.mautravel.com/airport-transfers",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://wa.me/23057000000",
    servicePhone: "+230-5700-0000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Airport Transfer Types",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Arrival Transfer",
          description:
            "Met by your driver at arrivals with a name board. Assisted with luggage and driven directly to your accommodation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Departure Transfer",
          description:
            "Collected from your accommodation at the perfect time to ensure a stress-free departure to the airport.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hotel to Hotel Transfer",
          description:
            "Comfortable, reliable transfers between any two destinations in Mauritius.",
        },
      },
    ],
  },
};

const FEATURES = [
  { icon: Clock, title: "24/7 Availability", desc: "Any flight, any time — we never close." },
  { icon: Star, title: "Professional Drivers", desc: "Fully licensed, vetted and experienced." },
  { icon: MapPin, title: "All Destinations", desc: "Every hotel, villa and resort in Mauritius." },
  { icon: CheckCircle2, title: "Fixed Pricing", desc: "No surprises. Pay what you're quoted." },
];

const TRANSFER_TYPES = [
  {
    name: "Arrival Transfer",
    desc: "Met by your driver at arrivals with a name board. Assisted with luggage and driven directly to your accommodation.",
    price: "From €25",
    image: "https://images.unsplash.com/photo-1651104677157-f14b80602682?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Departure Transfer",
    desc: "Collected from your accommodation at the perfect time to ensure a stress-free departure to the airport.",
    price: "From €25",
    image: "https://images.unsplash.com/photo-1687977424023-83e3d3385131?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hotel to Hotel",
    desc: "Moving accommodation mid-stay? We provide comfortable, reliable transfers between any two destinations.",
    price: "From €30",
    image: "https://images.unsplash.com/photo-1690413994339-2b147e5129c8?auto=format&fit=crop&w=800&q=80",
  },
];

const PICKUP_CARS = [
  { name: "BMW Series 5",    image: "/airport-pickup-cars/BMW Series 5.png" },
  { name: "Mercedes Vito",   image: "/airport-pickup-cars/Mercedes Vito.png" },
  { name: "Nissan Hiace",    image: "/airport-pickup-cars/Nissan Hiace.png" },
  { name: "Nissan Vozy",     image: "/airport-pickup-cars/Nissan Vozy.png" },
  { name: "Toyota Wish",     image: "/airport-pickup-cars/Toyota Wish.png" },
];

const FAQS = [
  {
    q: "How do I find my driver at the airport?",
    a: "Your driver will be waiting at the arrivals hall holding a name board with your name clearly displayed. You will receive your driver's contact number in advance.",
  },
  {
    q: "What if my flight is delayed?",
    a: "We monitor all flights in real time. Your driver will adjust accordingly at no extra charge — we wait for you.",
  },
  {
    q: "How many passengers can the vehicle accommodate?",
    a: "We have vehicles for all group sizes — from solo travellers to large groups of 15+. Please specify your group size when booking.",
  },
  {
    q: "Do you cover the whole island?",
    a: "Yes, we provide transfers to any address in Mauritius — north, south, east and west coast, including remote areas.",
  },
];

export default function AirportTransfersPage() {
  return (
    <>
      <JsonLd data={AIRPORT_SERVICE_SCHEMA} />
      <PageHero
        title="Airport Transfers"
        subtitle="Comfortable, reliable and punctual private transfers from SSR International Airport to your destination across Mauritius."
        image="https://images.unsplash.com/photo-1651104677157-f14b80602682?auto=format&fit=crop&w=1920&q=80"
        eyebrow="MauTravel Services"
        breadcrumbs={[{ label: "Airport Transfers", href: "/airport-transfers" }]}
      />

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="The MauTravel Transfer Promise"
              description="From the moment you land to the moment you leave — your transfer experience is our priority."
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            stagger={0.08}
          >
            {FEATURES.map((f) => (
              <div key={f.title} className="text-center p-6 rounded-2xl bg-cream group hover:bg-navy transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gold flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-sm">
                  <f.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-navy group-hover:text-white text-base mb-1 transition-colors">{f.title}</h3>
                <p className="text-charcoal/60 group-hover:text-white/70 text-sm transition-colors">{f.desc}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Transfer Types */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Transfer Options"
              title="Choose Your Transfer Type"
            />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {TRANSFER_TYPES.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={t.image} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">{t.name}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{t.desc}</p>
                  <WhatsAppButton service={`Airport Transfer — ${t.name}`} size="sm" className="w-full justify-center" />
                </div>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Fleet Slideshow */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Fleet"
              title="Airport Pickup Vehicles"
              description="Travel in comfort and style. Choose from our well-maintained fleet for your airport pickup."
            />
          </AnimatedSection>
          <FleetCarousel cars={PICKUP_CARS} />
        </div>
      </section>

      {/* Pickup Pricing */}
      <section className="py-10 bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-3xl px-8 py-8 shadow-sm">
              {/* Left: price block */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Tag className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-medium text-charcoal/50 uppercase tracking-widest mb-0.5">
                    Pickup Price available after booking
                  </p>
                  <p className="font-heading font-bold text-navy text-2xl leading-none">
                    Starting from{" "}
                    <span className="text-gold">MUR 2,000</span>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-14 bg-gray-200" />

              {/* Right: contact for quotation */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div>
                  <p className="font-semibold text-navy text-sm mb-0.5">Need a custom quotation?</p>
                  <p className="text-charcoal/50 text-xs">
                    Group transfers, special routes &amp; long-distance — contact us for a tailored price.
                  </p>
                </div>
                <WhatsAppButton
                  service="Airport Pickup — Custom Quotation"
                  size="sm"
                  className="flex-shrink-0 whitespace-nowrap"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ + Quote */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {FAQS.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-100 pb-6">
                    <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-cream rounded-3xl p-8">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">Request a Quote</h2>
                <p className="text-charcoal/60 text-sm mb-6">Fill in your details and we&apos;ll provide a fast, no-obligation quote via WhatsApp.</p>
                <QuoteForm defaultService="Airport Transfer" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
