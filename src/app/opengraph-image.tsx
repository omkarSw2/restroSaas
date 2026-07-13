import { ImageResponse } from "next/og";

export const alt = "techrestoPOS - High-Performance Restaurant POS & Management System";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #312e18 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "#f97316",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ display: "flex", fontSize: "44px", fontWeight: 700 }}>
            techresto<span style={{ color: "#f97316" }}>POS</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          The Ultimate Hospitality OS for Modern Restaurants
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "30px",
            color: "#cbd5e1",
          }}
        >
          Billing · Inventory · QR Ordering · Loyalty · Live Insights
        </div>
      </div>
    ),
    { ...size },
  );
}
