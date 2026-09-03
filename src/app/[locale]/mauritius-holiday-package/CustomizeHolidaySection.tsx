"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomizeHolidayForm } from "./CustomizeHolidayForm";

export function CustomizeHolidaySection({ ctaLabel }: { ctaLabel: string }) {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(
      () => {
        panelRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      },
      reducedMotion ? 0 : 350
    );
    return () => clearTimeout(timer);
  }, [open]);

  function handleToggle() {
    if (!hasOpened) setHasOpened(true);
    setOpen((v) => !v);
  }

  return (
    <div>
      <div className="text-center">
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={open}
          aria-controls="customize-holiday-form"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm md:text-base"
        >
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
          {ctaLabel}
          <ChevronDown
            className={cn("w-4 h-4 transition-transform duration-300 motion-reduce:transition-none", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        id="customize-holiday-form"
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div ref={panelRef} className="pt-8 md:pt-10 text-left" inert={!open || undefined}>
            {hasOpened && <CustomizeHolidayForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
