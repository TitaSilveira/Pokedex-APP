import React, { useContext } from "react";
import { AreaHeader } from './styled'
import FavoriteContext from "../Favorites-Context";

function Header(){
    const { favoritePokemons } = useContext(FavoriteContext);
    return(
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../../pokemon-logo.png" />
                </div>
                <div>{favoritePokemons.length} &#10084;&#65039;</div>
            </div>
        </AreaHeader>  
    );
}

export default Header;