import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/auth/auth.service";
import { IAuth } from "../../components/Views/Auth/auth.interface";
import { me } from "../user/user.actions";
import Cookies from "js-cookie";
import { setUserAuthorization } from "./auth.slice";
import { clearUserState } from "../user/user.slice";

export const auth = createAsyncThunk(
  "auth/auth",
  async (data: IAuth, thunkAPI) => {
    try {
      const {
        data: { accessToken, user },
      } = await AuthService.auth(data);
      if (accessToken) {
        Cookies.set("accessToken", accessToken);
        Cookies.set("userId", user.id);
        thunkAPI.dispatch(me(user.id));
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(
        e?.response?.data || "Auth Something get wrong"
      );
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async (data: IAuth, thunkAPI) => {
    try {
      const {
        data: { accessToken, user },
      } = await AuthService.register(data);
      if (accessToken) {
        Cookies.set("accessToken", accessToken);
        Cookies.set("userId", user.id);
        thunkAPI.dispatch(me(user.id));
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(
        e?.response?.data || "Ошибка при регистрации"
      );
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(setUserAuthorization(false));
    thunkAPI.dispatch(clearUserState());
    Cookies.remove("accessToken");
    Cookies.remove("userId");
  } catch (e) {
    return thunkAPI.rejectWithValue("Auth Something get wrong");
  }
});
