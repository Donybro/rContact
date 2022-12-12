import { FC } from "react";
import ContactForm from "../../Contact/ContactForm/ContactForm";
import { IContact } from "../../../types/contact.interface";
import { ContactService } from "../../../services/contact/contact.service";
import { useRouter } from "next/router";

const CreateContact: FC = () => {
  const { create } = ContactService;
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  const submitHandler = async (formData: IContact) => {
    try {
      const { status } = await create(formData);
      if (status >= 200 && status < 300) {
        goBack();
      }
    } catch (e) {}
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
    </section>
  );
};

export default CreateContact;
