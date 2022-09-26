import React, { useEffect } from 'react';
import '../styles/blocks/Header.scss';
import '../styles/blocks/Homepage.scss';
import '../styles/blocks/button.scss';
import Congrats from '../images/Congrat.svg';
import FooterImage from '../images/Vector.svg';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../api';

type Props = {
    isLogged: boolean;
    setIsLogged: CallableFunction;
}

export const Homepage: React.FC<Props> = ({ isLogged, setIsLogged }) => {
    const navigate = useNavigate();

    const logout = async () => {
        await fetch(`${BASE_URL}/auth/logout`);
        setIsLogged(false);
        navigate('/');
        return;
    }

    useEffect(() => {
        if (!isLogged) {
            navigate("/sign-in");
        }
    }, [isLogged, navigate]);

    return (
        <div className="page">
            <div className="Homepage">
                <h3 className="page__title">InCode</h3>
                <h5 className="page__underTitle">Finance</h5>
                <div className="Homepage__content">
                    <img src={ Congrats } alt="Congrats" className="Homepage__image"/>
                    <p className="Homepage__text">
                        Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
                    </p>

                    <div className="Homepage__buttons">
                        <button className="btn Homepage__btn">See You</button>
                        <button className="btn__logout" onClick={() => logout()}>Logout</button>
                    </div>

                    <img className="Homepage__footerImage" src={FooterImage} alt="footerImg"/>
                </div>
            </div>
        </div>
    );
}
