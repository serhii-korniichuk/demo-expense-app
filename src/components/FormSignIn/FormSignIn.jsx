import React from "react";
import { useSelector } from "react-redux";

import { FormItem, ButtonLogin } from "../index";
import styles from "../../scss/FormError.module.scss";

export const FormSignIn = ({
    handleUserName,
    handlePassword,
    clickButton,
    handleClickSignIn,
}) => {
    const { userName, password } = useSelector(({ auth }) => auth.formData);
    const { isLoading, error } = useSelector(({ auth }) => auth);

    return (
        <>
            <FormItem
                label='User Name'
                id='name'
                value={userName}
                valueChang={handleUserName}
                placeholder='Example123'
            />
            <FormItem
                label='Password'
                id='password'
                value={password}
                valueChang={handlePassword}
                isPassword
                placeholder='password'
            />
            {error && error.message && (
                <p className={styles.errorMessage}>{error.message}</p>
            )}
            {(!password || !userName) && clickButton && (
                <p className={styles.errorMessage}>
                    You have not filled the form
                </p>
            )}
            <ButtonLogin
                isDisabled={password && userName && true}
                text='Sign in'
                handleClick={handleClickSignIn}
                isLoading={isLoading}
            />
        </>
    );
};
