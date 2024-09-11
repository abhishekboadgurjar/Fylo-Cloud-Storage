import bgHome from "../assets/images/illustration-intro.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src={bgHome} alt="" />
      </div>
      <div className="home-text">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <div className="button">
          <h4>Get Started</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
