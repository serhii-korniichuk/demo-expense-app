import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passwordShown: false,
  confirmPasswordShown: false,
};

const passSlice = createSlice({
  name: "pass",
  initialState,
  reducers: {
    passwordShownTrigger: (state) => {
      state.passwordShown = !state.passwordShown;
    },
    confirmPasswordShownTrigger: (state) => {
      state.confirmPasswordShown = !state.confirmPasswordShown;
    },
  },
});

export const { passwordShownTrigger, confirmPasswordShownTrigger } =
  passSlice.actions;
export default passSlice.reducer;
