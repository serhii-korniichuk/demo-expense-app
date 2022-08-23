import React from 'react';
import styles from './TextInput.module.scss';

const TextInput = (props) => {
    const {
        inputEl,
        error,
        value,
        setValue = Function.prototype,
        inputHandler = Function.prototype,
        dirty,
        placeholder
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
            <input
                className={styles.form__input_field}
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={placeholder}
                style={error ? { borderColor: 'red', color: 'red' } : { borderColor: 'white', color: 'white' }}
                onFocus={() => { inputEl.current.style.opacity = '1' }}
                onBlur={(event) => inputHandler(event)}
            />
            {(dirty && error) && <small className={styles.error}>{error}</small>}
        </div>
    );
};

export default TextInput;