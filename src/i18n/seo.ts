import { localeConfigs, defaultLocale } from "./locales";

export const SITE_URL = "https://www.mautravel.com";

/**
 * Builds the `alternates` block (canonical + hreflang) for a given locale/path.
 * `path` should start with "/" and exclude the locale segment, e.g. "/airport-transfers" or "" for home.
 */
export function buildAlternates(locale: string, path: string = "") {
  const cleanPath = path === "/" ? "" : path;
  const languages: Record<string, string> = {};
  for (const l of localeConfigs) {
    languages[l.tag] = `${SITE_URL}/${l.code}${cleanPath}`;
  }
  languages["x-default"] = `${SITE_URL}/${defaultLocale}${cleanPath}`;

  return {
    canonical: `${SITE_URL}/${locale}${cleanPath}`,
    languages,
  };
}

/** og:locale value, e.g. "fr_FR" style expected by Open Graph. */
export function ogLocale(locale: string): string {
  const map: Record<string, string> = {
    en: "en_GB",
    fr: "fr_FR",
    de: "de_DE",
    it: "it_IT",
    es: "es_ES",
    nl: "nl_NL",
    pt: "pt_PT",
    zh: "zh_CN",
    ja: "ja_JP",
    ko: "ko_KR",
    hi: "hi_IN",
    ru: "ru_RU",
    ar: "ar_AE",
    tr: "tr_TR",
    pl: "pl_PL",
    cs: "cs_CZ",
  };
  return map[locale] ?? "en_GB";
}

export function ogLocaleAlternates(locale: string): string[] {
  return localeConfigs.filter((l) => l.code !== locale).map((l) => ogLocale(l.code));
}
