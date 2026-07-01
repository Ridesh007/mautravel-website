import Image from "next/image";
import Link from "next/link";
import { Clock, Flame } from "lucide-react";
import { ACTIVITIES } from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { HomeSectionCarousel } from "@/components/shared/HomeSectionCarousel";

export function ActivitiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Activities"
            title="Thrilling Experiences Await"
            description="From serene underwater walks to adrenaline-fueled quad biking — Mauritius offers an activity for every kind of traveller."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <HomeSectionCarousel viewAllHref="/activities" viewAllLabel="View All Activities">
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[60%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <Link
                  href={`/activities/${activity.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={activity.name}
                >
                  <span className="sr-only">{activity.name}</span>
                </Link>
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                {activity.id === "paragliding" && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    <Flame className="w-3 h-3" />
                    HOT
                  </div>
                )}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-heading font-bold text-white text-lg leading-tight mb-1">
                    {activity.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/60 text-xs mb-3">
                    <Clock className="w-3 h-3" />
                    {activity.duration}
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-300">
                    <p className="text-white/80 text-xs leading-relaxed mb-3 line-clamp-2">
                      {activity.description}
                    </p>
                    <WhatsAppButton service={activity.name} size="sm" label="Book Now" className="relative z-20 w-full justify-center" />
                  </div>
                </div>
              </div>
            ))}
          </HomeSectionCarousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
