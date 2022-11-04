import React from "react";
import "./Home.scss";
import congradulationImg from "../../../images/homeCongradulations.png";
import decor from "../../../images/Decor.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="content">
      <h1 className="h1">Congradulations</h1>
      {/* <img src={decor} className="img__gratsDecor"></img> */}
      <p className="p">
        Now you are on the main page. Soon we will provide you with detailed
        feedback on the result of your work
      </p>
      <Link to="../Auth">
        <button className="btn__logout">Log Out</button>
      </Link>
      <img src={congradulationImg}></img>
    </div>
  );
};
