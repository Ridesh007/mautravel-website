"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Compass } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const SESSION_KEY = "mautravel-holiday-popup-shown";
const SHOW_DELAY_MS = 10000;

export function MauritiusHolidayPopup() {
  const t = useTranslations("holidayPopup");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't promote the page the visitor is already on.
    if (pathname === "/mauritius-holiday-package") return;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadyShown = false;
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage unavailable (e.g. private browsing) — popup simply won't remember dismissal
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-[60] bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 sm:w-96"
          role="dialog"
          aria-live="polite"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 pt-8">
            <button
              type="button"
              onClick={dismiss}
              aria-label={t("closeAria")}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-charcoal/40 hover:text-charcoal hover:bg-cream transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3 pr-6">
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-gold" />
              </div>
              <h2 className="font-heading font-bold text-navy text-base leading-snug">{t("title")}</h2>
            </div>

            <p className="text-charcoal/70 text-sm leading-relaxed mb-5">{t("message")}</p>

            <Link
              href="/mauritius-holiday-package"
              onClick={dismiss}
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t("cta")}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
