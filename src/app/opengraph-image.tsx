import { ImageResponse } from "next/og";
import { site } from "@/content/profile";

// Social preview card — shown when the link is shared on LinkedIn, WhatsApp,
// X, Slack, etc. Generated at build time.
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
          background: "#FAF8F4",
          padding: "72px 80px",
          borderTop: "16px solid #B8401F",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#6E6C65",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {site.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#1A1A18",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: -3,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              color: "#9B3419",
              fontSize: 34,
              marginTop: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {site.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            borderTop: "1px solid #DDD9CF",
            paddingTop: 28,
          }}
        >
          {["CI/CD", "Terraform", "Kubernetes", "AWS", "Observability"].map((tag) => (
            <div
              key={tag}
              style={{
                color: "#45443F",
                fontSize: 22,
                padding: "8px 18px",
                border: "1px solid #DDD9CF",
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
