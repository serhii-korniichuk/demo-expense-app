import React from "react";

import styles from "./FormItem.module.scss";
import stylesError from "../../scss/FormError.module.scss";
import eyeOff from "../../common/img/eyeOff.svg";

export const FormItem = React.forwardRef(
    (
        {
            name,
            label,
            type = "text",
            isPassword = false,
            placeholder = "",
            errors,
            ...rest
        },
        ref,
    ) => {
        const [isVisiblePassword, setVisiblePassword] = React.useState(false);

        return (
            <div className={styles.form}>
                <label htmlFor={name}>{label}</label>
                {isPassword ? (
                    <input
                        name={name}
                        type={isVisiblePassword ? "text" : "password"}
                        placeholder={placeholder}
                        {...rest}
                        ref={ref}
                    />
                ) : (
                    <input
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        {...rest}
                        ref={ref}
                    />
                )}

                {isPassword && (
                    <img
                        src={eyeOff}
                        alt=''
                        onClick={() => setVisiblePassword(!isVisiblePassword)}
                    />
                )}

                {errors[name]?.message && (
                    <p className={stylesError.errorMessage}>
                        {errors[name]?.message}
                    </p>
                )}
            </div>
        );
    },
);
