import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextInput from "./TextInput";
import "../style/sign.scss";
import useFormContent from "../hooks/useFormContent";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AppSignIn = () => {
   const { auth, setEyeParams, setUnderFormUiParams, passwordEye } = useFormContent();
   const navigate = useNavigate();
   const { signin } = useAuth();


   const setAccess = (data) => {
      localStorage.setItem("user", data.accessToken)
      signin(data.accessToken, () => navigate("/main", { replace: true }))
   }

   const onLoading = (data) => {
      auth(JSON.stringify(data, ["username", 'password'], 2))
         .then(setAccess)
   }

   const content = setUnderFormUiParams('sign__submit', "Sign In", 355, 140, 370, 370, 125, 235);
   const eye = setEyeParams(298);


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

                     validationSchema={Yup.object({
                        username: Yup.string()
                           .min(3, "minimum 3 characters")
                           .required("required field"),
                        password: Yup.string()
                           .required('required')
                           .min(8, 'password is too short - should be 8 chars min.')
                           .matches(/[a-zA-Z]/, 'password should contain latin letters'),
                     })}

                     onSubmit={values => onLoading(values)}>

                     <Form className="sign__form ">
                        <TextInput
                           label="User Name"
                           isLast="false"
                           clz="lin"
                           type="text"
                           placeholder="Example123"
                           name="username"
                           size="35" />

                        <TextInput
                           label="Password"
                           isLast="true"
                           clz="lin"
                           placeholder={passwordEye ? null : "**********"}
                           name="password"
                           className={`sign__pass-${passwordEye ? "input-text" : "input-stars"}`}
                           type={passwordEye === false ? "password" : "text"}
                           size="40" />
                        {eye}
                        {content}
                     </Form>
                  </Formik>
                  <div className="sign__question sign__question-in">
                     <h3 className="sign__question-text">Don`t have account yet?</h3>
                     <Link to="/sign-up">
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