import React, { useState } from "react";
import styles from "./styles.module.css";
import eyeOff from "../../static/icons/eye-off.svg";

const types = { TEXT: "text", PASSWORD: "password" };

const Input = ({ label, type, error, value, onChange, ...rest }) => {
  const [isPasswordVisible, setVisiblePassword] = useState(false);

  const isPasswordType = type === types.PASSWORD;
  const inputType = isPasswordType ? (isPasswordVisible ? types.TEXT : types.PASSWORD) : type;

  const handleShowPassword = () => {
    setVisiblePassword(!isPasswordVisible);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
        <div className={styles.inputWrapper}>
          <input
            value={value}
            type={inputType}
            onChange={onChange}
            className={`${styles.input} ${isPasswordType ? styles.inputPassword : ""}`}
            {...rest}
          />
          {isPasswordType && (
            <div className={styles.showPasswordToggle} onClick={handleShowPassword}>
              <img src={eyeOff} alt="" />
            </div>
          )}
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </label>
    </div>
  );
};

export default Input;
