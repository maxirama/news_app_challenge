import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState();

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return <input type="text" onChange={handleChange} value={searchValue} />;
};

export default SearchBar;
