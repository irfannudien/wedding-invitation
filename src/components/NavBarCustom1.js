import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {
  FaHome,
  FaVenusMars,
  FaSearchLocation,
  FaBookOpen,
  FaPrayingHands,
} from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";

export default function NavbarCustom(props) {
  const { activePage, onPageChange } = props;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar
        // bg="dark"
        // data-bs-theme="dark"
        style={{
          position: "fixed",
          bottom: 10,
          width: "95%",
          zIndex: 100,
          borderRadius: 10,
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,.8)",
        }}
      >
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}

        <Nav
          className="ml-auto"
          variant="tabs"
          fill
          // style={{
          //   // width: "100%",
          //   // display: "flex",
          //   // justifyContent: "space-between",
          // }}
        >
          <Nav.Link active={activePage === 1} onClick={() => onPageChange(1)}>
            <FaHome fontSize={18} />
          </Nav.Link>
          <Nav.Link active={activePage === 2} onClick={() => onPageChange(2)}>
            <FaVenusMars fontSize={18} />
          </Nav.Link>
          <Nav.Link active={activePage === 3} onClick={() => onPageChange(3)}>
            <IoCalendarSharp fontSize={18} />
          </Nav.Link>
          <Nav.Link active={activePage === 4} onClick={() => onPageChange(4)}>
            <FaSearchLocation fontSize={18} />
          </Nav.Link>
          <Nav.Link active={activePage === 5} onClick={() => onPageChange(5)}>
            <FaBookOpen fontSize={18} />
          </Nav.Link>
          <Nav.Link active={activePage === 6} onClick={() => onPageChange(6)}>
            <FaPrayingHands fontSize={18} />
          </Nav.Link>
        </Nav>

        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
}
