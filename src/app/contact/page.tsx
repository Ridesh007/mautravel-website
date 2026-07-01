import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Car, Home, Compass, UserCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { getWhatsAppUrl, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MauTravel — book a service, request a quote or ask us anything about your Mauritius holiday. Fast WhatsApp response.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
  },
};

const CONTACT_ITEMS = [
  {
    icon: MessageCircle,
    label: "WhatsApp (Fastest)",
    value: "Message us on WhatsApp",
    href: getWhatsAppUrl(),
    highlight: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mauritius, Indian Ocean",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Usually within 30 minutes",
    href: "#",
  },
];

const PARTNER_LISTINGS = [
  {
    icon: Car,
    title: "List Your Vehicle",
    description: "Own a car, minivan, or luxury vehicle? Partner with MauTravel and reach thousands of tourists looking for reliable transport.",
    cta: "Advertise Your Car",
    message: "Hi MauTravel! I'd like to advertise my vehicle on your platform.",
  },
  {
    icon: Home,
    title: "List Your Property",
    description: "Have a villa, apartment, or beachfront property to rent? List it with MauTravel and connect with quality travellers.",
    cta: "Advertise Your Property",
    message: "Hi MauTravel! I'd like to list my property/villa on your platform.",
  },
  {
    icon: Compass,
    title: "List an Activity or Tour",
    description: "Offer a tour, excursion, or unique activity experience? Grow your bookings by partnering with MauTravel.",
    cta: "Advertise Your Activity",
    message: "Hi MauTravel! I'd like to list my activity or tour on your platform.",
  },
  {
    icon: UserCheck,
    title: "Register as a Driver",
    description: "Professional driver looking for more work? Join the MauTravel driver network and receive regular booking referrals.",
    cta: "Join as a Driver",
    message: "Hi MauTravel! I'm a driver and I'd like to join your network.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Our team is ready to help you plan the perfect Mauritius experience. Reach us via WhatsApp for the fastest response."
        image="https://images.unsplash.com/photo-1738610612578-7c31a08c54b4?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Get in Touch"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* Business / Partner Section */}
      <section className="section-padding bg-cream">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">For Businesses</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Partner With MauTravel
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto text-sm leading-relaxed">
              Are you a car owner, property host, activity operator, or driver? Expand your reach by
              listing with MauTravel and connecting with thousands of visitors to Mauritius every year.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_LISTINGS.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed flex-1 mb-5">{item.description}</p>
                  <a
                    href={getWhatsAppUrl(item.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#1da851] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {item.cta}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-navy mb-3">How to Reach Us</h2>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                The quickest way to reach us is via WhatsApp. We respond to all messages
                promptly and can handle bookings, quotes and enquiries directly in the chat.
              </p>

              <div className="space-y-4 mb-10">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group ${
                      item.highlight
                        ? "bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20"
                        : "bg-cream hover:bg-navy/5 border border-transparent"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      item.highlight ? "bg-[#25D366] text-white" : "bg-white text-navy shadow-sm"
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">{item.label}</p>
                      <p className={`font-semibold ${item.highlight ? "text-[#25D366]" : "text-navy"}`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-navy rounded-2xl p-6 text-center">
                <p className="text-white/70 text-sm mb-4">
                  Need help right now? Tap below to start a WhatsApp conversation.
                </p>
                <WhatsAppButton size="lg" label="Open WhatsApp Chat" className="w-full justify-center" />
              </div>
            </AnimatedSection>

            {/* Quote Form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-cream rounded-3xl p-8">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">Send an Enquiry</h2>
                <p className="text-charcoal/60 text-sm mb-6">
                  Fill in the form below and we&apos;ll send your message via WhatsApp — no forms, no waiting.
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
