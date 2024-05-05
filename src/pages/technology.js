import { useState } from "react";
import data from "../data.json";

function Technology() {
  return (
    <div className="technology">
      <Main />
    </div>
  );
}
function Main() {
  const [active, setActive] = useState("Launch vehicle");
  const { technology } = data;
  return (
    <main className="technology_main">
      <h1 className="numbered-title technology-1 ff-barlow-con-sans">
        <span className="ff-weigth-700 light-gray">03</span>SPACE LAUNCH 101
      </h1>
      {technology.map((item) => {
        const { portrait, landscape } = item.images;
        if (active === item.name) {
          return (
            <>
              <Picture
                key={portrait}
                portrait={portrait}
                landscape={landscape}
              />
              <section className="technology_section technology-2">
                <Navbar active={active} setActive={setActive} />
                <Article
                  key={landscape}
                  name={item.name}
                  description={item.description}
                />
              </section>
            </>
          );
        }
        return null;
      })}
    </main>
  );
}
function Picture({ portrait, landschape }) {
  return (
    <picture
      id="launch-vehicle-portrait"
      className="technology-pricture technology-3 "
    >
      <img
        src={portrait}
        alt="launch-vehicle-portrait"
        className="technology-pricture-1"
      />
      <img
        src={landschape}
        alt="launch-vehicle-portrait"
        className="technology-pricture-2"
      />
    </picture>
  );
}
function Navbar({ active, setActive }) {
  return (
    <nav className="technology__navbar  ff-barlow-con-sans">
      <li className="technology__navbar-options ">
        <ul
          className={`technology__navbar-option ${
            active === "Launch vehicle" ? "bg-white" : ""
          }`}
          onClick={() => setActive("Launch vehicle")}
        >
          <span className="ff-bellfair">1</span>
        </ul>
        <ul
          className={`technology__navbar-option ${
            active === "Spaceport" ? "bg-white" : ""
          }`}
          onClick={() => setActive("Spaceport")}
        >
          <span className="ff-bellfair">2</span>
        </ul>
        <ul
          className={`technology__navbar-option ${
            active === "Space capsule" ? "bg-white" : ""
          }`}
          onClick={() => setActive("Space capsule")}
        >
          <span className="ff-bellfair">3</span>
        </ul>
      </li>
    </nav>
  );
}
function Article({ name, description }) {
  return (
    <article className="crew_main-info crew-2">
      <h3 className=" technology_main-title light-blue ff-barlow-con-sans">
        THE TERMINOLOGY...
      </h3>
      <h1 className="crew_main-name  ff-bellfair ff-white ">
        {name.toUpperCase()}
      </h1>
      <p className="article article__para-1 ff-barlow-sans light-blue var-width">
        {description}
      </p>
    </article>
  );
}
export default Technology;
