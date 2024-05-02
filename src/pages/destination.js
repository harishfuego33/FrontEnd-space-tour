import { useState } from "react";
function Destination() {
  return (
    <div className="destination">
      <Section />
    </div>
  );
}
function Section() {
  const [active, setActive] = useState("HOME");
  return (
    <main className="destination_section margin-top-19">
      <h1 className="numbered-title item-1 ff-barlow-con-sans">
        <span className="ff-weigth-700 light-gray">01</span> PICK YOUR
        DESTINATION
      </h1>
      {/*  */}
      <picture id="moon-image" className="item-2">
        <source
          className="distination-picture"
          srcSet="assets/destination/image-moon.webp"
          type="image/webp"
        />
        <img
          className="distination-picture"
          src="assets/destination/image-moon.png"
          alt="the moon"
        />
      </picture>
      {/*  */}
      <section className=" destiation__navbar-options item-3 ff-barlow-con-sans">
        <li className="destiation__navbar-options ">
          <ul
            className={`spacetour__navbar-option padding-top-bottom-1 ${
              active === "HOME" ? "underlined" : ""
            }`}
            onClick={() => setActive("HOME")}
          >
            <span>MOON</span>
          </ul>
          <ul
            className={`spacetour__navbar-option padding-top-bottom-1 ${
              active === "DESTINATION" ? "underlined" : ""
            }`}
            onClick={() => setActive("DESTINATION")}
          >
            <span>MARS</span>
          </ul>
          <ul
            className={`spacetour__navbar-option padding-top-bottom-1 ${
              active === "CREW" ? "underlined" : ""
            }`}
            onClick={() => setActive("CREW")}
          >
            <span>EUROPA</span>
          </ul>
          <ul
            className={`spacetour__navbar-option padding-top-bottom-1 ${
              active === "TECHNOLOGY" ? "underlined" : ""
            }`}
            onClick={() => setActive("TECHNOLOGY")}
          >
            <span>TITAN</span>
          </ul>
        </li>
      </section>
      <Article />
    </main>
  );
}
function Article() {
  return (
    <article className="article item-4">
      <h1 className="article__heading-1 ff-bellfair ff-size-10 margin-bottom-2">
        MOON
      </h1>
      <p className="article__para-1 ff-barlow-sans ">
        See our planet as you've never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you're
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <span className="hr"></span>
      <div className="destination__distance ">
        <div className="destination__distance-1">
          <span className="ff-barlow-con-sans">AVG. DISTANCE</span>
          <p className="ff-bellfair">384,400 KM</p>
        </div>
        <div className="destination__distance-2">
          <span className="ff-barlow-con-sans">EST. TRAVEL TIME</span>
          <p className="ff-bellfair">3 DAYS</p>
        </div>
      </div>
    </article>
  );
}
export default Destination;
