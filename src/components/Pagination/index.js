import React from "react";
import { PageStyled } from "./styled";

const Pagination = (props) => {
    const {page, totalPages, onLeftPage, onRightPage} = props;
    
    return(
        <PageStyled>
            <button onClick={onLeftPage}> « </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightPage}> » </button>
        </PageStyled>
    )
}

export default Pagination;