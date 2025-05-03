import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalLabel,
  ModalInput,
  ModalTextarea,
  ModalButtons,
  CancelButton,
  SaveButton,
} from './styled';

export default function EditModal({ isOpen, onClose, onSave, initialTitle = '', initialContent = '' }) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave({ title, content });
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}> {/* Impede que o clique no container feche o modal */}
        <ModalTitle>Edit Item</ModalTitle>
        <ModalLabel htmlFor="title">Title</ModalLabel>
        <ModalInput
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ModalLabel htmlFor="content">Content</ModalLabel>
        <ModalTextarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ModalButtons>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ModalButtons>
      </ModalContainer>
    </ModalOverlay>
  );
};