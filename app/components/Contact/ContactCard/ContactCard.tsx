import { FC } from "react";
import { IContact } from "../../../types/contact.interface";
import Tag from "../../Tag/Tag";
import styles from "./ContactCard.module.scss";

interface Props {
  contactInfo: IContact;
}

const ContactCard: FC<Props> = ({
  contactInfo: { full_name, phone, email, tags },
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filed}>
        <div>ФИО</div>
        <div>{full_name}</div>
      </div>
      <div className={styles.filed}>
        <div>Номер телефона</div>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <div className={styles.filed}>
        <div>Email адрес</div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className={styles.filed}>
        <div>Теги</div>
        <div className={styles.tags}>
          {tags && tags.map((tag) => <Tag key={tag.id}>{tag.label}</Tag>)}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
