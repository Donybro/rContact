import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/auth/auth.service";
import { setUserAuthorization } from "../auth/auth.slice";

export const me = createAsyncThunk("user/me", async (id: string, thunkAPI) => {
  try {
    const { data: user } = await AuthService.me(id);
    if (user) {
      thunkAPI.dispatch(setUserAuthorization(true));
      return user;
    } else {
      throw new Error();
    }
  } catch (e) {
    return thunkAPI.rejectWithValue("Error when taking User");
  }
});
