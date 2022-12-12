import { ChangeEvent, FC, useState } from "react";
import Link from "next/link";
import useSearchContact from "../../../hooks/contact/useSearchContact";
import ContactList from "../../Contact/ContactList/ContactList";
import debounce from "lodash.debounce";

const Home: FC = () => {
  const [search, setSearch] = useState("");
  const { contactsList, isLoading, error } = useSearchContact(search);

  return (
    <div className={"w-[600px] flex flex-col "}>
      <div className={"flex items-center justify-between mb-[12px]"}>
        <h1 className={"page-title"}>rContact</h1>
        <Link href={"/create"} className={"button"}>
          Добавить новый контакт
        </Link>
      </div>
      <div className={"flex justify-end mb-[12px]"}>
        {!!contactsList.length && (
          <input
            placeholder={"Поиск..."}
            onChange={debounce(
              (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
              300
            )}
            type="text"
            className={"base_input"}
          />
        )}
      </div>
      <div className={"w-full h-[200px]"}>
        {contactsList.length ? (
          <ContactList contactList={contactsList} />
        ) : isLoading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div>Ошибка загрузки данныйх</div>
        ) : null}
        {!contactsList.length && (
          <div className={"font-semibold text-[20px]"}>Список пуст</div>
        )}
      </div>
    </div>
  );
};

export default Home;
