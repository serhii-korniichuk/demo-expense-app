import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
    const {
        text,
        disabled,
        type,
        handleClick,
        className
    } = props;
    return (
        <button
            className={className}
            disabled={disabled}
            type={type}
            onClick={() => handleClick()}
        >
            <span className={styles.form__btn_text}>{text}</span>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    className: PropTypes.string
}

Button.defaultProps = {
    disabled: false,
    handleClick: () => { },
    className: styles.form__btn,
}

export default Button;