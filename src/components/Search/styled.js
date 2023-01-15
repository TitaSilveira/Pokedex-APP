import styled from "styled-components";

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin: 20px;

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
        margin-right: 20px;
        border-radius: 5px;
        border: none;
        background-color: #170140;
        color: #F8F0FB;
        cursor: pointer;
    }

    button:hover{
        transform: scale(1.2);
        border-radius: 5px;
    }
`;