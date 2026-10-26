"use client";

import { useEffect, useId, useState } from "react";
import { Compass } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useQueuedPresence, whenVisitorIdle } from "@/lib/popup-queue";
import { PromoPopupShell } from "@/components/shared/PromoPopupShell";

const SESSION_KEY = "mautravel-holiday-popup-shown";
const SHOW_DELAY_MS = 10000;

export function MauritiusHolidayPopup() {
  const t = useTranslations("holidayPopup");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  // Waits its turn if another floating card (e.g. the TripKindly announcement) is open.
  const { mounted, closing } = useQueuedPresence("holiday", visible, 300);
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

    let cancelWait: (() => void) | undefined;
    const timer = setTimeout(() => {
      // Hold off while a menu/dialog is open or the visitor is typing in a form.
      cancelWait = whenVisitorIdle(() => setVisible(true));
    }, SHOW_DELAY_MS);
    return () => {
      clearTimeout(timer);
      cancelWait?.();
    };
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
        <PromoPopupShell titleId={titleId} closing={closing} onClose={dismiss} closeLabel={t("closeAria")} widthClass="sm:w-96">
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
        </PromoPopupShell>
      )}
    </>
  );
}
