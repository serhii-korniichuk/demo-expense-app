import { FormValues } from "../components/Form";

export const urlSignUp = "https://incode-backend-dev.herokuapp.com/auth/register";
export const urlSignIn = "https://incode-backend-dev.herokuapp.com/auth/login";
export const urlLogout = "https://incode-backend-dev.herokuapp.com/auth/logout";

export const getNewUser = async (values: FormValues) => {
  const response = await fetch(urlSignUp, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: values.password,
      username: values.username,
      displayName: values.displayname,
    }),
  });

  return response.json();
};

export const authExistUser = async (values: FormValues) => {
  const response = await fetch(urlSignIn, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: values.password,
      username: values.username,
    }),
  });

  return response.json();
};

export const logoutCurrUser = async () => {
  const response = await fetch(urlLogout, {
    method: "GET",
  });

  return response.json();
};
