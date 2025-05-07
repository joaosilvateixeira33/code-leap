import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 693px; 
  margin-bottom: 15px;
  border: 1px solid #999999;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box; 
`;

export const CardHeader = styled.div`
  background-color: #7695ec;
  width: 100%;
  padding: 15px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const CardHeaderTitle = styled.h3`
  color: #FFFFFF;
  margin: 0;
  font-size: 1rem; 

  @media (min-width: 576px) {
    font-size: 1.2em;
  }
`;

export const CardIconsContainer = styled.div`
  display: flex;
  gap: 10px; 
`;

export const CardHeaderIcons = styled.button`
  font-size: 1.5rem; 
  cursor: pointer;
  background: transparent;
  border: none;
  color: #ffffff;

  @media (min-width: 576px) {
    font-size: 25px; 
  }
`;

export const CardBody = styled.div`
  padding: 15px;
  box-sizing: border-box;
`;

export const CardBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #777777;
  font-size: 0.8rem; 
  margin-bottom: 8px;
  gap: 5px;
  align-items: center;

  @media (min-width: 576px) {
    font-size: 0.9em;
    margin-bottom: 10px;
    gap: 10px;
  }
`;

export const CardBodyUser = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem; 

  @media (min-width: 576px) {
    font-size: 1em;
  }
`;

export const CardBodyHours = styled.p`
  margin: 0;
  font-size: 0.8rem;

  @media (min-width: 576px) {
    font-size: 0.9em;
  }
`;

export const CardBodyContent = styled.p`
  line-height: 1.5;
  margin-bottom: 8px; 
  margin-top: 15px;
  white-space: pre-wrap;
  font-size: 0.9rem; 

  @media (min-width: 576px) {
    line-height: 1.6;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 1em;
  }
`;