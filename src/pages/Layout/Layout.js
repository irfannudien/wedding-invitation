import React, { useEffect, useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBarCustom";
import Opening from "../Opening/Opening";
import Couple from "../Couple/Couple";
import Event from "../Event/Event";
import Location from "../Location/Location";
import Closing from "../Closing/Closing";
import Rsvp from "../RSVP/Rsvp";
import Modal from "../../components/Modal/Modal";
import { useSwipeable } from "react-swipeable";

import { AnimatePresence, motion } from "framer-motion";

import AudioFile from "../../assets/audio.mp3";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  useEffect(() => {
    const handleScrollOrWheel = (e) => {
      const scrollUl = document.getElementById("rsvp");

      if (scrollUl && (scrollUl.contains(e.target) || scrollUl === e.target)) {
        return;
      }

      if (e.deltaY > 0) {
        // scroll down
        setActivePage((prevPage) => (prevPage === 6 ? 6 : prevPage + 1));
      } else if (e.deltaY < 0) {
        // scroll top
        setActivePage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
      }
    };

    window.addEventListener("wheel", handleScrollOrWheel);
    window.addEventListener("scroll", handleScrollOrWheel);

    return () => {
      window.removeEventListener("wheel", handleScrollOrWheel);
      window.removeEventListener("scroll", handleScrollOrWheel);
    };
  }, [activePage]);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      // Check if the swipe event occurred within the specific element
      const scrollUl = document.getElementById("data-rsvp");

      if (
        scrollUl &&
        (scrollUl.contains(eventData.event.target) ||
          scrollUl === eventData.event.target)
      ) {
        return;
      }

      // Handle the swipe event for page navigation
      if (eventData.deltaY > 0) {
        setActivePage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
      } else if (eventData.deltaY < 0) {
        setActivePage((prevPage) => (prevPage === 6 ? 6 : prevPage + 1));
      }
    },
  });

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleOpenModal = () => {
    setIsModalOpen(false);
  };

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
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  }, [isModalOpen]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transform: "translateY(-200%)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            key="modal"
          >
            <Modal isModalOpen={isModalOpen} onModalOpen={handleOpenModal} />
          </motion.div>
        )}
      </AnimatePresence>

      {isModalOpen === false ? (
        <div {...handlers}>
          <NavBar activePage={activePage} onPageChange={handlePageChange} />
          {activePage === 1 && <Opening />}
          {activePage === 2 && <Couple />}
          {activePage === 3 && <Event />}
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
  );
}
