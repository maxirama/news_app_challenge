import SearchBar from "./searchBar";
import SearchButton from "./searchButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNewsData } from "../../features/newsSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const onNewsSearch = async () => {
    if (searchValue !== "") {
      const newsData: any = fetchNewsData(searchValue);
      dispatch(newsData);
    }
  };

  return (
    <header>
      <h1> News App </h1>
      <div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <SearchButton onNewsSearch={onNewsSearch} />
      </div>
    </header>
  );
};
export default Header;
