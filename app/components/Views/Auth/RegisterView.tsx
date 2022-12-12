import { FC, useEffect } from "react";
import AuthForm from "./AuthForm";
import { useAction } from "../../../hooks/useAction";
import { IAuth } from "./auth.interface";
import { useRouter } from "next/router";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { toast } from "react-toastify";

const RegisterView: FC = () => {
  const { register } = useAction();
  const { isAuthorized, error } = useTypedSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (isAuthorized) {
      router.push("/");
    }
  }, [isAuthorized]);
  useEffect(() => {
    if (error) {
      toast(error, {
        type: "error",
      });
    }
  }, [error]);

  const submitHandler = async (data: IAuth) => {
    try {
      const resp = await register(data);
      console.log(resp);
    } catch (e) {}
  };
  return (
    <div>
      <h1 className={"page-title mb-[12px]"}>Регистрация</h1>
      <AuthForm isRegistrationForm={true} submitHandler={submitHandler} />
    </div>
  );
};

export default RegisterView;
