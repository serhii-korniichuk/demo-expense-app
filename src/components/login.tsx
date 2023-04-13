import toastr from "toastr";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { SigninSchema } from "../pages/auth/schema";
import { MyFormValues } from "../pages/auth/types";
import { Button, Label } from "./styles";
import eye_on from "../images/eye-on.svg";
import eye_off from "../images/eye-off.svg";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { passwordShownTrigger } from "../Redux/passSlice";
import { loginUser } from "../Redux/authThunk";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const passwordShown = useAppSelector((state) => state.pass.passwordShown);

  const navigate = useNavigate();
  const data: MyFormValues = {
    userName: "",
    password: "",
  };

  const handleSubmit = async (values: MyFormValues) => {
    const newData: MyFormValues = { ...data, ...values };

    try {
      const user = {
        username: newData.userName,
        password: newData.password,
      };
      await dispatch(loginUser(user));
      navigate("/home");
    } catch (error: any) {
      toastr.error(error.message, "Authorisation failed!");
    }
  };

  const goToSignUp = () => {
    const signin = document.getElementById("signin");
    const signup = document.getElementById("signup");
    signin?.setAttribute("style", "display: none");
    signup?.setAttribute("style", "display: block");
  };

  return (
    <div id="signin">
      <h1 className="text1">Sign In</h1>
      <Formik
        initialValues={data}
        validationSchema={SigninSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form__inputBox">
              <Label className="form__inputBox--label" htmlFor="userNameLog">
                User Name
              </Label>
              <Field
                name="userName"
                id="userNameLog"
                type="text"
                placeholder="Example123"
                className="form__inputBox--input"
              />
              {errors.userName && touched.userName ? (
                <div className="error">{errors.userName}</div>
              ) : null}
            </div>

            <div className="form__inputBox">
              <Label className="form__inputBox--label" htmlFor="passwordLog">
                Password
              </Label>
              <div className="inputWithIcon">
                <Field
                  name="password"
                  id="passwordLog"
                  type={passwordShown ? "text" : "password"}
                  className="form__inputBox--input"
                />
                {!passwordShown ? (
                  <img
                    src={eye_off}
                    alt="eye_off"
                    className="eye_off"
                    onClick={() => dispatch(passwordShownTrigger())}
                  />
                ) : null}
                {passwordShown ? (
                  <img
                    src={eye_on}
                    alt="eye_on"
                    className="eye_on"
                    onClick={() => dispatch(passwordShownTrigger())}
                  />
                ) : null}
              </div>
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>

      <div className="additional__links">
        <span className="text2">Don’t have account yet?</span>
        <button
          className="text2 text2__link"
          id="signInBtn"
          onClick={goToSignUp}
        >
          &nbsp;New Account
        </button>
      </div>
    </div>
  );
};
