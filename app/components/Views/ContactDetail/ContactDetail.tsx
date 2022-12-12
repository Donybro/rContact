import { FC, useState } from "react";
import { useRouter } from "next/router";
import useContactInfo from "../../../hooks/useContactInfo";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import Link from "next/link";
import ContactCard from "../../Contact/ContactCard/ContactCard";
import Modal from "../../Modal/Modal";
import AskForDeleteContact from "../../Modal/ModalInnerItems/AskForDeleteContact";
import { ContactService } from "../../../services/contact/contact.service";

const ContactDetail: FC = () => {
  const router = useRouter();
  const contact_id = router.query["contact_id"] || "";
  const [modalForDeleteContactIsOpen, setModalForDeleteContactIsOpen] =
    useState(false);

  const { contactInfo, isLoading, error } = useContactInfo(+contact_id);

  const openDeletingModal = () => {
    setModalForDeleteContactIsOpen(true);
  };
  const closeDeletingModal = () => {
    setModalForDeleteContactIsOpen(false);
  };

  const deleteContactHandler = async () => {
    try {
      const { status } = await ContactService.delete(+contact_id);
      if (status >= 200 && status < 300) {
        await router.push("/");
      }
    } catch (e) {}
  };

  const goBack = () => {
    router.back();
  };

  return (
    <MainLayout>
      <section id={"contact-detail"}>
        {contactInfo ? (
          <div className={"flex flex-col gap-[12px]"}>
            <div className={"flex gap-[12px] justify-end"}>
              <Link
                href={`/edit/${contactInfo.id}`}
                className={"button bg-blue-600"}
              >
                Редактировать
              </Link>
              <button
                onClick={() => openDeletingModal()}
                className={"button bg-red-600"}
              >
                Удалить
              </button>
            </div>
            <ContactCard contactInfo={contactInfo} />
            <button onClick={() => goBack()} className={"button self-start"}>
              Назад
            </button>
          </div>
        ) : isLoading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div>Ошибка загрузки данныйх</div>
        ) : null}
      </section>
      <Modal isOpen={modalForDeleteContactIsOpen}>
        <AskForDeleteContact
          onClickYes={deleteContactHandler}
          onClickNo={closeDeletingModal}
        />
      </Modal>
    </MainLayout>
  );
};

export default ContactDetail;
