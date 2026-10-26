"use client";

import { useEffect, useSyncExternalStore } from "react";
import { usePresence } from "@/lib/use-presence";

/**
 * Floating cards (language suggestion, holiday promo, TripKindly announcement) share the
 * bottom of the screen on phones, so only one is shown at a time. A card that becomes
 * ready while another is open waits in line and appears once that one has finished its
 * exit animation.
 */
let owner: string | null = null;
const waiting: string[] = [];
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

function request(id: string) {
  if (owner === id || waiting.includes(id)) return;
  if (owner === null) owner = id;
  else waiting.push(id);
  notify();
}

function release(id: string) {
  if (owner === id) owner = waiting.shift() ?? null;
  else {
    const i = waiting.indexOf(id);
    if (i === -1) return;
    waiting.splice(i, 1);
  }
  notify();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * `usePresence` for a queued floating card: `wanted` says the card should be shown; it is
 * mounted only while it holds the slot, and keeps the slot until its exit animation ends.
 */
export function useQueuedPresence(id: string, wanted: boolean, exitMs: number) {
  const current = useSyncExternalStore(subscribe, () => owner, () => null);
  const presence = usePresence(wanted && current === id, exitMs);
  const holding = wanted || presence.mounted;

  useEffect(() => {
    if (!holding) return;
    request(id);
    return () => release(id);
  }, [id, holding]);

  return presence;
}

/**
 * True while the visitor is in the middle of something a promo card shouldn't interrupt:
 * an open modal or menu, or typing into a form field.
 */
export function isVisitorBusy(): boolean {
  if (document.querySelector('[aria-modal="true"], [data-blocks-popups], [role="dialog"][data-open]')) {
    return true;
  }
  const el = document.activeElement;
  return el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
}

/** Calls `onIdle` as soon as the visitor isn't busy, re-checking every `retryMs`. Returns a cancel function. */
export function whenVisitorIdle(onIdle: () => void, retryMs = 2000): () => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const check = () => {
    if (isVisitorBusy()) timer = setTimeout(check, retryMs);
    else onIdle();
  };
  check();
  return () => clearTimeout(timer);
}
