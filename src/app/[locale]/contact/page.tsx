import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Car, Home, Compass, UserCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { getWhatsAppUrl, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/whatsapp";
import { buildAlternates } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/contact"),
    openGraph: { title: `${t("title")} | MauTravel`, description: t("description") },
  };
}

const CONTACT_ICONS = [MessageCircle, Phone, Mail, MapPin, Clock];
const CONTACT_HREFS = [
  getWhatsAppUrl(),
  `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
  `mailto:${CONTACT_EMAIL}`,
  "#",
  "#",
];
const CONTACT_VALUES_OVERRIDE = [undefined, CONTACT_PHONE, CONTACT_EMAIL, undefined, undefined];

const PARTNER_ICONS = [Car, Home, Compass, UserCheck];
const PARTNER_MESSAGES = [
  "Hi MauTravel! I'd like to advertise my vehicle on your platform.",
  "Hi MauTravel! I'd like to list my property/villa on your platform.",
  "Hi MauTravel! I'd like to list my activity or tour on your platform.",
  "Hi MauTravel! I'm a driver and I'd like to join your network.",
];

interface ContactItemText { label: string; value: string }
interface PartnerListingText { title: string; description: string; cta: string }

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const items = t.raw("items") as ContactItemText[];
  const partnerListings = t.raw("partnerListings") as PartnerListingText[];

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image="https://images.unsplash.com/photo-1738610612578-7c31a08c54b4?auto=format&fit=crop&w=1920&q=80"
        eyebrow={t("hero.eyebrow")}
        breadcrumbs={[{ label: t("hero.title"), href: "/contact" }]}
      />

      {/* Business / Partner Section */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">{t("partnerEyebrow")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              {t("partnerTitle")}
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto text-sm leading-relaxed">
              {t("partnerDescription")}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerListings.map((item, i) => {
              const Icon = PARTNER_ICONS[i];
              return (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed flex-1 mb-5">{item.description}</p>
                    <a
                      href={getWhatsAppUrl(PARTNER_MESSAGES[i])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#1da851] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {item.cta}
                    </a>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-navy mb-3">{t("reachHeading")}</h2>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                {t("reachDescription")}
              </p>

              <div className="space-y-4 mb-10">
                {items.map((item, i) => {
                  const Icon = CONTACT_ICONS[i];
                  const highlight = i === 0;
                  const value = CONTACT_VALUES_OVERRIDE[i] ?? item.value;
                  return (
                    <a
                      key={item.label}
                      href={CONTACT_HREFS[i]}
                      target={CONTACT_HREFS[i].startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group ${
                        highlight
                          ? "bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20"
                          : "bg-cream hover:bg-navy/5 border border-transparent"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        highlight ? "bg-[#25D366] text-white" : "bg-white text-navy shadow-sm"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">{item.label}</p>
                        <p className={`font-semibold ${highlight ? "text-[#25D366]" : "text-navy"}`}>
                          {value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="bg-navy rounded-2xl p-6 text-center">
                <p className="text-white/70 text-sm mb-4">
                  {t("chatPrompt")}
                </p>
                <WhatsAppButton size="lg" label={t("openChat")} className="w-full justify-center" />
              </div>
            </AnimatedSection>

            {/* Quote Form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-cream rounded-3xl p-8">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">{t("enquiryHeading")}</h2>
                <p className="text-charcoal/60 text-sm mb-6">
                  {t("enquiryDescription")}
                </p>
                <QuoteForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
