"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, Plus, Minus, ChevronDown, Search, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const TRAVELLER_TYPE_IDS = ["solo", "couple", "family", "friends", "group"];
const DURATION_IDS = ["5", "7", "10", "14", "custom"];
const HOLIDAY_STYLE_IDS = ["adventure", "nature", "beaches", "culture", "wildlife", "relaxation", "everything"];
const ACCOMMODATION_IDS = ["booked", "help", "undecided"];
const TRANSFER_IDS = ["yes", "no", "unsure"];

const FIELD_LABEL = "text-xs font-medium text-charcoal/60 mb-2 block";

function formatDate(value: string): string {
  if (!value) return "";
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function toggleIn(list: string[], id: string): string[] {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
}

function GroupHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={cn("text-xs font-bold uppercase tracking-widest text-navy/40 mb-5 pb-2 border-b border-navy/10", className)}>
      {children}
    </h4>
  );
}

function Pill({
  type,
  name,
  checked,
  onChange,
  label,
}: {
  type: "radio" | "checkbox";
  name?: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-1.5 cursor-pointer select-none rounded-full border px-4 py-2.5 md:py-2 text-sm font-medium transition-colors",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold has-[:focus-visible]:ring-offset-2",
        checked ? "border-gold bg-gold/10 text-navy" : "border-navy/15 text-navy/70 hover:border-navy/30"
      )}
    >
      <input type={type} name={name} checked={checked} onChange={onChange} className="sr-only" />
      {checked && <Check className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />}
      {label}
    </label>
  );
}

