import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PACEAPP_BASEURL, PACEAPP_TOKEN } from "../../utils/constants";

export const UserApi = createApi({
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
  reducerPath: "User",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/creators/profile",
      }),
      transformResponse: (response, meta, arg) => response,

    }),
  }),
});

export const { useGetUserQuery } = UserApi;

// endpoints: (builder) => ({
//   getUser: builder.query({
//     query: () => ({
//       url: "/creators/profile",
//     }),
//     transformResponse: (response, meta, arg) => response,

//   }),
