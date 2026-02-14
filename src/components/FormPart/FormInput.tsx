import FormStyles from "./FormItem.module.css";
import FormItem from "./FormItem";

type Props = React.ComponentProps<"input"> & {
  label: string;
  id: string;
}

export default function FormInput({ label, id, ...inputProps }:Props) {
  return (
    <FormItem label={label} htmlFor={id}>
      <input
        {...inputProps}
        id={id}
        className={FormStyles.textBox}
      />
    </FormItem>
  );
}
