"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useQueuedPresence, whenVisitorIdle } from "@/lib/popup-queue";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { TRIPKINDLY_ICON, TRIPKINDLY_URL } from "@/lib/partners";
import { PromoPopupShell } from "@/components/shared/PromoPopupShell";

const SHOWN_KEY = "mautravel-tripkindly-popup-shown";
// Browsing time already spent this session, so the countdown survives full page loads
// (e.g. switching language) as well as client-side navigation.
const ELAPSED_KEY = "mautravel-tripkindly-elapsed-ms";
const SHOW_AFTER_MS = 60000;
// After a full page load, never pop up the instant the page appears.
const MIN_DELAY_MS = 2000;

function readSession(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // sessionStorage unavailable (e.g. private browsing) — timer restarts on each full load
  }
}

/**
 * Announces the TripKindly partnership once per session, after 60 seconds of browsing
 * (time with the tab in the background doesn't count). Mounted once in the layout, so it
 * survives client-side navigation without restarting.
 */
export function TripKindlyPopup() {
  const t = useTranslations("tripKindlyPopup");
  const tc = useTranslations("common");
  const [visible, setVisible] = useState(false);
  // Queued behind the holiday-package popup (or the language suggestion) if one is open.
  const { mounted, closing } = useQueuedPresence("tripkindly", visible, 300);
  const titleId = useId();

  useEffect(() => {
    if (readSession(SHOWN_KEY) === "1") return;

    let elapsed = Number(readSession(ELAPSED_KEY)) || 0;
    let since: number | null = null; // start of the current foreground stretch
    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelWait: (() => void) | undefined;
    let done = false;

    const pause = () => {
      if (since === null) return;
      elapsed += performance.now() - since;
      since = null;
      clearTimeout(timer);
      writeSession(ELAPSED_KEY, String(Math.round(elapsed)));
    };

    const resume = () => {
      if (done || since !== null || document.hidden) return;
      since = performance.now();
      timer = setTimeout(() => {
        pause();
        done = true;
        cancelWait = whenVisitorIdle(() => setVisible(true));
      }, Math.max(MIN_DELAY_MS, SHOW_AFTER_MS - elapsed));
    };

    const onVisibility = () => (document.hidden ? pause() : resume());
    resume();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", pause);
    return () => {
      pause();
      cancelWait?.();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", pause);
    };
  }, []);

  // Count it as shown once it's actually on screen, not when it was merely queued.
  useEffect(() => {
    if (mounted && !closing) writeSession(SHOWN_KEY, "1");
  }, [mounted, closing]);

  const dismiss = () => setVisible(false);

  return (
    <>
      {mounted && (
        <PromoPopupShell titleId={titleId} closing={closing} onClose={dismiss} closeLabel={t("closeAria")} widthClass="sm:w-[26rem]">
          <div className="flex items-center gap-3 mb-4 pr-6">
            <Image
              src={TRIPKINDLY_ICON.src}
              alt=""
              width={TRIPKINDLY_ICON.width}
              height={TRIPKINDLY_ICON.height}
              className="w-12 h-12 shrink-0"
            />
            <h2 id={titleId} className="font-heading font-bold text-navy text-lg leading-snug">{t("title")}</h2>
          </div>

          <div className="space-y-2 text-charcoal/70 text-sm leading-relaxed mb-5">
            <p>{t("announcement")}</p>
            <p>{t("services")}</p>
            <p>{t("nextSteps")}</p>
          </div>

          <a
            href={TRIPKINDLY_URL}
            target="_blank"
            rel="noopener"
            onClick={dismiss}
            className="relative flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-navy text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {t("cta")}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">{tc("opensInNewTab")}</span>
          </a>
          <a
            href={getWhatsAppUrl(t("introMessage"))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="relative mt-2 flex items-center justify-center min-h-11 text-sm font-semibold text-navy underline underline-offset-4 decoration-gold/60 hover:text-gold transition-colors"
          >
            {t("introCta")}
            <span className="sr-only">{tc("opensInNewTab")}</span>
          </a>
        </PromoPopupShell>
      )}
    </>
  );
}
