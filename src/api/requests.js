import axios from 'axios';

const BASE_URL = 'https://incode-backend-dev.herokuapp.com';

export const RegisterUser = async (username, displayName, password) => {
  const request = {
    method: 'post',
    url: BASE_URL.concat('/auth/register'),
    data: { username, displayName, password },
  };
  const response = await axios(request);
  return response;
};

export const Login = async (username, password) => {
  const request = {
    method: 'post',
    url: BASE_URL.concat('/auth/login'),
    data: { username, password },
  };
  const response = await axios(request);
  localStorage.setItem('token', response.data.accessToken);
  return response;
};

export const Logout = async () => {
  const token = localStorage.getItem('token');
  const request = {
    method: 'get',
    url: BASE_URL.concat('/auth/logout'),
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios(request);
  return response;
};
