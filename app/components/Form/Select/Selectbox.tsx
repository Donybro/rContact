import { FC } from "react";
import { Controller } from "react-hook-form";
import styles from "./Selectbox.module.scss";
import Select from "react-select";

interface Props {
  name: string;
  label?: string;
  id: string;
  placeholder?: string;
  control: any;
  error?: string;
  options: any[];
  selectBy: string;
  showBy: string;
  isMulti?: boolean;
}

const Selectbox: FC<Props> = ({
  id,
  name,
  control,
  label,
  error,
  options,
  placeholder,
  isMulti,
  selectBy,
  showBy,
}) => {
  return (
    <div className={styles.fieldWrapper}>
      <label htmlFor={id}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            isMulti={isMulti}
            {...field}
            instanceId={id}
            // onChange={(newValue: ControllerRenderProps) => {
            //   console.log(newValue.value, "newValue");
            //   field.onChange(newValue?.value);
            // }}
            // value={options.find((c) => c.value === field.value)}
            getOptionLabel={(option) => option[showBy]}
            getOptionValue={(option) => option[selectBy]}
            placeholder={placeholder}
            classNamePrefix={"custom-select"}
            options={options}
          />
        )}
      />
      {error && <span className={"error_message"}>{error}</span>}
    </div>
  );
};

export default Selectbox;
