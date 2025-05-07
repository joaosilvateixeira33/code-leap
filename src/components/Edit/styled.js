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
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;

  input[type="text"],
  textarea {
    border: 1px solid #777777;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    font-size: 1rem;
    color: #777777;
    font-weight: 400;
    box-sizing: border-box;
  }

  textarea {
    height: 100px;
    resize: vertical;
  }

  @media (min-width: 576px) {

    textarea {
      height: 83px;
      resize: none;
    }
  }
`;

export const ModalTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;

  @media (min-width: 576px) {
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 15px;
  }
`;

export const ModalLabel = styled.label`
  display: block;
  margin-bottom: 3px;/
  color: #555;
  font-size: 0.9rem;

  @media (min-width: 576px) {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  height: 100px;
  resize: vertical;

  @media (min-width: 576px) {
    height: 80px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
  width: 100%;

  @media (min-width: 576px) {
    margin-top: 20px;
    width: auto;
  }
`;

export const CancelButton = styled.button`
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  padding: 8px 15px;
  background-color: #28a745; 
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #1e7e34;
  }
`;