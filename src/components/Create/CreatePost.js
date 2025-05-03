import { useState } from "react";
import "./styled.js";
import { ButtonGlobal } from "../../globalStyles.js";
import { CreateContainer } from "./styled.js";

export default function CreatePost(){
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreateClick = () => {
        if (!isButtonDisabled) {
          console.log(`Title: ${title}, Content: ${content}`);
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

    return(
        <CreateContainer>
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
        </CreateContainer>
    )
}