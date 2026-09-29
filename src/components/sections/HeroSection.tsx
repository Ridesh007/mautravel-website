"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { HERO_SLIDES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SlideText {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
}

// Must match the .hero-text-out animation duration in globals.css
const TEXT_EXIT_MS = 500;

// Animations are CSS-only (see "Hero slider" in globals.css) and run only when the
// slide changes. The server-rendered first slide is fully visible at first paint, so the
// <h1> (the page's LCP element) no longer waits for JavaScript to hydrate and fade it in.
export function HeroSection() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const slideTexts = t.raw("heroSlides") as SlideText[];
  const [current, setCurrent] = useState(0);
  // Slide that stays underneath while the new one fades in; cleared when the fade ends
  const [previous, setPrevious] = useState<number | null>(null);
  // Text lags behind `current` so the old text can finish its exit before the new one enters
  const [textIndex, setTextIndex] = useState(0);
  const [textPhase, setTextPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [paused, setPaused] = useState(false);
  const currentRef = useRef(0);
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    }, TEXT_EXIT_MS);
  }, []);

  const next = useCallback(() => {
    goTo((currentRef.current + 1) % HERO_SLIDES.length);
  }, [goTo]);

  const prev = () => {
    goTo((currentRef.current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  useEffect(() => () => {
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
  }, []);

  const slide = HERO_SLIDES[textIndex];
  const text = slideTexts[textIndex];
  const hasChanged = previous !== null || current !== 0;

  const renderBackground = (index: number, animate: boolean) => (
    <div
      key={index}
      className={cn("absolute inset-0", animate && "hero-bg-in")}
      onAnimationEnd={animate ? () => setPrevious(null) : undefined}
    >
      <Image
        src={HERO_SLIDES[index].image}
        alt={slideTexts[index].title}
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
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Images */}
      {previous !== null && previous !== current && renderBackground(previous, false)}
      {renderBackground(current, hasChanged)}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-xl pb-16">
          <div
            key={textIndex}
            className={cn(
              "max-w-2xl",
              textPhase === "exit" && "hero-text-out",
              textPhase === "enter" && "hero-text-in"
            )}
          >
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
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
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
              onClick={() => goTo(i)}
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
          onClick={next}
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
