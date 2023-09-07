import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PACEAPP_BASEURL } from "../../utils/constants";
import { useSelector } from "react-redux";
import { PACEAPP_TOKEN } from "../../utils/constants";

export const QuestionsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: PACEAPP_BASEURL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      // console.log(state)
      const token = state.authToken.token;

      if (token) {
        headers.set("Authorization", `Bearer  ${token}`);
        headers.set("Content-Type", `application/json`);
      }
      return headers;
    },
  }),
  reducerPath: "Question",
  tagTypes: ["Question"],
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => ({
        url: `/questions`,
         method: "GET",
      }),
      
      // transformResponse: (response, meta, arg) => response,

    }),
    createQuestion: builder.mutation({
      query: (body) => ({
        url: "/questions",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useCreateQuestionMutation } = QuestionsApi;
