import Search from "../Search/Search";
import Buttons from "../Buttons/Buttons";
import React from 'react';
import "./searchRow.scss";

const SearchRow = () => {
    return (
        <div className="search-row">
          <Search />
          <Buttons />
        </div>
    );
};

export default SearchRow;