import "./styled.js"
import { Overlay } from "../../globalStyles.js";
import { FeedContainer, FeedHeader } from "./styled.js";

export default function Feed({username}){
    return(
        <Overlay>
           <FeedContainer>
                <FeedHeader>
                    <p>CodeLeap Network</p>
                </FeedHeader>
                <div>
                    <h2>What’s on your mind?</h2>
                    <label>Title</label>
                    <input type="text" placeholder="Hello world!"></input>
                    <label>Content</label>
                    <textarea></textarea>
                </div>
           </FeedContainer>
        </Overlay>
    );
}