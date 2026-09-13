import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export interface FeatureHighlightData {
  title: string;
  description: string;
  image: string;
  /** In-page section id this card's button smooth-scrolls to. Ignored if `href` is set. Omit both to render the card without a button. */
  anchorId?: string;
  /** A real route (e.g. another destination page) this card's button links to, taking priority over `anchorId`. */
  href?: string;
  /** Optional small pill badge shown above the title (e.g. "UNESCO World Heritage Site", "Local Culture • Food • Shopping"). */
  tag?: string;
  /** Destination this card belongs to. Used only to build alt text that identifies the
   * place shown ("The Steps — Aapravasi Ghat, Mauritius"), never rendered. */
  placeName?: string;
}

export function FeatureHighlightCard({ title, description, image, anchorId, href, tag, placeName, learnMoreLabel }: FeatureHighlightData & { learnMoreLabel: string }) {
  const buttonClass = "inline-flex items-center gap-2 self-start bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 backdrop-blur-sm text-sm";

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-sm h-full min-h-[22rem]">
      <Image
        src={image}
        alt={placeName ? `${title} — ${placeName}, Mauritius` : title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        {tag && (
          <span className="inline-flex items-center self-start text-xs font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3 backdrop-blur-sm">
            {tag}
          </span>
        )}
        <h3 className="font-heading font-bold text-white text-2xl mb-2">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-md">{description}</p>
        {href ? (
          <Link href={href} className={buttonClass}>
            {learnMoreLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : anchorId ? (
          <a href={`#${anchorId}`} className={buttonClass}>
            {learnMoreLabel}
            <ArrowRight className="w-4 h-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
