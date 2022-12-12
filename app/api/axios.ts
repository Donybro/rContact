import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:3000",
});
api.interceptors.request.use(
  (config) => {
    if (config && config.headers) {
      config.headers["Authorization"] = `Bearer ${Cookies.get("accessToken")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 403 || error.response.status == 401) {
      Cookies.remove("accessToken");
      Cookies.remove("userId");
      window.location.href = "/auth";
      toast("Пользователь не авторизован!", {
        type: "error",
      });
    }
    return Promise.reject(error);
  }
);

export default api;
