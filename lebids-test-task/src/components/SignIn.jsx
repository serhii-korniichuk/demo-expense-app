import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import * as Yup from "yup";
import Service from "../services/Service";
import "../style/sign.scss";

const AppSignIn = () => {
   const [passwordEye, setPasswordEye] = useState(false);

   const TextInput = ({label, ...props}) => {
      const [field, meta] = useField(props);
      return (
          <>
            <div className="sign__fwrapper">
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
      <section className="sign">
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
                        <Form className="sign__form">

                           <TextInput
                              label="User Name"
                              type="text" 
                              placeholder="Example123"
                              id="username"
                              name="username" 
                              autocomplete="off"/>
                           
                           <TextInput
                              label="Password"
                              placeholder="**********"
                              id="password"
                              name="password" 
                              className={`sign__pass-${passwordEye ? "input-text" : "input-stars"}`} 
                              type={passwordEye === false ? "password" : "text"} 
                              autocomplete="off"/>

                           <Eye props={passwordEye} onClick={onChangeEye}/>

                           <button className="sign__submit" type="submit">Sign In</button>
                        </Form>
                     </Formik>

                  <div className="sign__question">
                     <h3 className="sign__question-text">Don`t have account yet?</h3>
                     <button className="sign__question-link">New Account</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

   )
}

const Eye = ({props, onClick}) => {
   const style = {
      position: "absolute",
      top: "305px",
      left: "320px",
      transform: "scale(1.4)"
   }
   return(
      props ?  <AiOutlineEye style={style} onClick={onClick} /> : 
               <AiOutlineEyeInvisible style={style} onClick={onClick}/>
   )
}

export default AppSignIn;