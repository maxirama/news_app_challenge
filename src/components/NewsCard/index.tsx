import { IArticle } from "../../types";
import "./styles/index.css";

interface NewsCardProps {
  article: IArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="news-card">
      <p>{`${article.title}`}</p>
      <p>Por: {`${article.author}`}</p>
      <img className="card-img" src={`${article.urlToImage}`} />
      <p>{`${article.description}`}: 29/08/07 </p>
    </div>
  );
};

export default NewsCard;
