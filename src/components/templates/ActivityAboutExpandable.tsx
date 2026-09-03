"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  paragraphs: string[];
  readMoreLabel: string;
  showLessLabel: string;
}

export function ActivityAboutExpandable({ paragraphs, readMoreLabel, showLessLabel }: Props) {
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const [first, ...rest] = paragraphs;

  if (rest.length === 0) {
    return <p className="text-charcoal/70 leading-relaxed">{first}</p>;
  }

  return (
    <div>
      <p className="text-charcoal/70 leading-relaxed mb-4">{first}</p>

      <div
        id={contentId}
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pb-4">
            {rest.map((para, i) => (
              <p key={i} className="text-charcoal/70 leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={contentId}
        className="inline-flex items-center gap-1.5 text-navy font-semibold text-sm hover:text-gold transition-colors duration-200"
      >
        {open ? showLessLabel : readMoreLabel}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", open && "rotate-180")} />
      </button>
    </div>
  );
}
