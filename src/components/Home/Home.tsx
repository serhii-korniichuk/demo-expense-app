import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/api";
import "./Home.scss";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [validLogOut, setValidLogOut] = useState(false);

  const handleLogOut = async () => {
    // logout doens't work properly (401)
    const response = await logout();
    console.log(response);
    
    setValidLogOut(true);
  };

  useEffect(() => {
    if (validLogOut) {
      localStorage.removeItem("accessToken");
      navigate("/signin");
    }
  }, [validLogOut]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  return (
    <section className="home">
      <h2 className="home__title">Congratulations</h2>
      <p className="home__description">Now you are on the main page. Welcome!</p>
      <button onClick={handleLogOut} className="home__log-out-button">
        Log Out
      </button>
      <img className="home__salute" src="./salute.svg" alt="" />
      <img className="home__img" src="./home-img.svg" alt="" />
    </section>
  );
};
