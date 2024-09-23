import { useSelector } from "react-redux";
import Article from "../../components/Article";
import "./styles/index.css"

const SelectedArticle = () => {
  const selectedArticle = useSelector(
    (state: any) => state.news.selectedArticle
  );
  return (
    <div className="article-page-container">
      <Article article={selectedArticle} />
    </div>
  );
};

export default SelectedArticle;
