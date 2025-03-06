import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const zoneApi = createApi({
  reducerPath: "zoneApi",
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
    addZone: builder.mutation({
      query: (zoneData) => ({
        url: "/zones/add-zone",
        method: "POST",
        body: zoneData,
      }),
    }),

    getZones: builder.query({
      query: (page, name) => ({
        url: `/zones/get-zones?page=${page}&limit=10${
          name ? "&name=" + name : ""
        }`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddZoneMutation, useGetZonesQuery } = zoneApi;
