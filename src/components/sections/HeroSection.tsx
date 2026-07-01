"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { HERO_SLIDES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-xl pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                {slide.label}
              </p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance">
                {slide.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {slide.cta.label}
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === current ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest rotate-90 origin-center">scroll</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gold"
            animate={{ height: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
