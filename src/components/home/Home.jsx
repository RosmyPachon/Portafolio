import "./home.css";
import Me from "../../assets/avatar 1.png";
import HearderSocials from "./HearderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <Shapes />
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Rosmy Pachón</h1>
        <span className="home__education">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </span>
        <HearderSocials />
        <a href="#contact" className="btn">
          algo ahí
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
