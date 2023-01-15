import React from 'react';
import { PokedexStyled } from './styled';
import Card from '../Card';

const Pokedex = (props) => {

    const{ pokemons, loading } = props;
    console.log("pokemons:", pokemons)
    return(
        <PokedexStyled>
            <div className='pokedex-header'>
                <h1>Pokedex</h1>
                <div>Paginação</div>   
            </div>
            {
                loading ? (
                    <div>Carregando....</div>
                ) : (
                    <div className='pokedex-flex'>
                        {
                            pokemons && pokemons.map((pokemon, index) => {
                                return(
                                    <>
                                    <Card key={index} pokemon={pokemon} />
                                    </>
                                )
                            })
                        }
                    </div>
                )
            }
        </PokedexStyled>
    );
}

export default Pokedex;