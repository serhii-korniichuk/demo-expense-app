import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    const {
        text,
        disabled = false
    } = props;
    return (
        <button
            className={styles.form__btn}
            disabled={disabled}
            type="submit"
        >
            <span className={styles.form__btn_text}>{text}</span>
        </button>
    );
};

export default Button;