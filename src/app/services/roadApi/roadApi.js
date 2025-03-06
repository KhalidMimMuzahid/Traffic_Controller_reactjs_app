import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const roadApi = createApi({
  reducerPath: "roadApi",
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
    addRoad: builder.mutation({
      query: (roadData) => ({
        url: "/roads/add-road",
        method: "POST",
        body: roadData,
      }),
    }),
    getRoads: builder.query({
      query: ({ page, intersectionId }) => ({
        url: `/roads/get-roads?page=${page}&limit=10${
          intersectionId ? "&intersection_id=" + intersectionId : ""
        }`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddRoadMutation, useGetRoadsQuery } = roadApi;
