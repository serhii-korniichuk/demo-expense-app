import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export const Home: React.FC = () => {
  return (
    <section className="home">
      <h2 className="home__title">Congratulations</h2>
      <p className="home__description">Now you are on the main page. Welcome!</p>
      <button className="home__log-out-button">
        <Link className="home__log-out-link" to="/signin">Log Out</Link>
      </button>
      <img className="home__salute" src="./salute.svg" alt="" />
      <img className="home__img" src="./home-img.svg" alt="" />
    </section>
  );
};
