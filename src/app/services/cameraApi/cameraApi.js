import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const cameraApi = createApi({
  reducerPath: "cameraApi",
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
    addCamera: builder.mutation({
      query: (cameraData) => ({
        url: "/cameras/add-camera",
        method: "POST",
        body: cameraData,
      }),
    }),
    getCameras: builder.query({
      query: ({ page, roadId }) => ({
        url: `/cameras/get-cameras?page=${page}&limit=10${
          roadId ? "&road_id=" + roadId : ""
        }`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddCameraMutation, useGetCamerasQuery } = cameraApi;
