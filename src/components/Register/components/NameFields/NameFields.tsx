import React from "react";
import FormInput from "../../../../UI/FormInput";
import { ENames } from "../../../Login/components/LoginFields/types";

interface NameFieldsProps {
  setUsername: (value: string) => void;
  setFullUsername: (value: string) => void;
  username: string;
  fullUsername: string;
  isUsernameError: boolean;
  setIsUsernameError: (value: boolean) => void;
  isFullnameError: boolean;
  setIsFullnameError: (value: boolean) => void;
}

const NameFields = ({
  fullUsername,
  setFullUsername,
  setUsername,
  username,
  isFullnameError,
  isUsernameError,
  setIsFullnameError,
  setIsUsernameError,
}: NameFieldsProps) => {
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState("");
  const [fullNameErrorMessage, setFullnameErrorMessage] = React.useState("");

  const usernameHanlder = (value: string) => {
    setUsername(value);
    setUsernameErrorMessage("");

    const loginRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    if (!loginRegex.test(value.toLocaleLowerCase())) {
      setIsUsernameError(true);
      return setUsernameErrorMessage("Incorrect user name");
    }

    setIsUsernameError(false);
  };

  const fullnameHandler = (value: string) => {
    setFullUsername(value);
    setFullnameErrorMessage("");

    const fullNameRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    if (!fullNameRegex.test(value.toLocaleLowerCase())) {
      setIsFullnameError(true);
      return setFullnameErrorMessage("Incorrect full name");
    }

    setIsFullnameError(false);
  };

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;

    switch (eventTarget.name) {
      case ENames.USER_NAME:
        setIsUsernameError(true);
        !eventTarget.value
          ? setUsernameErrorMessage("The field cannot be empty")
          : setIsUsernameError(false);

        break;

      case ENames.FULL_NAME:
        setIsFullnameError(true);
        !eventTarget.value
        ? setUsernameErrorMessage("The field cannot be empty")
        : setIsFullnameError(false);

        break;
    }
  };

  return (
    <React.Fragment>
      <FormInput
        inputHandler={usernameHanlder}
        label="User Name"
        name={ENames.USER_NAME}
        placeHolder="Example123"
        blurHandler={blurHandler}
        type="text"
        errorMessage={usernameErrorMessage}
        isError={isUsernameError || Boolean(usernameErrorMessage)}
        value={username}
      />
      <FormInput
        inputHandler={fullnameHandler}
        label="Full Name"
        name={ENames.FULL_NAME}
        placeHolder="Example123"
        errorMessage={fullNameErrorMessage}
        isError={isFullnameError || Boolean(fullNameErrorMessage)}
        type="text"
        blurHandler={blurHandler}
        value={fullUsername}
      />
    </React.Fragment>
  );
};

export default NameFields;
