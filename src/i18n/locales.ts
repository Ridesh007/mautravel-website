/**
 * Single source of truth for supported locales.
 * To add a new language: add an entry here, then create messages/<code>.json.
 * Nothing else needs to change — routing, the switcher, the popup, sitemap
 * and hreflang all derive from this list.
 */
export interface LocaleConfig {
  code: string;
  /** Name of the language written in English, e.g. "French" */
  englishName: string;
  /** Name of the language written in itself, e.g. "Français" */
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
  /** BCP 47 tag used for hreflang / og:locale / html lang */
  tag: string;
  tier: 1 | 2 | 3 | 4;
}

export const localeConfigs: LocaleConfig[] = [
  // Tier 1
  { code: "en", englishName: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr", tag: "en", tier: 1 },
  { code: "fr", englishName: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr", tag: "fr", tier: 1 },
  { code: "de", englishName: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr", tag: "de", tier: 1 },
  // Tier 2
  { code: "it", englishName: "Italian", nativeName: "Italiano", flag: "🇮🇹", dir: "ltr", tag: "it", tier: 2 },
  { code: "es", englishName: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr", tag: "es", tier: 2 },
  { code: "nl", englishName: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", dir: "ltr", tag: "nl", tier: 2 },
  { code: "pt", englishName: "Portuguese", nativeName: "Português", flag: "🇵🇹", dir: "ltr", tag: "pt", tier: 2 },
  // Tier 3
  { code: "zh", englishName: "Chinese", nativeName: "中文", flag: "🇨🇳", dir: "ltr", tag: "zh-CN", tier: 3 },
  { code: "ja", englishName: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr", tag: "ja", tier: 3 },
  { code: "ko", englishName: "Korean", nativeName: "한국어", flag: "🇰🇷", dir: "ltr", tag: "ko", tier: 3 },
  // Tier 4
  { code: "hi", englishName: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr", tag: "hi", tier: 4 },
  { code: "ru", englishName: "Russian", nativeName: "Русский", flag: "🇷🇺", dir: "ltr", tag: "ru", tier: 4 },
  { code: "ar", englishName: "Arabic", nativeName: "العربية", flag: "🇦🇪", dir: "rtl", tag: "ar", tier: 4 },
  { code: "tr", englishName: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", dir: "ltr", tag: "tr", tier: 4 },
  { code: "pl", englishName: "Polish", nativeName: "Polski", flag: "🇵🇱", dir: "ltr", tag: "pl", tier: 4 },
  { code: "cs", englishName: "Czech", nativeName: "Čeština", flag: "🇨🇿", dir: "ltr", tag: "cs", tier: 4 },
];

export const locales = localeConfigs.map((l) => l.code) as [string, ...string[]];
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Locales with full, publication-quality long-form content (activity/tour/FAQ copy). */
export const fullContentLocales: Locale[] = ["en", "fr", "de"];

export function getLocaleConfig(code: string): LocaleConfig {
  return localeConfigs.find((l) => l.code === code) ?? localeConfigs[0];
}

export function isRtl(code: string): boolean {
  return getLocaleConfig(code).dir === "rtl";
}
