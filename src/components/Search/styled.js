import styled from "styled-components";

export const Search = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    .search-container {
        display: flex;
        align-items: center;
    }

    .search-container input{
        padding: 12px;
        margin: 10px;
        width: 250px;
        box-shadow: 0px 2px 2px (0,0,0,0.25);
        border-radius: 5px;
        border: none;
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
    }
    
    .search-container button {
        height: 44px;
        padding: 12px 24px;
        border-radius: 5px;
        border: none;
        background-color: #38AECC;
        color: #F8F0FB;
        cursor: pointer;
    }

    button:hover{
        background-color: #084B83; 
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
        transform: scale(1.1);
        border-radius: 5px;
    }
`;