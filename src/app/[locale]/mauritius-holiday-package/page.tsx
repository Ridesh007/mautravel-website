import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  Car,
  ChevronsDown,
  Compass,
  MapPin,
  Trees,
  PawPrint,
  Sunset,
  Sailboat,
  ArrowRight,
  PlaneLanding,
  PlaneTakeoff,
  Armchair,
  Binoculars,
  Wind,
  Mountain,
  Bike,
  Bird,
  Headset,
  Route,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import { buildAlternates } from "@/i18n/seo";
import {
  PACKAGE_HERO_IMAGE,
  HERO_JOURNEY_PREVIEW,
  PACKAGE_EXPERIENCE_IMAGE,
  PACKAGE_AIRPORT_IMAGE,
  PACKAGE_AIRPORT_IMAGE_CREDIT,
  PACKAGE_CASELA_IMAGE,
  PACKAGE_SUNSET_IMAGE,
  NORTH_ATTRACTIONS,
  SOUTH_ATTRACTIONS,
  OCEAN_EXPERIENCES,
  ADVENTURE_ACTIVITIES,
} from "@/lib/constants";
import { ImageCarousel } from "./ImageCarousel";
import { JourneyPreviewStrip } from "./JourneyPreviewStrip";
import { FaqAccordion } from "./FaqAccordion";
import { CustomizeHolidaySection } from "./CustomizeHolidaySection";
import { BackToTopButton } from "./BackToTopButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.mauritiusPackage" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/mauritius-holiday-package"),
    openGraph: { title: t("title"), description: t("description") },
  };
}

const JOURNEY_STEPS: { id: string; Icon: LucideIcon }[] = [
  { id: "north", Icon: MapPin },
  { id: "wildSouth", Icon: Trees },
  { id: "wildlifeNature", Icon: PawPrint },
  { id: "westCoast", Icon: Sunset },
  { id: "oceanExperiences", Icon: Sailboat },
  { id: "adventureActivities", Icon: Compass },
];

const AIRPORT_BENEFITS: { id: string; Icon: LucideIcon }[] = [
  { id: "privateTransfer", Icon: Car },
  { id: "airportPickup", Icon: PlaneLanding },
  { id: "airportDropoff", Icon: PlaneTakeoff },
  { id: "comfortableVehicle", Icon: Armchair },
];

const CASELA_EXPERIENCES: { id: string; Icon: LucideIcon }[] = [
  { id: "safari", Icon: Binoculars },
  { id: "ziplining", Icon: Wind },
  { id: "toboggan", Icon: Mountain },
  { id: "quadBiking", Icon: Bike },
  { id: "walkWithLions", Icon: PawPrint },
  { id: "wildlifeEncounters", Icon: Bird },
];

const WHY_TRAVEL_BENEFITS: { id: string; Icon: LucideIcon }[] = [
  { id: "contact", Icon: Headset },
  { id: "builtAround", Icon: Route },
  { id: "transport", Icon: Car },
  { id: "localExperience", Icon: Compass },
  { id: "support", Icon: LifeBuoy },
];

const DURATION_OPTION_IDS = ["5", "7", "10", "14", "custom"];

interface ItemText {
  name: string;
  description: string;
}

interface AdventureItemText {
  name: string;
  headline: string;
  description: string;
}

/** Small thumbnail + text row — used by the North/South editorial lists. No card chrome. */
function AttractionRow({
  image,
  name,
  description,
  credit,
}: {
  image: string;
  name: string;
  description: string;
  credit?: string;
}) {
  return (
    <div className="flex gap-4 items-start py-4 border-b border-navy/10 last:border-0">
      <div className="relative w-20 h-16 md:w-24 md:h-20 shrink-0 rounded-lg overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" sizes="120px" loading="lazy" />
      </div>
      <div>
        <h4 className="font-heading font-bold text-navy text-sm md:text-base mb-1 leading-snug">{name}</h4>
        <p className="text-charcoal/60 text-xs md:text-sm leading-snug">{description}</p>
        {credit && <p className="text-charcoal/30 text-[9px] leading-snug mt-1">{credit}</p>}
      </div>
    </div>
  );
}

