import type { Metadata } from "next";
import Image from "next/image";
import { BedDouble, Users, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PROPERTIES } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { CtaSection } from "@/components/sections/CtaSection";
import { buildAlternates } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.properties" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/properties"),
    openGraph: { title: `${t("title")} | MauTravel`, description: t("description") },
    robots: { index: false, follow: false },
  };
}

interface PropertyText { name: string; type: string; description: string; amenities: string[] }

export default async function PropertiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "properties" });

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image="https://images.unsplash.com/photo-1582574643306-d00ea3f7d49b?auto=format&fit=crop&w=1920&q=80"
        eyebrow={t("hero.eyebrow")}
        breadcrumbs={[{ label: t("hero.title"), href: "/properties" }]}
      />

      {/* Properties Grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow={t("gridHeading.eyebrow")}
              title={t("gridHeading.title")}
              description={t("gridHeading.description")}
            />
          </AnimatedSection>

          <div className="space-y-10">
            {PROPERTIES.map((property, i) => {
              const text = t.raw(`items.${property.id}`) as PropertyText;
              return (
                <AnimatedSection key={property.id} delay={i * 0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-cream rounded-3xl overflow-hidden ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`relative aspect-[4/3] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        src={property.image}
                        alt={text.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className={`p-8 md:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {text.type}
                      </span>
                      <h2 className="font-heading text-3xl font-bold text-navy mb-2">{text.name}</h2>
                      <div className="flex items-center gap-5 text-sm text-charcoal/60 mb-4">
                        <div className="flex items-center gap-1.5">
                          <BedDouble className="w-4 h-4" />
                          {property.bedrooms} {t("bedrooms")}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {t("upTo")} {property.guests} {t("guests")}
                        </div>
                      </div>
                      <p className="text-charcoal/70 text-sm leading-relaxed mb-5">{text.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {text.amenities.map((a) => (
                          <span key={a} className="flex items-center gap-1.5 text-xs bg-white text-charcoal/70 px-3 py-1.5 rounded-full shadow-sm">
                            <CheckCircle2 className="w-3 h-3 text-gold" />
                            {a}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-gold font-bold text-xl">{property.priceFrom}</p>
                        <div className="flex gap-2">
                          <WhatsAppButton service={`Property — ${text.name}`} size="md" />
                          <WhatsAppButton service={`Property — ${text.name}`} size="md" variant="quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-cream">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-navy mb-2 text-center">{t("quoteHeading")}</h2>
              <p className="text-charcoal/60 text-sm text-center mb-8">{t("quoteSubtitle")}</p>
              <QuoteForm defaultService="Property" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
