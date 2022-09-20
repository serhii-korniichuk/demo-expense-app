import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormItem, ButtonLogin } from "../index";
import styles from "../../scss/FormError.module.scss";
import { schema } from "./schemaFormSignIn";

export const FormSignIn = ({ handleClickSignIn }) => {
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
            handleClickSignIn(submitted);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitted]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormItem
                    name='userName'
                    label='User Name'
                    {...register("userName")}
                    placeholder='Example123'
                    errors={errors}
                />

                <FormItem
                    name='password'
                    label='Password'
                    {...register("password")}
                    isPassword={true}
                    placeholder='password'
                    errors={errors}
                />

                {error && error.message && (
                    <p className={styles.errorMessage}>{error.message}</p>
                )}

                <ButtonLogin text='Sign in' isLoading={isLoading} />
            </form>
        </>
    );
};
