"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * Global next/image loader (wired up via `images.loaderFile` in next.config.ts).
 *
 * Unsplash is served by imgix, which resizes and re-encodes on the fly, so every
 * Unsplash `src` gets the exact width next/image picked from `sizes` plus
 * `auto=format` (AVIF/WebP where the browser supports it). This replaces the
 * hard-coded `w=1920`/`w=800` URLs that were being sent to every device.
 *
 * All other sources (local /public files, Wikimedia) are returned unchanged —
 * the same behaviour as the previous `images.unoptimized: true` setting.
 * Local homepage images are pre-sized WebP files, so they need no resizing.
 */
export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", url.searchParams.get("fit") ?? "crop");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 80));
    return url.href;
  }
  return src;
}
