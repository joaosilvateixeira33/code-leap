import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { LikeButtonWrapper, LikeCount } from "./styled";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <LikeButtonWrapper onClick={handleClick}>
      <BiSolidLike size={24} color={liked ? "blue" : "black"} />
      <LikeCount>{count}</LikeCount>
    </LikeButtonWrapper>
  );
}

export default LikeButton;
