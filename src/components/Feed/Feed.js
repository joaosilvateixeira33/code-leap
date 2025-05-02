import "./styled.js"
import { ButtonGlobal, Overlay } from "../../globalStyles.js";
import { CreatePost, FeedContainer, FeedContent, FeedHeader } from "./styled.js";

export default function Feed({username}){
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
                        <input type="text" placeholder="Hello world!"></input>
                        <label>Content</label>
                        <textarea placeholder="content here..."></textarea>
                        <ButtonGlobal type="submit">
                            Create
                        </ButtonGlobal>
                    </CreatePost>
                </FeedContent>
           </FeedContainer>
        </Overlay>
    );
}