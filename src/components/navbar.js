import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [hamburger, setHamburger] = useState(true);
  const styleLink = {
    color: "white",
    textDecoration: "none",
    diplay: "block",
  };
  return (
    <>
      <div
        className={"hamburger__box ff-barlow-con-sans"}
        style={hamburger === false ? { transform: "translateX(0)" } : {}}
      >
        <li className="hamburger__box-options">
          <Link style={styleLink} to="/">
            <ul
              className={`hamburger__box-option ${
                active === "HOME" ? "underlined__right" : ""
              }`}
              onClick={() => setActive("HOME")}
            >
              <span className="ff-weigth-700">00</span>
              <span>HOME</span>
            </ul>
          </Link>
          <Link style={styleLink} to="/destination">
            <ul
              className={`hamburger__box-option ${
                active === "DESTINATION" ? "underlined__right" : ""
              }`}
              onClick={() => setActive("DESTINATION")}
            >
              <span className="ff-weigth-700">01</span>
              <span>DESTINATION</span>
            </ul>
          </Link>
          <Link style={styleLink} to="/crew">
            <ul
              className={`hamburger__box-option ${
                active === "CREW" ? "underlined__right" : ""
              }`}
              onClick={() => setActive("CREW")}
            >
              <span className="ff-weigth-700">02</span>
              <span>CREW</span>
            </ul>
          </Link>
          <Link style={styleLink} to="/technology">
            <ul
              className={`hamburger__box-option ${
                active === "TECHNOLOGY" ? "underlined__right" : ""
              }`}
              onClick={() => setActive("TECHNOLOGY")}
            >
              <span className="ff-weigth-700">03</span>
              <span>TECHNOLOGY</span>
            </ul>
          </Link>
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
        <li className="spacetour__navbar-options ff-barlow-con-sans">
          <Link style={styleLink} to="/">
            <ul
              className={`spacetour__navbar-option ${
                active === "HOME" ? "underlined" : ""
              }`}
              onClick={() => setActive("HOME")}
            >
              <span className="ff-family-700">00</span>
              <span className="margin-left-08">HOME</span>
            </ul>
          </Link>
          <Link style={styleLink} to="/destination">
            <ul
              className={`spacetour__navbar-option ${
                active === "DESTINATION" ? "underlined" : ""
              }`}
              onClick={() => setActive("DESTINATION")}
            >
              <span className="ff-family-700">01</span>
              <span className="margin-left-08">DESTINATION</span>
            </ul>
          </Link>
          <Link style={styleLink} to="/crew">
            <ul
              className={`spacetour__navbar-option ${
                active === "CREW" ? "underlined" : ""
              }`}
              onClick={() => setActive("CREW")}
            >
              <span className="ff-family-700">02</span>
              <span className="margin-left-08">CREW</span>
            </ul>
          </Link>
          <Link style={styleLink} to="/technology">
            <ul
              className={`spacetour__navbar-option ${
                active === "TECHNOLOGY" ? "underlined" : ""
              }`}
              onClick={() => setActive("TECHNOLOGY")}
            >
              <span className="ff-family-700">03</span>
              <span className="margin-left-08">TECHNOLOGY</span>
            </ul>
          </Link>
        </li>
      </nav>
    </>
  );
}
