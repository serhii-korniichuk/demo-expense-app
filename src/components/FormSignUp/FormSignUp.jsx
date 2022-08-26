import React from "react";
import FromItem from "../FromItem/FromItem";
import ButtonLogin from "../ButtonLogin/ButtonLogin";

const FormSignUp = ({
    fullName,
    setFullName,
    userName,
    setUserName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
}) => {
    return (
        <>
            <FromItem
                label='Full Name'
                id='fullName'
                value={fullName}
                valueChang={setFullName}
                placeholder='Example Name'
            />
            <FromItem
                label='User Name'
                id='name'
                value={userName}
                valueChang={setUserName}
                placeholder='Example123'
            />
            <FromItem
                label='Password'
                id='password'
                value={password}
                valueChang={setPassword}
                isPassword
                placeholder='password'
            />
            <FromItem
                label='ConfirmPassword '
                id='confirmPassword '
                value={confirmPassword}
                valueChang={setConfirmPassword}
                isPassword
                placeholder='repeat password'
            />
            <ButtonLogin text='Sign Up' />
        </>
    );
};

export default FormSignUp;
