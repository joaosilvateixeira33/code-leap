import styled from "styled-components";

export const FeedContainer = styled.div`
  background-color: #ffffff;
  width: 100vw;
  max-width: 800px; 
  height: 100vh;
  margin: 0 auto; 
  overflow-y: auto; 

  @media (min-width: 768px) {
    width: 800px; 
    padding: 0; 
    height: 100vh;
  }
`;

export const FeedHeader = styled.div`
  background-color: #7695ec;
  color: #ffffffff;
  height: auto;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;

  @media (min-width: 576px) { 
    height: 60px; 
    font-size: 1.25rem;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button{
    padding: 10px;
    background-color: transparent;
    color: #ffffff;
    border: none;
    font-size: 15px;
    cursor: pointer;
  }
`;

export const FeedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  padding: 0 15px;
  gap: 20px;
  width: 95%; 
  max-width: 800px;
  flex-grow: 1;
`;