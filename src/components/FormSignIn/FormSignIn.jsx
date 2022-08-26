import React from "react";
import FromItem from "../FromItem/FromItem";
import ButtonLogin from "../ButtonLogin/ButtonLogin";

const FormSignIn = ({ userName, setUserName, password, setPassword }) => {
    return (
        <>
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
            <ButtonLogin text='Sign in' />
        </>
    );
};

export default FormSignIn;
