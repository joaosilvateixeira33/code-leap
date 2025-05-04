import styled from "styled-components";

export const FeedContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 800px; 
  height: 100vh;
  min-heght: 10vh;
  margin: 0 auto; 
  padding: 20px 0; 

  @media (min-width: 768px) {
    width: 800px; 
    padding: 0; 
  }
`;

export const FeedHeader = styled.div`
  background-color: #7695ec;
  color: #ffffffff;
  width: 100%;
  height: 60px;
  padding: 15px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

export const FeedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: center;
  margin-top: 20px;
  gap: 20px;
`;