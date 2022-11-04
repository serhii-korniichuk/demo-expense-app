import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form} from 'formik'
import './SignIn.scss'

export const SignIn = () => {
    return (
        <div className="signIn">
        <h1 className="h1__signIn">Sign In</h1>

        <Formik initialValues={{userName: '', password: '',}} onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        }}>
            <Form className="form">
                        <label htmlFor="username">User Name</label>

                <Field id='userName' name='userName' placeholder='Example123' type='username'></Field>
                        <label htmlFor="password">Password</label>

                <Field id='password' name='password' placeholder='1234567890ABCDE' type='password'></Field>
                <button type="submit">Sign In</button>
            </Form>
        </Formik>
        </div>
    )
}
