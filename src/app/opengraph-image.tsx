import { ImageResponse } from "next/og";
import { site } from "@/content/profile";

// Social preview card — this is what shows when the link is shared on
// LinkedIn, WhatsApp, X, Slack, etc. Generated at build time.
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #050A12 0%, #0B1220 55%, #10322F 100%)",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#0B1220",
              border: "2px solid rgba(20,184,166,0.5)",
              color: "#2DD4BF",
              fontSize: 38,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            B
          </div>
          <div style={{ color: "#5EEAD4", fontSize: 26, letterSpacing: 2 }}>
            {site.location.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div style={{ color: "#2DD4BF", fontSize: 40, marginTop: 18, fontWeight: 600 }}>
            {site.role}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {["CI/CD", "Terraform", "Kubernetes", "AWS", "Observability"].map((tag) => (
            <div
              key={tag}
              style={{
                color: "#CBD5E1",
                fontSize: 24,
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.35)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
