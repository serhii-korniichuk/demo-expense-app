import { LogInCredentials, LogUpCredentials } from "../react-app-env";

const BASE_URL="https://incode-backend-dev.herokuapp.com";

export const register = async (creds: LogUpCredentials) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(creds),
  });

  return response.json();
};

export const login = async (creds: LogInCredentials) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(creds),
  });
  
  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${BASE_URL}/auth/logout`);
  
  return response.json();
};
