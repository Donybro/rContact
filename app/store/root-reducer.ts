import { combineReducers } from "redux";
import { authSlice } from "./auth/auth.slice";
import { userSlice } from "./user/user.slice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
});
