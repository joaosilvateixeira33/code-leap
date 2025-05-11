import React, { useEffect, useState } from 'react';
import { Button, FormContainer, MobileConditionalButton, TextArea, DesktopButtonContainer } from "./styled";
import { IoMdSend } from "react-icons/io";

const CommentForm = ({ postId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        postId: postId,
        username: localStorage.getItem('currentUser') || 'Anonymous',
        created_at: new Date().toISOString(),
        id: Date.now(),
        text: commentText,
      };

      if (onCommentSubmit) {
        onCommentSubmit(newComment);
      }
      setCommentText('');
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder="write your Comment..."
          value={commentText}
          onChange={handleInputChange}
        />
        {isDesktop ? (
          <DesktopButtonContainer>
            <Button type="submit" disabled={commentText.trim() === ''}><IoMdSend /></Button>
          </DesktopButtonContainer>
        ) : (
          <MobileConditionalButton
            type="submit"
            hasText={commentText.trim() !== ''}
          >
            <IoMdSend />
          </MobileConditionalButton>
        )}
      </form>
    </FormContainer>
  );
};

export default CommentForm;