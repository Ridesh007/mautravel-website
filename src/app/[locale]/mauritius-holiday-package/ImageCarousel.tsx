"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface CarouselSlide {
  id: string;
  image: string;
  name: string;
  /** Large emotional headline. Falls back to rendering `name` as the headline if omitted. */
  headline?: string;
  description: string;
  href?: string;
  viewLabel?: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  regionLabel: string;
  previousLabel: string;
  nextLabel: string;
  dotLabels: string[];
}

const AUTOPLAY_MS = 5500;
const RESUME_DELAY_MS = 6000;

export function ImageCarousel({ slides, regionLabel, previousLabel, nextLabel, dotLabels }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback(
    (i: number, instant = false) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      const card = el.children[clamped] as HTMLElement | undefined;
      if (!card) return;
      const left = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
      el.scrollTo({ left, behavior: instant || reducedMotionRef.current ? "auto" : "smooth" });
      indexRef.current = clamped;
      setActiveIndex(clamped);
    },
    [slides.length]
  );

  const clearAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    clearAutoplay();
    if (reducedMotionRef.current || slides.length <= 1) return;
    intervalRef.current = setInterval(() => {
      scrollToIndex((indexRef.current + 1) % slides.length);
    }, AUTOPLAY_MS);
  }, [clearAutoplay, scrollToIndex, slides.length]);

  const scheduleResume = useCallback(() => {
    clearAutoplay();
    resumeRef.current = setTimeout(startAutoplay, RESUME_DELAY_MS);
  }, [clearAutoplay, startAutoplay]);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startTimer = setTimeout(startAutoplay, 700);
    const onVisibility = () => (document.hidden ? clearAutoplay() : startAutoplay());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearTimeout(startTimer);
      clearAutoplay();
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = trackRef.current;
      if (!el) return;
      let closest = 0;
      let closestDist = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const c = child as HTMLElement;
        const center = c.offsetLeft - (el.clientWidth - c.clientWidth) / 2;
        const dist = Math.abs(center - el.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      if (closest !== indexRef.current) {
        indexRef.current = closest;
        setActiveIndex(closest);
      }
    });
  }, []);

  const goPrev = useCallback(() => {
    scrollToIndex(indexRef.current - 1);
    scheduleResume();
  }, [scrollToIndex, scheduleResume]);

  const goNext = useCallback(() => {
    scrollToIndex(indexRef.current + 1);
    scheduleResume();
  }, [scrollToIndex, scheduleResume]);

  const goTo = useCallback(
    (i: number) => {
      scrollToIndex(i);
      scheduleResume();
    },
    [scrollToIndex, scheduleResume]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    },
    [goNext, goPrev]
  );

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={regionLabel}
      onMouseEnter={clearAutoplay}
      onMouseLeave={scheduleResume}
      onFocus={clearAutoplay}
      onBlur={scheduleResume}
      onKeyDown={onKeyDown}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onTouchStart={clearAutoplay}
        onTouchEnd={scheduleResume}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide carousel-snap px-4 md:px-[7%]"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1}/${slides.length}: ${slide.name}`}
            className="relative shrink-0 w-full md:w-[86%] aspect-[4/3] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 86vw"
              loading={i === 0 ? "eager" : "lazy"}
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-lg">
              {slide.headline ? (
                <>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{slide.name}</p>
                  <h3 className="font-heading text-xl md:text-3xl font-bold text-white mb-2 leading-tight text-balance">
                    {slide.headline}
                  </h3>
                </>
              ) : (
                <h3 className="font-heading text-xl md:text-3xl font-bold text-white mb-2 leading-tight text-balance">
                  {slide.name}
                </h3>
              )}
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-5 max-w-md">
                {slide.description}
              </p>
              {slide.href && slide.viewLabel && (
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 backdrop-blur-sm text-sm"
                >
                  {slide.viewLabel} <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label={previousLabel}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-md items-center justify-center text-navy transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label={nextLabel}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-md items-center justify-center text-navy transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex items-center justify-center gap-1 mt-5">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={dotLabels[i]}
            aria-current={i === activeIndex ? "true" : undefined}
            className="p-2.5 -m-0.5"
          >
            <span
              className={cn(
                "block h-2 rounded-full transition-all duration-300",
                i === activeIndex ? "w-6 bg-gold" : "w-2 bg-navy/20"
              )}
            />
          </button>
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        {slides[activeIndex]?.name}
      </span>
    </div>
  );
}
