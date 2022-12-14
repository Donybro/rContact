import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth, register } from "./auth.actions";

export interface IAuth {
  isAuthorized?: boolean;
  isLoading?: boolean;
  error: string;
}

const initialState: IAuth = {
  isLoading: false,
  isAuthorized: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUserAuthorization: (state: IAuth, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.isAuthorized = action.payload;
    },
  },
  extraReducers: {
    [auth.pending.type]: (state: IAuth) => {
      state.isLoading = true;
    },
    [auth.fulfilled.type]: (state: IAuth) => {
      state.isLoading = false;
      state.isAuthorized = true;
    },
    [auth.rejected.type]: (state: IAuth, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuthorized = false;
      state.error = action.payload;
    },
    [register.pending.type]: (state: IAuth) => {
      state.isLoading = true;
    },
    [register.fulfilled.type]: (state: IAuth) => {
      state.isLoading = false;
      state.isAuthorized = true;
    },
    [register.rejected.type]: (state: IAuth, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuthorized = false;
      state.error = action.payload;
    },
  },
});
export const { setUserAuthorization } = authSlice.actions;

export default authSlice.reducer;
