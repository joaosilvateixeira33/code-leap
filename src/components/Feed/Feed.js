import "./styled.js"
import { ButtonGlobal, Overlay } from "../../globalStyles.js";
import { CreatePost, FeedContainer, FeedContent, FeedHeader } from "./styled.js";
import { useState } from "react";

export default function Feed({username}){
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [title, setTitle] = ('');
    const [content, setContent] = ('');

    const handleCreateClick = () => {
        if (!isButtonDisabled) {
            console.log("Teste - Creating post with title:", title, "and content:", content);
            setTitle("");
            setContent("");
            setIsButtonDisabled(true); 
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "title") {
        setTitle(value);
        } else if (name === "content") {
            setContent(value);
        }
        
        const isTitleEmpty = title ? title.trim() === '' : true;
        const isContentEmpty = content ? content.trim() === '' : true;
        setIsButtonDisabled(isTitleEmpty || isContentEmpty);
    }

    

    return(
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
                            value={title} 
                            placeholder="Hello world!" 
                            onChange={handleInputChange}
                        />
                        <label>Content</label>
                        <textarea 
                            placeholder="content here..." 
                            value={content}
                            onChange={handleInputChange}
                        ></textarea>
                        <ButtonGlobal type="submit"  disabled={isButtonDisabled}  onClick={handleCreateClick}>
                            Create
                        </ButtonGlobal>
                    </CreatePost>
                </FeedContent>
           </FeedContainer>
        </Overlay>
    );
}