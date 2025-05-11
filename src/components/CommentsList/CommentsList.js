import { ListContainer, CommentItem } from "./styled";

const CommentList = ({ comments }) => {
  
  console.log('Prop comments recebida no CommentList:', comments);

  const getTimeAgo = (datetimeString) => {
    const createdAt = new Date(datetimeString);
    const now = new Date();
    const differenceInMillis = now.getTime() - createdAt.getTime();
    const differenceInMinutes = Math.floor(differenceInMillis / (1000 * 60));

    if (differenceInMinutes < 1) {
      return 'just now';
    } else if (differenceInMinutes < 60) {
      return `${differenceInMinutes} minutes ago`;
    } else if (differenceInMinutes < 60 * 24) {
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      return `${differenceInHours} hours ago`;
    } else {
      const differenceInDays = Math.floor(differenceInMinutes / (60 * 24));
      return `${differenceInDays} days ago`;
    }
  };

  return (
    <ListContainer>
      <h3>Comments</h3>
      {comments && comments.length > 0 ? (
        comments.map(comment => (
          <CommentItem key={comment.id}>
            <p>{comment.text} - <span>@{comment.username}</span></p>
            <span>{getTimeAgo(comment.created_at)}</span>
          </CommentItem>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </ListContainer>
  );
};

export default CommentList;