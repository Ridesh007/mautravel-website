import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Zap, ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ActivityCardReadMore } from "@/components/shared/ActivityCardReadMore";
import { ACTIVITIES } from "@/lib/constants";
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
  const t = await getTranslations({ locale, namespace: "seo.activities" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/activities"),
    openGraph: { title: `${t("title")} | MauTravel`, description: t("description") },
  };
}

interface ActivityText {
  name: string;
  description: string;
  highlights?: string[];
  suitableFor?: string;
}

export default async function ActivitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "activities" });

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image="https://images.unsplash.com/photo-1686739996006-7c2cdff5d34c?auto=format&fit=crop&w=1920&q=80"
        eyebrow={t("hero.eyebrow")}
        breadcrumbs={[{ label: t("hero.title"), href: "/activities" }]}
      />

      {/* Activities Grid */}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            stagger={0.08}
          >
            {ACTIVITIES.map((activity) => {
              const text = t.raw(`items.${activity.id}`) as ActivityText;
              return (
                <div
                  key={activity.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <Link href={`/activities/${activity.slug}`} className="block relative aspect-[16/8] overflow-hidden shrink-0">
                    <Image
                      src={activity.image}
                      alt={text.name}
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
                    <h2 className="font-heading font-bold text-navy text-2xl mb-2">{text.name}</h2>
                    <ActivityCardReadMore
                      description={text.description}
                      highlights={text.highlights}
                      suitableFor={text.suitableFor}
                    />
                    <div className="flex flex-wrap gap-3 mt-auto pt-2">
                      <Link
                        href={`/activities/${activity.slug}`}
                        className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 text-sm hover:-translate-y-0.5 shadow-sm"
                      >
                        {t("viewDetails")} <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <WhatsAppButton service={text.name} size="sm" />
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimatedGrid>
        </div>
      </section>

      {/* Safety note */}
      <section className="py-16 bg-cream">
        <div className="container-xl max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">{t("safety.title")}</h2>
            <p className="text-charcoal/60 leading-relaxed">
              {t("safety.description")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <div className="bg-cream rounded-3xl p-8 md:p-12">
              <h2 className="font-heading text-3xl font-bold text-navy mb-2 text-center">{t("quoteHeading")}</h2>
              <p className="text-charcoal/60 text-sm text-center mb-8">{t("quoteSubtitle")}</p>
              <QuoteForm defaultService="Activity" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
