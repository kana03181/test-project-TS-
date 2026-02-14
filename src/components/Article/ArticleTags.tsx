import components from "./Article.module.css";

type Props = {
  categories: string[];
}

export default function ArticleTags ({categories}: Props) {
  return (
    <ul className={components.tags}>
      {categories.map( category =>(
        <li className={components.tagsCategory} key={category}>{category}</li>
      ))}
    </ul>
  );

}
