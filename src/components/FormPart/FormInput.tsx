import FormStyles from "./FormItem.module.css";
import FormItem from "./FormItem";

type Props = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
}

export default function FormInput({label, id, name, value, onChange, disabled, type="text"}:Props) {
  return (
    <FormItem label={label} htmlFor={id}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={FormStyles.textBox}
      />
    </FormItem>
  );
}
