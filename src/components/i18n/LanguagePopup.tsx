"use client";

import { useState, useEffect, useId } from "react";
import { useLocale, useTranslations } from "next-intl";
import { X, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeConfigs } from "@/i18n/locales";
import { useQueuedPresence } from "@/lib/popup-queue";
import { cn } from "@/lib/utils";

const CHOICE_COOKIE = "mautravel-lang-choice";
const DISMISS_COOKIE = "mautravel-lang-dismissed";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

export function LanguagePopup() {
  const locale = useLocale();
  const t = useTranslations("popup");
  const pathname = usePathname();
  const router = useRouter();
  const [detected, setDetected] = useState<(typeof localeConfigs)[number] | null>(null);
  const [visible, setVisible] = useState(false);
  // Shares the bottom of the screen with the promo popups on phones — one card at a time.
  const { mounted, closing } = useQueuedPresence("language", visible, 250);
  const titleId = useId();

  useEffect(() => {
    if (getCookie(CHOICE_COOKIE) || getCookie(DISMISS_COOKIE)) return;

    const browserLangs = navigator.languages ?? [navigator.language];
    for (const lang of browserLangs) {
      const short = lang.toLowerCase().split("-")[0];
      const match = localeConfigs.find((l) => l.code === short);
      if (match && match.code !== locale) {
        // Synchronizing with an external system (navigator.language / cookies) detected once on mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDetected(match);
        setVisible(true);
        break;
      }
    }
  }, [locale]);

  function handleSwitch() {
    if (!detected) return;
    setCookie(CHOICE_COOKIE, detected.code, 365);
    setVisible(false);
    router.replace(pathname, { locale: detected.code });
  }

  function handleContinue() {
    setCookie(CHOICE_COOKIE, locale, 365);
    setVisible(false);
  }

  function handleClose() {
    setCookie(DISMISS_COOKIE, "1", 30);
    setVisible(false);
  }

  const currentConfig = localeConfigs.find((l) => l.code === locale);

  return (
    <>
      {mounted && detected && (
        <div
          className={cn(
            "fixed z-[60] bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-96 duration-250",
            closing ? "animate-out fade-out slide-out-to-bottom-6 zoom-out-96 fill-mode-forwards ease-[cubic-bezier(0.22,1,0.36,1)]" : "animate-in fade-in slide-in-from-bottom-6 zoom-in-96 ease-[cubic-bezier(0.22,1,0.36,1)]"
          )}
          role="dialog"
          aria-labelledby={titleId}
          aria-live="polite"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 pt-8">
            <button
              onClick={handleClose}
              aria-label={t("closeAria")}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-charcoal/40 hover:text-charcoal hover:bg-cream transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-gold" />
              </div>
              <h2 id={titleId} className="font-heading font-bold text-navy text-base leading-snug">
                {t("title")}
              </h2>
            </div>

            <p className="text-charcoal/70 text-sm leading-relaxed mb-5">
              {t("message", { language: detected.englishName })}
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleSwitch}
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-navy text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>{detected.flag}</span>
                {t("switchTo", { language: detected.nativeName })}
              </button>
              <button
                onClick={handleContinue}
                className="text-center text-sm font-medium text-charcoal/70 hover:text-navy px-5 py-2.5 rounded-full transition-colors"
              >
                {t("continueIn", { language: currentConfig?.nativeName ?? locale })}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
