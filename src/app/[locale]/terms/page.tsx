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
  const t = await getTranslations({ locale, namespace: "seo.terms" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/terms"),
  };
}

interface Section { title: string; content: string }

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const sections = t.raw("sections") as Section[];

  return (
    <>
      <PageHero
        title={t("hero.title")}
        image="https://images.unsplash.com/photo-1650928367430-254e3e672dd9?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: t("hero.title"), href: "/terms" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <div className="space-y-8 text-charcoal/80 text-sm leading-relaxed">
            <p className="text-charcoal/50">{t("lastUpdated")}</p>
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
