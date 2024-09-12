import LoadingButton from "@mui/lab/LoadingButton";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../..";


type Props = {
  children: string;
  userData: { username: string; password: string; displayName: string; email?: string };
}

const SubmitButton: React.FC<Props> = ({ children, userData }: Props) => {
  const { store } = useContext(Context);

  const login = async (e: React.MouseEvent<HTMLElement>): Promise<void | null> => {
    e.preventDefault();
    await store.login(userData.username, userData.password);
  };

  const register = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
    e.preventDefault();
    await store.register(userData.username, userData.password, userData.displayName);
  };

  const validationEmail = (): boolean => {
    const regExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return userData.email && !regExp.test(userData.email) ? true : false;
  };

  const validationPasswordLenght = (): boolean => {
    return !!userData.password && userData.password.length <= 7;
  };

  const getSubmitButtonStateLogin = (): boolean => {
    return !userData.password.trim() || !userData.username.trim() || validationPasswordLenght();
  };

  const getSubmitButtonStateRegister = (): boolean => {
    return !userData.password.trim() || !userData.email || validationEmail() || !userData.username.trim() || validationPasswordLenght();
  };

  if (children === "Sign Up") {
    return (
      <LoadingButton
        type="submit"
        fullWidth
        loading={store.isLoading}
        startIcon={<div></div>}
        loadingPosition="start"
        disabled={getSubmitButtonStateRegister()}
        onClick={register}
        sx={{
          mt: "38px",
          background: "#539713",
          color: "white",
          textTransform: "capitalize",
          borderRadius: "0px",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "155%",
          ml: "-1px",
          "&:hover": {
            backgroundColor: "#97BC62FF"
          }
        }}>
        {children}
      </LoadingButton>
    );
  }

  return (
    <LoadingButton
      type="submit"
      fullWidth
      onClick={login}
      loading={store.isLoading}
      startIcon={<div></div>}
      loadingPosition="start"
      disabled={getSubmitButtonStateLogin()}
      sx={{
        mt: "48px",
        background: "#539713",
        color: "white",
        textTransform: "capitalize",
        borderRadius: "0px",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "155%",
        ml: "-1px",
        "&:hover": {
          backgroundColor: "#97BC62FF"
        }
      }}>
      {children}
    </LoadingButton>
  );
};

export default observer(SubmitButton); 