import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TRIPKINDLY_LOGO, TRIPKINDLY_URL } from "@/lib/partners";

interface Props {
  heading: string;
  description: string;
  cta: string;
  tagline: string;
  newTabLabel: string;
}

/** Compact partner card: logo | heading + description | outline button. Stacks below lg. */
export function TripKindlyCard({ heading, description, cta, tagline, newTabLabel }: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8 bg-white border border-gold/50 rounded-3xl px-6 py-7 sm:px-8 lg:py-6 text-center lg:text-left lg:rtl:text-right shadow-sm">
      <div className="shrink-0 flex flex-col items-center lg:items-start">
        <Image
          src={TRIPKINDLY_LOGO.src}
          alt="TripKindly"
          width={TRIPKINDLY_LOGO.width}
          height={TRIPKINDLY_LOGO.height}
          className="h-9 lg:h-10 w-auto"
          loading="lazy"
        />
        <p className="mt-1.5 text-xs font-semibold text-[#00695f]">{tagline}</p>
      </div>

      <div className="hidden lg:block w-px self-stretch bg-gold/30" aria-hidden="true" />

      <div className="flex-1 min-w-0 max-w-2xl">
        <h2 className="font-heading font-bold text-navy text-xl lg:text-2xl leading-snug mb-1.5">{heading}</h2>
        <p className="text-charcoal/70 text-sm leading-relaxed">{description}</p>
      </div>

      <a
        href={TRIPKINDLY_URL}
        target="_blank"
        rel="noopener"
        className="relative shrink-0 inline-flex items-center gap-2 border border-gold text-navy hover:bg-gold font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
      >
        {cta}
        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">{newTabLabel}</span>
      </a>
    </div>
  );
}
