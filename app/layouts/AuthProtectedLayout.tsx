import { FC, PropsWithChildren, useEffect } from "react";
import Cookies from "js-cookie";
import { useAction } from "../hooks/useAction";
import { useRouter } from "next/router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { toast } from "react-toastify";

const AuthProtectedLayout: FC<PropsWithChildren> = ({ children }) => {
  const userId = Cookies.get("userId");
  const { isAuthorized } = useTypedSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!userId && !isAuthorized) {
      router.push("/auth");
      toast("Для дальнейшей работы необходима авторизация !", {
        type: "error",
      });
    }
  }, [userId, isAuthorized]);

  return <>{isAuthorized && children}</>;
};

export default AuthProtectedLayout;
