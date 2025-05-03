import "./styled.js";
import { ButtonGlobal, Overlay } from "../../globalStyles.js";
import {
  CreatePost,
  FeedContainer,
  FeedContent,
  FeedHeader,
} from "./styled.js";
import { useState } from "react";
import Card from "../Card/Card.js";

export default function Feed({ username }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [title, setTitle] = useState(""); // Inicialização CORRETA
  const [content, setContent] = useState(""); // Inicialização CORRETA

  const handleCreateClick = () => {
    if (!isButtonDisabled) {
      console.log(
        "Teste - Creating post with title:",
        title,
        "and content:",
        content
      );
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

    const isTitleEmpty = title === undefined || title.trim() === "";
    const isContentEmpty = content === undefined || content.trim() === "";
    setIsButtonDisabled(isTitleEmpty || isContentEmpty);
  };

  return (
    <Overlay>
      <FeedContainer>
        <FeedHeader>
          <p>CodeLeap Network</p>
        </FeedHeader>
        <FeedContent>
          <CreatePost>
            <p>What’s on your mind?</p>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Hello world!"
              onChange={handleInputChange}
            />
            <label>Content</label>
            <textarea
              placeholder="content here..."
              name="content"
              value={content}
              onChange={handleInputChange}
            ></textarea>
            <ButtonGlobal
              type="submit"
              disabled={isButtonDisabled}
              onClick={handleCreateClick}
            >
              Create
            </ButtonGlobal>
          </CreatePost>
          <Card></Card>
        </FeedContent>
      </FeedContainer>
    </Overlay>
  );
}
