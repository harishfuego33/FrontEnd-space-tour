import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  return (
    <nav className="spacetour__navbar">
      <div className="spacetour__navbar-log-box">
        <img
          src="./assets/shared/logo.svg"
          alt="logo"
          className="spacetour__navbar-logo"
        />
      </div>
      <span className="spacetour__navbar-line"></span>
      <li className="spacetour__navbar-options">
        <ul
          className={`spacetour__navbar-option ${
            active === "HOME" ? "underlined" : ""
          }`}
          onClick={() => setActive("HOME")}
        >
          <span>00</span>
          <span>HOME</span>
        </ul>
        <ul
          className={`spacetour__navbar-option ${
            active === "DESTINATION" ? "underlined" : ""
          }`}
          onClick={() => setActive("DESTINATION")}
        >
          <span>01</span>
          <span>DESTINATION</span>
        </ul>
        <ul
          className={`spacetour__navbar-option ${
            active === "CREW" ? "underlined" : ""
          }`}
          onClick={() => setActive("CREW")}
        >
          <span>02</span>
          <span>CREW</span>
        </ul>
        <ul
          className={`spacetour__navbar-option ${
            active === "TECHNOLOGY" ? "underlined" : ""
          }`}
          onClick={() => setActive("TECHNOLOGY")}
        >
          <span>03</span>
          <span>TECHNOLOGY</span>
        </ul>
      </li>
    </nav>
  );
}
