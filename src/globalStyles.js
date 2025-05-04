import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
}
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonGlobal = styled.button`
    margin-top: auto; 
    align-self: flex-end; 
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 20px;
    background-color: #7695EC;
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
        background-color: #8da7f0;
        cursor: not-allowed;
    }
`