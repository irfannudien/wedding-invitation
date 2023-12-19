import React, { useEffect } from "react";
import Background from "../../components/Background/Background";
import Gate from "../../components/Gate";
import { Button } from "react-bootstrap";
import "./maps.css";
import aos from "aos";

export default function Location() {
  const baseURL = process.env.REACT_APP_MAPS_URL;

  // const handleClick = () => {
  //   window.location.href = baseURL;
  // };
  const handleClick = () => {
    window.open(baseURL, "_blank");
  };

  // const handleClick = () => {
  //   const googleMapsUrl = baseURL;

  //   // Check if 'intent://' scheme is supported
  //   if (window.location.href.startsWith("http")) {
  //     window.open(googleMapsUrl, "_blank");
  //   } else {
  //     // Fallback to opening in the browser
  //     window.open(googleMapsUrl, "_system");
  //   }
  // };

  // const handleClick = () => {
  //   try {
  //     const url = process.env.REACT_APP_MAPS_URL;
  //     if (url) {
  //       window.open(url, "_blank");
  //     } else {
  //       console.error(
  //         "process.env.REACT_APP_MAPS_URL is not defined or empty."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error opening the URL:", error);
  //   }
  // };

  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  }, []);

  return (
    <Background>
      <Gate />
      <div className="maps-container">
        <div className="maps" data-aos="fade-down">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5608.906540274055!2d106.51640581160245!3d-6.251100026007743!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTUnMDUuOCJTIDEwNsKwMzAnNTkuMyJF!5e0!3m2!1sid!2sid!4v1699226899228!5m2!1sid!2sid"
            allowFullScreen="allowfullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="false"
            className="mb-3 gmaps"
            title="Undangan"
          />
        </div>
        <div className="desc-maps" data-aos="fade-up">
          <span className="house mb-1">Graha Pesona</span>
          <span className="street mb-3">
            Jl. Widara 8, W44/19, Citra Raya,
            <br />
            Tangerang
          </span>

          <Button
            className="button-maps"
            // data-aos="fade-up"
            onClick={handleClick}
          >
            Lihat Lokasi
          </Button>
        </div>
      </div>
    </Background>
  );
}
