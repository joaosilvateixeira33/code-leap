import styled from "styled-components";

export const CreateContainer = styled.div`
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 95%;
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
    width: 96%;
    font-size: 17px;
    color: #777777;
    font-weight: 400;
  }

  textarea {
    height: 83px;
    resize: none;
  }

  @media (min-width: 768px) {
    align-items: baseline; 
    width: 652px;
    height: 355px;
    gap: 10px;
    p {
      font-size: 22px;
      text-align: left;
    }
    label {
      font-size: 19px;
    }
    textarea {
      height: 83px;
      resize: none;
    }
  }
`;
