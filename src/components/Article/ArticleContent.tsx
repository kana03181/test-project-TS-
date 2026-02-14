import components from "./Article.module.css";

type Props = {
  content: string;
  clamp?: boolean;
}

export default function ArticleContent({content, clamp = true}:Props) {
  return (
    <div className={`${components.txt} ${!clamp ? components.full : ""}`}
      dangerouslySetInnerHTML={{ __html: content}}>
    </div>
  );
}
