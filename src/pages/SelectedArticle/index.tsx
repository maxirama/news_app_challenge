import { useSelector } from "react-redux";
import Article from "../../components/Article";

const SelectedArticle = () => {
  const selectedArticle = useSelector(
    (state: any) => state.news.selectedArticle
  );
  return (
    <div>
      <Article article={selectedArticle} />
    </div>
  );
};

export default SelectedArticle;
