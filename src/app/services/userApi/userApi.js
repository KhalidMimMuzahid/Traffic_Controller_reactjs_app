import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // getUser: builder.query({
    //   query: (name) => `/user/${name}`,
    // }),
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/users/add-user",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.query({
      query: ({ email, password }) => ({
        url: `/users/login?email=${email}&password=${password}`,
        method: "GET",
      }),
    }),
    getUsers: builder.query({
      query: (page) => ({
        url: `/users/get-users?page=${page}&limit=10`,
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
  useGetUsersQuery,
  useAddUserMutation,
} = userApi;
