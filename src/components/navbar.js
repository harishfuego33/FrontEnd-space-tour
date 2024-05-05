import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
        <ul className="hamburger__box-options">
          <NavLink
            style={styleLink}
            to="/"
            onClick={() => setActive("HOME")}
            className={`hamburger__box-option ${
              active === "HOME" ? "underlined__right" : ""
            }`}
          >
            <span className="ff-weigth-700">00</span>
            <span>HOME</span>
          </NavLink>
          <NavLink
            style={styleLink}
            to="/destination"
            onClick={() => setActive("DESTINATION")}
            className={`hamburger__box-option ${
              active === "DESTINATION" ? "underlined__right" : ""
            }`}
          >
            <span className="ff-weigth-700">01</span>
            <span>DESTINATION</span>
          </NavLink>
          <NavLink
            style={styleLink}
            to="/crew"
            onClick={() => setActive("CREW")}
            className={`hamburger__box-option ${
              active === "CREW" ? "underlined__right" : ""
            }`}
          >
            <span className="ff-weigth-700">02</span>
            <span>CREW</span>
          </NavLink>
          <NavLink
            style={styleLink}
            to="/technology"
            onClick={() => setActive("TECHNOLOGY")}
            className={`hamburger__box-option ${
              active === "TECHNOLOGY" ? "underlined__right" : ""
            }`}
          >
            <span className="ff-weigth-700">03</span>
            <span>TECHNOLOGY</span>
          </NavLink>
        </ul>
      </div>
      {/*  */}
      <nav className="spacetour__navbar">
        <Link style={styleLink} to="/">
          <div className="spacetour__navbar-log-box">
            <img
              src="./assets/shared/logo.svg"
              alt="logo"
              className="spacetour__navbar-logo"
            />
          </div>
        </Link>
        {/*  */}
        <span className="spacetour__navbar-line"></span>
        {/*  */}
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

        <ul className="spacetour__navbar-options ff-barlow-con-sans">
          <NavLink
            style={styleLink}
            to="/"
            onClick={() => setActive("HOME")}
            activeClassName="underlined"
            key="home"
            className={`spacetour__navbar-option ${
              active === "HOME" ? "underlined" : ""
            }`}
          >
            <span className="ff-family-700">00</span>
            <span className="margin-left-08">HOME</span>
          </NavLink>
          <NavLink
            style={styleLink}
            to="/destination"
            onClick={() => setActive("DESTINATION")}
            activeClassName="underlined"
            key="destination"
            className={`spacetour__navbar-option ${
              active === "DESTINATION" ? "underlined" : ""
            }`}
          >
            <span className="ff-family-700">01</span>
            <span className="margin-left-08">DESTINATION</span>
          </NavLink>
          <NavLink
            style={styleLink}
            to="/crew"
            onClick={() => setActive("CREW")}
            activeClassName="underlined"
            key="crew"
            className={`spacetour__navbar-option ${
              active === "CREW" ? "underlined" : ""
            }`}
          >
            <span className="ff-family-700">02</span>
            <span className="margin-left-08">CREW</span>
          </NavLink>
          <NavLink
            style={styleLink}
            to="/technology"
            onClick={() => setActive("TECHNOLOGY")}
            activeClassName="underlined"
            key="technology"
            className={`spacetour__navbar-option ${
              active === "TECHNOLOGY" ? "underlined" : ""
            }`}
          >
            <span className="ff-family-700">03</span>
            <span className="margin-left-08">TECHNOLOGY</span>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
