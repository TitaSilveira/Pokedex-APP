import React, { useState } from "react";
import { Search } from "./styled";


const SearchBar = (props) => {
    const { onSearch } = props;
    const [term, setArgument] = useState();

    return (
        <Search>
            <div className="search-container">
                <input placeholder="Digite o Pokemon:" onChange={e => { setArgument(e.target.value) }}></input>
                <button onClick={() => { onSearch(term) }}>Buscar</button>
            </div>
        </Search>
    );
}

export default SearchBar;