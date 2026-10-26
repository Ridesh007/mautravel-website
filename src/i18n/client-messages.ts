import type { AbstractIntlMessages } from "next-intl";

/**
 * Message namespaces read by Client Components ("use client" files and everything they
 * import). Only these are serialized into the page for hydration — previously the whole
 * ~500 KB locale file (incl. placeDetails/activityDetails, read only on the server) was
 * embedded in every HTML document and every RSC prefetch.
 *
 * If a Client Component starts reading a new namespace, add it here (or pass it through a
 * nested <NextIntlClientProvider> on the page that needs it, as the holiday-package page does).
 */
export const CLIENT_NAMESPACES = [
  "nav",
  "common",
  "popup",
  "switcher",
  "holidayPopup",
  "tripKindlyPopup",
  "forms",
  "home",
  "reviews",
  "activities",
  "faqs",
] as const;

export function pickMessages(
  messages: AbstractIntlMessages,
  namespaces: readonly string[]
): AbstractIntlMessages {
  const picked: AbstractIntlMessages = {};
  for (const ns of namespaces) {
    if (ns in messages) picked[ns] = messages[ns];
  }
  return picked;
}
