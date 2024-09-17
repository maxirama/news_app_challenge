import { fetchNews } from "../../services/api";
import { useDispatch } from "react-redux";
import { setArticles } from "../../features/newsSlice";
import { INewsApiResponse } from "../../types";

const SearchButton = () => {
  const dispatch = useDispatch();

  const handleSearch = async (e: any) => {
    const _newsData: INewsApiResponse= await fetchNews();
    if(_newsData && _newsData.articles)
    dispatch(setArticles(_newsData?.articles));
  };

  return (
    <button type="button" onClick={handleSearch}>
      Buscar
    </button>
  );
};

export default SearchButton;
