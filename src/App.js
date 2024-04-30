import Navbar from "./components/navbar";
export default function App() {
  return (
    <>
      <Navbar />
      <Section />
    </>
  );
}
function Section() {
  return (
    <section className="home_section">
      <article className="article">
        <h5 className="article__heading-5">SO,YOU WANT TO TRAVEL TO</h5>
        <h1 className="article__heading-1">SPACE</h1>
        <p className="article__para-1">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </article>
      <div className="Explore">
        <h3 className="Explore__title">Explore</h3>
      </div>
    </section>
  );
}
