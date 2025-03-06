import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const intersectionApi = createApi({
  reducerPath: "intersectionApi",
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
    addIntersection: builder.mutation({
      query: (intersectionData) => ({
        url: "/intersections/add-intersection",
        method: "POST",
        body: intersectionData,
      }),
    }),
    getIntersection: builder.query({
      query: ({ page, zoneId }) => ({
        url: `/intersections/get-intersections?page=${page}&limit=10${
          zoneId ? "&zone_id=" + zoneId : ""
        }`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddIntersectionMutation, useGetIntersectionQuery } =
  intersectionApi;
