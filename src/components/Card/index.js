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
            <div className="card-img">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div className="card-top-id">#{pokemon.id}</div>
                </div>
                <div className="card-footer">
                    <div className="card-pokemon-type">
                        <div>
                            { 
                            pokemon.types.map((type, index) => {
                            return(
                                <div key={index} className="card-pokemon-type-text">{type.type.name.toUpperCase()}</div>
                            )
                        })}
                    </div>
                    <button className="card-like" onClick={onLikeHandle}>
                        { like }
                    </button>
                    </div>
                </div>
            </div>
        </PokedexCard>
    )
}

export default Card;