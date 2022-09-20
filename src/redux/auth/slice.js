import { createSlice } from "@reduxjs/toolkit";
import { authLogin, authLogout, authRegister } from "./asyncActions";

const initialState = {
    loggedIn: !!window.localStorage.getItem("accessToken"),
    isLoading: false,
    successAuth: false,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSuccessAuth: (state, action) => {
            state.successAuth = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // authLogin
        builder.addCase(authLogin.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(authLogin.fulfilled, (state) => {
            state.isLoading = false;
            state.loggedIn = true;
            state.error = null;
        });
        builder.addCase(authLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.data;
        });

        // authLogout
        builder.addCase(authLogout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(authLogout.fulfilled, (state) => {
            state.isLoading = false;
            state.loggedIn = false;
        });
        builder.addCase(authLogout.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.data;
        });

        // authRegister
        builder.addCase(authRegister.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(authRegister.fulfilled, (state) => {
            state.isLoading = false;
            state.successAuth = true;
            state.error = null;
        });
        builder.addCase(authRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.data;
        });
    },
});

export const { setSuccessAuth, clearError } = authSlice.actions;

export default authSlice.reducer;
