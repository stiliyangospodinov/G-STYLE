import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("username") || null,
  email: localStorage.getItem("email") || null,
  isLoggedIn: !!localStorage.getItem("username"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("email", action.payload.email);
    },
    
    logout: (state) => {
      state.username = null;
      state.email = null;
      state.isLoggedIn = false;
      localStorage.removeItem("username");
      localStorage.removeItem("email");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
