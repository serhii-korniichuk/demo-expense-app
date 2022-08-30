import React from "react";

import styles from "./FormItem.module.scss";
import eyeOff from "../../common/img/eyeOff.svg";

export const FormItem = ({
    label,
    value,
    valueChang,
    type = "text",
    isPassword = false,
    id,
    placeholder = "",
}) => {
    const [isVisiblePassword, setVisiblePassword] = React.useState(false);

    return (
        <div className={styles.form}>
            <label htmlFor={id}>{label}</label>
            {isPassword ? (
                <input
                    value={value}
                    onChange={(e) => valueChang(e.target.value)}
                    id={id}
                    type={isVisiblePassword ? "text" : "password"}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    value={value}
                    onChange={(e) => valueChang(e.target.value)}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                />
            )}
            {isPassword && (
                <img
                    src={eyeOff}
                    alt=''
                    onClick={() => setVisiblePassword(!isVisiblePassword)}
                />
            )}
        </div>
    );
};
