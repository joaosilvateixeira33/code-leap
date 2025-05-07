import "./styled.js";
import { Overlay } from "../../globalStyles.js";
import {
  FeedContainer,
  FeedContent,
  FeedHeader,
} from "./styled.js";

import Card from "../Card/Card.js";
import CreatePost from "../Create/CreatePost.js";

export default function Feed({ username, onLogout }) {
  return (
    <Overlay>
      <FeedContainer>
        <FeedHeader>
          <p>CodeLeap Network</p>

          <div>
            <p>Hello, {username}</p>
            <button onClick={onLogout}>Logout</button>
          </div>
        </FeedHeader>
        <FeedContent>
          <CreatePost/>
          <Card/>
        </FeedContent>
      </FeedContainer>
    </Overlay>
  );
}
