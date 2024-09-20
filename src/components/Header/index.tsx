import SearchBar from "./searchBar";
import SearchButton from "./searchButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNewsData } from "../../features/newsSlice";
import Pagination from "../Pagination";


const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleNewsSearch = async () => {
    if (searchValue !== "") {
      const newsData: any = fetchNewsData(searchValue);
      dispatch(newsData);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleNewsSearch();
    }
  };

  return (
    <header>
      <h1> News App </h1>
      <div>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleKeyDown={handleKeyDown}
        />
        <SearchButton onNewsSearch={handleNewsSearch} />
        <Pagination />
      </div>
    </header>
  );
};

export default Header;
