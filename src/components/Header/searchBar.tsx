import { useState, useEffect } from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const articulos = useSelector((state: RootState) => state.news.newsData);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      value={searchValue}
      placeholder="Busca una noticia."
    />
  );
};

export default SearchBar;
