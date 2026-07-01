import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em] mb-3",
            light ? "text-gold-light" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/70" : "text-charcoal/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
