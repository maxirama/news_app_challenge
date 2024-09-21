import { IArticle } from "../../types";

interface ArticleProps {
  article: IArticle;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div>
      <h1>{`${article.title}`}</h1>
      <p>Por: {` ${article.description}`}</p>
      <img src={`${article.urlToImage}`} alt="Descripción de la imagen." />
      <p>{`${article.description} : ${article.publishedAt}`}</p>
    </div>
  );
};

export default Article;
