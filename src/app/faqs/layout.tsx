import type { Metadata } from "next";
import { FAQS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about MauTravel — booking, pricing, airport transfers, cancellation policy, group discounts and more.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "FAQs | MauTravel",
    description:
      "Frequently asked questions about MauTravel — booking, pricing, airport transfers, cancellation policy, group discounts and more.",
    url: "/faqs",
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
