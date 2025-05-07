import React, { useState, useEffect } from 'react';
import { Button, FormContainer, MobileConditionalButton, TextArea, DesktopButtonContainer } from "./styled";
import { IoMdSend } from "react-icons/io";

const CommentForm = () => {
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
      console.log('Comentário enviado:', commentText);
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