import React, { useState } from "react";
import { Search } from "./styled";
import { searchPokemon } from "../../api";

export default function SearchBar() {
    const[search, setSearch] = useState("")
    const[pokemon, setPokemon] = useState()
    
    const changeHandle = (e) => {
        setSearch(e.target.value)
    }
    
    const buttonHandle = () => {
        searchHandle(search)
    }
    
    const searchHandle = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    return(
        <Search>
        <div className="search-container">
            <input placeholder="Digite o Pokemon:" onChange={changeHandle}></input>
            <button onClick={buttonHandle}>Buscar</button>
        </div>
        {pokemon ? (
            <div>
                <div>Nome: {pokemon.name}</div>
                <div>Peso: {pokemon.weight}</div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
        ) : null}
        </Search>
    );
}