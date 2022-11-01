import axios from 'axios';

const BASE_URL = 'https://incode-backend-dev.herokuapp.com';

export const checkToken = () => {
  return !!localStorage.getItem('token');
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const resetToken = () => {
  localStorage.removeItem('token');
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      resetToken();
      window.location.href = '/auth';
    }
  }
);

export const registration = async (fullName: string, userName: string, userPassword: string) => {
  return await axios.post(`${BASE_URL}/auth/register`, {
    username: userName,
    displayName: fullName,
    password: userPassword
  }).then(response => response.data).catch((error) => {
    if (error) {
      alert('Such user already exists');
    }
  });
};

export const login = async (userName: string, userPassword: string) => {
  return axios.post(`${BASE_URL}/auth/login`, {  
    username: userName, 
    password: userPassword 
  }).then(response => response.data).catch(error => {
    if (error) {
      alert('User not found');
    }
  });
};

export const getUser = async () => {
  return axiosInstance.get(`${BASE_URL}/users/self`).then(
    response => response.data
  ).catch(error => alert(error));
};

export const logOut = () => {
  if (localStorage.getItem('token')) {
    resetToken();
    window.location.href = '/auth';
  }
};