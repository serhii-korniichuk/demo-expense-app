import React from 'react';
import { Logo } from '../Auth/Logo';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__logo">
        <Logo /> 
      </div>
      <div className="home__container">
        <h2 className="home__congrats">
          Congratulations
        </h2>
        <h5 className="home__secondary">
          Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
        </h5>
        <button
          className="home__bttn"
          type="button"
        >
          See You
        </button>
        <div className="home__img">

        </div>
      </div>
    </div>
  )
}