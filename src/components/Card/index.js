import React, {useContext} from "react";
import FavoriteContext from "../Favorites-Context";
import { PokedexCard } from "./styled";

const Card = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const { pokemon } =  props;
    
    const onLikeHandle = () => {
        console.log("favoritei")
        updateFavoritePokemons(pokemon.name)
    }
 
    const like =  favoritePokemons.includes(pokemon.name) ? "\u2764\uFE0F" : "\uD83D\uDDA4"
    return(
        <PokedexCard>
            <div className="card-id">
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-img">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div className="card-pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return(
                            <div key={index} className="card-pokemon-type-text">{type.type.name}</div>
                        )
                        })}
                    </div>
                </div>
                <div className="card-botton">
                    
                    <button className="card-like" onClick={onLikeHandle}>
                        { like }
                    </button>
                </div>
            </div>
        </PokedexCard>
    )
}

export default Card;