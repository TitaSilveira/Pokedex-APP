import React from "react";
import { PokedexCard } from "./styled";

const Card = (props) => {
    const { pokemon } =  props;

    const onLikeHandle = () => {
        console.log("pode favoritar")
    }
 
    const like = "❤"
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
                </div>
                <div className="card-botton">
                    <div className="card-pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return(
                            <div key={index} className="card-pokemon-type-text">{type.type.name}</div>
                        )
                        })}
                    </div>
                    <button className="card-like" onClick={onLikeHandle}>
                        { like }
                    </button>
                </div>
            </div>
        </PokedexCard>
    )
}

export default Card;