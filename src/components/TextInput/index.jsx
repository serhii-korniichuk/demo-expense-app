import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.scss';

const TextInput = (props) => {
    const {
        error,
        value,
        type,
        setValue,
        inputHandler,
        dirty,
        name
    } = props;

    return (
        <div className={styles.form__input}>
            <label
                htmlFor={name}
                className={error ? (styles.form__input_label + ' ' + styles.error) : styles.form__input_label}
            >
                {name}
            </label>
            <input
                id={name}
                className={error ? (styles.form__input_field + ' ' + styles.error__input) : styles.form__input_field}
                type={type}
                value={value}
                placeholder={name}
                onChange={(event) => setValue(event.target.value)}
                onInput={(event) => inputHandler(event)}
            />
            {(dirty && error) && <small className={styles.error__message}>{error}</small>}
        </div>
    );
};

TextInput.propTypes = {
    error: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    inputHandler: PropTypes.func.isRequired,
    dirty: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

TextInput.defaultProps = {
    error: ''
}

export default TextInput;