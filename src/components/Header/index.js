import React from "react";
import {AreaHeader} from './styled'

function Header(){
    return(
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../../pokemon-logo.png" />
                </div>
            </div>
        </AreaHeader>  
    );
}

export default Header;