import React from "react";
import BackgroundImg from "../assets/body-bg.png";
import ImgLogo from "../assets/cover.png";

export default function WarningPage() {
  const bodyBg = {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={{
        ...bodyBg,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div className="logo">
        <img
          alt=""
          src={ImgLogo}
          style={{ width: "20%", marginBottom: "20px" }}
        />
      </div>
      <div style={{ fontFamily: "Marcellus, serif" }}>
        <h2
          style={{
            fontSize: "25px",
            marginBottom: "20px",
            color: "rgb(191, 161, 92)",
          }}
        >
          Mohon maaf ...
        </h2>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: "50px",
            fontWeight: "normal",
          }}
        >
          Undangan ini hanya dapat diakses melalui handphone
          <br />
          Silahkan gunakan handphone anda untuk membuka undangan ini
        </h2>
        <h2 style={{ fontSize: "20px", color: "rgb(191, 161, 92)" }}>
          Terima Kasih
        </h2>
      </div>
    </div>
  );
}
