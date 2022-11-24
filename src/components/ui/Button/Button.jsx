import React from "react";
import styles from "./styles.module.css";

const Button = ({ fullWidth, label, onClick, ...rest }) => {
  const fullWidthClassName = `${fullWidth ? styles.fullWidth : ""}`;

  return (
    <button className={`${styles.button} ${fullWidthClassName}`} onClick={onClick} {...rest}>
      {label}
    </button>
  );
};

export default Button;
