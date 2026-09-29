"use client";

import { useEffect, useState } from "react";

/**
 * Keeps an element mounted for `exitMs` after `open` turns false so a CSS exit
 * animation can play (a lightweight stand-in for framer-motion's AnimatePresence).
 * Pair `closing` with tw-animate-css `animate-out …` classes and `open` with `animate-in …`.
 */
export function usePresence(open: boolean, exitMs: number) {
  const [mounted, setMounted] = useState(open);
  // Adjusting state during render when a prop changes is the React-recommended pattern
  if (open && !mounted) setMounted(true);

  useEffect(() => {
    if (open) return;
    const timer = setTimeout(() => setMounted(false), exitMs);
    return () => clearTimeout(timer);
  }, [open, exitMs]);

  return { mounted: open || mounted, closing: !open && mounted };
}
