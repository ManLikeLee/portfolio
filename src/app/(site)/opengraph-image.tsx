import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050608",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(139,92,246,0.35), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              border: "1px solid #2f3444",
              background: "#12151c",
              color: "#f4f6fb",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#8b93a7" }}>{site.name}</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#f4f6fb",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#8b93a7",
            maxWidth: 900,
          }}
        >
          Building products people actually use.
        </div>
      </div>
    ),
    { ...size }
  );
}
