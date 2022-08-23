import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthPage.module.scss';

const AuthPage = () => {
    return (
        <div className={styles.auth}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span className={styles.logo__big}>InCode</span>
                    <span className={styles.logo__small}>Finance</span>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthPage;