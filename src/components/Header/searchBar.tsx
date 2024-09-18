interface SearchBarProps {
  searchValue: string;
  setSearchValue: Function;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  setSearchValue,
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
        value={searchValue}
        placeholder="Busca una noticia."
      />
      <button onClick={handleClear}>X</button>
    </div>
  );
};

export default SearchBar;
