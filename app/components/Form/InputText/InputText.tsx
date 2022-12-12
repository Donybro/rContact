import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: string;
}

const InputText: FC<Props> = (props) => {
  const { id, name, label, register, error, placeholder } = props;
  return (
    <div className={"flex flex-col gap-[12px]"}>
      <label htmlFor={id}>{label}</label>
      <input
        className={"base_input"}
        placeholder={placeholder}
        id={id}
        {...register(name)}
      />
      {error && <span className={"error_message"}>{error}</span>}
    </div>
  );
};

export default InputText;
