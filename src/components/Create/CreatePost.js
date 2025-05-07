import { useState } from "react";
import { ButtonGlobal } from "../../globalStyles.js";
import { CreateContainer } from "./styled.js";

export default function CreatePost({ onPostCreated }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState(() => localStorage.getItem('currentUser'));

  const handleCreateClick = () => {
    if (!isButtonDisabled) {
      const newPostData = {
        username: username,
        title: title,
        content: content,
      };

      console.log("Simulando chamada POST para /api/careers/ com dados:", newPostData);

      const fakeResponse = {
        id: Date.now(), 
        ...newPostData,
        created_datetime: new Date().toISOString(),
      };

      console.log("Simulação de resposta da API:", fakeResponse);
      
      if (onPostCreated) {
        onPostCreated(fakeResponse);
      }

      setTitle("");
      setContent("");
      setIsButtonDisabled(true);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }

    const isTitleEmpty = !title.trim();
    const isContentEmpty = !content.trim();
    setIsButtonDisabled(isTitleEmpty || isContentEmpty);
  };

  return (
    <CreateContainer>
      <p>What’s on your mind?</p>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        placeholder="Hello world!"
        onChange={handleInputChange}
      />
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        placeholder="content here..."
        name="content"
        value={content}
        onChange={handleInputChange}
      ></textarea>
      <ButtonGlobal
        type="button" // Mudado para "button" para evitar submit do formulário padrão
        disabled={isButtonDisabled}
        onClick={handleCreateClick}
      >
        Create
      </ButtonGlobal>
    </CreateContainer>
  );
}