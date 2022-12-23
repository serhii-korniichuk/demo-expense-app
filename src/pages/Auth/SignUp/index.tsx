import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import {
    PasswordInput,
    TextField
} from '../../../components';
import { signUp } from '../../../api';

import 'react-toastify/dist/ReactToastify.css';

interface Props {
    switchPage: () => void;
}

const SignUpPage: FC<Props> = (props) => {
    const { switchPage } = props;
    const sendDataToServer = async (data: any) => {
        try {
            await signUp(data);
            toast.success("Account created!")
            handleReset(values);
            switchPage();
        } catch (e: any) {
            if (e.response.data.statusCode === 409) {
                toast.error("This User Name is already exist!")
                return;
            }
            toast.error("Server error!")
        }
    }

    const {
        handleChange,
        values,
        handleSubmit,
        errors,
        touched,
        handleReset
    } = useFormik({
        initialValues: {
            name: '',
            userName: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            userName: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required').min(8, 'Password must be at least 8 characters long'),
            confirmPassword: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: values => {
            sendDataToServer(values);
        },
    });

    return (
        <>
            <div className='page-name'>
                Sign Up
            </div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Full Name'
                    name={'name'}
                    value={values.name}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                />
                <TextField
                    label='User Name'
                    name={'userName'}
                    value={values.userName}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                />
                <PasswordInput
                    label={'Password'}
                    name={'password'}
                    value={values.password}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                />
                <PasswordInput
                    label={'Confirm Password'}
                    name={'confirmPassword'}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                />
                <button className='submit-button' type='submit'>Sign Up</button>
            </form>
            <div className='link-wrapper'>
                <div>I have an account? <span className='link' onClick={switchPage}>Go to Sign in</span></div>
            </div>
        </>
    )
}

export default SignUpPage;
