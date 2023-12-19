import React, { useState, useEffect } from "react";

const Carousel = ({ pages }) => {
  const [activePage, setActivePage] = useState(0);

  // Function to handle scrolling
  const handleScroll = (event) => {
    const delta = event.deltaY;
    if (delta > 0) {
      // Scroll down
      setActivePage((prevPage) =>
        prevPage < pages.length - 1 ? prevPage + 1 : prevPage
      );
    } else {
      // Scroll up
      setActivePage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
    }
  };

  // Add an event listener for wheel scrolling
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="carousel-container">
      {pages.map((page, index) => (
        <div
          key={index}
          className={`page ${activePage === index ? "active" : ""}`}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
