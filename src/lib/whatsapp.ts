export const WHATSAPP_NUMBER = "23058269725";

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getBookingUrl(service: string): string {
  return getWhatsAppUrl(`Hi MauTravel! I'd like to book: ${service}`);
}

export function getQuoteUrl(service: string): string {
  return getWhatsAppUrl(`Hi MauTravel! I'd like to request a quote for: ${service}`);
}

export const CONTACT_EMAIL = "mautravel.taxi@gmail.com";
export const CONTACT_PHONE = "+230 58269725";
