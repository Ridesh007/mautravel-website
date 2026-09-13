import { Footprints } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TrailData {
  name: string;
  distance: string;
  /** Translated, displayed difficulty label (e.g. "Moderate", "Modéré"). */
  difficulty: string;
  /** Structural (untranslated) difficulty tier, used only to pick the badge colour. */
  difficultyLevel: "easy" | "moderate" | "strenuous";
  description: string;
}

const DIFFICULTY_STYLES: Record<TrailData["difficultyLevel"], string> = {
  easy: "bg-green-50 text-green-700",
  moderate: "bg-gold/15 text-gold",
  strenuous: "bg-red-50 text-red-600",
};

export function TrailCard({ name, distance, difficulty, difficultyLevel, description }: TrailData) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <h3 className="font-heading font-bold text-navy text-base mb-1">{name}</h3>
      <p className="text-charcoal/50 text-xs mb-3">{distance}</p>
      <span className={cn("inline-flex items-center gap-1.5 self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3", DIFFICULTY_STYLES[difficultyLevel] ?? "bg-gray-100 text-charcoal/70")}>
        <Footprints className="w-3 h-3" />
        {difficulty}
      </span>
      <p className="text-charcoal/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
