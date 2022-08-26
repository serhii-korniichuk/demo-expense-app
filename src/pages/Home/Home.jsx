import React from "react";

import styles from "./Home.module.scss";
import HeaderAuth from "../../components/HeaderAuth/HeaderAuth";
import homeImg from "../../common/img/home.svg";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderAuth />
                    <p className={styles.logoutBtn}>Logout</p>
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
