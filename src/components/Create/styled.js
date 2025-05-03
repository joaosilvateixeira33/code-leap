import styled from "styled-components";


export const CreateContainer = styled.div`
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 652px;
  height: 355px;
  padding: 20px;
  border-radius: 16px;
  gap: 10px;

  p {
    font-size: 22px;
    font-weight: 700;
  }

  label {
    font-size: 19px;
  }

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
