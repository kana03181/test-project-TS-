import FormStyles from "./FormItem.module.css";
import FormItem from "./FormItem";

type Props = React.ComponentProps<"input"> & {
  label: string;
}

export default function FormInput({ label, ...inputProps }:Props) {
  return (
    <FormItem label={label} htmlFor={inputProps.id}>
      <input
        {...inputProps}
        className={FormStyles.textBox}
      />
    </FormItem>
  );
}
