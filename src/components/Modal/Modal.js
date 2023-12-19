import aos from "aos";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Background from "../../components/Background/Background";
import ImgLogo from "../../assets/cover.png";
import { FaEnvelopeOpen } from "react-icons/fa";

import "./modal.css";

export default function Modal(props) {
  const { onModalOpen } = props;

  const [namaTamu, setNamaTamu] = useState("");

  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  }, []);

  const handleOpenLayout = () => {
    onModalOpen(); // Close the modal
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get("to");

    const decodeName = nama
      ? decodeURIComponent(nama.replace(/\+/g, ""))
      : null;

    setNamaTamu(decodeName || "Nama Tamu");
  }, [namaTamu]);

  return (
    <div className="modal-container">
      <Background />
      <div className="modal-content" data-aos="fade-up">
        <img
          alt=""
          src={ImgLogo}
          // style={{ width: "80%" }}
          className="img-logo"
        />
        <p className="welcome-text">
          Kepada Yth; <br /> Bpk/Ibu/Saudara/i,
        </p>
        <p className="visitor-text">{namaTamu}</p>
        <Button className="modal-button" onClick={handleOpenLayout}>
          <FaEnvelopeOpen style={{ marginRight: "10px" }} />
          Buka Undangan
        </Button>
      </div>
    </div>
  );
}
