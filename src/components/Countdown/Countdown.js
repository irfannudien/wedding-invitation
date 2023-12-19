import React from "react";
import Countdown from "react-countdown";
import "./countdown.css";

export default function CountdownTimer() {
  const targetDate = new Date("2023-12-30T23:59:59").getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render something when the countdown is complete
      return (
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="timer">0</span>
            <span className="countdown-title">Hari</span>
          </div>
          <div className="countdown-item">
            <span className="timer">0</span>
            <span className="countdown-title">Jam</span>
          </div>
          <div className="countdown-item">
            <span className="timer">0</span>
            <span className="countdown-title">Menit</span>
          </div>
          <div className="countdown-item">
            <span className="timer">0</span>
            <span className="countdown-title">Detik</span>
          </div>
        </div>
      );
    } else {
      // Render the countdown timer
      return (
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="timer">{days}</span>
            <span className="countdown-title">Hari</span>
          </div>
          <div className="countdown-item">
            <span className="timer">{hours}</span>
            <span className="countdown-title">Jam</span>
          </div>
          <div className="countdown-item">
            <span className="timer">{minutes}</span>
            <span className="countdown-title">Menit</span>
          </div>
          <div className="countdown-item">
            <span className="timer">{seconds}</span>
            <span className="countdown-title">Detik</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="countdown">
      <p className="countdown-text">Sabtu, 30 Desember 2023</p>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
}
