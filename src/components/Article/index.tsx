import { IArticle } from "../../types";
import "./styles/index.css";

interface ArticleProps {
  article: IArticle;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="article-container">
      <h1>{`${article.title}`}</h1>
      <p>Por: {` ${article.description}`}</p>
      <div className="img-container">
        <img
          className="article-image"
          src={`${article.urlToImage}`}
          alt="Descripción de la imagen."
        />
      </div>
      <p>{`${article.content} : ${article.publishedAt}`}</p>
    </div>
  );
};

export default Article;
