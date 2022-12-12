import api from "../../api/axios";
import { IAuth } from "../../components/Views/Auth/auth.interface";

export const AuthService = {
  async auth(data: IAuth) {
    return await api.post("/login", data);
  },
  async register(data: IAuth) {
    return await api.post("/register", data);
  },
  async me(id: string) {
    return await api.get(`/600/users/${id}`);
  },
  async logout() {
    return await api.get("/auth/logout");
  },
};
