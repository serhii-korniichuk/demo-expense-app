import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store";
import { authReset } from "../../../../store/slices/userSlice";

import {
  fetchAuthRegister,
  fetchCheckAuth,
} from "../../../../store/slices/userThunks";
import { IUserRegister } from "../../../../store/types/sliceType";
import {
  authRegisterCheck,
  authRegisterError,
} from "../../../../store/userSelectors/userSelectors";
import Form from "../../../../UI/Form";
import NameFields from "../NameFields";
import PasswordFields from "../PasswordFields";

const RegisterFields = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isRegister = useSelector(authRegisterCheck);
  const registerError = useSelector(authRegisterError);

  const [username, setUsername] = React.useState("");
  const [fullUsername, setFullUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState("");
  const [showUserPassword, setShowUserPassword] = React.useState(false);
  const [showUserConfirmPassword, setShowUserConfirmPassword] =
    React.useState(false);
  const [isUsernameError, setIsUsernameError] = React.useState(false);
  const [isFullnameError, setIsFullnameError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] =
    React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchCheckAuth());
      navigate("/profile");
    }
  }, []);

  React.useEffect(() => {
    if (registerError) setErrorMessage(registerError);
  }, [registerError]);

  React.useEffect(() => {
    if (isRegister) navigate("/");
  }, [isRegister]);

  const isEmptyPasswordFields =
    (!isConfirmPasswordError && !userConfirmPassword) ||
    (!isPasswordError && !userPassword);
  const isEmptyNameFields =
    (!isUsernameError && !username) || (!isFullnameError && !fullUsername);
  const isFieldsHaveErrors =
    isConfirmPasswordError ||
    isUsernameError ||
    isFullnameError ||
    isPasswordError;

  const isDisabled =
    (isEmptyPasswordFields && isEmptyNameFields) || isFieldsHaveErrors;

  const formHanlder = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isDisabled) {
      return setErrorMessage("Fields must be filled in and not contain errors");
    }

    const query: IUserRegister = {
      username: username,
      password: userPassword,
      displayName: fullUsername,
    };

    await dispatch(fetchAuthRegister(query));
    dispatch(authReset());
  };

  return (
    <Form
      onSumbit={formHanlder}
      buttonTitle="Sign Up"
      isShowErrorMessage={isDisabled || Boolean(errorMessage)}
      errorMessage={errorMessage}
    >
      <NameFields
        fullUsername={fullUsername}
        setFullUsername={setFullUsername}
        setUsername={setUsername}
        username={username}
        isFullnameError={isFullnameError}
        isUsernameError={isUsernameError}
        setIsFullnameError={setIsFullnameError}
        setIsUsernameError={setIsUsernameError}
      />
      <PasswordFields
        setShowUserConfirmPassword={() =>
          setShowUserConfirmPassword(!showUserConfirmPassword)
        }
        setShowUserPassword={() => setShowUserPassword(!showUserPassword)}
        setUserConfirmPassword={setUserConfirmPassword}
        setUserPassword={setUserPassword}
        isPasswordError={isPasswordError}
        setIsPasswordError={() => setIsPasswordError(!isPasswordError)}
        showUserConfirmPassword={showUserConfirmPassword}
        showUserPassword={showUserPassword}
        userConfirmPassword={userConfirmPassword}
        userPassword={userPassword}
        isConfirmPasswordError={isConfirmPasswordError}
        setIsConfirmPasswordError={setIsConfirmPasswordError}
      />
    </Form>
  );
};

export default RegisterFields;
