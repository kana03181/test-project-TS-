import FormStyles from "./FormItem.module.css";

type Props = {
  htmlFor?: string;
  children: string;
}

export default function FormLabel({htmlFor, children}:Props) {
  return (
    <label htmlFor={htmlFor} className={FormStyles.name}>{children}</label>
  );
}