export default async function MauritiusHolidayPackagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mauritiusPackage" });

  const durationOptions = DURATION_OPTION_IDS.map((id) => t(`flexibility.duration.options.${id}`));
  const faqItems = t.raw("faq.items") as { question: string; answer: string }[];

  const northItems = NORTH_ATTRACTIONS.map((item) => ({
    item,
    text: t.raw(`discover.north.items.${item.id}`) as ItemText,
  }));
  const southItems = SOUTH_ATTRACTIONS.map((item) => ({
    item,
    text: t.raw(`discover.south.items.${item.id}`) as ItemText,
  }));
  const waterSlides = OCEAN_EXPERIENCES.map((item) => {
    const text = t.raw(`water.items.${item.id}`) as ItemText;
    return {
      id: item.id,
      image: item.image,
      name: text.name,
      description: text.description,
    };
  });
  const waterDotLabels = OCEAN_EXPERIENCES.map((_, i) => t("water.carousel.goToSlide", { n: i + 1 }));

  const viewActivityLabel = t("adventure.carousel.viewActivity");
  const adventureSlides = ADVENTURE_ACTIVITIES.map((item) => {
    const text = t.raw(`adventure.items.${item.id}`) as AdventureItemText;
    return {
      id: item.id,
      image: item.image,
      href: item.href,
      name: text.name,
      headline: text.headline,
      description: text.description,
      viewLabel: viewActivityLabel,
    };
  });
  const adventureDotLabels = ADVENTURE_ACTIVITIES.map((_, i) =>
    t("adventure.carousel.goToSlide", { n: i + 1 })
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] sm:min-h-0 flex items-center">
        <Image
          src={PACKAGE_HERO_IMAGE}
          alt={`${t("hero.titleLine1")} ${t("hero.titleLine2")}`}
          fill
          priority
          className="object-cover object-[65%_center] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/55 to-navy/15" />
        <div className="relative container-xl w-full pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest">{t("hero.eyebrow")}</p>
              <span className="h-px w-10 bg-gold/50" />
            </div>
            <h1 className="font-heading text-[clamp(2.25rem,1.4rem+4.5vw,4.5rem)] font-bold leading-[1.05] mb-4 text-balance">
              <span className="block text-white">{t("hero.titleLine1")}</span>
              <span className="block text-gold">{t("hero.titleLine2")}</span>
            </h1>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 md:mb-7 max-w-lg">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-7 md:mb-8">
              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm md:text-base"
              >
                <ChevronsDown className="w-4 h-4 md:w-5 md:h-5" />
                {t("hero.exploreCta")}
              </a>
              <a
                href="#customize"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/60 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10 text-sm md:text-base"
              >
                <Headset className="w-4 h-4 md:w-5 md:h-5" />
                {t("hero.customizeCta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Your Journey — circular preview strip, overlapping the hero's bottom edge */}
      <div className="relative z-10 container-xl -mt-8 sm:-mt-10 md:-mt-20">
        <div className="bg-cream rounded-2xl md:rounded-3xl shadow-xl px-4 py-5 sm:px-5 sm:py-6 md:px-10 md:py-8">
          <div className="flex items-center justify-center gap-3 mb-5 md:mb-6">
            <span className="h-px w-10 bg-gold/40" />
            <p className="text-gold text-xs font-semibold uppercase tracking-widest">{t("hero.journey.title")}</p>
            <span className="h-px w-10 bg-gold/40" />
          </div>
          <JourneyPreviewStrip
            items={HERO_JOURNEY_PREVIEW.map(({ id, image }) => ({
              id,
              image,
              label: t(`hero.journey.items.${id}`),
            }))}
          />
        </div>
      </div>

      <div className="flex justify-center pt-3 pb-1 md:pt-4" aria-hidden="true">
        <ChevronsDown className="w-5 h-5 text-gold/50 animate-bounce motion-reduce:animate-none" />
      </div>

      {/* Your Mauritius Experience */}
      <section id="experience" className="pt-6 pb-16 md:pt-8 md:pb-20 bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-navy mb-4 text-balance">
                {t("experience.title")}
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-9 max-w-xl text-sm md:text-base">
                {t("experience.description")}
              </p>
              <div className="flex flex-wrap items-start justify-center gap-y-5">
                {JOURNEY_STEPS.map((step, i) => (
                  <div key={step.id} className="flex items-start">
                    <div className="flex flex-col items-center text-center gap-1.5 w-[4.5rem] md:w-24">
                      <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-navy/5 flex items-center justify-center">
                        <step.Icon className="w-4 h-4 md:w-5 md:h-5 text-navy" />
                      </div>
                      <span className="text-[10.5px] md:text-xs font-medium text-navy leading-tight">
                        {t(`experience.journey.${step.id}`)}
                      </span>
                    </div>
                    {i < JOURNEY_STEPS.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gold shrink-0 mt-3.5 mx-0.5 md:mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={PACKAGE_EXPERIENCE_IMAGE}
                alt={t("experience.title")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Airport Pick-up & Drop-off */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src={PACKAGE_AIRPORT_IMAGE}
                alt="SSR International Airport, Mauritius"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <span className="absolute bottom-2 right-2 bg-black/40 text-white/90 text-[10px] leading-none px-2 py-1 rounded-full">
                {PACKAGE_AIRPORT_IMAGE_CREDIT}
              </span>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                {t("airportTransfer.eyebrow")}
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-navy mb-4">
                {t("airportTransfer.title")}
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6 max-w-lg text-sm md:text-base">
                {t("airportTransfer.description")}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {AIRPORT_BENEFITS.map(({ id, Icon }) => (
                  <div key={id} className="flex items-center gap-2 text-navy text-xs md:text-sm font-medium">
                    <Icon className="w-4 h-4 text-gold shrink-0" />
                    {t(`airportTransfer.benefits.${id}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North + South — editorial lists */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14">
            <AnimatedSection>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                {t("discover.north.eyebrow")}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2 text-balance">
                {t("discover.north.title")}
              </h2>
              <div className="mt-6">
                {northItems.map(({ item, text }) => (
                  <AttractionRow key={item.id} image={item.image} name={text.name} description={text.description} credit={item.credit} />
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:border-l lg:border-navy/10 lg:pl-14">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                {t("discover.south.eyebrow")}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2 text-balance">
                {t("discover.south.title")}
              </h2>
              <div className="mt-6">
                {southItems.map(({ item, text }) => (
                  <AttractionRow key={item.id} image={item.image} name={text.name} description={text.description} credit={item.credit} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Casela + Flic-en-Flac — full-width feature strip */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr_1fr]">
          <div className="relative min-h-[280px] lg:min-h-0 lg:order-2">
            <Image
              src={PACKAGE_CASELA_IMAGE}
              alt={t("casela.title")}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 33vw"
              loading="lazy"
            />
          </div>

          <div className="bg-navy px-6 py-14 md:px-10 md:py-16 lg:py-20 flex flex-col justify-center lg:order-1">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t("casela.eyebrow")}</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              {t("casela.title")}
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              {t("casela.description")}
            </p>
            <div className="grid grid-cols-3 gap-x-4 gap-y-6 max-w-sm mb-7">
              {CASELA_EXPERIENCES.map(({ id, Icon }) => (
                <div key={id} className="flex flex-col items-center text-center gap-2">
                  <Icon className="w-6 h-6 text-gold" />
                  <span className="text-white/90 text-[11px] md:text-xs font-medium leading-tight">
                    {t(`casela.experiences.${id}`)}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs italic max-w-sm">{t("casela.note")}</p>
          </div>

          <div className="relative min-h-[320px] lg:min-h-0 lg:order-3">
            <Image
              src={PACKAGE_SUNSET_IMAGE}
              alt={t("sunset.title")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                {t("sunset.eyebrow")}
              </p>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">{t("sunset.title")}</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">{t("sunset.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Mauritius from the Water */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-10 md:mb-12 text-balance">
              {t("water.title")}
            </h2>
          </AnimatedSection>
        </div>
        <ImageCarousel
          slides={waterSlides}
          regionLabel={t("water.carousel.regionLabel")}
          previousLabel={t("water.carousel.previousSlide")}
          nextLabel={t("water.carousel.nextSlide")}
          dotLabels={waterDotLabels}
        />
      </section>

      {/* Activities & Experiences (formerly "Add Some Adventure") */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="container-xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-10 md:mb-12 text-balance">
              {t("adventure.title")}
            </h2>
          </AnimatedSection>
        </div>
        <ImageCarousel
          slides={adventureSlides}
          regionLabel={t("adventure.carousel.regionLabel")}
          previousLabel={t("adventure.carousel.previousSlide")}
          nextLabel={t("adventure.carousel.nextSlide")}
          dotLabels={adventureDotLabels}
        />
        <div className="container-xl">
          <p className="text-center text-charcoal/50 text-xs md:text-sm mt-8 italic">{t("adventure.note")}</p>
        </div>
      </section>

      {/* Made to Fit Your Stay — compact customization note */}
      <section id="customize" className="py-14 md:py-16 bg-white">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                {t("flexibility.eyebrow")}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4 text-balance">
                {t("flexibility.title")}
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6 text-sm md:text-base">
                {t("flexibility.description")}
              </p>
              <p className="text-navy font-semibold text-sm md:text-base tracking-wide mb-3">
                {durationOptions.join(" · ")}
              </p>
              <p className="text-charcoal/60 text-sm">{t("flexibility.travellersNote")}</p>
            </AnimatedSection>
          </div>

          <div className="max-w-4xl mx-auto mt-7">
            <CustomizeHolidaySection ctaLabel={t("flexibility.ctaButton")} />
          </div>
        </div>
      </section>

      {/* Why Travel With MauTravel — trust / benefits section */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="container-xl">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                {t("whyTravel.eyebrow")}
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold leading-tight mb-4 text-balance">
                <span className="text-navy">{t("whyTravel.title")} </span>
                <span className="text-gold">{t("whyTravel.titleAccent")}</span>
              </h2>
              <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">
                {t("whyTravel.description")}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
              {WHY_TRAVEL_BENEFITS.map(({ id, Icon }, i) => (
                <div
                  key={id}
                  className={cn(
                    "text-center",
                    i === WHY_TRAVEL_BENEFITS.length - 1 &&
                      "col-span-2 max-w-[15rem] mx-auto lg:col-span-1 lg:max-w-none lg:mx-0"
                  )}
                >
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-cream flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-sm">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xs md:text-base mb-1 md:mb-1.5">
                    {t(`whyTravel.benefits.${id}.title`)}
                  </h3>
                  <p className="text-charcoal/60 text-[11px] md:text-sm leading-snug md:leading-relaxed max-w-[15rem] mx-auto">
                    {t(`whyTravel.benefits.${id}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-center text-navy font-heading font-semibold text-base md:text-lg mt-12 md:mt-14">
              {t("whyTravel.closing")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-navy text-center mb-3 text-balance">
              {t("faq.title")}
            </h2>
            <p className="text-charcoal/60 text-sm md:text-base text-center mb-10 md:mb-12">{t("faq.subtitle")}</p>
          </AnimatedSection>
          <AnimatedSection>
            <FaqAccordion
              items={faqItems}
              showMoreLabel={t("faq.showMore")}
              showLessLabel={t("faq.showLess")}
            />
          </AnimatedSection>
        </div>
      </section>

      <BackToTopButton />
    </>
  );
}
