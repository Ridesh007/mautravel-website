"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
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
          <div className={cn("overflow-hidden transition-all duration-300", open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
            <div className="px-5 md:px-6 pb-5">
              <p className="text-charcoal/70 text-sm leading-relaxed">{faq.answer}</p>
              {faq.links && faq.links.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-3">
                  {faq.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-navy transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
