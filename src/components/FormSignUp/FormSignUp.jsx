import React from "react";
import { useSelector } from "react-redux";
import { FormItem, ButtonLogin } from "../index";
import styles from "../../scss/FormError.module.scss";

export const FormSignUp = ({
    handleClickSignUp,
    handleFullName,
    handleUserName,
    handlePassword,
    handleConfirmPassword,
    clickButton,
}) => {
    const { fullName, userName, password, confirmPassword } = useSelector(
        ({ auth }) => auth.formData,
    );
    const { isLoading, error } = useSelector(({ auth }) => auth);

    return (
        <>
            <FormItem
                label='Full Name'
                id='fullName'
                value={fullName}
                valueChang={handleFullName}
                placeholder='Example Name'
            />
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
            <FormItem
                label='ConfirmPassword '
                id='confirmPassword '
                value={confirmPassword}
                valueChang={handleConfirmPassword}
                isPassword
                placeholder='repeat password'
            />
            {error && error.message && (
                <p className={styles.errorMessage}>{error.message}</p>
            )}
            {(!password || !userName || !confirmPassword || !password) &&
                clickButton && (
                    <p className={styles.errorMessage}>
                        You have not filled the form
                    </p>
                )}
            {password !== confirmPassword && clickButton && (
                <p className={styles.errorMessage}>Passwords do not match</p>
            )}
            <ButtonLogin
                text='Sign Up'
                handleClick={handleClickSignUp}
                isLoading={isLoading}
            />
        </>
    );
};
