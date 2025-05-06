import { Button, FormContainer, TextArea } from "./styled";


const CommentForm = () => {
    return (
      <FormContainer>
        <form>
          <TextArea
            placeholder="write your Comment..."
          />
          <Button type="submit">Comment</Button>
        </form>
      </FormContainer>
    );
};
  
export default CommentForm;