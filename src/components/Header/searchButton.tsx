import { fetchNews } from "../../services/api";
import { setNewsData } from "../../features/newsSlice";
import { INewsApiResponse } from "../../types";

interface SearchButtonProps {
  onNewsSearch: any;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onNewsSearch }) => {
  return (
    <button type="button" onClick={onNewsSearch}>
      Buscar
    </button>
  );
};

export default SearchButton;
