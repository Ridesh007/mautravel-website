import type { Metadata } from "next";
import Image from "next/image";
import { Users, Fuel, Settings, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { VEHICLES } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { CtaSection } from "@/components/sections/CtaSection";
import { buildAlternates } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.carRental" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/car-rental"),
    openGraph: { title: `${t("title")} | MauTravel`, description: t("description") },
  };
}

interface VehicleText { name: string; features: string[] }

export default async function CarRentalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "carRental" });
  const included = t.raw("included") as string[];
  const drivingInfo = t.raw("drivingInfo") as string[];

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image="https://images.unsplash.com/photo-1507187632231-5beb21a654a2?auto=format&fit=crop&w=1920&q=80"
        eyebrow={t("hero.eyebrow")}
        breadcrumbs={[{ label: t("hero.title"), href: "/car-rental" }]}
      />

      {/* What's included */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow={t("includedHeading.eyebrow")}
              title={t("includedHeading.title")}
              description={t("includedHeading.description")}
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            stagger={0.06}
          >
            {included.map((item) => (
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
              eyebrow={t("fleetHeading.eyebrow")}
              title={t("fleetHeading.title")}
              description={t("fleetHeading.description")}
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            stagger={0.1}
          >
            {VEHICLES.map((vehicle) => {
              const text = t.raw(`vehicles.${vehicle.id}`) as VehicleText;
              return (
                <div
                  key={vehicle.id}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-50">
                    <Image
                      src={vehicle.image}
                      alt={text.name}
                      fill
                      className={`${vehicle.objectFit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="font-heading font-bold text-navy text-2xl">{text.name}</h2>
                      <p className="text-gold font-bold text-lg shrink-0 ml-4">{vehicle.dailyRate}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-5">
                      <div className="flex items-center gap-1.5 text-charcoal/60 text-sm">
                        <Users className="w-4 h-4" />
                        {vehicle.seats} {t("seatsLabel")}
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
                      {text.features.map((f) => (
                        <span key={f} className="text-xs bg-cream text-charcoal/70 px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                    <WhatsAppButton
                      service={`Car Rental — ${text.name}`}
                      size="md"
                      label={t("bookThisVehicle")}
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              );
            })}
          </AnimatedGrid>
        </div>
      </section>

      {/* Customer Review */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow={t("reviewHeading.eyebrow")}
              title={t("reviewHeading.title")}
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
                    {t("review.text")}
                  </p>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-navy font-semibold text-sm">{t("review.author")}</p>
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
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">{t("drivingHeading")}</h2>
              <div className="space-y-4 text-charcoal/70 text-sm leading-relaxed">
                {drivingInfo.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/<b>/g, '<strong class="text-navy">').replace(/<\/b>/g, "</strong>") }} />
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">{t("quoteHeading")}</h2>
                <p className="text-charcoal/60 text-sm mb-6">{t("quoteSubtitle")}</p>
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
