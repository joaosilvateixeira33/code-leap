import "./styled.js";
import { Overlay } from "../../globalStyles.js";
import {
  FeedContainer,
  FeedContent,
  FeedHeader,
} from "./styled.js";

import Card from "../Card/Card.js";
import CreatePost from "../Create/CreatePost.js";

export default function Feed({ username }) {
  return (
    <Overlay>
      <FeedContainer>
        <FeedHeader>
          <p>CodeLeap Network</p>
        </FeedHeader>
        <FeedContent>
          <CreatePost/>
          <Card/>
        </FeedContent>
      </FeedContainer>
    </Overlay>
  );
}
