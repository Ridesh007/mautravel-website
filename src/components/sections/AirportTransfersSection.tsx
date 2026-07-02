import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function AirportTransfersSection() {
  const t = useTranslations("home.airportTransfers");
  const features = t.raw("features") as string[];
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1650928367430-254e3e672dd9?auto=format&fit=crop&w=900&q=80"
                alt="Le Morne resort aerial view, Mauritius — airport transfer destination"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold text-xl">✈</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{t("badgeAvailable")}</p>
                  <p className="text-navy font-bold text-sm">{t("badgeHours")}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.15}>
            <SectionHeader
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
              centered={false}
            />
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-charcoal/80 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/airport-transfers"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
              >
                {t("learnMore")} <ChevronRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton service="Airport Transfer" size="md" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
