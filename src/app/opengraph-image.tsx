import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";

export const alt = "Yogesh Pokale — Full-stack developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c0a09", // stone-950 dark theme color
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: "20px",
            color: "#fbbf24", // primary amber text
            fontWeight: "bold",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
            fontFamily: "monospace",
          }}
        >
          Portfolio Archive
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            color: "#fafaf9", // foreground light color
            fontWeight: "bold",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}
        >
          {site.name}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "30px",
            color: "#a8a29e", // muted text
            maxWidth: "900px",
            lineHeight: "1.4",
          }}
        >
          {site.tagline}
        </div>

        {/* Brand signature */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            fontSize: "18px",
            color: "#a8a29e",
            fontFamily: "monospace",
          }}
        >
          yogeshcrafts.in
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
