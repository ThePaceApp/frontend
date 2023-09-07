import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PACEAPP_BASEURL } from "../../utils/constants";

export const PostApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: PACEAPP_BASEURL,
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => ({
        url: "/posts",
      }),
    }),
    getApost: builder.query({
      query: (id) =>( {
        url: `/posts/${id}`,
      }),
    }),
  }),
  tagTypes: ["Posts"],
  reducerPath: "Posts",
 
});

export const { useGetPostQuery, useGetApostQuery } = PostApi;
