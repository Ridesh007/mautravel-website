"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Car {
  name: string;
  image: string;
}

interface Props {
  cars: Car[];
}

export function FleetCarousel({ cars }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = cars.length;

  const scrollTo = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[idx] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
    setActiveIdx(idx);
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      const next = (activeIdx + dir + count) % count;
      scrollTo(next);
    },
    [activeIdx, count, scrollTo]
  );

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % count;
        scrollTo(next);
        return next;
      });
    }, 3500);
  }, [count, scrollTo]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  // Sync activeIdx when user manually swipes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 0;
      if (!cardWidth) return;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIdx(Math.max(0, Math.min(idx, count - 1)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [count]);

  return (
    <div
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={stopAutoplay}
      onTouchEnd={startAutoplay}
    >
      {/* ── Mobile: single-card carousel ── Desktop: 5-col grid ── */}
      <div
        ref={scrollRef}
        className={cn(
          // Mobile: horizontal scroll snap, one card per view
          "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth",
          // Each card snaps to center on mobile
          "[&>*]:scroll-snap-align-center scroll-snap-type-x-mandatory",
          // Desktop: wrap into grid
          "md:grid md:grid-cols-3 md:overflow-visible md:scroll-snap-type-none lg:grid-cols-5"
        )}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cars.map((car) => (
          <div
            key={car.name}
            className={cn(
              "flex-shrink-0 w-[75vw] sm:w-[55vw] md:w-auto",
              "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            )}
            style={{ scrollSnapAlign: "center" }}
          >
            <div className="relative aspect-[4/3] bg-cream overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 75vw, 20vw"
                loading="lazy"
              />
            </div>
            <div className="px-4 py-3 text-center">
              <h3 className="font-heading font-bold text-navy text-sm">{car.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile-only: prev/next + dots ── */}
      <div className="flex flex-col items-center gap-3 mt-5 md:hidden">
        <div className="flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous car"
            className="w-9 h-9 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {cars.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to car ${i + 1}`}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === activeIdx ? "w-5 h-2 bg-gold" : "w-2 h-2 bg-navy/20"
                )}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next car"
            className="w-9 h-9 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
