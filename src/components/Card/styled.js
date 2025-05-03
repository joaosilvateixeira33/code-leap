import styled from "styled-components";

export const CardContainer = styled.div`

    border-radius: 16px;
    display: flex;
    flex-direction: column;
    width: 652px;
    margin-bottom: 10px;
    border: 1px solid #999999;
`;
    
export const CardHeader = styled.div`
    background-color: #7695ec;
    width: 100%;
    padding: 20px; 
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`;
    
export const CardHeaderTitle = styled.h3`
    color: #FFFFFF;
    margin: 0; 
    font-size: 1.2em; 
`;
    
export const CardIconsContainer = styled.div`
    display: flex;
    gap: 20px;
`;
    
export const CardHeaderIcons = styled.button`
    font-size: 25px;
    cursor: pointer;
    background: transparent;
    border: none;
    color: #ffffff;
`;
    
export const CardBody = styled.div`
    padding: 20px;
`;
    
export const CardBodyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: #777777;
    font-size: 0.9em;
    margin-bottom: 10px; 
    gap: 10px;
`;

export const CardBodyUser = styled.p`
    margin: 0;
    font-weight: bold;
`;

export const CardBodyHours = styled.p`
    margin: 0; 
`;

export const CardBodyContent = styled.p`
    line-height: 1.6; 
    margin-bottom: 10px;
    margin-top: 20px;
    white-space: pre-wrap;
`;