import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { me } from "./user.actions";
import { IAuth } from "../auth/auth.slice";

export interface IUserState {
  isLoading?: Boolean;
  error?: String;
  user: IUser;
}
export interface IUser {
  id?: "";
  email: string;
  password: string;
}
const initialState: IUserState = {
  isLoading: false,
  error: "",
  user: {
    id: "",
    email: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserState: (state: IUserState) => {
      state.user.id = "";
      state.user.email = "";
      state.user.password = "";
    },
  },
  extraReducers: {
    [me.pending.type]: (state: IUserState) => {
      state.isLoading = true;
    },
    [me.fulfilled.type]: (state: IUserState, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
    },
    [me.rejected.type]: (state: IUserState, action: PayloadAction<String>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { clearUserState } = userSlice.actions;

export default userSlice.reducer;
