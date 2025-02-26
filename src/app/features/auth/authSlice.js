import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, email, name, role, access_token } = action.payload;
      localStorage.setItem("access_token", access_token);
      state.user = { id, email, name, role };
    },
    logout: (state) => {
      localStorage.removeItem("access_token");
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
