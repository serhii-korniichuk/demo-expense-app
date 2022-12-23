import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { PasswordInput, TextField } from '../../../components';
import { setToken } from "../../../features/currentUser/userSlice";
import { signIn } from '../../../api';

interface Props {
    switchPage: () => void;
}

const SignInPage: FC<Props> = (props) => {
    const { switchPage } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sendDataToServer = async (data: any) => {
        try {
            const userData = await signIn(data);
            dispatch(setToken(userData.accessToken))
            navigate('/home', { replace: true })
        } catch (e: any) {
            if (e.response.data.statusCode === 404) {
                toast.error("This User not found!")
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
        touched
    } = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            sendDataToServer(values);
        },
    });

    return (
        <>
            <div className='page-name'>
                Sign in
            </div>
            <form onSubmit={handleSubmit}>
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
                <button className='submit-button' type='submit'>Sign In</button>
            </form>

            <div className='link-wrapper'>
                <div>Don't have account yet? <span className='link' onClick={switchPage}>New account</span></div>
            </div>
        </>
    )
}

export default SignInPage;
