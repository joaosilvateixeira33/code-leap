import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);/* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 660px;
  height: 334px;
  
  input[type="text"],
  textarea {
    border: 1px solid #777777;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    font-size: 17px;
    color: #777777;
    font-weight: 400;
  }

  textarea {
    height: 83px;
    resize: none;
  }
`;

export const ModalTitle = styled.h2`
  color: #333;
  margin-bottom: 15px;
`;

export const ModalLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-size: 16px;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  height: 80px; 
  resize: vertical;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const CancelButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  padding: 10px 15px;
  background-color: #28a745; /* Cor verde do botão "Salvar" */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1e7e34;
  }
`;