import SearchBar from "./searchBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNewsData, clearNewsData } from "../../features/news/newsSlice";
import "./styles/index.css";
import FiltersBar from "../FiltersBar";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleNewsSearch = async () => {
    if (searchValue !== "") {
      dispatch(clearNewsData());
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
          handleNewsSearch={handleNewsSearch}
        />
        <FiltersBar />
      </div>
    </header>
  );
};

export default Header;
