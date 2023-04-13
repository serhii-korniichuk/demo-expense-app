import toastr from "toastr";
import { Field, Form, Formik } from "formik";
import { SignupSchema } from "../pages/auth/schema";
import { MyFormValues } from "../pages/auth/types";
import { Button, Label } from "./styles";
import eye_on from "../images/eye-on.svg";
import eye_off from "../images/eye-off.svg";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { registerUser } from "../Redux/authThunk";
import {
  confirmPasswordShownTrigger,
  passwordShownTrigger,
} from "../Redux/passSlice";

export const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const passwordShown = useAppSelector((state) => state.pass.passwordShown);
  const confirmPasswordShown = useAppSelector(
    (state) => state.pass.confirmPasswordShown
  );

  const data: MyFormValues = {
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const goToSignIn = () => {
    const signin = document.getElementById("signin");
    const signup = document.getElementById("signup");
    signin?.setAttribute("style", "display: block");
    signup?.setAttribute("style", "display: none");
  };

  const handleSubmit = async (values: MyFormValues) => {
    const newData: MyFormValues = { ...data, ...values };

    if (newData.password !== newData.confirmPassword) {
      alert("Passwords are different!");

      return;
    }

    try {
      const dataReg = {
        username: newData.userName,
        password: newData.password,
        displayName: newData.userName,
      };
      await dispatch(registerUser(dataReg));
      goToSignIn();
    } catch (error: any) {
      toastr.error(error.message);
    }
  };

  return (
    <div id="signup" className="signup">
      <h1 className="text1">Sign Up</h1>
      <Formik
        initialValues={data}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form__inputBox">
              <Label className="form__inputBox--label" htmlFor="fullName">
                Full Name
              </Label>
              <Field
                name="fullName"
                id="fullName"
                type="text"
                placeholder="Example Name"
                className="form__inputBox--input"
              />
              {errors.fullName && touched.fullName ? (
                <div className="error">{errors.fullName}</div>
              ) : null}
            </div>

            <div className="form__inputBox">
              <Label className="form__inputBox--label" htmlFor="userName">
                User Name
              </Label>
              <Field
                name="userName"
                id="userName"
                type="text"
                placeholder="Example123"
                className="form__inputBox--input"
              />
              {errors.userName && touched.userName ? (
                <div className="error">{errors.userName}</div>
              ) : null}
            </div>

            <div className="form__inputBox">
              <Label className="form__inputBox--label" htmlFor="password">
                Password
              </Label>
              <div className="inputWithIcon">
                <Field
                  name="password"
                  id="password"
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

            <div className="form__inputBox">
              <Label
                className="form__inputBox--label"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </Label>
              <div className="inputWithIcon">
                <Field
                  name="confirmPassword"
                  id="confirmPassword"
                  type={confirmPasswordShown ? "text" : "password"}
                  className="form__inputBox--input"
                />
                {!confirmPasswordShown ? (
                  <img
                    src={eye_off}
                    alt="eye_off"
                    className="eye_off"
                    onClick={() => dispatch(confirmPasswordShownTrigger())}
                  />
                ) : null}
                {confirmPasswordShown ? (
                  <img
                    src={eye_on}
                    alt="eye_on"
                    className="eye_on"
                    onClick={() => dispatch(confirmPasswordShownTrigger())}
                  />
                ) : null}
              </div>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="error">{errors.confirmPassword}</div>
              ) : null}
            </div>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>

      <div className="additional__links">
        <span className="text2">I have an account.</span>
        <button
          className="text2 text2__link"
          id="signInBtn"
          onClick={goToSignIn}
        >
          &nbsp;Go to Sign in
        </button>
      </div>
    </div>
  );
};
