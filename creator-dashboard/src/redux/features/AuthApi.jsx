import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PACEAPP_BASEURL, PACEAPP_TOKEN } from "../../utils/constants";

export const AuthApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: PACEAPP_BASEURL,
    prepareHeaders: (headers, { getState }) => {
        const state = getState();
        const token = state.authToken.token;
      
      if (token) {
        headers.set("Authorization", `Bearer  ${token}`);
        headers.set("Content-Type", `application/json`);
      }
      return headers;
    },
  }),
  reducerPath: "Auth",
  tagTypes: ["Auth", 'User'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      transformResponse: (response, meta, arg) => response,
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
