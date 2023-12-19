import React, { useEffect, useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/NavBarCustom";
import Opening from "../Opening/Opening";
import Couple from "../Couple/Couple";
import Events from "../Events/Events";
import Location from "../Location/Location";

import Closing from "../Closing/Closing";
import Rsvp from "../RSVP/Rsvp";
import Modal from "../Modal/Modal";

import { CSSTransition } from "react-transition-group";

import AudioFile from "../../assets/audio.mp3";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const handleScrollOrWheel = (e) => {
      if (e.deltaY > 0) {
        setActivePage((prevPage) => (prevPage === 6 ? 6 : prevPage + 1));
      } else if (e.deltaY < 0) {
        setActivePage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
      }
    };

    window.addEventListener("wheel", handleScrollOrWheel);
    window.addEventListener("scroll", handleScrollOrWheel);

    return () => {
      window.removeEventListener("wheel", handleScrollOrWheel);
      window.removeEventListener("scroll", handleScrollOrWheel);
    };
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleOpenModal = () => {
    setIsModalOpen(false);
  };

  // =============== CARA SATU AUDIO PLAY ======================
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  //

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.volume = 0.1; // Set the volume to 0.5
  //     audioRef.current.play().catch((error) => {
  //       console.error("Error playing audio:", error);
  //     });
  //     setIsAudioPlaying(true);
  //   }
  // }, [isModalOpen]);

  // const toggleAudio = () => {
  //   if (audioRef.current) {
  //     if (isAudioPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play().catch((error) => {
  //         console.error("Error playing audio:", error);
  //       });
  //     }
  //     setIsAudioPlaying(!isAudioPlaying);
  //   }
  // };

  // ==================== CARA 2 AUDIO PLAY ====================

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  useEffect(() => {
    if (isAudioPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  // ======================= CARA BASIC AUDIO PLAY ========================
  // const playAudio = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // };

  // useEffect(() => {
  //   playAudio(); // Automatically play the audio when the modal is opened.
  // }, []);

  return (
    <>
      <div>
        <CSSTransition
          in={isModalOpen}
          timeout={2000}
          classNames="modal"
          unmountOnExit
        >
          <Modal isModalOpen={isModalOpen} onModalOpen={handleOpenModal} />
        </CSSTransition>
        {isModalOpen === false ? (
          <div>
            <NavBar activePage={activePage} onPageChange={handlePageChange} />
            {activePage === 1 && <Opening />}
            {activePage === 2 && <Couple />}
            {activePage === 3 && <Events />}
            {activePage === 4 && <Location />}
            {activePage === 5 && <Rsvp />}
            {activePage === 6 && <Closing />}
            <div className="audio-container">
              <div className="audio-play" onClick={toggleAudio}>
                {isAudioPlaying ? (
                  <FaMicrophone size={20} />
                ) : (
                  <FaMicrophoneSlash size={20} />
                )}
                <audio ref={audioRef} src={AudioFile} autoPlay loop></audio>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
