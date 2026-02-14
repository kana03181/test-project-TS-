import components from "./Article.module.css";

type Props = {
  title: string;
}

export default function ArticleTitle ({title}:Props) {
  return (
    <h3 className={components.title}>APIで取得した{ title }</h3>
  );
}
