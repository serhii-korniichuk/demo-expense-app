import axios from "axios";

const instance = axios.create({
    baseURL: "https://incode-backend-dev.herokuapp.com/",
    withCredentials: false,
    headers: {
        "content-type": "application/json",
    },
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${JSON.parse(
        window.sessionStorage.getItem("accessToken"),
    )}`;
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
