import { FC } from "react";
import ContactForm from "../../Contact/ContactForm/ContactForm";
import { IContact } from "../../../types/contact.interface";
import { ContactService } from "../../../services/contact/contact.service";
import { useRouter } from "next/router";
import useContactInfo from "../../../hooks/useContactInfo";

const EditContact: FC = () => {
  const { edit } = ContactService;
  const router = useRouter();
  const contact_id = router.query["contact_id"] || "";
  const goBack = () => {
    router.back();
  };
  const submitHandler = async (formData: IContact) => {
    try {
      const { status } = await edit(formData, +contact_id);
      if (status >= 200 && status < 300) {
        goBack();
      }
    } catch (e) {}
  };

  const { contactInfo } = useContactInfo(+contact_id);
  console.log(contactInfo, "contactInfo");
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
