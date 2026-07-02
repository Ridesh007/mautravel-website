"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Users, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  description: string;
  highlights?: string[];
  suitableFor?: string;
}

export function ActivityCardReadMore({ description, highlights, suitableFor }: Props) {
  const t = useTranslations("activities");
  const [expanded, setExpanded] = useState(false);
  const hasExtra = !!(highlights?.length || suitableFor);

  return (
    <>
      <p className={`text-charcoal/60 text-sm leading-relaxed mb-2 ${expanded ? "" : "line-clamp-2"}`}>
        {description}
      </p>

      {expanded && hasExtra && (
        <div className="mb-2">
          {highlights && (
            <div className="flex flex-wrap gap-2 mb-3">
              {highlights.slice(0, 6).map((h) => (
                <span key={h} className="inline-flex items-center gap-1 text-xs bg-cream text-charcoal/70 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-gold shrink-0" />
                  {h}
                </span>
              ))}
            </div>
          )}
          {suitableFor && (
            <p className="flex items-center gap-1.5 text-xs text-charcoal/50">
              <Users className="w-3.5 h-3.5" />
              {t("suitableForLabel")}: {suitableFor}
            </p>
          )}
        </div>
      )}

      {(description.length > 120 || hasExtra) && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-gold font-semibold flex items-center gap-1 mb-4 hover:text-gold/80 transition-colors self-start"
        >
          {expanded ? (
            <>{t("showLess")} <ChevronUp className="w-3 h-3" /></>
          ) : (
            <>{t("readMore")} <ChevronDown className="w-3 h-3" /></>
          )}
        </button>
      )}
    </>
  );
}
