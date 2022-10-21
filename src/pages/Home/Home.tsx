import React from 'react';
import { Logo } from '../Auth/page-elements/Logo';
import './Home.scss';

type Props = {
  toLoginUser: () => void;
}
export const Home: React.FC<Props> = (props) => {
  const {toLoginUser} = props;

  const handleLogout = () => {
    fetch('https://incode-backend-dev.herokuapp.com/auth/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => {
        console.log(res);
        toLoginUser();
      })
      .catch(res => {
        console.log(res);
      })
  }

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
          onClick={() => {handleLogout()}}
        >
          See You
        </button>
        <div className="home__img"></div>
      </div>
    </div>
  )
}