import SearchBar from "./searchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewsData,
  clearNewsData,
  setSearchValue,
} from "../../features/news/newsSlice";
import { setCurrentPage } from "../../features/pagination/paginationSlice";
import "./styles/index.css";
import FiltersBar from "../FiltersBar";

const Header = () => {
  const dispatch = useDispatch();
  const { firstRender, searchValue } = useSelector((state: any) => state.news);

  const _setSearchValue = (value: string) => {
    dispatch(setSearchValue(value));
  };

  const handleNewsSearch = async () => {
    if (searchValue !== "") {
      dispatch(clearNewsData());
      const newsData: any = fetchNewsData(searchValue);
      dispatch(newsData);
      dispatch(setCurrentPage(1));
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
          setSearchValue={_setSearchValue}
          handleKeyDown={handleKeyDown}
          handleNewsSearch={handleNewsSearch}
        />
        {/* <FiltersBar /> */}
      </div>
      {/* <DatePicker label="Desde" />
      <DatePicker label="Hasta" /> */}
    </header>
  );
};

export default Header;
