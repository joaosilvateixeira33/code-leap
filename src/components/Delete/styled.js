import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  width: 90%;
  max-width: 660px;
  height: auto;
`;

export const ModalTitle = styled.h2`
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2rem;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 20px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  width: 100%;

  @media (min-width: 576px) {
    justify-content: flex-end;
    gap: 15px;
    margin-top: 20px; 
    width: auto;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 10px 15px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;