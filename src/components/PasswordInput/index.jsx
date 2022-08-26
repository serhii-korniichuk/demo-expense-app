import React from 'react';
import PropTypes from 'prop-types';
import styles from './PasswordInput.module.scss';

const PasswordInput = (props) => {
    const {
        error,
        value,
        type,
        setValue,
        inputHandler,
        dirty,
        name,
        passwordVisibility,
        setPasswordVisibility,
    } = props;

    return (
        <div className={styles.form__input}>
            <label
                htmlFor={name}
                className={error ? (styles.error + ' ' + styles.form__input_label) : styles.form__input_label}
            >
                {name}
            </label>
            <div className={styles.password}>
                <input
                    id={name}
                    className={error ? (styles.error__input + ' ' + styles.form__input_field) : styles.form__input_field}
                    type={type}
                    value={value}
                    placeholder={name}
                    onChange={(event) => setValue(event.target.value)}
                    onInput={(event) => inputHandler(event)}
                />
                <div
                    className={error ? (styles.password__decor + ' ' + styles.error__decor) : styles.password__decor}
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                >
                    <div className={styles.password__decor_eye}></div>
                    <div className={passwordVisibility ? (styles.password__decor_line + ' ' + styles.visibility) : styles.password__decor_line}></div>
                </div>
            </div>
            {(dirty && error) && <small className={styles.error__message}>{error}</small>}
        </div>
    );
};

PasswordInput.propTypes = {
    error: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    inputHandler: PropTypes.func.isRequired,
    dirty: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    passwordVisibility: PropTypes.bool.isRequired,
    setPasswordVisibility: PropTypes.func.isRequired,
}

PasswordInput.defaultProps = {
    error: ''
}

export default PasswordInput;