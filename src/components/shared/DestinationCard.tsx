import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export interface DestinationCardData {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  tag: string;
}

interface DestinationCardProps extends DestinationCardData {
  learnMoreLabel: string;
  priority?: boolean;
}

export function DestinationCard({
  slug,
  name,
  image,
  shortDescription,
  tag,
  learnMoreLabel,
  priority = false,
}: DestinationCardProps) {
  return (
    <Link
      href={`/places/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {tag && (
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy backdrop-blur">
              {tag}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-bold text-navy mb-2">{name}</h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-charcoal/60">{shortDescription}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all duration-200 group-hover:gap-2.5">
          {learnMoreLabel}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
