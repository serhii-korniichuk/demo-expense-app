import React, {FC, useState} from 'react';
import "../../styles/index.scss";
import Input from "../../shared/UI/Input";
import PasswordInput from "../../shared/UI/PasswordInput";
import {PAGE, ROUTES} from "../../utils";
import {useForm} from "react-hook-form";
import AuthService from "../../services/auth/auth.service";
import {useNavigate} from "react-router-dom";

interface ISignIn {
    pageHandler: (page: PAGE) => void
}
interface ISignInForm {
    username: string,
    password: string
}

const SignIn: FC<ISignIn> = ({pageHandler}) => {
    const [error, setError] = useState("")
    const { control, handleSubmit, formState: { errors }, reset } = useForm<ISignInForm>({mode: 'onChange'});
    const navigate = useNavigate();

    const onSubmit = async (data: ISignInForm) => {
        try {
            const {password, username} = data

            const response = await AuthService.login(username, password);
            localStorage.setItem("accessToken", response?.data?.accessToken)

            navigate(ROUTES.Home)
            setError("");
            reset()
        } catch(error: any){
            setError(error?.message)
            reset();
        }
    }

    const isDisabled = !!errors?.username?.type || !!errors?.password?.type;

    return (
        <div className="sign">
            <h2 className="title">Sign In</h2>

            <form className="sign__form" onSubmit={handleSubmit(onSubmit)}>
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
                <button
                    disabled={isDisabled}
                    type="submit"
                    className="button sign__form-button">
                    Sign Up
                </button>
                {error && <p className="error">{error}</p>}
           </form>

            <div className="sign__no-account">Don’t have account yet?  <a onClick={() => pageHandler(PAGE.SignUp)}>New Account</a></div>
        </div>
    );
};

export default SignIn;