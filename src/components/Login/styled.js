import styled from "styled-components";

export const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 450px; 
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 16px;
    margin-bottom: 12px;
    width: 100%; 
    text-align: center; 
  }

  input {
    width: 100%;
    height: 32px;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #777777;
    border-radius: 5px;
    font-size: 1rem; /* Tamanho de fonte relativo */
  }

  @media (min-width: 768px) {
    width: 450px;
    h2 {
      text-align: left;
    }
  }
`;