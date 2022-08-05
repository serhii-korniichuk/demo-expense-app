export const BASE_URL = 'https://incode-backend-dev.herokuapp.com';

export async function registration(password: string, username: string, displayName: string) {
  return await fetch (`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      password,
      username,
      displayName,
    }),
  });
};

export async function login(username: string, password: string) {
  return await fetch (`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      password,
      username,
    }),
  });
};

export async function logout() {
  return await fetch(`${BASE_URL}/api/#/auth/logout`);
}