import React from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function backupModal(props) {
  const { setIsModalOpen } = props;

  return (
    <>
      {ReactDOM.createPortal(
        <StyledModal>
          <ModalContent
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalDialog style={{ color: "white", justifyContent: "center" }}>
              <h1>nama</h1>
              <p>Kepada Bpk/Ibu/Saudara/i,</p>
              <h3>Nama tamu</h3>
              <p>Akan melangsungkan acara Ngunduh Mantu dalam:</p>
              <Button
                variant="warning"
                size="md"
                style={{ borderRadius: "100px", fontWeight: "500" }}
                onClick={() => setIsModalOpen(false)}
              >
                Buka undangan
              </Button>
            </ModalDialog>
          </ModalContent>
        </StyledModal>,
        document.getElementById("modal")
      )}
    </>
  );
}

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(6px);
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //   background-color: #fff;
  width: 100%;
  min-height: 100vh;
  box-shadow: 0px 3px 6px #00000029;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
`;

const ModalDialog = styled.div`
  background-color: var(--bg);
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
