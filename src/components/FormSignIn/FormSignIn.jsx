import React from "react";
import { useSelector } from "react-redux";

import { FromItem, ButtonLogin } from "../index";

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
            {error && error.message && (
                <p style={{ color: "red", padding: "0px 0px 20px 0px" }}>
                    {error.message}
                </p>
            )}
            {(!password || !userName) && clickButton && (
                <p style={{ color: "red", padding: "0px 0px 20px 0px" }}>
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
