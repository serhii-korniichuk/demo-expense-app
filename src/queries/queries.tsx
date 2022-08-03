import axios from "axios";
import { FormValues } from "../components/Form";

export const urlSignUp = "/register";
export const urlSignIn = "/login";
export const urlLogout = "/logout";

const baseURL = "https://incode-backend-dev.herokuapp.com/auth/logout";
axios.defaults.baseURL = "https://incode-backend-dev.herokuapp.com/auth";

export const getNewUser = async (values: FormValues) => {
  try {
    const response = await axios.post(urlSignUp, values);

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

export const authExistUser = async (values: Omit<FormValues, "displayName">) => {
  try {
    const response = await axios.post(urlSignIn, values);

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

// don't work with axios possible due cors
// export const logoutCurrUser = async () => {
//   try {
//     const response = await axios.get(urlLogout);

//     return response.data;
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.error(error);
//     throw error;
//   }
// };

export const logoutCurrUser = async () => {
  try {
    const response = await fetch(baseURL, {
      method: "GET",
    });

    return response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};
