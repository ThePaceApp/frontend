import { createSlice } from "@reduxjs/toolkit";
import { PACEAPP_TOKEN } from "../../utils/constants";

const initialState = {
  token: localStorage.getItem(PACEAPP_TOKEN) || null,
  isAuth: localStorage.getItem(PACEAPP_TOKEN) ? true : false,
};
const AuthTokenSlice = createSlice({
  name: "AuthToken", 
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem(PACEAPP_TOKEN, action.payload);
      state.isAuth = true;
      state.token = action.payload;
    },
    unsetToken: (state) => {
      localStorage.removeItem(PACEAPP_TOKEN);
      state.isAuth = false;
      state.token = null;
    },
  },
});

export const { setToken, unsetToken } = AuthTokenSlice.actions;
export default AuthTokenSlice.reducer;
