import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth";

export const authLogin = createAsyncThunk(
    "auth/authLogin",
    async (_, { getState, rejectWithValue }) => {
        const { userName, password } = getState().auth.formData;

        try {
            const response = await authApi.login({
                username: userName,
                password,
            });

            if (response.response) {
                return rejectWithValue(response.response);
            }

            const accessToken = JSON.stringify(response.data.accessToken);
            window.localStorage.setItem("accessToken", accessToken);

            return response.data;
        } catch (err) {
            return err;
        }
    },
);

export const authLogout = createAsyncThunk(
    "auth/authLogout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await authApi.logout();

            if (response.response) {
                return rejectWithValue(response.response);
            }

            window.localStorage.removeItem("accessToken");

            return response.data;
        } catch (err) {
            return err;
        }
    },
);

export const authRegister = createAsyncThunk(
    "auth/authRegister",
    async (_, { getState, rejectWithValue }) => {
        const { fullName, userName, password } = getState().auth.formData;

        try {
            const response = await authApi.register({
                displayName: fullName,
                username: userName,
                password,
            });
            if (response.response) {
                return rejectWithValue(response.response);
            }
            return response.data;
        } catch (err) {
            return err;
        }
    },
);
