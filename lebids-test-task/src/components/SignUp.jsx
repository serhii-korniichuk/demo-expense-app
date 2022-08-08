import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useFormContent from "../hooks/useFormContent";
import TextInput from "./TextInput";

import "../style/sign.scss";


const AppSignUp = () => {
   const {reg, setEyeParams, setUnderFormUiParams, passwordEye} = useFormContent();

   const onLoading = (data) => {
      reg(JSON.stringify(data, ['password', "username", "displayName"], 2))
   }

   const content = setUnderFormUiParams('sign__submit', "Sign Up",515, 140, 530, 530, 125, 390);
   const eyeTop = setEyeParams(370);
   const eyeBot = setEyeParams(458);

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
                     rpassword: ""}}

                     validationSchema= {Yup.object({
                        displayName: Yup.string()
                                 .min(3, "minimum 3 characters")
                                 .required("required field"),
                        username: Yup.string()
                                 .min(3, "minimum 3 characters")
                                 .required("required field"),
                        password: Yup.string()
                                 .required('required') 
                                 .min(8, 'password is too short - should be 8 chars min.')
                                 .matches(/[a-zA-Z]/, 'password should contain latin letters'),
                        rpassword: Yup.string()
                                 .oneOf([Yup.ref('password'), null], "passwords do not match")
                                 .required('required')})}

                     onSubmit= {values => onLoading(values)}>

                     <Form className="sign__form ">
                        <TextInput
                           label="Full Name"
                           isLast="false"
                           clz="lup"
                           type="text" 
                           placeholder="Example Name"
                           name="displayName"
                           size="35"
                           />
                        <TextInput
                           label="User Name"
                           isLast="false"
                           clz="lup"
                           type="text" 
                           placeholder="Example123"
                           name="username"
                           size="35"/>

                        <TextInput
                           label="Password"
                           isLast="false"
                           clz="lup"
                           className={`sign__pass sign__pass-${passwordEye ? "input-text" : "input-stars"}`} 
                           type={passwordEye === false ? "password" : "text"} 
                           placeholder={passwordEye ? null : "**********"}
                           name="password"
                           size="40"
                           />

                        <TextInput
                           label="Confirm Password"
                           isLast="true"
                           clz="lup"
                           className={`sign__pass sign__pass-${passwordEye ? "input-text" : "input-stars"}`} 
                           type={passwordEye === false ? "password" : "text"} 
                           placeholder={passwordEye ? null : "**********"}
                           name="rpassword"
                           size="40"
                           />

                           {eyeTop}
                           {eyeBot}
                        
                           {content}
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