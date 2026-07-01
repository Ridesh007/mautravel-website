import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "MauTravel Terms & Conditions — please read before booking our services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        image="https://images.unsplash.com/photo-1650928367430-254e3e672dd9?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Terms & Conditions", href: "/terms" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <div className="space-y-8 text-charcoal/80 text-sm leading-relaxed">
            <p className="text-charcoal/50">Last updated: June 2025</p>
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By booking any service with MauTravel, you agree to be bound by these Terms and Conditions. Please read them carefully before making a booking. If you do not agree to these terms, please do not use our services.",
              },
              {
                title: "2. Booking and Confirmation",
                content: "Bookings are confirmed upon receipt of payment or a written confirmation from MauTravel via WhatsApp or email. A booking is not confirmed until you receive explicit confirmation from us. We reserve the right to decline any booking at our discretion.",
              },
              {
                title: "3. Pricing",
                content: "All prices quoted are in Euros (€) unless otherwise stated. Prices are fixed at the time of booking and will not change after confirmation. Quoted prices are inclusive of all taxes and fees unless specifically noted otherwise.",
              },
              {
                title: "4. Payment",
                content: "Payment terms will be specified at the time of booking. We accept payment via bank transfer, cash or other methods agreed upon. Full payment may be required before service delivery for certain bookings.",
              },
              {
                title: "5. Cancellation Policy",
                content: "Cancellations made more than 48 hours before the scheduled service will receive a full refund. Cancellations made between 24–48 hours before the service may be subject to a 50% cancellation fee. Cancellations made less than 24 hours before the service may be charged in full. No-shows will be charged in full. Refunds will be processed within 5–10 business days.",
              },
              {
                title: "6. Changes and Modifications",
                content: "MauTravel reserves the right to make changes to services where necessary due to circumstances beyond our control (weather, safety concerns, etc.). In such cases, we will offer alternative arrangements or a full refund. Clients wishing to modify a confirmed booking should contact us as soon as possible, and changes are subject to availability.",
              },
              {
                title: "7. Client Responsibilities",
                content: "Clients are responsible for providing accurate information at the time of booking, arriving on time for transfers and tours, ensuring they have valid travel documents, and behaving in a manner that does not endanger themselves or others. MauTravel accepts no responsibility for delays or losses caused by client error.",
              },
              {
                title: "8. Limitation of Liability",
                content: "MauTravel's liability is limited to the value of the booked service. We are not responsible for indirect or consequential losses, including flight delays, missed connections, loss of enjoyment or any losses beyond our direct control.",
              },
              {
                title: "9. Governing Law",
                content: "These Terms and Conditions are governed by the laws of the Republic of Mauritius. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mauritius.",
              },
              {
                title: "10. Contact",
                content: "For any questions about these Terms and Conditions, please contact us at info@mautravel.mu.",
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
