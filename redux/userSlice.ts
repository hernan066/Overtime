import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/user";

export interface userState {
  isLoggedIn: boolean;
  user?: IUser;
}

const initialState: userState = {
  isLoggedIn: false,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: userState, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; 
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = undefined;
      
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
