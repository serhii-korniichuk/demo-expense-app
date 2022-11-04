import React from 'react'
import './AuthDiv.scss'
import { SignUp } from "../SignUp"
import { SignIn } from "../SignIn"
import { useState, useEffect } from "react"

const AuthDiv = (props:any) => {
const [switchVar, setSwitchVar] = useState(0)

const onHandleToSignIn = () => {
    setSwitchVar(1)
}
const onHandleToSignUp = () => {
    setSwitchVar(0)
}

if (switchVar === 0 ) {
  return (
    <div className="authDiv"><SignUp></SignUp>
            <span> I have an account.</span> 

    <button className="buttonToSignIn" onClick={onHandleToSignIn}> Go to Sign In</button>
</div>
    
  )
} else  return (
    <div className="authDiv"><SignIn></SignIn>
            <span> Don't have account yet?</span>

        <button className="buttonToSignUp" onClick={onHandleToSignUp}> New Account</button>
</div>
  )

}

export default AuthDiv