import {
  CreatedUser,
  Credentials,
  RegisterUser,
  TokenPair,
} from '../interfaces/User.interface';

const baseUrl = 'https://incode-backend-dev.herokuapp.com';

export const register = async (user: RegisterUser): Promise<CreatedUser> => {
  const res = await fetch(`${baseUrl}/auth/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Username is already used by another user');
  }

  return await res.json();
};

export const login = async (credentials: Credentials): Promise<TokenPair> => {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Bad credentials');
  }

  return await res.json();
};
