import { Link } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import type { Post } from "../../types/post";
import components from "./Article.module.css";


type Props= {
  posts: Post[];
}

export default function ArticleList({posts}:Props) {
  return (
    <div className={components.article}>
      {posts.map(post =>
        <article className={components.contents} key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <ArticleItem post={post} />
          </Link>
        </article>

      )}
    </div>
  );
}
