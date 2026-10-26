"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  titleId: string;
  closing: boolean;
  onClose: () => void;
  closeLabel: string;
  /** Width from the `sm` breakpoint up, e.g. "sm:w-96" */
  widthClass: string;
  children: React.ReactNode;
}

/**
 * Bottom-left floating card used by the site's promotional popups. Non-modal: it never
 * takes focus. On phones it sits above the WhatsApp button rather than over it, and
 * scrolls internally if the copy is taller than the space available.
 */
export function PromoPopupShell({ titleId, closing, onClose, closeLabel, widthClass, children }: Props) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (closing) return;
    const onKey = (e: KeyboardEvent) => {
      // Leave Escape to an open modal (e.g. a video lightbox) if there is one.
      if (e.key !== "Escape" || document.querySelector('[aria-modal="true"]')) return;
      onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closing]);

  return (
    <div
      className={cn(
        "fixed z-[60] bottom-24 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 duration-300 motion-reduce:duration-0",
        widthClass,
        closing ? "animate-out fade-out slide-out-to-bottom-6 zoom-out-96 fill-mode-forwards ease-[cubic-bezier(0.22,1,0.36,1)]" : "animate-in fade-in slide-in-from-bottom-6 zoom-in-96 ease-[cubic-bezier(0.22,1,0.36,1)]"
      )}
      role="dialog"
      aria-labelledby={titleId}
      aria-live="polite"
    >
      <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute z-10 top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-charcoal/40 hover:text-charcoal hover:bg-cream focus-visible:outline-2 focus-visible:outline-gold transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="p-6 pt-8 max-h-[calc(100dvh-11rem)] sm:max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain">
          {children}
        </div>
      </div>
    </div>
  );
}
