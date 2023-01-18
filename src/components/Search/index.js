import React, { useState } from "react";
import { Search } from "./styled";

const SearchBar = (props) => {
    const[search, setSearch] = useState("")
    const {onSearch} = props;
    
    const changeHandle = (e) => {
        setSearch(e.target.value)

        if(search.length === 0) {
            onSearch(undefined)
        }
    }
      
    const buttonHandle = () => {
        onSearch(search)
    }
    
    return(
        <Search>
        <div className="search-container">
            <input placeholder="Digite o Pokemon:" onChange={changeHandle}></input>
            <button onClick={buttonHandle}>Buscar</button>
        </div>
        </Search>
    );
}

export default SearchBar;