import { ImageResponse } from "next/og";

import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>{SITE.shortName}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {SITE.tagline}
          </div>
          <div style={{ fontSize: 30, color: "#a3a3a3" }}>
            Design · Development · DevOps
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#a3a3a3" }}>{SITE.url.replace("https://", "")}</div>
      </div>
    ),
    size,
  );
}
