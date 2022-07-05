import React from 'react';
import "./search.scss";
import search from '../../images/svgs/search.svg'

const Search = () => {
    return (
        <div className='search-field'>
            <input type="text" value='Search for breeds by name' />
            <button><img src={search} alt="search" /></button>
        </div>
    );
};

export default Search;