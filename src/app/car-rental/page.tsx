import type { Metadata } from "next";
import Image from "next/image";
import { Users, Fuel, Settings, CheckCircle2 } from "lucide-react";
import { VEHICLES } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Car Rental Mauritius",
  description:
    "Rent a car in Mauritius with MauTravel. Well-maintained vehicles, competitive daily rates, island-wide delivery. Explore at your own pace.",
  alternates: {
    canonical: "/car-rental",
  },
  openGraph: {
    url: "/car-rental",
  },
};

const INCLUDED = [
  "Unlimited mileage across Mauritius",
  "Third-party insurance included",
  "24/7 roadside assistance",
  "Airport and hotel delivery",
  "Clean, maintained vehicles",
  "No hidden fees",
];

export default function CarRentalPage() {
  return (
    <>
      <PageHero
        title="Car Rental in Mauritius"
        subtitle="Discover Mauritius on your own terms with our well-maintained fleet of vehicles. Pick up from the airport or your hotel — we come to you."
        image="https://images.unsplash.com/photo-1507187632231-5beb21a654a2?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Car Rental"
        breadcrumbs={[{ label: "Car Rental", href: "/car-rental" }]}
      />

      {/* What's included */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="What's Included"
              title="Everything in the Price"
              description="Transparent, all-inclusive daily rates with no nasty surprises."
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            stagger={0.06}
          >
            {INCLUDED.map((item) => (
              <div key={item} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-gold mx-auto mb-2" />
                <p className="text-navy text-xs font-medium leading-tight">{item}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Fleet"
              title="Choose Your Vehicle"
              description="From economy hatchbacks to premium SUVs and family minivans — we have the right car for every journey."
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            stagger={0.1}
          >
            {VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-50">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className={`${vehicle.objectFit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="font-heading font-bold text-navy text-2xl">{vehicle.name}</h2>
                    <p className="text-gold font-bold text-lg shrink-0 ml-4">{vehicle.dailyRate}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-1.5 text-charcoal/60 text-sm">
                      <Users className="w-4 h-4" />
                      {vehicle.seats} seats
                    </div>
                    <div className="flex items-center gap-1.5 text-charcoal/60 text-sm">
                      <Settings className="w-4 h-4" />
                      {vehicle.transmission}
                    </div>
                    <div className="flex items-center gap-1.5 text-charcoal/60 text-sm">
                      <Fuel className="w-4 h-4" />
                      {vehicle.fuel}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {vehicle.features.map((f) => (
                      <span key={f} className="text-xs bg-cream text-charcoal/70 px-3 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                  <WhatsAppButton
                    service={`Car Rental — ${vehicle.name}`}
                    size="md"
                    label="Book This Vehicle"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Customer Review */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Customer Review"
              title="What Our Clients Say"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[300px] md:min-h-full">
                  <Image
                    src="/car-review/car-image.jpg"
                    alt="Customer with Nissan March"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <svg className="w-8 h-8 text-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-6">
                    The Nissan March car provided by MauTravel was very smooth. We travelled to Mauritius from India and found that self driving was a better option. The car rental service is very trustworthy. They even had to take back the car for some other work for a day but they made sure that an exchange was provided in time so that our planned activities could take place smoothly. I would highly recommend this car rental service. MauTravel team is very approachable and it&apos;s easy to communicate if there is any query.
                  </p>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-navy font-semibold text-sm">Verified Customer — India</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Driving in Mauritius info */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">Driving in Mauritius</h2>
              <div className="space-y-4 text-charcoal/70 text-sm leading-relaxed">
                <p>Mauritius drives on the <strong className="text-navy">left-hand side</strong> of the road, similar to the UK, Australia and India. Roads are generally well-maintained and signposted.</p>
                <p>The island is compact — most destinations are reachable within 1–2 hours from anywhere. A rental car is the perfect way to explore at your own pace.</p>
                <p>You will need a <strong className="text-navy">valid driving licence</strong> from your home country. Most international licences are accepted.</p>
                <p>The minimum driving age in Mauritius is <strong className="text-navy">18 years</strong>. Renters must be 21 or over.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">Request a Quote</h2>
                <p className="text-charcoal/60 text-sm mb-6">Let us know your dates and we&apos;ll confirm the best available vehicle.</p>
                <QuoteForm defaultService="Car Rental" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
