import "./home.css"
import Me from "../../assets/avatar-1.svg"

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Rosmy Pachón</h1>
        <span className="home__education"></span>
      </div>
    </section>
  )
}

export default Home