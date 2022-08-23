import React from 'react';
import { Navigate } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
    const isAuth = !!sessionStorage.getItem('accessToken')


    const logoutHandler = () => {
        fetch('https://incode-backend-dev.herokuapp.com/auth/logout', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
            }
        })
        sessionStorage.clear();
        window.location.reload();
    }

    return isAuth ? (
        <div className={styles.home}>
            <div className={styles.logo}>
                <span className={styles.logo__big}>InCode</span>
                <span className={styles.logo__small}>Finance</span>
            </div>
            <div className={styles.container}>
                <div className={styles.home__decor}></div>
                <div className={styles.container__content}>
                    <div className={styles.home__title}>CONGRATULATIONS</div>
                    <div className={styles.home__content}>Now you are on the main page. Soon we will provide <br />you with detailed feedback on the result of your work</div>
                    <button
                        className={styles.home__btn}
                        type="submit"
                        onClick={() => logoutHandler()}
                    >
                        <span className={styles.home__btn_text}>See You</span>
                    </button>
                    <div className={styles.home__img}></div>
                </div>
            </div>
        </div>
    ) : (
        <Navigate to="/auth/login" />
    )
};

export default HomePage;