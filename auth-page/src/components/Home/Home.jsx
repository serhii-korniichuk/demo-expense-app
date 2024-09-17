import React from 'react';
import Congrat from './../../img/Congrat.png';
import img from './../../img/img.png';

const Home = () => {
  return (
    <div className="content">
      <img className="content__title" src={Congrat} alt="congratulation" />
      <div className="content__description">
        Now you are on the main page. Soon we will provide you with detailed feedback on the result
        of your work
      </div>
      <button className="content__button">See You</button>
      <img className="content__img" src={img} alt="img" />
    </div>
  );
};

export default Home;