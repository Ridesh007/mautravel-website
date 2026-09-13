import Image from "next/image";
import { CheckCircle2, type LucideIcon } from "lucide-react";
import * as icons from "lucide-react";

export interface PlaceActivityItem {
  name: string;
  description: string;
  image: string;
  /** Optional lucide-react icon name shown next to the title (e.g. for a "Why Visit" grid). */
  icon?: string;
  /** Optional small badge shown at the bottom of the card (e.g. "Available Daily"). */
  tag?: string;
  /** Destination this card belongs to. Used only to build alt text that identifies the
   * place shown ("Snorkel the Reef — Trou aux Biches, Mauritius"), never rendered. */
  placeName?: string;
}

export function PlaceActivityCard({ name, description, image, icon, tag, placeName }: PlaceActivityItem) {
  const Icon = icon ? ((icons as unknown as Record<string, LucideIcon>)[icon]) : undefined;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={placeName ? `${name} — ${placeName}, Mauritius` : name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-navy text-lg mb-1.5 flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-gold shrink-0" />}
          {name}
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed">{description}</p>
        {tag && (
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold self-start">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}
