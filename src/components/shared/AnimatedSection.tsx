"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Same fade-up reveal as before (opacity 0 → 1, 30px → 0, ease [0.22, 1, 0.36, 1]),
// driven by CSS transitions (.reveal in globals.css) and a native IntersectionObserver
// instead of framer-motion, so this wrapper — used by almost every section — ships
// ~no JavaScript and does no per-frame work.

function useInViewOnce<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true); // eslint-disable-line react-hooks/set-state-in-effect -- no observer support: show immediately
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <div ref={ref} className={cn("reveal", inView && "reveal-visible", className)} style={style}>
      {children}
    </div>
  );
}

export function AnimatedGrid({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode[];
  className?: string;
  stagger?: number;
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={cn("reveal reveal-fast h-full", inView && "reveal-visible")}
          style={{ transitionDelay: `${i * stagger}s` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
