import type { Metadata } from "next";
import Image from "next/image";
import { Clock, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { TOURS } from "@/lib/constants";
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
  const t = await getTranslations({ locale, namespace: "seo.tours" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/tours"),
    openGraph: { title: `${t("title")} | MauTravel`, description: t("description") },
  };
}

interface TourText { name: string; description: string; highlights: string[] }
interface IncludedText { title: string; desc: string }

export default async function ToursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tours" });
  const included = t.raw("included") as IncludedText[];

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image="https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1920&q=80"
        eyebrow={t("hero.eyebrow")}
        breadcrumbs={[{ label: t("hero.title"), href: "/tours" }]}
      />

      {/* Tours Grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow={t("gridHeading.eyebrow")}
              title={t("gridHeading.title")}
              description={t("gridHeading.description")}
            />
          </AnimatedSection>
          <div className="space-y-12">
            {TOURS.map((tour, i) => {
              const text = t.raw(`items.${tour.id}`) as TourText;
              return (
                <AnimatedSection key={tour.id} delay={i * 0.08}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        src={tour.image}
                        alt={text.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{t("badge")}</p>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-3">{text.name}</h2>
                      <div className="flex items-center gap-2 text-charcoal/60 text-sm mb-4">
                        <Clock className="w-4 h-4" />
                        {tour.duration}
                      </div>
                      <p className="text-charcoal/70 leading-relaxed mb-6">{text.description}</p>
                      <div className="mb-6">
                        <p className="font-semibold text-navy text-sm mb-3">{t("highlightsLabel")}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {text.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-charcoal/70">
                              <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <WhatsAppButton service={text.name} size="md" />
                        <WhatsAppButton service={text.name} size="md" variant="quote" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow={t("includedHeading.eyebrow")}
              title={t("includedHeading.title")}
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            stagger={0.07}
          >
            {included.map((item) => (
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
              <h2 className="font-heading text-3xl font-bold text-navy mb-2 text-center">{t("quoteHeading")}</h2>
              <p className="text-charcoal/60 text-sm text-center mb-8">{t("quoteSubtitle")}</p>
              <QuoteForm defaultService="Private Tour" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
