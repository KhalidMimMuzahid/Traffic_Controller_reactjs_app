import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const vehicleApi = createApi({
  reducerPath: "vehicleApi",
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
    getVehicles: builder.query({
      query: ({ page }) => ({
        url: `/vehicles/get-vehicles?page=${page}&limit=10`,
        method: "GET",
      }),
    }),

    getVehiclesCountAnalysis: builder.query({
      query: ({ camera_id }) => ({
        url: `/vehicles/get-vehicles-count-analysis?camera_id=${camera_id}`,
        method: "GET",
      }),
    }),
  }),
});

// auto-generated based on the defined endpoints
export const { useGetVehiclesQuery, useGetVehiclesCountAnalysisQuery } =
  vehicleApi;



