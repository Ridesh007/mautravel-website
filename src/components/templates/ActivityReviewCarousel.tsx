"use client";

import { useRef, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { ActivityReview } from "@/types";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS    = 5000;
const RESUME_DELAY_MS = 2500;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("w-3.5 h-3.5", i < rating ? "text-gold fill-gold" : "text-white/20 fill-white/20")}
        />
      ))}
    </div>
  );
}

export function ActivityReviewCarousel({ reviews }: { reviews: ActivityReview[] }) {
  const count   = reviews.length;
  // Triple for seamless infinite loop
  const tripled = [...reviews, ...reviews, ...reviews];

  const scrollRef   = useRef<HTMLDivElement>(null);
  const idxRef      = useRef(count); // start at first real item
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetRef    = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Center-scroll to card at DOM index ────────────────────────────────────
  const scrollToCenter = useCallback((idx: number, instant = false) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[idx] as HTMLElement | undefined;
    if (!card) return;
    const left = Math.max(0, card.offsetLeft - el.clientWidth / 2 + card.offsetWidth / 2);
    if (instant) { el.scrollLeft = left; }
    else { el.scrollTo({ left, behavior: "smooth" }); }
  }, []);

  // ── Silent reset after scrolling into a clone zone ────────────────────────
  const scheduleReset = useCallback((idx: number) => {
    if (count <= 1) return;
    if (resetRef.current) { clearTimeout(resetRef.current); resetRef.current = null; }
    const inPre  = idx < count;
    const inPost = idx >= count * 2;
    if (!inPre && !inPost) return;
    resetRef.current = setTimeout(() => {
      resetRef.current = null;
      const realIdx = inPost ? idx - count : idx + count;
      scrollToCenter(realIdx, true);
      idxRef.current = realIdx;
    }, 650);
  }, [count, scrollToCenter]);

  // ── Autoplay ───────────────────────────────────────────────────────────────
  const clearAll = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    if (resumeRef.current)   { clearTimeout(resumeRef.current);   resumeRef.current   = null; }
  }, []);

  const advance = useCallback(() => {
    const next = idxRef.current + 1;
    idxRef.current = next;
    scrollToCenter(next);
    scheduleReset(next);
  }, [scrollToCenter, scheduleReset]);

  const startPlay = useCallback(() => {
    clearAll();
    if (count <= 1) return;
    intervalRef.current = setInterval(advance, AUTOPLAY_MS);
  }, [clearAll, advance, count]);

  const pause  = useCallback(() => clearAll(), [clearAll]);
  const resume = useCallback(() => {
    clearAll();
    resumeRef.current = setTimeout(startPlay, RESUME_DELAY_MS);
  }, [clearAll, startPlay]);

  useEffect(() => {
    if (count > 1) scrollToCenter(count, true);
    const t = setTimeout(startPlay, 400);
    return () => { clearTimeout(t); clearAll(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Manual navigation ──────────────────────────────────────────────────────
  const go = useCallback((dir: 1 | -1) => {
    const next = idxRef.current + dir;
    idxRef.current = next;
    scrollToCenter(next);
    scheduleReset(next);
    pause();
    resumeRef.current = setTimeout(startPlay, RESUME_DELAY_MS);
  }, [scrollToCenter, scheduleReset, pause, startPlay]);

  return (
    <div
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      onTouchCancel={resume}
    >
      {/* carousel-snap → scroll-snap-type:x mandatory; each child → scroll-snap-align:center */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide carousel-snap">
        {tripled.map((review, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-3">
              <StarRating rating={review.rating} />
              <Quote className="w-5 h-5 text-gold/30 shrink-0" />
            </div>
            <p className="text-white/85 text-sm leading-relaxed italic flex-1">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-white font-semibold text-sm">{review.name}</p>
              {review.badge && (
                <p className="text-white/40 text-xs mt-0.5">{review.badge}</p>
              )}
              <p className="text-gold/60 text-xs mt-0.5">{review.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-white/20 text-white hover:border-white/50 hover:bg-white/10 flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-white/20 text-white hover:border-white/50 hover:bg-white/10 flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <p className="text-white/30 text-xs">{count} verified reviews</p>
      </div>
    </div>
  );
}
