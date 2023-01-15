import React, { useState, useEffect } from 'react';
import { getPokemons, getPokemonsData } from './api';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Pokedex from './components/Pokedex';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);


  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      });
    
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
    } catch(error) {
      console.log("error:", error);
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [])

  return (
    <>
    <Header />
    <Search />
    <Pokedex pokemons={pokemons} loading={loading} />
    <Footer />
    </>
  );
}

export default App;
