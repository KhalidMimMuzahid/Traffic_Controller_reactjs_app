import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, email, name, role, access_token } = action.payload;
      if (access_token) {
        localStorage.setItem("access_token", access_token);
      }

      state.user = { id, email, name, role };
      state.isLoading = false;
    },
    logout: (state) => {
      localStorage.removeItem("access_token");
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
