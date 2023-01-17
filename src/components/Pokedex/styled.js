import styled from "styled-components";


export const PokedexStyled = styled.div`
    display: flex;
    flex-direction: column;
    color: #F7FFF7;
 
    .pokedex-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        padding: 0 8em;
    }

    .pokedex-flex {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 80px;
    }
`;


 