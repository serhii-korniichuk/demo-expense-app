import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {PAGE, ROUTES} from "../../utils";
import Input from "../../shared/UI/Input";
import PasswordInput from "../../shared/UI/PasswordInput";
import AuthService from "../../services/auth/auth.service";

import {useForm} from "react-hook-form";

interface ISignUp {
    pageHandler: (page: PAGE) => void
}

export interface ISignUpData {
    fullName: string,
    username: string,
    password: string,
    confirmedPassword: string
}

const SignUp: FC<ISignUp> = ({pageHandler}) => {
    const { control, handleSubmit, formState: { errors },watch, getValues, reset} = useForm<ISignUpData>({mode: 'onChange'});
    const {password, confirmedPassword} = getValues();
    const isTheSamePassword = password === confirmedPassword;
    const navigate = useNavigate();

    const onSubmit = async (data: ISignUpData) => {
        const {username, password, fullName: displayName} = data;

        const response= await AuthService.register(username, password, displayName);
        localStorage.setItem("username", response?.data?.username)
        navigate(ROUTES.Home)

        reset()
    }

    console.log(errors)

    return (
        <div className="sign" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title">Sign Up</h2>

            <form className="sign__form">
                <Input
                    name="fullName"
                    control={control}
                    title="Full Name"
                />
                {errors?.fullName && <p className="error">FullName is required and min length is 6</p>}
                <Input
                    name="username"
                    control={control}
                    title="User Name"
                />
                {errors?.username && <p className="error">Username is required and min length is 6</p>}
                <PasswordInput
                    name="password"
                    control={control}
                    title="Password"
                />
                {errors?.password && <p className="error">Password must be at least 8 characters long</p>}
                <PasswordInput
                    name="confirmedPassword"
                    control={control}
                    title="Confirm Password"
                />
                {!isTheSamePassword && <p className="error">Password should match</p>}
                <button
                    disabled={!isTheSamePassword}
                    type="submit"
                    className="button sign__form-button">
                    Sign Up
                </button>
            </form>

            <div
                className="sign__no-account">
                I have an account. <a onClick={() => pageHandler(PAGE.SignIn)}>Go to Sign in</a>
            </div>
        </div>
    );
};

export default SignUp
