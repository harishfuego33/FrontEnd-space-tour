import { React, useState } from "react";

import data from "../data.json";
function Destination() {
  return (
    <div className="destination">
      <Section />
    </div>
  );
}
function Section() {
  const [active, setActive] = useState("Moon");
  const { destinations } = data;
  // console.log(destinations);

  return (
    <main className="destination_section margin-top-19">
      <Navbar active={active} setActive={setActive} />
      {destinations.map((item) => {
        const { png, webp } = item.images;
        if (active === item.name) {
          return (
            <>
              <Picture key={item.distance} png={png} webp={webp} />
              <Article
                key={item.name}
                name={item.name}
                description={item.description}
                distance={item.distance}
                travel={item.travel}
              />
            </>
          );
        }
        return null;
      })}
    </main>
  );
}
function Article({ name, description, distance, travel }) {
  return (
    <article className="article item-4">
      <h1 className="article__heading-1 ff-bellfair ff-size-10 margin-bottom-2">
        {name}
      </h1>
      <p className="article__para-1 ff-barlow-sans ">{description}</p>
      <span className="hr"></span>
      <div className="destination__distance ">
        <div className="destination__distance-1">
          <span className="ff-barlow-con-sans">AVG. DISTANCE</span>
          <p className="ff-bellfair">{distance}</p>
        </div>
        <div className="destination__distance-2">
          <span className="ff-barlow-con-sans">EST. TRAVEL TIME</span>
          <p className="ff-bellfair">{travel}</p>
        </div>
      </div>
    </article>
  );
}
function Picture({ png, webp }) {
  console.log(png, webp);
  return (
    <>
      <h1 className="numbered-title item-1 ff-barlow-con-sans">
        <span className="ff-weigth-700 light-gray">01</span> PICK YOUR
        DESTINATION
      </h1>
      <picture id="moon-image" className="item-2">
        <source
          className="distination-picture"
          srcSet={webp}
          type="image/webp"
        />
        <img className="distination-picture" src={png} alt="the moon" />
      </picture>
    </>
  );
}
function Navbar({ active, setActive }) {
  return (
    <section className=" destiation__navbar-options item-3 ff-barlow-con-sans">
      <li className="destiation__navbar-options ">
        <ul
          className={`spacetour__navbar-option padding-top-bottom-1 ${
            active === "Moon" ? "underlined" : ""
          }`}
          onClick={() => setActive("Moon")}
        >
          <span>MOON</span>
        </ul>
        <ul
          className={`spacetour__navbar-option padding-top-bottom-1 ${
            active === "Mars" ? "underlined" : ""
          }`}
          onClick={() => setActive("Mars")}
        >
          <span>MARS</span>
        </ul>
        <ul
          className={`spacetour__navbar-option padding-top-bottom-1 ${
            active === "Europa" ? "underlined" : ""
          }`}
          onClick={() => setActive("Europa")}
        >
          <span>EUROPA</span>
        </ul>
        <ul
          className={`spacetour__navbar-option padding-top-bottom-1 ${
            active === "Titan" ? "underlined" : ""
          }`}
          onClick={() => setActive("Titan")}
        >
          <span>TITAN</span>
        </ul>
      </li>
    </section>
  );
}
export default Destination;
