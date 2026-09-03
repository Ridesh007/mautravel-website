"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface JourneyPreviewItem {
  id: string;
  image: string;
  label: string;
}

const AUTOPLAY_MS = 3000;
const RESUME_DELAY_MS = 4000;

/**
 * Auto-advances one item at a time on mobile via native smooth scroll-snap.
 * On desktop all items already fit in view (no overflow), so the same scrollTo
 * calls are simply no-ops there — no breakpoint branching needed.
 */
export function JourneyPreviewStrip({ items }: { items: JourneyPreviewItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = ((i % items.length) + items.length) % items.length;
      const card = el.children[clamped] as HTMLElement | undefined;
      if (!card) return;
      const left = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
      el.scrollTo({ left, behavior: reducedMotionRef.current ? "auto" : "smooth" });
      indexRef.current = clamped;
    },
    [items.length]
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
    if (reducedMotionRef.current || items.length <= 1) return;
    intervalRef.current = setInterval(() => {
      scrollToIndex(indexRef.current + 1);
    }, AUTOPLAY_MS);
  }, [clearAutoplay, scrollToIndex, items.length]);

  const scheduleResume = useCallback(() => {
    clearAutoplay();
    resumeRef.current = setTimeout(startAutoplay, RESUME_DELAY_MS);
  }, [clearAutoplay, startAutoplay]);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startTimer = setTimeout(startAutoplay, 900);
    const onVisibility = () => (document.hidden ? clearAutoplay() : startAutoplay());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearTimeout(startTimer);
      clearAutoplay();
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={trackRef}
      onMouseEnter={clearAutoplay}
      onMouseLeave={scheduleResume}
      onTouchStart={clearAutoplay}
      onTouchEnd={scheduleResume}
      className="flex items-start gap-3 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:justify-center md:snap-none -mx-4 px-4 md:mx-0 md:px-0"
    >
      {items.map((item, i) => (
        <div key={item.id} className="flex items-start shrink-0 snap-start">
          <div className="flex flex-col items-center gap-2 w-16 md:w-24">
            <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-white shadow-md shrink-0">
              <Image src={item.image} alt={item.label} fill className="object-cover" sizes="80px" loading="lazy" />
            </div>
            <span className="text-[11px] md:text-sm font-medium text-navy text-center leading-tight">
              {item.label}
            </span>
          </div>
          {i < items.length - 1 && (
            <ArrowRight className="w-4 h-4 text-gold shrink-0 mx-1 md:mx-2 mt-6 md:mt-7" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
