import React from 'react';
import { PokedexStyled } from './styled';
import Card from '../Card';
import Pagination from '../Pagination';

const Pokedex = (props) => {

    const { pokemons, loading, page, setPage, totalPages } = props;

    const onLeftClickHandler = () => {
        console.log("voltar")
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const onRightClickHandler = () => {
        console.log("avançar")
        if (page + 1 !== totalPages) {
            setPage(page + 1)
        }
    }
    return (
        <PokedexStyled>
            <div className='pokedex-header'>
                <h1>Pokedex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={totalPages}
                    onLeftPage={onLeftClickHandler}
                    onRightPage={onRightClickHandler}
                />
            </div>
            <div className='pokedex-flex'>
                {
                    pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <>
                                <Card key={index} pokemon={pokemon} />
                            </>
                        )
                    })
                }
            </div>
        </PokedexStyled>
    );
}

export default Pokedex;