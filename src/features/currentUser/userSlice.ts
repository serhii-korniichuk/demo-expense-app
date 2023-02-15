import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    accessToken: string | null;
}

const initialState: UserState = {
    accessToken: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.accessToken = payload
        },
        resetToken: () => ({
            ...initialState
        })
    }
});

export const { setToken, resetToken } = userSlice.actions;

export default userSlice.reducer;
