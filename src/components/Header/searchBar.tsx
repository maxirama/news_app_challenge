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
    <div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchValue}
        placeholder="Busca una noticia."
      />
      <button onClick={handleClear}>X</button>
    </div>
  );
};

export default SearchBar;
