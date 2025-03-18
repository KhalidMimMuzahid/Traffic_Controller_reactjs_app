import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import socketReducer from "./features/socket/socketSlice";
import authReducer from "./features/auth/authSlice";
import { userApi } from "./services/userApi/userApi";
import { zoneApi } from "./services/zoneApi/zoneApi";
import { intersectionApi } from "./services/intersectionApi/intersectionApi";
import { roadApi } from "./services/roadApi/roadApi";
import { cameraApi } from "./services/cameraApi/cameraApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    socket: socketReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [zoneApi.reducerPath]: zoneApi.reducer,
    [intersectionApi.reducerPath]: intersectionApi.reducer,
    [roadApi.reducerPath]: roadApi.reducer,
    [cameraApi.reducerPath]: cameraApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      zoneApi.middleware,
      intersectionApi.middleware,
      roadApi.middleware,
      cameraApi.middleware
    ),
});
