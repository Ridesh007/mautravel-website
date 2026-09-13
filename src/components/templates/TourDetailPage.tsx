import { CheckCircle2, MessageCircle, Clock, SlidersHorizontal } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { DestinationCard, type DestinationCardData } from "@/components/shared/DestinationCard";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export interface TourDetailContent {
  slug: string;
  name: string;
  duration: string;
  heroImage: string;
  heroTitle: string;
  heroIntro: string;
  destinations: DestinationCardData[];
  whyChoose?: string[];
}

interface Props {
  content: TourDetailContent;
  locale: string;
}

export async function TourDetailPage({ content, locale }: Props) {
  const t = await getTranslations({ locale, namespace: "tourDetails.ui" });

  return (
    <>
      <PageHero
        title={content.heroTitle}
        subtitle={content.heroIntro}
        image={content.heroImage}
        eyebrow={t("heroEyebrow")}
        breadcrumbs={[
          { label: t("toursBreadcrumb"), href: "/tours" },
          { label: content.name, href: `/tours/${content.slug}` },
        ]}
      >
        <div className="mt-5 inline-flex items-center gap-2 text-white/80 text-sm bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
          <Clock className="w-4 h-4" />
          {content.duration}
        </div>
      </PageHero>

      {content.destinations.length > 0 ? (
        <section className="section-padding bg-white">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader
                eyebrow={t("placesEyebrow")}
                title={t("placesTitle")}
                description={t("placesDescription")}
              />
            </AnimatedSection>
            <AnimatedGrid
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              stagger={0.08}
            >
              {content.destinations.map((destination, i) => (
                <DestinationCard
                  key={destination.slug}
                  {...destination}
                  learnMoreLabel={t("viewPlace")}
                  priority={i === 0}
                />
              ))}
            </AnimatedGrid>
          </div>
        </section>
      ) : (
        <section className="section-padding bg-white">
          <div className="container-xl max-w-2xl text-center">
            <AnimatedSection>
              <p className="text-charcoal/70 text-lg leading-relaxed">{t("noFixedItinerary")}</p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {content.whyChoose && content.whyChoose.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-xl">
            <AnimatedSection>
              <SectionHeader eyebrow={t("heroEyebrow")} title={t("whyChooseTitle")} />
            </AnimatedSection>
            <AnimatedGrid
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
              stagger={0.07}
            >
              {content.whyChoose.map((reason) => (
                <div key={reason} className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-sm h-full">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <p className="text-charcoal/70 text-sm leading-relaxed">{reason}</p>
                </div>
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-xl max-w-2xl text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">{t("planEyebrow")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-3">{t("planTitle")}</h2>
            <p className="text-charcoal/60 mb-8 leading-relaxed">{t("planSubtitle")}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <WhatsAppButton service={content.name} variant="book" size="lg" label={t("bookThisTour")} />
              {/* Customising a tour means choosing travellers, days and places — that is the
                  Mauritius Holiday planner, not a WhatsApp quote thread. */}
              <Link
                href="/mauritius-holiday-package#customize"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3.5 rounded-full transition-all duration-200 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <SlidersHorizontal className="w-5 h-5" />
                {t("customizeThisTour")}
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-navy/20 text-navy font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:bg-navy hover:text-white text-base"
              >
                <MessageCircle className="w-5 h-5" />
                {t("chatOnWhatsapp")}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
