import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            Page not found
            <button
                className={styles.btn}
                onClick={() => navigate('/auth/login')}
            >
                <span className={styles.btn__text}>Go to Login Page</span>
            </button>
        </div>
    );
};

export default NotFoundPage;