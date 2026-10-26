"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronRight, ChevronLeft, ArrowRight, Plane, Car, Map as MapIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { HERO_SLIDES } from "@/lib/constants";
import { TRIPKINDLY_LOGO, TRIPKINDLY_URL } from "@/lib/partners";
import { cn } from "@/lib/utils";

interface SlideText {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  // Partner slide only
  titleLine2?: string;
  secondaryCta?: string;
  imageAlt?: string;
}

interface PartnerPanelText {
  tagline: string;
  heading: string;
  destinations: string;
  services: string[];
}

// Must match the .hero-text-out animation duration in globals.css
const TEXT_EXIT_MS = 500;
const AUTOPLAY_MS = 6000;
const SERVICE_ICONS = [Plane, Car, MapIcon];

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

// Animations are CSS-only (see "Hero slider" in globals.css) and run only when the
// slide changes. The server-rendered first slide is fully visible at first paint, so the
// <h1> (the page's LCP element) no longer waits for JavaScript to hydrate and fade it in.
export function HeroSection() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const slideTexts = t.raw("heroSlides") as SlideText[];
  const panel = t.raw("tripKindlyPanel") as PartnerPanelText;
  const [current, setCurrent] = useState(0);
  // Slide that stays underneath while the new one fades in; cleared when the fade ends
  const [previous, setPrevious] = useState<number | null>(null);
  // Text lags behind `current` so the old text can finish its exit before the new one enters
  const [textIndex, setTextIndex] = useState(0);
  const [textPhase, setTextPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [hovered, setHovered] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  // Bumped on manual navigation so autoplay waits a full interval before moving on
  const [autoplayEpoch, setAutoplayEpoch] = useState(0);
  // Once the page has loaded, the next slide's image is fetched ahead of time
  const [warm, setWarm] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false
  );
  const currentRef = useRef(0);
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotionRef = useRef(reducedMotion);

  useEffect(() => {
    reducedMotionRef.current = reducedMotion;
  }, [reducedMotion]);

  const goTo = useCallback((i: number) => {
    const from = currentRef.current;
    if (i === from) return;
    currentRef.current = i;
    setPrevious(from);
    setCurrent(i);
    setTextPhase("exit");
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
    textTimerRef.current = setTimeout(() => {
      setTextIndex(currentRef.current);
      setTextPhase("enter");
    }, reducedMotionRef.current ? 0 : TEXT_EXIT_MS);
  }, []);

  const next = useCallback(() => {
    goTo((currentRef.current + 1) % HERO_SLIDES.length);
  }, [goTo]);

  const prev = () => {
    goTo((currentRef.current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const navigate = (action: () => void) => {
    action();
    setAutoplayEpoch((n) => n + 1);
  };

  // Autoplay stops while the visitor hovers or tabs through the hero, and for visitors
  // who prefer reduced motion. It also skips ticks while the tab is in the background so
  // slide images aren't downloaded for nobody.
  const paused = hovered || keyboardFocus || reducedMotion;
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      if (!document.hidden) next();
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next, autoplayEpoch]);

  useEffect(() => () => {
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
  }, []);

  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (saveData) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      timer = setTimeout(() => setWarm(true), 1500);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      clearTimeout(timer);
    };
  }, []);

  const slide = HERO_SLIDES[textIndex];
  const text = slideTexts[textIndex];
  const hasChanged = previous !== null || current !== 0;
  const upcoming = (current + 1) % HERO_SLIDES.length;

  const renderBackground = (index: number, animate: boolean) => (
    <div
      key={index}
      className={cn("absolute inset-0", animate && "hero-bg-in")}
      onAnimationEnd={animate ? () => setPrevious(null) : undefined}
    >
      <Image
        src={HERO_SLIDES[index].image}
        alt={slideTexts[index].imageAlt ?? slideTexts[index].title}
        fill
        className="object-cover"
        sizes="100vw"
        // Only the server-rendered first slide is the LCP candidate; preload it with high
        // priority. Later slides mount on demand and load normally.
        preload={index === 0 && !hasChanged}
        fetchPriority={index === 0 && !hasChanged ? "high" : undefined}
      />
    </div>
  );

  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => {
        if (e.target.matches(":focus-visible")) setKeyboardFocus(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setKeyboardFocus(false);
      }}
      onKeyDown={(e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        const rtl = getComputedStyle(e.currentTarget).direction === "rtl";
        navigate((e.key === "ArrowRight") !== rtl ? next : prev);
      }}
    >
      {/* Background Images */}
      {previous !== null && previous !== current && renderBackground(previous, false)}
      {renderBackground(current, hasChanged)}
      {/* Fetches the next slide's image in advance so it never fades in blank */}
      {warm && (
        <div key={`warm-${upcoming}`} className="absolute inset-0 opacity-0 pointer-events-none" aria-hidden="true">
          <Image src={HERO_SLIDES[upcoming].image} alt="" fill className="object-cover" sizes="100vw" loading="eager" />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className={cn("container-xl pb-16", slide.partner && "w-full")}>
          <div
            key={textIndex}
            className={cn(
              slide.partner
                ? "grid lg:grid-cols-[minmax(0,1fr)_26rem] xl:grid-cols-[minmax(0,1fr)_34rem] items-center gap-10"
                : "max-w-2xl",
              textPhase === "exit" && "hero-text-out",
              textPhase === "enter" && "hero-text-in"
            )}
          >
            {slide.partner ? (
              <TripKindlySlide text={text} panel={panel} newTabLabel={tc("opensInNewTab")} />
            ) : (
              <>
                <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                  {text.label}
                </p>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance">
                  {text.title}
                </h1>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  {text.subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {text.cta}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
                  >
                    {tc("contactUs")}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls — raised on phones so the WhatsApp button doesn't cover them */}
      <div className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={() => navigate(prev)}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
          aria-label={t("previousSlide")}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex">
          {HERO_SLIDES.map((_, i) => (
            // 44px-tall hit area around the small visual dot
            <button
              key={i}
              onClick={() => navigate(() => goTo(i))}
              className="group h-11 px-2 flex items-center justify-center"
              aria-label={t("goToSlide", { n: i + 1 })}
              aria-current={i === current ? "true" : undefined}
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300",
                  i === current ? "w-8 bg-gold" : "w-2 bg-white/40 group-hover:bg-white/60"
                )}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => navigate(next)}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
          aria-label={t("nextSlide")}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest rotate-90 origin-center">{t("scroll")}</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="hero-scroll-line absolute top-0 left-0 w-full bg-gold" />
        </div>
      </div>
    </section>
  );
}

/**
 * MauTravel × TripKindly partnership slide. TripKindly gives written travel advice only —
 * the panel describes advice topics, not services MauTravel or TripKindly book.
 */
function TripKindlySlide({ text, panel, newTabLabel }: { text: SlideText; panel: PartnerPanelText; newTabLabel: string }) {
  return (
    <>
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-4">
          {/* Below lg the glass panel is hidden, so the official logo appears here instead */}
          <span className="lg:hidden inline-flex bg-white rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg">
            <Image
              src={TRIPKINDLY_LOGO.src}
              alt="TripKindly"
              width={TRIPKINDLY_LOGO.width}
              height={TRIPKINDLY_LOGO.height}
              className="h-5 sm:h-6 w-auto"
            />
          </span>
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">{text.label}</p>
        </div>
        <h1 className="font-heading text-[1.75rem] min-[380px]:text-[2rem] sm:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] font-bold text-white leading-[1.08] mb-5 text-balance">
          <span className="block">{text.title}</span>
          <span className="block">{text.titleLine2}</span>
        </h1>
        <p className="text-white/85 text-base sm:text-lg md:text-xl leading-relaxed mb-7 sm:mb-8 max-w-xl">
          {text.subtitle}
        </p>
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          <a
            href={TRIPKINDLY_URL}
            target="_blank"
            rel="noopener"
            className="relative inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {text.cta}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
            <span className="sr-only">{newTabLabel}</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            {text.secondaryCta}
          </Link>
        </div>
      </div>

      {/* Glass partnership panel (desktop) */}
      <div className="hidden lg:block rounded-3xl border border-white/25 bg-navy/40 backdrop-blur-md shadow-2xl p-7 xl:p-9 text-center">
        <div className="flex items-center justify-center gap-4 xl:gap-5">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm text-white">
              MT
            </span>
            <span className="font-heading font-bold text-xl xl:text-2xl tracking-tight text-white">MauTravel</span>
          </div>
          <span className="w-px h-12 bg-white/30 shrink-0" aria-hidden="true" />
          <div className="bg-white rounded-2xl px-3 xl:px-4 py-2.5 shadow-lg">
            <Image
              src={TRIPKINDLY_LOGO.src}
              alt="TripKindly"
              width={TRIPKINDLY_LOGO.width}
              height={TRIPKINDLY_LOGO.height}
              className="h-7 xl:h-8 w-auto"
            />
            {/* Visual lockup only — the heading below says the same thing */}
            <p className="mt-1 text-[11px] font-semibold text-[#00695f] leading-none" aria-hidden="true">
              {panel.tagline}
            </p>
          </div>
        </div>
        <h2 className="font-heading font-bold text-white text-3xl xl:text-4xl leading-tight mt-7">{panel.heading}</h2>
        <p className="mt-2 text-white/90 text-sm font-semibold uppercase tracking-[0.15em] xl:tracking-[0.25em]">{panel.destinations}</p>
        <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
          {panel.services.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <li
                key={service}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-3.5 py-2 text-[13px] text-white"
              >
                {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
                {service}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
