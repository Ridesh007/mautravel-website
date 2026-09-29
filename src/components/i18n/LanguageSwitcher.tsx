"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Search, Check } from "lucide-react";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeConfigs } from "@/i18n/locales";
import { cn } from "@/lib/utils";
import { usePresence } from "@/lib/use-presence";

// Loaded on first open only — keeps @base-ui/react out of every page's initial JS.
const LanguageSheet = dynamic(() => import("./LanguageSheet"), { ssr: false });

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LanguageSwitcher({ variant = "dark", className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const t = useTranslations("switcher");
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Once the sheet has been opened, keep it mounted so its close animation can play
  const [sheetRequested, setSheetRequested] = useState(false);
  const { mounted: dropdownMounted, closing: dropdownClosing } = usePresence(open, 150);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const current = localeConfigs.find((l) => l.code === locale) ?? localeConfigs[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return localeConfigs;
    return localeConfigs.filter(
      (l) =>
        l.nativeName.toLowerCase().includes(q) ||
        l.englishName.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function switchTo(code: string) {
    router.replace(pathname, { locale: code });
    setOpen(false);
    setMobileOpen(false);
    setQuery("");
  }

  const triggerClasses = cn(
    "flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
    variant === "light"
      ? "text-white/90 hover:text-white hover:bg-white/10"
      : "text-charcoal hover:text-navy hover:bg-navy/5"
  );

  const list = (onSelect: (code: string) => void) => (
    <div className="flex flex-col">
      <div className="relative px-3 pt-1 pb-2">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition"
        />
      </div>
      <div className="max-h-72 overflow-y-auto px-2 pb-2">
        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-400 py-6">{t("noResults")}</p>
        )}
        {filtered.map((l) => (
          <button
            key={l.code}
            onClick={() => onSelect(l.code)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left rtl:text-right",
              l.code === locale ? "bg-navy/5 text-navy font-semibold" : "text-charcoal hover:bg-cream"
            )}
          >
            <span className="text-lg leading-none">{l.flag}</span>
            <span className="flex-1">{l.nativeName}</span>
            {l.nativeName !== l.englishName && (
              <span className="text-xs text-gray-400">{l.englishName}</span>
            )}
            {l.code === locale && <Check className="w-4 h-4 text-gold shrink-0" />}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <div ref={containerRef} className={cn("relative hidden lg:block", className)}>
        <button
          onClick={() => setOpen((v) => !v)}
          className={triggerClasses}
          aria-label={t("ariaLabel")}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <Globe className="w-4 h-4" />
          <span>{current.flag}</span>
          <span className="hidden xl:inline">{current.nativeName}</span>
        </button>
        {dropdownMounted && (
          <div
            className={cn(
              "absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 duration-150",
              dropdownClosing
                ? "animate-out fade-out slide-out-to-top-2 zoom-out-98 fill-mode-forwards"
                : "animate-in fade-in slide-in-from-top-2 zoom-in-98"
            )}
            role="listbox"
          >
            {list(switchTo)}
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className={cn("lg:hidden", className)}>
        <button
          onClick={() => {
            setSheetRequested(true);
            setMobileOpen(true);
          }}
          className={triggerClasses}
          aria-label={t("ariaLabel")}
        >
          <Globe className="w-4 h-4" />
          <span>{current.flag}</span>
          <span>{current.nativeName}</span>
        </button>
        {sheetRequested && (
          <LanguageSheet open={mobileOpen} onOpenChange={setMobileOpen} title={t("label")}>
            {list(switchTo)}
          </LanguageSheet>
        )}
      </div>
    </>
  );
}
