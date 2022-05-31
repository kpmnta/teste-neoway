import React, {useState} from "react";
import './styles.css'

const FilterInput = ({setQuery}) => {
    const [search, setSearch] = useState('');

    const getSearch = event => {
        event.preventDefault();
        setQuery(search);
        setSearch('');
    }

    const updateSearch = event => {
        setSearch(event.target.value);
    }

    return(
        <form onSubmit={ getSearch } className="search">
            <input 
            className="search__bar" 
            type="text" 
            value={ search } 
            onChange={ updateSearch }
            placeholder="type here"
            />
            <button className="search__button">Search</button>
      </form>
    );
}

export default FilterInput;
