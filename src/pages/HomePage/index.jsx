import React from 'react';
import { Navigate } from 'react-router-dom';
import Button from 'components/Button/index';
import { logoutRequest } from 'utils/axios_utils';
import useAuth from 'hooks/useAuth';
import styles from './HomePage.module.scss';

const HomePage = () => {
    const { isAuth, accessToken } = useAuth();


    const logoutHandler = () => {
        logoutRequest(accessToken)
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
                    <Button
                        className={styles.home__btn}
                        text='See You'
                        type='submit'
                        handleClick={logoutHandler}
                    />
                    <div className={styles.home__img}></div>
                </div>
            </div>
        </div>
    ) : (
        <Navigate to="/auth/login" />
    )
};

export default HomePage;