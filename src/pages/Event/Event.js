import React, { useEffect } from "react";
import Background from "../../components/Background/Background";
import Gate from "../../components/Gate";
import topImg from "../../assets/top-decoration.png";
import centerLineImg from "../../assets/center-line.png";

import "./event.css";
import aos from "aos";

export default function Event() {
  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  });

  return (
    <Background>
      <Gate />
      <div className="event-container">
        <div data-aos="fade-down">
          <img alt="" src={topImg} className="top-img mb-4" />
        </div>
        <div className="text-center" data-aos="fade-down">
          <p className="text-event mb-3">
            Insya Allah acara akan dilaksanakan:
          </p>
          <span className="event-title mb-3">Ngunduh Mantu</span>
          <div className="event-date-container mb-3" data-aos="zoom-in">
            <span className="day event-date">Sabtu</span>
            <div className="time event-date">
              <span className="date">20</span>
              <span className="years">2025</span>
            </div>
            <span className="month event-date">Desember</span>
          </div>
          <span className="time-start">Pukul 10.00 WIB - Selesai</span>
        </div>

        <div data-aos="zoom-in">
          <img
            alt=""
            src={centerLineImg}
            className="center-line-img mt-3 mb-3"
          />
        </div>
        <div className="event-location text-center" data-aos="fade-up">
          <span className="location mb-1">Lokasi Acara</span>
          <span className="house mb-1">Perkasa Jaya</span>
          <span className="street">
            Jl. Suka Makmur, No. 10, Sukadamai,
            <br />
            Tangerang
          </span>
        </div>
      </div>
    </Background>
  );
}
