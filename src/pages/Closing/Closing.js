import React, { useEffect } from "react";
import Background from "../../components/Background/Background";
import Gate from "../../components/Gate";
import "./closing.css";
import aos from "aos";

export default function Closing() {
  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  });

  return (
    <Background>
      <Gate />
      <div className="container-closing-page">
        <div className="close-text" data-aos="fade-down">
          <p className="text1">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia ini.
          </p>
        </div>
        <div className="close-text" data-aos="zoom-in">
          <span className="text2">Kami yang berbahagia</span>
          <span className="text3">Irfan & Winda</span>
        </div>
        <div className="footer-close-page" data-aos="fade-up">
          <span>&#169; 2023. Made with Love by</span>
          <span>Irfan & Winda</span>
        </div>
      </div>
    </Background>
  );
}
