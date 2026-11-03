"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

export function RevealObserver() {
  const pathname = usePathname();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    document
      .querySelectorAll("[data-reveal]:not(.is-in)")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
