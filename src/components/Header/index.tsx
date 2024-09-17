import SearchBar from "./searchBar";
import SearchButton from "./searchButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewsData } from "../../features/newsSlice";
import { INewsApiResponse } from "../../types";
import { fetchNews } from "../../services/api";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const onNewsSearch = async () => {
    if (searchValue !== "") {
      const _newsData: INewsApiResponse = await fetchNews(searchValue);
      dispatch(setNewsData(_newsData));
    }
  };

  return (
    <header>
      <div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <SearchButton onNewsSearch={onNewsSearch} />
      </div>
    </header>
  );
};
export default Header;
