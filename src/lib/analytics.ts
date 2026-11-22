/**
 * Google Tag Manager helpers.
 *
 * Google Analytics (G-KCLJR5CQ84) is configured inside the GTM container,
 * not in this code — see docs/manual-setup-checklist.md. Loading GA here as
 * well would count every visit twice.
 */

const DEFAULT_GTM_ID = "GTM-T44V5578";
const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

function resolveGtmId(): string | null {
  const id = (process.env.NEXT_PUBLIC_GTM_ID ?? DEFAULT_GTM_ID).trim();
  // The ID is inserted into an inline script, so only accept the GTM format.
  return GTM_ID_PATTERN.test(id) ? id : null;
}

export const GTM_ID = resolveGtmId();

/** GTM loads only in production builds, so local development stays out of the reports. */
export const GTM_ENABLED = process.env.NODE_ENV === "production" && GTM_ID !== null;

type DataLayerEvent = { event: string } & Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/** Push an event to the GTM data layer. Never include personal data (name, email, phone, message). */
export function trackEvent(payload: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}
