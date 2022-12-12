import { FC } from "react";
import ContactForm from "../../Contact/ContactForm/ContactForm";
import { IContact } from "../../../types/contact.interface";
import { ContactService } from "../../../services/contact/contact.service";
import { useRouter } from "next/router";
import useContactInfo from "../../../hooks/contact/useContactInfo";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const EditContact: FC = () => {
  const { edit } = ContactService;
  const router = useRouter();
  const contact_id = router.query["contact_id"] || "";
  const goBack = () => {
    router.back();
  };

  const { isLoading, mutate } = useMutation(
    ["edit-contact"],
    (formData: IContact) => ContactService.edit(formData, +contact_id),
    {
      onSuccess: () => {
        goBack();
        toast("Контакт успешно изменен!", {
          type: "success",
        });
      },
      onError: () => {
        toast("Ошибка при изменении контакта!", {
          type: "error",
        });
      },
    }
  );

  const submitHandler = async (formData: IContact) => {
    await mutate(formData);
  };

  const { contactInfo } = useContactInfo(+contact_id);

  return (
    contactInfo && (
      <section className={"px-[150px] py-[250px]"}>
        <div className={"flex justify-between"}>
          <h1 className={"page-title mb-[20px]"}>Редактирование контакта</h1>
          <button onClick={() => goBack()} className={"button self-start"}>
            Назад
          </button>
        </div>
        <ContactForm
          initialValues={contactInfo}
          submitHandler={submitHandler}
        />
      </section>
    )
  );
};

export default EditContact;
