import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUserApi, User } from '../../api/user.api';
import { lsHelper } from '../../utils/ls-helper';

const initialState: { user: User | null; isLoading: boolean } = { user: null, isLoading: true };

export const getUser = createAsyncThunk('user/self', async () => {
  return await getUserApi();
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      lsHelper('token').removeValue();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.isLoading = false;
    });

    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { logout } = userSlice.actions;

// eslint-disable-next-line import/no-default-export
export default userSlice.reducer;
