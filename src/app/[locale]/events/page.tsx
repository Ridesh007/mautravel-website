import type { Metadata } from "next";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { EVENTS } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { buildAlternates } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.events" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/events"),
    openGraph: { title: `${t("title")} | MauTravel`, description: t("description") },
  };
}

interface EventText { title: string; category: string; description: string }

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "events" });

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image="https://images.unsplash.com/photo-1509722156492-92fa997b78f5?auto=format&fit=crop&w=1920&q=80"
        eyebrow={t("hero.eyebrow")}
        breadcrumbs={[{ label: t("hero.title"), href: "/events" }]}
      />

      {/* Events grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow={t("gridHeading.eyebrow")}
              title={t("gridHeading.title")}
              description={t("gridHeading.description")}
            />
          </AnimatedSection>
          <AnimatedGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.07}
          >
            {EVENTS.map((event) => {
              const text = t.raw(`items.${event.id}`) as EventText;
              return (
                <article
                  key={event.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={text.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {text.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-charcoal/50 text-xs mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </div>
                    <h2 className="font-heading font-bold text-navy text-xl mb-2 leading-snug">{text.title}</h2>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{text.description}</p>
                    <WhatsAppButton
                      service={`I'd like to visit Mauritius during ${text.title}`}
                      size="sm"
                      label={t("planYourVisit")}
                      className="w-full justify-center"
                    />
                  </div>
                </article>
              );
            })}
          </AnimatedGrid>
        </div>
      </section>

      {/* Cultural info */}
      <section className="section-padding bg-cream">
        <div className="container-xl max-w-4xl">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              {t("culturalHeading")}
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              {t("culturalText")}
            </p>
            <WhatsAppButton
              service="I'd like to plan my Mauritius visit around a festival"
              size="lg"
              label={t("talkToTeam")}
            />
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
