import type { MetadataRoute } from "next";
import { locales, localeConfigs, defaultLocale } from "@/i18n/locales";
import { SITE_URL } from "@/i18n/seo";
import { ACTIVITIES } from "@/lib/constants";

const STATIC_PATHS = [
  "",
  "/airport-transfers",
  "/tours",
  "/mauritius-holiday-package",
  "/activities",
  "/car-rental",
  "/events",
  "/reviews",
  "/contact",
  "/faqs",
  "/privacy-policy",
  "/terms",
  "/properties",
];

const ACTIVITY_PATHS = ACTIVITIES.map((a) => `/activities/${a.slug}`);

const ALL_PATHS = [...STATIC_PATHS, ...ACTIVITY_PATHS];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of ALL_PATHS) {
    const languages: Record<string, string> = {};
    for (const l of localeConfigs) {
      languages[l.tag] = `${SITE_URL}/${l.code}${path}`;
    }
    languages["x-default"] = `${SITE_URL}/${defaultLocale}${path}`;

    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.startsWith("/activities/") ? 0.7 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
