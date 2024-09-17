import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (error.response.status == 401) {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/refresh`,
        {
          refreshToken: JSON.parse(localStorage.getItem("refresh-token")!),
        }
      );

      localStorage.setItem("token", response.data.accessToken);

      return await api.get("/auth/logout");
    }
  }
);

export default api;
