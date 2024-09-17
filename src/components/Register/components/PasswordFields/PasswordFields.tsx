import React from "react";
import FormInput from "../../../../UI/FormInput";
import { ENames } from "../../../Login/components/LoginFields/types";

interface PasswordFieldsProps {
  setUserPassword: (value: string) => void;
  setUserConfirmPassword: (value: string) => void;
  setShowUserConfirmPassword: () => void;
  showUserPassword: boolean;
  showUserConfirmPassword: boolean;
  userPassword: string;
  setShowUserPassword: () => void;
  userConfirmPassword: string;
  isPasswordError: boolean;
  setIsPasswordError: (value: boolean) => void;
  isConfirmPasswordError: boolean;
  setIsConfirmPasswordError: (value: boolean) => void;
}

const PasswordFields = ({
  setShowUserConfirmPassword,
  setShowUserPassword,
  setUserConfirmPassword,
  setUserPassword,
  showUserConfirmPassword,
  showUserPassword,
  userConfirmPassword,
  userPassword,
  isPasswordError,
  isConfirmPasswordError,
  setIsConfirmPasswordError,
  setIsPasswordError,
}: PasswordFieldsProps) => {
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    React.useState("");

  const passwordHanlder = (value: string) => {
    setUserPassword(value);
    setPasswordErrorMessage("");

    const passwordnRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordnRegex.test(value)) {
      setIsPasswordError(true);
      return setPasswordErrorMessage(
        "The password must contain at least eight characters, at least one letter, one number and one special character"
      );
    }

    setIsPasswordError(false);
  };

  const confirmPasswordHanlder = (value: string) => {
    setUserConfirmPassword(value);
    setConfirmPasswordErrorMessage("");

    if (value !== userPassword) {
      setIsConfirmPasswordError(true);
      return setConfirmPasswordErrorMessage("Passwords do not match");
    }
    setIsConfirmPasswordError(false);
  };

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;

    switch (eventTarget.name) {
      case ENames.PASSWORD:
        setIsPasswordError(true);
        eventTarget.value.length < 8
          ? setPasswordErrorMessage(
              "Password must be equal to or greater than 8 characters"
            )
          : setIsPasswordError(false);
        break;
      case ENames.CONFIRM_PASSWORD:
        setIsConfirmPasswordError(true);
        eventTarget.value && setIsConfirmPasswordError(false);
        break;
    }
  };

  return (
    <React.Fragment>
      <FormInput
        inputHandler={passwordHanlder}
        label="Password"
        name={ENames.PASSWORD}
        type={showUserPassword ? "text" : "password"}
        value={userPassword}
        errorMessage={passwordErrorMessage}
        isError={isPasswordError || Boolean(passwordErrorMessage)}
        blurHandler={blurHandler}
        showPassword={setShowUserPassword}
      />
      <FormInput
        inputHandler={confirmPasswordHanlder}
        label="Confirm Password"
        name={ENames.CONFIRM_PASSWORD}
        errorMessage={confirmPasswordErrorMessage}
        isError={isConfirmPasswordError || Boolean(confirmPasswordErrorMessage)}
        type={showUserConfirmPassword ? "text" : "password"}
        value={userConfirmPassword}
        blurHandler={blurHandler}
        showPassword={setShowUserConfirmPassword}
      />
    </React.Fragment>
  );
};

export default PasswordFields;
