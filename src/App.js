import React, { useState, useEffect } from 'react';
import { getPokemons, getPokemonsData, searchPokemon } from './api';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import { FavoriteProvider } from './components/Favorites-Context';

const favoriteKey = "f"
function App() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [notFound, setNotFound] = useState(false);

  const itensPerPage = 24
  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      });
    
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch(error) {
      console.log("error:", error);
    }
  }
 
  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, [])

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [page])


  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)

    if(favoriteIndex >= 0){
      updatedFavorites.splice(favoriteIndex,1)
    } else{
      updatedFavorites.push(name)
    }
    window.localStorage.setItem(favoriteKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }

  const onSearchHandler = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    } 
    setLoading(true)
    setNotFound(false)
    
    
    const result = await searchPokemon(pokemon)

    if(!result){
      setLoading(false)
      setNotFound(true)
    } else {
      setPokemons([result])
    }
    setLoading(false)
  }
  return (
    <FavoriteProvider 
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
    <>
    <Header />
    <Search onSearch={onSearchHandler}/>
    {notFound ? (
      <div>Meteu essa?</div>
    ) : 
    ( <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />)}
    <Footer />
    </>
    </FavoriteProvider>
  );
}

export default App;
