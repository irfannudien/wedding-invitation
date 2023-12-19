import aos from "aos";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import BackgroundImg from "../../assets/body-bg.png";
import ImgTopLeft from "../../assets/top-left.png";
import ImgTopRight from "../../assets/top-right.png";
import ImgFooter from "../../assets/footer.png";
import styles from "./modal.module.css";

export default function Modal(props) {
  const { onModalOpen } = props;

  const BodyBg = {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#222222",
  };

  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  }, []);

  // const { isOpen, setIsOpen } = useState(false);
  // const [isModalClose, setIsModalClose] = useState(false);

  // const handleCloseModal = () => {
  //   setIsModalClose(true);
  // };

  // useEffect(() => {
  //   aos.init();
  // }, []);

  // useEffect(() => {
  //   if (isOpen) {
  //     // You can customize the AOS animation settings here
  //     aos.refreshHard();
  //   }
  // }, [isOpen]);

  return (
    <>
      {/* <Background>
        <div
          // className={`modal ${isOpen ? "open" : ""}`}
          // data-aos="fade-up"
          className="modalContent"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",

              // position: "fixed",
              // top: 0,
              // bottom: 0,
              // left: 0,
              // right: 0,
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}

            // className="modal-content"
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   flexDirection: "column",
            //   width: "100vw",
            //   height: "100vh",
            // }}
          >
            <h3>MODAAAAAAAAAAAAAAAAAALLLLLLLLLL</h3>
            <Button
              // className="close-button"
              variant="warning"
              onClick={() => onModalOpen()}
            >
              BUKA UNDANGAN
            </Button>
          </div>
        </div>
      </Background> */}

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
            color: "white",
          }}
          data-aos="fade-up"
        >
          <h3>MODAAAAAAAAAAAAAAAAAALLLLLLLLLL</h3>
          <Button
            // className="close-button"
            variant="warning"
            onClick={() => onModalOpen()}
          >
            BUKA UNDANGAN
          </Button>
        </div>
      </div>
    </>
  );
}
