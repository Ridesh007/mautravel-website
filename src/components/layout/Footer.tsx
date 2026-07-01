import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { getWhatsAppUrl, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/whatsapp";

const SOCIAL_LINKS = [
  { label: "TikTok", href: "https://tiktok.com/@mautravel", icon: "TK" },
  { label: "Instagram", href: "https://instagram.com/mautravel", icon: "IG" },
  { label: "Facebook", href: "https://facebook.com/mautravel", icon: "FB" },
  { label: "YouTube", href: "https://youtube.com/@mautravel", icon: "YT" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-xl pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center font-bold text-navy text-sm">
                MT
              </div>
              <span className="font-heading font-bold text-xl text-white">MauTravel</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Mauritius&apos;s trusted Tour Operator. We craft extraordinary
              travel experiences with passion, expertise and care.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center text-xs font-bold text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">
              Our Services
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/contact" && l.href !== "/reviews").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
                { label: "FAQs", href: "/faqs" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-gold text-sm transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-gold" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-3 text-white/70 hover:text-gold text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-gold" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-white/70 hover:text-gold text-sm transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-gold" />
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Mauritius, Indian Ocean
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} MauTravel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faqs" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
