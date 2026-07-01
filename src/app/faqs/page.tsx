"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AnimatedSection, AnimatedGrid } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="w-full text-left border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-navy/20 transition-all duration-200"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 md:p-6 gap-4">
        <h3 className="font-semibold text-navy text-sm md:text-base leading-snug">{question}</h3>
        <div className="shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center">
          {open ? <ChevronUp className="w-4 h-4 text-navy" /> : <ChevronDown className="w-4 h-4 text-navy" />}
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="px-5 md:px-6 pb-5 text-charcoal/70 text-sm leading-relaxed">{answer}</p>
      </div>
    </button>
  );
}

export default function FaqsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about MauTravel's services and how to make the most of your Mauritius visit."
        image="https://images.unsplash.com/photo-1687977424023-83e3d3385131?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Help Centre"
        breadcrumbs={[{ label: "FAQs", href: "/faqs" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-16 bg-navy rounded-3xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-white mb-3">Still Have Questions?</h2>
            <p className="text-white/70 text-sm mb-6">
              Our team is happy to answer any question you might have about Mauritius travel.
              Reach us on WhatsApp for a fast, friendly response.
            </p>
            <WhatsAppButton size="lg" label="Ask Us on WhatsApp" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
