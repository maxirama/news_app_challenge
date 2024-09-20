import "./styles/index.css";
import ClearIcon from "../../icons/Clear";
import MagnifyingGlassIcon from "../../icons/MagnifyingGlass";
import { useState } from "react";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: Function;
  handleNewsSearch: any;
  handleKeyDown: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  setSearchValue,
  handleKeyDown,
  handleNewsSearch,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
  };

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <div>
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Busca una noticia."
        />
        <div className="search-bar-icon-container">
          <button className="search-bar-icon" onClick={handleClear}>
            <ClearIcon />
          </button>
          <button className="search-bar-icon" onClick={handleNewsSearch}>
            <MagnifyingGlassIcon />
          </button>
        </div>
      </div>
      {isFocused && <div className="search-input">{"FOCUSEADO"}</div>}
    </div>
  );
};

export default SearchBar;
