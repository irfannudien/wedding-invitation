import React, { useEffect } from "react";
import Background from "../../components/Background/Background";
import Gate from "../../components/Gate";
import { Button } from "react-bootstrap";
import "./maps.css";
import aos from "aos";

export default function Location() {
  const baseURL = process.env.REACT_APP_MAPS_URL;

  const handleClick = () => {
    window.open(baseURL, "_blank");
  };

  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  }, []);

  return (
    <Background>
      <Gate />
      <div className="maps-container">
        <div className="maps" data-aos="fade-down">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31731.334648154094!2d106.51984075393386!3d-6.208623437539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fe1ed5c883c9%3A0x30fb6ae08ea7b0b6!2sSukadamai%2C%20Kec.%20Cikupa%2C%20Kabupaten%20Tangerang%2C%20Banten!5e0!3m2!1sid!2sid!4v1703031022238!5m2!1sid!2sid"
            allowFullScreen="allowfullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="false"
            className="mb-3 gmaps"
            title="Undangan"
          />
        </div>
        <div className="desc-maps" data-aos="fade-up">
          <span className="house mb-1">Perkasa Jaya</span>
          <span className="street mb-3">
            Jl. Suka Makmur, No. 10, Sukadamai,
            <br />
            Tangerang
          </span>

          <Button className="button-maps" onClick={handleClick}>
            Lihat Lokasi
          </Button>
        </div>
      </div>
    </Background>
  );
}
