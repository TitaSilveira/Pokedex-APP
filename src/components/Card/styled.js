import styled from "styled-components";

export const PokedexCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 30px;
    width: 250px;
    height: 200px;
    background-color: #10012C;
    border-radius: 10px;

    :hover{
        background-color: #F7B32B; 
        transform: scale(1.1);
        border-radius: 5px;
        color: #0D0221;
    }

    .card-img {
        width: 78px;
        height: 78px;
        margin-right: 18px;
    }

    .card-body{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px 10px 0px;
        flex: 1;
    }
    .card-top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .card-top h3 {
        text-transform: capitalize;
    }

    .card-id {
        display: flex;
        justify-content: end;
        color: #31008C;
    }
    
    .card-botton {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .card-pokemon-type {
        display: flex;
    }

    .card-pokemon-type-text{
        margin-right: 10px;
        text-transform: capitalize;
    }

    .card-like {
        padding: 5px 15px;
        border-radius: 5px;
        border: none;
    }
`;