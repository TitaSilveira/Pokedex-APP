import React, { useState, useEffect } from 'react';
import * as pokemonService from './api';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import { FavoriteProvider } from './components/Favorites-Context';
import { ThreeCircles } from 'react-loader-spinner'
const favoriteKey = "f"
function App() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itensPerPage, setitensPerPage] = useState(24);

  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([])

  const fetchPokemonsData = async () => {
    pokemonService.getAllPokemons(itensPerPage, itensPerPage * page)
      .then(async res => {
        const promises = res.results.map(async pokemon => {
          return await pokemonService.getPokemonDetailsByDirectURL(pokemon.url)
        });

        const pokemons = await Promise.all(promises)
          .then(data => {
            setPokemons(data);
            setTotalPages(Math.ceil(res.count / itensPerPage))
          })
          .catch(err => console.log({ err }))
      })
      .catch(err => console.log({ err }))
  }

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    setLoading(true);
    loadFavoritePokemons();
    fetchPokemonsData();
    setLoading(false);
  }, [])

  useEffect(() => {
    fetchPokemonsData();
  }, [page])

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)

    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1)
    } else {
      updatedFavorites.push(name)
    }
    window.localStorage.setItem(favoriteKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }

  const onSearchHandler = async (stringArg = '') => {
    setLoading(true)
    if (stringArg.length === 0) {
      setPage(0);
    } else {
      pokemonService.getPokemonDetailsByNameOrID(stringArg)
        .then(res => {
          setPokemons(res);
          setNotFound(res.length == 0)
          setTotalPages(Math.ceil(res.length / itensPerPage))
        })
        .catch(err => console.log({ err }))
    }
    setLoading(false)
  }

  const loadingComponent = () => {
    return (
      <>
        <ThreeCircles
          height="100"
          width="100"
          color="#f6c305"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
        <br />
        <span>Carregando...</span>
      </>

    )
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
        <Search onSearch={onSearchHandler} />
        <div className='main-content'>
          {loading ?
            loadingComponent() :
            notFound ?
              (
                <>
                  <span>Não foi encontrado nenhum pokémon correspondente à busca.</span>
                </>
              ) :
              <Pokedex pokemons={pokemons} page={page} totalPages={totalPages} setPage={setPage} />
          }
        </div>
        {/* 
        {notFound ? (
          <div>Meteu essa?</div>
        ) :
          (<Pokedex pokemons={pokemons} page={page} totalPages={totalPages} setPage={setPage} />)} */}


        <Footer />
      </>
    </FavoriteProvider>
  );
}

export default App;
