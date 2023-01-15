import styled from "styled-components";

export const PokedexCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 30px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
    width: 250px;
    height: 200px;
    background-color: #170140;
    border-radius: 10px;

    :hover{
        background-color: #F7B32B; 
        transform: scale(1.1);
        border-radius: 5px;
        color: white;
    }

    .card-img {
        width: 78px;
        height: 78px;
        margin-right: 18px;
    }

    .card-body{
        display: flex;
        flex-direction: column;
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

    .card-top-id {
        color: #FEFCFB;
    }

    .card-footer {
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