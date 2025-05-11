import "./styled.js";
import { Overlay } from "../../globalStyles.js";
import {
  FeedContainer,
  FeedContent,
  FeedHeader,
  HeaderOptions
} from "./styled.js";

import Card from "../Card/Card.js";
import CreatePost from "../Create/CreatePost.js";
import { useState, useEffect} from "react";

export default function Feed({ username, onLogout }) {

  const [posts, setPosts] = useState([]);
  const [commentsData, setCommentsData] = useState([
    { id: 101, postId: 1, username: 'ComentadorA', text: 'Comentário inicial no post 1!', created_at: '2025-05-08T10:00:00Z' },
    { id: 102, postId: 2, username: 'ComentadorB', text: 'Primeiro comentário no post 2.', created_at: '2025-05-07T12:00:00Z' },
    { id: 103, postId: 1, username: 'ComentadorC', text: 'Outro comentário no post 1.', created_at: '2025-05-09T15:00:00Z' },
  ]);

  useEffect(() => {
    const fakeInitialPosts = [
      { id: 1, username: 'Teste1', title: 'Primeiro Post', content: 'Conteúdo do primeiro post...', created_datetime: '2025-05-07T10:00:00Z' },
      { id: 2, username: 'Teste2', title: 'Segundo Post', content: 'Conteúdo do segundo post...', created_datetime: '2025-05-06T18:00:00Z' },
    ];
    setPosts(fakeInitialPosts.sort((a, b) => new Date(b.created_datetime) - new Date(a.created_datetime)));
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (postIdToDelete) => {
    setPosts(posts.filter(post => post.id !== postIdToDelete));
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map(post =>
      post.id === updatedPost.id ? { ...post, title: updatedPost.title, content: updatedPost.content } : post
    ));
  };

  return (
    <Overlay>
      <FeedContainer>
        <FeedHeader>
          <p>CodeLeap Network</p>
          <HeaderOptions>
            <p>Hello, {username}</p>
            <button onClick={onLogout}>Logout</button>
          </HeaderOptions>
        </FeedHeader>
        <FeedContent>
          <CreatePost onPostCreated={handlePostCreated} username={username}/>
          {posts.map(post => {
            const initialCommentsForPost = commentsData.filter(comment => comment.postId === post.id);
            return (
              <Card
                key={post.id}
                post={post}
                isOwnPost={post.username === username}
                onDelete={handleDeletePost}
                onEdit={handleUpdatePost}
                initialComments={initialCommentsForPost}
              />
            );
          })}
        </FeedContent>
      </FeedContainer>
    </Overlay>
  );
}