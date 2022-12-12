import api from "../../api/axios";
import { IAuth } from "../../components/Views/Auth/auth.interface";

export const AuthService = {
  async auth(data: IAuth) {
    return await api.post("/auth/login/", data);
  },
  async me() {
    return await api.get("/auth/me");
  },
  async logout() {
    return await api.get("/auth/logout");
  },
};
