"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS, ACTIVITY_REVIEWS } from "@/lib/constants";

const ALL_REVIEWS = [...REVIEWS, ...ACTIVITY_REVIEWS];
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4500;
const RESUME_DELAY_MS = 2500;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-gold fill-gold" : "text-gray-200 fill-gray-200"
          )}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Autoplay helpers ───────────────────────────────────────────────────────
  const clearAll = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    if (resumeRef.current) { clearTimeout(resumeRef.current); resumeRef.current = null; }
  }, []);

  const startPlay = useCallback(() => {
    clearAll();
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % ALL_REVIEWS.length);
    }, AUTOPLAY_MS);
  }, [clearAll]);

  const pause = useCallback(() => {
    clearAll();
  }, [clearAll]);

  const resume = useCallback(() => {
    clearAll();
    resumeRef.current = setTimeout(startPlay, RESUME_DELAY_MS);
  }, [clearAll, startPlay]);

  useEffect(() => {
    startPlay();
    return clearAll;
  }, [startPlay, clearAll]);

  // ── Navigation ────────────────────────────────────────────────────────────
  const prev = () => { setCurrent((c) => (c - 1 + ALL_REVIEWS.length) % ALL_REVIEWS.length); resume(); };
  const next = () => { setCurrent((c) => (c + 1) % ALL_REVIEWS.length); resume(); };
  const goTo = (i: number) => { setCurrent(i); resume(); };

  return (
    <section className="section-padding bg-navy">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Customer Reviews"
            title="What Our Travellers Say"
            description="Join thousands of happy travellers who have trusted MauTravel for their Mauritius experiences."
            light
          />
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
            {[
              { label: "Reviews", value: "500+" },
              { label: "Rating", value: "4.9★" },
              { label: "Happy Clients", value: "2000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-bold text-white text-3xl mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured review */}
        <AnimatedSection delay={0.15}>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resume}
            onTouchCancel={resume}
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
              <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
              {ALL_REVIEWS[current].activity && (
                <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-5">
                  {ALL_REVIEWS[current].activity}
                </span>
              )}
              <p className="text-white/90 text-lg md:text-xl leading-relaxed italic mb-8">
                &ldquo;{ALL_REVIEWS[current].text}&rdquo;
              </p>
              <StarRating rating={ALL_REVIEWS[current].rating} />
              <div className="mt-4">
                <p className="font-semibold text-white">{ALL_REVIEWS[current].name}</p>
                <p className="text-white/50 text-sm">{ALL_REVIEWS[current].country} · {ALL_REVIEWS[current].date}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {ALL_REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === current ? "w-6 bg-gold" : "w-1.5 bg-white/30"
                    )}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
