"use client";

import { useState } from "react";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqAccordionItem[];
  initialVisible?: number;
  showMoreLabel: string;
  showLessLabel: string;
}

/** Simple rows with subtle separators — not individual cards. Only one item open at a time. */
export function FaqAccordion({ items, initialVisible = 5, showMoreLabel, showLessLabel }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, initialVisible);
  const canToggle = items.length > initialVisible;

  const toggleShowAll = () => {
    if (showAll && openIndex !== null && openIndex >= initialVisible) {
      setOpenIndex(null);
    }
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="divide-y divide-navy/10 border-t border-b border-navy/10">
        {visibleItems.map((item, i) => {
          const isOpen = openIndex === i;
          const buttonId = `faq-button-${i}`;
          const panelId = `faq-panel-${i}`;
          return (
            <div key={item.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-4 md:py-5 text-left rtl:text-right"
                >
                  <span className="font-heading font-semibold text-navy text-sm md:text-base leading-snug">
                    {item.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-cream flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 md:w-4 md:h-4 text-navy" aria-hidden="true" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 md:w-4 md:h-4 text-navy" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </h3>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="overflow-hidden"
                  inert={!isOpen || undefined}
                >
                  <p className="pb-4 md:pb-5 text-charcoal/70 text-sm md:text-base leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {canToggle && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={toggleShowAll}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy border border-navy/20 bg-white px-5 py-2.5 rounded-full hover:bg-navy hover:text-white transition-all duration-200 shadow-sm"
          >
            {showAll ? (
              <>
                {showLessLabel} <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                {showMoreLabel} <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
