import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [hamburger, setHamburger] = useState(true);
  const styleLink = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <>
      <div
        className={"hamburger__box ff-barlow-sans"}
        style={hamburger === false ? { transform: "translateX(0)" } : {}}
      >
        <li className="hamburger__box-options">
          <ul
            className={`hamburger__box-option ${
              active === "HOME" ? "underlined__right" : ""
            }`}
            onClick={() => setActive("HOME")}
          >
            <Link style={styleLink} to="/">
              <span>00</span>
              <span>HOME</span>
            </Link>
          </ul>
          <ul
            className={`hamburger__box-option ${
              active === "DESTINATION" ? "underlined__right" : ""
            }`}
            onClick={() => setActive("DESTINATION")}
          >
            <Link style={styleLink} to="/destination">
              <span>01</span>
              <span>DESTINATION</span>
            </Link>
          </ul>
          <ul
            className={`hamburger__box-option ${
              active === "CREW" ? "underlined__right" : ""
            }`}
            onClick={() => setActive("CREW")}
          >
            <Link style={styleLink} to="/crew">
              <span>02</span>
              <span>CREW</span>
            </Link>
          </ul>
          <ul
            className={`hamburger__box-option ${
              active === "TECHNOLOGY" ? "underlined__right" : ""
            }`}
            onClick={() => setActive("TECHNOLOGY")}
          >
            <Link style={styleLink} to="/technology">
              <span>03</span>
              <span>TECHNOLOGY</span>
            </Link>
          </ul>
        </li>
      </div>
      <nav className="spacetour__navbar">
        <div className="spacetour__navbar-log-box">
          <img
            src="./assets/shared/logo.svg"
            alt="logo"
            className="spacetour__navbar-logo"
          />
        </div>
        <span className="spacetour__navbar-line"></span>
        <div className="spacetour__navbar-hamburger-box">
          <img
            src={`./assets/shared/${
              hamburger === true ? "icon-hamburger" : "icon-close"
            }.svg`}
            alt="icon-hamburger"
            className="spacetour__navbar-hamburger"
            onClick={() => setHamburger(!hamburger)}
          />
        </div>
        <li className="spacetour__navbar-options">
          <ul
            className={`spacetour__navbar-option ${
              active === "HOME" ? "underlined" : ""
            }`}
            onClick={() => setActive("HOME")}
          >
            <Link style={styleLink} to="/">
              <span>00</span>
              <span>HOME</span>
            </Link>
          </ul>
          <ul
            className={`spacetour__navbar-option ${
              active === "DESTINATION" ? "underlined" : ""
            }`}
            onClick={() => setActive("DESTINATION")}
          >
            <Link style={styleLink} to="/destination">
              <span>01</span>
              <span>DESTINATION</span>
            </Link>
          </ul>
          <ul
            className={`spacetour__navbar-option ${
              active === "CREW" ? "underlined" : ""
            }`}
            onClick={() => setActive("CREW")}
          >
            <Link style={styleLink} to="/crew">
              <span>02</span>
              <span>CREW</span>
            </Link>
          </ul>
          <ul
            className={`spacetour__navbar-option ${
              active === "TECHNOLOGY" ? "underlined" : ""
            }`}
            onClick={() => setActive("TECHNOLOGY")}
          >
            <Link style={styleLink} to="/technology">
              <span>03</span>
              <span>TECHNOLOGY</span>
            </Link>
          </ul>
        </li>
      </nav>
    </>
  );
}
