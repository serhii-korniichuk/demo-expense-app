import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import style from "./signup.module.css"

const USER_REG_EX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REG_EX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;


let SignUp = () => {


    const [displayName, setdisplayName] = useState("")
    const [username, setuserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [success, setSuccess] = useState(false)
 
   



    const submitHandler = async (e) => {
        e.preventDefault()

        const response = await axios.post(
            "/auth/register",
            JSON.stringify({
                password,
                username,
                displayName

            }),
            {
                headers: {
                    "Content-type": "application/json"
                }, withCredentials: true
            }
        ).then(response => {
            console.log(response.data)
        })

        setSuccess(true)
    }

    return (
        <div >
            {
                success ? (
                    <SignIn />
                ) : (
                    <div className={style.wrapper}>
                        <div className={style.wrapper_main_content}>
                            <div className={style.logo}>
                                <span className={style.logoUp}>InCode</span><br />
                                <span className={style.logoDown}>Finance</span>
                            </div>
                            <h1 className={style.mainHeading}>SIGN UP</h1>
                            <form className={style.form} onSubmit={submitHandler}>
                                <div className={style.inputElement}>
                                    <label className={style.label} htmlFor="displayname">Full Name:</label>
                                    <input
                                        type="text"
                                        className={style.input}
                                        id="displayname"
                                        autoComplete="off"
                                        onChange={(e) => setdisplayName(e.target.value)}
                                        required
                                        placeholder='Example Name'
                                    />
                                </div>

                                <div className={style.inputElement}>
                                    <label className={style.label} htmlFor="username">User Name:</label>
                                    <input
                                        className={style.input}
                                        type="text"
                                        id="username"
                                        autoComplete="off"
                                        onChange={(e) => setuserName(e.target.value)}
                                        required
                                        placeholder='Example 123'

                                    />
                                </div>

                                <div className={style.inputElement}>
                                    <label className={style.label} htmlFor='password'>
                                        Password:
                                    </label>

                                    < input
                                        type="password"
                                        className={style.input}
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder='Enter password'
                                    />
                                </div>

                                <div className={style.inputElement}>
                                    <label className={style.label} htmlFor='confirm_pwd'>
                                        Confirm Password:
                                    </label>
                                    <input
                                        type="password"
                                        className={style.input}
                                        id='confirm_pwd'
                                        onChange={(e) => setPasswordCheck(e.target.value)}
                                        required
                                        placeholder='Confirm password'

                                    ></input>
                                </div>
                                <button className={style.button}>Sign up</button>
                            </form>
                            <p>
                                I have an account.
                                <span className='line'>
                                    <Link to='/signIn'> Go to sign in</Link>

                                </span>
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}




export default SignUp
