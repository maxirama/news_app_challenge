import { IArticle } from "../../types";
import "./styles/index.css";
import { setSelectedArticle } from "../../features/newsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface NewsCardProps {
  article: IArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const dispatch = useDispatch();
  const handleSelectArticle = () => {
    dispatch(setSelectedArticle(article));
  };

  return (
    <Link to="/article">
      <div className="news-card" onClick={handleSelectArticle}>
        <p>{`${article.title}`}</p>
        <p>Por: {`${article.author}`}</p>
        <img className="card-img" src={`${article.urlToImage}`} />
        <p>{`${article.description}`}: 29/08/07 </p>
      </div>
    </Link>
  );
};

export default NewsCard;
