import React, { useEffect } from "react";
import Background from "../../components/Background/Background";
import Gate from "../../components/Gate";
import man from "../../assets/man.png";
import woman from "../../assets/woman.png";
import aos from "aos";

import "./couple.css";

export default function Couple() {
  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  }, []);

  return (
    <Background>
      <Gate />
      <div className="couple-container">
        <div className="man-img">
          <img alt="" src={man} className="couple-img" data-aos="fade-down" />
          <p className="couple-name" data-aos="fade-right">
            Pria
          </p>
          <p className="couple-title" data-aos="fade-left">
            Putra dari Bapak Mempelai Pria
            <br />& Ibu Mempelai Pria
          </p>
        </div>
        <div>
          <p className="couple-name symbol" data-aos="zoom-in">
            &
          </p>
        </div>
        <div className="woman-img">
          <img alt="" src={woman} className="couple-img" data-aos="fade-up" />
          <p className="couple-name" data-aos="fade-right">
            Wanita
          </p>
          <p className="couple-title" data-aos="fade-left">
            Putri dari Bapak Mempelai Wanita
            <br />& Ibu Mempelai Wanita
          </p>
        </div>
      </div>
    </Background>
  );
}
