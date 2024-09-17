import { fetchNews } from "../../services/api";
import { useDispatch } from "react-redux";
import { setNewsData } from "../../features/newsSlice";
import { INewsApiResponse } from "../../types";

const SearchButton = () => {
  const dispatch = useDispatch();

  const handleSearch = async (e: any) => {
    const _newsData: INewsApiResponse = await fetchNews();
    dispatch(setNewsData(_newsData));
  };

  return (
    <button type="button" onClick={handleSearch}>
      Buscar
    </button>
  );
};

export default SearchButton;
