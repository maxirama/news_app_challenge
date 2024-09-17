import React from "react";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";

const Header = () => {
  return (
    <header>
      <div>
        <SearchBar />
        <SearchButton />
      </div>
    </header>
  );
};
export default Header;
