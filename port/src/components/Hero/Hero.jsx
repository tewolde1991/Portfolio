import "./Hero.css";
import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="subtitle">FREELANCE DIGITAL DESIGNER</p>

        <h1>
          Hi, I'm <span>Tewolde</span>
        </h1>

        <h2>based in Ethiopia.</h2>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;