function Counter({
  label,
  value,
  min,
  max,
  onDecrease,
  onIncrease,
  decreaseLabel,
  increaseLabel,
}: {
  label: string;
  value: number;
  min: number;
  max?: number;
  onDecrease: () => void;
  onIncrease: () => void;
  decreaseLabel: string;
  increaseLabel: string;
}) {
  return (
    <div>
      <span className={FIELD_LABEL}>{label}</span>
      <div className="inline-flex items-center gap-3 border border-navy/15 rounded-xl px-2 py-1.5">
        <button
          type="button"
          onClick={onDecrease}
          disabled={value <= min}
          aria-label={decreaseLabel}
          className="w-10 h-10 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-navy hover:bg-cream disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-6 text-center font-semibold text-navy tabular-nums" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={onIncrease}
          disabled={max !== undefined && value >= max}
          aria-label={increaseLabel}
          className="w-10 h-10 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-navy hover:bg-cream disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

interface Option {
  id: string;
  label: string;
}

function DestinationSelect({
  options,
  selected,
  onToggle,
  onRemove,
  label,
  placeholder,
  searchPlaceholder,
  noResultsLabel,
  removeLabel,
}: {
  options: Option[];
  selected: string[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  label: string;
  placeholder: string;
  searchPlaceholder: string;
  noResultsLabel: string;
  removeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  const selectedOptions = options.filter((o) => selected.includes(o.id));

  return (
    <div>
      <span className={FIELD_LABEL}>{label}</span>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className="w-full flex items-center justify-between gap-2 border border-navy/15 rounded-xl px-4 py-3 md:py-2.5 text-sm text-left bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <span className={selected.length ? "text-navy" : "text-charcoal/40"}>
            {selected.length ? `${selected.length} / ${options.length}` : placeholder}
          </span>
          <ChevronDown className={cn("w-4 h-4 text-navy/50 transition-transform shrink-0", open && "rotate-180")} />
        </button>

        {open && (
          <div className="absolute z-20 mt-2 w-full bg-white border border-navy/10 rounded-xl shadow-lg overflow-hidden">
            <div className="p-2 border-b border-navy/10">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  autoFocus
                  className="w-full pl-8 pr-3 py-2 text-sm border border-navy/10 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>
            </div>
            <div className="max-h-56 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <p className="px-4 py-3 text-sm text-charcoal/40">{noResultsLabel}</p>
              ) : (
                filtered.map((o) => (
                  <label
                    key={o.id}
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-navy hover:bg-cream cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(o.id)}
                      onChange={() => onToggle(o.id)}
                      className="w-4 h-4 rounded border-navy/30 accent-gold focus-visible:ring-2 focus-visible:ring-gold"
                    />
                    {o.label}
                  </label>
                ))
              )}
            </div>
          </div>
        )}

        {selectedOptions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {selectedOptions.map((o) => (
              <span
                key={o.id}
                className="inline-flex items-center gap-1.5 bg-cream text-navy text-xs font-medium rounded-full pl-3 pr-1.5 py-1.5"
              >
                {o.label}
                <button
                  type="button"
                  onClick={() => onRemove(o.id)}
                  aria-label={`${removeLabel} ${o.label}`}
                  className="w-6 h-6 md:w-4 md:h-4 rounded-full hover:bg-navy/10 flex items-center justify-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <X className="w-3.5 h-3.5 md:w-3 md:h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function CustomizeHolidayForm() {
  const t = useTranslations("mauritiusPackage");

  const DESTINATIONS: Option[] = [
    { id: "pamplemousses", label: t("discover.north.items.pamplemousses.name") },
    { id: "portLouis", label: t("discover.north.items.portLouis.name") },
    { id: "grandBaie", label: t("discover.north.items.grandBaie.name") },
    { id: "capMalheureux", label: t("discover.north.items.capMalheureux.name") },
    { id: "blackRiverGorges", label: t("discover.south.items.blackRiverGorges.name") },
    { id: "alexandraFalls", label: t("discover.south.items.alexandraFalls.name") },
    { id: "valleeDesCouleurs", label: t("discover.south.items.valleeDesCouleurs.name") },
    { id: "laVanille", label: t("discover.south.items.laVanille.name") },
    { id: "casela", label: t("customizeForm.destinations.casela") },
    { id: "flicEnFlac", label: t("customizeForm.destinations.flicEnFlac") },
    { id: "ileAuxCerfs", label: t("water.items.ileAuxCerfs.name") },
    { id: "grseWaterfall", label: t("water.items.grseWaterfall.name") },
  ];

  const ACTIVITIES: Option[] = [
    { id: "paragliding", label: t("adventure.items.paragliding.name") },
    { id: "parasailing", label: t("adventure.items.parasailing.name") },
    { id: "dolphinWatching", label: t("adventure.items.dolphinWatching.name") },
    { id: "underseaWalk", label: t("adventure.items.underseaWalk.name") },
    { id: "quadBiking", label: t("adventure.items.quadBiking.name") },
    { id: "waterfallTrekking", label: t("adventure.items.waterfallTrekking.name") },
    { id: "snorkelling", label: t("water.items.snorkelling.name") },
    { id: "catamaran", label: t("water.items.catamaran.name") },
  ];

  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [travellerType, setTravellerType] = useState("");
  const [duration, setDuration] = useState("");
  const [customDays, setCustomDays] = useState("");
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [accommodation, setAccommodation] = useState("");
  const [transfers, setTransfers] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [error, setError] = useState<string | null>(null);

  function buildMessage(): string {
    const blocks: string[] = [`${t("customizeForm.message.greeting")}\n\n${t("customizeForm.message.intro")}`];

    const tripLines: string[] = [];
    if (arrivalDate) tripLines.push(`${t("customizeForm.message.arrival")}: ${formatDate(arrivalDate)}`);
    if (departureDate) tripLines.push(`${t("customizeForm.message.departure")}: ${formatDate(departureDate)}`);
    if (duration) {
      const stayValue =
        duration === "custom"
          ? customDays
            ? `${customDays} ${t("customizeForm.duration.daysUnit")}`
            : t("customizeForm.duration.options.custom")
          : t(`customizeForm.duration.options.${duration}`);
      tripLines.push(`${t("customizeForm.message.stay")}: ${stayValue}`);
    }
    if (tripLines.length) blocks.push(`${t("customizeForm.message.tripDetails")}\n${tripLines.join("\n")}`);

    const travellerLines = [
      `${t("customizeForm.message.adults")}: ${adults}`,
      `${t("customizeForm.message.children")}: ${children}`,
    ];
    if (travellerType) {
      travellerLines.push(
        `${t("customizeForm.message.travellingAs")}: ${t(`customizeForm.travellerType.options.${travellerType}`)}`
      );
    }
    blocks.push(`${t("customizeForm.message.travellersHeading")}\n${travellerLines.join("\n")}`);

    if (selectedDestinations.length) {
      const lines = selectedDestinations.map((id) => `• ${DESTINATIONS.find((d) => d.id === id)?.label}`);
      blocks.push(`${t("customizeForm.message.placesHeading")}\n${lines.join("\n")}`);
    }

    if (selectedActivities.length) {
      const lines = selectedActivities.map((id) => `• ${ACTIVITIES.find((a) => a.id === id)?.label}`);
      blocks.push(`${t("customizeForm.message.activitiesHeading")}\n${lines.join("\n")}`);
    }

    if (selectedStyles.length) {
      const lines = selectedStyles.map((id) => `• ${t(`customizeForm.holidayStyle.options.${id}`)}`);
      blocks.push(`${t("customizeForm.message.styleHeading")}\n${lines.join("\n")}`);
    }

    if (accommodation) {
      blocks.push(
        `${t("customizeForm.message.accommodationHeading")}\n${t(`customizeForm.accommodation.options.${accommodation}`)}`
      );
    }

    if (transfers) {
      blocks.push(`${t("customizeForm.message.transfersHeading")}\n${t(`customizeForm.transfers.options.${transfers}`)}`);
    }

    if (specialRequest.trim()) {
      blocks.push(`${t("customizeForm.message.specialRequestHeading")}\n${specialRequest.trim()}`);
    }

    blocks.push(t("customizeForm.message.closing"));

    return blocks.join("\n\n");
  }

  function handleSubmit() {
    const hasStayInfo = Boolean(duration || arrivalDate || departureDate);
    if (!hasStayInfo) {
      setError(t("customizeForm.validation.stayOrDates"));
      return;
    }
    setError(null);
    window.open(getWhatsAppUrl(buildMessage()), "_blank", "noopener,noreferrer");
  }

  const radioGroupClass = "flex flex-wrap gap-2";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm"
    >
      <div className="text-center mb-8 md:mb-10">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{t("customizeForm.eyebrow")}</p>
        <h3 className="font-heading text-xl md:text-2xl font-bold text-navy mb-2">{t("customizeForm.title")}</h3>
        <p className="text-charcoal/60 text-sm max-w-xl mx-auto">{t("customizeForm.description")}</p>
      </div>

      {/* Group 1 — Your Trip */}
      <GroupHeading>{t("customizeForm.groups.trip")}</GroupHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 mb-2">
        <div>
          <span className={FIELD_LABEL}>{t("customizeForm.dates.label")}</span>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="arrival-date" className="text-[11px] text-charcoal/50 mb-1 block">
                {t("customizeForm.dates.arrival")}
              </label>
              <input
                id="arrival-date"
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full border border-navy/15 rounded-xl px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-gold [color-scheme:light]"
              />
            </div>
            <div>
              <label htmlFor="departure-date" className="text-[11px] text-charcoal/50 mb-1 block">
                {t("customizeForm.dates.departure")}
              </label>
              <input
                id="departure-date"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full border border-navy/15 rounded-xl px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-gold [color-scheme:light]"
              />
            </div>
          </div>
        </div>

        <div>
          <span className={FIELD_LABEL}>{t("customizeForm.travellers.label")}</span>
          <div className="grid grid-cols-2 gap-3">
            <Counter
              label={t("customizeForm.travellers.adults")}
              value={adults}
              min={1}
              onDecrease={() => setAdults((v) => Math.max(1, v - 1))}
              onIncrease={() => setAdults((v) => v + 1)}
              decreaseLabel={t("customizeForm.travellers.decreaseAdults")}
              increaseLabel={t("customizeForm.travellers.increaseAdults")}
            />
            <Counter
              label={t("customizeForm.travellers.children")}
              value={children}
              min={0}
              onDecrease={() => setChildren((v) => Math.max(0, v - 1))}
              onIncrease={() => setChildren((v) => v + 1)}
              decreaseLabel={t("customizeForm.travellers.decreaseChildren")}
              increaseLabel={t("customizeForm.travellers.increaseChildren")}
            />
          </div>
        </div>

        <div>
          <span className={FIELD_LABEL}>{t("customizeForm.travellerType.label")}</span>
          <div role="radiogroup" aria-label={t("customizeForm.travellerType.label")} className={radioGroupClass}>
            {TRAVELLER_TYPE_IDS.map((id) => (
              <Pill
                key={id}
                type="radio"
                name="travellerType"
                checked={travellerType === id}
                onChange={() => setTravellerType(id)}
                label={t(`customizeForm.travellerType.options.${id}`)}
              />
            ))}
          </div>
        </div>

        <div>
          <span className={FIELD_LABEL}>{t("customizeForm.duration.label")}</span>
          <div role="radiogroup" aria-label={t("customizeForm.duration.label")} className={radioGroupClass}>
            {DURATION_IDS.map((id) => (
              <Pill
                key={id}
                type="radio"
                name="duration"
                checked={duration === id}
                onChange={() => setDuration(id)}
                label={t(`customizeForm.duration.options.${id}`)}
              />
            ))}
          </div>
          {duration === "custom" && (
            <div className="mt-3">
              <label htmlFor="custom-days" className="text-[11px] text-charcoal/50 mb-1 block">
                {t("customizeForm.duration.customLabel")}
              </label>
              <input
                id="custom-days"
                type="number"
                min={1}
                value={customDays}
                onChange={(e) => setCustomDays(e.target.value)}
                className="w-24 border border-navy/15 rounded-xl px-3 py-2.5 md:py-2 text-sm text-navy focus:outline-none focus:border-gold"
              />
            </div>
          )}
        </div>
      </div>

      {error && (
        <p role="alert" className="text-red-600 text-xs mt-4">
          {error}
        </p>
      )}

      {/* Group 2 — Your Experiences */}
      <GroupHeading className="mt-9">{t("customizeForm.groups.experiences")}</GroupHeading>
      <div className="space-y-7 mb-2">
        <DestinationSelect
          options={DESTINATIONS}
          selected={selectedDestinations}
          onToggle={(id) => setSelectedDestinations((v) => toggleIn(v, id))}
          onRemove={(id) => setSelectedDestinations((v) => v.filter((x) => x !== id))}
          label={t("customizeForm.destinations.label")}
          placeholder={t("customizeForm.destinations.placeholder")}
          searchPlaceholder={t("customizeForm.destinations.searchPlaceholder")}
          noResultsLabel={t("customizeForm.destinations.noResults")}
          removeLabel={t("customizeForm.destinations.remove")}
        />

        <div>
          <span className={FIELD_LABEL}>{t("customizeForm.activities.label")}</span>
          <div role="group" aria-label={t("customizeForm.activities.label")} className={radioGroupClass}>
            {ACTIVITIES.map((a) => (
              <Pill
                key={a.id}
                type="checkbox"
                checked={selectedActivities.includes(a.id)}
                onChange={() => setSelectedActivities((v) => toggleIn(v, a.id))}
                label={a.label}
              />
            ))}
          </div>
        </div>

        <div>
          <span className={FIELD_LABEL}>{t("customizeForm.holidayStyle.label")}</span>
          <div role="group" aria-label={t("customizeForm.holidayStyle.label")} className={radioGroupClass}>
            {HOLIDAY_STYLE_IDS.map((id) => (
              <Pill
                key={id}
                type="checkbox"
                checked={selectedStyles.includes(id)}
                onChange={() => setSelectedStyles((v) => toggleIn(v, id))}
                label={t(`customizeForm.holidayStyle.options.${id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Group 3 — Final Details */}
      <GroupHeading className="mt-9">{t("customizeForm.groups.final")}</GroupHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 mb-8">
        <div>
          <span className={FIELD_LABEL}>{t("customizeForm.accommodation.label")}</span>
          <div role="radiogroup" aria-label={t("customizeForm.accommodation.label")} className={radioGroupClass}>
            {ACCOMMODATION_IDS.map((id) => (
              <Pill
                key={id}
                type="radio"
                name="accommodation"
                checked={accommodation === id}
                onChange={() => setAccommodation(id)}
                label={t(`customizeForm.accommodation.options.${id}`)}
              />
            ))}
          </div>
        </div>

        <div>
          <span className={FIELD_LABEL}>{t("customizeForm.transfers.label")}</span>
          <div role="radiogroup" aria-label={t("customizeForm.transfers.label")} className={radioGroupClass}>
            {TRANSFER_IDS.map((id) => (
              <Pill
                key={id}
                type="radio"
                name="transfers"
                checked={transfers === id}
                onChange={() => setTransfers(id)}
                label={t(`customizeForm.transfers.options.${id}`)}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="special-request" className={FIELD_LABEL}>
            {t("customizeForm.specialRequests.label")}
          </label>
          <textarea
            id="special-request"
            rows={3}
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            placeholder={t("customizeForm.specialRequests.placeholder")}
            className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-charcoal/35 focus:outline-none focus:border-gold resize-none"
          />
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-base"
        >
          <MessageCircle className="w-5 h-5" />
          {t("customizeForm.submit")}
        </button>
        <p className="text-charcoal/50 text-xs mt-4 max-w-md mx-auto">{t("customizeForm.submitNote")}</p>
      </div>
    </form>
  );
}
