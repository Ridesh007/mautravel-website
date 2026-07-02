"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

export function ActivityFaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-navy/20 transition-colors duration-200"
        >
          <button
            className="w-full flex items-center justify-between p-5 md:p-6 gap-4 text-left rtl:text-right"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-navy text-sm md:text-base leading-snug">
              {faq.question}
            </span>
            <span className="shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center transition-transform duration-300" style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}>
              <ChevronDown className="w-4 h-4 text-navy" />
            </span>
          </button>
          <div className={cn("overflow-hidden transition-all duration-300", open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0")}>
            <p className="px-5 md:px-6 pb-5 text-charcoal/70 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
