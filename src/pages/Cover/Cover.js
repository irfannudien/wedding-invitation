import React from "react";
import styles from "./cover.module.css";
import Button from "react-bootstrap/Button";

export default function cover() {
  return (
    <div className={styles.cover}>
      <div style={{ color: "white", justifyContent: "center" }}>
        <h1>Pria & Wanita</h1>
        <p>Kepada Bpk/Ibu/Saudara/i,</p>
        <h3>Nama tamu</h3>
        <p>Akan melangsungkan acara Ngunduh Mantu dalam:</p>
        <Button
          variant="warning"
          size="md"
          style={{ borderRadius: "100px", fontWeight: "500" }}
        >
          Lihat undangan
        </Button>
      </div>
    </div>
  );
}
