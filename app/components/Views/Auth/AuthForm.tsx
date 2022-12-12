import { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./Auth.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAuth } from "./auth.interface";
import Link from "next/link";
import {
  emailValidatorMessage,
  requiredValidatorMessage,
} from "../../../utils/validationMessages";
import InputText from "../../Form/InputText/InputText";

interface Props {
  isRegistrationForm?: boolean;
  submitHandler: (data: IAuth) => {};
}

const AuthForm: FC<Props> = ({ submitHandler, isRegistrationForm }) => {
  const schema = yup.object({
    email: yup
      .string()
      .email(emailValidatorMessage)
      .required(requiredValidatorMessage),
    password: yup.string().required(requiredValidatorMessage),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: IAuth) => {
    submitHandler(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputText
        placeholder={"Email"}
        name={"email"}
        id={"email"}
        error={errors?.email?.message || ""}
        register={register}
      />
      <InputText
        placeholder={"Пароль"}
        name={"password"}
        id={"password"}
        error={errors?.password?.message || ""}
        register={register}
      />
      {!isRegistrationForm && (
        <Link className={"text-gray-500 text-dashed"} href={"/auth/register"}>
          Регистрация
        </Link>
      )}
      {isRegistrationForm && (
        <Link className={"text-gray-500"} href={"/auth"}>
          Войти
        </Link>
      )}
      <Link className={"text-blue-600"} href={"/"}>
        Войти как гость
      </Link>
      <button className={"button"} type="submit">
        {isRegistrationForm ? "Регистрация" : "Вход"}
      </button>
    </form>
  );
};
export default AuthForm;
