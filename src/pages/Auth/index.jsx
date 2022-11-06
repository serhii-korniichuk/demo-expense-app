import { useState } from "react";
import { Typography } from "@mui/material";
import Input from "components/Input";
import Logo from "assets/Logo";
import { Button } from "@mui/material";
import { loginFields, registrationFields } from "./fields";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import authStore from "stores/authStore";

import getStyles from "./styles";

const schema = yup.object().shape({
  password: yup.string().min(8, "Minimum 8 symbols"),
  confirmPassword: yup
    .string()
    .min(8, "Minimum 8 symbols")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Auth = () => {
  const classes = getStyles();
  const [formStatus, setFormStatus] = useState(
    sessionStorage.getItem("formStatus") || "login"
  );
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const { login, registration } = authStore;

  const formFields = formStatus === "login" ? loginFields : registrationFields;

  const handleLinkClick = () => {
    if (formStatus === "login") {
      sessionStorage.setItem("formStatus", "registration");
      setFormStatus("registration");
    } else {
      sessionStorage.setItem("formStatus", "login");
      setFormStatus("login");
    }
  };
  const handleFormSubmit = handleSubmit((data) => {
    if (formStatus === "login") {
      login({ payload: data, navigate });
    } else {
      const { confirmPassword, ...payload } = data;
      registration({
        payload,
        changeFormStatus: () => {
          sessionStorage.setItem("formStatus", "login");
          setFormStatus("login");
          reset();
        },
      });
    }
  });
  return (
    <div style={classes.wrapper}>
      <div style={classes.content}>
        <Logo sx={classes.logo} />
        <Typography variant="h1" sx={classes.title}>
          Sign {formStatus === "login" ? "In" : "Up"}
        </Typography>
        <form style={classes.form} onSubmit={handleFormSubmit}>
          {formFields.map((formField) => (
            <Controller
              control={control}
              name={formField.name}
              defaultValue=""
              key={formField.name}
              rules={{
                minLength:
                  formField.name.toLowerCase().includes("password") && 8,
              }}
              render={({ field }) => (
                <Input
                  topLabel={formField.label}
                  placeholder={formField.placeholder}
                  variant="standard"
                  sx={classes.input}
                  isPassword={formField.name.toLowerCase().includes("password")}
                  field={field}
                  errorText={
                    errors[formField.name] && errors[formField.name].message
                  }
                  error={Boolean(errors[formField.name])}
                  required
                />
              )}
            />
          ))}
          <Button variant="filled" sx={classes.button} type="submit">
            Sign {formStatus === "login" ? "In" : "Up"}
          </Button>
          <Typography variant="body2" style={classes.info}>
            {formStatus === "login"
              ? "Don’t have account yet?"
              : "I have an account."}
            &nbsp;
            <span style={classes.link} onClick={handleLinkClick}>
              {formStatus === "login" ? "New Account" : "Go to Sign in"}
            </span>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Auth;
