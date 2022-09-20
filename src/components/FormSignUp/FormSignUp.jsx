import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormItem, ButtonLogin } from "../index";
import styles from "../../scss/FormError.module.scss";
import { schema } from "./schemaFormSignUp";

export const FormSignUp = ({ handleClickSignUp }) => {
    const { isLoading, error } = useSelector(({ auth }) => auth);

    const [submitted, setSubmitted] = React.useState();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        setSubmitted(data);
    };

    React.useEffect(() => {
        if (isValid) {
            handleClickSignUp(submitted);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitted]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormItem
                    label='Full Name'
                    name='fullName'
                    {...register("fullName")}
                    placeholder='Example Name'
                    errors={errors}
                />
                <FormItem
                    label='User Name'
                    name='userName'
                    {...register("userName")}
                    placeholder='Example123'
                    errors={errors}
                />
                <FormItem
                    label='Password'
                    name='password'
                    {...register("password")}
                    isPassword
                    placeholder='password'
                    errors={errors}
                />
                <FormItem
                    label='Confirm Password'
                    name='confirmPassword'
                    {...register("confirmPassword")}
                    isPassword
                    placeholder='repeat password'
                    errors={errors}
                />
                {error && error.message && (
                    <p className={styles.errorMessage}>{error.message}</p>
                )}

                <ButtonLogin text='Sign Up' isLoading={isLoading} />
            </form>
        </>
    );
};
