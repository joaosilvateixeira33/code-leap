import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 95%;
  max-width: 600px;
`;

export const CommentItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 5px;
  }

  span {
    font-size: 0.8rem;
    color: #777;
  }
`;