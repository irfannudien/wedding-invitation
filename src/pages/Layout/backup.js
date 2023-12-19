import React, { useState } from "react";

import styles from "./layout.module.css";

import Button from "react-bootstrap/Button";

import Modal from "../Modal/Modal";
import { CSSTransition } from "react-transition-group";

export default function Layout(props) {
  // const [closeModal, setCloseModal] = useState(true);
  // const [modal, setModal] = useState(true);
  // const Toggle = () => setModal(!modal);

  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {/* {closeModal && <ModalCover closeModal={setCloseModal} />} */}
      {/* <ModalCover closeModal={Toggle} show={modal} /> */}
      {/* <Modal /> */}

      <CSSTransition
        in={isModalOpen}
        timeout={200}
        classNames="modal"
        unmountOnExit
      >
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </CSSTransition>
      {/* <Button onClick={() => setIsModalOpen((prevState) => !prevState)}>
          Modal
        </Button> */}

      <div className={styles.layout}>
        <div style={{ color: "white", justifyContent: "center" }}>
          <h1>Irfan & Winda</h1>
          <p>Kepada Bpk/Ibu/Saudara/i,</p>
          <h3>Nama tamu</h3>
          <p>Akan melangsungkan acara Ngunduh Mantu dalam:</p>
          <Button
            variant="warning"
            size="md"
            style={{ borderRadius: "100px", fontWeight: "500" }}
            // onClick={() => {
            //   setCloseModal(false);
            // }}
          >
            Lihat undangan
          </Button>
          {/* <Link to="/undangan">Lihat undangan</Link> */}
        </div>
      </div>
    </>
  );
}
