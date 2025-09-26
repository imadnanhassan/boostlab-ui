import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "black",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        BoostLab
      </div>
    ),
    size
  );
}