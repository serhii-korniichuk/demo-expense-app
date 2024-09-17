import React from "react";
import FormErrorTitle from "../FormErrorTitle";
import FormIcon from "./components/FormIcon";
import s from "./FormInput.module.scss";

interface FormInputProps {
  label: string;
  type: "text" | "password";
  inputHandler: (value: string) => void;
  placeHolder?: string;
  value: string;
  showPassword?: () => void;
  name: string;
  blurHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  isError: boolean;
}

const FormInput = ({
  inputHandler,
  label,
  type,
  value,
  placeHolder,
  name,
  showPassword,
  blurHandler,
  errorMessage,
  isError,
}: FormInputProps) => {
  const isPasswordType = label === "Password" || label === "Confirm Password";
  const isShowPassword = isPasswordType && type === "password";

  return (
    <div className={s.InputWrapper}>
      <label className={s.InputLabel}>{label}</label>
      <div className={s.PasswordWrapper}>
        <input
          type={type}
          name={name}
          onBlur={blurHandler}
          className={s.FormInput}
          placeholder={placeHolder}
          onChange={(event) => inputHandler(event.target.value)}
          value={value}
        />
        {isPasswordType && (
          <FormIcon
            isShowPassword={isShowPassword}
            showPassword={showPassword}
          />
        )}
      </div>
      {isError && errorMessage && (
        <FormErrorTitle>{errorMessage}</FormErrorTitle>
      )}
    </div>
  );
};

export default FormInput;
