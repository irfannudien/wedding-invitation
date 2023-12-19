import React from "react";
import "./gate.css";

export default function Gate() {
  return (
    <div
      className="gate-container"
      // style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="gate-content"
        // style={{
        //   width: "85vw",
        //   height: "82vh",
        //   backgroundColor: "rgba(0,0,0,.7)",
        //   position: "fixed",
        //   bottom: 80,
        //   // left: 25,

        //   borderTopRightRadius: "50% 25%",
        //   borderTopLeftRadius: "50% 25%",
        //   zIndex: -10,
        //   // transform: "translate(50px,50px)",
        // }}
      />
    </div>
  );
}
