import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import routePaths from "../../routes/routePaths";
import AuthService from "../../services/AuthService";
import Button from "../../components/ui/Button/Button";
import Form from "../../components/application/Form/Form";
import { manageFormButton } from "../../components/application/Form/helpers";
import { SIGN_IN_FIELDS } from "./constants";
import styles from "./styles.module.css";

const SignIn = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const { errors, enteredData } = useContext(AuthContext);

  const isDisabled = manageFormButton(errors, enteredData);
  const payload = { password: enteredData["password"], username: enteredData["user-name"] };

  const handleSubmit = async () => {
    try {
      const { data } = await AuthService.login(payload);
      localStorage.setItem("token", data?.accessToken);
      setAuth(true);
      navigate(routePaths.base);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign In</div>
      <Form fields={SIGN_IN_FIELDS} />
      <Button fullWidth disabled={isDisabled} label="Sign In" onClick={handleSubmit} />
      <div className={styles.linkWrapper}>
        <span>Don`t have account yet?</span>
        <NavLink className={styles.link} to={routePaths.signUp}>
          New Account
        </NavLink>
      </div>
    </div>
  );
};

export default SignIn;
