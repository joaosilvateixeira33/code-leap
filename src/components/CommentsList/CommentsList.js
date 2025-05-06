import {ListContainer, CommentItem} from "./styled"

const CommentList = () => {
    return (
      <ListContainer>
        <h3>Comentários</h3>
        <CommentItem>
            <p>Este é um comentario teste</p>
            <span>1 dia</span>
        </CommentItem>
      </ListContainer>
    );
};
  
export default CommentList;