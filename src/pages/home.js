// import background from
function Home() {
  return (
    <div className="home">
      <Section />;
    </div>
  );
}
function Section() {
  return (
    <main className="home_section margin-top-19">
      <article className="article">
        <h5 className="article__heading-5 ff-barlow-con-sans">
          SO,YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="article__heading-1 ff-bellfair">SPACE</h1>
        <p className="article__para-1 ff-barlow-sans">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </article>
      <div className="Explore">
        <h3 className="Explore__title">Explore</h3>
      </div>
    </main>
  );
}
export default Home;
