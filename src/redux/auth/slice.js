import { createSlice } from "@reduxjs/toolkit";
import { authLogin, authLogout, authRegister } from "./asyncActions";

const initialState = {
    formData: {
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
    },

    loggedIn: !!window.sessionStorage.getItem("accessToken"),
    isLoading: false,
    successAuth: false,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setFullName: (state, action) => {
            state.formData.fullName = action.payload.trim();
            state.error = null;
        },
        setUserName: (state, action) => {
            state.formData.userName = action.payload.trim();
            state.error = null;
        },
        setPassword: (state, action) => {
            state.formData.password = action.payload;
            state.error = null;
        },
        setConfirmPassword: (state, action) => {
            state.formData.confirmPassword = action.payload;
            state.error = null;
        },
        clearForm: (state) => {
            state.formData = initialState.formData;
        },
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
        });
        builder.addCase(authLogin.fulfilled, (state) => {
            state.formData = initialState.formData;
            state.isLoading = false;
            state.loggedIn = true;
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
            state.formData = initialState.formData;
            state.successAuth = true;
        });
        builder.addCase(authRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.data;
        });
    },
});

export const {
    setFullName,
    setUserName,
    setPassword,
    setConfirmPassword,
    clearForm,
    setSuccessAuth,
    clearError,
} = authSlice.actions;

export default authSlice.reducer;
