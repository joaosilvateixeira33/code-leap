import styled from "styled-components";

export const FeedContainer = styled.div`
  background-color: #ffffff;
  width: 800px;
  min-height: 100vh;
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