import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  width: 95%;
  max-width: 600px;

  form{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 58px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #777;
  border-radius: 10px;
  font-size: 1rem;
  resize: none;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: block;

  &:hover {
    background-color: #0056b3;
  }
`;

export const showOnMobile = `
  @media (max-width: 767px) {
    display: block;
  }
`;

export const MobileConditionalButton = styled(Button)`
  display: none;

  @media (max-width: 767px) {
    display: ${props => props.hasText ? 'block' : 'none'};
  }
`;

export const DesktopButtonContainer = styled.div`
  display: none; /* Esconde por padrão */

  @media (min-width: 768px) {
    display: block;
  }
`;