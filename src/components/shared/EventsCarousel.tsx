"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventsCarouselProps {
  children: React.ReactNode[];
  previousLabel: string;
  nextLabel: string;
  dotLabels: string[];
  regionLabel: string;
}

/** Shows exactly one event at a time — arrows, dots, swipe. No autoplay (user-driven browsing). */
export function EventsCarousel({ children, previousLabel, nextLabel, dotLabels, regionLabel }: EventsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = children.length;

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(count - 1, i));
      const card = el.children[clamped] as HTMLElement | undefined;
      if (!card) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({ left: card.offsetLeft, behavior: reducedMotion ? "auto" : "smooth" });
      setActiveIndex(clamped);
    },
    [count]
  );

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = trackRef.current;
      if (!el) return;
      let closest = 0;
      let closestDist = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const dist = Math.abs((child as HTMLElement).offsetLeft - el.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex((prev) => (prev === closest ? prev : closest));
    });
  }, []);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    },
    [activeIndex, scrollToIndex]
  );

  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label={regionLabel} onKeyDown={onKeyDown}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scrollbar-hide carousel-snap"
      >
        {children.map((child, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1}/${count}`}
            className="w-full shrink-0 snap-start px-1"
          >
            {child}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label={previousLabel}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg items-center justify-center text-navy transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label={nextLabel}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg items-center justify-center text-navy transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-1 mt-6">
            {children.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
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
        </>
      )}
    </div>
  );
}
