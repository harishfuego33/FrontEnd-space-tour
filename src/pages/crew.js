import { useState } from "react";
import data from "../data.json";

function Crew() {
  return (
    <div className="crew">
      <Main />
    </div>
  );
}
function Main() {
  const [active, setActive] = useState("Douglas Hurley");
  const { crew } = data;
  return (
    <main className="crew_main margin-top-19">
      <h1 className="numbered-title crew-1 ff-barlow-con-sans">
        <span className="ff-weigth-700 light-gray">02</span>MEET YOUR CREW
      </h1>
      {crew.map((item) => {
        const { png, webp } = item.images;
        if (active === item.name) {
          return (
            <>
              <Picture key={item.role} png={png} webp={webp} />
              <Navbar active={active} setActive={setActive} />
              <Article
                key={item.name}
                name={item.name}
                role={item.role}
                bio={item.bio}
              />
            </>
          );
        }
        return null;
      })}
    </main>
  );
}
function Picture({ img, webp }) {
  return (
    <picture id="crew" className="crew-4 crew__picture-box">
      <source
        className="crew-picture crew-4 "
        srcSet={webp}
        type="image/webp"
      />
      <img className="crew-picture crew-4" src={img} alt="the moon" />
      <span className="hr "></span>
    </picture>
  );
}
function Article({ name, role, bio }) {
  return (
    <article className="crew_main-info crew-2">
      <h3 className=" crew_main-title ff-white ff-bellfair">
        {role.toUpperCase()}
      </h3>
      <h1 className="crew_main-name  ff-bellfair ff-white ">
        {name.toUpperCase()}
      </h1>
      <p className="article article__para-1 ff-barlow-sans light-blue var-width">
        {bio}
      </p>
    </article>
  );
}
function Navbar({ active, setActive }) {
  return (
    <navbar className="crew__navbar crew-3 margin-bottom-2 ff-barlow-con-sans">
      <li className="crew__navbar-options ">
        <ul
          className={`crew__navbar-option ${
            active === "Douglas Hurley" ? "background-white" : ""
          }`}
          onClick={() => setActive("Douglas Hurley")}
        >
          <span></span>
        </ul>
        <ul
          className={`crew__navbar-option ${
            active === "Mark Shuttleworth" ? "background-white" : ""
          }`}
          onClick={() => setActive("Mark Shuttleworth")}
        >
          <span></span>
        </ul>
        <ul
          className={`crew__navbar-option ${
            active === "Victor Glover" ? "background-white" : ""
          }`}
          onClick={() => setActive("Victor Glover")}
        >
          <span></span>
        </ul>
        <ul
          className={`crew__navbar-option ${
            active === "Anousheh Ansari" ? "background-white" : ""
          }`}
          onClick={() => setActive("Anousheh Ansari")}
        >
          <span></span>
        </ul>
      </li>
    </navbar>
  );
}

export default Crew;
