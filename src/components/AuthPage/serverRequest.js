import axios from "axios";

axios.defaults.baseURL = "https://incode-backend-dev.herokuapp.com";

export const createUser = async (password, username, displayName) => {
  const body = { password, username, displayName };
  return await axios.post(
    "/auth/register",

    body,

    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};

export const logOut = async () => {
  return await axios.get("/auth/logout");
};

export const logIn = async (password, username) => {
  const body = { username, password };
  return await axios.post("/auth/login", body, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
