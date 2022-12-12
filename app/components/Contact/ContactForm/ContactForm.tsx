import { FC, useEffect } from "react";
import * as yup from "yup";
import { array, string } from "yup";
import {
  emailValidatorMessage,
  minValidatorMessage,
  requiredValidatorMessage,
} from "../../../utils/validationMessages";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContact } from "../../../types/contact.interface";
import Selectbox from "../../Form/Select/Selectbox";
import InputText from "../../Form/InputText/InputText";
import useTags from "../../../hooks/tags/useTags";
import InputWithPattern from "../../Form/InputPattern/InputPattern";

interface Props {
  submitHandler: (formData: IContact) => {};
  initialValues?: IContact;
}

const ContactForm: FC<Props> = ({ submitHandler, initialValues }) => {
  const schema = yup.object({
    full_name: string().required(requiredValidatorMessage),
    phone: string()
      .required(requiredValidatorMessage)
      .min(12, minValidatorMessage),
    email: string()
      .email(emailValidatorMessage)
      .required(requiredValidatorMessage),
    tags: array().notRequired(),
  });
  const { tagsList } = useTags();

  useEffect(() => {
    if (initialValues) {
      setInitialValues(initialValues);
    }
  }, [initialValues]);

  const setInitialValues = ({ full_name, email, phone, tags }: IContact) => {
    setValue("full_name", full_name);
    setValue("email", email);
    setValue("phone", phone);
    setValue("tags", tags);
  };

  const {
    control,
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IContact>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => submitHandler(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="grid grid-cols-2 xl:grid-cols-4 gap-[12px] mb-[38px]">
        <InputText
          label={"ФИО"}
          name="full_name"
          id="full_name"
          error={errors?.full_name?.message || ""}
          register={register}
        />
        <InputWithPattern
          name={"phone"}
          label={"Номер телефона"}
          pattern={"+ ### ## ### ## ##"}
          id={"phone"}
          error={errors?.phone?.message || ""}
          control={control}
        />
        <InputText
          label={"Email адрес"}
          name="email"
          id="email"
          error={errors?.email?.message || ""}
          register={register}
        />
        <Selectbox
          selectBy={"id"}
          showBy={"label"}
          isMulti={true}
          id="tags"
          name="tags"
          control={control}
          label="Теги"
          placeholder="Select tag"
          options={tagsList}
          error={errors?.tags?.message || ""}
        />
      </section>
      <button
        disabled={isSubmitting}
        className="bg-blue-500 px-[12px] py-[6px] text-white uppercase"
        type="submit"
      >
        Сохранить
      </button>
    </form>
  );
};

export default ContactForm;
