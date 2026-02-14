import FormLabel from "./FormLabel";
import FormStyles from "./FormItem.module.css";

type Props = {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
}

export default function FormItem({label, htmlFor, children}:Props) {
  return (
    <div className={FormStyles.formItem}>
      <FormLabel htmlFor={htmlFor}>
        {label}
      </FormLabel>
      <div className={FormStyles.formControl}>
        {children}
      </div>
    </div>
  );
}
