import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from './api';
import logo from './imgs/Vector.svg';
import img from './imgs/Decor.svg';

type Props = {};

export const Home: React.FC<Props> = () => {
  const [error, setError] = useState('');
  const redirect = useNavigate();

  const handleLogOut = async (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.clear();
    try {
      await logoutUser();
    } catch {
      setError('');
    } finally {
      redirect('/');
    }
  };

  return (
    <div className="main">
      <div className="header main__logo">
        <h1 className="header__h1 main__h1">InCode</h1>
        <p className="header__p main__p">Finance</p>
      </div>
      <div className="container">
        <div className="main__bcimg">
          <img src={img} alt="cograts img" className="main__img" />
          <div className="main__title">
            Congratulations
          </div>
        </div>
        <div className="main__text">
          {/* eslint-disable-next-line max-len */}
          Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
        </div>
        <button
          className="button button__main"
          type="submit"
          onClick={handleLogOut}
        >
          Log Out
        </button>
        {error}
        <div className="main__pict">
          <img src={logo} alt="cograt img" />
        </div>

      </div>
    </div>
  );
};
