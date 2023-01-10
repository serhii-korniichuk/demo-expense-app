import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import UserService from "../http/UserService";

const initialState = {
  isAuth: false,
  authType: 'signUp',
  isError: false
}

export const getSignUp = createAsyncThunk(
  'user/getSignUp',
  async data => {
    const response = await UserService.getSignUp(data);
    return response.data;
  }
)

export const getSignIn = createAsyncThunk(
  'user/getSignIn',
  async data => {
    const response = await UserService.getSignIn(data);
    return response.data;
  }
)

export const getSignOut = createAsyncThunk(
  'user/getSignOut',
  async token => {
    const response = await UserService.getSignOut(token);
    return response.data;
  }
)

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthType: (state) => {
      state.authType = state.authType === 'signIn'
                        ? 'signUp'
                        : 'signIn'
    },
  },
  extraReducers: {
    [getSignUp.fulfilled]: (store) => {
      store.authType = 'signIn';
    },
    [getSignIn.fulfilled]: (store) => {
      store.isAuth = true;
    },
    [getSignIn.rejected]: (store) => {
      store.isError = true;
    },
    [getSignOut.fulfilled]: (store) => {
      store.isAuth = false;
      store.authType = 'signIn';
    }
  }
})

export const {setAuthType} = UserSlice.actions;

export default UserSlice.reducer;

