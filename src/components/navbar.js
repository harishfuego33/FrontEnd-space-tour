import { useState } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const [active, setActive] = useState("HOME");
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
          <HamburgerNavbtn
            key="4021"
            title="HOME"
            to="/"
            index="00"
            hamburger={hamburger}
            setHamburger={setHamburger}
          />
          <HamburgerNavbtn
            key="4022"
            title="DESTINATION"
            to="/destination"
            index="01"
            hamburger={hamburger}
            setHamburger={setHamburger}
          />
          <HamburgerNavbtn
            key="4023"
            title="CREW"
            to="/crew"
            index="02"
            hamburger={hamburger}
            setHamburger={setHamburger}
          />
          <HamburgerNavbtn
            key="4024"
            title="TECHNOLOGY"
            to="/technology"
            index="03"
            hamburger={hamburger}
            setHamburger={setHamburger}
          />
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
          <NavBtn title="HOME" to="/" index="00" key="00"></NavBtn>
          <NavBtn
            key="01"
            title="DESTINATION"
            to="/destination"
            index="01"
          ></NavBtn>
          <NavBtn key="02" title="CREW" to="/crew" index="02"></NavBtn>
          <NavBtn
            key="03"
            title="TECHNOLOGY"
            to="/technology"
            index="03"
          ></NavBtn>
        </ul>
      </nav>
    </>
  );
}
function HamburgerNavbtn({ title, to, index, setHamburger, hamburger }) {
  const resolvedPath = useResolvedPath(to);
  const active = useMatch({ path: resolvedPath.pathname, end: true });
  const styleLink = {
    color: "white",
    textDecoration: "none",
    diplay: "block",
  };
  return (
    <NavLink
      style={styleLink}
      to={to}
      onClick={() => {
        setHamburger(!hamburger);
      }}
      className={`hamburger__box-option ${active ? "underlined__right" : ""}`}
    >
      <span className="ff-weigth-700">{index}</span>
      <span>{title}</span>
    </NavLink>
  );
}

function NavBtn({ title, to, index }) {
  const resolvedPath = useResolvedPath(to);
  const active = useMatch({ path: resolvedPath.pathname, end: true });
  const styleLink = {
    color: "white",
    textDecoration: "none",
    diplay: "block",
  };
  return (
    <NavLink
      style={styleLink}
      to={to}
      className={`spacetour__navbar-option ${active ? "underlined" : ""}`}
    >
      <span className="ff-family-700">{index}</span>
      <span className="margin-left-08">{title}</span>
    </NavLink>
  );
}
