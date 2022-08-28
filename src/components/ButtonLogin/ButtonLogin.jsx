import React from "react";

import styles from "./ButtonLogin.module.scss";
import preloader from "../../common/img/preloader.svg";

export const ButtonLogin = ({
    text,
    handleClick,
    isLoading = false,
}) => {
    if (isLoading) {
        return <img className={styles.preloader} src={preloader} alt='' />;
    }
    return (
        <button className={styles.button} onClick={handleClick}>
            {text}
        </button>
    );
};


