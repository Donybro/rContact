import { FC } from "react";
import { IContact } from "../../../types/contact.interface";
import Tag from "../../Tag/Tag";
import Link from "next/link";

interface Props {
  contactList: IContact[];
}

const ContactList: FC<Props> = ({ contactList }: Props) => {
  return (
    <table className="min-w-full table-auto text-sm xl:text-md">
      <thead>
        <tr className="bg-white border-b border-gray-300 text-gray-400">
          <th className="py-4 pl-3">ФИО</th>
          <th className="py-4 pl-3">Номер телефона</th>
          <th className="py-4 pl-3">Email адрес</th>
          <th className="py-4 pl-3">Теги</th>
        </tr>
      </thead>
      <tbody>
        {contactList.map((contact) => (
          <Link
            legacyBehavior
            href={{
              pathname: "/[contact_id]",
              query: { contact_id: contact.id },
            }}
            key={contact.id}
          >
            <tr className="text-gray-800 bg-white hover:bg-blue-50 cursor-pointer">
              <td className="text-center px-3 py-4">{contact.full_name}</td>
              <td className="text-center px-3 py-4">{contact.phone}</td>
              <td className="text-center px-3 py-4">{contact.email}</td>
              <td className="text-center px-3 py-4 flex flex-col gap-[6px]">
                {contact.tags &&
                  contact.tags.map((tag) => (
                    <Tag key={tag.id}>{tag.label}</Tag>
                  ))}
              </td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
