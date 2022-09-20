import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
    baseURL: API_URL + "/",
    withCredentials: false,
    headers: {
        "content-type": "application/json",
    },
});

instance.interceptors.request.use((config) => {
    const token = JSON.parse(window.localStorage.getItem("accessToken"));
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const authApi = {
    login({ username, password }) {
        return instance
            .post("auth/login", { password, username })
            .then((res) => res)
            .catch((err) => err);
    },

    logout() {
        return instance
            .get("auth/logout")
            .then((res) => res)
            .catch((err) => err);
    },

    register({ password, username, displayName }) {
        return instance
            .post(`auth/register`, { password, username, displayName })
            .then((res) => res)
            .catch((err) => err);
    },
};
