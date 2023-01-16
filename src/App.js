import React, { useState, useEffect } from 'react';
import { getPokemons, getPokemonsData } from './api';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import { FavoriteProvider } from './components/Favorites-Context';

function App() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([])

  const itensPerPage = 25
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
 
  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [page])


  const updateFavPokemons = (name) => {
    const updateFav = [...favorites]
    const favIndex = favorites.indexOf(name)

    if(favIndex > 0){
      updateFav.slice(favIndex,1)
    } else{
      updateFav.push(name)
    }
    setFavorites(updateFav)
  }

  return (
    <>
    <FavoriteProvider 
      value={{
        favoritePokemons: favorites,
        updateFavPokemons: updateFavPokemons,
      }}
    />
    <Header />
    <Search />
    <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
    <Footer />
    </>
  );
}

export default App;
