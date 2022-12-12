import { ForwardedRef, forwardRef } from "react";
import { Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface Props {
  name: string;
  label?: string;
  pattern: string;
  id: string;
  placeholder?: string;
  control: any;
  error?: string;
}

const InputWithPattern = forwardRef<HTMLInputElement, Props>(
  (
    { id, name, pattern, control, label, error, placeholder },
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div className={"flex flex-col gap-[12px]"}>
      <label htmlFor={id}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PatternFormat
            {...field}
            // @ts-ignore
            ref={ref}
            onChange={(val) => {}}
            onValueChange={(values) => {
              const { floatValue } = values;
              if (floatValue) {
                field.onChange(floatValue);
              }
            }}
            className={"base_input"}
            format={pattern}
            placeholder={placeholder}
            id={id}
            allowEmptyFormatting
          />
        )}
      />
      {error && <span className={"error_message"}>{error}</span>}
    </div>
  )
);

export default InputWithPattern;
