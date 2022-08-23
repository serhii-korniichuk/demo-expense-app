import React from 'react';
import styles from './PasswordInput.module.scss';

const PasswordInput = (props) => {
    const {
        inputEl,
        error,
        value,
        setValue = Function.prototype,
        inputHandler = Function.prototype,
        dirty,
        placeholder,
        passwordVisibility,
        setPasswordVisibility = Function.prototype
    } = props;

    return (
        <div className={styles.form__input}>
            <small
                className={styles.form__input_label}
                ref={inputEl}
                style={error ? { color: 'red' } : { color: 'white' }}
            >
                {placeholder}
            </small>
            <div className={styles.password}>
                <input
                    className={styles.form__input_field}
                    type={passwordVisibility ? "text" : "password"}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder={placeholder}
                    style={error ? { borderColor: 'red', color: 'red', width: '306px' } : { borderColor: 'white', color: 'white', width: '306px' }}
                    onFocus={() => {
                        inputEl.current.style.opacity = '1'
                    }}
                    onBlur={(event) => inputHandler(event)}
                />
                <div
                    className={styles.password__decor}
                    style={error ? { borderColor: 'red' } : { borderColor: 'white' }}
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                >
                    <div className={styles.password__decor_eye}></div>
                    <div
                        className={styles.password__decor_line}
                        style={passwordVisibility ? { display: 'none' } : { display: 'block' }}
                    >
                    </div>
                </div>
            </div>
            {(dirty && error) && <small className={styles.error}>{error}</small>}
        </div>
    );
};

export default PasswordInput;