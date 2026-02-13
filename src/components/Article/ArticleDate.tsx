import components from "./Article.module.css";

type Props = {
  createdAt: string;
}

export default function ArticleDate({createdAt}:Props) {
  const isDateString = createdAt;
  const date = new Date(isDateString);
  const formatted = date.toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" });

  return (
    <p className={components.date}>
      <time dateTime={formatted}>{formatted}</time>
    </p>
  );

}
