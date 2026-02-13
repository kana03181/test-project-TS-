import ArticleTitle from "./ArticleTitle";
import ArticleTags from "./ArticleTags";
import ArticleContent from "./ArticleContent";
import ArticleDate from "./ArticleDate";
import type { Post } from "../../types/post";
import components from "./Article.module.css";


type Props= {
  post: Post;
}

export default function ArticleItem({ post }:Props) {
  return (
    <div className={components.inner}>
      <div className={components.header}>
        <ArticleDate createdAt={post.createdAt} />
        <ArticleTags categories={post.categories}/>
      </div>
      <div className={components.main}>
        <ArticleTitle title={post.title} />
        <ArticleContent content={post.content} />
      </div>
    </div>
  );
}
