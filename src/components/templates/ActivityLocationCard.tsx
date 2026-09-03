"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ActivityLocation } from "@/types";

export function ActivityLocationCard({ loc, activityName }: { loc: ActivityLocation; activityName: string }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={contentId}
        className="group w-full text-left"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={loc.image}
            alt={`${loc.name} — ${activityName}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
              {loc.walkTime}
            </span>
            <h3 className="font-heading font-bold text-white text-xl leading-tight">{loc.name}</h3>
            <p className="text-white/70 text-sm mt-0.5">{loc.subtitle}</p>
          </div>
        </div>

        <div className="px-6 pt-4 pb-3">
          <p className={cn("text-charcoal/70 text-sm leading-relaxed", !open && "line-clamp-2")}>
            {loc.description}
          </p>
        </div>

        <div className="flex items-center justify-center py-2.5 border-t border-gray-100">
          <ChevronDown className={cn("w-4 h-4 text-navy/40 transition-transform duration-300", open && "rotate-180")} />
        </div>
      </button>

      <div
        id={contentId}
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 px-6 pb-6 pt-1">
            {loc.landmarks.map((lm) => (
              <li key={lm} className="flex items-start gap-2 text-sm text-charcoal/60">
                <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                {lm}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
