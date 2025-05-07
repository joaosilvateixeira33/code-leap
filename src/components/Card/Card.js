import CommentForm from "../CommentForm/CommentForm";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import {
  CardBody,
  CardBodyContent,
  CardBodyHeader,
  CardBodyHours,
  CardBodyUser,
  CardContainer,
  CardHeader,
  CardHeaderIcons,
  CardHeaderTitle,
  CardIconsContainer,
} from "./styled";
import { useState } from "react";
import EditModal from "../Edit/EditModal";
import DeleteModal from "../Delete/DeleteModal";
import LikeButton from "../Like/LikeButton";
import CommentList from "../CommentsList/CommentsList";

export default function Card({ post, isOwnPost, onDelete, onEdit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
    if (onEdit && post) {
      onEdit(post);
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (onDelete && post) {
      onDelete(post.id);
    }
    setIsDeleteModalOpen(false);
  };

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
    <CardContainer>
      <CardHeader>
        <CardHeaderTitle>{post.title}</CardHeaderTitle>
        {isOwnPost && (
          <CardIconsContainer>
            <CardHeaderIcons onClick={handleDeleteClick}>
              <MdDeleteForever />
            </CardHeaderIcons>
            <CardHeaderIcons onClick={handleEditClick}>
              <AiOutlineEdit />
            </CardHeaderIcons>
          </CardIconsContainer>
        )}
      </CardHeader>
      <CardBody>
        <CardBodyHeader>
          <CardBodyUser>@{post.username}</CardBodyUser>
          <CardBodyHours>{getTimeAgo(post.created_datetime)}</CardBodyHours>
        </CardBodyHeader>
        <CardBodyContent>
          {post.content}
        </CardBodyContent>
        <LikeButton postId={post.id} initialLiked={false} initialCount={0} />
        <CommentList postId={post.id} />
        <CommentForm postId={post.id} />
      </CardBody>
      {isModalOpen && post && (
        <EditModal isOpen={isModalOpen} onClose={handleCloseModal} initialPost={post} />
      )}

      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
          itemType="post"
        />
      )}
    </CardContainer>
  );
}