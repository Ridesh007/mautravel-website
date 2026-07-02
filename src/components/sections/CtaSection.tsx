import Image from "next/image";
import { useTranslations } from "next-intl";
import { FileText } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CtaSection() {
  const t = useTranslations("home.cta");
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1513415563383-4e580ed27a46?auto=format&fit=crop&w=1920&q=80"
        alt="Le Morne underwater waterfall illusion, Mauritius"
        fill
        className="object-cover"
        sizes="100vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative container-xl text-center">
        <AnimatedSection>
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            {t("eyebrow")}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight text-balance">
            {t("title")}
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {t("description")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <WhatsAppButton
              service="Mauritius holiday"
              size="lg"
              label={t("whatsappUs")}
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <FileText className="w-5 h-5" />
              {t("requestQuote")}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
