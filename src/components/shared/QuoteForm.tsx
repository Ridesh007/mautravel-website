"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface QuoteFormProps {
  defaultService?: string;
}

export function QuoteForm({ defaultService = "" }: QuoteFormProps) {
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
          <label className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Email Address *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Service</label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition bg-white"
          >
            <option value="">Select a service</option>
            <option>Airport Transfer</option>
            <option>Private Tour</option>
            <option>Activity</option>
            <option>Car Rental</option>
            <option>Property</option>
            <option>Holiday Package</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Number of Guests</label>
          <select
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition bg-white"
          >
            {["1", "2", "3", "4", "5–8", "9–15", "15+"].map((v) => (
              <option key={v} value={v}>{v} {parseInt(v) === 1 ? "guest" : "guests"}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">Travel Date</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">Additional Details</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition resize-none"
          placeholder="Tell us about your travel plans, any special requirements..."
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <Send className="w-4 h-4" />
        Send via WhatsApp
      </button>
      <p className="text-xs text-center text-gray-400">
        Your message will open in WhatsApp. We respond within 30 minutes during business hours.
      </p>
    </form>
  );
}
