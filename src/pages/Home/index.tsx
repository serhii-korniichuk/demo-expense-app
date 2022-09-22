import React, {useEffect} from 'react';
import "../../styles/index.scss";
import IMAGE from "../../assets/feedback-image.png";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils";

const Home = () => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("username")
        localStorage.removeItem("accessToken")

        navigate(ROUTES.Auth)
    }

    return (
        <section className="greetings">
           <h2 className="title greetings__title">Congratulations</h2>
           <p>Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</p>
           <button onClick={logoutHandler} className="button">LogOut</button>
           <img src={IMAGE} alt="feedback-image"/>
        </section>
    );
};

export default Home;