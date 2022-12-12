import { FC } from "react";
import ContactForm from "../../Contact/ContactForm/ContactForm";
import { IContact } from "../../../types/contact.interface";
import { ContactService } from "../../../services/contact/contact.service";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
const CreateContact: FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const { isLoading, mutate } = useMutation(
    ["create-contact"],
    (formData: IContact) => ContactService.create(formData),
    {
      onSuccess: () => {
        toast("Контакт успешно создан!", {
          type: "success",
        });
        goBack();
      },
      onError: () => {
        toast("Ошибка при создании контакта!", {
          type: "error",
        });
      },
    }
  );

  const submitHandler = async (formData: IContact) => {
    await mutate(formData);
  };

  return (
    <section className={"px-[150px] py-[250px]"}>
      <div className={"flex justify-between"}>
        <h1 className={"page-title mb-[20px]"}>Создать контакт</h1>
        <button onClick={() => goBack()} className={"button self-start"}>
          Назад
        </button>
      </div>
      <ContactForm submitHandler={submitHandler} />
      {isLoading && <div>Создается контакт</div>}
    </section>
  );
};

export default CreateContact;
