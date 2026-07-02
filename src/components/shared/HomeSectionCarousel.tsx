"use client";

import { useRef, useEffect, useCallback, Children, cloneElement, isValidElement } from "react";
import type { ReactElement } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  viewAllHref: string;
  viewAllLabel: string;
  /** true = section has dark (navy) background */
  light?: boolean;
}

const AUTOPLAY_MS = 4500;
const RESUME_DELAY_MS = 2500;

export function HomeSectionCarousel({ children, viewAllHref, viewAllLabel, light = false }: Props) {
  const t = useTranslations("home");
  const items = Children.toArray(children);
  const count = items.length;

  // Triple items for a seamless infinite loop: [pre-clones | real items | post-clones]
  // The user always sees items from the real set; after scrolling into a clone zone we
  // silently jump back to the matching real position (invisible because the content is identical).
  const tripled = count > 1 ? [
    ...items.map((c, i) => isValidElement(c) ? cloneElement(c as ReactElement, { key: `_pre_${i}` }) : c),
    ...items,
    ...items.map((c, i) => isValidElement(c) ? cloneElement(c as ReactElement, { key: `_post_${i}` }) : c),
  ] : items;

  const scrollRef    = useRef<HTMLDivElement>(null);
  // Active index into the tripled DOM children array. Starts at `count` (first real item).
  // Stored in a ref to avoid React re-renders on every autoplay tick.
  const idxRef       = useRef(count > 1 ? count : 0);
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetRef     = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll container to horizontally center the card at DOM index `idx` ───
  const scrollToCenter = useCallback((idx: number, instant = false) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[idx] as HTMLElement | undefined;
    if (!card) return;
    const left = Math.max(0, card.offsetLeft - el.clientWidth / 2 + card.offsetWidth / 2);
    if (instant) {
      el.scrollLeft = left; // instant — no browser smooth-scroll interference
    } else {
      el.scrollTo({ left, behavior: "smooth" });
    }
  }, []);

  // ── After reaching a clone, silently jump back to the matching real card ──
  const scheduleReset = useCallback((idx: number) => {
    if (count <= 1) return;
    if (resetRef.current) { clearTimeout(resetRef.current); resetRef.current = null; }
    const inPreClone  = idx < count;
    const inPostClone = idx >= count * 2;
    if (!inPreClone && !inPostClone) return;
    // Wait for the smooth-scroll animation (~600 ms) to complete before jumping
    resetRef.current = setTimeout(() => {
      resetRef.current = null;
      const realIdx = inPostClone ? idx - count : idx + count;
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

  // Mount: jump to first real card (no animation) then start autoplay
  useEffect(() => {
    if (count > 1) scrollToCenter(count, true);
    const t = setTimeout(startPlay, 400); // short delay lets images load & scrollWidth settle
    return () => { clearTimeout(t); clearAll(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Manual navigation ──────────────────────────────────────────────────────
  const go = useCallback((dir: 1 | -1) => {
    const next = idxRef.current + dir;
    idxRef.current = next;
    scrollToCenter(next);
    scheduleReset(next);
    // Pause then restart autoplay 2.5 s after the last manual action
    pause();
    resumeRef.current = setTimeout(startPlay, RESUME_DELAY_MS);
  }, [scrollToCenter, scheduleReset, pause, startPlay]);

  // ── Styles (identical to original) ────────────────────────────────────────
  const btnBase = "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200";
  const btnStyle = light
    ? "border-white/20 text-white hover:border-white/60 hover:bg-white/10"
    : "border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white";
  const viewAllStyle = light
    ? "inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 text-sm"
    : "inline-flex items-center gap-2 text-navy border-2 border-navy hover:bg-navy hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 text-sm";

  return (
    <div
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      onTouchCancel={resume}
    >
      {/* carousel-snap applies scroll-snap-type; each direct child gets scroll-snap-align: center */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide carousel-snap">
        {tripled}
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label={t("previousSlide")} className={cn(btnBase, btnStyle)}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => go(1)} aria-label={t("nextSlide")} className={cn(btnBase, btnStyle)}>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <Link href={viewAllHref} className={viewAllStyle}>
          {viewAllLabel} <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
