import { useState } from "react";

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
