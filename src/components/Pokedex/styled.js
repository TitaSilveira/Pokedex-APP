import styled from "styled-components";
export const PokedexStyled = styled.div`
    padding: 10px 50px;
    color: #F7FFF7;
 
    .pokedex-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .pokedex-flex {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
`;