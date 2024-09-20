import "./styles/index.css";
import ClearIcon from "../../icons/ClearIcon";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: Function;
  handleKeyDown: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  setSearchValue,
  handleKeyDown,
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
      <button className="clear-button" onClick={handleClear}>
        <ClearIcon />
      </button>
    </div>
  );
};

export default SearchBar;
