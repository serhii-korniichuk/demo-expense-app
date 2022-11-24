import axios from "axios";

const BASE_URL = "https://incode-backend-dev.herokuapp.com/";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default api;
