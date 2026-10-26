"use client";

import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface QuoteFormProps {
  defaultService?: string;
}

export function QuoteForm({ defaultService = "" }: QuoteFormProps) {
  const t = useTranslations("forms");
  const tc = useTranslations("common");
  // Ties each <label> to its field so screen readers announce the field name
  const id = useId();
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: defaultService,
    date: "",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi MauTravel! I'd like to request a quote.
Name: ${form.name}
Email: ${form.email}
Service: ${form.service}
Date: ${form.date}
Guests: ${form.guests}
Message: ${form.message}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${id}-name`} className="block text-sm font-medium text-navy mb-1.5">{t("fullName")} *</label>
          <input
            id={`${id}-name`}
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition"
            placeholder={t("fullNamePlaceholder")}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="block text-sm font-medium text-navy mb-1.5">{t("email")} *</label>
          <input
            id={`${id}-email`}
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition"
            placeholder={t("emailPlaceholder")}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${id}-service`} className="block text-sm font-medium text-navy mb-1.5">{t("service")}</label>
          <select
            id={`${id}-service`}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition bg-white"
          >
            <option value="">{t("selectService")}</option>
            <option>{t("serviceAirportTransfer")}</option>
            <option>{t("servicePrivateTour")}</option>
            <option>{t("serviceActivity")}</option>
            <option>{t("serviceCarRental")}</option>
            <option>{t("serviceProperty")}</option>
            <option>{t("serviceHolidayPackage")}</option>
            <option>{t("serviceOther")}</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-guests`} className="block text-sm font-medium text-navy mb-1.5">{t("numberOfGuests")}</label>
          <select
            id={`${id}-guests`}
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition bg-white"
          >
            {["1", "2", "3", "4", "5–8", "9–15", "15+"].map((v) => (
              <option key={v} value={v}>{v} {parseInt(v) === 1 ? tc("guest") : tc("guestsPlural")}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-date`} className="block text-sm font-medium text-navy mb-1.5">{t("travelDate")}</label>
        <input
          id={`${id}-date`}
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition"
        />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="block text-sm font-medium text-navy mb-1.5">{t("additionalDetails")}</label>
        <textarea
          id={`${id}-message`}
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition resize-none"
          placeholder={t("additionalDetailsPlaceholder")}
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <Send className="w-4 h-4" />
        {t("sendViaWhatsapp")}
      </button>
      <p className="text-xs text-center text-gray-400">
        {t("disclaimer")}
      </p>
    </form>
  );
}
