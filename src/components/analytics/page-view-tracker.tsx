"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

import { trackEvent } from "@/lib/analytics";

/**
 * Pages change without a full reload, so GTM only sees the first page by
 * itself. This pushes `virtual_pageview` on every later page change.
 * The first page view is handled by the Google Tag in GTM.
 */
export function PageViewTracker() {
  const pathname = usePathname();
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Wait a frame so document.title reflects the new page's metadata.
    const frame = window.requestAnimationFrame(() => {
      trackEvent({
        event: "virtual_pageview",
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
