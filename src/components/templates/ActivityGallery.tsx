"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_COUNT = 8; // 1 banner + 7 squares visible by default

interface Props {
  images: string[];
  name: string;
}

export function ActivityGallery({ images, name }: Props) {
  const t = useTranslations("activities");
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);
  const hidden = images.length - INITIAL_COUNT;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* First image — full-width cinematic banner */}
        <div className="col-span-2 md:col-span-4 relative aspect-[21/9] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={visible[0]}
            alt={`${name} — Mauritius`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
        </div>

        {/* Remaining images as uniform squares */}
        {visible.slice(1).map((src, i) => (
          <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`${name} Mauritius ${i + 2}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Show More / Show Less button */}
      {images.length > INITIAL_COUNT && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm hover:-translate-y-0.5 shadow-sm"
          >
            {showAll ? (
              <>{t("showLessPhotos")} <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>{t("showMorePhotos", { n: hidden })} <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
