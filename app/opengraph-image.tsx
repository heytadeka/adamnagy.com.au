import { ImageResponse } from "next/og";
import { loadAntonFont } from "@/lib/og-font";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const anton = await loadAntonFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(120% 130% at 78% 100%, #201206 0%, #0a0a0a 55%), #0a0a0a",
          color: "#f2efe9",
          fontFamily: "Anton",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#f4a261",
            color: "#0a0a0a",
            fontSize: 22,
            letterSpacing: "0.02em",
          }}
        >
          AN
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 92, lineHeight: 0.95, letterSpacing: "0.005em" }}>
            WHO MAKES ADS WORK?
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontFamily: "sans-serif",
              fontSize: 22,
              letterSpacing: "0.14em",
              color: "#f4a261",
            }}
          >
            <span>ADAM NAGY</span>
            <span style={{ color: "rgba(242,239,233,0.6)" }}>
              PERFORMANCE MARKETING &amp; ECOMMERCE
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, weight: 400, style: "normal" }],
    }
  );
}
