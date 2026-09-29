"use client";

import { useEffect, useId, useState } from "react";
import { X, Compass } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { usePresence } from "@/lib/use-presence";
import { cn } from "@/lib/utils";

const SESSION_KEY = "mautravel-holiday-popup-shown";
const SHOW_DELAY_MS = 10000;

export function MauritiusHolidayPopup() {
  const t = useTranslations("holidayPopup");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const { mounted, closing } = usePresence(visible, 300);
  const titleId = useId();

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
    <>
      {mounted && (
        <div
          className={cn(
            "fixed z-[60] bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 sm:w-96 duration-300",
            closing ? "animate-out fade-out slide-out-to-bottom-6 zoom-out-96 fill-mode-forwards ease-[cubic-bezier(0.22,1,0.36,1)]" : "animate-in fade-in slide-in-from-bottom-6 zoom-in-96 ease-[cubic-bezier(0.22,1,0.36,1)]"
          )}
          role="dialog"
          aria-labelledby={titleId}
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
              <h2 id={titleId} className="font-heading font-bold text-navy text-base leading-snug">{t("title")}</h2>
            </div>

            <p className="text-charcoal/70 text-sm leading-relaxed mb-5">{t("message")}</p>

            <Link
              href="/mauritius-holiday-package"
              onClick={dismiss}
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-navy text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
