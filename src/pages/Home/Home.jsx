import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Home.module.scss";
import { HeaderAuth } from "../../components/index";

import homeImg from "../../common/img/home.svg";
import { authLogout } from "../../redux/auth/asyncActions";

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderAuth />
                    <p
                        className={styles.logoutBtn}
                        onClick={() => dispatch(authLogout())}>
                        Logout
                    </p>
                </div>
                <div className={styles.body}>
                    <h2>Congratulations</h2>
                    <h5>
                        Now you are on the main page. Soon we will provide{" "}
                        <br />
                        you with detailed feedback on the result of your work
                    </h5>
                    <button>See You</button>
                    <img src={homeImg} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Home;
