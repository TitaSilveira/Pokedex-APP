import styled from "styled-components";

export const PageStyled = styled.div`
        display: flex;
        align-items: center;
        gap: 20px;

    button {
        padding: 5px 8px; 
        background-color: white;
        border-radius: 5px;
        color: black;
        border: none;
    }

    button:hover{
        background-color: #F7B32B; 
        transform: scale(1.1);
        border-radius: 5px;
        color: #0D0221;
    }
`;