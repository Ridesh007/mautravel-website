import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Breadcrumb[];
  eyebrow?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, image, breadcrumbs, eyebrow, className, children }: PageHeroProps) {
  const t = useTranslations("common");
  return (
    <section className={cn("relative h-[65vh] min-h-[520px] md:h-[65vh] md:min-h-[560px] flex items-end", className)}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" />
      <div className="relative container-xl pt-20 md:pt-24 pb-12 md:pb-16">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              {t("breadcrumbHome")}
            </Link>
            {breadcrumbs.map((bc, i) => (
              <span key={bc.href} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white/90">{bc.label}</span>
                ) : (
                  <Link href={bc.href} className="hover:text-white transition-colors">
                    {bc.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
