import styled from "styled-components";

export const Modal = styled.div`
    background: white;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    width: 450px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2{
        font-size: 16px;
        margin-bottom: 12px;
    }

    input{
        width: 100%;
        height: 32px;
        padding: 8px;
        margin: 8px 0;
        border: 1px solid #777777;
        border-radius: 5px;
    }

    button{
        position: relative;
        right: 0;
        left: 37%;
        padding: 6px 26px;
        background-color: #7695EC;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        border-radius: 8px;
        font-weight: 700;
    }

    button:disabled {
        background-color: #8da7f0;
        cursor: not-allowed;
    }
`