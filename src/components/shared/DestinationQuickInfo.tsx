import { MapPin, Clock, Users, Star, Compass, Ticket, Leaf, Calendar, Trees, Mountain, Footprints, Trophy, type LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";

const ICONS: Record<string, LucideIcon> = { MapPin, Clock, Users, Star, Compass, Ticket, Leaf, Calendar, Trees, Mountain, Footprints, Trophy };

export interface QuickInfoItem {
  icon: string;
  label: string;
  value: string;
  /** Optional small real-route links shown under the value (e.g. "Paragliding" / "Dolphin Watching"). */
  links?: { label: string; href: string }[];
}

export function DestinationQuickInfo({ items }: { items: QuickInfoItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-0 lg:divide-x divide-gray-100">
      {items.map((item) => {
        const Icon = ICONS[item.icon] ?? MapPin;
        return (
          <div key={item.label} className="flex items-start gap-3 lg:px-5 lg:first:pl-0">
            <Icon className="w-4 h-4 text-gold mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-navy/50 uppercase tracking-wide mb-0.5">{item.label}</p>
              <p className="text-sm text-charcoal/80 leading-snug">{item.value}</p>
              {item.links && item.links.length > 0 && (
                <p className="flex flex-wrap gap-x-2 mt-1">
                  {item.links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-xs font-semibold text-gold hover:text-navy underline underline-offset-2 transition-colors duration-200">
                      {link.label}
                    </Link>
                  ))}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
