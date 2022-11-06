import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_PORT } = process.env;

const BASE_URL = `${REACT_APP_BASE_URL}${
  REACT_APP_PORT ? `:${REACT_APP_PORT}` : ""
}`;

const instance = axios.create({
  baseURL: `${BASE_URL}`,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const publicAxios = axios.create({
  baseURL: `${BASE_URL}`,
});

export { publicAxios };

export default instance;
