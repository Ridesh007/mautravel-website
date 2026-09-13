import { cn } from "@/lib/utils";
import type { TimelineItem } from "@/types";

const COLS: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};

export function HeritageTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6", COLS[items.length] ?? "md:grid-cols-4")}>
      {items.map((item) => (
        <div key={item.year} className="relative pl-7 md:pl-0">
          <span className="absolute left-0 top-1 md:hidden w-3 h-3 rounded-full bg-gold" />
          <span className="absolute left-[5px] top-4 bottom-0 w-px bg-gold/25 md:hidden" aria-hidden="true" />
          <div className="hidden md:block relative mb-6">
            <div className="h-px bg-gold/25 w-full" />
            <span className="absolute left-0 -top-[5px] w-3 h-3 rounded-full bg-gold" />
          </div>
          <p className="text-gold font-heading font-bold text-lg mb-1.5">{item.year}</p>
          <h3 className="font-heading font-bold text-navy text-base mb-2 leading-snug">{item.title}</h3>
          <p className="text-charcoal/60 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
