import Image from "next/image";
import { useTranslations } from "next-intl";
import { Calendar, Tag, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { EVENTS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { EventsCarousel } from "@/components/shared/EventsCarousel";

interface EventText {
  title: string;
  category: string;
  description: string;
}

export function EventsSection() {
  const t = useTranslations("home.events");
  const tItems = useTranslations("events.items");
  const shownEvents = EVENTS.slice(0, 3);
  const dotLabels = shownEvents.map((_, i) => t("goToEvent", { n: i + 1 }));

  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-xl mx-auto">
            <EventsCarousel
              previousLabel={t("previousEvent")}
              nextLabel={t("nextEvent")}
              regionLabel={t("carouselLabel")}
              dotLabels={dotLabels}
            >
              {shownEvents.map((event) => {
                const text = tItems.raw(event.id) as EventText;
                return (
                  <div
                    key={event.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={event.image}
                        alt={text.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 576px"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center gap-1.5 text-xs text-charcoal/50">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gold font-medium">
                          <Tag className="w-3.5 h-3.5" />
                          {text.category}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-navy text-lg mb-2 leading-snug">
                        {text.title}
                      </h3>
                      <p className="text-charcoal/60 text-sm leading-relaxed">{text.description}</p>
                    </div>
                  </div>
                );
              })}
            </EventsCarousel>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-navy border-2 border-navy hover:bg-navy hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
          >
            {t("viewAll")} <ChevronRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
