import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MauTravel Privacy Policy — how we collect, use and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        image="https://images.unsplash.com/photo-1589745659208-9bdc6fb0ef23?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl prose prose-navy">
          <div className="space-y-8 text-charcoal/80 text-sm leading-relaxed">
            <div>
              <p className="text-charcoal/50 mb-6">Last updated: June 2025</p>
              <p>
                MauTravel (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose and safeguard your personal information when you
                visit our website or use our services.
              </p>
            </div>
            {[
              {
                title: "1. Information We Collect",
                content: "We collect information you voluntarily provide to us — including your name, email address, telephone number, and travel details — when you make a booking, request a quote or contact us via WhatsApp, email or our contact form. We may also collect non-personal information such as browser type, device information and website usage data through cookies and analytics tools.",
              },
              {
                title: "2. How We Use Your Information",
                content: "We use your information to process bookings and reservations, provide customer support, send booking confirmations and updates, improve our services and website, and comply with legal obligations. We do not sell, trade or rent your personal information to third parties.",
              },
              {
                title: "3. WhatsApp Communications",
                content: "When you contact us via WhatsApp, your messages are transmitted through WhatsApp's platform. Please refer to WhatsApp's Privacy Policy for information on how they process your data. We store WhatsApp conversation records only as long as necessary to provide our services.",
              },
              {
                title: "4. Data Security",
                content: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is 100% secure.",
              },
              {
                title: "5. Data Retention",
                content: "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Booking records are typically retained for 7 years for accounting and legal purposes.",
              },
              {
                title: "6. Your Rights",
                content: "You have the right to access, correct or delete your personal information held by us. You may also object to the processing of your data or request a restriction on processing. To exercise these rights, please contact us at info@mautravel.mu.",
              },
              {
                title: "7. Cookies",
                content: "Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. Essential cookies required for the website to function cannot be disabled.",
              },
              {
                title: "8. Changes to This Policy",
                content: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this policy periodically.",
              },
              {
                title: "9. Contact Us",
                content: "If you have any questions about this Privacy Policy, please contact us at info@mautravel.mu or via WhatsApp.",
              },
            ].map((section) => (
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
