import React from 'react';
import { PokedexStyled } from './styled';
import Card from '../Card';
import Pagination from '../Pagination';

const Pokedex = (props) => {
    const { pokemons, page, setPage, totalPages } = props;

    const onLeftClickHandler = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const onRightClickHandler = () => {
        if (page < totalPages) {
            setPage(page + 1)
        }
    }

    return (
        <PokedexStyled>
            <div className='pokedex-header'>
                <h1>Pokedex</h1>
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onLeftPage={onLeftClickHandler}
                    onRightPage={onRightClickHandler}
                />
            </div>
            <div className='pokedex-flex'>
                {
                    pokemons && pokemons.map((pokemon, index) => {
                        return <Card key={index} pokemon={pokemon} />
                    })
                }
            </div>
        </PokedexStyled>
    );
}

export default Pokedex;