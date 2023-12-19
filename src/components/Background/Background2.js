import React, { useEffect } from "react";
import styles from "./background.module.css";
import BackgroundImg from "../../assets/body-bg.png";
import ImgTopLeft from "../../assets/top-left.png";
import ImgTopRight from "../../assets/top-right.png";
import ImgFooter from "../../assets/footer.png";
import aos from "aos";
import "aos/dist/aos.css";

export default function Background(props) {
  const { children } = props;
  useEffect(() => {
    aos.init({
      duration: 2000,
      once: false,
      // disable: false,
      // easing: "ease", // default easing for AOS animations
      // once: false, // whether animation should happen only once - while scrolling down
      // mirror: false, // whether elements should animate out while scrolling past them
      // anchorPlacement: "top-bottom",
    });
  }, []);

  const BodyBg = {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      className="modal"
      style={{
        ...BodyBg,
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        alignItems: "center",
        overflowY: "hidden",
        flexDirection: "column",
        color: "white",
        zIndex: -10,
      }}
    >
      <div style={{ zIndex: -1 }}>
        <img
          alt=""
          className={styles.topLeft}
          src={ImgTopLeft}
          data-aos="top-bg-left"
          // style={{ position: "absolute", top: 0, left: 0 }}
        />
        <img
          alt=""
          className={styles.topRight}
          src={ImgTopRight}
          data-aos="top-bg-right"
          // style={{
          //   position: "absolute",
          //   top: 0,
          //   right: 0,
          // }}
        />
        <img
          alt=""
          className={styles.footer}
          src={ImgFooter}
          // data-aos="fade-in-up"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
        }}
        data-aos="fade-up"
      >
        {children}
      </div>
    </div>
  );
}
