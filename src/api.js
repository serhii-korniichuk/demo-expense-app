export const BASE_URL = 'https://incode-backend-dev.herokuapp.com/';

export async function registerUser(password, username, displayName) {
  return await fetch(`${BASE_URL}auth/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      password,
      username,
      displayName,
    }),
  })};

export async function logOut() {
    const response = await fetch(`${BASE_URL}api/#/auth/AuthController_logout`);
    return response;
  };

  export async function logIn(username, password) {
    return await fetch(`${BASE_URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })};
  