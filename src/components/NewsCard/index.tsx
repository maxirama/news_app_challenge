import { IArticle } from "../../types";
import "./styles/index.css";
import { setSelectedArticle } from "../../features/news/newsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  article: IArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSelectArticle = () => {
    dispatch(setSelectedArticle(article));
    navigate("/article");
  };

  const date = new Date(article.publishedAt);
  const formattedDate = date.toLocaleDateString("en-US");

  return (
    <article className="news-card" onClick={handleSelectArticle}>
      <h3>{`${article.title}`}</h3>
      <p className="news-author">
        {`Por: `} <b>{`${article.author}`}</b>
      </p>
      <img className="card-img" src={`${article.urlToImage}`} loading="eager" />
      <p>{`${article.description}`}</p>
      <footer className="card-footer">{`${formattedDate}`}</footer>
    </article>
  );
};

export default NewsCard;
