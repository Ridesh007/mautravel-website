"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PlayCircle, Maximize2, X } from "lucide-react";

interface Props {
  videoSrc?: string;
  posterSrc?: string;
  comingSoonLabel: string;
  tapHintLabel: string;
  expandAria: string;
  closeAria: string;
}

/** Preview plays muted + cropped (cover) once ~50% visible, pauses when scrolled out of view.
 *  Tapping it opens the original vertical video, uncropped, in a fullscreen modal.
 *  Falls back to a "coming soon" placeholder until a real videoSrc is supplied. */
export function ActivityVideoSection({ videoSrc, posterSrc, comingSoonLabel, tapHintLabel, expandAria, closeAria }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const inViewRef = useRef(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!videoSrc) return;
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        const preview = previewRef.current;
        if (!preview || modalOpen) return;
        if (entry.isIntersecting) {
          preview.play().catch(() => {});
        } else {
          preview.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(container);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSrc]);

  useEffect(() => {
    if (!modalOpen) return;

    const preview = previewRef.current;
    preview?.pause();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      if (inViewRef.current) preview?.play().catch(() => {});
    };
  }, [modalOpen]);

  return (
    <div ref={containerRef} className="relative aspect-video rounded-3xl overflow-hidden bg-navy/5 border border-navy/10 flex items-center justify-center">
      {videoSrc ? (
        <>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            aria-label={expandAria}
            className="group absolute inset-0 w-full h-full"
          >
            <video
              ref={previewRef}
              src={videoSrc}
              poster={posterSrc}
              muted
              playsInline
              loop
              preload="metadata"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg opacity-90 group-hover:scale-110 transition-transform duration-300">
                <Maximize2 className="w-6 h-6 text-navy" />
              </div>
            </div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
              {tapHintLabel}
            </span>
          </button>

          {modalOpen &&
            createPortal(
              <div
                className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4"
                onClick={() => setModalOpen(false)}
                role="dialog"
                aria-modal="true"
              >
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label={closeAria}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
                <video
                  src={videoSrc}
                  autoPlay
                  playsInline
                  controls
                  className="max-h-[85vh] sm:max-h-[90vh] max-w-full w-auto h-auto object-contain rounded-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>,
              document.body
            )}
        </>
      ) : (
        <div className="flex flex-col items-center gap-3 text-center px-6">
          <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center">
            <PlayCircle className="w-7 h-7 text-navy/40" />
          </div>
          <p className="text-charcoal/50 text-sm font-medium">{comingSoonLabel}</p>
        </div>
      )}
    </div>
  );
}
