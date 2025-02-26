import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    // getUser: builder.query({
    //   query: (name) => `/user/${name}`,
    // }),
    // login: builder.mutation({
    //   query: (credentials) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: credentials,
    //   }),
    // }),
    login: builder.query({
      query: ({ email, password }) => ({
        url: `/users/login?email=${email}&password=${password}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  //  useGetUserQuery
  // useLoginMutation,
  useLoginQuery,
} = userApi;
