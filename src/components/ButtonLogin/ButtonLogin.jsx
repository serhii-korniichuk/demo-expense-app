import React from "react";
import styles from "./ButtonLogin.module.scss";

const ButtonLogin = ({ text, handleClick }) => {
    return (
        <button className={styles.button} onClick={handleClick}>
            {text}
        </button>
    );
};

export default ButtonLogin;
