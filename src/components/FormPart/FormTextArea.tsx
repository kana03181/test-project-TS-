import FormStyles from "./FormItem.module.css";
import FormItem from "./FormItem";

type Props = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  rows?: number
}

export default function FormTextArea({label, id, name, value, onChange, disabled, rows=8}:Props) {
  return (
    <FormItem label={label} htmlFor={id}>
      <textarea
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        rows={rows}
        className={FormStyles.textBox}
      />
    </FormItem>
  );
}
