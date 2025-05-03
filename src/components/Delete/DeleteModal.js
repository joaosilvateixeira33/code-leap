import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalButtons,
  CancelButton,
  DeleteButton,
} from './styled';

export default function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Are you sure you want to delete this item?</ModalTitle>
        <ModalButtons>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <DeleteButton onClick={onConfirm}>Delete</DeleteButton>
        </ModalButtons>
      </ModalContainer>
    </ModalOverlay>
  );
};

