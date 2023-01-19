import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = { ...payload };
    },
    clearUserData: (state) => {
      state.user = null;
    },
  },
});

const userReducer = userSlice.reducer;
const { setUser, clearUserData } = userSlice.actions;

export { setUser, clearUserData, userReducer };
