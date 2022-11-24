import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import Form from "../../components/application/Form/Form";
import { manageFormButton } from "../../components/application/Form/helpers";
import Button from "../../components/ui/Button/Button";
import routePaths from "../../routes/routePaths";
import AuthService from "../../services/AuthService";
import { isEqual } from "../../utils/utils";
import { SIGN_UP_FIELDS } from "./constants";
import styles from "./styles.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { errors, setErrors, enteredData } = useContext(AuthContext);

  const isDisabled = manageFormButton(errors, enteredData);
  const payload = {
    password: enteredData["password"],
    username: enteredData["user-name"],
    displayName: enteredData["full-name"],
  };

  const handleSubmit = async () => {
    const arePasswordsEqual = isEqual(enteredData["password"], enteredData["confirm-password"]);

    if (!arePasswordsEqual) {
      return setErrors({ ...errors, "confirm-password": "Passwords should be the same" });
    }

    try {
      const { data } = await AuthService.register(payload);
      localStorage.setItem("token", data?.accessToken);
      navigate(routePaths.signIn);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign Up</div>
      <Form fields={SIGN_UP_FIELDS} />
      <Button fullWidth label="Sign Up" onClick={handleSubmit} disabled={isDisabled} />
      <div className={styles.linkWrapper}>
        <span>I have an account.</span>
        <NavLink className={styles.link} to={routePaths.signIn}>
          Go to Sign in
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
