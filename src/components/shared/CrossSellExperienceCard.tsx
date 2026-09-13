import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export interface CrossSellExperienceData {
  image: string;
  href: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaLabel: string;
  /** Optional small tasteful overlay prompt on the image (e.g. "Want a different view of Mauritius?"). */
  promptLabel?: string;
  promptCta?: string;
}

/** Premium, fully-clickable activity cross-sell card — the whole card is a single link to a real existing activity/place page. */
export function CrossSellExperienceCard({ image, href, badge, title, subtitle, description, features, ctaLabel, promptLabel, promptCta }: CrossSellExperienceData) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center text-xs font-semibold text-navy bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-1.5">
          {badge}
        </span>
        {promptLabel && (
          <div className="absolute bottom-4 left-4 right-4 bg-navy/70 backdrop-blur-sm rounded-xl px-4 py-3">
            <p className="text-white text-sm font-semibold leading-snug">{promptLabel}</p>
            {promptCta && (
              <p className="text-gold text-xs font-semibold mt-0.5 flex items-center gap-1">
                {promptCta}
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            )}
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-heading font-bold text-navy text-xl md:text-2xl mb-1">{title}</h3>
        <p className="text-gold text-sm font-semibold mb-3">{subtitle}</p>
        <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{description}</p>
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((f) => (
              <span key={f} className="text-xs font-semibold text-navy/70 bg-cream rounded-full px-3 py-1.5">
                {f}
              </span>
            ))}
          </div>
        )}
        <span className="inline-flex items-center gap-2 bg-navy group-hover:bg-navy/90 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors duration-200">
          {ctaLabel}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
