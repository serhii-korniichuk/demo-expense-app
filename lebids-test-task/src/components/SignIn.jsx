import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Service from "../services/Service";
import "../style/sign.scss";
import Eye from "./Eye";

const AppSignIn = () => {
   const [passwordEye, setPasswordEye] = useState(false);

   const TextInput = ({label, isLast, ...props}) => {
      const [field, meta] = useField(props);
      return (
          <>
               <div className={`sign__fwrapper ${JSON.parse(isLast) ? "sign__fwrapper-lin" : null}`}>
                  <h2 className="sign__field">{label}</h2>
                  <input {...props} {...field}/>
                  {meta.touched && meta.error ? (
                     <div className="sign__field-error">{meta.error}</div>
                  ) : null}
               </div>
          </>
      )
   };

   const onChangeEye = () => {
      setPasswordEye(!passwordEye);
    };

   const { auth } = Service();

   return (
      <section className="sign sign-in">
         <div className="container">
            <div className="sign__wrapper">
               <div className="sign__inner">
                  <h1 className="sign__title" >
                     SIGN IN
                  </h1>
                     <Formik
                     initialValues={{
                        username: "",
                        password: "",
                     }}
                     validationSchema= {Yup.object({
                        username: Yup.string()
                                    .min(3, "minimum 3 characters")
                                    .required("required field"),
                                    password: Yup.string()
                                    .required('no password provided') 
                                    .min(8, 'password is too short - should be 8 chars min')
                                    .matches(/[a-zA-Z]/, 'password can only contain latin letters'),
                        })}
                    onSubmit= {values => auth(JSON.stringify(values, ['password', "username"], 2))
                    }>
                        <Form className="sign__form ">

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
                              isLast="true"
                              placeholder={passwordEye ? null : "**********"}
                              id="password"
                              name="password" 
                              className={`sign__pass-${passwordEye ? "input-text" : "input-stars"}`} 
                              type={passwordEye === false ? "password" : "text"} 
                              autoComplete="off"
                              size="40"/>

                           <Eye props={passwordEye} onClick={onChangeEye} offset={302}/>

                           <button className="sign__submit sign__submit-in" type="submit">Sign In</button>
                        </Form>
                     </Formik>

                  <div className="sign__question sign__question-in">
                     <h3 className="sign__question-text">Don`t have account yet?</h3>
                     <Link  to="/sign-up">
                        <button className="sign__question-link">Go to Sign up</button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

   )
}



export default AppSignIn;