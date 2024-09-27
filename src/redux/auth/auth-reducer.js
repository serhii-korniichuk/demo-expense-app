import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://incode-backend-dev.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: newUser => ({
        url: '/auth/register',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Auth'],
    }),
    loginUser: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/auth/logout',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
