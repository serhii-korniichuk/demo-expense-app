import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import Service from "../services/Service";
import Eye from "./Eye";
import Spinner from "./Spinner";

import "../style/sign.scss";
import { useEffect } from "react";

const TextInput = ({label, isLast, ...props}) => {
   const [field, meta] = useField(props);
   return (
       <>
            <div className={`sign__fwrapper ${JSON.parse(isLast) ? "sign__fwrapper-lup" : null}`}>
               <h2 className="sign__field">{label}</h2>
               <input {...props} {...field}/>
               {meta.touched && meta.error ? (
                  <div className="sign__field-error">{meta.error}</div>
               ) : null}
            </div>
       </>
   )
};

const AppSignUp = () => {

   const [passwordEye, setPasswordEye] = useState(false);
   const [loading, setLoading] = useState(false);
   const [alreadyReg, setAlreadyReg] = useState(false);
   const [regSuccess, setRegSuccess] = useState(false)

   const { reg } = Service();

   const loadingDone = () => {
      setLoading(false);
      setRegSuccess(true);
   }

   const loadingIsError = () => {
      setLoading(false);
      setRegSuccess(false);
      setAlreadyReg(true);
      
   }

   console.log(loading)
   console.log(regSuccess)
   console.log(alreadyReg)

   useEffect(() => {

   }, [regSuccess, alreadyReg])

   const onLoading = (data) => {
      setLoading(true);
      reg(JSON.stringify(data, ['password', "username", "displayName"], 2))
         .then(loadingDone)
         .catch(loadingIsError)
   }

   const onChangeEye = () => {
      setPasswordEye(!passwordEye);
    };


   const content = !(loading || regSuccess || alreadyReg) ? <button className="sign__submit sign__submit-up" type="submit">Sign Up</button> : null;

   const loadingContent = loading ? <Spinner top={515} left={140}/> : null;

   const errorContent = (!loading && !regSuccess && !content && alreadyReg) ? <div className="sign__already-reg" style={{top: "530px", left:"60px"}}>THIS USERNAME IS TAKEN</div> : null;

   const successContent = (!loading && !alreadyReg && !content && regSuccess) ? <div className="sign__success" style={{top: "530px", left:"125px"}}>SUCCESS ✔</div> : null;

   return (
      <section className="sign">
         <div className="container">
            <div className="sign__wrapper">
               <div className="sign__inner">
                  <h1 className="sign__title">
                     SIGN UP
                  </h1>
                  <Formik
                        initialValues={{
                        password: "",
                        username: "",
                        displayName: "",
                        rpassword: "",
                       }}
                       validationSchema= {Yup.object({
                           displayName: Yup.string()
                                   .min(3, "minimum 3 characters")
                                   .required("required field"),
                           username: Yup.string()
                                    .min(3, "minimum 3 characters")
                                    .required("required field"),
                           password: Yup.string()
                                    .required('no password provided') 
                                    .min(8, 'password is too short - should be 8 chars min')
                                    .matches(/[a-zA-Z]/, 'password should contain latin letters'),
                           rpassword: Yup.string()
                                    .oneOf([Yup.ref('password'), null], "passwords do not match")
                                    .required('required')
                       })}
                       onSubmit= {values => onLoading(values)}>

                     <Form className="sign__form ">
                        <TextInput
                           label="Full Name"
                           isLast="false"
                           type="text" 
                           placeholder="Example Name"
                           id="displayName"
                           name="displayName"
                           autoComplete="off"
                           size="35"
                           />
                        <TextInput
                           label="User Name"
                           isLast="false"
                           type="text" 
                           placeholder="Example123"
                           id="username"
                           name="username"
                           autoComplete="off"
                           size="35"/>

                        <TextInput
                           label="Password"
                           isLast="false"
                           className={`sign__pass sign__pass-${passwordEye ? "input-text" : "input-stars"}`} 
                           type={passwordEye === false ? "password" : "text"} 
                           placeholder={passwordEye ? null : "**********"}
                           id="password"
                           name="password"
                           autoComplete="off"
                           size="40"
                           />

                        <Eye props={passwordEye} onClick={onChangeEye} offset={390}/>

                        <TextInput
                           label="Confirm Password"
                           isLast="true"
                           className={`sign__pass sign__pass-${passwordEye ? "input-text" : "input-stars"}`} 
                           type={passwordEye === false ? "password" : "text"} 
                           placeholder={passwordEye ? null : "**********"}
                           id="rpassword"
                           name="rpassword"
                           autoComplete="off"
                           size="40"
                           />

                        <Eye props={passwordEye} onClick={onChangeEye} offset={470}/>

                        {content}
                        {loadingContent}
                        {errorContent}
                        {successContent}
                     </Form>
                  </Formik>

                  <div className="sign__question">
                     <h3 className="sign__question-text">I have an account.</h3>
                     <Link  to="/">
                        <button className="sign__question-link">Go to Sign in</button>
                     </Link>
                     
                  </div>
                  
               </div>
            </div>
         </div>
      </section>

   )
}

export default AppSignUp;