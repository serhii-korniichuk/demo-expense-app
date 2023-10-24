import axios from "axios";
import { useJwt } from "react-jwt"
import config from "../config";
import { IUserData, IUserReg } from "../types";

export const signUp = (data: IUserReg) => {
    return axios
        .post(
            `${config.API_URL}/register`,
            data
        )
};

export const signIn = (data: IUserData) => {
    return axios.post(`${config.API_URL}/login`, data)
};

export const refreshAccessToken = (refreshToken: string | null) => {
    return axios
        .post(`${config.API_URL}/refresh`, {
            refreshToken,
        })

};

export const logOut = (token: string | null) => {
    return axios
        .get(`${config.API_URL}/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
};

