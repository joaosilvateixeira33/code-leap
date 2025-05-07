import {ListContainer, CommentItem} from "./styled"

const CommentList = () => {
    return (
      <ListContainer>
        <h3>Comments</h3>
        <CommentItem>
            <p>Hello world!!</p>
            <span>1 days ago</span>
        </CommentItem>
       
      </ListContainer>
    );
};
  
export default CommentList;