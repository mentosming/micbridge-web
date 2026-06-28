import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MicBridge";

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
          padding: "90px",
          background: "linear-gradient(135deg, #1e7aff 0%, #0a6bf4 60%, #0a5fd0 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "rgba(255,255,255,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* simple mic glyph drawn with divs (no font needed) */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 30, height: 46, borderRadius: 16, background: "white" }} />
              <div style={{ width: 44, height: 12, borderRadius: 8, background: "rgba(255,255,255,0.85)", marginTop: 8 }} />
            </div>
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>MicBridge</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 900, letterSpacing: -1.5 }}>
          Speak on iPhone, type straight into your Mac / Windows.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.8)" }}>
          Two-way encrypted file transfer · No cloud · No account
        </div>
      </div>
    ),
    { ...size }
  );
}
