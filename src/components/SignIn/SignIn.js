import React, { useState } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom';
import style from "./signin.module.css"
import Home from '../Home/Home';



let SignIn = () => {
    const [userNameSignUp, setUserNameSignIn] = useState("")
    const [passwordSignIn, setPasswordSignIn] = useState("")
    const [success, setSuccess] = useState(false)

    

    let setToken=(tokenDetails)=>{
        localStorage.setItem('token', tokenDetails )
    }


    const signIn = async (e) => {
        e.preventDefault()
        const { data } = await axios.post(
            "/auth/login",
            JSON.stringify({
                username: userNameSignUp,
                password: passwordSignIn
            }),
            {
                headers: {
                    "Content-type": "application/json",
                }, withCredentials: true
            });
            setToken(data.accessToken)
            setSuccess(true)
    }


    return (
        <div>
            {
                success ? (
                    <Home/>
                ) : (
                    <div className={style.wrapper}>
                        <div className={style.wrapper_main_content}>
                            <div className={style.logo}>
                                <span className={style.logoUp}>InCode</span><br />
                                <span className={style.logoDown}>Finance</span>
                            </div>
                            <h1 className={style.mainHeading}>SIGN IN</h1>
                            <form className={style.form} onSubmit={signIn}>
                                <div className={style.inputElement}>
                                    <label htmlFor='usernamesignup'>User Name:</label>
                                    <input
                                        className={style.input}
                                        type="text"
                                        placeholder='Example123'
                                        id="usernamesignup"
                                        autoComplete='off'
                                        onChange={(e) => { setUserNameSignIn(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className={style.inputElement}>
                                    <label htmlFor='passwordSignIn'>Password:</label>
                                    <input
                                        className={style.input}
                                        placeholder='Enter your password'
                                        type="password"
                                        id='passwordSignIn'
                                        autoComplete='off'
                                        onChange={(e) => { setPasswordSignIn(e.target.value) }}
                                    />
                                </div>

                                <button className={style.button}>Sign In </button>
                            </form>
                            <p>
                                Don't have account yet?
                                <span className='line'>
                                    <Link to='/'>New account</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}



export default SignIn
