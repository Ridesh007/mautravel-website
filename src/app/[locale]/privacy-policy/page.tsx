import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/PageHero";
import { buildAlternates } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.privacyPolicy" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/privacy-policy"),
  };
}

interface Section { title: string; content: string }

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });
  const sections = t.raw("sections") as Section[];

  return (
    <>
      <PageHero
        title={t("hero.title")}
        image="https://images.unsplash.com/photo-1589745659208-9bdc6fb0ef23?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: t("hero.title"), href: "/privacy-policy" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl prose prose-navy">
          <div className="space-y-8 text-charcoal/80 text-sm leading-relaxed">
            <div>
              <p className="text-charcoal/50 mb-6">{t("lastUpdated")}</p>
              <p>{t("intro")}</p>
            </div>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading font-bold text-navy text-xl mb-3">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
