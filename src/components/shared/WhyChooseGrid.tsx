"use client";
import { useState } from "react";
import {
  ShieldCheck, Clock, Tag, Star, Users, MessageCircle,
  Heart, Globe, ChevronDown, ChevronUp, LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck, Clock, Tag, Star, Users, MessageCircle, Heart, Globe,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseGridProps {
  features: Feature[];
  showMoreLabel: string;
  showLessLabel: string;
}

export function WhyChooseGrid({ features, showMoreLabel, showLessLabel }: WhyChooseGridProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, i) => {
          const Icon = ICONS[feature.icon] ?? Globe;
          return (
            <div
              key={feature.title}
              className={cn(
                "bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col",
                !showAll && i >= 4 ? "hidden lg:flex" : ""
              )}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-navy transition-all duration-300">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-navy text-base sm:text-lg mb-1.5 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {features.length > 4 && (
        <div className="mt-6 text-center lg:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy border border-navy/20 bg-white px-5 py-2.5 rounded-full hover:bg-navy hover:text-white transition-all duration-200 shadow-sm"
          >
            {showAll ? (
              <>{showLessLabel} <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>{showMoreLabel} <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
    </>
  );
}
