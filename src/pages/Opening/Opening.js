import React, { useEffect } from "react";
import Background from "../../components/Background/Background";
import ImgSpin from "../../assets/circle-spin.png";
import aos from "aos";
import CountdownTimer from "../../components/Countdown/Countdown";
import Gate from "../../components/Gate";

import "./opening.css";

export default function Opening() {
  // const targetDate = new Date("2024-02-22T23:59:59"); // Replace with your target date

  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  }, []);

  return (
    <Background>
      <Gate />
      <div data-aos="fade-up" className="opening-container">
        <h3 data-aos="zoom-in" className="opening-text">
          You Are Invited
        </h3>
        <div className="spin-container" data-aos="zoom-in">
          <img
            alt=""
            className="img-spin"
            src={ImgSpin}
            // data-aos="zoom-in"
          />
          <h3 className="text-spin">
            Irfan
            <br />&<br />
            Winda
          </h3>
        </div>

        <CountdownTimer />
      </div>
    </Background>
  );
}
