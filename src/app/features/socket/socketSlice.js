import { createSlice } from "@reduxjs/toolkit";

const initialState = { socket: null };

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      // Ensure the socket object is valid before setting it
      if (action.payload?.socket) {
        // Close previous socket if exists (optional)
        if (state.socket) {
          state.socket.close();
        }
        state.socket = action.payload.socket;
      }
    },
    removeSocket: (state) => {
      if (state.socket) {
        state.socket.close(); // Close socket before removing (optional)
      }
      state.socket = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSocket, removeSocket } = socketSlice.actions;

export default socketSlice.reducer;
