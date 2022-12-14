import { FC, useEffect } from "react";
import { useAction } from "../../../hooks/useAction";
import { IAuth } from "./auth.interface";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AuthForm from "./AuthForm";

const AuthView: FC = () => {
  const { auth } = useAction();
  const { isAuthorized, error } = useTypedSelector((state) => state.auth);
  const router = useRouter();

  const submitHandler = async (data: IAuth) => {
    await auth(data);
  };

  useEffect(() => {
    if (isAuthorized) {
      router.push("/");
      toast("Добро пожалавать", {
        type: "success",
      });
    }
  }, [isAuthorized]);

  useEffect(() => {
    if (error) {
      toast(error, {
        type: "error",
      });
    }
  }, [error]);

  return (
    <div>
      <h1 className={"page-title mb-[12px]"}>Вход</h1>
      <AuthForm submitHandler={submitHandler} />
    </div>
  );
};

export default AuthView;
