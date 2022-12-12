import { FC } from "react";

interface Props {
  onClickYes: () => {};
  onClickNo: () => void;
}
const AskForDeleteContact: FC<Props> = ({ onClickYes, onClickNo }) => {
  return (
    <div className={"flex flex-col gap-[12px]"}>
      <h1 className={"page-title"}>Вы действительно хотите удалить контакт?</h1>
      <div className={"flex justify-center gap-[12px]"}>
        <button onClick={() => onClickNo()} className={"button"}>
          НЕТ
        </button>
        <button onClick={() => onClickYes()} className={"button bg-red-600"}>
          ДА
        </button>
      </div>
    </div>
  );
};

export default AskForDeleteContact;
