"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = isHome && !scrolled ? "bg-transparent" : "bg-white shadow-sm";
  const textColor = isHome && !scrolled ? "text-white" : "text-navy";
  const logoColor = isHome && !scrolled ? "text-white" : "text-navy";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          navBg
        )}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                  isHome && !scrolled
                    ? "bg-white/20 text-white"
                    : "bg-navy text-white"
                )}
              >
                MT
              </div>
              <span
                className={cn(
                  "font-heading font-bold text-xl tracking-tight transition-colors",
                  logoColor
                )}
              >
                MauTravel
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap",
                    pathname === link.href
                      ? isHome && !scrolled
                        ? "text-gold-light"
                        : "text-gold"
                      : isHome && !scrolled
                      ? "text-white/90 hover:text-white"
                      : "text-charcoal hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                isHome && !scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-navy hover:bg-navy/10"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy pt-16 overflow-y-auto lg:hidden"
          >
            <div className="container-xl py-8 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 px-4 text-lg font-medium rounded-xl transition-colors",
                      pathname === link.href
                        ? "text-gold bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold/90 text-white text-base font-semibold px-6 py-4 rounded-2xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
