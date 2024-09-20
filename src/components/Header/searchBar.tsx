import "./styles/index.css";
import ClearIcon from "../../icons/Clear";
import MagnifyingGlassIcon from "../../icons/MagnifyingGlass";

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
  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <div className="search-input-container">
      <input
        className="search-input"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchValue}
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
  );
};

export default SearchBar;
