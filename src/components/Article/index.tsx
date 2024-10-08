import { IArticle } from "../../types";
import "./styles/index.css";

interface ArticleProps {
  article: IArticle;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const date = new Date(article.publishedAt);
  const formattedDate = date.toLocaleDateString("en-US");

  return (
    <div className="article-container">
      <h1>{`${article.title}`}</h1>
      <p className="news-author">Por: {` ${article.author}`}</p>
      <div className="img-container">
        <img
          className="article-img"
          src={`${article.urlToImage}`}
          alt="Descripción de la imagen."
        />
      </div>
      <p className="article-content">{`${article.content}`} </p>
      <p className="article-date">{`Fecha: ${formattedDate}`}</p>
    </div>
  );
};

export default Article;
