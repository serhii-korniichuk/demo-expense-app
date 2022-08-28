import React from "react";
import { useSelector } from "react-redux";
import { FromItem, ButtonLogin } from "../index";

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
            <FromItem
                label='Full Name'
                id='fullName'
                value={fullName}
                valueChang={handleFullName}
                placeholder='Example Name'
            />
            <FromItem
                label='User Name'
                id='name'
                value={userName}
                valueChang={handleUserName}
                placeholder='Example123'
            />
            <FromItem
                label='Password'
                id='password'
                value={password}
                valueChang={handlePassword}
                isPassword
                placeholder='password'
            />
            <FromItem
                label='ConfirmPassword '
                id='confirmPassword '
                value={confirmPassword}
                valueChang={handleConfirmPassword}
                isPassword
                placeholder='repeat password'
            />
            {error && error.message && (
                <p style={{ color: "red", padding: "0px 0px 20px 0px" }}>
                    {error.message}
                </p>
            )}
            {(!password || !userName || !confirmPassword || !password) &&
                clickButton && (
                    <p style={{ color: "red", padding: "0px 0px 20px 0px" }}>
                        You have not filled the form
                    </p>
                )}
            {password !== confirmPassword && clickButton && (
                <p style={{ color: "red", padding: "0px 0px 20px 0px" }}>
                    Passwords do not match
                </p>
            )}
            <ButtonLogin
                text='Sign Up'
                handleClick={handleClickSignUp}
                isLoading={isLoading}
            />
        </>
    );
};
