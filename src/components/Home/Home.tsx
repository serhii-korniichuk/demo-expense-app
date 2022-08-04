import React, { useState } from "react";
import { useNavigate } from "react-router";
import { logout } from "../../api";
import './Home.scss';
import '../Registration/Registration.scss';
import confeties from '../../img/Decor.png';
import people from '../../img/Vector (1).png';

export const Home: React.FC = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleOut = async() => {
    const response = await logout();

    if (!response.ok) {
      setError(true);
    } else {
      setError(false);
      navigate("/auth/login", { replace: true });
    }
  };

  return (
    <div className="home">
      <div className="header home__header">
        <div className="header__company">InCode</div>
        <div className="header__spec">Finance</div>
      </div>
      <div className="home__content">
        <div className="home__congrats">congratulations
          <img
            src={confeties}
            alt="Confeties"
            className="home__congrats--img"
          />
        </div>
        <div className="home__text">
          Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
        </div>
        <button
          className="home__logout"
          type="button"
          onClick={handleOut}
        >
          See you
        </button>
        <img
          src={people}
          alt="People"
          className="home__people"
        />
      </div>

      {error && <div className="home__error">You need to sign in</div>}
    </div>
  );
};
